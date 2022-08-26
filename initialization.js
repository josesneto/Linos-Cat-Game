

var engine = Engine.create();
var bounds = Bounds.create([{x: -25, y: 0}, {x: 600, y: 600}]);

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

