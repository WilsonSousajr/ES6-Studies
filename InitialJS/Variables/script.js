var glob = "I'm a global variable!"
const LOCAL_CONST = "I'm a constant!"

function showLocalVar(){
    let loc = "I'm a local variable!";
    console.log(loc)
} 

console.log(glob)
console.log(LOCAL_CONST)
showLocalVar()
