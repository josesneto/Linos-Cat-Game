function keyDownBinding() {
    if (key_pressed) {
        // console.log(Bounds.contains(bounds, {x: playerBox.position.x, y: playerBox.position.y}), playerBox.position.x, playerBox.position.y, JSON.stringify(bounds));
        Bounds.shift(bounds, {x: playerBox.position.x-500, y: playerBox.position.y-500});
        // Render.lookAt(render, bounds);
        switch (key_code) {
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
                Body.setPosition(playerBox, { x: playerBox.position.x, y: playerBox.position.y + 10});
                break;
            case 'KeyS':
                state = 'sitting';
                break;
        }
    }
}

function createBound(x1, y1, x2, y2) {
    var bound = Bounds.create([{ x: x1, y: y1 }, { x: x2, y: y2 }]);
    var visible_rect = Bodies.rectangle(x1,y1, x2-x1, y2-y1,  {
        isStatic: true, collisionFilter: {
            'group': -1,
            'category': 2,
            'mask': 0,
        }
    });
    return { bound: bound, visible_rect: visible_rect };
}

function checkBounds(bounds, vector) {
    return Bounds.contains(bounds, vector);
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