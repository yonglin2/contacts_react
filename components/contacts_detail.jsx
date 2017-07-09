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
    const street = address.street.includes('#-') ? address.street.slice(0, address.street.indexOf('#')) 
    : address.street;
    const cityStateZip = `${address.city}, ${address.state} ${address.zip}`;
    const suite = address.street.includes('#-') ?
    `Suite ${address.street.slice(address.street.indexOf('-') + 1)}` : '';

    return(
      <div className='contacts-detail-container'>
        <div className='contacts-detail-top'>
          <img src={largeImageURL} alt={name}></img>
          <div className='contacts-detail-top-right'>
            <h2>{name}</h2>
            <div>
              <h3>Company:</h3>
              <h2>{company}</h2>
            </div>
          </div>
        </div>

        <div>
          Phone:
          <span>
            <h2>{formattedHomePhone}</h2>
            <h2>Home</h2>
            </span>
        </div>

        <div className='address'>
          Address:
          <h2>{street}</h2>
          <h2>{suite}</h2>
          <h2>{cityStateZip}</h2>
        </div>

        <div>
          Birthday:
          <h2>{birthday}</h2>
        </div>

        <div>
          <span>
            Email:
            <h2>Work</h2>
          </span>
          <h2>{email}</h2>
        </div>
      </div>
    );
  }
}

export default ContactsDetail;
