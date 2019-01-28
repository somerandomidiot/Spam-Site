let ids = [];
let adminid = ["6968"]; // You're looking at the code, wow.
let signupname, role;

function processsignup() {
// Get signup information
signupid = document.getElementById('signupid').value.trim();

// Checks
if (signupid.length != 4) return error(`Please enter a 4 number ID with no spaces.`);
if (isNaN(signupid)) return error(`Please only enter numbers.`)
// Passed the checks, let's store the temporary information in an array
error(``);
ids.push(signupid)
accountid(`Temporary account created successfully.`)

document.getElementById('signupdiv').style = "display: none;"
document.getElementById('logindiv').style = "display: block;"
}
