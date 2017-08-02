function Unicorn(name, color, says) {
  this.name = name;
  this.color = color || 'white';
};

Unicorn.prototype.isWhite = function() {
  return this.color === 'white';
}

Unicorn.prototype.says = function(text) {
  return `**;* ${text} *;**`
}

module.exports = Unicorn;
