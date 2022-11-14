import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

export default function Login(   ) {
    const [open, setOpen] = React.useState(false);
    const [rowData, setRowData] = React.useState([])

    const [data, setData] = React.useState({
        name: '',
        age: '',
    })

    React.useEffect(() => {
        getLocalData()
    }, [])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = e => {
        e.preventDefault()

        const localData = JSON.parse(localStorage.getItem('user'))

        const id = Math.floor(Math.random() * 1000 + 1)
        const udata = {
            id,
            ...data
        }

        if(localData){
            localData.push(udata)
            localStorage.setItem('user', JSON.stringify(localData))
        }else{
            localStorage.setItem('user', JSON.stringify([udata]))
        }

        setData({
            name: '',
            age: '',
        })

        handleClose()

    }

    const handleChange = e => {
        const {name, value} = e.target
        setData({...data, [name]: value})
    }

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
          field: "name",
          headerName: 'Name',
          width: 150,
          editable: true,
        },
        {
          field: 'age',
          headerName: 'Age',
          type: 'number',
          width: 110,
          editable: true,
        }
      ];

      const rows = []

      const getLocalData = () => {
        const localData = JSON.parse(localStorage.getItem("user"))
        if (localData !== null) {
            setRowData(localData)
        }
      }


    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                Add user
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <form onSubmit={handleSubmit}>
                    <DialogTitle>Subscribe</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            To subscribe to this website, please enter your email address here. We
                            will send updates occasionally.
                        </DialogContentText>

                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Name"
                            name="name"
                            type="text"
                            fullWidth
                            variant="standard"
                            value={data.name}
                            onChange={handleChange}
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="age"
                            label="Age"
                            name="age"
                            type="number"
                            fullWidth
                            variant="standard"
                            onChange={handleChange}
                            value={data.age}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type="submit">Submit</Button>
                    </DialogActions>
                </form>
            </Dialog>
            <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rowData}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
        </div>
    );
}