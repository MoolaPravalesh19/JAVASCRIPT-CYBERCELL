//1.
let Statement = 'Love is the best thing in this world. Some found their love and some are still looking for their love.' ;
let countLove = Statement.match(/love/ig).length;
console.log(countLove);

//2.
let Statement1 = 'You cannot end a sentence with because because because is a conjunction';
console.log(Statement1.match(/because/g).length);

//3.
const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching' ;
let sentence1 = sentence.split(' ');
let Sentence2 = "";
for(let i = 0 ; i < sentence1.length ; i++ ) {
    var newWord = sentence1[i].match(/[A-Z,.;/?]/gi).join('')
    Sentence2 = Sentence2 + newWord+" ";
}
console.log(Sentence2);

//4.
let text = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.' ;
let text1 = text.split(' ');
let total_Income = 0;
for(let i = 0 ; i < text1.length ; i++ ) {
    var num = text1[i].match(/[0-9]/g)
    if(num != null) {
        total_Income += parseInt(num.join(''))
    }
}
console.log(total_Income);
