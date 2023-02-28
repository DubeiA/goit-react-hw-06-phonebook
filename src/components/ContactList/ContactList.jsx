import css from '../ContactList/ContactList.module.css';
import { useSelector } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
// import PropTypes from 'prop-types';

export const ContactList = () => {
  const selectors = useSelector(state => state.user);
  //   const sel = selectors.map(s => s);
  console.log(selectors);
  return (
    <ul className={css.list}>
      {selectors.map(selector => {
        return (
          <li className={css.item} key={nanoid()}>
            {selector.name} : {selector.number}
            <button className={css.item__button}>Видалити</button>
          </li>
        );
      })}
    </ul>
  );
};

// ContactList.propTypes = {
//   onDeleteContact: PropTypes.func.isRequired,
//   contacts: PropTypes.array.isRequired,
// };
