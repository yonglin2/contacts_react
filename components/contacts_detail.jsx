import React from 'react';

class ContactsDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render(){
    if (!this.props.contact) return null;

    const { largeImageURL, name, company, phone, address, birthdate,
      email } = this.props.contact;
    console.log(this.props);
    return(
      <div>
        <div>
          <img src={largeImageURL} alt={name}></img>
          <h1>{name}</h1>
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
