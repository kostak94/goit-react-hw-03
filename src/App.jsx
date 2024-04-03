import ContactForm from "./components/ContactForm/ContactForm";
import initialContacts from "./assets/contacts.json";
import { useState, useEffect } from "react";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useState(() => {
    return (
      JSON.parse(window.localStorage.getItem("contacts-key")) || initialContacts
    );
  });

  const [searchData, setSearchData] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts-key", JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (newContact) => {
    setContacts([
      ...contacts,
      { ...newContact, number: formatPhoneNumber(newContact.number) },
    ]);
  };

  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((item) => item.id !== id));
  };

  const getFilteredContacts = () => {
    return contacts.filter((item) =>
      item.name.toLowerCase().includes(searchData.toLowerCase())
    );
  };

  function formatPhoneNumber(num) {
    const numStr = String(num);
    const first = numStr.substring(0, 3);
    const middle = numStr.substring(3, 5);
    const last = numStr.substring(5, 7);
    const res = `${first}-${middle}-${last}`;
    return res;
  }

  const filteredContacts = getFilteredContacts();

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm addContact={addContact} />
      <SearchBox searchData={searchData} setSearchData={setSearchData} />
      <ContactList
        contacts={filteredContacts}
        deleteContact={deleteContact}
        searchData={searchData}
      />
    </>
  );
}

export default App;
