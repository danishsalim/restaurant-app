import React,{useContext} from 'react'
import CartContext from '../../store/cart-context'
import CartItem from './CartItem'
import classes from "./Cart.module.css"
import Modal from '../Ui/Modal'

const Cart = (props) => {
    const {items,addItem,removeItem,setItems}= useContext(CartContext)
    let totalAmount = 0
    const hasOrder = items.length > 0;
    items.map((item)=>totalAmount+=(item.price*item.quantity))
    totalAmount=totalAmount.toFixed(2)
    const cartitems = <ul  className={classes['cart-items']}>
        {items?.map((item)=>(   
            <CartItem  key={item.id} id={item.id} name={item.name} price={item.price} amount={item.quantity} onAdd={addItem} onRemove={removeItem} />
        ))}
    </ul>

    const orderPlaced = () =>{
        console.log('thankYou visit again')
        props.onClose()
        setItems([])
        
    }
   
  return (
    <Modal onClose={props.onClose}>
        {cartitems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        <div className={classes.actions}>
            <button className={classes['button--alt']} onClick={props.onClose}>close</button>
            { hasOrder && <button className={classes.button} onClick={()=>orderPlaced()}>Order</button> }
        </div>
    </Modal>
  )
}

export default Cart