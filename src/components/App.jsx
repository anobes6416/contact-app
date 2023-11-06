import React from 'react';
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactCard from "./ContactCard";
import ContactList from "./ContactList";

function App() {
  const contacts = [
    {
      id:"1",
      name:"Sebona Ifa",
      email:"sebonaifa777@gmail.com",
    },
    {
      id:"2",
      name:"Bonsa Ifa",
      email:"bonsaifa@gmail.com",
    }
  ];

  return (
    <div className='ui container'>
      <Header />
      <AddContact />
      <ContactList contacts={contacts} /> 
    </div>
  );
}

export default App;
