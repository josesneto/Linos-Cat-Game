var background = Bodies.rectangle(600, 350, 1200, 700, {
    isStatic: true, render: {
        fillStyle: "#000000",
        sprite: {
            texture: "images/floor.png",
            xScale: 2,
            yScale: 2,
            yOffset: 0,
            xOffset: 0
        }
    },
    collisionFilter: {
        'group': -1,
        'category': 2,
        'mask': 0,
      }
});

var ch_cat_icon = Bodies.rectangle(100, 100, 200, 200, {
    isStatic: true, render: {
        fillStyle: "#ff0000",
        sprite: {
            texture: "images/icons/change-cat/2.png",
            xScale: 0.27,
            yScale: 0.27,
            yOffset: 0,
            xOffset: 0
        }
    },
    collisionFilter: {
        'group': -1,
        'category': 2,
        'mask': 0,
      }
});

// var foreground = Bodies.rectangle(600, 350, 1200, 700, {
//     isStatic: true, render: {
//         fillStyle: "#ff0000",
//         sprite: {
//             texture: "images/foreground.png",
//             xScale: 1,
//             yScale: 1,
//             yOffset: 0,
//             xOffset: 0
//         }
//     },
//     collisionFilter: {
//         'group': -1,
//         'category': 2,
//         'mask': 0,
//       }
// });

var walls = [
    Bodies.rectangle(600, 0, 1200, 10, { isStatic: true, render: { fillStyle: "#000000" } }),
    Bodies.rectangle(600, 700, 1200, 10, { isStatic: true, render: { fillStyle: "#000000" } }),
    Bodies.rectangle(0, 350, 10, 700, { isStatic: true, render: { fillStyle: "#000000" } }),
    Bodies.rectangle(1200, 350, 10, 700, { isStatic: true, render: { fillStyle: "#000000" } }),
]

var playerBox = Bodies.rectangle(300, 300, 90, 50, {
    angle: 0, render: {
        fillStyle: "#ff0000",
        sprite: {
            texture: "images/cats/yellow/standing/1.png",
            xScale: 0.30,
            yScale: 0.25,
            yOffset: 0.25,
            xOffset: 0
        }
    },
});



var bounds1 = createBounds(0, 0, 150, 150);