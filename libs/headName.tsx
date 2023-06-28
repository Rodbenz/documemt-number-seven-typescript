// หัวตาราง export ข้อมูล
export const haedlistMenuExport: any = [

    {
        name: 'รายการส่งออก กรมที่ดิน',
        width: 10,
        color: '#000000',
    },
    {
        name: 'เตรียมส่ง',
        width: 10,
        color: '#f78801',
    },
    {
        name: 'ส่งสำเร็จ',
        width: 10,
        color: '#02953f',
    },
    {
        name: 'ส่งไม่สำเร็จ',
        width: 10,
        color: '#f90c0f',
    },
];
// หัวตาราง การรับข้อมูล จาก กรมที่ดิน
export const headNameReceiving1 = [
    {
        name: 'รายการรับข้อมูล จาก กรมที่ดิน',
        width: 100,
    },
    {
        name: 'จำนวนที่จัดส่ง',
        width: 10,
    },
    {
        name: 'จำนวนที่รับข้อมูลได้',
        width: 10,
    },
    {
        name: 'จำนวนที่รับข้อมูลไม่ได้',
        width: 10,
    },
    {
        name: 'วันที่ รับข้อมูล',
        width: 10,
    },
    {
        name: 'ที่จัดเก็บข้อมูล',
        width: 100,
    },
]
// หัวตาราง การรับข้อมูล จาก กรมส่งเสริมการปกครองท้องถิ่น
export const headNameReceiving2 = [
    {
        name: 'รายการรับข้อมูล จาก กรมส่งเสริมการปกครองท้องถิ่น',
        width: 100
    },
    {
        name: 'จำนวนที่จัดส่ง',
        width: 10,
    },
    {
        name: 'จำนวนที่รับข้อมูลได้',
        width: 10,
    },
    {
        name: 'จำนวนที่รับข้อมูลไม่ได้',
        width: 10,
    },
    {
        name: 'วันที่ รับข้อมูล',
        width: 10,
    },
    {
        name: 'ที่จัดเก็บข้อมูล',
        width: 100,
    },
]
// หัวตาราง จังหวัดทุกจังหวัด
export const reportReceivingProvincePlot = [
  {
    name: 'ลำดับที่',
    listname: 'ROWNUMBER',
    align: 'center',
  },
  {
    name: 'จังหวัด',
    listname: 'PROVINCENAME',
    align: 'left',
  },
  {
    name: 'รายการนำเข้า',
    listname: 'SEMI_NAME',
    align: 'left',
  },
  {
    name: 'ชื่อไฟล์',
    listname: 'FILENAME',
    align: 'left',
  },
  {
    name: 'ประเภทไฟล์',
    listname: 'TYPEFILE',
    align: 'left',
  },
  {
    name: 'จำนวน',
    listname: 'COUNT_',
    align: 'right',
  },
  {
    name: 'วัน/เดือน/ปี',
    listname: 'IMPORT_DATE_',
    align: 'center',
  },
]

// หัวตาราง สำนักงานที่ดิน
export const columReceivingBranch = [
  {
    name: 'ลำดับที่',
    listname: 'ROWNUMBER',
    align: 'center',
  },
  {
    name: 'สำนักงานที่ดิน',
    listname: 'BRANCHNAME',
    align: 'left',
  },
  {
    name: 'รายการนำเข้า',
    listname: 'SEMI_NAME',
    align: 'left',
  },
  {
    name: 'ชื่อไฟล์',
    listname: 'FILENAME',
    align: 'left',
  },
  {
    name: 'ประเภทไฟล์',
    listname: 'TYPEFILE',
    align: 'left',
  },
  {
    name: 'จำนวน',
    listname: 'COUNT_',
    align: 'right',
  },
  {
    name: 'วัน/เดือน/ปี',
    listname: 'DATEIMPORT',
    align: 'center',
  },
]
// หัวตาราง ข้อมูลรูปแปลงที่ดินโฉนด (โซน 47,48), ข้อมูลรูปแปลงที่ดิน น.ส.3ก (โซน 47,48)
export const columReceivingPlot1 = [
  {
    name: 'ลำดับที่',
    listname: 'ROWNUMBER',
    align: 'center',
  },
  {
    name: 'ระวาง',
    listname: 'UTM',
    align: 'right',
  },
  {
    name: 'แผ่นที่',
    listname: 'UTMMAP4',
    align: 'right',
  },
  {
    name: 'มาตราส่วน',
    listname: 'UTMSCALE',
    align: 'right',
  },
  {
    name: 'เลขที่ดิน',
    listname: 'LAND_NO',
    align: 'right',
  },
  // {
  //   name: 'เลขที่โฉนด',
  //   listname: 'DATEIMPORT',
  //   align: 'right',
  // },
  {
    name: 'อำเภอ',
    listname: 'AMPHOE_NAME',
    align: 'Left',
  },
  {
    name: 'ตำบล',
    listname: 'TAMBOL_NAME',
    align: 'Left',
  },
  {
    name: 'วัน/เดือน/ปี',
    listname: 'DATEIMPORT',
    align: 'left',
  },
]
// หัวตาราง ข้อมูลโฉนดที่ดิน, ข้อมูล น.ส.3ก, ข้อมูล น.ส.3
export const columReceivingPlot2 = [
  {
    name: 'ลำดับที่',
    listname: 'ROWNUMBER',
    align: 'center',
  },
  {
    name: 'ระวาง',
    listname: 'UTM',
    align: 'right',
  },
  {
    name: 'แผ่นที่',
    listname: 'UTMPAGE',
    align: 'right',
  },
  {
    name: 'มาตราส่วน',
    listname: 'UTMRATIO',
    align: 'right',
  },
  {
    name: 'เลขที่ดิน',
    listname: 'UTMLANDNO',
    align: 'right',
  },
  // {
  //   name: 'เลขที่โฉนด',
  //   listname: 'DATEIMPORT',
  //   align: 'right',
  // },
  {
    name: 'อำเภอ',
    listname: 'AMPHOE_NAME',
    align: 'Left',
  },
  {
    name: 'ตำบล',
    listname: 'TAMBOL_NAME',
    align: 'Left',
  },
  {
    name: 'วัน/เดือน/ปี',
    listname: 'DATEIMPORT',
    align: 'left',
  },
]
// ข้อมูลสิ่งปลูกสร้างบนแปลงที่ดิน