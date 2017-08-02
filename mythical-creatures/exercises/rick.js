function Rick (alterEgo) {
  this.alterEgo = alterEgo || 'None';
  this.killCount = 0;
  if (this.alterEgo === 'Tiny Rick') {
    this.age = 14;
  } else {
    this.age = 60;
  }
  // this.age = 60;
}

Rick.prototype.catchPhrase = function () {
  if (this.alterEgo === 'Tiny Rick') {
    return 'Im Tiny Rick!';
  } else {
    return 'Wubalubadubdub!';
  }
};

Rick.prototype.killVampire = function () {
  if (this.killCount < 2) {
    this.killCount++;
  } else {
    this.age = 60;
    this.alterEgo = 'None'
  }
};

Rick.prototype.andAwayWeGo = function (a, location) {
  if (a.rick.age === 60) {
    a.morty.location = location;
  }
};

Rick.prototype.openMeeseeksBox = function () {
  this.meeseeksServant = new Meeseeks(this);
  return this.meeseeksServant;
};

function Morty() {
  this.location = 'Dimension-C-137';
}

function Meeseeks(owner) {
  this.owner = owner;
}

Meeseeks.prototype.assignNewOwner = function (newOwner) {
  this.owner = newOwner;
  newOwner.meeseeksServant = this;
};

module.exports = {Rick, Morty, Meeseeks};
