import React from 'react';

class ContactsListItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.handleContactSelect(this.props.index);
  }

  render() {
    const { contact, active } = this.props;
    let klass = active ? 'contacts-list-item active' : 'contacts-list-item';

    return (
      <li className ={klass} onClick={this.handleClick}>
        <img src={contact.smallImageURL} alt={contact.name} />
        <div>{contact.name}</div>
        <div>{contact.phone.work}</div>
      </li>
    );
  }
}


export default ContactsListItem;
