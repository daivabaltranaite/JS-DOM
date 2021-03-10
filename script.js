// I dalis
// 1. pasiimti MAIN elementą, jam priskirti klasę body
const mainByQuery = document.querySelector('main');
mainByQuery.classList.add('body');
// 2. pasiimti H1 elementą, jam priskirti klasę heading
const h1 = document.querySelector('h1');
h1.classList.add('heading');
// 3. passimti FORM elementą, jam priskirti klasę form
const form = document.querySelector('form');
form.classList.add('form');
// 4. sukurti ir į UL elementą įterpti BENT vieną li elementą su klase list-item.
const ul = document.getElementById('todo');
// const li = document.createElement('li');
// li.classList.add('list-item');
// li.innerText='tekstas';
// ul.appendChild(li);
//     II dalis
// 1. įgyvendinti sąrašo punktų funkcionalumą: paspaudus ant li elemento, jam pridedama (jei nėra) klasė .done, o jei yra - nuimama.
// li.addEventListener('click', function (){
//     li.classList.toggle('done');
// });
//     III dalis (savarankiškas darbas)
// panaudoti iki šiol parašytą kodą ir pabaigti programą:
// 1. vartotojui įvedus tekstą input laukelyje, tekstas pridedamas į sąrašą (kartojame veiksmus: elementas sukuriamas, jam priskiriamas input tekstas, klasė list-item, naujas elementas įtraukiamas į ul)
// 2. pridėjus tekstą į sąrašą input laukas išvalomas
// 3. du kartus paspaudus list elementą, jis pašalinamas
const input = document.getElementById('input');
const button = document.getElementById('button');
button.addEventListener('click', function(){
    const li = document.createElement('li');
    li.classList.add('list-item');
    li.innerText = input.value;
    ul.appendChild(li);
    input.value = ' ';

    li.addEventListener('dblclick', function(){
        li.remove();
    });
    li.addEventListener('click', function(){
        li.classList.toggle('done');
    });
});