import { Component } from "react";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import Filter from "./Filter/Filter";

class Phonebook extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  handleCreateContact = (contacts) => {
    this.setState((prevState) => ({
      contacts: [...prevState.contacts, contacts],
    }));
  };

  handleRemoveContact = () => {
    console.log("");
  };

  handleFilterContacts = () => {
    const { contacts, filter } = this.state;
  };

  handleFilterChange = (event) => {
    this.setState({ filter: event.target.value });
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
          list={this.state.contacts}
        />
      </div>
    );
  }
}

export default Phonebook;
