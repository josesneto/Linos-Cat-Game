

var engine = Engine.create();
var bounds = Bounds.create([{x: -25, y: 0}, {x: 600, y: 600}]);

var render = Render.create({
element: document.getElementById('canvas'),
engine: engine,
options: {
    width: window.innerWidth - 40,
    height: 200,
    wireframes: false
}
});



engine.gravity.scale = 0;

this.test_engine = engine;
this.test_render = render;

