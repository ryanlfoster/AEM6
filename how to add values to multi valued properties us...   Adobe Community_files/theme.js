$j(document).ready(function(){
	
// ----------------------- GLOBAL HEADER
	// MOVE APPS
	$j('#jive-nav-link-apps').insertAfter($j('#custom-nav-explore')).show();

	// CUSTOM NAV MENUS
	$j('#j-globalNav .custom-nav-link[aria-haspopup="true"]')
		.click(function(e){
			if ($j(this).hasClass('active')) {
				$j("BODY > .j-popover > *").trigger("close");
				e.preventDefault();
			} else {
				var popMenu = $j(this).attr("id") + "-menu";
				$j.fn.customNavClickMenu.call(this,popMenu);
				e.preventDefault();
			}
		});

// ----------------------- BREADCRUMB
	$j('#jive-breadcrumb a[href="/places"]').attr('href','/welcome');

// ----------------------- WIDGETS
	$j('#jive-widget-container .jive-widget-deluxeaskaquestionwidget .jive-widget-handle').append('<a href="/community/guidelines">Community Guidelines</a>');
	$j('#jive-widget-container .ask-a-question-container button').addClass('j-btn-callout');

});


// ----------------------- CUSTOM FUNCTIONS

// CUSTOM NAV MENUS
$j.fn.customNavClickMenu = function(popElem) {
    var popContext = $j(this);
    if (popContext.hasClass("active")) {
    	popElem.trigger('close');
    } else {
		$j('#'+popElem).popover({
			onLoad: function() {
				popContext.addClass("active");
			},
			container: popContext.parent(),
			context: popContext,
			destroyOnClose: false,
			putBack: true,
			hoverSelection: true,
			focusOnHover: true, 
			onClose: function() {
				popContext.removeClass("active");
			}
		});
	}
}