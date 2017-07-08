import React from 'react';
import axios from 'axios';
import ContactsListItem from './contacts_list_item';

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      loading: true
    };
    this.fetchContacts = this.fetchContacts.bind(this);
  }

  componentDidMount(){
    this.fetchContacts();
  }

  fetchContacts() {
    // Normally this would be done with a redux action, but I thought
    // implementing a full redux would've been overkill for this project.
    const url = 'https://s3.amazonaws.com/technical-challenge/Contacts_v2.json';
    axios.get(url).then((response) => {
      const contacts = response.data;
      this.setState({contacts, loading: false});
    });
  }

  renderLoading() {
    return <div>Loading...</div>;
  }

  render() {
    const { contacts, loading } = this.state;
    return(
      <div>
        <ul>
          {loading ? this.renderLoading :
            contacts.map( (contact) => {
              return(<ContactsListItem
                key={contact.birthdate} contact={contact} />);
            })
          }
        </ul>
      </div>
    );
  }
}

export default Contacts;
