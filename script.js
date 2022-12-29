/*Instructions*/
//1) Write a JavaScript program that recreates the pattern below.

    for (let i = 0; i <= 5; i++) {
      console.log(' * '.repeat(i + 1)); 
    }

//2) Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).


let str=" "

for (let i=0; i<=5;i++){

    str=str + " * "
    console.log(str)
}


for(let n=0 ; n<=5; n++){
    const r=n+1
    let b= " "

    for(let v = 0; v<=r;v++){
        b= b + " * "
    }
    console.log(b)


}



//3) Do this Daily Challenge by youself, without looking at the answers on the internet.

console.log('ok')