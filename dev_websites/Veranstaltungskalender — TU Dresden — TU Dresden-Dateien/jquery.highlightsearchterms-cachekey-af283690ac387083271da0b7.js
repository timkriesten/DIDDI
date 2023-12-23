
/* Merged Plone Javascript file
 * This file is dynamically assembled from separate parts.
 * Some of these parts have 3rd party licenses or copyright information attached
 * Such information is valid for that section,
 * not for the entire composite file
 * originating files are separated by - filename.js -
 */

/* - jquery.highlightsearchterms.js - */
// https://tu-dresden.de/portal_javascripts/jquery.highlightsearchterms.js?original=1
(function($){var Highlighter,makeSearchKey,makeAddress,defaults;Highlighter=function(options){$.extend(this,options);this.terms=this.cleanTerms(this.terms.length?this.terms:this.getSearchTerms())};Highlighter.prototype={highlight: function(startnode){if(!this.terms.length||!startnode.length){return}
var self=this;$.each(this.terms, function(i,term){startnode.find('*:not(textarea)').andSelf().contents().each(function(){if(this.nodeType===3){self.highlightTermInNode(this,term)}})})},highlightTermInNode: function(node,word){var c=node.nodeValue,self=this,highlight,ci,index,next;if($(node).parent().hasClass(self.highlightClass)){return}
highlight=function(content){return $('<span class="'+self.highlightClass+'">&nbsp;</span>').text(content)};ci=self.caseInsensitive;while(c&&(index=(ci?c.toLowerCase():c).indexOf(word))>-1){$(node).before(document.createTextNode(c.substr(0,index))).before(highlight(c.substr(index,word.length))).before(document.createTextNode(c.substr(index+word.length)));next=node.previousSibling;$(node).remove();node=next;c=node.nodeValue}},queryStringValue: function(uri,regexp){var match,pair;if(uri.indexOf('?')<0){return ''}
uri=uri.substr(uri.indexOf('?')+1);while(uri.indexOf('=')>=0){uri=uri.replace(/^\&*/,'');pair=uri.split('&',1)[0];uri=uri.substr(pair.length);match=pair.match(regexp);if(match){return decodeURIComponent(match[match.length-1].replace(/\+/g,' '))}}
return ''},termsFromReferrer: function(){var ref,i,se;ref=$.fn.highlightSearchTerms._test_referrer!==null?$.fn.highlightSearchTerms._test_referrer:document.referrer;if(!ref){return ''}
for(i=0;i<this.referrers.length;i+=1){se=this.referrers[i];if(ref.match(se.address)){return this.queryStringValue(ref,se.key)}}
return ''},cleanTerms: function(terms){var self=this;return $.unique($.map(terms, function(term){term=$.trim(self.caseInsensitive?term.toLowerCase():term);return(!term||self.filterTerms.test(term))?null:term}))},getSearchTerms: function(){var terms=[],uri=$.fn.highlightSearchTerms._test_location!==null?$.fn.highlightSearchTerms._test_location:location.href;if(this.useReferrer){$.merge(terms,this.termsFromReferrer().split(/\s+/))}
if(this.useLocation){$.merge(terms,this.queryStringValue(uri,this.searchKey).split(/\s+/))}
return terms}};makeSearchKey=function(key){return(typeof key==='string')?new RegExp('^'+key+'=(.*)$','i'):key};makeAddress=function(addr){return(typeof addr==='string')?new RegExp('^https?://(www\\.)?'+addr,'i'):addr};$.fn.highlightSearchTerms=function(options){options=$.extend({},defaults,options);options=$.extend(options,{searchKey:makeSearchKey(options.searchKey),referrers:$.map(options.referrers, function(se){return{address:makeAddress(se.address),key:makeSearchKey(se.key)}})});if(options.includeOwnDomain){var hostname=$.fn.highlightSearchTerms._test_location!==null?$.fn.highlightSearchTerms._test_location:location.hostname;options.referrers.push({address:makeAddress(hostname.replace(/\./g,'\\.')),key:options.searchKey})}
new Highlighter(options).highlight(this);return this};$.fn.highlightSearchTerms.referrers=[{address:'google\\.',key:'q'},{address:'search\\.yahoo\\.',key:'p'},{address:'search\\.msn\\.',key:'q'},{address:'search\\.live\\.',key:'query'},{address:'search\\.aol\\.',key:'userQuery'},{address:'ask\\.com',key:'q'},{address:'altavista\\.',key:'q'},{address:'feedster\\.',key:'q'}];defaults={terms:[],useLocation:true,searchKey:'(searchterm|SearchableText)',useReferrer:true,referrers:$.fn.highlightSearchTerms.referrers,includeOwnDomain:true,caseInsensitive:true,filterTerms:/\b(not|and|or)\b/i,highlightClass:'highlightedSearchTerm'};$.fn.highlightSearchTerms._test_location=null;$.fn.highlightSearchTerms._test_referrer=null;$.fn.highlightSearchTerms._highlighter=Highlighter}(jQuery));jQuery(function($){$('#region-content,#content').highlightSearchTerms({includeOwnDomain:$('dl.searchResults').length===0})});

