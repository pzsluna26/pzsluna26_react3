// 매개 변수 없고 리턴 값도 없는 경우
// function Add1() : void {
//     console.log("안녕하세요")
// }

const Add1 = () : void => {
    console.log("안녕하세요")
}
Add1()


// 매개 변수가 있고 리턴 값이 없는 경우
// function Add2(x : number, y : number) : void {
//     console.log(x+y) ;
// }

const Add2 = (x:number, y:number) : void => {
    console.log(x+y) ;
}
Add2(10,20) ;


// 매개 변수가 있고 리턴 값이 있는 경우
// function Add3(x : number, y : number) : number {
//     return x+y
// }



// 제너릭 타입
interface G<T> {
    value : T
}

const Add3 = (x : number, y : number) : number => {
    let z : number = x + y ;
    
    // 제너릭 선언
    let g1 : G<number> = {value : 10} ;
    console.log(g1.value)

    let g2 : G<string> = {value : 'g2'} ;
    console.log(g2.value)



    const dLeft : string = 'left' ;
    // d = 'right'  //상수니깐 재할당 불가능
    console.log(dLeft);

    // 유니온 타입
    let dRight : "right" | "left"; // Type이 String이 아니라, right / left를 가질 수 있다는 의미.
    dRight = 'left';




    return z
}
console.log(Add3(100,200)) ; 