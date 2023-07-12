import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Button, Stack, Grid, Typography } from '@mui/material';
import BasicDateTimePicker from '../../@conponents/MyDatePicker';
import AutocompleteMonth from '../../@conponents/Autocopletes/AutocompleteMonth';
import MydatePikerYears from '../../@conponents/MyDatePickerYears';

interface BetweenDatetime {
    month?:any;
    setMonth?:any;
    year?:any;
    setYear?:any;
    onSearch?:(data:any)=> void;
    onClearValue?:(data:any)=> void;
}

export default function BetweenDatetime(props: BetweenDatetime) {
    const [isOpen, setIsOpen] = React.useState(false)

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    const onchangesMonth =(value:any)=>{
        props.setMonth(value);
    }
    const onchangesYear =(value:any)=>{
        props.setYear(value);
    }



    return (
        <div>
            <Stack direction={'row'} justifyContent={'end'} pr={2}>
                <Button sx={{ color: 'blue' }} onClick={handleOpen}>{isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}ค้นหาช่วงเวลา</Button>
            </Stack>
            {isOpen &&
                <Grid container justifyContent={'center'} pb={1}>
                    <Grid item >
                        <Stack direction={'row'} spacing={1}>
                            {/* <BasicDateTimePicker  values={props.month}  namLabel='ตั้งแต่วันที่'/>
                            <Typography>ถึง</Typography>
                            <BasicDateTimePicker  values={props.month}  namLabel=''/> */}
                            <AutocompleteMonth values={props.month} onchange={onchangesMonth} nameLabel='กรุณาเลือกเดือน'/>
                            <MydatePikerYears values={props.year} onchange={onchangesYear} nameLabel='กรุณาเลือกปี'/>
                            <Button variant='contained' size='small' onClick={props.onSearch}>ค้นหา</Button>
                            <Button variant='contained' size='small' color='error' sx={{color:'white'}} onClick={props.onClearValue}>ล้างค่า</Button>
                        </Stack>
                    </Grid>
                </Grid>
            }
        </div>
    )
}
