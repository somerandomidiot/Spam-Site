function processalert() {

// Get userinput
let alertamount = document.getElementById('alertamount').value.trim();
let alertmessage = document.getElementById('alertmessage').value.trim();
let alertToNum = Number(alertamount);

// Checks
if (alertamount.length < 1 || isNaN(alertamount)) return error(`Didn't specify a valid amount of alert messages to spam.`);
if (alertToNum > 4999 && role != "Administrator") return error(`You need to be an Administrator to spam 5000 or more alert messages.`);
if (!alertmessage) alertmessage = `No custom message specified.`;

// If the checks are passed, spam
error(``);
for (let i = 0; i < alertamount; i++)
alert(`${alertmessage}\n${alertamount - i} alert messages remaining.`);
}
