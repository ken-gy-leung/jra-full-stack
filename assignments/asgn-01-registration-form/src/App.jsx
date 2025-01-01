import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <form>
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" placeholder="First Name" />
        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" placeholder="Last Name" />
        <label htmlFor="email-address">Email Address</label>
        <input type="email" id="email-address" placeholder="Email Address" />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Password" />
        <label htmlFor="confirm-password">Confirm Password</label>
        <input
          type="password"
          id="confirm-password"
          placeholder="Confirm Password"
        />
        <label htmlFor="date-of-birth">Date of Birth</label>
        <input type="date" id="date-of-birth" />
        <label htmlFor="gender">Gender</label>
        <input type="radio" name="gender" value="male" /> Male
        <input type="radio" name="gender" value="female" /> Female
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
