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
const[a] = arr_1;
console.log(a);

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

