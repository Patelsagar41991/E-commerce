import React, { useState } from 'react';
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';
const data = [
    {
        id: 101,
        name: "Men's T-shirt",
        Img: "img/product-1.jpg",
        quantity: 25,
        price: "$75",
        expiry: 2022
    },
    {
        id: 102,
        name: "Men's shirt",
        Img: "img/product-2.jpg",
        quantity: 90,
        price: "$80",
        expiry: 2021
    },
    {
        id: 103,
        name: "Women's Dress",
        Img: "img/product-3.jpg",
        quantity: 85,
        price: "$59",
        expiry: 2025
    },
    {
        id: 104,
        name: "fashion-wear",
        Img: "img/product-7.jpg",
        quantity: 50,
        price: "$99",
        expiry: 2023
    },
    {
        id: 105,
        name: "Women's T-shirt",
        Img: "img/product-5.jpg",
        quantity: 63,
        price: "$58",
        expiry: 2021
    },
    {
        id: 105,

        name: "Whomn's",
        Img: "img/product-7.jpg",
        quantity: 63,
        price: "$78",
        expiry: 2021
    },
    {
        id: 105,
        name: "Whoman's",
        Img: "img/product-2.jpg",
        quantity: 63,
        price: "$96",
        expiry: 2021
    },
    {
        id: 105,
        name: "Men's Sute",
        Img: "img/product-6.jpg",
        quantity: 63,
        price: "$75",
        expiry: 2021
    },
    {
        id: 105,
        name: "Man's style",
        Img: "img/product-4.jpg",
        quantity: 63,
        price: "$84",
        expiry: 2021
    },
    {
        id: 105,
        name: "Men's",
        Img: "img/product-6.jpg",
        quantity: 63,
        price: "$94",
        expiry: 2021
    },
    {
        id: 105,
        name: "Men's Shoze",
        Img: "img/product-1.jpg",
        quantity: 63,
        price: "$84",
        expiry: 2021
    },
    {
        id: 105,
        name: "Children",
        Img: "img/product-2.jpg",
        quantity: 63,
        price: "$73",
        expiry: 2021
    },

]

function Shope(props) {
    const [Data, setData] = useState(data)

    const productdata = (val) => {
        const searchdata = data.filter((l) => (
            l.name.toLowerCase().includes(val.toLowerCase()) ||
            l.quantity.toString().includes(val) ||
            l.price.includes(val) ||
            l.expiry.toString().includes(val) ||
            l.id.toString().includes(val)
        ))
        setData(searchdata);
    }
    return (
        <div>
            <input className='ms-4 rounded-1 p-2'
                margin="dense"
                placeholder='Search'
                name="name"
                label="Search"
                type="text"
                fullWidth
                variant="standard"
                onChange={(e) => productdata(e.target.value)}
            />
            <div className='container'>
                <div className='row'>
                    {
                        Data.map((p, o) => {
                            return (
                                <div className='col-4 mx-auto mb-5 d-flex align-items-center'>
                                    <Card>
                                        <CardImg src={p.Img} className='w-10 mx-auto' />
                                        <CardBody>
                                            <CardTitle>{p.price}</CardTitle>
                                            <CardSubtitle>{p.name}Card subtitle</CardSubtitle>
                                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                            <Button>Button</Button>
                                        </CardBody>
                                    </Card>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default Shope;