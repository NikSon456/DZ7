let array1 = ['da', 'net', 54, 87, false, 'Cossack', 'd'];
for (let i = 0; i < array1.length; i++) {
    if ((i+1)%2 == 0 ) {
        console.log(array1[i])
    }
}

console.log('------------------------------');

let array2 = ['text1','text2','text3','text4','text5'];
function text(textContainer,){
    let texty = document.querySelector('#' + textContainer)
    texty.textContent = textContainer
}
for (let f = 0; f < array2.length; f++) {
    text(array2[f])
}