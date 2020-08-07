import React, { useState, useEffect } from 'react';
import './index.css';
import { GetPerson, InsertPerson, UpdatePerson, DeletePerson } from '../../../db/db.js';

export function Popup({header, id, togglePopup, deleteMode}) {
    const [data, setData] = useState({id: null, firstName: "", lastName: ""});
    const [isEdit, setIsEdit] = useState(false);
    const [isLoad, setIsLoad] = useState(false);
    const [isDelete, setIsDelete] = useState(false);
    const [okText, setOkText] = useState('Создать');
    const [headerText, setHeaderText] = useState(header);

    useEffect(()=>{
        if (id != null)
        {
            async function fetchData() {
                setData(await GetPerson(id));
                };
            fetchData();
            if (deleteMode)
            {
                setOkText('Удалить');
                setHeaderText('Удалить пользователя?');
                setIsDelete(true);
            }
            else
            {
                setIsEdit(true);
            }
        }
        setIsLoad(true);
    },[]);

    function onChangeFunc(e) {
        e.persist();
        setData(prev => ({...prev, [e.target.name]: e.target.value}))
    }

    function onSubmit(e) {
        e.persist();
        console.log(isEdit);
        if (isEdit) {
            UpdatePerson(data);
        }
        else {
            InsertPerson(data);
        }
        if (isDelete)
        {
            DeletePerson(data.id);
        }
        togglePopup(true);
    }

    return  <>{isLoad ? 
                <div className="popup">
                    <div className="popup_inner" role="document">
                        <div className="headerText">
                            <h3>{headerText}</h3>
                        </div>
                        <form onSubmit={(e) => {onSubmit(e)}}>
                            <div className="inputs">
                                <div className="personInput"> 
                                    <h5>Имя</h5>
                                    <input type="text" name="firstName" value={data.firstName} 
                                        onChange={(e) => {onChangeFunc(e)}} readOnly={isDelete}/>
                                </div>
                                <div className="personInput">
                                    <h5>Фамилия</h5>
                                    <input type="text" name="lastName" value={data.lastName} 
                                    onChange={(e) => {onChangeFunc(e)}} readOnly={isDelete}/>
                                </div>
                            </div>
                            <div className="personButtons">
                                <button type="submit" className="btn btn-sucess btn-inline">{okText}</button>
                                <button className="btn btn-warning btn-inline" onClick={togglePopup}>Отмена</button>
                            </div>
                        </form>
                    </div>
                </div> : null}
            </>
}