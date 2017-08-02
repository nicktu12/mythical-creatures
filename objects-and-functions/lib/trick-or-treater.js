function TrickOrTreater (costume) {
  this.dressedUpAs = costume.style;
  this.bag = [];
  this.hasCandy = false
  this.countCandies = 0;
}

TrickOrTreater.prototype.putCandyInBag = function (candy) {
  this.bag.push(candy);
  this.countCandies++;
  if (this.bag.length > 0) {
    this.hasCandy = true;
  }
};

TrickOrTreater.prototype.eat = function (candy) {
  if (this.countCandies > 0) {
    this.countCandies--;
    this.bag.pop(candy);
  }
};

module.exports = TrickOrTreater;
