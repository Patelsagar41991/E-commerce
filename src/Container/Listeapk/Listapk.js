import React, { useState,useEffect } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
  import { NavLink, useHistory } from "react-router-dom";

const Listapk = (props) => {
    const [data,setdata] = useState([])
  const history = useHistory();
    useEffect(() => {
        loadData();
      }, []);
      const loadData = () => {
        let localData = JSON.parse(localStorage.getItem("Book-apk"));
        if (localData !== null) {
          setdata(localData);
        }
      };
const heandlDealet=(id)=>{
    let localData = JSON.parse(localStorage.getItem("Book-apk"));
    let fData
    fData = localData.filter((v) => v.id !== id);
    localStorage.setItem("Book-apk", JSON.stringify(fData));
    loadData();
}
const handleEdit = (id) => {
    history.push("/login", { id: id });
  };
  return (
    <div>
        <div className='container'>
            <div className='row'>
                 <div className='col-4'>
                 {
                      data.map((d, i) => {
                          return (
                              <Card>
                                  <CardImg top width="100%" src="img/user.jpg" alt="Card image cap" />
                                  <CardBody>
                                      <CardTitle>{d.email}</CardTitle>
                                      <CardSubtitle>{d.password}</CardSubtitle>
                                      <CardText>{d.message}</CardText>
                                      <Button type='submit'onClick={() => {handleEdit(d.id);}}>Edit</Button>
                                      <Button type='submit' onClick={() => {heandlDealet(d.id);}}>Delete</Button>
                                  </CardBody>
                              </Card>
                          )
                      })
                  }
                 </div>
            </div>
        </div>
    </div>
  );
};

export default Listapk;