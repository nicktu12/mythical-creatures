function Wizard (obj) {
  this.name = obj.name;
  this.bearded = true;
  if (obj.bearded === false) {
    this.bearded = false;
  }
  this.isRested = true;
  this.energy = 0;
}

Wizard.prototype.incantation = function (str) {
  return str.toUpperCase();
}

Wizard.prototype.cast = function () {
  if (this.energy < 2) {
    this.energy++;
    return 'MAGIC BULLET';
  } else {
    this.isRested = false;
    return 'I SHALL NOT CAST!'
  }
}

module.exports = Wizard;
