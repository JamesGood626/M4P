let app = new PIXI.Application({ width: 256, height: 256 });

// Create the main stage for your display objects
// var stage = new PIXI.Container();

// Create a new Graphics object and add it to the scene
let myGraph = new PIXI.Graphics();
app.stage.addChild(myGraph);

// Move it to the beginning of the line
myGraph.position.set(50, 30);

// Draw the line (endPoint should be relative to myGraph's position)
myGraph
  .lineStyle(4, 0xffffff)
  .moveTo(0, 0)
  .lineTo(40, 70);

document.body.append(app.view);
