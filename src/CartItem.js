import React from 'react';

class CartItem extends React.Component{

        testing(){
            const promise=new Promise((resolve,reject)=>{
                setTimeout(()=>{
                    resolve('done');
                },5000);
            })

            promise.then(()=>{
                this.setState({qty:this.state.qty+10});

                this.setState({qty:this.state.qty+10});

                this.setState({qty:this.state.qty+10});

                console.log('state',this.state);
            });
        }

        increaseQuantity =()=>{
            //this.state.qty+=1;
           // console.log('this',this.state);
            // this.setState({
            //     qty:this.state.qty+1
            // });
            // this.setState({
            //     qty:this.state.qty+1
            // });
           
            // this.setState({
            //     qty:this.state.qty+5
            // });
           
            //setState from 2-if prevState required use this
            
           this.setState((prevState)=>{
            return{
               qty:prevState.qty+1
           }
         
          
          });
          
        }
        decreaseQuantity=()=>{
         
            const {qty}=this.state;
             if(qty===0){
                 return;
             }
            this.setState((prevState)=>{
                return{
                    qty:prevState.qty-1
                }
            });
        }
    render (){
         
        console.log('this.props',this.props);
        const {price,title,qty}=this.props.product;
        return (
            <div className="cart-item">
                {this.props.jsx}
               <div className="left-block">
                <img style={styles.image}/>   
                </div> 
                 <div className="right-block">
                     <div style={{fontSize:25}}>{title} </div>
                       <div style={{color:'#777'}}>Rs {price}</div>
                       <div style={{color:'#777'}}>Qty: {qty}</div>
                     <div className="cart-item-actions">
                          {/* {Buttons} */}
                         <img 
                          alt="increase"
                          className="action-icons"
                          src="https://image.flaticon.com/icons/svg/1828/1828919.svg"
                          onClick={this.increaseQuantity.bind(this)} 
                           />
                         <img 
                         alt="decrease" 
                         className="action-icons" 
                         src="https://image.flaticon.com/icons/svg/659/659892.svg"
                         onClick={this.decreaseQuantity.bind(this)}
                         />
                         <img alt="delete" className="action-icons" src="https://as2.ftcdn.net/jpg/00/98/26/11/500_F_98261175_Sv69O3rZsHApYkjAdrWbgQixYHwyZyOr.jpg"/>
                        
                     </div>
                 </div>
            </div>
        );
    }
}

const styles={
  image:{
      height:110,
      width:110,
      borderRadius:4,
      background:'#ccc'
  }
}

export default CartItem;