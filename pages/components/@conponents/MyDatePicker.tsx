'use server';
import * as React from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DatePicker, DesktopDatePicker, MobileDatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import 'dayjs/locale/th';
import { th } from 'date-fns/locale';
import { TextField } from '@mui/material';
import PropType from 'prop-types';
import LocalizedFormat from 'dayjs/plugin/buddhistEra';
import OverwriteAdapterDayjs from '../../../libs/date_adapter/OverwriteLibs';

dayjs.locale('th');
dayjs.extend(LocalizedFormat);

interface IMyDatePicker {
  namLabel?: string,
  value?: any,
  onChange?: (newValue: any) => void
}

export default function BasicDateTimePicker({ namLabel = 'กรุณากรอก วัน/เดือน/ปี', value, onChange }: IMyDatePicker) {
  // const [value, setValue] = React.useState(null);
  const dateFormat = 'D MMM YYYY';
  

  const handleChange = (newValue:any) => {
    onChange && onChange(newValue);
    let dataitem = newValue;
    console.log(dataitem, 'newValue');
  };

  return (
    <div style={{ width: '100%' }}>
      <LocalizationProvider dateAdapter={OverwriteAdapterDayjs} locale={th} >
        <DesktopDatePicker
          sx={{ width: '100%' }}
          label={namLabel}
          format={dateFormat}
          value={value}
          onChange={(newValue) => handleChange(newValue)}
          
        />
      </LocalizationProvider>
    </div>
  );
}