var verbes = ['danser' ,'frapper' ,'lubrifier', 'trikiter', 'procrastiner', 'foutre', 'prendre', 'nager',
    'recoudre', 'punir', 'attaquer', 'coder', 'jouer', 'manger', 'aplatir'];

var noms = ["Babe", "Paul", "Clodomir", "George", "Brigitte", "Homer Simpson", "Kylian", "Georges Clooney", "Quintus",
    "Anais", "Styvens", "Keen-V", "Ludovic", "Yoshi", "Lucifer", "Pumba", "Eglantine", "Cayde-6", "Poutine", "Squall"];

var objets = ["valise","poivier connecté","épée","cahier", "pneu", "table", "godsabre", "truelle", "madeleine", "trident",
    "pull rose", "pc", "tisonnier", "guimbarde", "chandelier",
    "verre", "table bancale", "arbre", "souris", "dague"];

var temperatures = [30, 24, -273.15, 21, 42, -38, 35, 584, -8000, 28, 20, 37.2, -30, 35, 0, 27, -100, 55 ];

var lieux = ['Tombouctou', 'Lille', 'Sataya', 'Montcuq', 'Paris' , 'la Batcave', 'Maubeuge', 'un réacteur nucléaire',
    'Martinique', 'Balamb garden', "enfer", 'Montbeliard', 'Namek', 'Londres', 'une île', 'une cave', 'Caire',
    'New York', 'Tampon', 'Berlaimont'];

var a;
var b;
var c;
var d;
var e;
var genre;
var de;
var unUne;
var place;
var theName = document.getElementById("name");
var valid = document.getElementById('valid');
var yes = document.getElementById("yes");
var suite = document.getElementById('suite');
var text = document.getElementById('text');

function  generateNumbers(){
    a = Math.floor(Math.random()*noms.length);
    b = Math.floor(Math.random()*verbes.length);
    c = Math.floor(Math.random()*objets.length);
    d = Math.floor(Math.random()*temperatures.length);
    e = Math.floor(Math.random()*lieux.length);
}

function genreDefine(){
    switch (noms[a]) {
        case "Anais":
        case "Eglantine":
        case "Brigitte":
            genre = ", elle ";
            break;
        default:
            genre = ", il ";
            break;
            }
    return genre;
}

function apostrophe() {
    switch (verbes[b]) {
        case "aplatir":
        case "attaquer":
            de = " d' ";
            break
        default:
            de = " de ";
            break

    }
return de;
}

function mascFemDefine(){
    switch (objets[c]) {
        case "valise":
        case "épée":
        case "table":
        case "truelle":
        case "madeleine":
        case "trident":
        case "guimbarde":
        case "souris":
        case "dague":
            unUne = " une ";
            break;
        default:
            unUne = " un ";
            break;
    }
return unUne;
}

function setPlace ()
{
    switch (lieux[e])
    {
        case 'une cave':
        case 'la Batcave':
        case 'un réacteur nucléaire':
          place = " dans ";
          break;
        case 'Martinique':
        case "enfer" :
            place = " en ";
            break;
        case "Caire":
        case 'Tampon':
            place = " au ";
            break;
        case "Namek":
        case 'une île':
            place = " sur ";
            break;
        default:
            place = " à ";
            break;
    }
    return place;
    console.log (place)
}


valid.addEventListener("click", function captureName (){
    theName = theName.value;
    console.log(theName);
    text.innerHTML = "Ok "+theName+", Tu veux lire une histoire de dingue ?";
    valid.style.display = "none";
    document.getElementById("name").style.display = "none";
    yes.style.display = "block";
    noms.push(theName);
    })

yes.addEventListener("click", function generateStory(){
    generateNumbers();
    genreDefine();
    mascFemDefine();
    apostrophe();
    setPlace ()
    text.innerHTML = "C'est "+noms[a]+genre+"est en train"+de+verbes[b]+unUne+objets[c]+" alors qu'il fait "
        +temperatures[d]+place+lieux[e];
    yes.style.display = "none";
    suite.style.display = "block";
    })

suite.addEventListener("click", function generateNewStory(){
    generateNumbers();
    genreDefine();
    mascFemDefine();
    apostrophe();
    setPlace ()
    text.innerHTML = "C'est "+noms[a]+genre+"est en train"+de+verbes[b]+unUne+objets[c]+" alors qu'il fait "
        +temperatures[d]+place+lieux[e];
})