/* - first_input_focus.js - */
// https://tu-dresden.de/portal_javascripts/first_input_focus.js?original=1
jQuery(function($){var $errorFields=$("form div.error").find(":input:visible:not(.multilanguageDropDown):not(.tooltip-focus), .ckeditor_plone:input");if($errorFields.filter(".language-container.is-active:visible *").first().focus().length||$errorFields.first().focus().length){return}
$("form.enableAutoFocus :input:not(.formTabs):not(.multilanguageDropDown):not(.tooltip-focus):visible:first").focus()});

/* - styleswitcher.js - */
// https://tu-dresden.de/portal_javascripts/styleswitcher.js?original=1
function setActiveStyleSheet(title,reset){jQuery('link[rel*=style][title]').attr('disabled',true).find('[title='+title+']').attr('disabled',false);if(reset){createCookie("wstyle",title,365)}}
jQuery(function(){var style=readCookie("wstyle");if(style){setActiveStyleSheet(style,0)}});

/* - collapsibleformfields.js - */
// https://tu-dresden.de/portal_javascripts/collapsibleformfields.js?original=1
(function($){$.fn.do_search_collapse=function(){
function check_used(element){var e=$(element);if(e.find('input[id$=_toggle]:checkbox').length>0){if(e.find('input[id$=_toggle]:checkbox:checked').length===0){return true}}
if(e.find(':text[value]').length>0){return true}
if(e.find('select .default_option').length>0){if(e.find('select .default_option:selected').length===0){return true}}
return false}
return this.each( function(){var indicator=$(this).find('.collapser:first'),collapse=$(this).find('.collapse:first');indicator.click(function(){var container=$(this).parent(),target=container.find('.collapse:first');target.slideToggle('normal');$(this).toggleClass('expanded');$(this).toggleClass('collapsed')});if(check_used(this)){indicator.addClass('expanded')} else{collapse.hide();indicator.addClass('collapsed')}})};jQuery(function($){$('.field.collapsible').do_search_collapse()})}(jQuery));

/* - table_sorter.js - */
// https://tu-dresden.de/portal_javascripts/table_sorter.js?original=1
(function($){
function sortabledataclass(cell){var re,matches;re=new RegExp("sortabledata-([^ ]*)","g");matches=re.exec(cell.attr('class'));if(matches){return matches[1]}
else{return null}}
function sortable(cell){var text=sortabledataclass(cell);if(text===null){text=cell.text()}
if(text.charAt(4)!=='-'&&text.charAt(7)!=='-'&&!isNaN(parseFloat(text))){return parseFloat(text)}
return text.toLowerCase()}
function sort(){var th,colnum,table,tbody,reverse,index,data,usenumbers,tsorted;th=$(this).closest('th');colnum=$('th',$(this).closest('thead')).index(th);table=$(this).parents('table:first');tbody=table.find('tbody:first');tsorted=parseInt(table.attr('sorted')||'-1',10);reverse=tsorted===colnum;$(this).parent().find('th:not(.nosort) .sortdirection').html('&#x2003;');$(this).children('.sortdirection').html(reverse?'&#x25b2;':'&#x25bc;');index=$(this).parent().children('th').index(this),data=[],usenumbers=true;tbody.find('tr').each(function(){var cells,sortableitem;cells=$(this).children('td');sortableitem=sortable(cells.slice(index,index+1));if(isNaN(sortableitem)){usenumbers=false}
data.push([sortableitem,sortable(cells.slice(1,2)),sortable(cells.slice(0,1)),this])});if(data.length){if(usenumbers){data.sort(function(a,b){return a[0]-b[0]})} else{data.sort()}
if(reverse){data.reverse()}
table.attr('sorted',reverse?'':colnum);tbody.append($.map(data, function(a){return a[3]}));tbody.each(setoddeven)}}
function setoddeven(){var tbody=$(this);tbody.find('tr').removeClass('odd').removeClass('even').filter(':odd').addClass('even').end().filter(':even').addClass('odd')}
$(function(){var blankarrow=$('<span>&#x2003;</span>').addClass('sortdirection');$('table.listing:not(.nosort) thead th:not(.nosort)').append(blankarrow.clone()).css('cursor','pointer').click(sort);$('table.listing:not(.nosort) tbody').each(setoddeven)})})(jQuery);

