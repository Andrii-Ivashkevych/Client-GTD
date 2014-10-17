var Controller = Backbone.Router.extend({
    routes: {
        "": "start",    // Vain hash-tag.
        "!/": "start",  // Start page.
        "!/success": "success", //Block luck.
        "!/error": "error"  //Block error.
    },

    start: fucntion(){
        $(".block").hide();
        $("#start").show();
    },

    success: function(){
        $(".block").hide();
        $("#start").show();
    },

    error: function(){
        $(".block").hide();
        $("#start").show();
    }
});

var controller = new Controller();  //We are creating controller.

Backbone.history.start();   //We are starting HTML5 History push.