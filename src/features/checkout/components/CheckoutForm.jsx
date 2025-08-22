const CheckoutForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    address: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    if (!form.address.trim()) newErrors.address = 'Address is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
    }
  };

  return (
    <form className="idb-checkout-form" onSubmit={handleSubmit}>
      <div className="idb-checkout-form__field">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <span className="idb-checkout-form__error">{errors.name}</span>}
      </div>
      <div className="idb-checkout-form__field">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <span className="idb-checkout-form__error">{errors.email}</span>}
      </div>
      <div className="idb-checkout-form__field">
        <label htmlFor="address">Address</label>
        <input
          type="text"
          id="address"
          name="address"
          value={form.address}
          onChange={handleChange}
        />
        {errors.address && <span className="idb-checkout-form__error">{errors.address}</span>}
      </div>
    </form>
  );
};

export default CheckoutForm;
