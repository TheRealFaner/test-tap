import axios from 'axios';
import toast from 'siiimple-toast';
import 'siiimple-toast/dist/style.css';

const server = 'http://localhost:3001/'

function Toast(requestCode) {
    console.log(requestCode);
    switch (requestCode) {
        case 200:
        {
            toast.success('Успешно!');
            break;
        }
        case 201:
        {
            toast.success('Пользователь успешно создан!');
            break;
        }
        case 400:
        {
            toast.alert('Неверный запрос! Обратитесь к администратору.');
            break;
        }
        case 400:
        {
            toast.alert('Сущность не найдена!');
            break;
        }
        case 500:
        {
            toast.alert('Ошибка сервера! Обратитесь к администратору!');
            break;
        }
    }
    
}

export async function Get(route) {
    let request = await axios.get(server+route);
    return request.data;
}
export async function Post(route, data) {
    let request = await axios.post(server+route, data);
    Toast(request.status);
}
export async function Put(route, data) {
    let request = await axios.put(server+route, data);
    Toast(request.status);
}
export async function Delete(route) {
    let request = await axios.delete(server+route);
    Toast(request.status);
}