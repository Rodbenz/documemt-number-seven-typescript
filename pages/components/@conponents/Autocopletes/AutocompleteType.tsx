import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import * as ServaiceMas from '@/service/mas';

interface IAutocompleteType {
  values?: any;
  nameLabel?: string;
  valueType?: any;
  onchange?: (value: string) => void;
  size?: 'small' | 'medium' | 'large';
  dataFix?: any;
  datEdit?: any;
  ischeck?: boolean;
}

export default function AutocompleteType({ values, nameLabel = 'กรุณาเลือกรายการ', valueType, onchange, size = 'medium', dataFix, datEdit, ischeck }: IAutocompleteType) {
  const [options, setOptions] = React.useState<string[]>([]);
  const [value, setValue] = React.useState(null);

  const res_selTypeCode = async (datasend: any) => {
    console.log(datEdit, 'datEdit');

    try {
      let res = await ServaiceMas.masSelTypeCode(datasend)
      console.log(res, 'res_selGovType');
      if (res != '') {
        await setOptions(res)
      }else{
        await setOptions([])
      }
      if (datEdit && datEdit.length > 0) {
        for (let i = 0; i < res.length; i++) {
          if (res[i].TYPE_CODE == datEdit[0].TYPE_CODE) {
            setValue(res[i])
            console.log(res[i], 'res[i]');

          }
        }
      }
      if (dataFix && dataFix.length > 0) {
        for (let i = 0; i < res.length; i++) {
          if (res[i].TYPE_CODE == dataFix[0].TYPE_CODE) {
            setValue(res[i])
            onchange && onchange(res[i])
          }
        }
      }
    } catch (e) {
      console.log(e)
    }
  }
  const handleOnChange = (event: any, value: any) => {
    // setValue(value)
    if (onchange) {
      onchange(value)
    }
  }

  React.useEffect(() => {
    valueType != null && res_selTypeCode(valueType)
  }, [valueType]);
  React.useEffect(() => {
    dataFix && (
      dataFix.length > 0 &&
      res_selTypeCode(dataFix[0])
    )
  }, [dataFix]);
  React.useEffect(() => {
    setValue(values)
  }, [values]);
  return (
    <>
      <Autocomplete
        onChange={handleOnChange}
        id="controllable-states-demo"
        options={options}
        getOptionLabel={(option: any) => option.TYPE_NAME || '' || null}
        sx={{ width: '100%' }}
        value={value}
        renderInput={(params) => <TextField {...params} label={nameLabel} size={'medium'} error={ischeck} />}
        disabled={datEdit && datEdit.length > 0 ? true : false}
      />
    </>
  );
}