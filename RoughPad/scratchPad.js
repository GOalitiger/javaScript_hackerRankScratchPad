alert('Ali Muazzam you have what it takes');


// To check if the userName changes or not in the greet function
let userName = 'Max';

function greet(name){
    let userName = 'Hades';
    alert(userName);
}

userName = 'manu';
greet(userName)


//To check if the ! operator is used to check all the below three special values
function testingExclamation(){
    let number = NaN,num2 = undefined, num3 =null;
    if(!number){
        console.log('number is checked in !number');
    }
    if(!num2){
        console.log('num2 is checked in !num2');
    }
    if(!num3){
        console.log('num3 is checked in !num3');
    }   
}

testingExclamation();




///Code for converting the camel case to title heading;
const obj ={
    organizationAffliate:'new data so mucn',
    handleName:'new test data new',
}

let tempobj = Object.keys(obj);
let tempObjArr =[];

console.log(tempobj);
let tempArr = [];
tempobj.forEach(res=>{
    let charArr =  res.split(/(?=[A-Z])/);
    // console.log(charArr);
    let tempFirstIndexelem  =  charArr[0].split('');
    tempFirstIndexelem[0]= tempFirstIndexelem[0].toUpperCase()
    tempFirstIndexelem = tempFirstIndexelem.join('');
    // [0].toUpperCase().join('')
    // console.log(tempFirstIndexelem);
    charArr[0] = tempFirstIndexelem;
    charArr = charArr.join(' ');
    tempObjArr.push({title:charArr,
    details:obj[res]});  
     // console.log(charArr);
});

console.log(tempobj);
console.log(tempObjArr);