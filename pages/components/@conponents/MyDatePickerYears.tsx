import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import OverwriteAdapterDayjs from '@/libs/date_adapter/OverwriteLibs';
import dayjs from 'dayjs';

interface IAutocompleteYear {
  nameLabel?: string;
  onchange?: (value: string) => void;
  datalist?: any;
  values?:any;
}

export default function MydatePikerYears({ nameLabel = 'กรุณาเลือกรายการ', onchange, datalist, values }: IAutocompleteYear) {
  const [value, setValue] = React.useState(null);

  const handleOnChange = (newValue: any) => {
    console.log(newValue, 'event');
    
    setValue(newValue);
    if (onchange) {
      onchange(newValue)
    }
  }
 
  React.useEffect(()=>{
    setValue(values)
  },[values])

  return (
    <>
      <LocalizationProvider dateAdapter={OverwriteAdapterDayjs}>
        <DatePicker
          label={nameLabel}
          views={['year']}
          value={value}
          onChange={(newValue) => {handleOnChange(newValue)}}
          sx={{ width: '100%', size: 'small' }}
        />
      </LocalizationProvider>
    </>
  );
}