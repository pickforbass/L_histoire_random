// ---- Arrays

let name = [
    'Babe',
    'Paul',
    'Clodomir',
    'George',
    'Brigitte',
    'Homer Simpson',
    'Kylian',
    'Georges Clooney',
    'Quintus',
    'Anais',
    'Styvens',
    'Keen-V',
    'Ludovic',
    'Yoshi',
    'Lucifer',
    'Pumba',
    'Eglantine',
    'Cayde-6',
    'Poutine',
    'Squall'
];

let verb = [
    'danser',
    'frapper',
    'lubrifier',
    'trikiter',
    'procrastiner',
    'chahuter',
    'se fourvoyer',
    'nager',
    'recoudre',
    'punir',
    'attaquer',
    'coder',
    'jouer',
    'manger',
    'aplatir'
];

let femItem = [
    'valise',
    'épée',
    'table',
    'truelle',
    'madeleine',
    'guimbarde',
    'table bancale',
    'souris',
    'dague'
];

let mascitem = [
    'poivier connecté',
    'cahier',
    'pneu',
    'godsabre',
    'trident',
    'pull rose',
    'pc',
    'tisonnier',
    'chandelier',
    'verre',
    'arbre',
];

let item = femItem.concat(mascitem);

let temp = [
    30,
    24,
    -273.15,
    21,
    42,
    -38,
    35,
    584,
    -8000,
    28,
    20,
    37.2,
    -30,
    35,
    0,
    27,
    -100,
    55
];

let placeA = [
    'Tombouctou',
    'Lille',
    'Sataya',
    'Montcuq',
    'Paris',
    'Maubeuge',
    'Balamb garden',
    'Montbeliard',
    'Londres',
    'New York',
    'Berlaimont'
];

let placeDans = [
    'la Batcave',
    'un réacteur nucléaire',
    'une cave',
    'le bureau',
    'la poubelle'
];

let placeSur= [
    'Namek',
    'une île',
    'la Lune',
    'le Rhône'
];

let placeAu = [
    'Caire',
    'Tampon',
    'Guatemala',
    'Pérou',
    'Finistère'
];

let placeEn = [
    'Martinique',
    'enfer',
    'Occitanie',
    'Suisse'
];

let place = placeA.concat(placeDans, placeSur, placeAu, placeEn);

let result = [];

let hist = [];

// ----- Variables & elements of document
let num;
let sent;
let nameUser = document.getElementById("name");
let valid = document.getElementById('valid');
let yes = document.getElementById("yes");
let suite = document.getElementById('suite');
let text = document.getElementById('text');
let historyList = document.getElementById('history-list');
let headerRight = document.getElementById('header-right');

// ----- Functions

function  SetWord(array){
    num = Math.floor(Math.random() * array.length);
    result.push(array[num]);
}

function SetTransitive(array,index){
    let x = array[index].charAt(0);
    switch(x){
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
        case 'y':
        case 'h':
            array.splice(index,0,"d'");
        break;
        default:
            array.splice(index,0,"de ");
            break;
    }

}

/**
 * @return {string}
 */
function SetArticle(g){
    return (femItem.indexOf(g)>=0 ? " une " : " un ");
}

/**
 * @return {string}
 */
function SetSentence(arr){
    sent = arr[0]+" est en train "+arr[1]+arr[2]+" avec "+arr[3]+arr[4]+" alors qu'il fait "+arr[5]+"°C "+arr[6]+arr[7];
    return sent;
}

/**
 * @return {string}
 */
function prePlace (g){
    if (placeA.indexOf(g)>=0){return "à ";}
    else if (placeAu.indexOf(g)>=0){return "au ";}
    else if (placeSur.indexOf(g)>=0){return "sur ";}
    else if (placeDans.indexOf(g)>=0){return "dans ";}
    else if (placeEn.indexOf(g)>=0){return "en ";}
}

function GetSentence (){
    SetWord(name);
    SetWord(verb);
    SetTransitive(result,1);
    SetWord(item);
    result.splice(3,0,SetArticle(result[3]));
    SetWord(temp);
    SetWord(place);
    result.splice(6,0, prePlace(result[6]));
    SetSentence(result);
    hist.unshift(sent);
    text.innerHTML = sent;
    result.splice(0,result.length);
}

function AddHistList(){
    let li = document.createElement('li');
    li.innerHTML=hist[1];
    historyList.appendChild(li);
}


// ----- Event Listeners

valid.addEventListener("click", function (){
    theName = nameUser.value;
    name.push(theName);
    text.innerHTML = "Ok "+theName+", Tu veux lire une histoire de dingue ?";
    valid.style.display = "none";
    nameUser.style.display = "none";
    yes.style.display = "block";
    });


yes.addEventListener("click", function (){
    GetSentence();
    yes.style.display = "none";
    suite.style.display = "block";
    });


suite.addEventListener("click", function(){
    GetSentence();
    AddHistList();
    headerRight.classList = "appear";
    });

