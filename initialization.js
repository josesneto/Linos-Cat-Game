

var engine = Engine.create({ gravity: { scale: 0 } });
var mouseconstraint = Matter.MouseConstraint.create(engine);
var render = Render.create({
    element: document.getElementById('canvas'),
    engine: engine,
    options: {
        width: 1200,
        height: 700,
        wireframes: false
    }
});

// INITIALIZATION OF EVENT LISTENERS __________________________________

Events.on(mouseconstraint, "mousedown", function () {
    walkToPosition(mouseconstraint.mouse.position.x, mouseconstraint.mouse.position.y);
});

document.addEventListener('keyup', (event) => {
    try {
        var key_code = event.code;
        key_pressed_dict[key_code] = false;
        if (state != 'sitting') {
            stopAndStand();
        }
    } catch (e) { }
}, false);

document.addEventListener('keydown', (event) => {
    try {
        key_code = event.code;
        key_pressed_dict[key_code] = true;
    } catch (e) { }
}, false);

// DEBUGGING PURPOSES _________________________________________________
 
this.test_engine = engine;
this.test_mouse = mouse;
this.test_render = render;


