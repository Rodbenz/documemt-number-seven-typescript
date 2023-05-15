import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { masMunisan } from '@/service/mas';

interface IAutocompleteOpt{
  values?: any;
  nameLabel?: string;
  onchange?: (value: string) => void;
  datalist?: any;
  size?: 'small' | 'medium' | 'large';
}


export default function AutocompleteOpt({values, nameLabel = 'กรุณาเลือกรายการ', onchange, datalist, size = 'medium'}: IAutocompleteOpt) {
  const  [options, setOptions] = React.useState<any>([]);
  const [value, setValue] = React.useState(null);


  const res_masMunisan = async () => {
    try {
      let res = await masMunisan()
      console.log(res, 'res_masMunisan');
      
      if (res) {
        setOptions(res)
      }
    }catch(e){
      console.log(e)
    }
  }
  const handleOnChange = (event:any, value:any) => {
    if(onchange){
      onchange(value)
    }
  }

  React.useEffect(() => {
    res_masMunisan()
  }, [])

  React.useEffect(() => {
    setValue(values)
  }, [values]);

  return (
    <>
      <Autocomplete
        onChange={handleOnChange}
        id="controllable-states-demo"
        options={options}
        getOptionLabel={(option: any) => option.MU_NAME || ""}
        sx={{ width: '100%' }}
        value={value}
        renderInput={(params) => <TextField {...params} label={nameLabel} size={'medium'}/>}
      />
    </>
  );
}