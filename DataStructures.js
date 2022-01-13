//Level 2
//Q:1
removeEven = () =>{
    const a = [1, 3, 4, 6, 7, 8]
    console.log(a.filter(data => data%2 !== 0)); 
}
removeEven()

//Q:2
var str = 'Elie'
str = str.replace(/[a-z]/gi, (char) => {
    char = String.fromCharCode(char.charCodeAt(0));
    if (/[aeiuo]/.test(char)) char = char.toUpperCase();
    return char;
  });
console.log(str);

//Q:3
const findMax = ()=>{
    var a = [1, 3, 4, 6, 7, 8, 2, 5]
    var max = Math.max(...a)
    console.log(max);
}
findMax()




