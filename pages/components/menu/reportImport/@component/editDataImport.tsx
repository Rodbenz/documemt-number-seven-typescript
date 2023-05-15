import React from 'react'
import { Button, Grid, Stack, Typography } from '@mui/material'
import { useCartContext } from '@/context/Cartcontext';
import AutocompleteAgency from '../../../@conponents/Autocopletes/AutocompleteAgency';
import AutocompleteType from '../../../@conponents/Autocopletes/AutocompleteType';
import AutocompleteListData from '../../../@conponents/Autocopletes/AutocompleteListData';
import TextFieldTypefile from '../../../@conponents/TextFieldTypefile';
import MyDatePicker from '../../../@conponents/MyDatePicker';
import { setGeometrys } from '@/libs/readfilezip';
import { InsPracels, InsPracelsAll } from '@/service/ins';
import { readDataPracelShp, readDataPracelShpAll, readDataPracelShpEdit } from '@/libs/readData';
import { SnackbarSet } from '@/pages/components/@conponents/popup/SnackbarSet';
import { confirmDialog } from '@/pages/components/@conponents/popup/ComfirmDialog';

export default function EditDataImport() {
    const { dataEdit, handleCloseDialogEdit } = useCartContext();
    const [valueGov, setValueGov] = React.useState<any>(null);
    const [valueType, setValueType] = React.useState<any>(null);
    const [valueCode, setValueCode] = React.useState<any>(null);
    const [dataPracel, setDataPracel] = React.useState<any[]>([]);
    const [fileName, setFilename] = React.useState<any>(null);
    const [valueDate, setValueDate] = React.useState<string | null>(null);

    const handleOnChangeGov = (value: any) => {
        setValueGov(value)
    }
    const handleOnChangeType = (value: any) => {
        setValueType(value)
    }
    const handleOnChangeCode = (value: any) => {
        setValueCode(value)
    }
    const handleOnChangeFile = (value: any) => {
        setDataPracel(value)
    }
    const handleOnChangeDate = (value: any) => {
        setValueDate(value)
    }
    const handleOnSubmit = () => {
        if (dataPracel.length == 0) {
            SnackbarSet('กรุณาเลือกไฟล์', 'error', 3000);
            return
        }
        let data: any = new Object();
        data.GOV_TYPE = valueGov != null ? String(valueGov.GOV_TYPE) : '';
        data.GOV_NAME = valueGov != null ? valueGov.GOV_NAME : '';
        data.TYPE_CODE = valueType != null ? String(valueType.TYPE_CODE) : '';
        data.TYPE_NAME = valueType != null ? valueType.TYPE_NAME : '';
        data.SEMI_CODE = valueCode != null ? String(valueCode.SEMI_CODE) : '';
        data.SEMI_NAME = valueCode != null ? valueCode.SEMI_NAME : '';
        data.CEATE_DATE = valueDate != null ? valueDate : '';
        data.FILE_NAME = fileName != null ? fileName : '';

        confirmDialog.createDialog('คุณต้องการบันทึกใช่หรือไม่','แจ้งเตือน',()=>(handleOnSaveEdit(data)))
    }
    const handleOnSaveEdit = async (data: any) => {
        let typefile = fileName.split('.').pop();
        let tableName = dataEdit.TABLE_NAME;
        if(dataEdit[0].TYPE_CODE == "1" && typefile == 'zip'){
        let newdata = readDataPracelShpEdit(dataPracel,dataEdit, valueDate);
        await insPracel(newdata)
        }
        if(dataEdit[0].TYPE_CODE == '2' || dataEdit[0].TYPE_CODE == '3' ) {
            if(typefile == 'xlsx'){
            let newdata = await readDataPracelShpAll(dataPracel, dataEdit, valueDate);
            await insDataToFileExcelAndText(newdata, tableName) 
            }
        }
    }

    const insPracel = async (datasend: any) => {
        try {
            let res = await InsPracels(datasend)
            console.log(res,'insPracel');
            if(res.length > 0){
                SnackbarSet('บันทึกสำเร็จ', 'success', 3000);
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
            }
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <Grid container spacing={2} py={2}>
                <Grid item xs={12} sm={6} md={6} >
                    <Typography variant="subtitle1" component="div" gutterBottom>หน่วยงาน</Typography>
                    <AutocompleteAgency onchange={handleOnChangeGov} dataEdit={dataEdit} sizes='small' />
                </Grid>
                <Grid item xs={12} sm={6} md={6} >
                    <Typography variant="subtitle1" component="div" gutterBottom>ประเภทข้อมูล</Typography>
                    <AutocompleteType valueType={dataEdit[0]} onchange={handleOnChangeType} datEdit={dataEdit} size='small' />
                </Grid>
                <Grid item xs={12} sm={6} md={6} >
                    <Typography variant="subtitle1" component="div" gutterBottom>ชื่อรายการข้อมูล</Typography>
                    <AutocompleteListData valueType={dataEdit[0]} onchange={handleOnChangeCode} dataEdit={dataEdit} size='small' />
                </Grid>
                <Grid item xs={12} sm={6} md={6} >
                    <Typography variant="subtitle1" component="div" gutterBottom>{dataEdit.length > 0 ? dataEdit[0]?.TYPE_CODE == 1 ? 'อัปโหลดไฟล์ (zip)' : 'อัปโหลดไฟล์ (text,excel)' : 'อัปโหลดไฟล์ (text,excel,shp)'}</Typography>
                    <TextFieldTypefile onChangeDataPracel={handleOnChangeFile} setFilename={setFilename}/>
                </Grid>
                <Grid item xs={12} sm={6} md={6} >
                    <Typography variant="subtitle1" component="div" gutterBottom>วันที่เริ่มนำเข้า</Typography>
                    <MyDatePicker dataEdit={dataEdit}  onChange={handleOnChangeDate}/>
                </Grid>
                <Grid item xs={12} sm={12} md={12} >
                    <Stack direction={'row'} justifyContent={'end'} alignItems={'center'} spacing={2}>
                        <Button onClick={handleOnSubmit} variant="contained" sx={{ backgroundColor: '#d7a203' }}>บันทึก</Button>
                        <Button onClick={handleCloseDialogEdit} variant='contained' color='error'>ยกเลิก</Button>
                    </Stack>
                </Grid>
            </Grid>
        </div>
    )
}
