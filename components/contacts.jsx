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
      activeIndex: 0
    };
    this.handleContactSelect = this.handleContactSelect.bind(this);
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

  handleContactSelect(activeIndex) {
    this.setState({activeIndex});
  }

  render() {
    const { contacts, loading, activeIndex } = this.state;
    return (
      <div className='contacts-container'>
        {loading ? this.renderLoading() :
          <ul className='contacts-list'>
            {contacts.map( (contact, idx) => {
              return (
                <ContactsListItem
                  key={idx}
                  index={idx}
                  handleContactSelect={this.handleContactSelect}
                  active={idx === activeIndex}
                  contact={contact} />
              );
            })}
          </ul>
        }

        <ContactsDetail contact={contacts[activeIndex]}/>
      </div>
    );
  }
}

export default Contacts;
