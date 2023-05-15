import React from 'react'
import { Button, Grid, Stack, Typography } from '@mui/material'
import { useCartContext } from '@/context/Cartcontext';
import AutocompleteAgency from '../../../@conponents/Autocopletes/AutocompleteAgency';
import AutocompleteType from '../../../@conponents/Autocopletes/AutocompleteType';
import AutocompleteListData from '../../../@conponents/Autocopletes/AutocompleteListData';
import TextFieldTypefile from '../../../@conponents/TextFieldTypefile';
import MyDatePicker from '../../../@conponents/MyDatePicker';
import { InsImpInfo, InsPracels, InsPracelsAll } from '@/service/ins';
import { setGeometrys } from '@/libs/readfilezip';
import { readDataPracelShp, readDataPracelShpAll } from '@/libs/readData';
import { SnackbarSet } from '@/pages/components/@conponents/popup/SnackbarSet';
import { confirmDialog } from '@/pages/components/@conponents/popup/ComfirmDialog';

type IsCheck = {
    isCheckGov: boolean;
    isCheckType: boolean;
    isCheckCode: boolean;
    isCheckFile: boolean;
    setIsCheckGov: (value: boolean) => void;
    setIsCheckType: (value: boolean) => void;
    setIsCheckCode: (value: boolean) => void;
    setIsCheckFile: (value: boolean) => void;
}

const useIsCheck = (): IsCheck => {
    const [isCheckGov, setIsCheckGov] = React.useState(false);
    const [isCheckType, setIsCheckType] = React.useState(false);
    const [isCheckCode, setIsCheckCode] = React.useState(false);
    const [isCheckFile, setIsCheckFile] = React.useState(false);
    return {
        isCheckGov,
        isCheckType,
        isCheckCode,
        isCheckFile,
        setIsCheckGov,
        setIsCheckType,
        setIsCheckCode,
        setIsCheckFile,
    }
};

