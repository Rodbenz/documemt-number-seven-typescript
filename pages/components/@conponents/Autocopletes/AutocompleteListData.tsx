import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import * as ServaiceMas from '@/service/mas';


interface IAutocompleteListData {
  values?: any;
  valueType?: any;
  nameLabel?: string;
  onchange?: (value: string) => void;
  size?: 'small' | 'medium' | 'large';
  dataEdit?: any;
  dataFix?: any;
  ischeck?: boolean;
}

export default function AutocompleteListData({ values, valueType, nameLabel = 'กรุณาเลือกรายการ', onchange, size = 'medium', dataFix, dataEdit, ischeck }: IAutocompleteListData) {
  const [options, setOptions] = React.useState<any[]>([]);
  const [value, setValue] = React.useState(null);

  const res_selSelSemiCodeByID = async (type: string) => {
    try {
      let res = await ServaiceMas.masSelSemiCodeByID(type)
      console.log(res, 'res_selSubCodeByID');
      await setOptions(res)
      if (dataEdit && dataEdit.length > 0) {
        for (let i = 0; i < res.length; i++) {
          if (res[i].SEMI_CODE == dataEdit[0].SEMI_CODE) {
            setValue(res[i])
          }
        }
      }
      if (dataFix && dataFix.length > 0) {
        for (let i = 0; i < res.length; i++) {
          if (res[i].SEMI_CODE == dataFix[0].SEMI_CODE) {
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
    console.log(value, 'value');
    if (onchange) {
      onchange(value)
    }
  }

  React.useEffect(() => {
    valueType != null && res_selSelSemiCodeByID(valueType.TYPE_CODE)
  }, [valueType]);
  React.useEffect(() => {
    dataFix && (
      dataFix.length > 0 &&
      res_selSelSemiCodeByID(dataFix[0].TYPE_CODE)
    )
  }, [dataFix]);
  React.useEffect(() => {
    setValue(values)
  }, [values]);

  return (
    <>
      <Autocomplete
        onChange={handleOnChange}
        options={options}
        sx={{ width: '100%' }}
        renderInput={(params) => <TextField {...params} label={nameLabel} size={'medium'} error={ischeck} />}
        getOptionLabel={(option: any) => option.SEMI_NAME || ''}
        value={value}
        disabled={dataEdit && dataEdit.length > 0 ? true : false}
      />
    </>
  );
}