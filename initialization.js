

var engine = Engine.create();
var bounds = Bounds.create([{x: -25, y: 0}, {x: 600, y: 600}]);
// var bounds2 = Bounds.create([{x: -70, y: 70}, {x: 600, y: 600}]);

var bounds1 = createBound(500, 0, 550, 1200);
var bounds2 = createBound(800, 0, 850, 1200);

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


