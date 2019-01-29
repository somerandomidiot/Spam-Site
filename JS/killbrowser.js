function killbrowser() {
let x = confirm(`You are about to kill your browser by infinitely spamming logs in the console. Are you sure you want to do this?`);
if (x == true) {
setInterval(function() {
spam() 
}, 1;
}
}         
function spam() {
console.log(`Killed`);
}
