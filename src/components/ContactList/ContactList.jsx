import Contact from "../Contact/Contact";
import css from "../PhoneBook.module.css";

const ContactList = ({ contacts, deleteContact, searchData }) => {
  if (!contacts.length && searchData) {
    return <h2>Search query is not valid...</h2>;
  } else if (!contacts.length) {
    return <h2>No contacts yet...</h2>;
  }
  return (
    <ul className={css.list}>
      {contacts.map((item) => (
        <Contact key={item.id} item={item} deleteContact={deleteContact} />
      ))}
    </ul>
  );
};

export default ContactList;
