import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import React, { useState,useEffect } from 'react';
import { LocalFireDepartmentSharp } from '@mui/icons-material';
import { useHistory } from 'react-router-dom';
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

function Cardteble(props) {
  const [data,setdata] = useState([])
  const history = useHistory()
  useEffect(() => {
    localData();
  }, []);
  const localData = () => {
    let localData = JSON.parse(localStorage.getItem("Book-reg"));
    if (localData !== null) {
      setdata(localData);
    }
  };
  const heandlDealet = (id) =>{
      let loadData =JSON.parse(localStorage.getItem('Book-reg'));

      let fdata = loadData.filter((v)=> v.id !== id);
      localStorage.setItem('Book-reg',JSON.stringify(fdata));
      localData();
  }
  const heandlEdit = (id) =>{
    history.push("/Register", { id: id });
    
  }

  return (
    <div className='container'>
      <div className='row'>
        {
          data.map((d,i)=>{
            return(
              <Card sx={{ minWidth: 275 }} className = 'mx-2 my-2 text-center'>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {d.name}
                  </Typography>
                  <Typography variant="h5" component="div">
                      {d.email}
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {d.password}
                  </Typography>
                  <Typography variant="body2">
                    {d.message}
                    <br />
                    {'"a benevolent smile"'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" className='justify-content-center mx-auto'onClick={() => {heandlDealet(d.id);}}>Delete</Button>
                  <Button size="small" className='justify-content-center mx-auto'onClick={() => {heandlEdit(d.id);}}>Edit</Button>
                </CardActions>
              </Card>
            )
          })
        }
      </div>
    </div>
  );
}
export default Cardteble