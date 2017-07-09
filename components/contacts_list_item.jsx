import React from 'react';

const ContactsListItem = ({ contact }) => (
  <div>
    <img src={contact.smallImageURL} alt={contact.name} />
    <div>{contact.name}</div>
    <div>{contact.phone.work}</div>
  </div>
);

export default ContactsListItem;
