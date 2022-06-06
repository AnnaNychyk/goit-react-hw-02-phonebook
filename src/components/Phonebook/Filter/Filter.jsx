function Filter({ value, onChange }) {
  return (
    <label>
      Find contact by name
      <input name="filter" value={value} onChange={onChange} />
    </label>
  );
}

export default Filter;
