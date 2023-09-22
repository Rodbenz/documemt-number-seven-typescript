import React from 'react'
import DashboadPie from './@component/dashboadPie'
import { Box, Tab, Tabs, Typography } from '@mui/material'
import CreatDataDashboardListBrach from './dashboardreceiving/creatDataDashboardListBrach';
import CreatDataDashboardReceiving from './dashboardreceiving/creatDataDashboardReceiving';
import CreatDataDashboardListProvince from './dashboardreceiving/creatDataDashboardListProvince';
import CreatDataDashboardExport from './dashboardexport/creatDataDashboardExport';
import CreatDataDashboardExportProvince from './dashboardexport/creatDataDashboardListProvince';
import CreatDataDashboardExportBranch from './dashboardexport/creatDataDashboardListBrach';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function DashLands() {
  const [value, setValue] = React.useState(0);
  const [dataSendProvince, setDataSendProvince] = React.useState<any>({})
  const [dataSendBranch, setDataSendBranch] = React.useState<any>({})

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  React.useEffect(() => {
    setDataSendProvince({})
    setDataSendBranch({})
  }, [value])

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="การรับข้อมูล" {...a11yProps(0)} />
          <Tab label="การส่งออกข้อมูล" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        {Object.keys(dataSendProvince).length == 0 && Object.keys(dataSendBranch).length == 0 && (
          <CreatDataDashboardReceiving setDataSendProvince={setDataSendProvince} />
        )}
        {Object.keys(dataSendProvince).length > 0 && Object.keys(dataSendBranch).length == 0 && (
          <CreatDataDashboardListProvince dataSendProvince={dataSendProvince} setDataSendProvince={setDataSendProvince} setDataSendBranch={setDataSendBranch}/>
        )}
        {Object.keys(dataSendProvince).length > 0 && Object.keys(dataSendBranch).length > 0 && (
          <CreatDataDashboardListBrach dataSendProvince={dataSendProvince} setDataSendProvince={setDataSendProvince} dataSendBranch={dataSendBranch} setDataSendBranch={setDataSendBranch}/>
        )}
      </CustomTabPanel >
      <CustomTabPanel value={value} index={1}>
        {Object.keys(dataSendProvince).length == 0 && Object.keys(dataSendBranch).length == 0 && (
          <CreatDataDashboardExport setDataSendProvince={setDataSendProvince} />
        )}
        {Object.keys(dataSendProvince).length > 0 && Object.keys(dataSendBranch).length == 0 && (
          <CreatDataDashboardExportProvince dataSendProvince={dataSendProvince} setDataSendProvince={setDataSendProvince} setDataSendBranch={setDataSendBranch}/>
        )}
        {Object.keys(dataSendProvince).length > 0 && Object.keys(dataSendBranch).length > 0 && (
          <CreatDataDashboardExportBranch dataSendProvince={dataSendProvince} setDataSendProvince={setDataSendProvince} dataSendBranch={dataSendBranch} setDataSendBranch={setDataSendBranch}/>
        )}
      </CustomTabPanel >
    </Box>
  )
}
