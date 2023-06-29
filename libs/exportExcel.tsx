import * as Excel from "exceljs";
import { saveAs } from 'file-saver';

export function exportExcel(colum: any, dataList: any, type: number) {
    console.log('exportExcel', colum, dataList, type);

    if (type == 1) {
        exportExcel1(dataList)
    }
    if (type == 2) {
        exportExcel2(dataList)
    }
    if (type == 3) {
        exportExcel3(dataList)
    }
    if (type == 4) {
        exportExcel4(dataList)
    }
}

async function exportExcel1_bak(dataList: any) {
    const fileName = 'ข้อมูลแปลงที่ดิน';

    const workbook = new Excel.Workbook();
    const worksheet = workbook.addWorksheet("Document");

    worksheet.mergeCells("A1", "A2");
    worksheet.getCell("A1").value = "ลำดับ";
    worksheet.getCell("A1").alignment = { vertical: 'middle', horizontal: 'center' };
    worksheet.getCell("A1").font = { bold: true };
    worksheet.getRow(1).height = 22.00;

    worksheet.mergeCells("B1", "B2");
    worksheet.getCell("B1").value = "ประเภทรูปแปลงที่ดิน";
    worksheet.getCell("B1").alignment = { vertical: 'middle', horizontal: 'center' };
    worksheet.getCell("B1").font = { bold: true };
    worksheet.getRow(2).height = 20.00;

    worksheet.mergeCells("C1", "D1");
    worksheet.getCell("C1").value = "กรมที่ดิน - กรมธนารักษ์";
    worksheet.getCell("C1").alignment = { vertical: 'middle', horizontal: 'center' };
    worksheet.getCell("C2").value = "โซน 47 แปลง (ระวาง)";
    worksheet.getCell("C2").alignment = { vertical: 'middle', horizontal: 'center' };
    worksheet.getCell("D2").value = "โซน 48 แปลง (ระวาง)";
    worksheet.getCell("D2").alignment = { vertical: 'middle', horizontal: 'center' };
    worksheet.getCell("C1").font = { bold: true };
    worksheet.getCell("C2").font = { bold: true };
    worksheet.getCell("D2").font = { bold: true };
    worksheet.getRow(2).height = 20.00;

    worksheet.getCell("E1").value = "กรมที่ดิน - กรมธนารักษ์";
    worksheet.getCell("E1").alignment = { vertical: 'middle', horizontal: 'center' };
    worksheet.getCell("E2").value = "แผนที่ประกอบการประเมินราคาที่ดิน (ระวาง)";
    worksheet.getCell("E2").alignment = { vertical: 'middle', horizontal: 'center' };
    worksheet.getCell("E1").font = { bold: true };
    worksheet.getCell("E2").font = { bold: true };
    worksheet.getRow(2).height = 20.00;

    worksheet.columns = [
        { key: 'NUMBER', width: 10 },
        { key: 'LAND_TYPE', width: 20 },
        { key: 'COUNT_47', width: 30 },
        { key: 'COUNT_48', width: 30 },
        { key: 'RAWANG', width: 40 },
    ]

    let data = await __createData1(dataList);

    worksheet.addRows(data);

    const buffer: any = await workbook.xlsx.writeBuffer();
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    const fileExtension = '.xlsx';

    const blob = new Blob([buffer], { type: fileType });

    saveAs(blob, fileName + fileExtension);
}
async function exportExcel1(dataList: any) {
    const fileName = 'ข้อมูลแปลงที่ดิน';

    const workbook = new Excel.Workbook();
    const worksheet = workbook.addWorksheet("Document");

    worksheet.getRow(1).values = ["ลำดับ", "ประเภทรูปแปลงที่ดิน", "กรมที่ดิน-กรมธนารักษ์", "กรมธนารักษ์-กรมที่ดิน"];
    worksheet.getRow(1).font = { bold: true };
    worksheet.getRow(1).height = 20.25;
    worksheet.getRow(1).alignment = { vertical: 'middle', horizontal: 'center' };

    worksheet.columns = [
        { key: 'NUMBER', width: 10 },
        { key: 'SEMI_NAME', width: 30 },
        { key: 'COUNT', width: 30 },
        { key: 'RAWANG', width: 40 },
    ]

    let data = await __createData1(dataList);

    worksheet.addRows(data);

    const buffer: any = await workbook.xlsx.writeBuffer();
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    const fileExtension = '.xlsx';

    const blob = new Blob([buffer], { type: fileType });

    saveAs(blob, fileName + fileExtension);
}

