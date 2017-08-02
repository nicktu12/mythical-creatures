function Bag() {
  this.empty = true;
  this.count = 0;
  this.candies = [];
};

Bag.prototype.push = function (candy) {
  this.candies.push(candy)
  this.count++;
};

Bag.prototype.contains = function (typeOfCandy) {
  for (var i = 0; i <this.candies.length; i++) {
    if (this.candies[i].type === typeOfCandy) {
      return true;
    } else {
      return false;
    }
  }
};

module.exports = Bag;
