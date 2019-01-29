function killbrowser() {
let x = confirm(`You are about to kill your browser by infinitely spamming logs in the console. Are you sure you want to do this?`);
if (x == true) {
for (let i = 0; i < Infinity; i++)
console.log(`Killed`), i;
}
}
