import { Fragment } from 'react'
import mealsimg from '../../assets/meals.jpg'
import classes from './Header.module.css'
import CartButton from '../Layout/HeadercartButton'

const Header =props =>{
    return <Fragment>
        <header className={classes.header}>
            <h1>React Meals</h1>
            <CartButton onCart={props.onshowCart} />
        </header>
        <div className={classes['main-image']}>
            <img src={mealsimg}/>
        </div>
    </Fragment>
}

export default Header;