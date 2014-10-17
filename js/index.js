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

var Start = Backbone.View.extend({
    el: $("#start"),    // DOM element.
    events: {
        "click input:button": "check"   //Event hundler for button "Check".
    },
    check: function(){
        if (this.el.find("input:text").val() == "test") //Check text
            controller.navigate("success", true);   //Migration to page success.
        else
            controller.navigate("error", true);  //Migration to page error.
    }
});

var start = new Start();