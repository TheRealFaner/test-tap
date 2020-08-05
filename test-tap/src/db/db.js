import * as db from './db-base.js';

export async function GetAllPersons() {
    return db.Get('persons');
};