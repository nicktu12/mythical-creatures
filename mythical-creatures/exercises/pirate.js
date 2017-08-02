function Pirate (name, job) {
  this.name = name;
  this.job = job || 'Scallywag';
  this.cursed = false;
  this.counter = 0;
  this.booty = 0;
}

Pirate.prototype.commitHeinousAct = function () {
  this.counter++;
  if (this.counter >=3) {
    this.cursed = true;
  }
}

Pirate.prototype.robShip = function () {
  this.booty = this.booty + 100;
  return 'YAARRR!';
}

module.exports = Pirate;
