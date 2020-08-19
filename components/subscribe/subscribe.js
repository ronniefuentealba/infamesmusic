import React, { Component } from 'react';
import Mailchimp from 'react-mailchimp-form';
import "./subscribe.scss";

import { toast, ToastContainer } from 'react-nextjs-toast'

const showSubscribeForm = () => {
  toast.notify(<SubscribeWrapper />, {
    duration: 60,
    title: " ",
  })
}

const closeSubscribeForm = () => {
  toast.remove()
}

const SubscribeWrapper = () => {
  return(
    <>
      <Mailchimp
        action='https://infames.us9.list-manage.com/subscribe/post?u=43846d510d3915799fdeabfb3&amp;id=65762b6a76'
        fields={[
          {
            name: 'EMAIL',
            placeholder: 'Email',
            type: 'email',
            required: true
          }
        ]}
        messages = {
          {
            sending: "Enviando...",
            success: "Gracias por subscribirte!",
            error: "Se ha producido un error interno inesperado..",
            empty: "Debes escribir un correo electrónico.",
            duplicate: "Demasiados intentos de suscripción para esta dirección de correo electrónico",
            button: "Subscribir!"
          }
        }
        />
        <button onClick={closeSubscribeForm}>Cerrar</button>
      </>
  )
}

const Subscribe = () => {

  return (
    <div className="subscribe">
      <button className={'subsButton'}  onClick={showSubscribeForm}>Suscríbete</button>
      <p className={'txt'}>Recibe noticias y singles directamente en tu email.</p>
      <ToastContainer align={"left"} />
    </div>
      );
};

export default Subscribe;