let x;
let ids = ["admin"]; // Well you got the admin ID, congrats.
let role;

function processlogin() {
x = document.getElementById('adminlogin').value.trim();

// Check credidentials
if (x != ids) {
return alert('Incorrect Password.');
}

// If the user logs in as an admin successfully, give them permissions.
error(``);

accountid(`Logged in with an account that has <mark>Administrator</mark> permissions.`);
role = "Administrator";
document.getElementById(`logindiv`).style = `display: none`;
};
