import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { masStatus_R, masYears } from '@/service/mas';

interface IAutocompleteYear {
  values?: any;
  nameLabel?: string;
  onchange?: (value: string) => void;
  datalist?: any;
  size?: 'small' | 'medium' | 'large' | undefined;
}

export default function AutocompleteTypeMore({values, nameLabel = 'กรุณาเลือกประเภท', onchange, datalist, size }: IAutocompleteYear) {
  const [value, setValue] = React.useState(null);
  const [options, setOptions] = React.useState<any>([]);

  const res_masStatus_R = async () => {
    try{
      let res = await masStatus_R()
      await setOptions(res)
    }catch(err){
      console.log(err)
    }
  }

  const handleOnChange = (event: any, value:any) => {
    // setValue(value);
    if (onchange) {
      onchange(value)
    }
  }

  React.useEffect(() => {
    res_masStatus_R()
  }, [])

  React.useEffect(() => {
    setValue(values)
  }, [values])
  return (
    <>
      <Autocomplete
        value={value}
        onChange={handleOnChange}
        options={options}
        getOptionLabel={(option:any) => option.NAME}
        sx={{ width: '100%' }}
        renderInput={(params) => <TextField {...params} label={nameLabel} size={'medium'}/>}
      />
    </>
  );
}