import React from 'react';
import { Grid, Box, Stack, Button, Typography } from "@mui/material";
import { DASHBORD_SEND2, Dash_REPORT_2 } from '@/service/report';
import Dashgboadbar from '../@component/dashgboadbar';

function calrai(x: any) {
    return x + " รายการ";
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

interface IFCreatDataDashboardListProvince {
    dataSendProvince?: any;
    setDataSendProvince?: any;
    setDataSendBranch?: any;
}

export default function CreatDataDashboardListProvince({ dataSendProvince, setDataSendProvince, setDataSendBranch }: IFCreatDataDashboardListProvince) {
    const [dataList, setDataList] = React.useState([]);
    const [lebel, setLabel] = React.useState([]);
    const [dataSuccess, setDataSuccess] = React.useState([]);
    const [dataPerpare, setDtatPerpare] = React.useState([]);
    const [labelp, setLabelp] = React.useState("");

    const res_dashboardReport1 = async () => {
        let dataSend: any = dataSendProvince;
        dataSend.GOV_TYPE = String(dataSend.GOV_TYPE);
        dataSend.SEMI_CODE = String(dataSend.SEMI_CODE);
        try {
            let res = await DASHBORD_SEND2(dataSend);
            console.log(res, 'res_dashboardReport1');
            await setDataList(res)
            await createDataDash(res)
        } catch (e) {
            console.log(e);

        }
    }

    const createDataDash = (data: any) => {
        let objlabel: any = [];
        let dataSuccess: any = [];
        let dataPerpare: any = [];
        for (let i = 0; i < data.length; i++) {
            objlabel.push(data[i].CHANGWAT_NAME);
            dataSuccess.push(data[i].ST_POSTDOL3);
            dataPerpare.push(data[i].ST_POSTDOL3);
        }
        setLabel(objlabel);
        setDataSuccess(dataSuccess);
        setDtatPerpare(dataPerpare);
    }

    const handleOnchange = (data: any) => {
        console.log(data.index, 'handleOnchange');
        let graph = data.index;
        for (let i = 0; i < dataList.length; i++) {
            if (graph === i) {
                console.log(dataList[i], 'handleOnchange');
                setDataSendBranch(dataList[i]);
            }
        }

    }

    const data = {
        labels: lebel,
        datasets: [
            {
                label: "ส่งสำเร็จ",
                data: dataSuccess,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                borderWidth: 2,
                dataList: dataList
            },
            // {
            //     label: "ที่รับยังไม่ได้จากกรมที่ดิน",
            //     data: percensmax,
            //     borderColor: 'rgb(255, 99, 132)',
            //     backgroundColor: 'rgba(255, 99, 132, 0.5)',
            //     borderWidth: 2,
            //     dataList: dataList
            // },
        ],
    };

    const options:any= {
        responsive: true,
        scales: {
            // remove the [ & ] here
            x: {
                // stacked: true,
                ticks: {
                }
            },
            y: {
                // stacked: true,
                ticks: {
                    callback: function (value: string) {
                        return value + " รายการ"
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
        setDataSendProvince({})
    }

    React.useEffect(() => {
        res_dashboardReport1()
        if (Object.keys(dataSendProvince).length > 0) {
            setLabelp(dataSendProvince.FLAG_NAME);
        }
    }, [dataSendProvince])
    return (
        <Box>
            <Stack direction={'row'} justifyContent={'space-between'} pl={20}>
                <Typography sx={{ color: '#4267b2', fontSize: '21px' }}>{`${labelp}`}</Typography>
                <Button variant={'outlined'} color={'success'} onClick={handleBackPage}>{'<< กลับกราฟแรก'}</Button>
            </Stack>
            <Grid container>
                <Grid item xs={0}>
                </Grid>
                <Grid item xs={12}>
                    <Dashgboadbar data={data} options={options} handleOnchange={handleOnchange} />
                </Grid>
                <Grid item xs={0}>
                </Grid>
            </Grid>
        </Box>
    )
}
