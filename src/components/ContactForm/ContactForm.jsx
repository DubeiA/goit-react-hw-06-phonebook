// import { useState } from 'react';
// import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { AddName, AddNumber } from 'redux/reducer';
import css from '../ContactForm/ContactForm.module.css';

export function ContactForm() {
  const dispatch = useDispatch();
  //   const [name, setName] = useState('');
  //   const [number, setNumber] = useState('');

  //   const contact = { name, number };

  //   const handleOnChange = event => {

  const handleSubmit = e => {
    e.preventDefault();

    const { name, number } = e.target;
    console.log(name.value);
    console.log(number.value);
    dispatch(AddName(name.value));
    dispatch(AddNumber(number.value));
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className={css.labelName}>
        <span className={css.spanName}>Name</span>
        <input
          className={css.imputName}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          //   value={name}
          //   onChange={handleOnChange}
        />

        <label className={css.labelNumber}>
          <span className={css.spanNumber}>Number</span>

          <input
            className={css.imputName}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            // value={number}
            // onChange={handleOnChange}
          />
        </label>
        <button type="submit" className={css.buttonSubmit}>
          Add contact
        </button>
      </label>
    </form>
  );
}

// ContactForm.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
