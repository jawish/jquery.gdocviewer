/*
 * jQuery.gdocViewer - Embed linked documents using Google Docs Viewer
 * Licensed under MIT license.
 * Date: 2011/01/16
 *
 * @author Jawish Hameed
 * @version 1.0
 */
(function(a){a.fn.gdocsViewer=function(b){var c={width:"600",height:"700"};if(b){a.extend(c,b)}return this.each(function(){var d=a(this).attr("href");var e=d.substring(d.lastIndexOf(".")+1);if(/^(tiff|pdf|ppt|pps|doc|docx)$/.test(e)){a(this).after(function(){var g=a(this).attr("id");var f=(typeof g!=="undefined"&&g!==false)?g+"-gdocsviewer":"";return'<div id="'+f+'" class="gdocsviewer"><iframe src="http://docs.google.com/viewer?embedded=true&url='+encodeURIComponent(d)+'" width="'+c.width+'" height="'+c.height+'" style="border: none;"></iframe></div>'})}})}})(jQuery);