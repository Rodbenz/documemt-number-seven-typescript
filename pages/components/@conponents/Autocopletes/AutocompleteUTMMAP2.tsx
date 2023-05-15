import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface IAutocompleteOpt{
  values?: any;
  nameLabel?: string;
  onchange?: (value: string) => void;
  datalist?: any;
  size?: 'small' | 'medium' | 'large';
}

const options = [
  { name: "I", value: '1' },
  { name: "II", value: '2' },
  { name: "III", value: '3' },
  { name: "IV", value: '4' },
];

export default function AutocompleteUTMMAP2({values, nameLabel = 'กรุณาเลือกรายการ', onchange, datalist, size = 'medium'}: IAutocompleteOpt) {
  const [value, setValue] = React.useState(null);

  const handleOnChange = (event:any, value:any) => {
    setValue(value);
    if(onchange){
      onchange(value)
    }
  }

  React.useEffect(() => {
    if(values){
      setValue(values);
    }
  }, [values]);

  return (
    <>
      <Autocomplete
        value={value}
        onChange={handleOnChange}
        id="controllable-states-demo"
        options={options}
        sx={{ width: '100%' }}
        getOptionLabel={(option) => option.name || ''}
        renderInput={(params) => <TextField {...params} label={nameLabel} size={'medium'}/>}
      />
    </>
  );
}