// let a=parseInt(prompt("enter your num"))
// let count=0

// function check(){
//     return new Promise((u, v) => {

//         if(a%2==0){
//             u("successs")
//             console.log("pass")
//         }
//         else{
           
//             v("fail")
//             console.log("fail")
//         }
        
//     })
// }

// function divide(){
//     return new Promise((w, x) => {

//         if(a%4==0){
//             w("successs")
//             console.log("pass")

//         }
//         else{
           
//             x("fail")
//             console.log("fail")

//         }
        
//     })
// }

// function digit(){
//     return new Promise((y, z) => {

//        while (a!=0){

//           b=a%10
//           a=(a-b)/10
//           count++
          
//        }
//        console.log(count)

//        y(count)
       

        
//     })

// }

// async function hi(){
//     try{
//         let l=await check();
//         let m=await divide();

//         let n=await digit();

//         console.log("success")



//     }

//     catch{
//         console.log("err")
//     }
// }

// hi()


class Details{
    constructor(name,batch){
        this.name=name;
        this.batch=batch;
    }
    getDetails(){
        
        return (`${this.name} ${this.batch}`)

    }
}


let trainee=new Details("guna","fed12")
console.log(trainee.getDetails())

let trainee2=new Details("guna","fed12")



console.log(trainee)
zz