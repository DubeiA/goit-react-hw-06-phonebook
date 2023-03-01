import css from '../ContactList/ContactList.module.css';
import { useSelector } from 'react-redux';
import { DeleteContact } from 'redux/reducer';
import { useDispatch } from 'react-redux';

// import PropTypes from 'prop-types';

export const ContactList = () => {
  const selectors = useSelector(state => state.user);
  const dispatch = useDispatch();

  return (
    <ul className={css.list}>
      {selectors.map(selector => {
        return (
          <li className={css.item} key={selector.id}>
            {selector.name} : {selector.number}
            <button
              className={css.item__button}
              onClick={() => dispatch(DeleteContact(selector.id))}
            >
              Видалити
            </button>
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
