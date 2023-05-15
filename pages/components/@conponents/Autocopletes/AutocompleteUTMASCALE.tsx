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

const options =  [
  { name: "1:500", value: "500" },
  { name: "1:1000", value: "1000" },
  { name: "1:2000", value: "2000" },
  { name: "1:4000", value: "4000" },
];

export default function AutocompleteUTMASCALE({values, nameLabel = 'กรุณาเลือกรายการ', onchange, datalist, size = 'medium'}: IAutocompleteOpt) {
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