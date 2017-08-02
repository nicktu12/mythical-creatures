function Dragon (name, rider, color) {
  this.name = name;
  this.rider = rider;
  this.color = color;
  this.hungry = true;
};

var counter = 0

Dragon.prototype.eat = function () {
  counter ++;
  if (counter > 2) this.hungry = false;
};

module.exports = Dragon;
