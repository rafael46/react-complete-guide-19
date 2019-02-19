import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = ( props ) => {
    let keys = Object.keys(props.ingredients);
    console.log("--- keys---  "+ keys);
    let transformedIngredients = Object.keys( props.ingredients )
        .map( igKey => {
            return [...Array( props.ingredients[igKey] )].map( ( _, i ) => {
                console.log(`<BurgerIngredient::------------ key=${igKey + i} type=${igKey} />`)
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            } );
        } )
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);
        console.log(transformedIngredients)
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;

    }
    // JSON.stringify   " transformed ingrdients: = = = = = =  "+ 
    // {((transformedIngredients.map((name) => console.log(name))))}
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
           
            {transformedIngredients}
            {/* <BurgerIngredient type="meat" /> */}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;