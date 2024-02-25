import React,{useState,useContext} from 'react'
import CartContext from '../../../store/cart-context'
import Input from "../../Ui/Input"
import classes from "./MealItemForm.module.css"


const MealItemForm = (props) => {
  
  const [inputQuantity,setInputQuantity] = useState(1)
  const {items,setItems} = useContext(CartContext)

  const changeInputHandler = (e) =>{
    setInputQuantity(parseInt(e.target.value))
  }

  const addToCartHandler = (e) =>{
      e.preventDefault()
      console.log(items)
      let flag=true

      for(let i=0;i<items.length;i++)
      {
        if(props.item.id==items[i]['id']){
          setItems((prev)=>{
            prev[i]['quantity']=prev[i]['quantity'] + inputQuantity
            return [...prev]
          }) 
          flag=false
          break;
        }
      }
     if(flag)
     {
      setItems((prev)=>[...prev,{id:props.item.id,name:props.item.name,price:props.item.price,quantity:inputQuantity}])  
     } 
  }

  return (
    <>
        <form className={classes.form}>
            <Input label="Amount" 
              input={{
                  id:props.item.id,
                  type:'number',
                  min:'1',
                  max:'5',
                  step:'1',
                  defaultValue:'1',
                  onChange:(e)=>changeInputHandler(e)
              }}
             />
            <button onClick={addToCartHandler} >+ Add</button>
        </form>
        
    </>
  )
}

export default MealItemForm