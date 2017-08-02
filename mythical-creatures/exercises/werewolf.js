function Werewolf (name, location) {
  this.name = name;
  this.location = location;
  this.human = true;
  this.wolf = false;
  this.hungry = false;
}

Werewolf.prototype.change = function () {
  if (this.wolf === true) {
    this.human = true;
    this.wolf = false;
    this.hungry = false;
  } else {
    this.human = false;
    this.wolf = true;
    this.hungry = true;
  }
};

Werewolf.prototype.eat = function (victim) {
  if (this.wolf === true) {
    victim.alive = false;
    this.change();
  } else {
    console.log('not hungry')
  }
};

function Victim (name) {
  this.name = name;
  this.alive = true;
}

module.exports = {Werewolf, Victim};
