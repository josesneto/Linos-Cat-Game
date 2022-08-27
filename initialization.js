

var engine = Engine.create();
var bounds = Bounds.create([{x: -25, y: 0}, {x: 600, y: 600}]);
// var bounds2 = Bounds.create([{x: -70, y: 70}, {x: 600, y: 600}]);

var bc = createBound(200, 200, 300, 300);

var bound1 = bc['bound'];
var rect1 = bc['visible_rect'];

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
this.test_render = render;