async function exportExcel2(dataList: any) {
    const fileName = 'ข้อมูลทะเบียนที่ดินและห้องชุด';

    const workbook = new Excel.Workbook();
    const worksheet = workbook.addWorksheet("Document");

    worksheet.getRow(1).values = ["ลำดับ", "รายการข้อมูลทะเบียน", "กรมที่ดิน-กรมธนารักษ์", "กรมธนารักษ์-กรมที่ดิน (บัญชีราคาประเมิน)"];
    worksheet.getRow(1).font = { bold: true };
    worksheet.getRow(1).height = 20.25;
    worksheet.getRow(1).alignment = { vertical: 'middle', horizontal: 'center' };

    worksheet.columns = [
        { key: 'NUMBER', width: 10 },
        { key: 'SEMI_NAME', width: 20 },
        { key: 'COUNT', width: 30 },
        { key: 'COUNT_', width: 40 },
    ]

    let data = await __createData2(dataList);
    worksheet.addRows(data);

    const buffer: any = await workbook.xlsx.writeBuffer();
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    const fileExtension = '.xlsx';

    const blob = new Blob([buffer], { type: fileType });

    saveAs(blob, fileName + fileExtension);
}
async function exportExcel3(dataList: any) {
    const fileName = 'ข้อมูลซื้อขายจดทะเบียนและห้องชุด';

    const workbook = new Excel.Workbook();
    const worksheet = workbook.addWorksheet("Document");

    worksheet.getRow(1).values = ["ลำดับ", "รายการข้อมูลจดทะเบียนที่ดินและข้อมูล", "กรมที่ดิน-กรมธนารักษ์", "กรมธนารักษ์-กรมที่ดิน (บัญชีราคาประเมิน)"];
    worksheet.getRow(1).font = { bold: true };
    worksheet.getRow(1).height = 20.25;
    worksheet.getRow(1).alignment = { vertical: 'middle', horizontal: 'center' };

    worksheet.columns = [
        { key: 'NUMBER', width: 10 },
        { key: 'SEMI_NAME', width: 50 },
        { key: 'COUNT', width: 30 },
        { key: 'COUNT_', width: 40 },
    ]

    let data = await __createData3(dataList);
    worksheet.addRows(data);

    const buffer: any = await workbook.xlsx.writeBuffer();
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    const fileExtension = '.xlsx';

    const blob = new Blob([buffer], { type: fileType });

    saveAs(blob, fileName + fileExtension);
}
async function exportExcel4(dataList: any) {
    const fileName = 'ข้อมูลภาษีที่ดินและสิ่งปลูกสร้าง';

    const workbook = new Excel.Workbook();
    const worksheet = workbook.addWorksheet("Document");

    worksheet.getRow(1).values = ["ลำดับ", "จังหวัด", "อำเภอ", "เทศบาล/ตำบล", "โฉนดที่ดินเลขที่", "หน้าสำรวจ", "แผ่นที่ระวาง", "เลขที่ดิน", "เนื้อที่(ไร่-งาน-ตร.ว.)", "ราคาประเมิน( บาท ต่อ ตร.ว. )", "วันที่นำเข้า"];
    worksheet.getRow(1).font = { bold: true };
    worksheet.getRow(1).height = 20.25;
    worksheet.getRow(1).alignment = { vertical: 'middle', horizontal: 'center' };

    worksheet.columns = [
        { key: 'ROWNUMBER', width: 10 },
        { key: 'CHANGWAT_NAME', width: 20 },
        { key: 'AMPHUR_NAME', width: 20 },
        { key: 'ORG_NAME', width: 20 },
        { key: 'DOC_NO', width: 20 },
        { key: 'DEALING_FILE_NO', width: 20 },
        { key: 'RAWANG', width: 20 },
        { key: 'LAND_NO', width: 20 },
        { key: 'LANDAREA', width: 20 },
        { key: 'VAL_P_WA', width: 20 },
        { key: 'IMPORT_', width: 20 },
    ]

    let data = await __createData4(dataList);
    worksheet.addRows(data);

    const buffer: any = await workbook.xlsx.writeBuffer();
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    const fileExtension = '.xlsx';

    const blob = new Blob([buffer], { type: fileType });

    saveAs(blob, fileName + fileExtension);
}


