import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Stack, Typography } from '@mui/material';

interface IFormDialog {
    open: boolean,
    formContent: any,
    namTitle?: string,
    iconHeader?: any,
    maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | false
}
const styles = {
    root: {},
    paper: { borderRadius: 15 }
}
export default function FormDialog({ open, formContent, namTitle, iconHeader, maxWidth='xl' }: IFormDialog) {

    return (
        <div style={{ borderRadius: 10 }}>
            <Dialog open={open} fullWidth maxWidth={maxWidth} >
                <DialogTitle sx={{ backgroundColor: '#006e61', color: 'white' }}>
                    <Stack direction={'row'} alignItems={'center'} spacing={2}>
                        {iconHeader && iconHeader}<Typography variant='h6'>{namTitle}</Typography>
                    </Stack>
                </DialogTitle>
                <DialogContent>
                    {formContent &&
                        formContent
                    }
                </DialogContent>
            </Dialog>
        </div>
    );
}