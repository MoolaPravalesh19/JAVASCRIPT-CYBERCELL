//1.
let challenge = "30 Days of JavaScript";

//2.
console.log(challenge);

//3.
console.log(challenge.length);

//4.
console.log(challenge.toUpperCase());

//5.
console.log(challenge.toLowerCase());

//6.
console.log(challenge.substring(0 , challenge.indexOf(" ")));

//7.
console.log(challenge.slice(challenge.indexOf(' ') + 1));

//8.
console.log(challenge.includes("Script"));

//9.
console.log(challenge.split(''));

//10.
console.log(challenge.split(" "));

//11.
console.log('Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon'.split(','));

//12.
console.log(challenge.replace("JavaScript","Python"));

//13.
console.log(challenge.charAt(15));

//14.
console.log(challenge.charCodeAt(challenge.indexOf('J')));

//15.
console.log(challenge.indexOf('a'));

//16.
console.log(challenge.lastIndexOf('a'));

//17.
let Sentence = 'You cannot end a sentence with because because because is a conjunction';
console.log(Sentence.indexOf('because'));

//18.
console.log(Sentence.lastIndexOf('because'));

//19.
console.log(Sentence.search('because'));

//20.
console.log(' 30 Days Of JavaScript '.trim());

//21.
console.log(challenge.startsWith('30'));

//22.
console.log(challenge.endsWith('ipt'));

//23.
console.log(challenge.matchAll('a'));

//24.
let ChallengeNEW = '30 Days of'.concat('JavaScript');
console.log(ChallengeNEW);

//25.
console.log(challenge.repeat(2));