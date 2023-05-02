import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface IAutocompleteTypes{
  nameLabel?: string;
  onchange?: (value: string) => void;
  datalist?: any;
  size?: 'small' | 'medium' | 'large';
}

const options = ['เพิ่มเติม'];

export default function AutocompleteTypes({nameLabel = 'กรุณาเลือกรายการ', onchange, datalist, size = 'medium'}: IAutocompleteTypes) {
  const [value, setValue] = React.useState(null);

  const handleOnChange = (event:any) => {
    if(onchange){
      onchange(event.target.value)
    }
  }

  return (
    <>
      <Autocomplete
        value={value}
        onChange={handleOnChange}
        id="controllable-states-demo"
        options={options}
        sx={{ width: '100%' }}
        renderInput={(params) => <TextField {...params} label={nameLabel} size={'medium'}/>}
      />
    </>
  );
}