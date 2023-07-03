import React from 'react'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { Button, Stack, Grid, Typography } from '@mui/material';
import BasicDateTimePicker from '../../@conponents/MyDatePicker';

interface BetweenDatetime {
    startDate?:any;
    setStartDate?:any;
    endDate?:any;
    setEndDate?:any;
    onSearch?:(data:any)=> void;
    onClearValue?:(data:any)=> void;
}

export default function BetweenDatetime(props: BetweenDatetime) {
    const [isOpen, setIsOpen] = React.useState(false)

    const handleOpen = () => {
        setIsOpen(!isOpen)
    }

    const onchangesStartDate =(value:any)=>{
        props.setStartDate(value);
    }
    const onchangesEndtDate =(value:any)=>{
        props.setEndDate(value);
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
                            <BasicDateTimePicker values={props.startDate} onChange={onchangesStartDate} namLabel='ตั้งแต่วันที่'/>
                            <BasicDateTimePicker values={props.endDate} onChange={onchangesEndtDate} namLabel='ถึงวันที่'/>
                            <Button variant='contained' size='small' onClick={props.onSearch}>ค้นหา</Button>
                            <Button variant='contained' size='small' color='error' sx={{color:'white'}} onClick={props.onClearValue}>ล้างค่า</Button>
                        </Stack>
                    </Grid>
                </Grid>
            }
        </div>
    )
}
