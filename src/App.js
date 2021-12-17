import logo from "./sirwest-brand.svg";
import { Icon } from "react-icons-kit";
import { linkedin } from "react-icons-kit/fa/linkedin";
import { github } from "react-icons-kit/fa/github";
import { envelopeO } from "react-icons-kit/fa/envelopeO";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>Just Wait! Something Great is Coming.</code>
        </p>
        <ul className="App-social">
          <li>
            <a
              aria-label="linkedin"
              href="https://www.linkedin.com/in/billywestjm/"
              className="social-link"
              rel="noopener noreferrer"
              target="_blank"
              title="linkedin"
            >
              <Icon className="Icon" size={24} icon={linkedin} />
            </a>
          </li>
          <li>
            <a
              aria-label="github"
              href="https://github.com/billywest"
              className="social-link"
              rel="noopener noreferrer"
              target="_blank"
              title="github"
            >
              <Icon className="Icon" size={24} icon={github} />
            </a>
          </li>
          <li>
            <a
              aria-label="email"
              href="mailto:billywest.jm@gmail.com"
              className="social-link"
              rel="noopener noreferrer"
              target="_blank"
              title="email"
            >
              <Icon className="Icon" size={24} icon={envelopeO} />
            </a>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default App;
