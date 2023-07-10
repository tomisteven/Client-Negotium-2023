import React from 'react';
import './EarlyAccess.css';
import Button from './Button';

function EarlyAccess(){
    return(
        <div className='earlyAccess-web'>
            <h2>Contactate con Nosotros!</h2>
            <p>Dejanos tu email y el mensaje a continuacion para poder contactarnos con vos para tener una atencion personalizada!</p>
            <input type='text' placeholder='email@example.com'/>
            <input type='text' placeholder='Mensaje'/>
            <Button text='Enviar' classSize='email-btn' mt={"15px"} h={"35px"} w={"150px"}/>
        </div>
    );
}
export default EarlyAccess;