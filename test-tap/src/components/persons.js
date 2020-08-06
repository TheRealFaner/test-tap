import React from 'react';

function Person({data}) {
    return  <div className="person">
                <div className="firstName">{data.firstName}</div>
                <div className="lastName">{data.lastName}</div>
            </div>
}

export function Persons ({data}) {
    return data.map((value) => {
        return <Person data={value} />
    });
}