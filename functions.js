$(document).ready(function() {
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
	$.fn.reloadimg = function(fn) {
		return this.each(function(index) {
			var src = $(this).attr('src');
			$(this).attr('src', src);
			console.log("set by element img["+index+"] attribute src on '"+src+"'");
		});  
	};
});
function basename(path) {
	var b = path;
	var lastChar = b.charAt(b.length - 1);
	if (lastChar === '/' || lastChar === '\\') {
		b = b.slice(0, -1);
	}
	b = b.replace(/^.*[\/\\]/g, '');
	return b;
}
function empty(str) {
    return (!str || 0 === str.length);
}