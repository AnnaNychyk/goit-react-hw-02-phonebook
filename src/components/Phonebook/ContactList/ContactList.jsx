import PropTypes from "prop-types";

function ContactList({ list, onRemove }) {
  return (
    <ul>
      {list.map(({ id, name, number }) => (
        <li key={id}>
          <span>{name}</span>: <span>{number}</span>
          <button type="button" onClick={() => onRemove(id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

ContactList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onRemove: PropTypes.func.isRequired,
};

export default ContactList;
