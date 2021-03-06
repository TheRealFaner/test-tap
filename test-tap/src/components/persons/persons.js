import React from 'react';
import './index.css';
import PersonIcon from '../../icons/persons/person.svg';
import PersonsIcon from '../../icons/persons/persons.svg';
import EditIcon from '../../icons/actions/edit.svg';
import DeleteIcon from '../../icons/actions/delete.svg';

function Person({data, togglePopup}) {
    return  <div className="person">
                <img src={PersonIcon} alt="" className="personIcon"/>
                <div className="firstName">{data.firstName}</div>
                <div className="lastName">{data.lastName}</div>
                <div className="commands">
                <button type="button" className="btn btn-alert btn-action" onClick={() => {togglePopup(false, data.id)}}>
                    <img src={EditIcon} alt="" className="actionImg"/>
                </button>
                <button type="button" className="btn btn-warning btn-action" onClick={() => {togglePopup(false, data.id, true)}}>
                    <img src={DeleteIcon} alt="" className="actionImg"/>
                </button>
                </div>
            </div>
}

export function Persons ({data, togglePopup}) {
    const persons = data.map((value) => {
        return <Person key={value.id} data={value} togglePopup={togglePopup}/>
    });

    return  <>
                <div className="person">
                    <img src={PersonsIcon} alt="" className="personIcon"/>
                    <div className="firstName">Имя</div>
                    <div className="lastName">Фамилия</div>
                    <div className="commands">Действия</div>
                </div>
                {persons}
            </>
}