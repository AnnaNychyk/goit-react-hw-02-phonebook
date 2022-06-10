import { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

class Phonebook extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  handleFilterChange = (event) => {
    this.setState({ filter: event.currentTarget.value });
  };

  handleCreateContact = (contact) => {
    const { contacts } = this.state;

    if (
      contacts.find(
        ({ name }) =>
          name.trim().toLowerCase() === contact.name.trim().toLowerCase()
      )
    ) {
      return alert(`${contact.name} is already in contacts`);
    }

    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contacts],
    }));
  };

  handleRemoveContact = (id) => {
    this.setState((prevState) => ({
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  handleFilterContacts = () => {
    const { contacts, filter } = this.state;

    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter.trim().toLowerCase())
    );
  };

  render() {
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.handleCreateContact} />

        <h2>Contacts</h2>
        <Filter value={this.state.filter} onChange={this.handleFilterChange} />
        <ContactList
          onRemove={this.handleRemoveContact}
          list={this.handleFilterContacts()}
        />
      </div>
    );
  }
}

export default Phonebook;
