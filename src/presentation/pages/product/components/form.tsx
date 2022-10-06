import { Button, Divider, Grid, TextField } from '@mui/material';
import React from 'react'
import { TProduct } from '../../../../domain/models/'

const Form: React.FC<TProduct[] | any> = ({ product }) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
                <TextField label='Código de Barra' fullWidth></TextField>
            </Grid>
            <Grid item xs={12} md={12}>
                <TextField label='Descrição' fullWidth></TextField>
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField label='Marca' fullWidth></TextField>
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField label='NCM' fullWidth></TextField>
            </Grid>
            <Grid item xs={12} md={12}>
                <Divider />
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField label='Custo' fullWidth></TextField>
            </Grid>
            <Grid item xs={12} md={6}>
                <TextField label='Preço' fullWidth></TextField>
            </Grid>
            <Grid item xs={12} md={6}>
                <Button fullWidth color='error' variant='contained'>Cancelar</Button>
            </Grid>
            <Grid item xs={12} md={6}>
                <Button fullWidth color='success' variant='contained'>Salvar</Button>
            </Grid>
        </Grid>
    )
}
export default Form;