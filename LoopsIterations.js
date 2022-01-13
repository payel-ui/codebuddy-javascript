const sumFibbo= (n)=>{
    var fibo=[0,1]
    // num1=0,num2=1
    var sum=0
        for(i=2;i<=n;i++){
            fibo[i]=fibo[i-1]+fibo[i-2]
        }
        console.log(fibo);
        for (let i = 0; i < fibo.length; i++) {
            sum += fibo[i];
        }
        console.log(sum);
}

sumFibbo(6)