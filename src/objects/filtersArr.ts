import city from './../images/city.svg';
import workDay from './../images/workDay.svg';
import loud from './../images/loud.svg';
import star from './../images/star.svg';
import price from '../images/price.svg';
import IFilter from './filter';


const filters : IFilter[] = [
    { img: city, items: ["Москва", "Минск", "Гродно", "Пинск"],type:"cityFilter" },
    { img: workDay, items: ["Полный день", "Гибкий график", "Удаленная работа"],type:"workDayFilter" },
    { img: loud, items: ["Полная занятость", "Частичная занятость", "Проектная работа", "Стажировка"],type:"payFilter" },
    { img: star, items: ["Нет опыта", "От 1 года до 3 лет", "От 3 до 6 лет", "Более 6 лет" ],type:"expFilter" },
    { img: price, items: ["40 000", "80 000", "100 000", "150 000"],type:"priceFilter" }
];

export default filters;