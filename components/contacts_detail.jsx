import React from 'react';

class ContactsDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.contact) return null;

    const { largeImageURL, name, company, phone, address, birthdate,
      email } = this.props.contact;
    const dateOptions = {month: 'long', day: 'numeric', year: 'numeric'};
    const birthday = new Date(parseInt(birthdate))
    .toLocaleDateString('en-US', dateOptions);
    let formattedHomePhone = '(' + phone.home.slice(0, 3) + ')' +
    phone.home.slice(4);

    return(
      <div className='contacts-detail-container'>
        <div className='contacts-detail-top'>
          <img src={largeImageURL} alt={name}></img>
          <h1>{name}</h1>
          <div>Company: {company}</div>
        </div>

        <div>
          Phone: {formattedHomePhone}
        </div>

        <div>
          Address: {address.street}
          {address.city},
          {address.state}
          {address.zip}
        </div>

        <div>
          Birthday: {birthday}
        </div>

        <div>
          Email: {email}
        </div>
      </div>
    );
  }
}

export default ContactsDetail;
