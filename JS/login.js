let loginid;

function processlogin() {
loginid = document.getElementById('loginid').value.trim();

// Check credidentials
if (loginid != ids) return error(`Incorrect ID.`)

// If the user logs in successfully, give them a role based on their account.
error(``);

role = loginid == adminid ? "Administrator" : "Guest";
accountid(`Logged in with an account that has <mark>${role}</mark> permissions. <button onclick = "permissions()" class = "btn btn-info">View Permissions</button>`);
document.getElementById(`logindiv`).style = `display: none;`
document.getElementById(`spambrowserdiv`).style = `display: block;`
}

function permissions() {
alert(`Administrator:\n
/ All Permissions and bypasses any limit\n
Guest:\n
/ Higher limit to spam alert messages
/ Unlock the "spam tab" feature\n
Not logged in: \n
/ Short limit on alert messages
/ Limited features`);
}
