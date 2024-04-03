import { HiPhone } from "react-icons/hi2";
import { HiUser } from "react-icons/hi";
import css from "../PhoneBook.module.css";

const Contact = ({ item, deleteContact }) => {
  return (
    <li className={css.item}>
      <div className={css.flex_container}>
        <div className={css.flex}>
          <HiUser size={18} />
          <h3 className={css.name}>{item.name}</h3>
        </div>
        <div className={css.flex}>
          <HiPhone size={18} />
          <p>{item.number}</p>
        </div>
      </div>
      <button
        className={css.btn_delete}
        onClick={() => deleteContact(item.id)}
        type="button"
      >
        Delete
      </button>
    </li>
  );
};

export default Contact;
