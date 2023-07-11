import { saveAs } from 'file-saver';

export async function exportText(dataList: any, type: number) {
    // Generate the TSV string
    let data = [];
    if (type == 1) {
        data = await __createData1(dataList);
    }
    if (type == 2) {
        data = await __createData2(dataList);
    }
    if (type == 3) {
        data = await __createData3(dataList);
    }
    if (type == 4) {
        data = await __createData4(dataList);
    }

    var tsv = '';

    // Add header row
    Object.keys(data[0]).forEach(function (key) {
        tsv += key + '\t';
    });
    tsv = tsv.slice(0, -1); // Remove trailing tab
    tsv += '\n';

    // Add data rows
    data.forEach(function (rowData: any) {
        Object.values(rowData).forEach(function (value) {
            tsv += value + '\t';
        });
        tsv = tsv.slice(0, -1); // Remove trailing tab
        tsv += '\n';
    });

    // Create a Blob object from the TSV string
    var blob = new Blob([tsv], { type: "text/plain;charset=utf-8" });

    // Save the Blob as a file using FileSaver.js
    saveAs(blob, "example.txt");
}

function __createData1(datalist: any) {
    console.log(datalist);

    let data: any = []
    for (let i = 0; i < datalist.length; i++) {
        data.push({
            'ลำดับ': i + 1,
            'ประเภทรูปแปลงที่ดิน': datalist[i].SEMI_NAME ? datalist[i].SEMI_NAME : '-',
            'กรมที่ดิน-กรมธนารักษ์': datalist[i].COUNT ? datalist[i].COUNT : '-',
            'กรมธนารักษ์-กรมที่ดิน': datalist[i].RAWANG ? datalist[i].RAWANG : '-',
        })
    }
    return data
}

function __createData2(datalist: any) {
    console.log(datalist);

    let data: any = []
    for (let i = 0; i < datalist.length; i++) {
        data.push({
            'ลำดับ': i + 1,
            'ประเภทรูปแปลงที่ดิน': datalist[i].SEMI_NAME ? datalist[i].SEMI_NAME : '-',
            'กรมที่ดิน-กรมธนารักษ์': datalist[i].COUNT ? datalist[i].COUNT : '-',
            'กรมธนารักษ์-กรมที่ดิน (บัญชีราคาประเมิน)': datalist[i].COUNT_ ? datalist[i].COUNT_ : '-',
        })
    }
    return data
}
function __createData3(datalist: any) {
    console.log(datalist);

    let data: any = []
    for (let i = 0; i < datalist.length; i++) {
        data.push({
            'ลำดับ': i + 1,
            'รายการข้อมูลจดทะเบียนที่ดินและข้อมูล': datalist[i].SEMI_NAME ? datalist[i].SEMI_NAME : '-',
            'กรมที่ดิน-กรมธนารักษ์	': datalist[i].COUNT ? datalist[i].COUNT : '-',
            'กรมธนารักษ์-กรมที่ดิน (บัญชีราคาประเมิน)': datalist[i].COUNT_ ? datalist[i].COUNT_ : '-',
        })
    }
    return data
}
function __createData4(datalist: any) {
    console.log(datalist);

    let data: any = []
    for (let i = 0; i < datalist.length; i++) {
        data.push({
            'ลำดับที่': datalist[i].ROWNUMBER,
            'จังหวัด': datalist[i].CHANGWAT_NAME ? datalist[i].CHANGWAT_NAME : '-',
            'อำเภอ': datalist[i].AMPHUR_NAME ? datalist[i].AMPHUR_NAME : '-',
            'เทศบาล/ตำบล': datalist[i].ORG_NAME ? datalist[i].ORG_NAME : '-',
            'โฉนดที่ดินเลขที่': datalist[i].DOC_NO ? datalist[i].DOC_NO : '-',
            'หน้าสำรวจ': datalist[i].DEALING_FILE_NO ? datalist[i].DEALING_FILE_NO : '-',
            'แผ่นที่ระวาง': datalist[i].RAWANG ? datalist[i].RAWANG : '-',
            'เลขที่ดิน': datalist[i].LAND_NO ? datalist[i].LAND_NO : '-',
            'เนื้อที่(ไร่-งาน-ตร.ว.)': datalist[i].LANDAREA ? datalist[i].LANDAREA : '-',
            'ราคาประเมิน( บาท ต่อ ตร.ว. )': datalist[i].VAL_P_WA ? datalist[i].VAL_P_WA : '-',
            'วันที่นำเข้า': datalist[i].IMPORT_ ? datalist[i].IMPORT_ : '-',
        })
    }
    return data
}

export async function exportTxtReport(colum: any, dataList: any, reportName: any) {
    let dataExport: any = [];
    for (var i = 0; i < dataList.length; i++) {
        let dataObj: any = new Object();
        for (let j = 0; j < colum.length; j++) {
            Object.assign(dataObj, { [colum[j].name]: dataList[i][colum[j].listname] })
        }
        dataExport.push(dataObj)
    }

    var tsv = '';

    Object.keys(dataExport[0]).forEach(function (key) {
        tsv += key + '\t';
    });
    tsv = tsv.slice(0, -1); // Remove trailing tab
    tsv += '\n';

    // Add data rows
    dataExport.forEach(function (rowData: any) {
        Object.values(rowData).forEach(function (value) {
            tsv += value + '\t';
        });
        tsv = tsv.slice(0, -1); // Remove trailing tab
        tsv += '\n';
    });

    // Create a Blob object from the TSV string
    var blob = new Blob([tsv], { type: "text/plain;charset=utf-8" });

    // Save the Blob as a file using FileSaver.js
    saveAs(blob, reportName + ".txt");

}

export async function DownLoadLog(value:string, namefile:string) {
    var blob = new Blob([value], { type: "text/plain;charset=utf-8" });

    // Save the Blob as a file using FileSaver.js
    saveAs(blob, namefile + ".txt");

}