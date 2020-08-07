import * as db from './db-base.js';

export async function GetAllPersons() {
    return db.Get('persons');
};
export async function GetPerson(id) {
    return db.Get(`persons/${id}`);
};
export async function InsertPerson(data) {
    return db.Post('persons', data);
};
export async function UpdatePerson(data) {
    const id = data.id;
    delete data.id;
    return db.Put(`persons/${id}`, data);
};
export async function DeletePerson(id) {
    return db.Delete(`persons/${id}`);
};