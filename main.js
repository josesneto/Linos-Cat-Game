World.add(engine.world, background);
World.add(engine.world, walls);
World.add(engine.world, things);
World.add(engine.world, playerBox);
World.add(engine.world, foreground);

Runner.run(engine);
Render.run(render);

// Bounds.shift(bounds, {x: playerBox.position.x, y: playerBox.position.y});
// Render.lookAt(render, bounds);

var seq_counter = 1,
    boomerang_counter = 1,
    boomerang_frame = true,
    frame_acc = 1,
    direction = 1,
    state = 'standing',
    key_pressed = false;

loadImages();

window.onload = function () {

    setInterval(keyDownBinding, 25);
    setInterval(updateFrames, 150);

    document.addEventListener('keyup', (event) => {
        try {
            var key_name = event.key;
            var key_code = event.code;
            Matter.Body.setVelocity(playerBox, { x: 0, y: 0 });
            if (key_code.startsWith('Arrow')) {
                animation_index = 0;
            }
            key_pressed = false;
            boomerang_frame = true;
            if (state == 'walking') {
                state = 'standing';
            }
        } catch (e) { }
    }, false);

    document.addEventListener('keydown', (event) => {
        try {
            key_name = event.key;
            key_code = event.code;
            // console.log(`Key pressed ${key_name} \r\n Key code value: ${key_code}`);
            key_pressed = true;
            state = 'walking';
            boomerang_frame = false;
        } catch (e) { }
    }, false);
}

function updateFrames() {
    var frame_name = boomerang_frame == true ? direction * boomerang_counter : direction * seq_counter;
    playerBox.render.sprite.texture = "images/cats/" + ['orange', state, frame_name].join('/') + ".png";
    seq_counter = seq_counter < 4 ? seq_counter + 1 : 1;
    boomerang_counter = boomerang_counter + frame_acc;
    if (boomerang_counter == 1 || boomerang_counter == 4) {
        frame_acc *= -1;
    }
}

function preloadImage(url) {
    var img = new Image();
    img.src = url;
}

function loadImages() {
    var cats = ['orange'];
    var states = ['standing', 'walking', 'sitting'];
    for (var i = 0; i < cats.length; i++) {
        for (var j = 0; j < states.length; j++) {
            for (var k = -4; k <= 4; k++) {
                if (k != 0) {
                    var frame_to_load = ['images/cats', cats[i], states[j], k].join('/') + '.png';
                    preloadImage(frame_to_load);
                }
            }
        }
    }
}

// var bg_image = document.getElementById('background');

// Events.on(render, 'afterRender', function (event) { render.context.drawImage(bg_image, 10, 10, 900, 900); });




// window.onclick = function () {

// playerBox.force.x += 0.01;
// setTimeout(function() {playerBox.force.x += 0.01;},1000);

// setTimeout(function () {
//     var newBall = Bodies.circle(280, 100, 10, {
//         render: {
//             strokeStyle: "#ffffff",
//             sprite: {
//                 texture: "ball.png",
//                 xScale: 0.215,
//                 yScale: 0.215,
//             }
//         },
//         restitution: 2,
//     }
//     );
//     World.add(engine.world, newBall);
// }, 1000);
// }


// var chicken = Bodies.rectangle(140, 200, 20, 20,
// {isStatic: true, isSensor: true, render: {
//     sprite: {
//         texture: "chicken.png",

//                     xScale: 0.215,
//                     yScale: 0.215,
//     }
// }
// });