/* - ++resource++jsi18n.js - */
// https://tu-dresden.de/portal_javascripts/++resource++jsi18n.js?original=1
(function(jarn,$){jarn.i18n={storage:null,catalogs:{},currentLanguage:null,ttl:24 * 3600 * 1000,init: function(){if(!Date.now){Date.now=function(){return new Date().valueOf()}}
jarn.i18n.currentLanguage=$('html').attr('lang');try{if('localStorage' in window&&window.localStorage!==null&&'JSON' in window&&window.JSON!==null){jarn.i18n.storage=localStorage}} catch(e){}},setTTL: function(millis){jarn.i18n.ttl=millis},_setCatalog: function(domain,language,catalog){if(domain in jarn.i18n.catalogs){jarn.i18n.catalogs[domain][language]=catalog} else{jarn.i18n.catalogs[domain]={};jarn.i18n.catalogs[domain][language]=catalog}},_storeCatalog: function(domain,language,catalog){var key=domain+'-'+language;if(jarn.i18n.storage!==null&&catalog!==null){jarn.i18n.storage.setItem(key,JSON.stringify(catalog));jarn.i18n.storage.setItem(key+'-updated',Date.now())}},loadCatalog: function(domain,language){if(typeof(language)==='undefined'){language=jarn.i18n.currentLanguage}
if(jarn.i18n.storage!==null){var key=domain+'-'+language;if(key in jarn.i18n.storage){if((Date.now()-parseInt(jarn.i18n.storage.getItem(key+'-updated'),10))<jarn.i18n.ttl){var catalog=JSON.parse(jarn.i18n.storage.getItem(key));jarn.i18n._setCatalog(domain,language,catalog);return}}}
$.getJSON(portal_url+'/jsi18n?'+'domain='+domain+'&language='+language,
function(catalog){if(catalog===null){return}
jarn.i18n._setCatalog(domain,language,catalog);jarn.i18n._storeCatalog(domain,language,catalog)})},MessageFactory: function(domain,language){language=language||jarn.i18n.currentLanguage;return function translate(msgid,keywords){var msgstr;if((domain in jarn.i18n.catalogs)&&(language in jarn.i18n.catalogs[domain])&&(msgid in jarn.i18n.catalogs[domain][language])){msgstr=jarn.i18n.catalogs[domain][language][msgid]} else{msgstr=msgid}
if(keywords){var regexp,keyword;for(keyword in keywords){if(keywords.hasOwnProperty(keyword)){regexp=RegExp("\\$\\{"+keyword+'\\}','g');msgstr=msgstr.replace(regexp,keywords[keyword])}}}
return msgstr}}};jarn.i18n.init()})(window.jarn=window.jarn||{},jQuery);

/* - ++resource++tud.boxes.webcms/js/videobox.js - */
// https://tu-dresden.de/portal_javascripts/++resource++tud.boxes.webcms/js/videobox.js?original=1
(function($){$(document).ready(function(){$(".media .branding button").click(function(event){var $parent=$(this).closest('.branding')
var $videoWrapper=$parent.closest('.video-wrapper');var html=atob($videoWrapper.data("video-html"));var json=JSON.parse(html);$parent.replaceWith($(json["default"]));event.preventDefault()});var $a11yButtons=$(".video-accessibility ul button");$a11yButtons.click(function(event){var $parent=$(this).closest('.video-accessibility')
var $button=$(this);var $videoWrapper=$parent.siblings('.video-wrapper');if($button.attr('aria-pressed')=='true'){return}
$button.attr('aria-pressed','true');$a11yButtons.not(this).attr('aria-pressed','false');$videoWrapper.data('video',$button.data('video'));if($button.data("video")=="default"){$parent.removeClass("active")} else{$parent.addClass("active")}
var json=JSON.parse(atob($videoWrapper.data("video-html")));var video=$videoWrapper.data('video');if(video.startsWith("videoUrl_A11Y_AD_")){video=video.substring(0,video.lastIndexOf("_"))}
$videoWrapper.children().replaceWith($(json[video]));setTimeout(()=>{var $dropdown=$(this).closest(".dropdown-pane");if($dropdown&&$dropdown.foundation){$dropdown.foundation('close')}},500)})})})(jQuery);
