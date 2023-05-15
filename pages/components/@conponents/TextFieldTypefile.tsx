import React, { useState, useRef } from 'react';
import { Box, TextField, Button, Grid, Stack, Tooltip, FormControl, InputLabel } from '@mui/material';
import BackupIcon from '@mui/icons-material/Backup';
import { styled } from '@mui/material/styles';
import { readDataAll, readFileChangeZip } from '@/libs/readfilezip';
import { AnyAaaaRecord } from 'dns';
import { CheckFormate, SplitDataTypeFile } from '@/libs/dataControl';
import { readDataPracelShp } from '@/libs/readData';
import { SnackbarSet } from './popup/SnackbarSet';

interface ITextFieldTypefile {
    setFilename?: (val: string) => void;
    onChangeDataPracel?: (obj: any) => void;
    ischeck?: boolean;
    typesFile?: string;
}


const TextFieldTypefile = ({ setFilename, onChangeDataPracel, ischeck, typesFile }: ITextFieldTypefile) => {
    const inputFile = useRef<HTMLInputElement>(null);
    const [selectedFile, setSelectedFile] = useState('');
    const [filedata, setFiledata] = useState<false>(false);

    const handleFileChange = async (event: any) => {
        try {
            let datatypefile = SplitDataTypeFile(typesFile);
            let fileName_ = event.target.files[0].name.split('.').pop();
            if (!datatypefile.includes(fileName_)) {
                SnackbarSet('กรุณาเลือกไฟล์ ' + typesFile, 'error', 3000);
                setSelectedFile('')
                onChangeDataPracel && onChangeDataPracel([])
                return false;
            }
            let file = event.target.files[0];
            let dataPracel = await readDataAll(file)
            console.log(dataPracel, 'dataPracel');

            if (dataPracel == undefined) {
                SnackbarSet('ฟอร์แมตไฟล์ไม่ตรง', 'error', 3000);
                setSelectedFile('')
                onChangeDataPracel && onChangeDataPracel([])
                return false;
            }
            if(fileName_ == 'zip'){
                let data = await readDataPracelShp(dataPracel, '', '')           
                if(CheckFormate(data) == false){
                    SnackbarSet('ฟอร์แมตไฟล์ไม่ตรง', 'error', 3000);
                    setSelectedFile('')
                    onChangeDataPracel && onChangeDataPracel([])
                    return false;
                }
            }
            if (fileName_ == 'xlsx' || fileName_ == 'txt') {
                if(CheckFormate(dataPracel) == false){
                    SnackbarSet('ฟอร์แมตไฟล์ไม่ตรง', 'error', 3000);
                    setSelectedFile('')
                    onChangeDataPracel && onChangeDataPracel([])
                    return false;
                }
            }

            setFilename && await setFilename(event.target.files[0].name)
            setSelectedFile(event.target.files[0].name);
            onChangeDataPracel && await onChangeDataPracel(dataPracel)
            event.target.value = null;
        } catch(e) {
            setSelectedFile('')
            setFiledata(false)
            console.log(e);
        }
    };

    const startUploadFile = () => {
        // if (value == '') {
        // //   SnackbarSet("กรุณาพิมพ์ชื่อประเภทเอกสารคำร้อง", "error")
        //   return false;
        // }
        if (inputFile.current) {
            inputFile.current.click();
        }
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        // Do something with the selected file...
    };



    return (
        <Grid sx={{ width: "100%" }}>
            <Stack direction="row" spacing={0}>
                <div style={{ width: '100%', position: 'relative' }}>
                    <input
                        type="file"
                        onChange={handleFileChange}
                        ref={inputFile}
                        style={{ display: "none" }}
                        accept={typesFile}
                    />
                    <TextField
                        disabled
                        fullWidth
                        size='medium'
                        label={selectedFile == '' ? 'กรุณาอัปโหลดไฟล์' : selectedFile}
                        error={ischeck}
                    />
                </div>
                <div style={{ position: 'relative' }}>
                    <Tooltip title="กรุณาอัปโหลดไฟล์">
                        <Button
                            variant={"text"}
                            size={"medium"}
                            onClick={() => startUploadFile()}
                        >
                            <BackupIcon sx={{ marginTop: 1 }} />
                        </Button>
                    </Tooltip>
                </div>
            </Stack>
        </Grid>
    );
};

export default TextFieldTypefile;
