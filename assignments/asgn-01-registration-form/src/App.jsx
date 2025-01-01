import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // use React state to manage password inputs and error message value
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("empty");

  // event function when password inputs lose focus
  const handleBlur = (e) => {
    e.preventDefault();
    if (password || confirmPassword) {
      setErrorMessage(
        password !== confirmPassword
          ? "Passwords do not match!"
          : "Passwords match!"
      );
    } else {
      // When both password inputs are empty, empty error message
      setErrorMessage("empty");
    }
  };

  return (
    <>
      <form>
        <div id="title">Registration Form</div>
        {/* className in React (avoid reserved key word) equals to class attribute in plain HTML */}
        <div className="name-group">
          <div className="label-input-group">
            {/* htmlFor in React (avoid reserved key word) equals to for attribute in plain html */}
            <label htmlFor="first-name" className="required">
              First Name
            </label>
            <input
              type="text"
              id="first-name"
              placeholder="First Name"
              required
            />
          </div>
          <div className="label-input-group">
            <label htmlFor="last-name" className="required">
              Last Name
            </label>
            <input
              type="text"
              id="last-name"
              placeholder="Last Name"
              required
            />
          </div>
        </div>
        <label htmlFor="email-address" className="required">
          Email Address
        </label>
        <input
          type="email"
          id="email-address"
          placeholder="Email Address"
          required
        />
        <label htmlFor="password" className="required">
          Password
        </label>
        <input
          type="password"
          id="password"
          // HTML5 password validation pattern
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,16}$"
          // title attribute as warning message if invalid (escapes are not working, looking for a better solution)
          title={`Password must be only alphabetical with 8-16 characters and \n contain at least one upper case, one lower case and one digit`}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value.trim())}
          onBlur={handleBlur} // Validate on losing focus
          required
        />
        <label htmlFor="confirm-password" className="required">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirm-password"
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,16}$"
          title={`Password must be only alphabetical with 8-16 characters and \n contain at least one upper case, one lower case and one digit`}
          placeholder="Confirm Password"
          onChange={(e) => setConfirmPassword(e.target.value.trim())}
          onBlur={handleBlur} // Validate on losing focus
          required
        />
        {/* Show error message when it is not empty  */}
        <p
          className="tips"
          style={{
            visibility: errorMessage !== "empty" ? "visible" : "hidden",
          }}
        >
          {errorMessage}
        </p>
        <label htmlFor="date-of-birth">Date of Birth</label>
        {/* type="date" for date picker */}
        <input type="date" id="date-of-birth" />
        <label htmlFor="gender">Gender</label>
        <div className="radio-group">
          <div>
            <input type="radio" name="gender" value="male" /> Male
          </div>
          <div>
            <input type="radio" name="gender" value="female" /> Female
          </div>
          <div>
            <input type="radio" name="gender" value="other" /> Other
          </div>
        </div>
        <label htmlFor="about-me">About Me</label>
        <textarea id="about-me" placeholder="About Me"></textarea>
        <label htmlFor="profession">Choose Your Profession</label>
        <select id="profession">
          <option disabled selected value>
            -- Select an option --
          </option>
          <option value="web-development">Web Development</option>
          <option value="data-analytics">Data Analytics</option>
          <option value="ui-ux-design">UI/UX Design</option>
          <option value="others">Others</option>
        </select>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default App
