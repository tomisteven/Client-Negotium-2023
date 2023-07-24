import React from 'react';
import './Button.css';

function Button({text,classSize,w, h, fnt, ml, mr, bl, onclick, mt, br, m}){
    return(
        <button onClick={onclick} style={{
            width: w,
            height: h,
            fontSize:fnt,
            marginLeft: ml,
            marginRight: mr,
            background: bl,
            marginTop: mt,
            margin: m
        }} className="button-web">{text}</button>
    );
}
export default Button;