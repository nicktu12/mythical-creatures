function Centaur (name, breed) {
  this.name = name;
  this.breed = breed;
  this.cranky = false;
  this.standing = true;
  this.layingDown = false;
  this.energy = 0;
}

Centaur.prototype.shoot = function () {
  if (this.energy >= 2 || this.standing === false) {
    this.cranky = true;
    return 'NO!'
  } else {
    this.energy++;
    return 'Twang!!!'
  }
};

Centaur.prototype.run = function () {
  if (this.energy >= 2 || this.standing === false) {
    this.cranky = true;
    return 'NO!'
  } else {
    this.energy++;
    return 'Clop clop clop clop!!!'
  }
};

Centaur.prototype.sleep = function () {
  if (this.standing === true) {
    return 'NO!'
  } else {
    this.cranky = false;
    this.energy = 0;
    return 'ZZZZ'
  }
};

Centaur.prototype.layDown = function () {
  if (this.standing === true) {
    this.standing = false;
    this.layingDown = true;
  }
};

Centaur.prototype.standUp = function () {
  if (this.standing === false) {
    this.standing = true;
    this.layingDown = false;
  }
};

Centaur.prototype.drinkPotion = function () {
  if (this.standing === false) {
    return 'Not while I\'m standing!'
  } else if (this.cranky === false) {
    this.cranky = true;
  } else {
    this.cranky = false;
  }
};

module.exports = Centaur;
