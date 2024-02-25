import { useState } from "react";
import CartContext from "./cart-context";



const CartProvider = (props) => {
  const [items,setItems] = useState([]);

    const addItemTOCart = (id)=>{
      for(let i=0;i<items.length;i++)
      {
        if(id==items[i]['id']){
          setItems((prev)=>{
            prev[i]['quantity']=prev[i]['quantity']+1
            return [...prev]
          }) 
          break;
        }
      }
    }
    const removeItemFromCart = (id)=>{
      for(let i=0;i<items.length;i++)
      {
        if(id==items[i]['id'] && items[i]['quantity']>1){
          setItems((prev)=>{
            prev[i]['quantity']=prev[i]['quantity']-1
            return [...prev]
          }) 
          break;
        }
        else if(items[i]['quantity']<=1)
        {
          setItems((prev)=>prev.filter((item)=>item.id!=id))
        }
      }
   }
   
   const cartContext={
    items:items,
    setItems:setItems,
    addItem:addItemTOCart,
    removeItem:removeItemFromCart,
   }
  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider