const button = document.querySelector('.button');
button.addEventListener('click', getAdvice);
const writeAdvice = document.querySelector('.adviceField');

function getAdvice(event) {
    event.preventDefault();
    adviceCreation();
}

function adviceCreation() {

    const phrase1 = ["Просто", "Закройся в комнате,", "Выключи телефон и соцсети", "Открой свой третий глаз и", "Расслабься и"];
    const phrase2 = ["учи JS", "решай задачки по JS", "придумывай програмку JS", "читай книгу о JS", "проходи тесты по JS", "задавай вопросы ментору по коду JS"]
    const phrase3 = ["часа четыре", "пока не вырубишься", "пока петухи не закукарекают", "пока электричество не закончится", "пока жена/муж/соседи не вырубят"];

    let randPhrase1 = Math.floor(Math.random() * phrase1.length);
    let randPhrase2 = Math.floor(Math.random() * phrase2.length);
    let randPhrase3 = Math.floor(Math.random() * phrase3.length);

    let personalAdvice = phrase1[randPhrase1] + " " + phrase2[randPhrase2] + " " + phrase3[randPhrase3];

    writeAdvice.textContent = personalAdvice;

}