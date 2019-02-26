let app = new PIXI.Application({ width: 256, height: 256 });

function newLine(app, xOrigin, yOrigin, xEnd, yEnd) {
  // Create a new Graphics object and add it to the scene
  const graphics = new PIXI.Graphics();
  // Move it to the beginning of the line
  graphics.position.set(xOrigin, yOrigin);
  // Draw the line (endPoint should be relative to myGraph's position)
  graphics
    .lineStyle(4, 0xffffff)
    .moveTo(0, 0)
    .lineTo(xEnd, yEnd);
  // Add the line to the stage
  app.stage.addChild(graphics);
}

// newLine(app, 10, 10, 40, 40);
// newLine(app, 100, 10, 40, 40);

let i = 0;
while (i < app._options.width) {
  newLine(app, i * 20, i * 10, 40, 0);
  i++;
}

document.body.append(app.view);
