const Util = require('./utils.js');
const MovingObject = require("./moving_object.js");

function Asteroid (posObj) {
  posObj.color = "gray";
  posObj.radius = 40;
  posObj.vel = Util.randomVec(5);
  MovingObject.call(this, posObj);
}

Util.inherits(Asteroid, MovingObject);

module.exports = Asteroid;
