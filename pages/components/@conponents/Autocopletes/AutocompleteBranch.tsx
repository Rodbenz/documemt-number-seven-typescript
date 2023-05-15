import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { masBracnch } from '@/service/mas';

interface IAutocompleteBranch {
  values?: any;
  nameLabel?: string;
  onchange?: (value: string) => void;
  datalist?: any;
  size?: 'small' | 'medium' | 'large';
}

export default function AutocompleteBranch({ values, nameLabel = 'กรุณาเลือกรายการ', onchange, datalist, size = 'medium' }: IAutocompleteBranch) {
  const [value, setValue] = React.useState(null);
  const [options, setOptions] = React.useState<any[]>([]);

  const res_baranch = async () => {
    try {
      let res = await masBracnch(datalist)
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
    res_baranch()
  }, [datalist]);
  React.useEffect(() => {
    setValue(values)
  }, [values]);
  return (
    <>
      <Autocomplete
        onChange={handleOnChange}
        id="controllable-states-demo"
        options={options}
        getOptionLabel={(option) => option.BRANCH_NAME}
        value={value}
        sx={{ width: '100%' }}
        renderInput={(params) => <TextField {...params} label={nameLabel} size={'medium'} />}
      />
    </>
  );
}