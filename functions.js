function keyDownBinding() {
    // if (key_pressed) {
        // console.log(Bounds.contains(bounds, {x: playerBox.position.x, y: playerBox.position.y}), playerBox.position.x, playerBox.position.y, JSON.stringify(bounds));
        // Bounds.shift(bounds, { x: playerBox.position.x - 500, y: playerBox.position.y - 500 });
        for (var key in key_pressed_dict) {
            if (key_pressed_dict[key] == true && key.startsWith('Arrow')) {           
                console.log(key, key_pressed_dict[key]);
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
    state = 'walking';
    boomerang_frame = false;
    switch (arrowDirection) {
        case 'ArrowLeft':
            direction = -1;
            Body.setPosition(playerBox, { x: playerBox.position.x - 10, y: playerBox.position.y });
            break;
        case 'ArrowRight':
            direction = 1;
            Body.setPosition(playerBox, { x: playerBox.position.x + 10, y: playerBox.position.y });
            break;
        case 'ArrowUp':
            Body.setPosition(playerBox, { x: playerBox.position.x, y: playerBox.position.y - 10 });
            break;
        case 'ArrowDown':
            Body.setPosition(playerBox, { x: playerBox.position.x, y: playerBox.position.y + 10 });
            break;
    }
}

function stopAndStand() {
    state = 'standing';
    boomerang_frame = true;
    Matter.Body.setVelocity(playerBox, { x: 0, y: 0 });
    animation_index = 0;
    key_pressed = false;
}

function sit() {
    state = 'sitting';
    boomerang_frame = true;
    Matter.Body.setVelocity(playerBox, { x: 0, y: 0 });
}

function walkToPosition(x, y) {
    clearInterval(walk_to_position_interval);
    x = x - 115;
    var last_x, last_y;
    walk_to_position_interval = setInterval(function () {
        is_walking_to_a_position = true;
        if (playerBox.position.x < x) {
            walkToDirection('ArrowRight');
        }
        if (playerBox.position.x > x) {
            walkToDirection('ArrowLeft');
        }
        if (playerBox.position.y > y) {
            walkToDirection('ArrowUp');
        }
        if (playerBox.position.y < y) {
            walkToDirection('ArrowDown');
        }
        // if ((playerBox.position.y == last_y && playerBox.position.x == last_x) || !checkBounds(bounds3, { x: playerBox.position.x, y: playerBox.position.y })) {
        if ((playerBox.position.y == last_y && playerBox.position.x == last_x)) {
        clearInterval(walk_to_position_interval);
            is_walking_to_a_position = false;
            stopAndStand();
        }
        last_x = playerBox.position.x;
        last_y = playerBox.position.y;
    }, 30);
    // }
}

function createBound(x1, y1, x2, y2) {
    var bounds = Bounds.create([{ x: x1, y: y1 }, { x: x2, y: y2 }]);
    // var visible_rect = Bodies.rectangle(x1,y1, x2-x1, y2-y1,  {
    //     isStatic: true, collisionFilter: {
    //         'group': -1,
    //         'category': 2,
    //         'mask': 0,
    //     }
    // });
    // return { bound: bound, visible_rect: visible_rect };
    return bounds;
}

function checkBounds(bounds, vector) {
    return Bounds.contains(bounds, vector);
}

function boundsCheckListener(bounds, bounds_name, trigger_script) {
    bound_stepped[bounds_name] = bound_stepped[bounds_name] ? bound_stepped[bounds_name] : false;
    if (!bound_stepped[bounds_name] && checkBounds(bounds, { x: playerBox.position.x, y: playerBox.position.y })) {
        if (trigger_script) {
            eval(trigger_script);
        }
    }
    bound_stepped[bounds_name] = checkBounds(bounds, { x: playerBox.position.x, y: playerBox.position.y });
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

function changeCatSprite(index) {
    current_cat_sprite_index = index ? index % cat_sprites.length : (current_cat_sprite_index + 1) % cat_sprites.length;
}

function updateFrames(object, type) {
    var frame_name = boomerang_frame == true ? direction * boomerang_counter : direction * seq_counter;
    var path_prefix = "images/" + type;
    if (type == 'cats') {
        path_prefix = [path_prefix, cat_sprites[current_cat_sprite_index], state, frame_name].join('/');
    } else {
        path_prefix = [path_prefix, frame_name.toString().replace('-', '')].join('/');
        console.log(path_prefix);
        // return;
    }
    object.render.sprite.texture = path_prefix + ".png";
    if (type == 'cats') {
        seq_counter = seq_counter < 4 ? seq_counter + 1 : 1;
        boomerang_counter = boomerang_counter + frame_acc;
        if (boomerang_counter == 1 || boomerang_counter == 4) {
            frame_acc *= -1;
        }
    }
}

function preloadImage(url) {
    var img = new Image();
    img.src = url;
    return img;
}

function loadImages() {
    var cats = cat_sprites;
    var states = ['standing', 'walking', 'sitting'];
    for (var i = 0; i < cats.length; i++) {
        for (var j = 0; j < states.length; j++) {
            for (var k = -4; k <= 4; k++) {
                if (k != 0) {
                    var frame_to_load = ['images/cats', cats[i], states[j], k].join('/') + '.png';
                    image_sources[frame_to_load] = preloadImage(frame_to_load);
                }
            }
        }
    }
    preloadImage("images/floor.png");
    preloadImage("images/icons/change-cat/1.png");
    preloadImage("images/icons/change-cat/2.png");
    preloadImage("images/icons/change-cat/3.png");
    preloadImage("images/icons/change-cat/4.png");
}