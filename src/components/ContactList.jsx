import React from 'react';

function ContactList(props) {
    console.log(props);
    const renderContactList = props.contacts.map((contact)=>{
        return (
            <div className="item">
                 <div className="content">
                    <div className="header">{contact.name}</div>
                </div>
            </div>
        )
    })
  return (
    <div className='ui celled list'>ContactList</div>
  )
}

export default ContactList