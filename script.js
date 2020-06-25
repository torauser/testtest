const inputTitle = document.querySelector('.title');
const inputText = document.querySelector('.text');
const inputAuthor = document.querySelector('.author');
const inputComments = document.querySelector('.comments');

const day = document.querySelector('.day-month');
const time = document.querySelector('.time');
const title = document.querySelector('.news-title');
const text = document.querySelector('.news-text');
const author = document.querySelector('.news-author');
const comments = document.querySelector('.comment-amount');
let date;

const curDate = new Date();

function dateSet(d) {
    const months = [
        'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
    const day = d.getDate();
    const month = months[d.getMonth()];
    const year = d.getFullYear();
    date = [day, month, year];
}

function getRandTime(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

dateSet(curDate);

day.innerText = `${date[0]} ${date[1]}`;
time.innerText = getRandTime(0,99) + ':' + getRandTime(0,99);

inputTitle.addEventListener('keyup', () => {
    title.innerText = inputTitle.value;
});

inputText.addEventListener('keyup', e => {
    text.innerText = inputText.value;
});

inputAuthor.addEventListener('keyup', () => {
    author.innerText = inputAuthor.value;
});

inputComments.addEventListener('keyup', () => {
    comments.innerText = inputComments.value;
});

