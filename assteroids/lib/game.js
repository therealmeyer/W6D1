const Asteroid = require("./asteroid.js");


function Game (){
  this.assteroids = this.addAsteroids();  
}

Game.DIM_X = 1000;
Game.DIM_Y = 600;
Game.NUM_ASTEROIDS = 10;

Game.prototype.addAsteroids = function () {
  let assteroids = [];
  for (var i = 0; i < Game.NUM_ASTEROIDS; i++) {
    console.log(Asteroid);
    let randpos = this.randomPosition();
    let asst = new Asteroid(randpos);
    assteroids.push(asst);
  }
  return assteroids;
};

Game.prototype.randomPosition = function () {
  let posObj = {};
  let randpos = [Math.floor(Math.random() * Game.DIM_X), Math.floor(Math.random() * Game.DIM_Y)];
  posObj.pos = randpos;
  return posObj;
};

Game.prototype.draw = function (ctx) {
  ctx.clearRect(0, 0, 1000, 600);
  this.assteroids.forEach((el) => el.draw(that.ctx));
};

Game.prototype.moveObjects = function (ctx) {
  ctx.clearRect(0,0,1000,600);
  this.assteroids.forEach((el) => {
    el.move();
    // el.draw(ctx);
  });
};

module.exports = Game;