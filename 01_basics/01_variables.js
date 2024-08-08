const accountId = 144553
let accountEmail = "hitesh@google.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState;

// accountId = 2  not allowed constant change nahi hoga //


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId);

/*
Prefer not to use var instead use let 
because of issue in block scope and functional scope
also blank considered to be as a variable but not to prefer
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])