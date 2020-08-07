import React, { useState, useEffect } from 'react';
import './index.css';

export function Popup({header, person, togglePopup}) {
    const [data, setData] = useState({firstName: "", lastName: ""});
    const [isEdit, setIsEdit] = useState(false);

    function closePopup() {
        togglePopup();
    }

    function onChangeFunc(e) {
        e.persist();
        setData(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    function onSubmit(e) {
        e.persist();
        console.log(data);
        togglePopup();
    }

    return  <div className="popup">
                <div className="popup_inner" role="document">
                    <div className="headerText">
                        <h3>{header}</h3>
                    </div>
                    <form onSubmit={(e) => {onSubmit(e)}}>
                        <div className="inputs">
                            <div className="personInput"> 
                                <h5>Имя</h5>
                                <input type="text" name="firstName" value={data.firstName} 
                                    onChange={(e) => {onChangeFunc(e)}}/>
                            </div>
                            <div className="personInput">
                                <h5>Фамилия</h5>
                                <input type="text" name="lastName" value={data.lastName} 
                                onChange={(e) => {onChangeFunc(e)}}/>
                            </div>
                        </div>
                        <div className="personButtons">
                            <button type="submit" className="btn btn-sucess btn-inline">{isEdit ? 'Сохранить' : 'Создать'}</button>
                            <button className="btn btn-warning btn-inline" onClick={togglePopup}>Отмена</button>
                        </div>
                    </form>
                </div>
            </div>
}