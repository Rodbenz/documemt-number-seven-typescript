import React from 'react';
import { Grid, Box, Stack, Button, Typography } from "@mui/material";
import { Dash_REPORT_3 } from '@/service/report';
import Dashgboadbar from '../@component/dashgboadbar';

function calrai(x: any) {
    return x + "%";
}
const tooltip = {
    callbacks: {
        label: function (context: any) {
            let label = context.label || '';
            let dataset = context.dataset || '';
            // console.log(context);
            if (label) {
                label += ' : ';
            }
            if (context.parsed !== null) {
                label += `${dataset.label} ${calrai(context.parsed.y)}`
            }
            return label;
        },
        position: 'average'
    }
}

interface IFCreatDataDashboardListBrach {
    dataSendProvince?: any;
    setDataSendProvince?: any;
    dataSendBranch?: any;
    setDataSendBranch?: any;
}

export default function CreatDataDashboardListBrach({ dataSendProvince, setDataSendProvince, setDataSendBranch, dataSendBranch }: IFCreatDataDashboardListBrach) {
    const [dataList, setDataList] = React.useState([]);
    const [lebel, setLabel] = React.useState([]);
    const [percens, setPercens] = React.useState([]);
    const [percensmax, setPercensmax] = React.useState([]);
    const [labelp, setLabelp] = React.useState("");

    const res_dashboardReport1 = async () => {
        let dataSend: any = Object();
        dataSend.GOV_TYPE = String(dataSendBranch.GOV_TYPE);
        dataSend.SEMI_CODE = String(dataSendBranch.SEMI_CODE);
        dataSend.CHANGWAT_CODE = String(dataSendBranch.PROVINCE_CODE);
        try {
            let res = await Dash_REPORT_3(dataSend);
            console.log(res, 'res_dashboardReport1', dataSend);
            await setDataList(res)
            await createDataDash(res)
        } catch (e) {
            console.log(e);

        }
    }

    const createDataDash = (data: any) => {
        let objlabel: any = [];
        let percens: any = [];
        let datapercensmax: any = [];
        for (let i = 0; i < data.length; i++) {
            objlabel.push(data[i].BRANCH_NAME);
            percens.push(data[i].PERCENTS);
            let minus = (100 - data[i].PERCENTS)
            datapercensmax.push(minus);
        }
        setLabel(objlabel);
        setPercens(percens);
        setPercensmax(datapercensmax);
    }

    const handleOnchange = (data: any) => {
        console.log(data.index, 'handleOnchange');
        let graph = data.index;
        for (let i = 0; i < dataList.length; i++) {
            if (graph === i) {
                console.log(dataList[i], 'handleOnchange');
                // setDataSendBranch(dataList[i]);
            }
        }

    }

    const data = {
        labels: lebel,
        datasets: [
            {
                label: "ที่รับจากกรมที่ดิน",
                data: percens,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                borderWidth: 2,
                dataList: dataList
            },
            {
                label: "ที่รับยังไม่ได้จากกรมที่ดิน",
                data: percensmax,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderWidth: 2,
                dataList: dataList
            },
        ],
    };

    const options: any = {
        responsive: true,
        scales: {
            // remove the [ & ] here
            x: {
                stacked: true,
                ticks: {
                }
            },
            y: {
                stacked: true,
                ticks: {
                    callback: function (value: string) {
                        return value + "%"
                    }
                }
            },
        },
        plugins: {
            legend: {
                display: true,
                labels: {
                    usePointStyle: true,
                    pointStyle: "line"
                }
            },
            tooltip: tooltip
        }
    }

    const handleBackPage = () => {
        // setDataSendProvince({})
        setDataSendBranch({})
    }

    React.useEffect(() => {
        res_dashboardReport1()
        if (Object.keys(dataSendProvince).length > 0 && Object.keys(dataSendBranch).length > 0) {
            setLabelp(`${dataSendProvince.SEMI_NAME} จังหวัด${dataSendBranch.PROVINCE_NAME}`);
        }
    }, [dataSendBranch])
    return (
        <Box>
            <Stack direction={'row'} justifyContent={'space-between'}>
                <Typography sx={{ color: '#4267b2', fontSize: '21px' }}>{`${labelp}`}</Typography>
                <Button variant={'outlined'} color={'success'} onClick={handleBackPage}>{'<< กลับหน้ากราฟจังหวัด'}</Button>
            </Stack>
            <Grid container>
                <Grid item xs={1.5}>
                </Grid>
                <Grid item xs={9}>
                    <Dashgboadbar data={data} options={options} handleOnchange={handleOnchange} />
                </Grid>
                <Grid item xs={1.5}>
                </Grid>
            </Grid>
        </Box>
    )
}
