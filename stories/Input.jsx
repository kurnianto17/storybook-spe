

import React from 'react';
import styles from "./Input.module.css"
export const InputModif = ({ label, width="120",borderRadius, fontColor,type="text" ,...props }) => {
    
    const style = {
        color : fontColor,
        borderRadius:`${borderRadius || 20}px`
    }
  
    return (
    <div class="form__group" style={{width:`${width}px`}}>
        <input type={type} style={style} class={styles["form__input"]} id="name" placeholder={label} {...props} />
        <label for="name" class={styles["form__label"]}>{label}</label>
    </div>
  );
};


