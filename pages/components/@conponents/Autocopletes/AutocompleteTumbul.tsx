import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { masBracnch, tambonByPK } from '@/service/mas';

interface IAutocompleteBranch {
  values?: any;
  nameLabel?: string;
  onchange?: (value: string) => void;
  province?: any;
  amphur?: any;
  size?: 'small' | 'medium' | 'large';
}

export default function AutocompleteTumbul({ values, nameLabel = 'กรุณาเลือกรายการ', onchange, province, amphur, size = 'medium' }: IAutocompleteBranch) {
  const [value, setValue] = React.useState(null);
  const [options, setOptions] = React.useState<any[]>([]);

  const res_Tumbul = async (datasand:any) => {
    try {
      let res = await tambonByPK(datasand)
      console.log(res, 'res_baranch');

      if (res) {
        setOptions(res)
      }
    } catch (err) {
      console.log(err);
    }
  }

  const handleOnChange = (event: any, value: any) => {
    // setValue(value)
    if (onchange) {
      onchange(value)
    }
  }

  React.useEffect(() => {
    res_Tumbul({...province, ...amphur})
  }, [province, amphur]);
  React.useEffect(() => {
    setValue(values)
  }, [values]);
  return (
    <>
      <Autocomplete
        onChange={handleOnChange}
        id="controllable-states-demo"
        options={options}
        getOptionLabel={(option) => option.TUMBON_DESCRIPTION}
        value={value}
        sx={{ width: '100%' }}
        renderInput={(params) => <TextField {...params} label={nameLabel} size={'medium'} />}
      />
    </>
  );
}