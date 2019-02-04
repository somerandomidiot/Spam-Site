function processbrowser() {

// Get userinput
let browseramount = document.getElementById('browseramount').value.trim();
let url = document.getElementById('url').value.trim();
let browserToNum = Number(browseramount);

// Checks
if (browseramount.length < 1 || isNaN(browseramount)) return error(`Didn't specify a valid number of tabs to spam.`);
if (browserToNum > 999 && role != "Administrator") return error(`You need to be an Administrator to spam 1000 or more tabs.`);
if (!url || !url.startsWith('http')) return error(`Invalid URL.`);

// If the checks are passed, spam
error(``)
for (let i = 0; i < browseramount; i++)
window.open(url), i;
}
