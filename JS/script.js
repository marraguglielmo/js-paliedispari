// // PALINDROMA ////////////////////
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


// PARI E DISPARI //////////////////
btn.addEventListener('click', function(){


    const btn = document.getElementById('btn');
    const choicePlayer = document.getElementById('pd-input').value;  
    const numPlayer = parseInt(document.getElementById('num-input').value);
    const numPc = numRandomPc(1, 5);
    const result = pariDispari(numPlayer, numPc)


    
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
        const output2 = document.querySelector('.output-pd');
        const outputNumeri = document.querySelector('.output-numeri');
    
        if(numPlayer > 0 && numPlayer < 6){
            if(choicePlayer === 'pari'){
                if((num1 + num2) % 2 === 0){
                    output2.innerHTML = "È uscito pari. Hai vinto ☻";
                }else{
                    output2.innerHTML = "È uscito dispari. Hai perso...";
                }
            }else if(choicePlayer === 'dispari'){
                if((num1 + num2) % 2 === 1){
                    output2.innerHTML = "È uscito dispari. Hai vinto ☻";
                }else{
                    output2.innerHTML = "È uscito pari. Hai perso...";
                }
            }else{
                output2.innerHTML = " !! INSERISCI 'pari' O 'dispari' !!";
            }

            outputNumeri.innerHTML = `Il giocatore ha giocato ${numPlayer}, il PC ha giocato ${numPc}`;
            
        }else{
            output2.innerHTML = '!! ATTENZIONE !! DEVI INSERIRE UN NUMERO DA 1 A 5;'
        }
    }

    
})