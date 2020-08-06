import React from 'react';
import './index.css';
import PersonIcon from '../../icons/persons/person.svg';
import EditIcon from '../../icons/actions/edit.svg';
import DeleteIcon from '../../icons/actions/delete.svg';

function Person({data}) {
    return  <div className="person">
                <img src={PersonIcon} className="personIcon"/>
                <div className="firstName">{data.firstName}</div>
                <div className="lastName">{data.lastName}</div>
                <div className="commands">
                    <div>
                        <button type="button" className="btn btn-action-edit">
                            <img src={EditIcon} className="actionImg"/>
                        </button>
                    </div>
                    <div>
                        <button type="button" className="btn btn-action-delete">
                            <img src={DeleteIcon} className="actionImg"/>
                        </button>
                    </div>
                </div>
            </div>
}

export function Persons ({data}) {
    const persons = data.map((value) => {
        return <Person key={value.id} data={value} />
    });

    return  <>
                <div className="person">
                    <img src={PersonIcon} className="personIcon"/>
                    <div className="firstName">Имя</div>
                    <div className="lastName">Фамилия</div>
                    <div className="commands">Действия</div>
                </div>
                {persons}
            </>
}