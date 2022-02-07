module.exports = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    return this.firstName + ' ' + this.lastName;
  }
}

//Neo Aquino
//Feb 2, 2022
//2075 - WCSERVER


