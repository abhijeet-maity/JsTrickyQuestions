console.log(2 + "2");//22
console.log("3" + 5);//35
console.log(2 + +"4");//6
console.log(5 - "3");//2
console.log(6 * "2");//12
console.log("8" * 4);//32
console.log(10 / "2");//5
console.log("18" / 3);//6
console.log(8 + 4 + "9");//129
console.log(81/9 + "3");//93
console.log("39"/"13");//3
console.log(5 - - "3"); //8
console.log(NaN == NaN);//false
console.log(NaN === NaN);//false
console.log(typeof NaN);//Number
console.log(NaN+NaN);//NaN
console.log("Hello"/2 + "2");//NaN2
console.log(typeof undefined);//undefined
console.log(undefined++);//NaN

let arr_1 = [1,2,3,4,5];
const[a1] = arr_1;
console.log(a1);

console.log("5"*2);  //10
console.log("11" * "2"); //22
console.log("2"*"2"*"3"); //12
console.log("10"/"5");    //2
console.log(true/false);  //Infinity
console.log(false/true);  //0
console.log(+true);       //1
console.log(+false);      //0
console.log(true+false);  //1
console.log(true-false);  //1
console.log([] == false); //true
console.log(2 > 3 > 9);   //false, 
console.log("3" < 7 > "NaN"); //false, Any comparison with NaN always returns false, because NaN is not equal to, greater than, or less than any value (even itself).
console.log([]+[]); //""
console.log([]-[]); //0
console.log([1,2,3,4] == "1,2,3,4"); //true
console.log([1] == 1);
console.log([]+{}); //[object Object]
console.log({}+[]); //[object Object]
console.log([] - 1); //-1
console.log({} + 67); //[object Object]67
console.log({} + + 78);//[object Object]78
console.log({} - 78);  //NaN
console.log({} + - 78) //[object Object]-78
console.log([]/{});    //NaN
console.log([1,2,3] + +[42]); //1,2,342
console.log([1,2,3]+48);      //1,2,348
console.log(2+Number("1"));   //3
console.log(Number("123Hello")); //NaN
console.log(console.log(console.log(console.log(NaN)))); //NaN,undefined,undefined,undefined
let num = 123; 
let a = new Number(123);
console.log(num === a); //false
console.log(NaN === NaN); //false
console.log(isNaN(true)); //false
console.log(Number.isNaN("Hello")); //false
console.log(typeof function(){}); //function
//Infosys 2nd round
console.log(5 && 1); //1 
console.log(5 || 1); //5



//Nested Blocks each block has its own private variable.
{
    let x = 10;
    {
        let x = 92;
        {
            let x = 42;
            console.log(x);//42
        }
        console.log(x); //92
    }
    console.log(x); //10
}


//Static scoping, Lexical scoping
let number = 42;
function printNumber(){
    console.log(number);
}
function logging(){
    let number = 54;
    printNumber();
}
logging();//42


//Tricky ones
let d = 10;
console.log(d++ + d++); //10 + 11


//Asked in TCS interview.
x++;             
console.log(x);  //undefined++ => NaN
var x = 21;


let n = "20";
console.log(n+1); //201
console.log(++n); //21
console.log(n++); //21



var objA = {prop1: 42};
var objB = objA;        //{prop1: 42}
objb = {};              //{}
console.log(objA);      //{prop1: 42}


//EEPAM Interview
// console.log(1);
// setTimeout(()=>console.log(2),0);
// console.log(3);


//Disnep Hotstar Interview
function* generator(i){
    yield i;
    yield i * 2;
}
const gen = generator(10);
console.log(gen.next().value); //10
console.log(gen.next().value); //20


//Infosys interview
let obj = { age : 24 };
let { age : userAge } = obj;
console.log(userAge); //24
// console.log(age);  //Reference error age is not defined

//Infosys Interview
//&& has higher precedence than || so it will execute first
let res = 1 || 2 && 3; 
console.log(res); //1

