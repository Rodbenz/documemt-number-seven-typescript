import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Stack, Typography } from '@mui/material';

interface ConfirmDialog {
  createDialog: (msg: string, name: string, submit: () => void, cancel?: () => void) => void;
//   close: () => void;
}

let confirmDialog: ConfirmDialog;

const ConfirmDialog2: React.FC = () => {
  const [message, setMessage] = React.useState<string>('');
  const [dialogName, setDialogName] = React.useState<string>('');
  const [onSubmit, setOnSubmit] = React.useState<(() => void) | undefined>(undefined);
  const [onCancel, setOnCancel] = React.useState<(() => void) | undefined>(undefined);
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    confirmDialog = {
      createDialog: (msg: string, name: string, submit: () => void, cancel?: () => void) => {
        setMessage(msg);
        setDialogName(name);
        setOnSubmit(()=>submit);
        setOnCancel(cancel);
        setOpen(Boolean(submit));
        
      },
    //   close: () => {
    //     setOnSubmit(undefined);
    //   },
    };
  }, []);

  const handleClose = () => {
    setOnSubmit(undefined);
    setOpen(false);
  };


  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth={'sm'} fullWidth>
        <DialogTitle>{dialogName}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Stack direction={'row'} justifyContent={'center'}>
              <Typography variant='h6'>{message}</Typography>
            </Stack>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant='contained' color='error' onClick={handleClose}>
            ปิด
          </Button>
          {onCancel && (
            <Button
              variant='contained'
              color='success'
              onClick={() => {
                if (onCancel) {
                  onCancel();
                }
                handleClose();
              }}
              autoFocus
            >
              ยกเลิก
            </Button>
          )}

          <Button
            variant='contained'
            color='success'
            onClick={() => {
              if (onSubmit) {
                onSubmit();
              }
            
              handleClose();
            }}
            autoFocus
          >
            ตกลง
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ConfirmDialog2;
export {confirmDialog };
