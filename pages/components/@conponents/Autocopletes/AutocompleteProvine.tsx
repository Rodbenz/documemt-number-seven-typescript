import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { masProvince } from '@/service/mas';

interface IAutocompleteProvine {
  values?: any;
  nameLabel?: string;
  onchange?: (value: string) => void;
  size?: 'small' | 'medium' | 'large';
}

export default function AutocompleteProvine({ values, nameLabel = 'กรุณาเลือกรายการ', onchange, size = 'medium' }: IAutocompleteProvine) {
  const [value, setValue] = React.useState(null);
  const [options, setOptions] = React.useState<any[]>([]);

  const res_province = async () => {
    try {
      let res = await masProvince()
      console.log(res, 'res');
      
      if (res) {
        setOptions(res)
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleOnChange = (event: any, value: any) => {
    // setValue(value)
    if (onchange) {
      onchange(value)
    }
  }

 React.useEffect(() => {
    res_province()
 }, []);
 React.useEffect(() => {
    setValue(values)
 }, [values]);
  return (
    <>
      <Autocomplete
        onChange={handleOnChange}
        id="controllable-states-demo"
        options={options}
        getOptionLabel={(option) => option.PROVINCE_NAME_TH}
        value={value}
        sx={{ width: '100%' }}
        renderInput={(params) => <TextField {...params} label={nameLabel} size={'medium'} />}
      />
    </>
  );
}