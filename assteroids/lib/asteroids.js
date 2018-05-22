const MovingObject = require("./moving_object.js");
const Util = require("./utils.js");
const Game = require("./game.js");
const Asteroid = require("./asteroid.js");
const GameView = require("./game_view.js");

window.MovingObject = MovingObject;

console.log("Webpack is working!");

document.addEventListener("DOMContentLoaded", function() {
  const canvasEl = document.getElementById("game-canvas");
  canvasEl.width = 1000;
  canvasEl.height = 600;
  const ctx = canvasEl.getContext("2d");
  ctx.fillStyle = "dododo";
  ctx.fillRect(0,0,1000,600);
  
  // const game = new Game();
  // game.draw(ctx);
  
  const gameView = new GameView(ctx);
  gameView.start();
  const mo = new MovingObject(
  { pos: [30, 30], vel: [10, 10], radius: 20, color: "#00FF00"}
  );
  mo.draw(canvasEl.getContext("2d"));
  
  // const ast = new Asteroid( {pos: [100, 100]});
  // ast.draw(canvasEl.getContext("2d"));
});




