var background = Bodies.rectangle(200, 200, 10000, 10000, {
    isStatic: true, render: {
        fillStyle: "#ff0000",
        sprite: {
            texture: "images/background.png",
            xScale: 3,
            yScale: 3,
            yOffset: 0.25,
            xOffset: 0
        }
    },
    collisionFilter: {
        'group': -1,
        'category': 2,
        'mask': 0,
      }
});
var foreground = Bodies.rectangle(200, 200, 10000, 10000, {
    isStatic: true, render: {
        fillStyle: "#ff0000",
        sprite: {
            texture: "images/foreground.png",
            xScale: 3,
            yScale: 3,
            yOffset: 0.25,
            xOffset: 0
        }
    },
    collisionFilter: {
        'group': -1,
        'category': 2,
        'mask': 0,
      }
});

var walls = [
    Bodies.rectangle(250, 0, 1500, 10, { isStatic: true, render: { fillStyle: "#ff0000" } }),
    Bodies.rectangle(0, 250, 1000, 10, { isStatic: true, render: { fillStyle: "#ff0000" } }),
    // Bodies.rectangle(475, 25, 1000, 50, { isStatic: true, render: { fillStyle: "#00ff00" } }),
    // Bodies.rectangle(475, 575, 1000, 50, { isStatic: true, render: { fillStyle: "#aa0000" } }),
    // Bodies.rectangle(950, 200, 50, 400, { isStatic: true, render: { fillStyle: "#00aa00" } }),
    // Bodies.rectangle(450, 535, 100, 75, { isStatic: true, render: { fillStyle: "#0000ff" } }),
    // Bodies.rectangle(0, 300, 50, 600, { isStatic: true, render: { fillStyle: "#ff0000" } }),
    // Bodies.rectangle(1475, 25, 1000, 50, { isStatic: true, render: { fillStyle: "#00ff00" } }),
    // Bodies.rectangle(1475, 575, 1000, 50, { isStatic: true, render: { fillStyle: "#aa0000" } }),
    // Bodies.rectangle(1950, 300, 50, 600, { isStatic: true, render: { fillStyle: "#00aa00" } }),
    // Bodies.rectangle(1450, 535, 100, 75, { isStatic: true, render: { fillStyle: "#0000ff" } }),
]

var playerBox = Bodies.rectangle(200, 200, 90, 50, {
    angle: 0, render: {
        fillStyle: "#ff0000",
        sprite: {
            texture: "images/cats/orange/standing/1.png",
            xScale: 0.25,
            yScale: 0.20,
            yOffset: 0.25,
            xOffset: 0
        }
    },
});

var things = [
        Bodies.circle(400, 150, 10),
        Bodies.circle(400, 300, 15),
        Bodies.circle(400, 450, 10),
        Bodies.circle(300, 280, 20),
        Bodies.circle(400, 500, 10)
    ]