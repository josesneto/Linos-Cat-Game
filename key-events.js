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