// PALINDROMA
const outputPali = document.querySelector('.output-palindroma');
const word = document.getElementById('word-input').value;
// uso la funzione
const wordReverse = reverse(word);
// verifico se la parola è palindroma
if(word == wordReverse){
    outputPali.innerHTML = `La parola <strong>${word}</strong> è palindroma`;
}else{
    outputPali.innerHTML = `La parola <strong>${word}</strong> non è palindroma`;
}


// FUNCTION
function reverse(txt){
    // aggiungo il metodo join per riunire le lettere e poter confrontare le stringhe
    let txtReverse = txt.split('').reverse('').join('');
    return txtReverse;
}


// PARI E DISPARI
const choicePlayer = 'pari'; // inserire input 
const numPlayer = 2 //inserire input
const choicePc = numRandomPc(1, 5);

console.log(choicePc);

/**
 * funzione per estrarre un numero random da 1 a 5
 * @param {number} min 
 * @param {number} max 
 * @returns number
 */
// FUNCTIONS
function numRandomPc(min, max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}