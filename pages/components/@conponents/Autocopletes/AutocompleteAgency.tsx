import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { masSelGovType } from '@/service/mas';

interface IAutocompleteAgency {
  values?: any;
  nameLabel?: string;
  onchange?: (value: string) => void;
  sizes?: 'small' | 'medium' | 'large';
  dataFix?: any;
  dataEdit?: any;
  ischeck?: boolean;
}

export default function AutocompleteAgency({ values, nameLabel = 'กรุณาเลือกรายการ', onchange, sizes = 'medium', dataFix, dataEdit, ischeck }: IAutocompleteAgency) {
  const [value, setValue] = React.useState<any>(null);
  const [options, setOptions] = React.useState<any[]>([]);

  const res_SelGovType = async () => {
    console.log(dataEdit, 'dataEdit');

    try {
      let res = await masSelGovType()
      console.log(res, 'res_SelGovType');

      setOptions(res)
      if (dataEdit && dataEdit.length > 0) {
        for (let i = 0; i < res.length; i++) {
          if (res[i].GOV_TYPE == dataEdit[0].GOV_TYPE) {
            setValue(res[i])
          }
        }
      }
      if (dataFix && dataFix.length > 0) {
        for (let i = 0; i < res.length; i++) {
          if (res[i].GOV_TYPE == dataFix[0].GOV_TYPE) {
            setValue(res[i])
            onchange && onchange(res[i])
          }
        }
      }
    } catch (err) {
      console.log(err)
    }
  }
  const handleOnChange = (event: any, value: any) => {
    // setValue(value)
    if (onchange) {
      onchange(value)
    }
  }

  React.useEffect(() => {
    res_SelGovType()
  }, []);
  // React.useEffect(() => {
  //   res_SelGovType()
  // }, [dataEdit]);
  React.useEffect(() => {
    setValue(values)
  }, [values]);

  return (
    <>
      <Autocomplete
        onChange={handleOnChange}
        id="controllable-states-demo"
        options={options}
        getOptionLabel={(option: any) => option.GOV_NAME || ''}
        sx={{ width: '100%' }}
        value={value}
        renderInput={(params) => <TextField {...params} label={nameLabel} size={'medium'} error={ischeck} />}
        disabled={dataEdit && dataEdit.length > 0 ? true : false}

      />
    </>
  );
}