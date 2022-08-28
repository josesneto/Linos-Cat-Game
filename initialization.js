

var engine = Engine.create();
var mouseconstraint = Matter.MouseConstraint.create(engine);
var bounds = Bounds.create([{x: -25, y: 0}, {x: 600, y: 600}]);
// var bounds2 = Bounds.create([{x: -70, y: 70}, {x: 600, y: 600}]);

Events.on(mouseconstraint, "mousedown", function(){
    state = 'walking';
    walkToPosition(mouseconstraint.mouse.position.x, mouseconstraint.mouse.position.y);
});

var bounds1 = createBound(50, 500, 150, 700);
var bounds2 = createBound(800, 0, 850, 1200);
var bounds3 = createBound(40, 40, 1160, 660);

var render = Render.create({
element: document.getElementById('canvas'),
engine: engine,
options: {
    width: 1200,
    height: 700,
    wireframes: false
}
});



engine.gravity.scale = 0;

this.test_engine = engine;
this.test_mouse = mouse;
this.test_render = render;


