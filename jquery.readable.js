/*
 * jQuery Readable Plugin v1.0.0
 *
 * Copyright (c) 2010 Frontier Strategy Group
 * Licensed under the MIT license.
 * Author: Tony Amoyal - http://tonyamoyal.com
 *
 */

(function($){
	
	$.fn.enable = function(){
		this.attr('disabled', false);
	};
	
	$.fn.disable = function(){
		this.attr('disabled', true);
	};
	
	$.fn.check = function(checkIt){
		if(checkIt == undefined){
			this.attr('checked', true);
		}else{
			this.attr('checked', checkIt);
		}
	};
	
	$.fn.uncheck = function(){
		this.attr('checked', false);
	};
	
	$.fn.clearInput = function(){
		this.val("");
	}
	
	$.fn.showInline = function(){
		this.css('display','inline');
	}
	
	$.fn.grandparent = function(){
		this.parent().parent();
	}
	
})(jQuery);
