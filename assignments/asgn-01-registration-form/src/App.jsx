import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
      <form>
        <div id="title">Registration Form</div>
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
              required="required"
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
              required="required"
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
          required="required"
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
          title={`password must be alphabetical, \n\r contain at least one upper case, one lower case and one digit \n\r and be in the range of 8-16 characters`}
          placeholder="Password"
          required="required"
        />
        <label htmlFor="confirm-password" className="required">
          Confirm Password
        </label>
        <input
          type="password"
          id="confirm-password"
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,16}$"
          placeholder="Confirm Password"
          required="required"
        />
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
        </div>
        <label htmlFor="about-me">About Me</label>
        <textarea id="about-me" placeholder="About Me"></textarea>
        <label htmlFor="profession">Choose Your Profession</label>
        <select id="profession">
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
