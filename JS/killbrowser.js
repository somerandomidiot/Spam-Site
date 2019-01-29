function killbrowser() {
let x = confirm(`You are about to kill your browser by infinitely spamming logs in the console. Are you sure you want to do this?`);
if (x == true) {
setInterval(function(){ 
 spam();
}), 0.1;
}         
}

function spam() {
 for (let i = 0; i < Infinity; i++)
console.log(genString(1000)), i;
}

  function genString(num) {
let text = "";
let possible = `?#.!£$%^&*()-=_+1234567890`;
       
for (let i = 0; i < num; i++)
text += possible.charAt(Math.floor(Math.random() * possible.length));
return text;
}
