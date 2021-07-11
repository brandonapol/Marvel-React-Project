import React, { useState } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
import { useGetData } from '../../custom-hooks';
import { server_calls } from '../../api';
import { Button, Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle } from '@material-ui/core';
import { HeroForm } from '../../components/HeroForm';


const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', flex: .5 },
    { field: 'name', headerName: 'Hero Name', flex:1.5 },
    { field: 'description', headerName: 'Description', flex: 1.5 },
    // {
    //   field: 'price',
    //   headerName: 'Price',
    //   type: 'number',
    //   flex: 1,
    // },
  
  ];
  
  interface gridData{
    data:{
      id?:string
    }
  }

  export const DataTable = () => {

    let { heroData, getData } = useGetData();
    let [open, setOpen] = useState(false)
    let [gridData, setData] = useState<gridData>({data:{}})
  
    let handleOpen = () => {
      setOpen(true)
    }
    let handleClose = () => {
      setOpen(false)
    }
  
    let deleteData =() =>{
      server_calls.delete(gridData.data.id!)
      getData()
      // setTimeout(()=>{ window.location.reload(); }, 1000);
    }
  
    console.log(gridData.data.id!)
  
    return (
      <div style={{ height: 400, width: '100%' }}>
          <h2>Heroes In Inventory</h2>
        <DataGrid rows={heroData} columns={columns} pageSize={5} checkboxSelection onRowSelected = { setData } />
  
        <Button onClick={handleOpen}>Update</Button>
          <Button variant="contained" color="secondary" onClick={deleteData}>Delete</Button>
  
            {/*Dialog Pop Up begin */}
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Update Hero {gridData.data.id!}</DialogTitle>
            <DialogContent>
              <DialogContentText>Update Hero</DialogContentText>
                <HeroForm id={gridData.data.id!}/>
            </DialogContent>
            <DialogActions>
              <Button onClick = {handleClose} color="primary">Cancel</Button>
              <Button onClick={handleClose} color = "primary">Done</Button> 
            </DialogActions>
          </Dialog>
      </div>
    );
  }