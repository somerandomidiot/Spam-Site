function killbrowser() {
let x = confirm(`You are about to kill your browser by infinitely spamming logs in the console. It'll slow your browser down overtime therefore it isn't an instant process. Are you sure you want to do this?`);
if (x == true) {
 for (let i = 0; i < Infinity; i++)
console.log(genString(100000)), i;
}         
}

  function genString(num) {
let text = "";
let possible = `?#.!£$%^&*()-=_+1234567890`;
       
for (let i = 0; i < num; i++)
text += possible.charAt(Math.floor(Math.random() * possible.length));
return text;
}
