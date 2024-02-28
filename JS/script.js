const word = document.getElementById('word-input').value;
const wordReverse = reverse(word);




function reverse(txt){
    let txtReverse = txt.split('').reverse('');
    return txtReverse;
}

console.log(wordReverse);