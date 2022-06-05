function ContactList({ list, onRemove }) {
  return (
    <ul>
      {list.map(({ id, name, number }) => (
        <li key={id}>
          <span>{name}</span>: <span>{number}</span>
          <button type="button" onClick={onRemove}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}

export default ContactList;
