console.log("== TypeScript Test ==");

// 변수 기본타입
//문자열
let name : string = 'PNU';
console.log(`${name}님 안녕하세요`)

name = "부산대학교"
console.log(`${name}님 안녕하세요`)

// 숫자
let age : number ;
age = 20 ;
console.log(`${age}세`)

// Boolean
let isStudent : boolean = true ;
isStudent ? console.log("학생") : console.log("일반인") ;

// 배열 : 같은 데이터 타입을 저장
let arr1 : number[] = [1,2,3];
arr1.push(1)
arr1.map(item => (console.log(item))) ;

let arr2 : Array<string> = ['a','b','c'] ;
arr2.map(item => (console.log(item))) ;

// Tuple : 다른 데이터 타입 저장
type User = [string,number] ;

let tp : [string, number] = ['PNU',25] ;
console.log(`${tp[0]}님 안녕하세요(${tp[1]}세)`) ;

let tp2 : User
tp2 = ['tp2', 10]

console.log(`${tp2[0]}님 안녕하세요(${tp2[1]}세)`) ;
// 오브젝트
let p1 : {name : string, age : number} ;
p1 = {
    name : '부산',
    age : 20
}
console.log(`${p1.name}님 안녕하세요(${p1['age']}세)`)

// type으로 선언
type PersonType = {
    name : string,
    age : number
}

let p10 : PersonType
p10 = {name : "p10", age : 10}

let p20 : PersonType
p20 = {name : "p20", age : 20}

// interface
interface PersonInterface {
    name : string,
    age : number
}

let p30 : PersonInterface
p30 = { name : 'p30', age : 20} ;

let p40 : PersonInterface
p40 = { name : 'p40', age : 40} ;


(Object.keys(p40) as (keyof PersonInterface)[]).map(item => (console.log(p40[item]))) ;