// Write your solution in this file!

//var allows the varaible to be assigned to a diff value
var customerName = 'bob'

function upperCaseCustomerName() {
  return customerName = customerName.toUpperCase();
};

//declaring without const,var, or let gives it global scope
function setBestCustomer() {
  bestCustomer = 'not bob'
};

function overwriteBestCustomer() {
  bestCustomer = 'maybe bob'
};

//declaring with const throws a TypeError
const leastFavoriteCustomer = 'me'

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'type error?'
}
