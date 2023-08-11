'use server';
import * as React from 'react';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker, DesktopDatePicker, MobileDatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import 'dayjs/locale/th';
import LocalizedFormat from 'dayjs/plugin/buddhistEra';
import OverwriteAdapterDayjs from '@/libs/date_adapter/OverwriteLibs';

dayjs.locale('th');
dayjs.extend(LocalizedFormat);

interface IMyDatePicker {
  values?: any,
  namLabel?: string,
  onChange?: (newValue: any) => void,
  dataEdit?: any,
}

export default function BasicDateTimePicker({ values, namLabel = 'กรุณากรอก วัน/เดือน/ปี', onChange, dataEdit }: IMyDatePicker) {
  const [value, setValue] = React.useState(null);
  const dateFormat = 'D MMM YYYY';


  const handleChange = (newValue: any) => {
    // setValue(newValue);
    onChange && onChange(dayjs(newValue).format('YYYY-MM-DD'));
  };

  React.useEffect(() => {
    if (values == null) {
      setValue(values);
    }else{
      let date = values.split('-');
      let d = new Date(date[0], date[1] - 1, date[2]);
      var day: any = dayjs(d)
      setValue(day);
    }
    if (dataEdit && dataEdit.length > 0) {
      let date = dataEdit[0].IMPORT_DATE.split('/');
      let d = new Date(date[2] - 543, date[1] - 1, date[0]);
      var day: any = dayjs(d)
      console.log(day, 'd');
      setValue(day);
    }
  }, [values, dataEdit]);


  return (
    <div style={{ width: '100%' }}>
      <LocalizationProvider dateAdapter={OverwriteAdapterDayjs} adapterLocale='th'>
        <DesktopDatePicker
          sx={{ width: '100%', size: 'small' }}
          label={namLabel}
          format={dateFormat}
          value={value}
          onChange={(newValue) => handleChange(newValue)}

        />
      </LocalizationProvider>
    </div>
  );
}