import React, { Component } from 'react';
import Mailchimp from 'react-mailchimp-form';
import "./subscribe.scss";

const Subscribe = () => {
  return (
    <div className="subscribe">
      <p>Subscribe</p>
      <p>Recibe noticias y singles directamente en tu email.</p>
      <Mailchimp
          action='https://<YOUR-USER>.us16.list-manage.com/subscribe/post?u=XXXXXXXXXXXXX&amp;id=XXXXXX'
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