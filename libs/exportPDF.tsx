import { jsPDF } from "jspdf";
import autoTable from 'jspdf-autotable';
import './THSarabun.js';

export async function Report0(datalist: any, reportName: string) {
    let colum: any = [
        [
            { content: 'ลำดับ',  styles: { halign: 'center' } },
            { content: 'ประเภทรูปแปลงที่ดิน',  styles: { halign: 'center' } },
            { content: 'กรมที่ดิน - กรมธนารักษ์',  styles: { halign: 'center' } },
            { content: 'กรมธนารักษ์ - กรมที่ดิน',  styles: { halign: 'center' } },
        ],
        // [
        //     {content:'โซน 47 แปลง (ระวาง)', styles: { halign: 'center' }}, 
        //     {content:'โซน 48 แปลง (ระวาง)', styles: { halign: 'center' }}, 
        //     {content:'แผนที่ประกอบการประเมินราคาที่ดิน (ระวาง)', styles: { halign: 'center' }}, 
        // ],
    ]
    let rows: any = []
    let data: any = await __createData1(datalist);
    for (var key in data) {
        let dataRow = []
        if (data.hasOwnProperty(key)) {
            for (const [keys, value] of Object.entries(data[key])) {
                dataRow.push(value);
                console.log(
                   value
                );
                
            }
            rows.push(dataRow);
        }
    }

    const doc = new jsPDF('l', 'pt', 'letter');

    doc.setFont("THSarabunNew");

    doc.setLineWidth(2);

    autoTable(doc, {
        head: colum,
        body: rows,
        headStyles: {
            fillColor: [0,110,97], // Green color
            textColor: [255, 255, 255], // White color
          },
        tableLineColor: [0,110,97],
        tableLineWidth: 0.1,
        startY: 30,
        styles: {
            overflow: 'linebreak',
            font: 'THSarabunNew',    // <-- place name of your font here
            fontStyle: 'normal',
            fontSize: 16,
            valign: 'middle'
        },
        columnStyles: {
            0:{
                halign:'right'
            },
            1:{
                halign:'left'
            },
            2:{
                halign:'right'
            },
            3:{
                halign:'right'
            },
            4:{
                halign:'right'
            },
        },
    },
    )

    doc.setPage(1);
    doc.save(reportName + 'table.pdf')
    // window.open(doc.output("bloburl"), "_blank");
    return false
}
export async function Report2(datalist: any, reportName: string) {
    let colum: any = [
        [
            { content: 'ลำดับ', styles: { halign: 'center' } },
            { content: 'รายการข้อมูลทะเบียน', styles: { halign: 'center' } },
            { content: 'กรมที่ดิน - กรมธนารักษ์', styles: { halign: 'center' } },
            { content: 'กรมธนารักษ์-กรมที่ดิน (บัญชีราคาประเมิน)', styles: { halign: 'center' } },
        ]
    ]
    let rows: any = []
    let data: any = await __createData2(datalist);
    for (var key in data) {
        let dataRow = []
        if (data.hasOwnProperty(key)) {
            for (const [keys, value] of Object.entries(data[key])) {
                dataRow.push(value);
                console.log(
                   value
                );
                
            }
            rows.push(dataRow);
        }
    }

    const doc = new jsPDF('l', 'pt', 'letter');

    doc.setFont("THSarabunNew");

    doc.setLineWidth(2);

    autoTable(doc, {
        head: colum,
        body: rows,
        headStyles: {
            fillColor: [0,110,97], // Green color
            textColor: [255, 255, 255], // White color
          },
        tableLineColor: [0,110,97],
        tableLineWidth: 0.1,
        startY: 30,
        styles: {
            overflow: 'linebreak',
            font: 'THSarabunNew',    // <-- place name of your font here
            fontStyle: 'normal',
            fontSize: 16,
            valign: 'middle'
        },
        columnStyles: {
            0:{
                halign:'right'
            },
            1:{
                halign:'left'
            },
            2:{
                halign:'right'
            },
            3:{
                halign:'right'
            }
        },
    },
    )

    doc.setPage(1);
    doc.save(reportName + 'table.pdf')
    // window.open(doc.output("bloburl"), "_blank");
    return false
}
export async function Report3(datalist: any, reportName: string) {
    let colum: any = [
        [
            { content: 'ลำดับ', styles: { halign: 'center' } },
            { content: 'รายการข้อมูลทะเบียน', styles: { halign: 'center' } },
            { content: 'กรมที่ดิน - กรมธนารักษ์', styles: { halign: 'center' } },
            { content: 'กรมธนารักษ์-กรมที่ดิน (บัญชีราคาประเมิน)', styles: { halign: 'center' } },
        ]
    ]
    let rows: any = []
    let data: any = await __createData3(datalist);
    for (var key in data) {
        let dataRow = []
        if (data.hasOwnProperty(key)) {
            for (const [keys, value] of Object.entries(data[key])) {
                dataRow.push(value);
                console.log(
                   value
                );
                
            }
            rows.push(dataRow);
        }
    }

    const doc = new jsPDF('l', 'pt', 'letter');

    doc.setFont("THSarabunNew");

    doc.setLineWidth(2);

    autoTable(doc, {
        head: colum,
        body: rows,
        headStyles: {
            fillColor: [0,110,97], // Green color
            textColor: [255, 255, 255], // White color
          },
        tableLineColor: [0,110,97],
        tableLineWidth: 0.1,
        startY: 30,
        styles: {
            overflow: 'linebreak',
            font: 'THSarabunNew',    // <-- place name of your font here
            fontStyle: 'normal',
            fontSize: 16,
            valign: 'middle'
        },
        columnStyles: {
            0:{
                halign:'right'
            },
            1:{
                halign:'left'
            },
            2:{
                halign:'left'
            },
            3:{
                halign:'left'
            },
            4:{
                halign:'right'
            },
            5:{
                halign:'right'
            },
            6:{
                halign:'right'
            },
            7:{
                halign:'right'
            },
            8:{
                halign:'right'
            },
            9:{
                halign:'right'
            },
            
        },
    },
    )

    doc.setPage(1);
    doc.save(reportName + 'table.pdf')
    // window.open(doc.output("bloburl"), "_blank");
    return false
}
export async function Report4(datalist: any, reportName: string) {
    let colum: any = [
        [
            { content: 'ลำดับที่', styles: { halign: 'center' } },
            { content: 'จังหวัด', styles: { halign: 'center' } },
            { content: 'อำเภอ', styles: { halign: 'center' } },
            { content: 'เทศบาล/ตำบล', styles: { halign: 'center' } },
            { content: 'โฉนดที่ดินเลขที่', styles: { halign: 'center' } },
            { content: 'หน้าสำรวจ', styles: { halign: 'center' } },
            { content: 'แผ่นที่ระวาง', styles: { halign: 'center' } },
            { content: 'เลขที่ดิน', styles: { halign: 'center' } },
            { content: 'เนื้อที่(ไร่-งาน-ตร.ว.)', styles: { halign: 'center' } },
            { content: 'ราคาประเมิน( บาท ต่อ ตร.ว. )	', styles: { halign: 'center' } },
            { content: 'วันที่นำเข้า', styles: { halign: 'center' } },
        ]
    ]
    let rows: any = []
    let data: any = await __createData4(datalist);
    for (var key in data) {
        let dataRow = []
        if (data.hasOwnProperty(key)) {
            for (const [keys, value] of Object.entries(data[key])) {
                dataRow.push(value);
                console.log(
                   value
                );
                
            }
            rows.push(dataRow);
        }
    }

    const doc = new jsPDF('l', 'pt', 'letter');

    doc.setFont("THSarabunNew");

    doc.setLineWidth(2);

    autoTable(doc, {
        head: colum,
        body: rows,
        headStyles: {
            fillColor: [0,110,97], // Green color
            textColor: [255, 255, 255], // White color
          },
        tableLineColor: [0,110,97],
        tableLineWidth: 0.1,
        startY: 30,
        styles: {
            overflow: 'linebreak',
            font: 'THSarabunNew',    // <-- place name of your font here
            fontStyle: 'normal',
            fontSize: 16,
            valign: 'middle'
        },
        columnStyles: {
            0:{
                halign:'right'
            },
            1:{
                halign:'left'
            },
            2:{
                halign:'right'
            },
            3:{
                halign:'right'
            }
        },
    },
    )

    doc.setPage(1);
    doc.save(reportName + 'table.pdf')
    // window.open(doc.output("bloburl"), "_blank");
    return false
}

function __createData1(datalist: any) {
    let data: any = []
    for (let i = 0; i < datalist.length; i++) {
        data.push({
            ROWNUM: i + 1,
            SEMI_NAME: datalist[i].SEMI_NAME ? datalist[i].SEMI_NAME : '-',
            COUNT: datalist[i].COUNT ? datalist[i].COUNT : '-',
            RAWANG: datalist[i].RAWANG ? datalist[i].RAWANG : '-',
        })
    }
    return data;
}
function __createData2(datalist: any) {
    let data: any = []
    for (let i = 0; i < datalist.length; i++) {
        let setdata = {
            NUMBER: datalist[i].NUMBER ? datalist[i].NUMBER : '-',
            SEMI_NAME: datalist[i].SEMI_NAME ? datalist[i].SEMI_NAME : '-',
            COUNT: datalist[i].COUNT ? datalist[i].COUNT : '-',
            COUNT_: datalist[i].COUNT_ ? datalist[i].COUNT_ : '-',        }
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