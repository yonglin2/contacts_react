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
    const phone = contact.phone.work;
    let formatted_phone = '(' + phone.slice(0, 3) + ')' + phone.slice(4);
    let klass = active ? 'contacts-list-item active' : 'contacts-list-item';

    return (
      <li className ={klass} onClick={this.handleClick}>
        <img className='contacts-list-item-img' src={contact.smallImageURL}
          alt={contact.name} />
        <div className='contacts-list-item-right'>
          <h2 className='contacts-list-item-name'>{contact.name}</h2>
          <div>{formatted_phone}</div>
        </div>
      </li>
    );
  }
}

export default ContactsListItem;
