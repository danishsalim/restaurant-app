import CartContext from "./cart-context";

const CartProvider = (props) => {
   const addItemTOCart = ()=>{

   }
   const removeItemFromCart = ()=>{
    
   }
   
   const cartContext={
    items:[],
    totalItems:0,
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