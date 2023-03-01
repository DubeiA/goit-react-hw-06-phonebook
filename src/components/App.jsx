import { ContactForm } from './ContactForm/ContactForm';
// import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export function App() {
  return (
    <div>
      <h2>Phonebook</h2>

      <ContactForm />

      <h3>Contacts</h3>

      {/* <Filter value={filterName} onChange={filterOnChange} /> */}

      <ContactList />
    </div>
  );
}

// const alertName = () => {
//   return contacts.map(contact => contact.name);
// };

// const deleteContacts = contactsID => {
//   setContacts(prevContacts =>
//     prevContacts.filter(contact => contact.id !== contactsID)
//   );
// };

// const filterOnChange = event => {
//   setFilter(event.currentTarget.value);
// };

// const formSubmitHandler = data => {
//   if (alertName().includes(data.name)) {
//     alert(`${data.name} is already in your contact`);
//     return;
//   }

//   const addContacts = {
//     id: nanoid(),
//     name: data.name,
//     number: data.number,
//   };

//   setContacts(prevState => [addContacts, ...prevState]);
// };
// const normalizedFilter = filterName.toLowerCase();

// const visibleName = contacts.filter(contact =>
//   contact.name.toLowerCase().includes(normalizedFilter)
// );
