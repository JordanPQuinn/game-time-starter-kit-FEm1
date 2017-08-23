var assert = require('chai').assert;
var Level = require('../lib/level.js');
var Home = require('../lib/home.js');

describe('Level', function() {
  var myLevel;

  beforeEach(function() {
    // myHomes = [new Home(10, 10, 67, 50), new Home(110, 10, 67, 50)]
    // myLevel = new Level(myHomes);
    myLevel = new Level();
  })

  it('Should create an Object', function() {
    assert.equal(typeof(myLevel), 'object')
  })

  it('Should start with 5 lives', function() {
    assert.equal(myLevel.lives, 5);
  })

  it('Should have 60 seconds on the timer', function() {
    assert.equal(myLevel.timeRemaining, 60);
  })

  it('Should start at Level 1', function() {
    assert.equal(myLevel.currentLevel, 1);
  })

  it('Should decrease lives when Toad dies', function() {
    assert.equal(myLevel.lives, 5);
    myLevel.death();
    assert.equal(myLevel.lives, 4);
  })

  it('Should be "Game Over" if death at 0 lives', function() {
    assert.equal(myLevel.lives, 5);
    for (let i = 0; i < 5; i++) {
      myLevel.death();
    }
    assert.equal(myLevel.lives, 0);
    myLevel.death();
    assert.equal(myLevel.gameOver, true);
  })

  it('Should decrease timer by .25 seconds every 15 frames', function() {
    assert.equal(myLevel.timeRemaining, 60);
    for (let i = 0; i < 15; i++) {
      myLevel.drawTimer();
    }
    assert.equal(myLevel.timeRemaining, 59.75);
  })

  it('Should increase the level', function() {
    assert.equal(myLevel.currentLevel, 1);
    myLevel.next();
    assert.equal(myLevel.currentLevel, 2);
  })

  it('Should add 1 life', function() {
    assert.equal(myLevel.lives, 5);
    myLevel.addLife();
    assert.equal(myLevel.lives, 6);
  })
})
