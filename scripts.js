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
    'foutre',
    'prendre',
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
let place = [
    'Tombouctou',
    'Lille',
    'Sataya',
    'Montcuq',
    'Paris',
    'la Batcave',
    'Maubeuge',
    'un réacteur nucléaire',
    'Martinique',
    'Balamb garden',
    'enfer',
    'Montbeliard',
    'Namek',
    'Londres',
    'une île',
    'une cave',
    'Caire',
    'New York',
    'Tampon',
    'Berlaimont'
];

let num;
let result = [];
let sent;
let hist = [];

let theName = document.getElementById("name");
let valid = document.getElementById('valid');
let yes = document.getElementById("yes");
let suite = document.getElementById('suite');
let text = document.getElementById('text');


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
    return (femItem[g] ? " une " : " un ");
}

/**
 * @return {string}
 */
function SetSentence(arr){
    sent = arr[0]+" est en train "+arr[1]+arr[2]+arr[3]+arr[4]+" alors qu'il fait "+arr[5]+"°C à "+arr[6];
    return sent;
}

function GetSentence (){
    SetWord(name);
    SetWord(verb);
    SetTransitive(result,1);
    SetWord(item);
    result.splice(3,0,SetArticle(result[3]));
    SetWord(temp);
    SetWord(place);
    SetSentence(result);
    console.log(sent);
    hist.push(sent);
    text.innerHTML = sent;
    result.splice(0,result.length);

}
// function setPlace () {
//     a = generateNum(lieux);
//     switch (lieux[a])
//     {
//         case 'une cave':
//         case 'la Batcave':
//         case 'un réacteur nucléaire':
//           place = " dans ";
//           break;
//         case 'Martinique':
//         case "enfer" :
//             place = " en ";
//             break;
//         case "Caire":
//         case 'Tampon':
//             place = " au ";
//             break;
//         case "Namek":
//         case 'une île':
//             place = " sur ";
//             break;
//         default:
//             place = "°C à ";
//             break;
//     }
//     return place;
// }
//

valid.addEventListener("click", function (){
    theName = theName.value;
    name.push(theName);
    text.innerHTML = "Ok "+theName+", Tu veux lire une histoire de dingue ?";
    valid.style.display = "none";
    document.getElementById("name").style.display = "none";
    yes.style.display = "block";
    });

yes.addEventListener("click", function (){
    GetSentence();
    yes.style.display = "none";
    suite.style.display = "block";
    });

suite.onclick = GetSentence;
