import PropTypes from "prop-types";

function Filter({ value, onChange }) {
  return (
    <label>
      Find contact by name
      <input name="filter" value={value} onChange={onChange} />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
