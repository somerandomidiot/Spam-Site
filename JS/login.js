let loginid;

function processlogin() {
loginid = document.getElementById('loginid').value.trim();

// Check credidentials
if (loginid != ids) return error(`Incorrect ID.`)

// If the user logs in successfully, give them a role based on their account.
error(``);

role = loginid == adminid ? "Administrator" : "Guest";
accountid(`Logged in with an account that has <mark>${role}</mark> permissions.`);
document.getElementById(`logindiv`).style = `display: none;`
document.getElementById(`spambrowserdiv`).style = `display: block;`
}
