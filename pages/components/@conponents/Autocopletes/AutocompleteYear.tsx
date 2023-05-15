import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { masYears } from '@/service/mas';

interface IAutocompleteYear {
  values?: any;
  nameLabel?: string;
  onchange?: (value: string) => void;
  datalist?: any;
  size?: 'small' | 'medium' | 'large' | undefined;
}

export default function AutocompleteYear({values, nameLabel = 'กรุณาเลือกปี', onchange, datalist, size }: IAutocompleteYear) {
  const [value, setValue] = React.useState(null);
  const [options, setOptions] = React.useState<any>([]);

  const res_masYears = async () => {
    try{
      let res = await masYears()
      await setOptions(res.sort())
    }catch(err){
      console.log(err)
    }
  }

  const _genAvalibleYears = async () => {
    let avalibleyearArray = []
    let year = new Date().getFullYear() - 10;

    for (var i = 1; i <= 10; i++) {
        avalibleyearArray.push((year + i) + 543)
    }
    setOptions(avalibleyearArray.reverse())
}

  const handleOnChange = (event: any, value:any) => {
    // setValue(value);
    if (onchange) {
      onchange(value)
    }
  }

  React.useEffect(() => {
    // res_masYears()
    _genAvalibleYears()
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
        getOptionLabel={(option:any) => String(option)}
        sx={{ width: '100%' }}
        renderInput={(params) => <TextField {...params} label={nameLabel} size={'medium'}/>}
      />
    </>
  );
}