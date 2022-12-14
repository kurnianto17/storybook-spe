

import React from 'react';
import styles from "./Input.module.css"
import PropTypes from 'prop-types';
export const InputModif = ({ label, borderRadius , width, fontColor,type="text" ,...props }) => {
    
    const style = {
        color : fontColor,
        borderRadius : `${borderRadius || 0}px`
    }
  
    return (
    <div class="form__group" style={{width:`${width ? `${width}px` : 'auto'}`}}>
        <input type={type} style={style} class={styles["form__input"]} id="name" placeholder={label} {...props} />
        <label for="name" class={styles["form__label"]}>{label}</label>
    </div>
  );
};


  InputModif.propTypes = {
      width: PropTypes.number,
      label: PropTypes.string,
      type: PropTypes.oneOf(["number","text","password"]),
      color: PropTypes.string,
      borderRadius: PropTypes.number
    };

