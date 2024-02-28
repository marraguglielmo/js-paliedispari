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
const choicePlayer = document.getElementById('pd-input').value;  
const numPlayer = parseInt(document.getElementById('num-input').value);
const numPc = numRandomPc(1, 5);
result = pariDispari(numPlayer, numPc)
console.log(numPlayer, numPc);







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

/**
 * funzione che verifica se il risultato è pari o dispari
 * @param {number} num1 
 * @param {number} num2 
 * @returns string
*/
function pariDispari(num1, num2){
    const result = "";
    const output2 = document.querySelector('.output-pd');
    
    if(numPlayer > 5 || numPlayer <= 0){
        output2.innerHTML = '!!ATTENZIONE!! Il numero inserito deve essere tra 1 e 5';
        return;
    }else if((num1 + num2) % 2 === 0 && choicePlayer == 'pari'){
        output2.innerHTML = 'È uscito pari. vince il Giocatore';
        return;
    }else{
        output2.innerHTML = 'È uscito dispari. vince il PC';
        return;
    }
}