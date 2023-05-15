import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import * as ServaiceMas from '@/service/mas';

interface IAutocompleteType {
  values?: any;
  nameLabel?: string;
  onchange?: (value: string) => void;
  size?: 'small' | 'medium' | 'large';
  datEdit?: any;
}

export default function AutocompleteType({ values, nameLabel = 'กรุณาเลือกรายการ', onchange, size = 'medium', datEdit }: IAutocompleteType) {
  const [options, setOptions] = React.useState<string[]>([]);
  const [value, setValue] = React.useState(null);

  const res_selTypeCode = async () => {
    console.log(datEdit, 'datEdit');

    try {
      let res = await ServaiceMas.masSubDocTypeT2()
      // console.log(res,'res_selGovType');
      await setOptions(res)
      if (datEdit && datEdit.length > 0){
        for (let i = 0; i < res.length; i++) {
          if (res[i].SUB_CODE == datEdit[0].SUB_CODE) {
            setValue(res[i])
            console.log(res[i], 'res[i]');

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
  res_selTypeCode()
}, []);
React.useEffect(() => {
  setValue(values)
}, [values]);
return (
  <>
    <Autocomplete
      onChange={handleOnChange}
      id="controllable-states-demo"
      options={options}
      getOptionLabel={(option: any) => option.SUB_NAME}
      sx={{ width: '100%' }}
      value={value}
      renderInput={(params) => <TextField {...params} label={nameLabel} size={'medium'} />}
      disabled={datEdit && datEdit.length > 0 ? true : false}
    />
  </>
);
}