export default function AddDataImport() {
    const { handleCloseDialog, datasandSrarch } = useCartContext()
    const [valueGov, setValueGov] = React.useState<any>(null);
    const [valueType, setValueType] = React.useState<any>(null);
    const [valueCode, setValueCode] = React.useState<any>(null);
    const [dataPracel, setDataPracel] = React.useState<any[]>([]);
    const [fileName, setFilename] = React.useState<string | null>(null);
    const [valueDate, setValueDate] = React.useState<string | null>(null);
    const [typesFile, setTypesFile] = React.useState<any>('');

    const { isCheckGov, isCheckType, isCheckCode, isCheckFile, setIsCheckGov, setIsCheckType, setIsCheckCode, setIsCheckFile } = useIsCheck();

    const handleOnChangeGov = (value: any) => {
        setValueGov(value)
        setIsCheckGov(false)
        setValueType(null)
        setValueCode(null)
    }
    const handleOnChangeType = (value: any) => {
        setValueType(value)
        setIsCheckType(false)
        setValueCode(null)
    }
    const handleOnChangeCode = (value: any) => {
        setValueCode(value)
        setIsCheckCode(false)
    }
    const handleOnChangeFile = async (el: any) => {
        await setDataPracel(el)
        setIsCheckFile(false)
        console.log(el);

    }
    // const handleOnChangeDate = (value: any) => {
    //     setValueDate(value)
    // }

    const handleOnSubmit = async () => {
        if (valueGov == null) {
            SnackbarSet('กรุณาเลือกหน่วยงาน', 'error', 3000);
            setIsCheckGov(true)
            return
        }
        if (valueType == null) {
            SnackbarSet('กรุณาเลือกประเภทข้อมูล', 'error', 3000);
            setIsCheckType(true)
            return
        }
        if (valueCode == null) {
            SnackbarSet('กรุณาเลือกชื่อรายการข้อมูล', 'error', 3000);
            setIsCheckCode(true)
            return
        }
        if (dataPracel.length == 0) {
            SnackbarSet('กรุณาเลือกไฟล์', 'error', 3000);
            setIsCheckFile(true)
            return
        }
        let data: any = new Object();
        data.GOV_TYPE = valueGov != null ? String(valueGov.GOV_TYPE) : '';
        data.GOV_NAME = valueGov != null ? valueGov.GOV_NAME : '';
        data.TYPE_CODE = valueType != null ? String(valueType.TYPE_CODE) : '';
        data.TYPE_NAME = valueType != null ? valueType.TYPE_NAME : '';
        data.SEMI_CODE = valueCode != null ? String(valueCode.SEMI_CODE) : '';
        data.SEMI_NAME = valueCode != null ? valueCode.SEMI_NAME : '';
        // data.CEATE_DATE = valueDate != null ? valueDate : '';
        data.FILE_NAME = fileName != null ? fileName : '';
        data.TABLE_NAME = valueCode != null ? valueCode.TABLE_NAME : '';

        confirmDialog.createDialog('คุณต้องการบันทึกใช่หรือไม่', 'แจ้งเตือน!', () => {
            handleOnSaveAdd(data)
        })
    }

    const handleOnSaveAdd = async (data: any) => {
        let typefile = data.FILE_NAME.split('.').pop();
        let tableName = data.TABLE_NAME.split('.').pop();
        try {
            let req = await InsImpInfo(data)
            if (req.length > 0) {
                if (data.TYPE_CODE == '1' || data.TYPE_CODE == '5') {
                    if (typefile == 'zip') {
                        let newdata = await readDataPracelShp(dataPracel, req, valueDate);
                        await insPracel(newdata)
                    }
                }
                if (data.TYPE_CODE == '2' || data.TYPE_CODE == '3' || data.TYPE_CODE == '4') {
                    if (typefile == 'xlsx' || 'txt') {
                        let newdata = await readDataPracelShpAll(dataPracel, req, valueDate);
                        console.log(newdata, 'newdata');

                        await insDataToFileExcelAndText(newdata, tableName)
                    }
                }
            }

        } catch (error) {
            console.log(error);
        }
    }
    const insPracel = async (datasend: any) => {
        try {
            let res = await InsPracels(datasend)
            console.log(res, 'insPracel');
            if (res.length > 0) {
                SnackbarSet('บันทึกสำเร็จ', 'success', 3000);
                handleCloseDialog()
            }
        } catch (error) {
            console.log(error);
        }

    }

    async function insDataToFileExcelAndText(data: any, tableName: string) {

        try {
            let res = await InsPracelsAll(data, tableName)
            console.log(res, 'insPracelAll');
            if (res.length > 0) {
                SnackbarSet('บันทึกสำเร็จ', 'success', 3000);
                handleCloseDialog()
            }
        } catch (error) {
            console.log(error);
        }
    }

    React.useEffect(() => {
        let typeFile = valueType != null ? valueType?.TYPE_CODE == 1 || valueType?.TYPE_CODE == 5 ? '.zip' : '.xlsx,.txt' : '.zip.xlsx,.txt';
        setTypesFile(typeFile)
    }, [valueType])


    return (
        <div>
            <Grid container spacing={2} py={2}>
                <Grid item xs={12} sm={6} md={6} >
                    <Typography variant="subtitle1" component="div" gutterBottom>หน่วยงาน<span style={{ color: 'red' }}>*</span></Typography>
                    <AutocompleteAgency values={valueGov} onchange={handleOnChangeGov} dataFix={datasandSrarch} sizes='small' ischeck={isCheckGov} nameLabel='กรุณาเลือกหน่วยงาน' />
                </Grid>
                <Grid item xs={12} sm={6} md={6} >
                    <Typography variant="subtitle1" component="div" gutterBottom>ประเภทข้อมูล<span style={{ color: 'red' }}>*</span></Typography>
                    <AutocompleteType values={valueType} valueType={valueGov} onchange={handleOnChangeType} dataFix={datasandSrarch} size='small' ischeck={isCheckType} nameLabel='กรุณาเลือกประเภทข้อมูล' />
                </Grid>
                <Grid item xs={12} sm={6} md={6} >
                    <Typography variant="subtitle1" component="div" gutterBottom>ชื่อรายการข้อมูล<span style={{ color: 'red' }}>*</span></Typography>
                    <AutocompleteListData values={valueCode} valueType={valueType} onchange={handleOnChangeCode} dataFix={datasandSrarch} size='small' ischeck={isCheckCode} nameLabel='กรุณาเลือกชื่อรายการข้อมูล' />
                </Grid>
                <Grid item xs={12} sm={6} md={6} >
                    <Typography variant="subtitle1" component="div" gutterBottom>{valueType != null ? valueType?.TYPE_CODE == 1 || valueType?.TYPE_CODE == 5 ? 'อัปโหลดไฟล์ (zip)' : 'อัปโหลดไฟล์ (text,excel)' : 'อัปโหลดไฟล์ (text,excel,shp)'}<span style={{ color: 'red' }}>*</span></Typography>
                    <TextFieldTypefile onChangeDataPracel={handleOnChangeFile} setFilename={setFilename} ischeck={isCheckFile} typesFile={typesFile} />
                </Grid>
                {/* <Grid item xs={12} sm={6} md={6} >
                    <Typography variant="subtitle1" component="div" gutterBottom>วันที่เริ่มนำเข้า</Typography>
                    <MyDatePicker onChange={handleOnChangeDate} />
                </Grid> */}
                <Grid item xs={12} sm={12} md={12} >
                    <Stack direction={'row'} justifyContent={'end'} alignItems={'center'} spacing={2}>
                        <Button onClick={handleOnSubmit} variant="contained" sx={{ backgroundColor: '#d7a203' }}>บันทึก</Button>
                        <Button onClick={handleCloseDialog} variant='contained' color='error'>ยกเลิก</Button>
                    </Stack>
                </Grid>
            </Grid>
        </div>
    )
}
