import React, { useState, useEffect } from 'react';
import * as DB from './db/db.js';
import './App.css';
import { Persons } from './components/persons/persons.js';
import { Popup as PersonsPopup } from './components/persons/popup/popup.js';


function App() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [persons, setPersons] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [actionId, setActionId] = useState(null);
  const [isDelete, setIsDelete] = useState(false);

  function togglePopup(isSubmit = false, id = null, deleteMod = false) {
    setShowPopup(!showPopup);
    if (isSubmit)
    {
      setActionId(null);
      setIsLoaded(false);
    }
    if (id != null)
    {
      if (deleteMod)
      {
        setIsDelete(true);
      }
      setActionId(id);
    }
  }

  useEffect(() => {
    async function fetchData() {
      setPersons(await DB.GetAllPersons());
    };

      fetchData();
      setIsLoaded(true);

  }, [isLoaded]);

  return (
    <>
    <header>
      <span>Список сотрудников</span>
    </header>
    <main className="personsList">
      {isLoaded ? <Persons data={persons} togglePopup={togglePopup}/> : <div></div>}
    </main>
    <footer>
      <button type="button" className="btn btn-sucess" onClick={togglePopup}>Добавить</button>
    </footer>
    {showPopup ? 
        <PersonsPopup
          header="Добавить сотрудника"
          id={actionId}
          togglePopup={togglePopup}
          deleteMode={isDelete}
        /> : null
      }
    </>
  );
}

export default App;
