import React from 'react'
import classes from './loader.module.css'
import gif from './star-wars.gif'

export const Loader = () => {
    return (
      <div className={classes.wrapper}>
        <img src={gif} alt=""/>
      </div>
    )
}