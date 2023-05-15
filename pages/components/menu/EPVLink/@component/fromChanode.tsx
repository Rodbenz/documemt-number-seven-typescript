import { Grid } from '@mui/material';
import React from 'react'
import WidthTextField from '../../../@conponents/TextFieldInput';
import AutocompleteUTMMAP2 from '../../../@conponents/Autocopletes/AutocompleteUTMMAP2';
import AutocompleteUTMASCALE from '../../../@conponents/Autocopletes/AutocompleteUTMASCALE';
import AutocompleteAmphur from '../../../@conponents/Autocopletes/AutocompleteAmphur';
import AutocompleteTumbul from '../../../@conponents/Autocopletes/AutocompleteTumbul';
import { useCartContext } from '@/context/Cartcontext';

interface IfromChanode {
    types?: number;
    periods?: any;
    province?: any;
    branch?: any;
}

export default function FromChanode({ types, periods, province, branch }: IfromChanode) {
    const { setDataLandList } = useCartContext()
    const [landNo, setLandNo] = React.useState<string>('');
    const [landUTMMAP1, setLandUTMMAP1] = React.useState<string>('');
    const [landUTMMAP2, setLandUTMMAP2] = React.useState<any>(null);
    const [landUTMMAP3, setLandUTMMAP3] = React.useState<any>('');
    const [landUTMMAP4, setLandUTMMAP4] = React.useState<any>('');
    const [landUTMSCALE, setLandUTMSCALE] = React.useState<any>(null);
    const [chanode, setChanode] = React.useState<any>('');
    const [page, setPage] = React.useState<any>('');
    const [amphur, setAmphur] = React.useState<any>(null);
    const [tombol, setTombol] = React.useState<any>(null);

    const handlelandNo = (value: string) => {
        setLandNo(value);
    }
    const handlelandUTMMAP1 = (value: string) => {
        setLandUTMMAP1(value);
    }
    const handlelandUTMMAP2 = (value: string) => {
        setLandUTMMAP2(value);
    }
    const handlelandUTMMAP3 = (value: string) => {
        setLandUTMMAP3(value);
    }
    const handlelandUTMMAP4 = (value: string) => {
        setLandUTMMAP4(value);
    }
    const handlelandUTMSCALE = (value: string) => {
        setLandUTMSCALE(value);
    }
    const handleChanode = (value: string) => {
        setChanode(value);
    }
    const handlePage = (value: string) => {
        setPage(value);
    }
    const handleAmphur = (value: string) => {
        setAmphur(value);
        setTombol(null);
    }
    const handleTombol = (value: string) => {
        setTombol(value);
    }

    React.useEffect(() => {
        let newDataObj: any = new Object();
        newDataObj.LAND_NO = landNo != '' ? landNo : '';
        newDataObj.UTMMAP1 = landUTMMAP1 != '' ? landUTMMAP1 : '';
        newDataObj.UTMMAP2 = landUTMMAP2 != null ? landUTMMAP2.value : '';
        newDataObj.UTMMAP3 = landUTMMAP3 != '' ? landUTMMAP3 : '';
        newDataObj.UTMMAP4 = landUTMMAP4 != '' ? landUTMMAP4 : '';
        newDataObj.UTMSCALE = landUTMSCALE != null ? landUTMSCALE.value : '';
        Object.keys(newDataObj).length > 0 && setDataLandList(newDataObj);
    }, [landNo, landUTMMAP1, landUTMMAP2, landUTMMAP3, landUTMMAP4, landUTMSCALE])
    return (
        <div>
            {types == 1 &&
                <Grid container justifyContent="center" spacing={2} pb={2}>
                    <Grid item xs={5}>
                        <WidthTextField values={landNo} onchanges={handlelandNo} nameText='เลขที่ดิน' />
                    </Grid>
                    <Grid item xs={3}>
                        <WidthTextField values={landUTMMAP1} onchanges={handlelandUTMMAP1} nameText='แผ่นที่ภูมิประเทศ (ตัวอย่าง 4925)' />
                    </Grid>
                    <Grid item xs={2}>
                        <AutocompleteUTMMAP2 values={landUTMMAP2} onchange={handlelandUTMMAP2} nameLabel='UTMMAP2' />
                    </Grid>
                    <Grid item xs={5}>
                        <WidthTextField values={landUTMMAP3} onchanges={handlelandUTMMAP3} nameText='ระวาง (ตัวอย่าง 0400)' />
                    </Grid>
                    <Grid item xs={5}>
                        <WidthTextField values={landUTMMAP4} onchanges={handlelandUTMMAP4} nameText='แผ่นที่ (ตัวอย่าง 03)' />
                    </Grid>
                    <Grid item xs={5}>
                        <AutocompleteUTMASCALE values={landUTMSCALE} onchange={handlelandUTMSCALE} nameLabel='มาตราส่วน (ตัวอย่าง 1:2000)' />
                    </Grid>
                    <Grid item xs={5}>
                    </Grid>
                </Grid>
            }
            {types == 2 &&
                <Grid container justifyContent="center" spacing={2} pb={2}>
                    <Grid item xs={5}>
                        <WidthTextField values={chanode} onchanges={handleChanode} nameText='เลขโฉนด' />
                    </Grid>
                    <Grid item xs={5}>
                        <WidthTextField values={page} onchanges={handlePage} nameText='หน้าสำรวจ' />
                    </Grid>
                    <Grid item xs={5}>
                        <AutocompleteAmphur values={amphur} onchange={handleAmphur} nameLabel='อำเภอ' province={province} branch={branch} />
                    </Grid>
                    <Grid item xs={5}>
                        <AutocompleteTumbul values={tombol} onchange={handleTombol} nameLabel='ตำบล' province={province} amphur={amphur} />
                    </Grid>
                </Grid>
            }
        </div>
    )
}
