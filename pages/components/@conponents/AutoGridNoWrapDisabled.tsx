import * as React from 'react';
import { Paper, Typography, styled } from '@mui/material';


const StyledPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  maxWidth: '100%',
  color: theme.palette.text.primary,
  borderRight: '10px solid #006e61',
  display: 'flex',
  alignItems: 'center',
  // cursor: 'pointer'
}));


interface IFAutoGridNoWrapDisabled {
  el?: any;
  handleOnClick?: any;
}

export default function AutoGridNoWrapDisabled({ el, handleOnClick }: IFAutoGridNoWrapDisabled) {
  return (
    <StyledPaper
      sx={{
        my: 1,
        mx: 'auto',
        p: 2,
        marginLeft: 10,
      }}
      // onClick={() => handleOnClick(el)}
    >
      <img src={el?.img} width={el?.width} height={el?.height} style={{ marginLeft: 5, paddingLeft: el?.paddingLeft }} alt='icon' />
      <div style={{ width: '100%', justifyContent: 'center', alignItems: 'center', textAlign: 'center' }} >
        <Typography sx={{ color: '#f0f0f0', fontWeight: 'bold', fontSize: '21px' }} pl={2}>{el?.name}</Typography>
        {el?.subname &&
          <Typography sx={{ color: '#f0f0f0', fontWeight: 'bold', fontSize: '21px' }} pl={2}>{el?.subname}</Typography>
        }
      </div>
    </StyledPaper>
  );
}