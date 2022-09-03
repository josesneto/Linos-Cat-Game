
World.add(engine.world, walls);
World.add(engine.world, background);
// World.add(engine.world, things);
World.add(engine.world, ch_cat_icon);
World.add(engine.world, playerBox);

// World.add(engine.world, foreground);

Runner.run(engine);
Render.run(render);

// Bounds.shift(bounds, {x: playerBox.position.x, y: playerBox.position.y});
// Render.lookAt(render, bounds);



loadImages(ctx_vars.game_image_paths);

window.onload = function () {

    setInterval(keyDownBinding, 25);
    setInterval(updateFrames, 150, game_context.player1, 'player-outfit-sprites');
    setInterval(updateFrames, 1050, ch_cat_icon, 'icons/change-cat');
    setInterval(function () { if (checkBounds(bounds1, game_context.player1.position)) { changePlayerOutfit() } }, 1050);
    // setInterval(boundsCheckListener, 100, bounds2, 'bound2');
    // setInterval(function () {walkToPosition(mouseconstraint.mouse.position.x, mouseconstraint.mouse.position.y);}, 3000);

// INITIALIZATION OF EVENT LISTENERS __________________________________

Events.on(mouseconstraint, "mousedown", function () {
    walkToPosition(mouseconstraint.mouse.position.x, mouseconstraint.mouse.position.y);
});

document.addEventListener('keyup', (event) => {
    try {
        var key_code = event.code;
        ctx_vars.key_pressed_dict[key_code] = false;
        if (ctx_vars.current_player_state != 'sitting') {
            stopAndStand();
        }
    } catch (e) { }
}, false);

document.addEventListener('keydown', (event) => {
    try {
        key_code = event.code;
        ctx_vars.key_pressed_dict[key_code] = true;
    } catch (e) { }
}, false);
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