import "./Map.css";

function Checkbox({ label, onChange, checked }) {
  const handleChange = (event) => {
    onChange(event.target.checked);
  };

  return (
    <label className="container">
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <span className="checkmark"></span>
      {label}
    </label>
  );
}

export default Checkbox;
