import {q} from './q';

const a: string = 'ddd';

console.log(a, q);
console.log(6);
fetch('http://127.0.0.1:3000/exchange/usd')
    .then((el: any) => el.json())
    .then((el) => console.log(el));
