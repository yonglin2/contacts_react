import React from 'react';

const ContactsListItem = ({ contact }) => (
  <div>
    <div>{contact.name}</div>
    <div>{contact.phone.work}</div>
  </div>
);

export default ContactsListItem;

// <img src={contact.smallImageURL} alt={contact.name} />
