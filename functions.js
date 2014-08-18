$(document).ready(function() {
	//--- check if presed enter ---
	$.fn.pressEnter = function(fn) {
		return this.each(function() {
			$(this).bind('enterPress', fn);
			$(this).keyup(function(e) {
				if(e.keyCode == 13) {
					$(this).trigger("enterPress");
				}
			})
		});  
	};
	
	//---reload a image
	$.fn.reloadimg = function(fn) {
		return this.each(function(index) {
			var src = $(this).attr('src');
			$(this).attr('src', src);
			console.log("reload image:\nimg="+index+"\nsrc='"+src+"'");
		});  
	};
});

//--- function basename (like PHP) ---
function basename(path) {
	var b = path;
	var lastChar = b.charAt(b.length - 1);
	if (lastChar === '/' || lastChar === '\\') {
		b = b.slice(0, -1);
	}
	b = b.replace(/^.*[\/\\]/g, '');
	return b;
}

//--- function empty (like PHP) ---
function empty(str) {
    return (!str || 0 === str.length);
}

//--- emailpattern ---
var emailpattern = new RegExp('^([a-zA-Z0-9\\-\\.\\_]+)(\\@)([a-zA-Z0-9\\-\\.]+)(\\.)([a-zA-Z]{2,4})$');

//--- Scroll to place ---
$(document).ready(function() {
	$(function(){
		$("a[href^='#']").click(function(event) {
			event.preventDefault();
			var target = $(this).attr('href');
			$('html,body').animate({
				scrollTop: $(target).offset().top-30
			},1000);
			console.log("Scroll to "+target);
		});
	});
});