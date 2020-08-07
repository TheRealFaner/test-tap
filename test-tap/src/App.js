import React, { useState, useEffect } from 'react';
import * as DB from './db/db.js';
import './App.css';
import { Persons } from './components/persons/persons.js';
import { Popup } from './components/popup/popup.js';
function App() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [persons, setPersons] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  function togglePopup() {
    setShowPopup(!showPopup);
  }
  // Аналогично componentDidMount и componentDidUpdate:
  useEffect(() => {
    async function fetchData() {
      setPersons(await DB.GetAllPersons());
    };
    fetchData();
    setIsLoaded(true);
  }, []);

  return (
    <>
    <header>
      <span>Список сотрудников</span>
    </header>
    <main className="personsList">
      {isLoaded ? <Persons data={persons}/> : <div></div>}
    </main>
    <footer>
      <button type="button" className="btn btn-sucess" onClick={togglePopup}>Добавить</button>
    </footer>
    {showPopup ? 
        <Popup
          header="Добавить сотрудника"
          togglePopup={togglePopup}
        />
        : null
      }
    </>
  );
}

export default App;