function __createData1(datalist: any) {
    let data: any = []
    for (let i = 0; i < datalist.length; i++) {
        let setdata = {
            NUMBER: datalist[i].NUMBER ? datalist[i].NUMBER : '-',
            SEMI_NAME: datalist[i].SEMI_NAME ? datalist[i].SEMI_NAME : '-',
            COUNT: datalist[i].COUNT ? datalist[i].COUNT : '-',
            RAWANG: datalist[i].RAWANG ? datalist[i].RAWANG : '-',
        }
        data.push(setdata)
    }
    return data
}
function __createData2(datalist: any) {
    let data: any = []
    for (let i = 0; i < datalist.length; i++) {
        let setdata = {
            NUMBER: datalist[i].NUMBER ? datalist[i].NUMBER : '-',
            SEMI_NAME: datalist[i].SEMI_NAME ? datalist[i].SEMI_NAME : '-',
            COUNT: datalist[i].COUNT ? datalist[i].COUNT : '-',
            COUNT_: datalist[i].COUNT_ ? datalist[i].COUNT_ : '-',
        }
        data.push(setdata)
    }
    return data
}
function __createData3(datalist: any) {
    console.log(datalist);

    let data: any = []
    for (let i = 0; i < datalist.length; i++) {
        let setdata = {
            NUMBER: datalist[i].NUMBER ? datalist[i].NUMBER : '-',
            SEMI_NAME: datalist[i].SEMI_NAME ? datalist[i].SEMI_NAME : '-',
            COUNT: datalist[i].COUNT ? datalist[i].COUNT : '-',
            COUNT_: datalist[i].COUNT_ ? datalist[i].COUNT_ : '-',
        }
        data.push(setdata)
    }
    return data
}
function __createData4(datalist: any) {
    console.log(datalist);

    let data: any = []
    for (let i = 0; i < datalist.length; i++) {
        let setdata = {
            ROWNUMBER: datalist[i].ROWNUMBER ? datalist[i].ROWNUMBER : '-',
            CHANGWAT_NAME: datalist[i].CHANGWAT_NAME ? datalist[i].CHANGWAT_NAME : '-',
            AMPHUR_NAME: datalist[i].AMPHUR_NAME ? datalist[i].AMPHUR_NAME : '-',
            ORG_NAME: datalist[i].ORG_NAME ? datalist[i].ORG_NAME : '-',
            DOC_NO: datalist[i].DOC_NO ? datalist[i].DOC_NO : '-',
            DEALING_FILE_NO: datalist[i].DEALING_FILE_NO ? datalist[i].DEALING_FILE_NO : '-',
            RAWANG: datalist[i].RAWANG ? datalist[i].RAWANG : '-',
            LAND_NO: datalist[i].LAND_NO ? datalist[i].LAND_NO : '-',
            LANDAREA: datalist[i].LANDAREA ? datalist[i].LANDAREA : '-',
            VAL_P_WA: datalist[i].VAL_P_WA ? datalist[i].VAL_P_WA : '-',
            IMPORT_: datalist[i].IMPORT_ ? datalist[i].IMPORT_ : '-',
        }
        data.push(setdata)
    }
    return data
}


export async function exportExcelReport(colum: any, dataList: any, reportName: string) {
    let columnName: any = [];
    let fieldColumn: any = [];
    for (let i = 0; i < colum.length; i++) {
        columnName.push(colum[i].name)
        let setField = {
            key: colum[i].listname,
            width: (colum[i].name.length + 10),
        }
        fieldColumn.push(setField);
    }
    console.log(columnName, fieldColumn, reportName);
    const workbook = new Excel.Workbook();
    const worksheet = workbook.addWorksheet("Document");

    worksheet.getRow(1).values = columnName;
    worksheet.getRow(1).font = { bold: true };
    worksheet.getRow(1).height = 20.25;
    worksheet.getRow(1).alignment = { vertical: 'middle', horizontal: 'center' };

    worksheet.columns = fieldColumn;

    for (let i in dataList) {
        worksheet.addRow(dataList[i]);
    }

    for(let i = 0; i < colum.length; i++){
        worksheet.getColumn(i+1).alignment = { vertical: 'middle', horizontal: colum[i].align };
    }

    const buffer: any = await workbook.xlsx.writeBuffer();
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    const fileExtension = '.xlsx';

    const blob = new Blob([buffer], { type: fileType });

    saveAs(blob, reportName + fileExtension);
}
