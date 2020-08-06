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
    <div className="headerList">Список сотрудников</div>
    <div className="bodyList">
      {isLoaded ? <Persons data={persons}/> : <div></div>}
    </div>
    </>
  );
}

export default App;
