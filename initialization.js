

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



// DEBUGGING PURPOSES _________________________________________________
 
this.test_engine = engine;
this.test_mouse = mouseconstraint;
this.test_render = render;

// GAME CONTEXT VARIABLES INITIALIZATION ______________________________

var game_context = {
    player1: undefined,
    walls_list: undefined,
    state_variables: {
        bound_stepped: {},
        image_sources: {},
        current_outfit_index: 0,
        seq_counter: 1,
        boomerang_counter: 1,
        boomerang_frame: true,
        frame_acc: 1,
        direction: 1,
        current_player_state: 'standing',
        cat_vel: 2,
        walk_to_position_interval: undefined,
        key_pressed_dict: {
            ArrowUp: false,
            ArrowDown: false,
            ArrowRight: false,
            ArrowLeft: false,
        },
        player_outfits: ['orange', 'gray', 'brown', 'black', 'white', 'yellow'],
        player_states: ['standing', 'walking', 'sitting'],
        game_image_paths: [
            "images/floor.png",
            "images/icons/change-cat/1.png",
            "images/icons/change-cat/2.png",
            "images/icons/change-cat/3.png",
            "images/icons/change-cat/4.png"
        ],
    }
};

var ctx_vars = game_context.state_variables;

