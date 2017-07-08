import React from 'react';
import axios from 'axios';
import ContactsListItem from './contacts_list_item';
import ContactsDetail from './contacts_detail';

class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [],
      loading: true,
      currentContact: null
    };
    this.fetchContacts = this.fetchContacts.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderLoading = this.renderLoading.bind(this);
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

  handleClick(contact) {
    this.setState({currentContact: contact});
  }

  render() {
    const { contacts, loading, currentContact } = this.state;
    return(
      <div>
        <ul>
          {loading ? this.renderLoading :
            contacts.map( (contact, idx) => {
              return(<li key={idx}
                onClick={this.handleClick.bind(this, contact)}>
                <ContactsListItem contact={contact} />
              </li>);
            })
          }
        </ul>
        <div>
          <ContactsDetail contact={this.state.currentContact}/>
        </div>
      </div>
    );
  }
}

export default Contacts;
