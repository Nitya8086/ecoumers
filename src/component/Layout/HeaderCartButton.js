import React from 'react';
import classes from './HeaderCartButton.module.css';

export default function HeaderCartButton() {
  return (
   <button className={classes.button}>
    <span>Cart</span>
    <span>3</span>
   </button>
  )
}
