import React,{useContext} from 'react'
import { Card,Button} from 'react-bootstrap';
import CartContext from '../../context/CartContext';
import {useNavigate } from "react-router-dom";
import axios from 'axios';


export default function ProductItem(props) {

const navigate = useNavigate();

  const ctx = useContext(CartContext);

  const addCartToHandeler = async() =>{
 
    
    
    try{

      
      const response = await axios.post('https://ecoumers-default-rtdb.firebaseio.com/cart.json',{...props,Quantity : 1})
       console.log('productitem',response);
     
      ctx.addItem({...props,Quantity : 1,_id:response.data.name});
      
  }
     catch(e){
       
    }
    
   
  };
  const detailHandeler = () =>{
    console.log('nit',props.id);
    navigate(`/productDetails/${props.id}`);
    
      

  };
  return (
   
    <Card>

      <Card.Img variant="top" src= {props.imageUrl} onClick = {detailHandeler}/>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Subtitle>
            <span>${props.price}</span>
          </Card.Subtitle>
              <Button variant="primary" onClick={addCartToHandeler}>Add to Cart</Button>
      </Card.Body>
    </Card>

  
  );
 
}
