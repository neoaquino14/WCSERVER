//Neo Aquino
//2075 - WCSERVER
//Export Function as Class

module.exports = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.fullName = function () {
    return this.firstName + ' ' + this.lastName;
  }
}