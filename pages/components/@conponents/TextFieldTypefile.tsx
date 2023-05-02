import React, { useState, useRef } from 'react';
import { TextField, Button, Grid, Stack, Tooltip } from '@mui/material';
import BackupIcon from '@mui/icons-material/Backup';
import { styled } from '@mui/material/styles';

interface ITextFieldTypefile { }


const TextFieldTypefile = (props: ITextFieldTypefile) => {
    const inputFile = useRef<HTMLInputElement>(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const [filedata, setFiledata] = useState<false>(false);

    const handleFileChange = (event: any) => {
        // try {
        setSelectedFile(event.target.files[0].name);
        let fileData: any = {
            filename: event.target.files[0].name,
            file: event.target.files[0]
        }
        console.log("fileData", fileData);
        setFiledata(fileData)
        event.target.value = null;
        // } catch {
        //     setSelectedFile('')
        //     setFiledata(false)

        // }
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
        <Grid sx={{width:"100%"}}>
            <Stack direction="row" spacing={0}>
                <div style={{ width: '100%', position: 'relative' }}>
                    <input
                        type="file"
                        onChange={handleFileChange}
                        ref={inputFile}
                        style={{ display: "none" }}
                        accept={".text,.pdf,.shp"}
                    />
                    <TextField
                        disabled
                        fullWidth
                        size='medium'
                        label={selectedFile == null ? 'กรุณาอัปโหลดไฟล์' : selectedFile}
                    />
                </div>
                <div style={{ position: 'relative'}}>
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
