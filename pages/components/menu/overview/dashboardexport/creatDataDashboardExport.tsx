import React from 'react';
import { Grid, Box } from "@mui/material";
import { DASHBORD_SEND1 } from '@/service/report';
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

interface IFCreatDataDashboardExport{
    setDataSendProvince?:any;
}

export default function CreatDataDashboardExport({setDataSendProvince}:IFCreatDataDashboardExport) {
    const [dataList, setDataList] = React.useState([]);
    const [lebel, setLabel] = React.useState([]);
    const [costSuccess, setCostSuccess] = React.useState([]);
    const [costPerpare, setCostPerpare] = React.useState([]);

    const res_dashboardReport1 = async () => {
        let dataSend: any = new Object();
        dataSend.GOV_TYPE = '1'
        try {
            let res = await DASHBORD_SEND1(dataSend);
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
            objlabel.push(data[i].FLAG_NAME);
            dataSuccess.push(data[i].ST_POSTDOL3);
            dataPerpare.push(data[i].ST_POSTDOL1);
        }
        setLabel(objlabel);
        setCostSuccess(dataSuccess);
        setCostPerpare(dataPerpare)
    }

    const handleOnchange = (data: any) => {
        console.log(data.index, 'handleOnchange');
        let graph = data.index;
        for (let i = 0; i < dataList.length; i++) {
            if (graph === i) {
                console.log(dataList[i], 'handleOnchange');
                setDataSendProvince(dataList[i]);
            }
        }

    }

    const data = {
        labels: lebel,
        datasets: [
            {
                label: "ส่งสำเร็จ",
                data: costSuccess,
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
                borderWidth: 2,
                dataList: dataList
            },
            {
                label: "เตรียมส่ง",
                data: costPerpare,
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderWidth: 2,
                dataList: dataList
            },
        ],
    };

    const options: any= {
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


    React.useEffect(() => {
        res_dashboardReport1()
    }, [])
    return (
        <Box>
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