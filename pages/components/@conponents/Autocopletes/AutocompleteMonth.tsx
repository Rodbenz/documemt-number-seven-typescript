import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import month from '@/libs/month';
import dayjs from 'dayjs';

interface IAutocompleteMonth {
  values?: any;
  nameLabel?: string;
  onchange?: (value: string) => void;
  datalist?: any;
  size?: 'small' | 'medium' | 'large';
}

export default function AutocompleteMonth({ values, nameLabel = 'กรุณาเลือกรายการ', onchange, datalist, size }: IAutocompleteMonth) {
  const [value, setValue] = React.useState(null);
  const [options, setOptions] = React.useState<any>([]);

  const setdefault = () => {
    let monthnum = dayjs(new Date()).format('MM');
    for (let i = 0; i < month.length; i++) {
      console.log(month[i], monthnum);
      if (monthnum == month[i].MONTH_ID) {
        onchange && onchange(month[i]);
      }

    }

  }

  const handleOnChange = (event: any, value: any) => {
    // setValue(value)
    if (onchange) {
      onchange(value)
    }
  }

  React.useEffect(() => {
    setdefault()
  }, []);
  React.useEffect(() => {
    if (values == null) {
      setdefault()
    }
  }, [values]);

  React.useEffect(() => {
    setValue(values)
  }, [values]);
  return (
    <>
      <Autocomplete
        onChange={handleOnChange}
        id="controllable-states-demo"
        options={month}
        getOptionLabel={(option: any) => option.MONTH_NAME_TH || ''}
        value={value}
        sx={{ width: '100%' }}
        renderInput={(params) => <TextField {...params} label={nameLabel} size={'small'} />}
      />
    </>
  );
}