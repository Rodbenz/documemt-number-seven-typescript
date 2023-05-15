import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { masTypeDol } from '@/service/mas';

interface IAutocompleteChond{
  values?: any;
  nameLabel?: string;
  onchange?: (value: string) => void;
  datalist?: any;
  size?: 'small' | 'medium' | 'large';
}


export default function AutocompleteChond({values, nameLabel = 'กรุณาเลือกรายการ', onchange, datalist, size = 'medium'}: IAutocompleteChond) {
  const [value, setValue] = React.useState(null);
  const [options, setOptions] = React.useState<any>([]);

  const res_masDoctype = async () => {
    try{
      let res = await masTypeDol()
      await setOptions(res)
    }catch(err){
      console.log(err)
    }
  }

  const handleOnChange = (event:any, value:any) => {
    // setValue(value);
    if(onchange){
      onchange(value)
    }
  }

  React.useEffect(() => {
    res_masDoctype()
  }, [])

  React.useEffect(() => {
      setValue(values)
  }, [values])

  return (
    <>
      <Autocomplete
        value={value}
        onChange={handleOnChange}
        id="controllable-states-demo"
        options={options}
        sx={{ width: '100%' }}
        getOptionLabel={(option:any) => option.LAND_TYPE}
        renderInput={(params) => <TextField {...params} label={nameLabel} size={'medium'}/>}
      />
    </>
  );
}