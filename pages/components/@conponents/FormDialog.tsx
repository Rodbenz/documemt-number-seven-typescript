import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Stack, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface IFormDialog {
    open: boolean,
    formContent?: any,
    namTitle?: string,
    iconHeader?: any,
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false,
    handleClose?: any;
}
const styles = {
    root: {},
    paper: { borderRadius: 15 }
}
export interface DialogTitleProps {
    id: string;
    children?: React.ReactNode;
    onClose: () => void;
}

function BootstrapDialogTitle(props: DialogTitleProps) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2, backgroundColor: '#006e61', color: 'white' }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}
export default function FormDialog({ open, formContent, namTitle, iconHeader, maxWidth = 'xl', handleClose }: IFormDialog) {

    return (
        <div style={{ borderRadius: 10 }}>
            <Dialog open={open} fullWidth maxWidth={maxWidth} fullScreen={true}>
                {/* <DialogTitle sx={{ backgroundColor: '#006e61', color: 'white' }}>
                    <Stack direction={'row'} alignItems={'center'} spacing={2}>
                        {iconHeader && iconHeader}<Typography variant='h6'>{namTitle}</Typography>
                    </Stack>
                </DialogTitle> */}
                <BootstrapDialogTitle id="customized-dialog-title" onClose={() => handleClose()}>
                    <Stack direction={'row'} alignItems={'center'} spacing={2}>
                        {iconHeader && iconHeader}<Typography variant='h6'>{namTitle}</Typography>
                    </Stack>
                </BootstrapDialogTitle>
                <DialogContent>
                    {formContent &&
                        formContent
                    }
                </DialogContent>
                <DialogActions>
                    <Button variant={'contained'} onClick={handleClose}>ย้อนกลับ</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}