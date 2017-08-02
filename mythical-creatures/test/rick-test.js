var assert = require('chai').assert;
var {Rick, Morty, Meeseeks} = require('../exercises/rick.js');


describe('Rick', function() {

  it('should be a function', function() {
    assert.isFunction(Rick);
  });

  it('should have a default alter ego', function() {
    var rick = new Rick();
    assert.equal(rick.alterEgo, 'None');
  });

  it('should accept an alter ego', function() {
    var rick = new Rick('Tiny Rick');
    assert.equal(rick.alterEgo, 'Tiny Rick');
  });

  it('should be the appropriate age', function() {
    var oldRick = new Rick();
    assert.equal(oldRick.age, 60);

    var tinyRick = new Rick('Tiny Rick');
    assert.equal(tinyRick.age, 14);
  });

  it('should have the correct catch phrase', function() {
    var oldRick = new Rick();
    assert.equal(oldRick.catchPhrase(), 'Wubalubadubdub!');

    var tinyRick = new Rick('Tiny Rick');
    assert.equal(tinyRick.catchPhrase(), 'Im Tiny Rick!');
  });

  it('should transform back to old rick after killing 3 vampires', function() {
    var tinyRick = new Rick('Tiny Rick');

    assert.equal(tinyRick.age, 14);
    assert.equal(tinyRick.alterEgo, 'Tiny Rick');

    tinyRick.killVampire();
    assert.equal(tinyRick.age, 14);

    tinyRick.killVampire();
    assert.equal(tinyRick.age, 14);
    tinyRick.killVampire();
    assert.equal(tinyRick.age, 60);
    assert.equal(tinyRick.alterEgo, 'None');
  });

});


describe('Morty', function() {

  it('should be a function', function() {
    assert.isFunction(Morty);
  });

  it('should have a default home', function() {
    var morty = new Morty();
    assert.equal(morty.location, 'Dimension-C-137');
  });

  it('should travel in Ricks spaceship to a new location', function() {
    var rick = new Rick();
    var morty = new Morty();
    assert.equal(morty.location, 'Dimension-C-137');
    rick.andAwayWeGo({rick, morty}, 'Gazorpazorp');
    assert.equal(morty.location, 'Gazorpazorp');
  });

  it('should not let Rick travel as a kid', function() {
    var rick = new Rick('Tiny Rick');
    var morty = new Morty();

    assert.equal(morty.location, 'Dimension-C-137');
    rick.andAwayWeGo({rick, morty}, 'Gazorpazorp');
    assert.equal(morty.location, 'Dimension-C-137');
  });

});



describe('Meeseeks', function() {

  it('should create a Meeseeks wit skiph an owner', function() {
    var tinyRick = new Rick('Tiny Rick');
    var mrMeeseeks = new Meeseeks(tinyRick);
    assert.equal(mrMeeseeks.owner.alterEgo, 'Tiny Rick')
  });

  it('should create a Meeseeks by opening the Box', function() {
    var rick = new Rick();
    assert.equal(rick.meeseeksServant, undefined);

    rick.openMeeseeksBox();
    assert.instanceOf(rick.meeseeksServant, Meeseeks);
  });

  it('should come out of the box wit skiph Rick as owner', function() {
    var oldRick = new Rick();
    var newMeeseeks = oldRick.openMeeseeksBox();
    assert.equal(newMeeseeks.owner, oldRick);
    assert.equal(oldRick.meeseeksServant.owner, oldRick);
  });

  it('should allow the owner to be reassigned', function() {
    var rick = new Rick();
    var morty = new Morty();

    var newMeeseeks = rick.openMeeseeksBox();
    assert.equal(newMeeseeks.owner, rick);

    newMeeseeks.assignNewOwner(morty);
    assert.equal(newMeeseeks.owner, morty);
  });

  it('should NOT allow multiple meeseeks assgined to one owner', function() {
    var rick = new Rick();
    var morty = new Morty();

    var mrMeeseeks = rick.openMeeseeksBox();
    assert.equal(mrMeeseeks.owner, rick);

    mrMeeseeks.assignNewOwner(morty);
    assert.equal(mrMeeseeks.owner, morty);
    assert.equal(morty.meeseeksServant, mrMeeseeks);
    assert.equal(rick.meeseeksServant, undefined);

    var newMeeseeks = new Meeseeks(morty);
    assert.equal(morty.meeseeksServant, mrMeeseeks);
    assert.equal(mrMeeseeks.owner, morty);
    assert.equal(newMeeseeks.owner, undefined);

    var lookAtMeeseeks = rick.openMeeseeksBox();
    lookAtMeeseeks.assignNewOwner(morty);
    assert.equal(morty.meeseeksServant, mrMeeseeks);
    assert.equal(mrMeeseeks.owner, morty);

    assert.equal(rick.meeseeksServant, lookAtMeeseeks);
    assert.equal(lookAtMeeseeks.owner, rick);
  });

});
