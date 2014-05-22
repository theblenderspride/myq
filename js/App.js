(function($) {

    $.fn.accordion = function() {
        $(".collapse").not(".in").show();
		
		//$(".collapse").show();

        this.on("click", ".accordion-heading a", function(e) {
            e.preventDefault();
            var hash = e.target.href.split('#').pop();
            var body = $(e.target).parent().next();
            body.slideToggle();
        });
        return this;
    };

})(jQuery);

$(function() {
    $("#container").accordion();
});