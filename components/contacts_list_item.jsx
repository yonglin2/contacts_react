import React from 'react';

const ContactsListItem = ({ contact }) => (
  <li>
    <img src={contact.smallImageURL} alt={contact.name} />
    <div>{contact.name}</div>
    <div>{contact.phone.work}</div>
  </li>
);

export default ContactsListItem;
