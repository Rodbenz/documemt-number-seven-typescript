import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { masPeriods } from '@/service/mas';

interface IAutocompletePeriods{
  values?: any;
  nameLabel?: string;
  onchange?: (value: string) => void;
  datalist?: any;
  size?: 'small' | 'medium' | 'large';
}

export default function AutocompletePeriods({ values, nameLabel = 'กรุณาเลือกรายการ', onchange, datalist, size = 'medium'}: IAutocompletePeriods) {
  const [value, setValue] = React.useState(null);
  const [options, setOptions] = React.useState<any>([]);

  const res_masPeriods = async () => {
    try{
      let res = await masPeriods()
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
    res_masPeriods()
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
        getOptionLabel={(option:any) => option.PERIODS_NAME}
        renderInput={(params) => <TextField {...params} label={nameLabel} size={'medium'}/>}
      />
    </>
  );
}