import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

interface IAutocompleteYear {
  nameLabel?: string;
  onchange?: (value: string) => void;
  datalist?: any;
  size?: 'small' | 'medium' | 'large' | undefined;
}

export default function MydatePikerYears({ nameLabel = 'กรุณาเลือกรายการ', onchange, datalist, size }: IAutocompleteYear) {
  const [value, setValue] = React.useState(null);

  const handleOnChange = (newValue: any) => {
    console.log(newValue, 'event');
    
    setValue(newValue);
    if (onchange) {
      onchange(newValue)
    }
  }

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label={'ปี'}
          views={['year']}
          onChange={(newValue) => {handleOnChange(newValue)}}
        />
      </LocalizationProvider>
    </>
  );
}