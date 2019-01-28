let role;

let usernames = [];
let passwords = [];
let adminnames = ["alex"]; // You're looking at the code, wow.
let adminpasses = ["yoyoyoyo"];
let signupname, signuppass;

function processsignup() {
// Get signup information
signupname = document.getElementById('signupname').value.trim();
signuppass = document.getElementById('signuppass').value.trim();

// Checks
if (signupname.length < 3 || signupname.length > 20) return error(`Please enter a username that is 3-20 characters long. (${signupname.length} characters detected)`);
if (signuppass.length < 6 || signuppass.length > 25) return error(`Please enter a password that is 6-25 characters long. (${signuppass.length} characters detected)`);
if (signupname == adminnames && signuppass != adminpasses) return error(`You can not login as an Administrator without a valid password.`)
// Passed the checks, let's store the temporary information in an array
error(``);
usernames.push(signupname)
passwords.push(signuppass)

document.getElementById('signupdiv').style = "display: none;"
document.getElementById('logindiv').style = "display: block;"
}
