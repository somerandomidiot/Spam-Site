let loginname, loginpass;

function processlogin() {
loginname = document.getElementById('loginname').value.trim();
loginpass = document.getElementById('loginpass').value.trim();

// Check credidentials
if (loginname != usernames) return error(`Incorrect username.`)
if (loginpass != passwords) return error(`Incorrect password.`)

// If the user logs in successfully, give them a role based on their account.
error(``);

role = signupname == adminnames ? "Administrator" : "Guest";
document.getElementById(`accountid`).innerHTML = `Logged in as <mark>${usernames}</mark> (${role})`;
document.getElementById(`logindiv`).style = `display: none;`
document.getElementById(`spambrowserdiv`).style = `display: block;`
}
