// หัวตาราง export ข้อมูล
export const haedlistMenuExport: any = [

    {
        name: 'รายการส่งออก กรมที่ดิน',
        width: 10,
        color: '#383838',
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
    {
      name: 'วัน/เดือน/ปี ที่ส่งออกข้อมูล',
      width: 10,
      color: '#383838',
  },
  {
    name: 'ที่เก็บไฟล์',
    width: 10,
    color: '#383838',
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
        name: 'วันที่รับข้อมูลล่าสุด',
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
    align: 'center',
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
    align: 'center',
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
    minWidth: 100,
  },
  {
    name: 'อำเภอ',
    listname: 'AMPHOE_NAME',
    align: 'Left',
    minWidth: 150,
  },
  {
    name: 'ตำบล',
    listname: 'TAMBOL_NAME',
    align: 'Left',
    minWidth: 150,
  },
  {
    name: 'ระวาง',
    listname: 'UTM',
    align: 'center',
    minWidth: 150,
  },
  {
    name: 'แผ่นที่',
    listname: 'UTMMAP4',
    align: 'center',
    minWidth: 150,
  },
  {
    name: 'มาตราส่วน',
    listname: 'UTMSCALE',
    align: 'center',
    minWidth: 150,
  },
  {
    name: 'เลขที่ดิน',
    listname: 'LAND_NO',
    align: 'center',
    minWidth: 150,
  },
  // {
  //   name: 'เลขที่โฉนด',
  //   listname: 'DATEIMPORT',
  //   align: 'right',
  // },

  {
    name: 'วัน/เดือน/ปี',
    listname: 'DATEIMPORT',
    align: 'center',
    minWidth: 150,
  },
]
// หัวตาราง ข้อมูลโฉนดที่ดิน, ข้อมูล น.ส.3ก, ข้อมูล น.ส.3
export const columReceivingPlot2 = [
  {
    name: 'ลำดับที่',
    listname: 'ROWNUMBER',
    align: 'center',
    minWidth: 150,
  },
  {
    name: 'อำเภอ',
    listname: 'AMPHOE_NAME',
    align: 'Left',
    minWidth: 150,
  },
  {
    name: 'ตำบล',
    listname: 'TAMBOL_NAME',
    align: 'Left',
    minWidth: 150,
  },
  {
    name: 'ระวาง',
    listname: 'UTM',
    align: 'right',
    minWidth: 150,
  },
  {
    name: 'แผ่นที่',
    listname: 'UTMPAGE',
    align: 'right',
    minWidth: 150,
  },
  {
    name: 'มาตราส่วน',
    listname: 'UTMRATIO',
    align: 'right',
    minWidth: 150,
  },
  {
    name: 'เลขที่ดิน',
    listname: 'UTMLANDNO',
    align: 'right',
    minWidth: 150,
  },
  // {
  //   name: 'เลขที่โฉนด',
  //   listname: 'DATEIMPORT',
  //   align: 'right',
  // },
  {
    name: 'วัน/เดือน/ปี',
    listname: 'DATEIMPORT',
    align: 'left',
    minWidth: 150,
  },
];

// ข้อมูลสิ่งปลูกสร้างบนแปลงที่ดิน 214,215,216
export const columReceivingPlot3 = [
  {
    name: 'ลำดับที่',
    listname: 'ROWNUMBER',
    align: 'center',
    minWidth: 150,
  },
  {
    name: 'ชื่อสำนักงานที่ดิน',
    listname: 'BRANCHNAME',
    align: 'left',
    minWidth: 300,
  },
  {
    name: 'ชื่ออปท.',
    listname: 'OPTNAME',
    align: 'left',
    minWidth: 300,
  },
  {
    name: 'รหัสสิ่งปลูกสร้าง (กรมที่ดิน)',
    listname: 'CONSTRCODE',
    align: 'right',
    minWidth: 230,
  },
  {
    name: 'เลขโฉนด',
    listname: 'PARCELNO',
    align: 'right',
    minWidth: 200,
  },
  {
    name: 'จำนวนชั้น',
    listname: 'FLOORNO',
    align: 'right',
    minWidth: 200,
  },
  {
    name: 'ความกว้าง',
    listname: 'WIDTH',
    align: 'right',
    minWidth: 200,
  },
 { 
    name: 'ความยาว',
    listname: 'LENGTH',
    align: 'right',
    minWidth: 200,
  },
 { 
    name: 'พื่นที่รวมของสิ่งปลูกสร้าง (ตร.ม.)',
    listname: 'AREA',
    align: 'right',
    minWidth: 300,
  },
  {
    name: 'วัน/เดือน/ปี',
    listname: 'DATEIMPORT',
    align: 'left',
    minWidth: 200,
  },
];

// .ข้อมูลภาระผูกพันบนแปลงที่ดิน 217,218
export const columReceivingPlot4 = [
  {
    name: 'ลำดับที่',
    listname: 'ROWNUMBER',
    align: 'center',
    minWidth: 150,
  },
  {
    name: 'ชื่อสำนักงานที่ดิน',
    listname: 'BRANCHNAME',
    align: 'left',
    minWidth: 300,
  },
  {
    name: 'ชื่ออปท.',
    listname: 'OPTNAME',
    align: 'left',
    minWidth: 300,
  },
  {
    name: 'ปรเภทเอกสารสิทธิ',
    listname: 'PARCELTYPENAME',
    align: 'left',
    minWidth: 230,
  },
  {
    name: 'เลขที่เอกสารสิทธิโฉนด',
    listname: 'PARCELNO',
    align: 'right',
    minWidth: 230,
  },
  {
    name: 'ลำดับการผูกพันบนแปลงที่ดินโฉนด',
    listname: 'ENCUMBSEQ',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'รหัสประเภทการจดทะเบียน (ภาระผูกพัน)',
    listname: 'ENCUMBCODE',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'วัน/เดือน/ปี',
    listname: 'DATEIMPORT',
    align: 'left',
    minWidth: 200,
  },
];
// .ข้อมูลหน่วยที่ดินในแต่ละโฉนดที่ดิน 219
export const columReceivingPlot5 = [
  {
    name: 'ลำดับที่',
    listname: 'ROWNUMBER',
    align: 'center',
    minWidth: 150,
  },
  {
    name: 'ชื่อสำนักงานที่ดิน',
    listname: 'BRANCHNAME',
    align: 'left',
    minWidth: 300,
  },
  {
    name: 'ชื่ออปท.',
    listname: 'OPTNAME',
    align: 'left',
    minWidth: 300,
  },
  {
    name: 'ปรเภทเอกสารสิทธิ',
    listname: 'PARCELTYPENAME',
    align: 'left',
    minWidth: 230,
  },
  {
    name: 'เลขที่เอกสารสิทธิ',
    listname: 'PARCELNO',
    align: 'right',
    minWidth: 230,
  },
  {
    name: 'รหัสประเภทการจดทะเบียน',
    listname: 'REGCODE',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'วันเวลาจดทะเบียน',
    listname: 'REGDATE_',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'เนื้อที่ตารางวา',
    listname: 'UNIT_AREA',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'ราคาประเมินที่ดิน / ตร.ว.',
    listname: 'UNITAS_P_WAH',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'ราคาประเมินรวม',
    listname: 'UNITAS_TOT',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'สถานะข้อมูล',
    listname: 'STATUS_',
    align: 'left',
    minWidth: 250,
  },
  {
    name: 'วัน/เดือน/ปี',
    listname: 'DATEIMPORT',
    align: 'left',
    minWidth: 200,
  },
];
// .ข้อมูลหน่วยที่ดินในแต่ละโฉนดที่ดิน 221
export const columReceivingPlot6 = [
  {
    name: 'ลำดับที่',
    listname: 'ROWNUMBER',
    align: 'center',
    minWidth: 150,
  },
  {
    name: 'ชื่อสำนักงานที่ดิน',
    listname: 'BRANCHNAME',
    align: 'left',
    minWidth: 300,
  },
  {
    name: 'ชื่ออปท.',
    listname: 'OPTNAME',
    align: 'left',
    minWidth: 300,
  },
  {
    name: 'ปรเภทเอกสารสิทธิ',
    listname: 'PARCELTYPENAME',
    align: 'left',
    minWidth: 230,
  },
  {
    name: 'เลขที่เอกสารสิทธิโฉนด',
    listname: 'PARCELNUMBER',
    align: 'right',
    minWidth: 230,
  },
  {
    name: 'ทะเบียนอาคารชุด',
    listname: 'REGNO',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'ชื่ออาคารชุด',
    listname: 'CONDONAME',
    align: 'left',
    minWidth: 250,
  },
  {
    name: 'หมายเลขอาคารของอาคารชุด',
    listname: 'BUILDINGNO',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'ชื่อตึกในอาคารชุด',
    listname: 'BUILDINGNAME',
    align: 'left',
    minWidth: 250,
  },
  {
    name: 'ชั้นที่',
    listname: 'FLOORNO',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'ห้องชุดเลขที่/ลขที่ห้องชุด',
    listname: 'UNITNO',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'สถานะข้อมูล',
    listname: 'STATUS_',
    align: 'left',
    minWidth: 250,
  },
  {
    name: 'วัน/เดือน/ปี',
    listname: 'DATEIMPORT',
    align: 'left',
    minWidth: 200,
  },
];
// .ข้อมูลสิทธิถือครองกรรมสิทธิ์อื่นๆ ห้องชุด (ทรัพย์ส่วนบุคคล) 222
export const columReceivingPlot7 = [
  {
    name: 'ลำดับที่',
    listname: 'ROWNUMBER',
    align: 'center',
    minWidth: 150,
  },
  {
    name: 'ชื่อสำนักงานที่ดิน',
    listname: 'BRANCHNAME',
    align: 'left',
    minWidth: 300,
  },
  {
    name: 'ชื่ออปท.',
    listname: 'OPTNAME',
    align: 'left',
    minWidth: 300,
  },
  {
    name: 'เลขที่ใบสั้ง',
    listname: 'ORDERNO',
    align: 'right',
    minWidth: 230,
  },
  {
    name: 'วันที่จดทะเบียน',
    listname: 'REGDATE_',
    align: 'left',
    minWidth: 230,
  },
  {
    name: 'ทะเบียนอาคารชุด',
    listname: 'REGNO',
    align: 'left',
    minWidth: 250,
  },
  {
    name: 'ห้องชุดเลขที่/ลขที่ห้องชุด',
    listname: 'UNITNO',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'หมายเลขอาคาร',
    listname: 'BUILDINGNO',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'ลำดับทรัพย์สินส่วนบุคคล',
    listname: 'BUILDSQL',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'ชื่อรายการสินทรัพย์',
    listname: 'CPROPERTY_NAME',
    align: 'left',
    minWidth: 250,
  },
  {
    name: 'พื่นที่รวม (ตร.ม.)',
    listname: 'ASSET_AREA_TOT',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'ราคาประเมินที่ดิน / ตร.ว.',
    listname: 'VALAMT_',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'รวมราคาประเมิน',
    listname: 'ASSET_VAL_TOT_',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'สถานะข้อมูล',
    listname: 'STATUS_',
    align: 'left',
    minWidth: 250,
  },
  {
    name: 'วัน/เดือน/ปี',
    listname: 'DATEIMPORT',
    align: 'left',
    minWidth: 200,
  },
];
// 16.ข้อมูลอาคารชุด 223
export const columReceivingPlot8 = [
  {
    name: 'ลำดับที่',
    listname: 'ROWNUMBER',
    align: 'center',
    minWidth: 150,
  },
  {
    name: 'ชื่อสำนักงานที่ดิน',
    listname: 'BRANCHNAME',
    align: 'left',
    minWidth: 300,
  },
  {
    name: 'ชื่ออปท.',
    listname: 'OPTNAME',
    align: 'left',
    minWidth: 300,
  },
  {
    name: 'ทะเบียนเลขที่อาคารชุด',
    listname: 'REGNO',
    align: 'left',
    minWidth: 180,
  },
  {
    name: 'วันที่จดทะเบียนอาคารชุด',
    listname: 'REGDATE_',
    align: 'left',
    minWidth: 230,
  },
  {
    name: 'ชื่ออาคารชุด',
    listname: 'CONDONAME',
    align: 'left',
    minWidth: 250,
  },
  {
    name: 'ประผู้ถือกรรมสิทธิ์',
    listname: 'REGOWNERTYPE',
    align: 'left',
    minWidth: 250,
  },
  {
    name: 'จำนวนอาคาร',
    listname: 'BLDNUM',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'จำนวนห้องชุด',
    listname: 'ROOMNUM',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'ที่ตั้งอาคาร',
    listname: 'ADDR_',
    align: 'left',
    minWidth: 250,
  },
  {
    name: 'พื่นที่โครงการ (ตร.ม.)',
    listname: 'AREANUM',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'เนื่อที่ไร่-งาน-วา',
    listname: 'RAINUM_',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'เลขที่เอกสารสิทธิห้องสุด',
    listname: 'PARCELNUMBER',
    align: 'right',
    minWidth: 200,
  },
  {
    name: 'สถานะข้อมูล',
    listname: 'STATUS_',
    align: 'left',
    minWidth: 250,
  },
  {
    name: 'วัน/เดือน/ปี',
    listname: 'DATEIMPORT',
    align: 'left',
    minWidth: 200,
  },
];

//17.ข้อมูลตึกของอาคารชุด 224
export const columReceivingPlot9 = [
  {
    name: 'ลำดับที่',
    listname: 'ROWNUMBER',
    align: 'center',
    minWidth: 150,
  },
  {
    name: 'ชื่อสำนักงานที่ดิน',
    listname: 'BRANCHNAME',
    align: 'left',
    minWidth: 300,
  },
  {
    name: 'ชื่ออปท.',
    listname: 'OPTNAME',
    align: 'left',
    minWidth: 300,
  },
  {
    name: 'ทะเบียนอาคารชุด',
    listname: 'REGNO',
    align: 'right',
    minWidth: 180,
  },
  {
    name: 'วันที่จดทะเบียนอาคารชุด',
    listname: 'REGDATE_',
    align: 'left',
    minWidth: 230,
  },
  {
    name: 'หมายเลขอาคาร',
    listname: 'BUILDINGCODE',
    align: 'left',
    minWidth: 250,
  },
  {
    name: 'ชื่ออาคาร',
    listname: 'BUILDINGNAME',
    align: 'left',
    minWidth: 250,
  },
  {
    name: 'จำนวนชั้น',
    listname: 'FLOORNUM',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'จำนวนห้องชุด',
    listname: 'ROOMNUM',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'สถานะข้อมูล',
    listname: 'STATUS_',
    align: 'left',
    minWidth: 250,
  },
  {
    name: 'วัน/เดือน/ปี',
    listname: 'DATEIMPORT',
    align: 'left',
    minWidth: 200,
  },
];
//18.ข้อมูลโฉนดที่ดินที่ตั้งอาคารชุด 225
export const columReceivingPlot10 = [
  {
    name: 'ลำดับที่',
    listname: 'ROWNUMBER',
    align: 'center',
    minWidth: 150,
  },
  {
    name: 'ชื่อสำนักงานที่ดิน',
    listname: 'BRANCHNAME',
    align: 'left',
    minWidth: 300,
  },
  {
    name: 'ชื่ออปท.',
    listname: 'OPTNAME',
    align: 'left',
    minWidth: 300,
  },
  {
    name: 'รหัสประเภทเอกสารสิทธิ',
    listname: 'DOCTYPE',
    align: 'right',
    minWidth: 180,
  },
  {
    name: 'ประเภทเอกสารสิทธิ',
    listname: 'PARCELTYPENAME',
    align: 'left',
    minWidth: 230,
  },
  {
    name: 'จังหวัดที่ตั้ง',
    listname: 'PROVINCENAME',
    align: 'left',
    minWidth: 250,
  },
  {
    name: 'อำเภอที่ตั้ง',
    listname: 'AMPHURNAME',
    align: 'left',
    minWidth: 250,
  },
  {
    name: 'ตำบลที่ตั้ง',
    listname: 'TAMBONNAME',
    align: 'left',
    minWidth: 250,
  },
  {
    name: 'เลขที่เอกสารสิทธิ',
    listname: 'PARCELNO',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'สถานะข้อมูล',
    listname: 'STATUS_',
    align: 'left',
    minWidth: 250,
  },
  {
    name: 'วัน/เดือน/ปี',
    listname: 'DATEIMPORT',
    align: 'left',
    minWidth: 200,
  },
];
//19.ข้อมูลทรัพย์ส่วนกลางโครงการ 226
export const columReceivingPlot11 = [
  {
    name: 'ลำดับที่',
    listname: 'ROWNUMBER',
    align: 'center',
    minWidth: 150,
  },
  {
    name: 'ชื่อสำนักงานที่ดิน',
    listname: 'BRANCHNAME',
    align: 'left',
    minWidth: 300,
  },
  {
    name: 'ชื่ออปท.',
    listname: 'OPTNAME',
    align: 'left',
    minWidth: 300,
  },
  {
    name: 'ทะเบียนอาคารชุด',
    listname: 'REGNO',
    align: 'right',
    minWidth: 180,
  },
  {
    name: 'ลำดับที่ทรัพย์สินส่วนกลาง',
    listname: 'ASTSEQNO',
    align: 'right',
    minWidth: 230,
  },
  {
    name: 'รายละเอียดทรัพย์สินส่วนกลาง',
    listname: 'ASTDESC',
    align: 'left',
    minWidth: 500,
  },
  {
    name: 'จำนวน',
    listname: 'ASTAMT',
    align: 'center',
    minWidth: 250,
  },
  {
    name: 'หน่วยนับ',
    listname: 'ASTUNIT',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'ขนาดจุ',
    listname: 'ASTCONTAIN',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'สถานะข้อมูล',
    listname: 'STATUS_',
    align: 'left',
    minWidth: 250,
  },
  {
    name: 'วัน/เดือน/ปี',
    listname: 'DATEIMPORT',
    align: 'left',
    minWidth: 200,
  },
];
//20.ข้อมูลภาระผูกพันห้องชุด 227
export const columReceivingPlot12 = [
  {
    name: 'ลำดับที่',
    listname: 'ROWNUMBER',
    align: 'center',
    minWidth: 150,
  },
  {
    name: 'ชื่อสำนักงานที่ดิน',
    listname: 'BRANCHNAME',
    align: 'left',
    minWidth: 300,
  },
  {
    name: 'ชื่ออปท.',
    listname: 'OPTNAME',
    align: 'left',
    minWidth: 300,
  },
  {
    name: 'ประเภทเอกสารสิทธิ',
    listname: 'PARCELTYPENAME',
    align: 'left',
    minWidth: 180,
  },
  {
    name: 'เลขที่เอกสารสิทธิ',
    listname: 'PARCELNUMBER',
    align: 'right',
    minWidth: 230,
  },
  {
    name: 'ทะเบียนอาคารชุด',
    listname: 'REGNO',
    align: 'right',
    minWidth: 500,
  },
  {
    name: 'ชื่ออาคารชุด',
    listname: 'CONDONAME',
    align: 'left',
    minWidth: 250,
  },
  {
    name: 'หมายเลขอาคาร/ของอาคารชุด',
    listname: 'BUILDINGNO',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'ชื่อตึกในอาคารชุด',
    listname: 'BUILDINGNAME',
    align: 'left',
    minWidth: 250,
  },
  {
    name: 'ชั้นที่',
    listname: 'FLOORNO',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'ห้องชุดเลขที่/เลขที่ห้องชุด',
    listname: 'UNITNO',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'ลำดับภาระผูกพันห้องชุด',
    listname: 'ENCUMBSEQ',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'รหัสประเภทการจดทะเบียน (ภาระผูกพัน)',
    listname: 'ENCUMBCODE',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'สถานะข้อมูล',
    listname: 'STATUS_',
    align: 'left',
    minWidth: 250,
  },
  {
    name: 'วัน/เดือน/ปี',
    listname: 'DATEIMPORT',
    align: 'left',
    minWidth: 200,
  },
];
//21.ข้อมูลรายการเปลี่ยนแปลงประจำวันห้องชุด 311
export const columReceivingPlot13 = [
  {
    name: 'ลำดับที่',
    listname: 'ROWNUMBER',
    align: 'center',
    minWidth: 150,
  },
  {
    name: 'ชื่อสำนักงานที่ดิน',
    listname: 'BRANCHNAME',
    align: 'left',
    minWidth: 300,
  },
  {
    name: 'ชื่ออปท.',
    listname: 'OPTNAME',
    align: 'left',
    minWidth: 300,
  },
  {
    name: 'ประเภทเอกสารสิทธิ',
    listname: 'PARCELTYPENAME',
    align: 'left',
    minWidth: 180,
  },
  {
    name: 'เลขที่เอกสารสิทธิ',
    listname: 'PARCELNUMBER',
    align: 'right',
    minWidth: 230,
  },
  {
    name: 'ทะเบียนอาคารชุด',
    listname: 'REGNO',
    align: 'right',
    minWidth: 230,
  },
  {
    name: 'ชื่ออาคารชุด',
    listname: 'CONDONAME',
    align: 'left',
    minWidth: 250,
  },
  {
    name: 'หมายเลขอาคาร/ของอาคารชุด',
    listname: 'BUILDINGNO',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'ชื่อตึกในอาคารชุด',
    listname: 'BUILDINGNAME',
    align: 'left',
    minWidth: 250,
  },
  {
    name: 'ชั้นที่',
    listname: 'FLOORNO',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'ห้องชุดเลขที่/เลขที่ห้องชุด',
    listname: 'UNITNO',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'ลำดับที่ประเภทการจดทะเบียน',
    listname: 'PROCESS_SEQ',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'เลขที่ใบสั่ง',
    listname: 'ORDERNO',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'รหัสประเภทการจดทะเบียน',
    listname: 'REGCODE',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'วันเวลาที่จดทะเบียนอาคารชุด',
    listname: 'REGDATE_',
    align: 'left',
    minWidth: 250,
  },
  {
    name: 'พื้นที่ห้องชุด (ตารางเมตร) (ไม่รวมระเบียง)',
    listname: 'CONDOROOMAREA',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'ราคาทุนทรัพย์จดทะเบียน',
    listname: 'REGAMT_',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'ราคาประเมิน ต่อ ตร.เมตร',
    listname: 'VALAMTPERWA_',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'ราคาประเมินรวมจดทะเบียน',
    listname: 'VAL_AMT_',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'ราคารวมค่าใช้จ่ายที่แก้ไขจากเจ้าหน้าที่(บาท)',
    listname: 'FEE_AMT_',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'รายการแปลงจดทะเบียนรวม',
    listname: 'NUMREG',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'พื้นที่ส่วนบุคคลอื่นๆ',
    listname: 'CONSTRFLAG',
    align: 'left',
    minWidth: 250,
  },
  {
    name: 'สถานะข้อมูล',
    listname: 'STATUS_',
    align: 'left',
    minWidth: 250,
  },
  {
    name: 'วัน/เดือน/ปี',
    listname: 'DATEIMPORT',
    align: 'left',
    minWidth: 200,
  },
];
   

//22.ข้อมูลรายการเปลี่ยนแปลงประจำวันของโฉนดที่ดิน 312
export const columReceivingPlot14 = [
  {
    name: 'ลำดับที่',
    listname: 'ROWNUMBER',
    align: 'center',
    minWidth: 150,
  },
  {
    name: 'ชื่อสำนักงานที่ดิน',
    listname: 'BRANCHNAME',
    align: 'left',
    minWidth: 300,
  },
  {
    name: 'ชื่ออปท.',
    listname: 'OPTNAME',
    align: 'left',
    minWidth: 300,
  },
  {
    name: 'ประเภทเอกสารสิทธิ',
    listname: 'PARCELTYPENAME',
    align: 'left',
    minWidth: 180,
  },
  {
    name: 'เลขที่เอกสารสิทธิโฉนด',
    listname: 'PARCELNO',
    align: 'right',
    minWidth: 230,
  },
  {
    name: 'ลำดับที่เลขที่ใบสั่ง',
    listname: 'PROCESS_ORDER_SEQ',
    align: 'right',
    minWidth: 230,
  },
  {
    name: 'ลำดับที่ประเภทการจดทะเบียน',
    listname: 'PROCESS_SEQ',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'เลขที่ใบสั่ง',
    listname: 'ORDERNO',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'รหัสประเภทการจดทะเบียน',
    listname: 'REGCODE',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'วันเวลาที่จดทะเบียน',
    listname: 'REGDATE_',
    align: 'left',
    minWidth: 250,
  },
  {
    name: 'เนื่อที่ไร่-งาน-วา',
    listname: 'RAINUM_',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'ราคาทุนทรัพย์จดทะเบียน',
    listname: 'REGAMT_',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'ราคาประเมิน ต่อ ตร.วา',
    listname: 'VALAMTPERWA_',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'ราคาประเมินรวมจดทะเบียน',
    listname: 'VALAMT_',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'ราคารวมค่าใช้จ่ายที่แก้ไขจากเจ้าหน้าที่(บาท)',
    listname: 'FEEAMT_',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'รายการแปลงจดทะเบียนรวม',
    listname: 'NUMREG',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'สิ่งปลูกสร้าง',
    listname: 'CONSTRFLAG',
    align: 'left',
    minWidth: 250,
  },
  {
    name: 'สถานะข้อมูล',
    listname: 'STATUS_',
    align: 'left',
    minWidth: 250,
  },
  {
    name: 'วัน/เดือน/ปี',
    listname: 'DATEIMPORT',
    align: 'left',
    minWidth: 200,
  },
];
//23.ข้อมูลรายการเปลี่ยนแปลงประจำวันของโฉนดที่ดิน 313
export const columReceivingPlot15 = [
  {
    name: 'ลำดับที่',
    listname: 'ROWNUMBER',
    align: 'center',
    minWidth: 150,
  },
  {
    name: 'ชื่อสำนักงานที่ดิน',
    listname: 'BRANCHNAME',
    align: 'left',
    minWidth: 300,
  },
  {
    name: 'ชื่ออปท.',
    listname: 'OPTNAME',
    align: 'left',
    minWidth: 300,
  },
  {
    name: 'ประเภทเอกสารสิทธิ',
    listname: 'PARCELTYPENAME',
    align: 'right',
    minWidth: 180,
  },
  {
    name: 'เลขที่เอกสารสิทธิ น.ส.3ก',
    listname: 'PARCEL_LAND_NO',
    align: 'right',
    minWidth: 230,
  },
  {
    name: 'ลำดับที่เลขที่ใบสั่ง',
    listname: 'PROCESS_ORDER_SEQ',
    align: 'right',
    minWidth: 230,
  },
  {
    name: 'ลำดับที่ประเภทการจดทะเบียน',
    listname: 'PROCESS_SEQ',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'เลขที่ใบสั่ง',
    listname: 'ORDERNO',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'รหัสประเภทการจดทะเบียน',
    listname: 'REGCODE',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'วันเวลาที่จดทะเบียน',
    listname: 'REGDATE_',
    align: 'left',
    minWidth: 250,
  },
  {
    name: 'เนื่อที่ไร่-งาน-วา',
    listname: 'RAINUM_',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'ราคาทุนทรัพย์จดทะเบียน',
    listname: 'REGAMT_',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'ราคาประเมิน ต่อ ตร.วา',
    listname: 'VALAMTPERWA_',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'ราคาประเมินรวมจดทะเบียน',
    listname: 'VALAMT_',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'ราคารวมค่าใช้จ่ายที่แก้ไขจากเจ้าหน้าที่(บาท)',
    listname: 'FEEAMT_',
    align: 'left',
    minWidth: 250,
  },
  {
    name: 'รายการแปลงจดทะเบียนรวม',
    listname: 'NUMREG',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'สิ่งปลูกสร้าง',
    listname: 'CONSTRFLAG',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'สถานะข้อมูล',
    listname: 'STATUS_',
    align: 'left',
    minWidth: 250,
  },
  {
    name: 'วัน/เดือน/ปี',
    listname: 'DATEIMPORT',
    align: 'left',
    minWidth: 200,
  },
];

//24.ข้อมูลรายการเปลี่ยนแปลงประจำวันสิ่งปลูกสร้างบนโฉนดที่ดิน 314 
//24.ข้อมูลรายการเปลี่ยนแปลงประจำวันสิ่งปลูกสร้างบน น.ส.3ก  315
export const columReceivingPlot16 = [
  {
    name: 'ลำดับที่',
    listname: 'ROWNUMBER',
    align: 'center',
    minWidth: 150,
  },
  {
    name: 'ชื่อสำนักงานที่ดิน',
    listname: 'BRANCHNAME',
    align: 'left',
    minWidth: 300,
  },
  {
    name: 'ชื่ออปท.',
    listname: 'OPTNAME',
    align: 'left',
    minWidth: 300,
  },
  {
    name: 'ประเภทเอกสารสิทธิ',
    listname: 'PARCELTYPENAME',
    align: 'left',
    minWidth: 180,
  },
  {
    name: 'เลขที่เอกสารสิทธิ',
    listname: 'PARCELNO',
    align: 'right',
    minWidth: 230,
  },
  {
    name: 'ลำดับที่เลขที่ใบสั่ง',
    listname: 'PROCESS_ORDER_SEQ',
    align: 'right',
    minWidth: 230,
  },
  {
    name: 'ลำดับที่ประเภทการจดทะเบียน',
    listname: 'PROCESS_SEQ',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'เลขที่ใบสั่ง',
    listname: 'ORDERNO',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'รหัสประเภทการจดทะเบียน',
    listname: 'REGCODE',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'วันเวลาที่จดทะเบียน',
    listname: 'REGDATE_',
    align: 'left',
    minWidth: 250,
  },
  {
    name: 'สิ่งปลูกสร้าง (กรมที่ดิน)',
    listname: 'CONSTRNAME',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'จำนวนชั้น',
    listname: 'FLOORNO',
    align: 'right',
    minWidth: 100,
  },
  {
    name: 'ความกว้าง',
    listname: 'WIDTH',
    align: 'right',
    minWidth: 100,
  },
  {
    name: 'ความยาว',
    listname: 'LENGTH',
    align: 'right',
    minWidth: 100,
  },
  {
    name: 'พื้นที่รวมของสิ่งปลูกสร้าง(ตร.ม.)',
    listname: 'AREA',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'จำนวนปีหักค่าเสื่อม',
    listname: 'CONSTRYEAR',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'อายุสิ่งปลูกสร้าง (ปี)',
    listname: 'CONSTRAGE',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'ราคาสิ่งปลูกสร้างทั้งสิ้น',
    listname: 'VATAMT_',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'ราคาประเมินรวมที่ใช้จริง(ตามสัดส่วนที่โอน)',
    listname: 'VALREAL_',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'ราคาค่าเสื่อม',
    listname: 'DEPRECIATION_',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'ราคาประเมินสิ่งปลูกสร้าง',
    listname: 'VALPMETER_',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'รวมราคาประเมินสิ่งปลูกสร้าง',
    listname: 'VALMETERTOT_',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'สถานะข้อมูล',
    listname: 'STATUS_',
    align: 'left',
    minWidth: 250,
  },
  {
    name: 'วัน/เดือน/ปี',
    listname: 'DATEIMPORT',
    align: 'left',
    minWidth: 200,
  },
];
//25.ข้อมูลรายการเปลี่ยนแปลงประจำวันสิ่งปลูกสร้างบน น.ส.3ก  315
export const columReceivingPlot17 = [
  {
    name: 'ลำดับที่',
    listname: 'ROWNUMBER',
    align: 'center',
    minWidth: 150,
  },
  {
    name: 'ชื่อสำนักงานที่ดิน',
    listname: 'BRANCHNAME',
    align: 'left',
    minWidth: 300,
  },
  {
    name: 'ชื่ออปท.',
    listname: 'OPTNAME',
    align: 'left',
    minWidth: 300,
  },
  {
    name: 'ประเภทเอกสารสิทธิ',
    listname: 'PARCELTYPENAME',
    align: 'left',
    minWidth: 180,
  },
  {
    name: 'เลขที่เอกสารสิทธิ',
    listname: 'PARCEL_LAND_NO',
    align: 'right',
    minWidth: 230,
  },
  {
    name: 'ลำดับที่เลขที่ใบสั่ง',
    listname: 'PROCESS_ORDER_SEQ',
    align: 'right',
    minWidth: 230,
  },
  {
    name: 'ลำดับที่ประเภทการจดทะเบียน',
    listname: 'PROCESS_SEQ',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'เลขที่ใบสั่ง',
    listname: 'ORDERNO',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'รหัสประเภทการจดทะเบียน',
    listname: 'REGCODE',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'วันเวลาที่จดทะเบียน',
    listname: 'REGDATE_',
    align: 'left',
    minWidth: 250,
  },
  {
    name: 'สิ่งปลูกสร้าง (กรมที่ดิน)',
    listname: 'CONSTRNAME',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'จำนวนชั้น',
    listname: 'FLOORNO',
    align: 'right',
    minWidth: 100,
  },
  {
    name: 'ความกว้าง',
    listname: 'WIDTH',
    align: 'right',
    minWidth: 100,
  },
  {
    name: 'ความยาว',
    listname: 'LENGTH',
    align: 'right',
    minWidth: 100,
  },
  {
    name: 'พื้นที่รวมของสิ่งปลูกสร้าง(ตร.ม.)',
    listname: 'AREA',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'จำนวนปีหักค่าเสื่อม',
    listname: 'CONSTRYEAR',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'อายุสิ่งปลูกสร้าง (ปี)',
    listname: 'CONSTRAGE',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'ราคาสิ่งปลูกสร้างทั้งสิ้น',
    listname: 'VATAMT_',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'ราคาประเมินรวมที่ใช้จริง(ตามสัดส่วนที่โอน)',
    listname: 'VALREAL_',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'ราคาค่าเสื่อม',
    listname: 'DEPRECIATION_',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'ราคาประเมินสิ่งปลูกสร้าง',
    listname: 'VALPMETER_',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'รวมราคาประเมินสิ่งปลูกสร้าง',
    listname: 'VALMETERTOT_',
    align: 'right',
    minWidth: 250,
  },
  {
    name: 'สถานะข้อมูล',
    listname: 'STATUS_',
    align: 'left',
    minWidth: 250,
  },
  {
    name: 'วัน/เดือน/ปี',
    listname: 'DATEIMPORT',
    align: 'left',
    minWidth: 200,
  },
];