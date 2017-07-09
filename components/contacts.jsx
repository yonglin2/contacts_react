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
      currentContact: null,
      activeIndex: 0
    };
  }

  componentDidMount() {
    this.fetchContacts();
  }

  fetchContacts() {
    // Normally this would be done with a redux action
    const url = 'https://s3.amazonaws.com/technical-challenge/Contacts_v2.json';
    axios.get(url).then((response) => {
      const contacts = response.data;
      this.setState({contacts, loading: false});
    });
  }

  renderLoading() {
    return <div>Loading...</div>;
  }

  handleContactSelect(contact, activeIndex) {
    this.setState({currentContact: contact});
  }

  render() {
    const { contacts, loading, currentContact, activeIndex } = this.state;
    return (
      <div className='contacts-container'>
        {loading ? this.renderLoading :
          <ul className='contacts-list'>
            {contacts.map( (contact, idx) => {
              return (
                <ContactsListItem
                  key={idx}
                  index={idx}
                  onClick={this.handleContactSelect}
                  contact={contact} />
              );
            })}
          </ul>
        }

        <div className='contacts-detail'>
          <ContactsDetail contact={contacts[activeIndex]}/>
        </div>
      </div>
    );
  }
}

export default Contacts;
