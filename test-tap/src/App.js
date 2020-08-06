import React, { useState, useEffect } from 'react';
import * as DB from './db/db.js';
import './App.css';
import { Persons } from './components/persons.js';

function App() {

  const [isLoaded, setIsLoaded] = useState(false);
  const [persons, setPersons] = useState([]);

  // Аналогично componentDidMount и componentDidUpdate:
  useEffect(() => {
    async function fetchData() {
      setPersons(await DB.GetAllPersons());
    };
    // Обновляем заголовок документа с помощью API браузера
    fetchData();
    console.log(persons);
    setIsLoaded(true);
  }, []);

  return (
    <>
    <header>
      <div>Список сотрудников</div>
    </header>
    <div className="bodyList">
      {isLoaded ? <Persons data={persons}/> : <div></div>}
    </div>
    <footer>
      <button type="button" className="btn btn-person">Добавить</button>
    </footer>
    </>
  );
}

export default App;
