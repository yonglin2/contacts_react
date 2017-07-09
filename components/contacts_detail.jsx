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

    console.log(this.props);
    return(
      <div>
        <div>
          <img src={largeImageURL} alt={name}></img>
          <h1>{name}</h1>
          <div>Company: {company}</div>
        </div>

        <div>
          Phone: {phone.home}
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


// largeImageURL
// name
// company
//
// phone
// address
//
// birthday
//
// email

// 1382659557
// 558289857