// const arr = [1,2];
// for(var i = 0; i < arr.length; i++){
//     setTimeout(()=>{
//         console.log(i); // 2 2
//     },[1000])
// }

//HCL interview
let hcl = "10";
console.log(hcl++); //10

const[rx, ry=5] = [10];//
console.log(rx+ry)//10+5=15

const[sx,sy] = [10];//
console.log(sx+sy);//10+undefined = NaN


console.log([]=={});
console.log([].toString() == {}.toString());
console.log();

//Delloite 2nd round
const str5 = "abc" + + "def";
console.log(str5);

//Capgemini 2nd round Interview
let newList = [1].push(2);//push returns length of an array
console.log(newList.push(3));//TypeError

//Interview Question
if([]){
    console.log("Star");//"Star"
}
if([] == true){
    console.log("Star");
} else {
    console.log("Moon"); //"Moon"
}

const numbers1 = [1,2,3];
numbers1[10] = 11;
console.log(numbers1);

let y = (12,34,78);
console.log(y);


//Infosys 1st Round
console.log(data2());
var data2 = function() {
    return "1"; //undefined(); -> Type error 
}

//EPAM 2nd round Interview
let aobj = {
    a : undefined,
    b : null
}
console.log(JSON.stringify(aobj));


//HCL 2nd Round Interview
console.log(true + 1); //2
console.log(true + "1"); //true1

//IBM 2nd round of an Interview
// Javascript will create one object with value "Dada" but due to no reference it will be destroyed till line 2nd, now on 3red line javascript will again create one object and tries to access data property but since it has no value it will log undefined.
const str6 = "Nomoshkar";
str6.data = "Dada";
console.log(str6.data);//undefined

//Mindtree 2nd round Interview
const strn = "Aasun";
const strn2 = new String("Aasun");
console.log(strn == strn2); //true
console.log(strn === strn2); //false

//publicis Sapient Interview Question
console.log(Boolean({}));//true
console.log(Boolean([]));//true
console.log(Boolean(""));//true
console.log(Boolean(new Boolean(false)));//new Boolean will always return object and Boolean({}) is true.

//tcs 1st round Interview
console.log([] == ![]); // "" == false -> true

//Tech Mahindra 2nd round Interview
console.log([] == 0); //true
console.log([0] == [0]); //false

//Mindtree 2nd Round Interview Questions
const x1 = "he".split(',');
const y1 = ["h", "e"];
console.log(x1 === y1); //Compare by reference -> false

//tcs 2nd round Interview
let x2 = "5";
let y2 = true;
console.log(x2 - y2); //4

//Capgemini 2nd round Interview
console.log(+true);//1
console.log(+false);//0
console.log(+"123");//123
console.log(+null);//0

//Mindtree 2nd round Interview
setTimeout(() => {
    console.log("timeout 1");
},0);
Promise.resolve().then(() => {
    console.log("Promise 1");
});

//EPAM 2nd round Interview
console.log("1");
setTimeout(() => {
    console.log("2");
}, 0);
console.log("3"); //1 3 2

//tcs Interviews
console.log(!!{}); //true
console.log(!![]); //true

//Most asked Interview Question
let arr4 = [1,2];
for(var i = 0; i < arr4.length; i++){
    setTimeout(() => {
        console.log(i); // 2 2
    },[1000]);
}

//HCL technologies
const x = "10";
console.log(x++);// post increment -> 10

//IBM 2nd round Interview Questions
//in operator in object is used to check key present in object or not and if used in array it checks index is present or not.
const arr7 = [1,2,3,4];
console.log(1 in arr7); // true
console.log(2 in arr7); // true
console.log(4 in arr7); // false

//tcs 1st Round Interview Question
let ab = "8";
let sb = 1;
console.log(+ab+sb+1) //10

let lx = 1;
lx = lx++;
console.log(lx); //1

//Asked in Zepto interview
const appy = { valueOf: () => 2};
console.log(2==2); //true
console.log(2+3);  //5
console.log(2>1);  //true