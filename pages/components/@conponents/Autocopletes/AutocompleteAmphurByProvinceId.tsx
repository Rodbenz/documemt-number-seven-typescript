import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { amphurByPK, amphurByProvinceId, masBracnch } from '@/service/mas';

interface IAutocompleteBranch {
  values?: any;
  nameLabel?: string;
  onchange?: (value: string) => void;
  datalist?: string;
  province?: any;
  size?: 'small' | 'medium' | 'large';
}

export default function AutocompleteAmphurByProvinceId({ values, nameLabel = 'กรุณาเลือกรายการ', onchange, datalist, province, size = 'medium' }: IAutocompleteBranch) {
  const [value, setValue] = React.useState(null);
  const [options, setOptions] = React.useState<any[]>([]);

  const res_Amphur = async (datasand:any) => {
    try {
      let res = await amphurByProvinceId(datasand)
      console.log(res, 'res_Amphur');

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
    console.log(province, 'province');
    
    province != null && res_Amphur(province.PROVINCE_ID)
  }, [province]);
  React.useEffect(() => {
    setValue(values)
  }, [values]);
  return (
    <>
      <Autocomplete
        onChange={handleOnChange}
        id="controllable-states-demo"
        options={options}
        getOptionLabel={(option) => option.AMPHUR_DESCRIPTION || ""}
        value={value}
        sx={{ width: '100%' }}
        renderInput={(params) => <TextField {...params} label={nameLabel} size={'medium'} />}
      />
    </>
  );
}