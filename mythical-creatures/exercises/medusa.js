function Medusa (name) {
  this.name = name;
  this.statues = [];
}

Medusa.prototype.stare = function (victim) {
  if (this.statues.length >= 3) {
    var noStoned = this.statues.pop();
    noStoned.stoned = false;
    this.statues.splice(0, 0, victim)
    victim.stoned = true;
  } else {
    this.statues.splice(0, 0, victim)
    victim.stoned = true;
  }
};

function Person (name) {
  this.name = name;
  this.stoned = false;
}


module.exports = {Medusa, Person};
