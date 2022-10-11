

import React from 'react';
import styles from "./Input.module.css"
export const InputModif = ({ label, width="520" ,type="text" ,...props }) => {
  return (
    <div class="form__group" style={{width:`${width}px`}}>
        <input type={type} class={styles["form__input"]} id="name" placeholder={label} {...props} />
        <label for="name" class={styles["form__label"]}>{label}</label>
    </div>
  );
};


