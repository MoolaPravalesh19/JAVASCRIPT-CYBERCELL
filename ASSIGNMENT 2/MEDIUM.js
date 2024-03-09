//1.
console.log(`The quote 'There is no exercise better for the heart than reaching down and
lifting people up.' by John Holmes teaches us to help one another.`);

//2.
console.log(`Love is not patronizing and charity isn't about pity, it is about love.
Charity and love are the same -- with charity you give love, so don't just give
money but reach out your hand instead.`);

//3.
if(typeof('10') == typeof(10)) {
    console.log('Its Equal');
}else{
    console.log(typeof(parseInt('10')) == typeof(10));
}

//4.
if(parseFloat('9.8') == 10) {
    console.log('Its equal');
}else{
    console.log(Math.ceil(parseFloat('9.8')));
}

//5.
console.log('python'.includes('on') && 'jargon'.includes('on'));

//6.
var sentence = "I hope this course is not full of jargon" ;
console.log(sentence.includes('jargon'));

//7.
console.log(parseInt( Math.random() * 100 ));

//8.
console.log(parseInt( Math.random() * 50 + 50 ));

//9.
console.log(parseInt( Math.random() * 255 ));

//10.
var word = 'JavaScript' ;
console.log(word.charAt(parseInt(Math.random() * word.length - 1)));

//11.
for( let i = 1 ; i <= 5 ; i++ ) {
    console.log(i,Math.pow(i,0),Math.pow(i,1),Math.pow(i,2),Math.pow(i,3));
}

//12.
let sentenceNew = 'You cannot end a sentence with because because because is a conjunction' ;
let slicedSent = sentenceNew.slice(sentenceNew.indexOf('because'),sentenceNew.indexOf(' is')) ;
console.log(slicedSent);