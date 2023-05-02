import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

interface IAutocompleteAgency{
  nameLabel?: string;
  onchange?: (value: string) => void;
  sizes?: 'small' | 'medium' | 'large';
}
const options = ['ช่าง', 'it'];

export default function AutocompleteAgency({nameLabel = 'กรุณาเลือกรายการ', onchange, sizes = 'medium'}: IAutocompleteAgency) {
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
        renderInput={(params) => <TextField {...params} label={nameLabel} size='medium' />}
      />
    </>
  );
}