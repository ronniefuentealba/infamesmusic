import React, { Component } from 'react';
import Mailchimp from 'react-mailchimp-form';

const Subscribe = () => {
  return (
    <>
    <p>Subscribe</p>
    {/*
    TODO
    */}
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
      </>
      );
};

export default Subscribe;