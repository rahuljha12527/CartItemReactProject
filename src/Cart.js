import React from 'react';
import CartItem from './CartItem';
class Cart extends React.Component{

    constructor(){
        super();
        this.state={
            products:[
                {
                    price:999,
                    title:'Watch',
                    qty:1,
                    img:'',
                    id:1
                },
                {
                    price:999,
                    title:'Mobile Phone',
                    qty:10,
                    img:'',
                    id:2
                },
                {
                    price:39990,
                    title:'Laptop',
                    qty:4,
                    img:'',
                    id:3
                },
                {
                    price:100,
                    title:'Glasses',
                    qty:20,
                    img:'',
                    id:4
                }
    
    
    
        
            ]
    
        }
           }

    render(){
        
        const {products}=this.state;
     
        return (
           <div className="cart">
                {products.map((product)=>{
                    return( 
                    <CartItem product={product} 
                    key={product.id}
                          />
                 )           
                        
                })}
                 
           </div>
        );
    }      
}



export default Cart ;   