import React from "react";
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [number, setNumber] = useState([]);
  const [countryCode, setCountryCode] = useState(91);
  const [flagUrl, setFlagUrl] = useState(
    "https://restcountries.eu/data/ind.svg"
  );

  useEffect(() => {
    const getCategory = async () => {
      const tasksFromServer = await fetchCountries();
      setCountries(tasksFromServer);
    };
    getCategory();
  }, []);

  const fetchCountries = async () => {
    const res = await fetch(`https://restcountries.eu/rest/v2/all`);
    const data = await res.json();
    return data;
  };

  const changeFlag = (e) => {
    var index = e.target.selectedIndex;
    var alpha3Code = e.target.childNodes[index].getAttribute("data-alpha3code");
    var country = countries.filter((c) => c.alpha3Code.includes(alpha3Code));
    setCountryCode(e.target.value);
    setFlagUrl(country[0].flag);
  };

  const openWhatsapp = () => {
    var whatsappUrl = `https://api.whatsapp.com/send?phone=${countryCode}${number}`;
    number.length < 7
      ? alert("Invalid phone Number")
      : window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="App">
      <div id="heading">
        <img src="logo.svg" alt="logo" />
        <h1> WhatSend! </h1>
      </div>
      <div id="main">
        <div id="container">
          <p>Send Whatsapp messages without saving contact number.</p>
          <div id="number">
            <img id="flag" src={flagUrl} alt="country flaf" width="30px" />
            <label>
            <select value={countryCode} id="countries" onChange={(e) => changeFlag(e)}>
              {countries.map((country) => (
                <option key={country.alpha3Code}
                  data-alpha3code={country.alpha3Code}
                  value={country.callingCodes}
                >
                  +{country.callingCodes} {country.name}
                </option>
              ))}
            </select>
            </label>
            <label>
            <input
              onChange={(c) => setNumber(c.target.value)}
              type="tel"
              minLength="5"
              maxLength="10"
              placeholder="Enter your number!"
              id="mobile-number"
              required
            />
            </label>
          </div>
          <button onClick={openWhatsapp} id="message">
            <img src="logo.svg" alt="logo" /> <span>Send Message</span>{" "}
          </button>
        </div>
      </div>
      <footer>
        <p>
          This application is not associated with WhatsApp and It uses WhatsApp
          api to redirect the contact number.
        </p>
        <p style={{ marginTop: 0 }}>
          Created with <img width="20" src="heart.svg" alt="heart" /> by{" "}
          <a rel="noopener" href="https://twitter.com/bilal8492" target="_blank">
            Bilal
          </a>
          . Source code available at{" "}
          <a rel="noopener" href="https://github.com/bilal8492/whatSend" target="_blank">
            Github
          </a>
        </p>
        <p style={{ marginTop: 0 }}>
          For any feedback and bug report create an{" "}
          <a rel="noopener"
            href="https://github.com/bilal8492/WhatSend/issues"
            target="_blank"
          >
            Issue
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
