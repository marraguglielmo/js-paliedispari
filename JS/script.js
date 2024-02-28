const word = document.getElementById('word-input').value;
// uso la funzione
const wordReverse = reverse(word);


// FUNZIONE
function reverse(txt){
    let txtReverse = txt.split('').reverse('');
    return txtReverse;
}

console.log(wordReverse);