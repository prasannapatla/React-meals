import CartIcon from '../Cart/CartIcon';
import classes from './HeadercartButton.module.css'
import { useContext } from 'react';
import Cartcontext from '../../store/cart-context';

const HeadercartButton = props=>{

    const cartctx=useContext(Cartcontext)

    const numberOfCartItems =cartctx.items.reduce((curNumber,item)=>{
        return curNumber+item.amount;
    },0);

    return <button className={classes.button} onClick={props.onCart}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>
           Y0ur cart 
        </span>
        <span className={classes.badge}>
        {numberOfCartItems}
        </span>
    </button>
}

export default HeadercartButton;
