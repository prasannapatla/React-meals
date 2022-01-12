import Cartcontext from './cart-context'
import { useReducer } from 'react'

const defaultcartState={
    items:[],
    totalAmount:0
}

const cartReducer =(state,action)=>{
    if(action.type==='ADD'){
        let updatedItems =state.items.concat(action.item)
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const existingCartItemIndex =state.items.findIndex(
        (item)=>item.id===action.item.id
        )

        const existingCartItem =state.items[existingCartItemIndex];
        
        // let updatedItems;

        if(existingCartItem){
           
           const updatedItem={
                ...existingCartItem,
                amount :existingCartItem.amount+action.item.amount
            }
            updatedItems=[
                ...state.items
            ]
            updatedItems[existingCartItemIndex] =updatedItem
        }
        else{
            
            updatedItems=state.items.concat(action.item)
        }
        return {
            items:updatedItems,
            totalAmount:updatedTotalAmount
        }
    }
    return defaultcartState
}

const CartProvider=props=>{

    const [cartState,dispatchCartAction]=useReducer(cartReducer,defaultcartState)
    const addItemHandler=(item)=>{
        dispatchCartAction({type:'ADD',item:item})
    }
    const removeItemhandler =(id)=>{
        dispatchCartAction({type:'REMOVE',id:id})
    }
    const cartContext ={
        items:cartState.items,
        totalAmount:cartState.totalAmount,
        addItem:addItemHandler,
        removeItem:removeItemhandler

    }
    return(
        <Cartcontext.Provider value={cartContext}>
            {props.children}
        </Cartcontext.Provider>
    )
}

export default CartProvider