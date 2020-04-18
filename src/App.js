import React from 'react';

import CartItem from './CartItem';
import Cart from './Cart';
import Navbar from './Navbar';

class App extends React.Component {

  constructor(){
    super();
    this.state={
        products:[
            {
                price:999,
                title:'Watch',
                qty:1,
                img:'https://images-na.ssl-images-amazon.com/images/I/71DnIj%2B%2BjUL._AC_SX425_.jpg',
                id:1
            },
            {
                price:999,
                title:'Mobile Phone',
                qty:10,
                img:'https://rukminim1.flixcart.com/image/352/352/k2jbyq80pkrrdj/mobile-refurbished/e/b/u/iphone-11-pro-max-64-a-mwhg2hn-a-apple-0-original-imafkg2fg3evmhuy.jpeg?q=70',
                id:2
            },
            {
                price:39990,
                title:'Laptop',
                qty:4,
                img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQRT8obaDaIdOhfUoaap8p_YEheedlh9OM3DeJjnPiGmCYBUMQg&usqp=CAU',
                id:3
            },
            {
                price:100,
                title:'Glasses',
                qty:20,
                img:'https://static.zennioptical.com/production/products/general/19/54/195421-eyeglasses-angle-view.jpg?resize=800px:*&output-quality=80',
                id:4
            }



    
        ]

    }
       }


       
 handleIncreaseQuantity=(product)=>{ 
        console.log('Hey please increase the qty of',product);
        const {products}=this.state;
        const index=products.indexOf(product);  

        products[index].qty+=1;

        this.setState({
            products
        })

 }
 handleDecreaseQuantity=(product)=>{ 
    console.log('Hey please increase the qty of',product);
    const {products}=this.state;
    const index=products.indexOf(product);  
      if( products[index].qty===0){
          return;
      }
    products[index].qty-=1;

    this.setState({
        products
    })

}

handleDeleteProduct=(id)=>{
  const {products}=this.state;

  const items=products.filter((item)=>item.id!==id);

  this.setState({
      products:items
  })
}
getCartCount =()=>{
  const {products}=this.state;

  let count=0;
  
  products.forEach((product)=>{
    count+=product.qty;
  })
  
  return count;

}
getCartTotal=()=>{
  const {products}=this.state;
  let cartTotal=0;
  products.map((product)=>{

    if(product.qty>0){
      cartTotal=cartTotal+product.qty*product.price;
    }
    return '';
  })

  return cartTotal;
}
  render(){

  const {products}=this.state;
  return (
    
    <div className="App">  
    <Navbar count={this.getCartCount()}/>
     <Cart
     products={products}
      onIncreaseQuantity={this.handleIncreaseQuantity}
      onDecreaseQuantity={this.handleDecreaseQuantity}
      onDeleteProduct={this.handleDeleteProduct}
     />

  <div style={{padding:10,fontSize:20}}>TOTAL:{this.getCartTotal()}</div>
    </div>
  );
}

}
export default App;
