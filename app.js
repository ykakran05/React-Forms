const { useState } = React;

const App = () => {
    // State to hold form values and errors
    const [formData, setFormData] = useState({
        username: '',
        password: '',
        email: '',
        mobile: '',
    });

    const [errors, setErrors] = useState({});

    // Validation function
    const validate = () => {
        let formErrors = {};

        if (!formData.username) {
            formErrors.username = 'Username is required';
        }

        if (!formData.password || formData.password.length < 6) {
            formErrors.password = 'Password must be at least 6 characters';
        }

        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
            formErrors.email = 'Email is invalid';
        }

        if (!formData.mobile || !/^[0-9]{10}$/.test(formData.mobile)) {
            formErrors.mobile = 'Mobile number must be 10 digits';
        }

        setErrors(formErrors);

        return Object.keys(formErrors).length === 0; // return true if no errors
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault(); // prevent form from submitting

        if (validate()) {
            console.log('Form Data Submitted:', formData);
        } else {
            console.log('Form has errors.');
        }
    };

    // Handle input change
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
        <div>
            <h1>React Form</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Username: </label>
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                    {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
                </div>

                <div>
                    <label>Password: </label>
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                </div>

                <div>
                    <label>Email: </label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                </div>

                <div>
                    <label>Mobile: </label>
                    <input
                        type="text"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleChange}
                    />
                    {errors.mobile && <p style={{ color: 'red' }}>{errors.mobile}</p>}
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
