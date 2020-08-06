import React, { Component } from 'react';
import Mailchimp from 'react-mailchimp-form';
import "./subscribe.scss";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <p>Subscribe</p>
      <p>Recibe noticias y singles directamente en tu email.</p>
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
          />
    </div>
      );
};

export default Subscribe;