function keyDownBinding() {          
    console.log(ctx_vars.key_pressed_dict);
        for (var key in ctx_vars.key_pressed_dict) {
            if (ctx_vars.key_pressed_dict[key] == true && key.startsWith('Arrow')) { 
                walkToDirection(key);
            }
        }

        // switch (key_code) {
        //     case 'ArrowLeft':
        //         if (!is_walking_to_a_position) {
        //             walkToDirection('left');
        //             direction = -1;
        //             Body.setPosition(playerBox, { x: playerBox.position.x - cat_vel, y: playerBox.position.y });
        //         }
        //         break;
        //     case 'ArrowRight':
        //         if (!is_walking_to_a_position) {
        //             walkToDirection('right');
        //             direction = 1;
        //             Body.setPosition(playerBox, { x: playerBox.position.x + cat_vel, y: playerBox.position.y });
        //         }
        //         break;
        //     case 'ArrowUp':
        //         if (!is_walking_to_a_position) {
        //             walkToDirection('up');
        //             Body.setPosition(playerBox, { x: playerBox.position.x, y: playerBox.position.y - cat_vel });
        //         }
        //         break;
        //     case 'ArrowDown':
        //         if (!is_walking_to_a_position) {
        //             walkToDirection('down');
        //             Body.setPosition(playerBox, { x: playerBox.position.x, y: playerBox.position.y + cat_vel });
        //         }
        //         break;
        //     case 'KeyS':
        //         sit();
        //         key_pressed = false;
        //         // Render.lookAt(render, bounds);
        //         break;
        // }
    // }
}

function walkToDirection(arrowDirection) {
    ctx_vars.current_player_state = 'walking';
    ctx_vars.boomerang_frame = false;
    switch (arrowDirection) {
        case 'ArrowLeft':
            ctx_vars.direction = -1;
            Body.setPosition(game_context.player1, { x: game_context.player1.position.x - 10, y: game_context.player1.position.y });
            break;
        case 'ArrowRight':
            ctx_vars.direction = 1;
            Body.setPosition(game_context.player1, { x: game_context.player1.position.x + 10, y: game_context.player1.position.y });
            break;
        case 'ArrowUp':
            Body.setPosition(game_context.player1, { x: game_context.player1.position.x, y: game_context.player1.position.y - 10 });
            break;
        case 'ArrowDown':
            Body.setPosition(game_context.player1, { x: game_context.player1.position.x, y: game_context.player1.position.y + 10 });
            break;
    }
}

function stopAndStand() {
    ctx_vars.current_player_state = 'standing';
    ctx_vars.boomerang_frame = true;
    Matter.Body.setVelocity(game_context.player1, { x: 0, y: 0 });
    ctx_vars.animation_index = 0;
}

function sit() {
    ctx_vars.current_player_state = 'sitting';
    ctx_vars.boomerang_frame = true;
    Matter.Body.setVelocity(game_context.player1, { x: 0, y: 0 });
}

function walkToPosition(x, y) {
    var x_offset = 115;
    clearInterval(ctx_vars.walk_to_position_interval);
    x = x - x_offset;
    var last_x, last_y;
    ctx_vars.walk_to_position_interval = setInterval(function () {
        if (game_context.player1.position.x < x) {
            walkToDirection('ArrowRight');
        }
        if (game_context.player1.position.x > x) {
            walkToDirection('ArrowLeft');
        }
        if (game_context.player1.position.y > y) {
            walkToDirection('ArrowUp');
        }
        if (game_context.player1.position.y < y) {
            walkToDirection('ArrowDown');
        }
        // if ((playerBox.position.y == last_y && playerBox.position.x == last_x) || !checkBounds(bounds3, { x: playerBox.position.x, y: playerBox.position.y })) {
        if ((game_context.player1.position.y == last_y && game_context.player1.position.x == last_x)) {
        clearInterval(ctx_vars.walk_to_position_interval);
            stopAndStand();
        }
        last_x = game_context.player1.position.x;
        last_y = game_context.player1.position.y;
    }, 30);
    // }
}

function createBounds(x1, y1, x2, y2) {
    var bounds = Bounds.create([{ x: x1, y: y1 }, { x: x2, y: y2 }]);
    return bounds;
}

function checkBounds(bounds, vector) {
    return Bounds.contains(bounds, vector);
}

function boundsCheckListener(bounds, bounds_name, trigger_script) {
    ctx_vars.bound_stepped[bounds_name] = ctx_vars.bound_stepped[bounds_name] ? ctx_vars.bound_stepped[bounds_name] : false;
    if (!ctx_vars.bound_stepped[bounds_name] && checkBounds(bounds, { x: game_context.player1.position.x, y: game_context.player1.position.y })) {
        if (trigger_script) {
            eval(trigger_script);
        }
    }
    ctx_vars.bound_stepped[bounds_name] = checkBounds(bounds, { x: game_context.player1.position.x, y: game_context.player1.position.y });
}

function changePlayerOutfit(index) {
    ctx_vars.current_outfit_index = index ? index % ctx_vars.player_outfits.length : (ctx_vars.current_outfit_index + 1) % ctx_vars.player_outfits.length;
}

function updateFrames(object, type) {
    var frame_name = ctx_vars.boomerang_frame == true ? ctx_vars.direction * ctx_vars.boomerang_counter : ctx_vars.direction * ctx_vars.seq_counter;
    var path_prefix = "images/" + type;
    if (type == 'player-outfit-sprites') {
        path_prefix = [path_prefix, ctx_vars.player_outfits[ctx_vars.current_outfit_index], ctx_vars.current_player_state, frame_name].join('/');
    } else {
        path_prefix = [path_prefix, frame_name.toString().replace('-', '')].join('/');
    }
    object.render.sprite.texture = path_prefix + ".png";
    if (type == 'player-outfit-sprites') {
        ctx_vars.seq_counter = ctx_vars.seq_counter < 4 ? ctx_vars.seq_counter + 1 : 1;
        ctx_vars.boomerang_counter = ctx_vars.boomerang_counter + ctx_vars.frame_acc;
        if (ctx_vars.boomerang_counter == 1 || ctx_vars.boomerang_counter == 4) {
            ctx_vars.frame_acc *= -1;
        }
    }
}

function preloadImage(url) {
    var img = new Image();
    img.src = url;
    return img;
}

function loadPlayerImages() {
    for (var i = 0; i < ctx_vars.player_outfits.length; i++) {
        for (var j = 0; j < ctx_vars.player_states.length; j++) {
            for (var k = -4; k <= 4; k++) {
                if (k != 0) {
                    var frame_to_load = ['images/player-outfit-sprites', ctx_vars.player_outfits[i], ctx_vars.player_states[j], k].join('/') + '.png';
                    ctx_vars.image_sources[frame_to_load] = preloadImage(frame_to_load);
                }
            }
        }
    }
}

function loadImages(images_list) {
    loadPlayerImages();
    for (var i = 0; i < images_list.length; i++) {
        preloadImage(images_list[i]);
    }
}