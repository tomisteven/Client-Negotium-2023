import React from 'react';
import './IntroContainer.css';
import Button from './Button';
import img_intro from './images/illustration-intro.png';

function IntroContainer(){

    const comenzar = () => {
        window.location.href = '/#/admin/dashboard';
    }
    return(
        <div className='introContainer-web'>
            <div class="cont-info2-web">
            <h1>Bienvenidos a Negotium!
            </h1>
            <p>Negotium Gestiona tu negocio de manera eficiente. Clientes, deudas, servicios, historial, turnos, archivos. Disfruta de nuestra plataforma gratuita y flexible con planes estándar, gratis y premium. Potencia tu productividad hoy mismo.</p>
            <Button text='Registrarme' h={"40px"} onclick={comenzar} />
            </div>
            <img src={img_intro} alt='illustration-intro' />
        </div>
    );
}
export default IntroContainer;