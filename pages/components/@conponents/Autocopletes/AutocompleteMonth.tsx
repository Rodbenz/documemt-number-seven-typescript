import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import month from '@/libs/month';

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

  const handleOnChange = (event: any, value: any) => {
    // setValue(value)
    if (onchange) {
      onchange(value)
    }
  }

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