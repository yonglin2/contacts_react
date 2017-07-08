import React from 'react';
import axios from 'axios';

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: []
    };
    this.fetchContacts = this.fetchContacts.bind(this);
  }

  fetchContacts() {
    // this.setState({
    //   contacts: [{name: 'gedion'}, {name: 'jacky'}]
    // });
    let url = 'https://s3.amazonaws.com/technical-challenge/Contacts_v2.json';
    axios.get(url).then((response) => {
      const contacts = response.data;
      // console.log(contacts);
      this.setState({contacts});
    });
  }

  componentDidMount(){
    this.fetchContacts();
  }

  render() {
    const { contacts } = this.state;
    console.log(contacts);
    return(
      <div>
        <ul>
          {contacts.map( (contact) => {
              return(<li key={contact.birthdate}>{contact.name}</li>);
            })
          }
        </ul>
      </div>
    );
  }
}

export default Contacts;
