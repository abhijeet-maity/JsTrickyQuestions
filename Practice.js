// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

let num = parseInt(prompt("Enter a number"));
// console.log(typeof num);
switch (num){
    case 25 : {
        console.log("You are Young.");
        break;
    }
    case 50 : {
        console.log("You are world.");
        break;
    } default : {
        console.log("We don't know");
        break;
    }
}

const obj = {
    name : "Abhijeet Maity",
    age : 25
}

const obj = undefined;

const {name="", age=0} = obj || {};
console.log(name);
console.log(age);

let arr = [1,2,3,78,98,33];
let arr2 = [33, 67, 45, 13];
const res = [...arr];

res.push(100);
res.push(42);
console.log(res);
console.log(arr);
console.log(arr2);

let arr3 = [90,1,4,42];
let arr4 = arr3;
arr4.push(12,1000);
console.log(arr3);
console.log(arr4);

let num = [89,30];
console.log(num.push(73));
let numbers = [1,2].push(3);
console.log(numbers.push(4));

console.log(console.log(2));

let str = "aaabbbbcccdddddddeeffgommnnobij";
let count = {};
for(let i = 0; i < str.length; i++){
    let ch = str[i];
    if(count[ch]){
        count[ch] = count[ch]+1;
    } else {
        count[ch] = 1;
    }
}
console.log(count);

let str2 = "Hello, Welcome to Nimap Infotech students";
str2 = str2.trim();
let i = 0;
let j = 1; 
let words = 0;
console.log(str2);
while(j < str2.length){
    if(str2[j] === " " && str2[i] !== " "){
        words++;
    }
    if(j===str2.length-1 && str2[j] !== " "){
        words++;
    }
    i++;
    j++;
}
console.log(words);

let st = "Hello Welcome to Nimap Infotech students";
let ans = new String("");
for(let i = 0; i < st.length; i++){
    if(st.charAt(i) !== " "){
        ans += st.charAt(i);
    } else {
        ans += "-"
    }
}
console.log(st);
console.log(ans.toString());

let qs = "aaaabbbbcccdddee";
//output = a4b4c3d3e2
let ans = new String("");
let i = 0; 
let j = 1;
let count = 1;
while(j < qs.length){
    if(qs.charAt(i) === qs.charAt(j)){
        count++;
    } else {
        ans+= qs.charAt(i);
        ans+= String(count);
        i = j;
        count = 1;
    }
    if(j===qs.length-1){
    ans+= qs.charAt(i);
    ans+= String(count);
    }
    j++;
}

console.log(qs);
console.log(ans.toString());

for(let i = 0; i < 5; i++){
    let str = "";
    for(let j = 0; j<=i; j++){
        str += "*" + " ";
    }
    console.log(str);
    console.log("\n");
}

if([]){
    console.log("Star");//Star
}
if([] == true){
    console.log("Star");//
} else {
    console.log("Moon"); //Moon
}
// [] -> "" -> 0
// true -> 1

let newList = [1].push(2);//
console.log(newList.push(3));

let len = [12,45,67,90].shift();
console.log(len);




