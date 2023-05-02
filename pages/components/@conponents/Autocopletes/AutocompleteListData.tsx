import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


interface IAutocompleteListData{
  nameLabel?: string;
  onchange?: (value: string) => void;
  size?: 'small' | 'medium' | 'large';
}

const options = ['กรุณาเลือกข้อมูล', 'กรุณาเลือกข้อมูล'];

export default function AutocompleteListData({nameLabel = 'กรุณาเลือกรายการ', onchange, size = 'medium'}: IAutocompleteListData) {
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
        renderInput={(params) => <TextField {...params} label={nameLabel}  size={'medium'}/>}
      />
    </>
  );
}