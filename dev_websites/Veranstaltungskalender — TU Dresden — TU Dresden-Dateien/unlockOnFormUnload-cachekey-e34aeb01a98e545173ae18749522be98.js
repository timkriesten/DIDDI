
/* - unlockOnFormUnload.js - */
// https://tu-dresden.de/portal_javascripts/unlockOnFormUnload.js?original=1
if(typeof(plone)==='undefined'){var plone={}}(function($){plone.UnlockHandler={init: function(){if($('form.enableUnlockProtection').length){$(window).unload(plone.UnlockHandler.execute);plone.UnlockHandler._refresher=setInterval(plone.UnlockHandler.refresh,300000)}},cleanup: function(){$(window).unbind('unload',plone.UnlockHandler.execute);clearInterval(plone.UnlockHandler._refresher)},execute: function(){if(plone.UnlockHandler.submitting){return}
$.ajax({url:$('body').attr('data-base-url')+'/@@plone_lock_operations/safe_unlock',async:false})},refresh: function(){if(plone.UnlockHandler.submitting){return}
$.get($('body').attr('data-base-url')+'/@@plone_lock_operations/refresh_lock')}};$(plone.UnlockHandler.init)})(jQuery);
