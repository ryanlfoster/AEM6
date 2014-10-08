define("jive.adobe.mt.translate.Main",["adobe.TranslateApp"],function(a){return jive.oo.Class.extend(function(b,c){this.init=function(f){f.resourceRoot="/plugins/machine-translation/resources";var e=new a(f);this.addTranslateLinks(e);var d=this;jive.rte.renderedContent.addListener("renderedContent",function(g){if(g&&"jive-thread-messages-container"===$j(g).attr("id")){d.addTranslateLinks(e)}})};b.addTranslateLinks=function(e){var d=this;$j(".j-thread-post").each(function(){var f=[],g=$j("<li/>");if($j(this).parents("#jive-replies").size()==0){f=[{selector:".js-original-header h1",showAttribution:false},{selector:".j-original-message .jive-rendered-content",showAttribution:true}]}else{f=[{selector:"#"+$j(this).attr("id")+" .jive-rendered-content",showAttribution:true}]}e.addTranslatableRegion(g,f);$j("footer ul",this).append(g)})}})});var Dummy={};Dummy.translate=function(c,a,b){console.log("Translating content: "+a+"/"+c+": ");console.log(b.html());console.log("----")};(function(e){if(!e.support.cors&&e.ajaxTransport&&window.XDomainRequest){var f=/^https?:\/\//i;var g=/^get|post$/i;var d=new RegExp("^"+location.protocol,"i");var a=/text\/html/i;var c=/\/json/i;var b=/\/xml/i;e.ajaxTransport("* text html xml json",function(i,l,j){if(i.crossDomain&&i.async&&g.test(i.type)&&f.test(i.url)&&d.test(i.url)){var h=null;var k=(l.dataType||"").toLowerCase();return{send:function(o,n){h=new XDomainRequest();if(/^\d+$/.test(l.timeout)){h.timeout=l.timeout}h.ontimeout=function(){n(500,"timeout")};h.onload=function(){var u="Content-Length: "+h.responseText.length+"\r\nContent-Type: "+h.contentType;var p={code:200,message:"success"};var r={text:h.responseText};try{if(k==="html"||a.test(h.contentType)){r.html=h.responseText}else{if(k==="json"||(k!=="text"&&c.test(h.contentType))){try{r.json=e.parseJSON(h.responseText)}catch(t){p.code=500;p.message="parseerror"}}else{if(k==="xml"||(k!=="text"&&b.test(h.contentType))){var s=new ActiveXObject("Microsoft.XMLDOM");s.async=false;try{s.loadXML(h.responseText)}catch(t){s=undefined}if(!s||!s.documentElement||s.getElementsByTagName("parsererror").length){p.code=500;p.message="parseerror";throw"Invalid XML: "+h.responseText}r.xml=s}}}}catch(q){throw q}finally{n(p.code,p.message,r,u)}};h.onprogress=function(){};h.onerror=function(){n(500,"error",{text:h.responseText})};var m="";if(l.data){m=(e.type(l.data)==="string")?l.data:e.param(l.data)}h.open(i.type,i.url);h.send(m)},abort:function(){if(h){h.abort()}}}}})}})(jQuery);define("adobe.TranslateApp",["jquery"],function(d){var i=function(p){d.data(document.body,"TranslateApp-options",p)};i.prototype.addTranslatableRegion=function(q,p){d(q).html(d("<div/>",{"class":"translate-outer-div"}).append(d("<a/>",{href:"#","class":"translate-button",text:"Translate"}).click({translatableRegionSel:p},f)).append(d("<a/>",{href:"#","class":"translate-original-button",style:"display: none",text:"Show Original"}).click({translatableRegionSel:p},e)).append(d("<span/>",{"class":"translate-waiting",style:"display: none",text:"Translating..."})))};function f(r){o();var s=[{label:"Deutsch",code:"de_DE"},{label:"Español",code:"es_ES"},{label:"Français",code:"fr_FR"},{label:"Italiano",code:"it_IT"},{label:"Nederlands",code:"nl_NL"},{label:"Português",code:"pt_BR"},{label:"Svenska",code:"sv_SE"},{label:"English",code:"en_US"}],p,q;d("body").append(g(s,r.data.translatableRegionSel,r.target));p=d(this).offset();p.top=p.top+12;p.left=p.left-10;q=d(window).scrollTop()+d(window).height();if(p.top+d("body .language-dropdown .dropdown ul").first().height()>q){p.top=q-d("body .language-dropdown .dropdown ul").first().height()-12}d("body .language-dropdown").css(p);d("body .language-dropdown .dropdown ul").show();d("body").bind("click.jvtrans",b)}function g(t,s,r){var q='<div class="tw-bs language-dropdown" style="position:absolute; font-size:9pt; font-weight:bold; float:left; font-family: \'adobe-clean\', \'Helvetica Neue\', Arial, sans-serif;z-index:200;">		<div class="dropdown">',p=d("<ul>",{"class":"dropdown-menu",role:"menu","aria-labelledby":"dLabel",html:d("<li>",{role:"presentation","class":"dropdown-header",text:d.data(document.body,"TranslateApp-Select a language")})});d.each(t,function(u,v){p.append(d("<li>",{html:d("<a>",{tabindex:"-1",text:v.label}).click({translatableRegSelector:s},function(w){c(v.code,w.data.translatableRegSelector,r)})}))});return d(q).append(p)}function o(){var p=false;d("body .language-dropdown").each(function(q){d(this).remove();p=true});return p}function b(p){if(!d(p.target).hasClass("translate-button")){o();d("body").unbind("click.jvtrans")}}function j(p,q){a(p);var r="Translation service is temporarily unavailable.";if(q){if(q.indexOf("same language for source and target")!==-1){r="The text could not be translated because it appears to be already in the selected target language."}else{if(q.indexOf("Empty text.")!==-1){r="The text could not be translated because it appears to be empty."}else{if(q.indexOf("LangDetect: Language unrecognized")!==-1){r="Could not determine original language of the text to be translated."}}}}alert(r)}function l(p){var q=d(p).parent();d(".translate-button",q).hide();d(".translate-waiting",q).show()}function n(p){var q=d(p).parent();d(".translate-waiting",q).hide();d(".translate-original-button",q).show()}function a(p){var q=d(p).parent();d(".translate-original-button",q).hide();d(".translate-waiting",q).hide();d(".translate-button",q).show()}function m(s){var u="",q=180000,t,r,p;p=d.data(document.body,"TranslateApp-options");if(typeof p.mt_service_url==="undefined"||p.mt_service_url===null||p.mt_service_url===""){u="//cls.adobe.com/CLS/rest/MTEngine/StringTranslation/json";t=window.location.host;if(t.indexOf(".dev.adobe.")!=-1||t.indexOf(".corp.adobe")!=-1||t.indexOf(".dev0")!=-1||t.indexOf(".qa0")!=-1||t.indexOf(".pr0")!=-1||t.indexOf("day.adobe.com")!=-1||t.indexOf("stage.")!=-1||t.indexOf("stage2.")!=-1||t.indexOf("staging.")!=-1){u="//cls.stage.adobe.com/CLS/rest/MTEngine/StringTranslation/json"}}else{u=p.mt_service_url}if(typeof p.service_timeout!=="undefined"&&p.service_timeout!==null&&p.service_timeout!==""){r=Number(i.options.service_timeout);if(!isNaN(r)){q=r}}s.url=u;s.timeout=q;s.contentType="application/x-www-form-urlencoded; charset=UTF-8";return d.ajax(s)}function k(t,p,s,v){p.data("TranslateApp-Original",p.html());var w="",u,r,q;if(v){u=t.StringTranslation.EngineName;q=d.data(document.body,"TranslateApp-options");r="images/MSTIcon24.png";if(typeof q.resourceRoot!="undefined"&&q.resourceRoot!=null){r=q.resourceRoot+"/"+r}w='<br/><p class="accordion-adobe-home-featured-adobegrey"><img src="'+r+'" style="vertical-align:middle;"/>&nbsp;&nbsp;'+d.data(document.body,"TranslateApp-Translations by")+" Microsoft® Translator</p>"}p.html(t.StringTranslation.TranslatedText+w)}function c(s,r,p){if(typeof omniture_translate=="function"){omniture_translate(s)}var q=[];d.each(r,function(t,u){d(u.selector).each(function(){var v=d(this);q.push(m({context:document.body,data:{to:s,str:v.html()},type:"POST",beforeSend:function(w){l(p)}}).then(function(z,w,x){if(z!=null&&z.StringTranslation.Status=="Success"){return d.Deferred().resolve(z,w,x,function(){k(z,v,s,u.showAttribution)}).promise()}else{var y="General Failure";if(z!=null&&typeof z.StringTranslation!="undefined"&&typeof z.StringTranslation.Status!="undefined"){y=z.StringTranslation.Status}return d.Deferred().reject(z,y,x).promise()}}))})});d.when.apply(d,d.map(q,function(u){var t=d.Deferred();u.always(function(){t.resolve(arguments)});return t.promise()})).done(function(){var t=false,v=null,u;for(u=0;u<arguments.length;u++){if(arguments[u][1]=="success"||arguments[u][1]=="notmodified"){}else{v=arguments[u][1];t=true;break}}if(t){j(p,v)}else{for(u=0;u<arguments.length;u++){arguments[u][3]()}n(p)}});return"done"}function e(r){var q=r.data.translatableRegionSel,p=r.target;d.each(q,function(s,t){d(t.selector).each(function(u,w){var v=d(w);v.html(v.data("TranslateApp-Original"))})});a(p)}function h(q){if(q==null){q="en_US"}var p={en_US:[{label:"Translate",value:"Translate"},{label:"Show original",value:"Show original"},{label:"Select a language",value:"Select a language"},{label:"Translation service not available",value:"Translation service not available"},{label:"Translations by",value:"Translations by"}]};d.each(p[q],function(r,s){d.data(document.body,"TranslateApp-"+s.label,s.value)})}d(function(){d.data(document.body,"TranslateApp-locale","en_US");h(d.data(document.body,"TranslateApp-locale"))});return i});
;
/**
 *
 *  Base64 encode / decode
 *  http://www.webtoolkit.info/
 *
 **/

var Base64 = {

    // private property
    _keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

    // public method for encoding
    encode : function (input) {
        var output = "";
        var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
        var i = 0;

        input = Base64._utf8_encode(input);

        while (i < input.length) {

            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);

            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;

            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }

            output = output +
                this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
                this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

        }

        return output;
    },

    // public method for decoding
    decode : function (input) {
        var output = "";
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;

        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

        while (i < input.length) {

            enc1 = this._keyStr.indexOf(input.charAt(i++));
            enc2 = this._keyStr.indexOf(input.charAt(i++));
            enc3 = this._keyStr.indexOf(input.charAt(i++));
            enc4 = this._keyStr.indexOf(input.charAt(i++));

            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;

            output = output + String.fromCharCode(chr1);

            if (enc3 != 64) {
                output = output + String.fromCharCode(chr2);
            }
            if (enc4 != 64) {
                output = output + String.fromCharCode(chr3);
            }

        }

        output = Base64._utf8_decode(output);

        return output;

    },

    // private method for UTF-8 encoding
    _utf8_encode : function (string) {
        string = string.replace(/\r\n/g,"\n");
        var utftext = "";

        for (var n = 0; n < string.length; n++) {

            var c = string.charCodeAt(n);

            if (c < 128) {
                utftext += String.fromCharCode(c);
            }
            else if((c > 127) && (c < 2048)) {
                utftext += String.fromCharCode((c >> 6) | 192);
                utftext += String.fromCharCode((c & 63) | 128);
            }
            else {
                utftext += String.fromCharCode((c >> 12) | 224);
                utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                utftext += String.fromCharCode((c & 63) | 128);
            }

        }

        return utftext;
    },

    // private method for UTF-8 decoding
    _utf8_decode : function (utftext) {
        var string = "";
        var i = 0;
        var c = c1 = c2 = 0;

        while ( i < utftext.length ) {

            c = utftext.charCodeAt(i);

            if (c < 128) {
                string += String.fromCharCode(c);
                i++;
            }
            else if((c > 191) && (c < 224)) {
                c2 = utftext.charCodeAt(i+1);
                string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
                i += 2;
            }
            else {
                c2 = utftext.charCodeAt(i+1);
                c3 = utftext.charCodeAt(i+2);
                string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
                i += 3;
            }

        }

        return string;
    }

}
;
/**
 * Created by: sukamat
 * Date: 2/3/14
 *
 **/

var A_SSO = {
    idp_endpoint: 'https://adobeid-na1.services.adobe.com/ims',
    data: {
        client_id: 'forums1',
        scope: 'AdobeID,openid',
        rm_time: 14*24,
        gen_time: 4
    },

    checkCookieForRedirect: function() {
        if (this.hasCookie("WCDServer") || this.hasCookie("RengaRMT")) {
            this.imsCheck();
        }
    },


    imsCheck: function() {
        $j.ajax({
            url: this.idp_endpoint + "/check/v1/token",
            timeout: 25000,
            dataType: 'jsonp',
            data: {
                client_id: this.data.client_id,
                scope: this.data.scope
            },
            success: function (response) {
                // logout if ims cookie is invalid
                if (response.hasOwnProperty('error')) {
                    var ref = document.referrer;
                    if (ref!=null && ref.length !=0 && ref.indexOf("/adobe_login")==-1) {
                        window.location.replace(ref);
                    } else {
                        window.location.replace("https://"+document.domain);
                    }
                }
            },
            error: function(xhr, status, error) {
                console.log(error);
            }
        });
    },

    hasCookie: function (cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i<ca.length; i++)
        {
            var c = ca[i].trim();
            if (c.indexOf(name)==0) return true;
        }
        return false;
    },

    setCookie: function(name, value, hours) {
        var expires = "";

        if (hours) {
            var date = new Date();
            date.setTime(date.getTime() + (hours * 60 * 60 * 1000));
            expires = "; expires=" + date.toGMTString();
        }
        document.cookie = name + "=" + value + expires + "; path=/; secure";
    },

    getCookie: function(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        var i = 0;

        for (i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') { c = c.substring(1, c.length); }
            if (c.indexOf(nameEQ) === 0) { return c.substring(nameEQ.length, c.length); }
        }

        return null;
    }


};
;
/**
 *
 * @depends path=/plugins/adobe-sso/resources/script/wtk.base64.js
 * @depends path=/plugins/adobe-sso/resources/script/sso_redirect.js
 *
 */
define('jive.adobe.sso.Main', [], function() {
    return jive.oo.Class.extend(function(protect, _super) {

        this.init = function(options) {
            if (typeof options.imsServer != 'undefined' && options.imsServer != null && options.imsServer != '') {
                A_SSO.idp_endpoint = options.imsServer + '/ims';
            }
            A_SSO.checkCookieForRedirect();
        };
    });
});
;
// This file was automatically generated from image_nav.soy.
// Please don't edit this file by hand.

goog.provide('jive.widget.imagenav.controls');
goog.provide('jive.widget.imagenav.main');
goog.provide('jive.widget.imagenav.nav');
goog.provide('jive.widget.imagenav.noResults');
goog.provide('jive.widget.imagenav.noResultsWithCreateLink');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.imagelinks.dynamicImageLinkList');
goog.require('jive.shared.soy.resourceInlineJs');


jive.widget.imagenav.main = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.size == 2) {
    output.append('<div class="j-carousel js-image-nav" id="js-image-nav-frame_', soy.$$escapeHtml(opt_data.widgetFrameID), '"></div>');
    jive.shared.soy.resourceInlineJs({code: '$j(function() {require([\'jive.ImageNav.Main\'], function(M) {M({widgetFrameID: ' + soy.$$escapeHtml(opt_data.widgetFrameID) + ', widgetEditMode: ' + soy.$$escapeHtml(opt_data.widgetEditMode) + ', canEditCarouselContainer: ' + soy.$$escapeHtml(opt_data.canEditCarouselContainer) + ((opt_data.containerID) ? ', containerID: ' + soy.$$escapeHtml(opt_data.containerID) + ',' : '') + ((opt_data.containerType) ? ' containerType: ' + soy.$$escapeHtml(opt_data.containerType) + ' ' : '') + '});});});'}, output);
  } else {
    output.append('<div class="j-widget-error jive-warn-box" aria-live="polite" aria-atomic="true"><div><span class="jive-icon-med jive-icon-warn"></span>', soy.$$escapeJsString(jive.i18n.i18nText(jive.i18n.getMsg('widget.too_big'),[])), '</div></div>');
  }
  return opt_sb ? '' : output.toString();
};


jive.widget.imagenav.nav = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  jive.widget.imagenav.controls(opt_data, output);
  jive.imagelinks.dynamicImageLinkList(opt_data, output);
  return opt_sb ? '' : output.toString();
};


jive.widget.imagenav.controls = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-pagination-container js-pagination-container">', (opt_data.canEditCarouselContainer) ? '<span class="j-imagenav-edit"><a href="' + soy.$$escapeHtml(jive.soy.func.buildUrl('/manage-image-nav.jspa?containerType=' + opt_data.containerType + '&containerID=' + opt_data.containerID + '')) + '">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('widget.image.nav.edit.link'),[])) + '</a></span>' : '', '</div>');
  return opt_sb ? '' : output.toString();
};


jive.widget.imagenav.noResults = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('widget.image.nav.no_results.text'),[])));
  return opt_sb ? '' : output.toString();
};


jive.widget.imagenav.noResultsWithCreateLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('widget.image.nav.no_results.text'),[])), '<br/><br/>', (opt_data.canEditCarouselContainer) ? '<a class="j-btn-global j-add-link" href="' + soy.$$escapeHtml(jive.soy.func.buildUrl('/edit-image-link.jspa?containerType=' + opt_data.containerType + '&containerID=' + opt_data.containerID + '')) + '">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('widget.image.nav.add.link'),[])) + '</a>' : '');
  return opt_sb ? '' : output.toString();
};

;
jive.namespace('ImageNav');

/**
 * @depends template=jive.widget.imagenav.nav
 * @depends template=jive.widget.imagenav.noResults
 * @depends template=jive.widget.imagenav.noResultsWithCreateLink
 */
define('jive.ImageNav.Main', ['apps/shared/models/core_deferred'], function(core) {
	return function(options) {
		var $imageNav = $j('#js-image-nav-frame_' + options.widgetFrameID);
		
		if(options.containerID) {
			initializeLinks();
		} else {
			$imageNav.html(jive.widget.imagenav.noResults());
		}
		
		function initializeLinks() {
			core.getObject(options.containerType, options.containerID).pipe(function(container) {
				var filters = { 'filters': 'place(' + container.resources.self.ref + ')'};
				return core.runQuery(osapi.jive.corev3.slides.get(filters));
			}).pipe(core.slurp).pipe(displayLinks, function() {
				console.log('getSlides failed');
			});
		}
		
		function displayLinks(slides) {
			if(slides.length > 0) {
				var rows = [];
				if(slides.length <= 4) {
					//one row
					rows.push(slides);
				} else if (slides.length <= 6) {
					//three items in first row
					//remaining items in second
					rows.push(slides.slice(0, 3));
					rows.push(slides.slice(3));
				} else if (slides.length <= 8) {
					//four items in first row
					//remaining items in second
					rows.push(slides.slice(0, 4));
					rows.push(slides.slice(4));
				}
				
				$imageNav.html(jive.widget.imagenav.nav({
					rows: rows,
					containerID: options.containerID,
					containerType: options.containerType,
					canEditCarouselContainer: options.canEditCarouselContainer
				}));
				
				initNav();
				$j(window).resize(function() {
					if(!$j.browser.msie) {
						initNav();
					}
				});
				
				initHoverText();
			} else if (!options.widgetEditMode) {
				$imageNav.html(jive.widget.imagenav.noResultsWithCreateLink({
					containerID: options.containerID,
					containerType: options.containerType,
					canEditCarouselContainer: options.canEditCarouselContainer
				}));
			} else {
				$imageNav.html(jive.widget.imagenav.noResults());
			}
		}
		
		function initNav() {
			
		}
		
		function initHoverText() {
			
		}
	};
});
;
// This file was automatically generated from manage_image_nav.soy.
// Please don't edit this file by hand.

goog.provide('jive.imagenav.imageLinkManageFragment');
goog.provide('jive.imagenav.manage');
goog.provide('jive.imagenav.notFound');
goog.provide('jive.imagenav.publishedImageLinkList');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.imagelinks.imageLink');


jive.imagenav.manage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<head><title>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('image_nav.manage.title'),[])), ' "', soy.$$escapeHtml(opt_data.containerName), '"</title></head><body class="j-slide-manage"><header><h3>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('image_nav.manage.title'),[])), ' "<a href="', soy.$$escapeHtml(opt_data.containerUrl), '">', soy.$$escapeHtml(opt_data.containerName), '</a>"</h3></header><div class="j-box j-enhanced"><div id="published-images" class="js-published-image-links"><header>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('image_nav.manage.introActive.text'),[opt_data.containerName])), '</header><div class="js-image-link-list"></div></div></div><script>$j(function(){require([\'jive.ImageNav.Manage.Main\'], function(M) {M({containerType: \'', soy.$$escapeHtml(opt_data.containerType), '\', containerId: \'', soy.$$escapeHtml(opt_data.containerId), '\'});});});<\/script></body>');
  return opt_sb ? '' : output.toString();
};


jive.imagenav.publishedImageLinkList = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ol class="j-slides js-image-links"><li class="j-create-image-link js-create-image-link" ', (! opt_data.createButton) ? 'style="display: none;"' : '', '><div class="j-slide"><span><a class="j-btn-global" href="', soy.$$escapeHtml(jive.soy.func.buildUrl('/edit-image-link.jspa?containerType=' + opt_data.containerType + '&containerID=' + opt_data.containerId + '')), '">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('image_nav.manage.add.link'),[])), '</a></span></div></li>');
  var slideList30 = opt_data.slides;
  var slideListLen30 = slideList30.length;
  for (var slideIndex30 = 0; slideIndex30 < slideListLen30; slideIndex30++) {
    var slideData30 = slideList30[slideIndex30];
    output.append('<li class="j-slide-item js-image-link-item">');
    jive.imagelinks.imageLink({slide: slideData30}, output);
    jive.imagenav.imageLinkManageFragment(soy.$$augmentMap(opt_data, {slide: slideData30}), output);
    output.append('</li>');
  }
  output.append('</ol>');
  return opt_sb ? '' : output.toString();
};


jive.imagenav.imageLinkManageFragment = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<footer><div class="j-actions"><a href="', soy.$$escapeHtml(jive.soy.func.buildUrl('/edit-image-link.jspa?slideId=' + opt_data.slide.id + '&containerType=' + opt_data.containerType + '&containerID=' + opt_data.containerId)), '" class="js-editLink">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('image_nav.manage.edit.title'),[])), '<span class="j-508-label">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.image.nav.link'),[])), ' ', soy.$$filterNoAutoescape(opt_data.slide.subject), '</span></a><a href="#" class="js-deleteLink">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('image_nav.manage.delete.title'),[])), '<span class="j-508-label">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.image.nav.link'),[])), ' ', soy.$$filterNoAutoescape(opt_data.slide.subject), '</span></a></div></footer>');
  return opt_sb ? '' : output.toString();
};


jive.imagenav.notFound = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<tr><td>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('image_nav.manage.not_found.title'),[])), '</td></tr>');
  return opt_sb ? '' : output.toString();
};

;
/*
 * jQuery UI Sortable 1.9.2
 * http://jqueryui.com
 *
 * Copyright 2012 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/sortable/
 *
 * Depends:
 * @depends path=/resources/scripts/jquery/ui/jquery.ui.core.js
 * @depends path=/resources/scripts/jquery/ui/jquery.ui.mouse.js
 * @depends path=/resources/scripts/jquery/ui/jquery.ui.widget.js
 */
(function(a,b){a.widget("ui.sortable",a.ui.mouse,{version:"1.9.2",widgetEventPrefix:"sort",ready:false,options:{appendTo:"parent",axis:false,connectWith:false,containment:false,cursor:"auto",cursorAt:false,dropOnEmpty:true,forcePlaceholderSize:false,forceHelperSize:false,grid:false,handle:false,helper:"original",items:"> *",opacity:false,placeholder:false,revert:false,scroll:true,scrollSensitivity:20,scrollSpeed:20,scope:"default",tolerance:"intersect",zIndex:1000},_create:function(){var c=this.options;this.containerCache={};this.element.addClass("ui-sortable");this.refresh();this.floating=this.items.length?c.axis==="x"||(/left|right/).test(this.items[0].item.css("float"))||(/inline|table-cell/).test(this.items[0].item.css("display")):false;this.offset=this.element.offset();this._mouseInit();this.ready=true},_destroy:function(){this.element.removeClass("ui-sortable ui-sortable-disabled");this._mouseDestroy();for(var c=this.items.length-1;c>=0;c--){this.items[c].item.removeData(this.widgetName+"-item")}return this},_setOption:function(c,d){if(c==="disabled"){this.options[c]=d;this.widget().toggleClass("ui-sortable-disabled",!!d)}else{a.Widget.prototype._setOption.apply(this,arguments)}},_mouseCapture:function(f,g){var e=this;if(this.reverting){return false}if(this.options.disabled||this.options.type=="static"){return false}this._refreshItems(f);var d=null,c=a(f.target).parents().each(function(){if(a.data(this,e.widgetName+"-item")==e){d=a(this);return false}});if(a.data(f.target,e.widgetName+"-item")==e){d=a(f.target)}if(!d){return false}if(this.options.handle&&!g){var h=false;a(this.options.handle,d).find("*").andSelf().each(function(){if(this==f.target){h=true}});if(!h){return false}}this.currentItem=d;this._removeCurrentsFromItems();return true},_mouseStart:function(e,f,c){var g=this.options;this.currentContainer=this;this.refreshPositions();this.helper=this._createHelper(e);this._cacheHelperProportions();this._cacheMargins();this.scrollParent=this.helper.scrollParent();this.offset=this.currentItem.offset();this.offset={top:this.offset.top-this.margins.top,left:this.offset.left-this.margins.left};a.extend(this.offset,{click:{left:e.pageX-this.offset.left,top:e.pageY-this.offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset()});this.helper.css("position","absolute");this.cssPosition=this.helper.css("position");this.originalPosition=this._generatePosition(e);this.originalPageX=e.pageX;this.originalPageY=e.pageY;(g.cursorAt&&this._adjustOffsetFromHelper(g.cursorAt));this.domPosition={prev:this.currentItem.prev()[0],parent:this.currentItem.parent()[0]};if(this.helper[0]!=this.currentItem[0]){this.currentItem.hide()}this._createPlaceholder();if(g.containment){this._setContainment()}if(g.cursor){if(a("body").css("cursor")){this._storedCursor=a("body").css("cursor")}a("body").css("cursor",g.cursor)}if(g.opacity){if(this.helper.css("opacity")){this._storedOpacity=this.helper.css("opacity")}this.helper.css("opacity",g.opacity)}if(g.zIndex){if(this.helper.css("zIndex")){this._storedZIndex=this.helper.css("zIndex")}this.helper.css("zIndex",g.zIndex)}if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){this.overflowOffset=this.scrollParent.offset()}this._trigger("start",e,this._uiHash());if(!this._preserveHelperProportions){this._cacheHelperProportions()}if(!c){for(var d=this.containers.length-1;d>=0;d--){this.containers[d]._trigger("activate",e,this._uiHash(this))}}if(a.ui.ddmanager){a.ui.ddmanager.current=this}if(a.ui.ddmanager&&!g.dropBehaviour){a.ui.ddmanager.prepareOffsets(this,e)}this.dragging=true;this.helper.addClass("ui-sortable-helper");this._mouseDrag(e);return true},_mouseDrag:function(g){this.position=this._generatePosition(g);this.positionAbs=this._convertPositionTo("absolute");if(!this.lastPositionAbs){this.lastPositionAbs=this.positionAbs}if(this.options.scroll){var h=this.options,c=false;if(this.scrollParent[0]!=document&&this.scrollParent[0].tagName!="HTML"){if((this.overflowOffset.top+this.scrollParent[0].offsetHeight)-g.pageY<h.scrollSensitivity){this.scrollParent[0].scrollTop=c=this.scrollParent[0].scrollTop+h.scrollSpeed}else{if(g.pageY-this.overflowOffset.top<h.scrollSensitivity){this.scrollParent[0].scrollTop=c=this.scrollParent[0].scrollTop-h.scrollSpeed}}if((this.overflowOffset.left+this.scrollParent[0].offsetWidth)-g.pageX<h.scrollSensitivity){this.scrollParent[0].scrollLeft=c=this.scrollParent[0].scrollLeft+h.scrollSpeed}else{if(g.pageX-this.overflowOffset.left<h.scrollSensitivity){this.scrollParent[0].scrollLeft=c=this.scrollParent[0].scrollLeft-h.scrollSpeed}}}else{if(g.pageY-a(document).scrollTop()<h.scrollSensitivity){c=a(document).scrollTop(a(document).scrollTop()-h.scrollSpeed)}else{if(a(window).height()-(g.pageY-a(document).scrollTop())<h.scrollSensitivity){c=a(document).scrollTop(a(document).scrollTop()+h.scrollSpeed)}}if(g.pageX-a(document).scrollLeft()<h.scrollSensitivity){c=a(document).scrollLeft(a(document).scrollLeft()-h.scrollSpeed)}else{if(a(window).width()-(g.pageX-a(document).scrollLeft())<h.scrollSensitivity){c=a(document).scrollLeft(a(document).scrollLeft()+h.scrollSpeed)}}}if(c!==false&&a.ui.ddmanager&&!h.dropBehaviour){a.ui.ddmanager.prepareOffsets(this,g)}}this.positionAbs=this._convertPositionTo("absolute");if(!this.options.axis||this.options.axis!="y"){this.helper[0].style.left=this.position.left+"px"}if(!this.options.axis||this.options.axis!="x"){this.helper[0].style.top=this.position.top+"px"}for(var e=this.items.length-1;e>=0;e--){var f=this.items[e],d=f.item[0],j=this._intersectsWithPointer(f);if(!j){continue}if(f.instance!==this.currentContainer){continue}if(d!=this.currentItem[0]&&this.placeholder[j==1?"next":"prev"]()[0]!=d&&!a.contains(this.placeholder[0],d)&&(this.options.type=="semi-dynamic"?!a.contains(this.element[0],d):true)){this.direction=j==1?"down":"up";if(this.options.tolerance=="pointer"||this._intersectsWithSides(f)){this._rearrange(g,f)}else{break}this._trigger("change",g,this._uiHash());break}}this._contactContainers(g);if(a.ui.ddmanager){a.ui.ddmanager.drag(this,g)}this._trigger("sort",g,this._uiHash());this.lastPositionAbs=this.positionAbs;return false},_mouseStop:function(d,e){if(!d){return}if(a.ui.ddmanager&&!this.options.dropBehaviour){a.ui.ddmanager.drop(this,d)}if(this.options.revert){var c=this;var f=this.placeholder.offset();this.reverting=true;a(this.helper).animate({left:f.left-this.offset.parent.left-this.margins.left+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollLeft),top:f.top-this.offset.parent.top-this.margins.top+(this.offsetParent[0]==document.body?0:this.offsetParent[0].scrollTop)},parseInt(this.options.revert,10)||500,function(){c._clear(d)})}else{this._clear(d,e)}return false},cancel:function(){if(this.dragging){this._mouseUp({target:null});if(this.options.helper=="original"){this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else{this.currentItem.show()}for(var c=this.containers.length-1;c>=0;c--){this.containers[c]._trigger("deactivate",null,this._uiHash(this));if(this.containers[c].containerCache.over){this.containers[c]._trigger("out",null,this._uiHash(this));this.containers[c].containerCache.over=0}}}if(this.placeholder){if(this.placeholder[0].parentNode){this.placeholder[0].parentNode.removeChild(this.placeholder[0])}if(this.options.helper!="original"&&this.helper&&this.helper[0].parentNode){this.helper.remove()}a.extend(this,{helper:null,dragging:false,reverting:false,_noFinalSort:null});if(this.domPosition.prev){a(this.domPosition.prev).after(this.currentItem)}else{a(this.domPosition.parent).prepend(this.currentItem)}}return this},serialize:function(e){var c=this._getItemsAsjQuery(e&&e.connected);var d=[];e=e||{};a(c).each(function(){var f=(a(e.item||this).attr(e.attribute||"id")||"").match(e.expression||(/(.+)[-=_](.+)/));if(f){d.push((e.key||f[1]+"[]")+"="+(e.key&&e.expression?f[1]:f[2]))}});if(!d.length&&e.key){d.push(e.key+"=")}return d.join("&")},toArray:function(e){var c=this._getItemsAsjQuery(e&&e.connected);var d=[];e=e||{};c.each(function(){d.push(a(e.item||this).attr(e.attribute||"id")||"")});return d},_intersectsWith:function(m){var e=this.positionAbs.left,d=e+this.helperProportions.width,k=this.positionAbs.top,j=k+this.helperProportions.height;var f=m.left,c=f+m.width,n=m.top,i=n+m.height;var o=this.offset.click.top,h=this.offset.click.left;var g=(k+o)>n&&(k+o)<i&&(e+h)>f&&(e+h)<c;if(this.options.tolerance=="pointer"||this.options.forcePointerForContainers||(this.options.tolerance!="pointer"&&this.helperProportions[this.floating?"width":"height"]>m[this.floating?"width":"height"])){return g}else{return(f<e+(this.helperProportions.width/2)&&d-(this.helperProportions.width/2)<c&&n<k+(this.helperProportions.height/2)&&j-(this.helperProportions.height/2)<i)}},_intersectsWithPointer:function(e){var f=(this.options.axis==="x")||a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,e.top,e.height),d=(this.options.axis==="y")||a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,e.left,e.width),h=f&&d,c=this._getDragVerticalDirection(),g=this._getDragHorizontalDirection();if(!h){return false}return this.floating?(((g&&g=="right")||c=="down")?2:1):(c&&(c=="down"?2:1))},_intersectsWithSides:function(f){var d=a.ui.isOverAxis(this.positionAbs.top+this.offset.click.top,f.top+(f.height/2),f.height),e=a.ui.isOverAxis(this.positionAbs.left+this.offset.click.left,f.left+(f.width/2),f.width),c=this._getDragVerticalDirection(),g=this._getDragHorizontalDirection();if(this.floating&&g){return((g=="right"&&e)||(g=="left"&&!e))}else{return c&&((c=="down"&&d)||(c=="up"&&!d))}},_getDragVerticalDirection:function(){var c=this.positionAbs.top-this.lastPositionAbs.top;return c!=0&&(c>0?"down":"up")},_getDragHorizontalDirection:function(){var c=this.positionAbs.left-this.lastPositionAbs.left;return c!=0&&(c>0?"right":"left")},refresh:function(c){this._refreshItems(c);this.refreshPositions();return this},_connectWith:function(){var c=this.options;return c.connectWith.constructor==String?[c.connectWith]:c.connectWith},_getItemsAsjQuery:function(h){var c=[];var e=[];var g=this._connectWith();if(g&&h){for(var f=g.length-1;f>=0;f--){var l=a(g[f]);for(var d=l.length-1;d>=0;d--){var k=a.data(l[d],this.widgetName);if(k&&k!=this&&!k.options.disabled){e.push([a.isFunction(k.options.items)?k.options.items.call(k.element):a(k.options.items,k.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),k])}}}}e.push([a.isFunction(this.options.items)?this.options.items.call(this.element,null,{options:this.options,item:this.currentItem}):a(this.options.items,this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"),this]);for(var f=e.length-1;f>=0;f--){e[f][0].each(function(){c.push(this)})}return a(c)},_removeCurrentsFromItems:function(){var c=this.currentItem.find(":data("+this.widgetName+"-item)");this.items=a.grep(this.items,function(e){for(var d=0;d<c.length;d++){if(c[d]==e.item[0]){return false}}return true})},_refreshItems:function(c){this.items=[];this.containers=[this];var k=this.items;var g=[[a.isFunction(this.options.items)?this.options.items.call(this.element[0],c,{item:this.currentItem}):a(this.options.items,this.element),this]];var m=this._connectWith();if(m&&this.ready){for(var f=m.length-1;f>=0;f--){var n=a(m[f]);for(var e=n.length-1;e>=0;e--){var h=a.data(n[e],this.widgetName);if(h&&h!=this&&!h.options.disabled){g.push([a.isFunction(h.options.items)?h.options.items.call(h.element[0],c,{item:this.currentItem}):a(h.options.items,h.element),h]);this.containers.push(h)}}}}for(var f=g.length-1;f>=0;f--){var l=g[f][1];var d=g[f][0];for(var e=0,o=d.length;e<o;e++){var p=a(d[e]);p.data(this.widgetName+"-item",l);k.push({item:p,instance:l,width:0,height:0,left:0,top:0})}}},refreshPositions:function(c){if(this.offsetParent&&this.helper){this.offset.parent=this._getParentOffset()}for(var e=this.items.length-1;e>=0;e--){var f=this.items[e];if(f.instance!=this.currentContainer&&this.currentContainer&&f.item[0]!=this.currentItem[0]){continue}var d=this.options.toleranceElement?a(this.options.toleranceElement,f.item):f.item;if(!c){f.width=d.outerWidth();f.height=d.outerHeight()}var g=d.offset();f.left=g.left;f.top=g.top}if(this.options.custom&&this.options.custom.refreshContainers){this.options.custom.refreshContainers.call(this)}else{for(var e=this.containers.length-1;e>=0;e--){var g=this.containers[e].element.offset();this.containers[e].containerCache.left=g.left;this.containers[e].containerCache.top=g.top;this.containers[e].containerCache.width=this.containers[e].element.outerWidth();this.containers[e].containerCache.height=this.containers[e].element.outerHeight()}}return this},_createPlaceholder:function(d){d=d||this;var e=d.options;if(!e.placeholder||e.placeholder.constructor==String){var c=e.placeholder;e.placeholder={element:function(){var f=a(document.createElement(d.currentItem[0].nodeName)).addClass(c||d.currentItem[0].className+" ui-sortable-placeholder").removeClass("ui-sortable-helper")[0];if(!c){f.style.visibility="hidden"}return f},update:function(f,g){if(c&&!e.forcePlaceholderSize){return}if(!g.height()){g.height(d.currentItem.innerHeight()-parseInt(d.currentItem.css("paddingTop")||0,10)-parseInt(d.currentItem.css("paddingBottom")||0,10))}if(!g.width()){g.width(d.currentItem.innerWidth()-parseInt(d.currentItem.css("paddingLeft")||0,10)-parseInt(d.currentItem.css("paddingRight")||0,10))}}}}d.placeholder=a(e.placeholder.element.call(d.element,d.currentItem));d.currentItem.after(d.placeholder);e.placeholder.update(d,d.placeholder)},_contactContainers:function(c){var e=null,n=null;for(var h=this.containers.length-1;h>=0;h--){if(a.contains(this.currentItem[0],this.containers[h].element[0])){continue}if(this._intersectsWith(this.containers[h].containerCache)){if(e&&a.contains(this.containers[h].element[0],e.element[0])){continue}e=this.containers[h];n=h}else{if(this.containers[h].containerCache.over){this.containers[h]._trigger("out",c,this._uiHash(this));this.containers[h].containerCache.over=0}}}if(!e){return}if(this.containers.length===1){this.containers[n]._trigger("over",c,this._uiHash(this));this.containers[n].containerCache.over=1}else{var m=10000;var k=null;var l=this.containers[n].floating?"left":"top";var o=this.containers[n].floating?"width":"height";var d=this.positionAbs[l]+this.offset.click[l];for(var f=this.items.length-1;f>=0;f--){if(!a.contains(this.containers[n].element[0],this.items[f].item[0])){continue}if(this.items[f].item[0]==this.currentItem[0]){continue}var p=this.items[f].item.offset()[l];var g=false;if(Math.abs(p-d)>Math.abs(p+this.items[f][o]-d)){g=true;p+=this.items[f][o]}if(Math.abs(p-d)<m){m=Math.abs(p-d);k=this.items[f];this.direction=g?"up":"down"}}if(!k&&!this.options.dropOnEmpty){return}this.currentContainer=this.containers[n];k?this._rearrange(c,k,null,true):this._rearrange(c,null,this.containers[n].element,true);this._trigger("change",c,this._uiHash());this.containers[n]._trigger("change",c,this._uiHash(this));this.options.placeholder.update(this.currentContainer,this.placeholder);this.containers[n]._trigger("over",c,this._uiHash(this));this.containers[n].containerCache.over=1}},_createHelper:function(d){var e=this.options;var c=a.isFunction(e.helper)?a(e.helper.apply(this.element[0],[d,this.currentItem])):(e.helper=="clone"?this.currentItem.clone():this.currentItem);if(!c.parents("body").length){a(e.appendTo!="parent"?e.appendTo:this.currentItem[0].parentNode)[0].appendChild(c[0])}if(c[0]==this.currentItem[0]){this._storedCSS={width:this.currentItem[0].style.width,height:this.currentItem[0].style.height,position:this.currentItem.css("position"),top:this.currentItem.css("top"),left:this.currentItem.css("left")}}if(c[0].style.width==""||e.forceHelperSize){c.width(this.currentItem.width())}if(c[0].style.height==""||e.forceHelperSize){c.height(this.currentItem.height())}return c},_adjustOffsetFromHelper:function(c){if(typeof c=="string"){c=c.split(" ")}if(a.isArray(c)){c={left:+c[0],top:+c[1]||0}}if("left" in c){this.offset.click.left=c.left+this.margins.left}if("right" in c){this.offset.click.left=this.helperProportions.width-c.right+this.margins.left}if("top" in c){this.offset.click.top=c.top+this.margins.top}if("bottom" in c){this.offset.click.top=this.helperProportions.height-c.bottom+this.margins.top}},_getParentOffset:function(){this.offsetParent=this.helper.offsetParent();var c=this.offsetParent.offset();if(this.cssPosition=="absolute"&&this.scrollParent[0]!=document&&a.contains(this.scrollParent[0],this.offsetParent[0])){c.left+=this.scrollParent.scrollLeft();c.top+=this.scrollParent.scrollTop()}if((this.offsetParent[0]==document.body)||(this.offsetParent[0].tagName&&this.offsetParent[0].tagName.toLowerCase()=="html"&&a.ui.ie)){c={top:0,left:0}}return{top:c.top+(parseInt(this.offsetParent.css("borderTopWidth"),10)||0),left:c.left+(parseInt(this.offsetParent.css("borderLeftWidth"),10)||0)}},_getRelativeOffset:function(){if(this.cssPosition=="relative"){var c=this.currentItem.position();return{top:c.top-(parseInt(this.helper.css("top"),10)||0)+this.scrollParent.scrollTop(),left:c.left-(parseInt(this.helper.css("left"),10)||0)+this.scrollParent.scrollLeft()}}else{return{top:0,left:0}}},_cacheMargins:function(){this.margins={left:(parseInt(this.currentItem.css("marginLeft"),10)||0),top:(parseInt(this.currentItem.css("marginTop"),10)||0)}},_cacheHelperProportions:function(){this.helperProportions={width:this.helper.outerWidth(),height:this.helper.outerHeight()}},_setContainment:function(){var f=this.options;if(f.containment=="parent"){f.containment=this.helper[0].parentNode}if(f.containment=="document"||f.containment=="window"){this.containment=[0-this.offset.relative.left-this.offset.parent.left,0-this.offset.relative.top-this.offset.parent.top,a(f.containment=="document"?document:window).width()-this.helperProportions.width-this.margins.left,(a(f.containment=="document"?document:window).height()||document.body.parentNode.scrollHeight)-this.helperProportions.height-this.margins.top]}if(!(/^(document|window|parent)$/).test(f.containment)){var d=a(f.containment)[0];var e=a(f.containment).offset();var c=(a(d).css("overflow")!="hidden");this.containment=[e.left+(parseInt(a(d).css("borderLeftWidth"),10)||0)+(parseInt(a(d).css("paddingLeft"),10)||0)-this.margins.left,e.top+(parseInt(a(d).css("borderTopWidth"),10)||0)+(parseInt(a(d).css("paddingTop"),10)||0)-this.margins.top,e.left+(c?Math.max(d.scrollWidth,d.offsetWidth):d.offsetWidth)-(parseInt(a(d).css("borderLeftWidth"),10)||0)-(parseInt(a(d).css("paddingRight"),10)||0)-this.helperProportions.width-this.margins.left,e.top+(c?Math.max(d.scrollHeight,d.offsetHeight):d.offsetHeight)-(parseInt(a(d).css("borderTopWidth"),10)||0)-(parseInt(a(d).css("paddingBottom"),10)||0)-this.helperProportions.height-this.margins.top]}},_convertPositionTo:function(g,i){if(!i){i=this.position}var e=g=="absolute"?1:-1;var f=this.options,c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,h=(/(html|body)/i).test(c[0].tagName);return{top:(i.top+this.offset.relative.top*e+this.offset.parent.top*e-((this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(h?0:c.scrollTop()))*e)),left:(i.left+this.offset.relative.left*e+this.offset.parent.left*e-((this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():h?0:c.scrollLeft())*e))}},_generatePosition:function(f){var i=this.options,c=this.cssPosition=="absolute"&&!(this.scrollParent[0]!=document&&a.contains(this.scrollParent[0],this.offsetParent[0]))?this.offsetParent:this.scrollParent,j=(/(html|body)/i).test(c[0].tagName);if(this.cssPosition=="relative"&&!(this.scrollParent[0]!=document&&this.scrollParent[0]!=this.offsetParent[0])){this.offset.relative=this._getRelativeOffset()}var e=f.pageX;var d=f.pageY;if(this.originalPosition){if(this.containment){if(f.pageX-this.offset.click.left<this.containment[0]){e=this.containment[0]+this.offset.click.left}if(f.pageY-this.offset.click.top<this.containment[1]){d=this.containment[1]+this.offset.click.top}if(f.pageX-this.offset.click.left>this.containment[2]){e=this.containment[2]+this.offset.click.left}if(f.pageY-this.offset.click.top>this.containment[3]){d=this.containment[3]+this.offset.click.top}}if(i.grid){var h=this.originalPageY+Math.round((d-this.originalPageY)/i.grid[1])*i.grid[1];d=this.containment?(!(h-this.offset.click.top<this.containment[1]||h-this.offset.click.top>this.containment[3])?h:(!(h-this.offset.click.top<this.containment[1])?h-i.grid[1]:h+i.grid[1])):h;var g=this.originalPageX+Math.round((e-this.originalPageX)/i.grid[0])*i.grid[0];e=this.containment?(!(g-this.offset.click.left<this.containment[0]||g-this.offset.click.left>this.containment[2])?g:(!(g-this.offset.click.left<this.containment[0])?g-i.grid[0]:g+i.grid[0])):g}}return{top:(d-this.offset.click.top-this.offset.relative.top-this.offset.parent.top+((this.cssPosition=="fixed"?-this.scrollParent.scrollTop():(j?0:c.scrollTop())))),left:(e-this.offset.click.left-this.offset.relative.left-this.offset.parent.left+((this.cssPosition=="fixed"?-this.scrollParent.scrollLeft():j?0:c.scrollLeft())))}},_rearrange:function(g,f,d,e){d?d[0].appendChild(this.placeholder[0]):f.item[0].parentNode.insertBefore(this.placeholder[0],(this.direction=="down"?f.item[0]:f.item[0].nextSibling));this.counter=this.counter?++this.counter:1;var c=this.counter;this._delay(function(){if(c==this.counter){this.refreshPositions(!e)}})},_clear:function(d,e){this.reverting=false;var f=[];if(!this._noFinalSort&&this.currentItem.parent().length){this.placeholder.before(this.currentItem)}this._noFinalSort=null;if(this.helper[0]==this.currentItem[0]){for(var c in this._storedCSS){if(this._storedCSS[c]=="auto"||this._storedCSS[c]=="static"){this._storedCSS[c]=""}}this.currentItem.css(this._storedCSS).removeClass("ui-sortable-helper")}else{this.currentItem.show()}if(this.fromOutside&&!e){f.push(function(g){this._trigger("receive",g,this._uiHash(this.fromOutside))})}if((this.fromOutside||this.domPosition.prev!=this.currentItem.prev().not(".ui-sortable-helper")[0]||this.domPosition.parent!=this.currentItem.parent()[0])&&!e){f.push(function(g){this._trigger("update",g,this._uiHash())})}if(this!==this.currentContainer){if(!e){f.push(function(g){this._trigger("remove",g,this._uiHash())});f.push((function(g){return function(h){g._trigger("receive",h,this._uiHash(this))}}).call(this,this.currentContainer));f.push((function(g){return function(h){g._trigger("update",h,this._uiHash(this))}}).call(this,this.currentContainer))}}for(var c=this.containers.length-1;c>=0;c--){if(!e){f.push((function(g){return function(h){g._trigger("deactivate",h,this._uiHash(this))}}).call(this,this.containers[c]))}if(this.containers[c].containerCache.over){f.push((function(g){return function(h){g._trigger("out",h,this._uiHash(this))}}).call(this,this.containers[c]));this.containers[c].containerCache.over=0}}if(this._storedCursor){a("body").css("cursor",this._storedCursor)}if(this._storedOpacity){this.helper.css("opacity",this._storedOpacity)}if(this._storedZIndex){this.helper.css("zIndex",this._storedZIndex=="auto"?"":this._storedZIndex)}this.dragging=false;if(this.cancelHelperRemoval){if(!e){this._trigger("beforeStop",d,this._uiHash());for(var c=0;c<f.length;c++){f[c].call(this,d)}this._trigger("stop",d,this._uiHash())}this.fromOutside=false;return false}if(!e){this._trigger("beforeStop",d,this._uiHash())}this.placeholder[0].parentNode.removeChild(this.placeholder[0]);if(this.helper[0]!=this.currentItem[0]){this.helper.remove()}this.helper=null;if(!e){for(var c=0;c<f.length;c++){f[c].call(this,d)}this._trigger("stop",d,this._uiHash())}this.fromOutside=false;return true},_trigger:function(){if(a.Widget.prototype._trigger.apply(this,arguments)===false){this.cancel()}},_uiHash:function(c){var d=c||this;return{helper:d.helper,placeholder:d.placeholder||a([]),position:d.position,originalPosition:d.originalPosition,offset:d.positionAbs,item:d.currentItem,sender:c?c.element:null}}})})(jQuery);
;
/**
 * @depends path=/resources/scripts/jquery/ui/jquery.ui.sortable.js
 * @depends template=jive.imagenav.publishedImageLinkList
 * @depends template=jive.eae.common.jsI18nHelper
 */
define('jive.ImageNav.Manage.Main', ['jquery', 'apps/shared/models/core_deferred'], function($, core) {
	return function(options) {
		var MAX_IMAGES = 8;
		
		var published = [];
		var refMap = [];
		
		populateImageLinks();
		
		function sortKeyComparator(left, right) {
			return right.sortKey - left.sortKey;
		}
		
		function displayPublished(slides) {
			published = slides.sort(sortKeyComparator);
			for(var i = 0; i < slides.length; ++i) {
				refMap[slides[i].resources.self.ref] = slides[i];
			}
			
			var publishedList = jive.imagenav.publishedImageLinkList({
				slides: slides,
				containerId: options.containerId,
				containerType: options.containerType,
				createButton: slides.length < MAX_IMAGES
			});
			
			var $publishedList = $j(".js-published-image-links .js-image-link-list").html(publishedList);
			
			$publishedList.find(".js-image-link .js-image-link-link").click(function() {return false;});
			
			initHover();
			
			$publishedList.find(".js-deleteLink").on("click", deleteHandler);
			
			$(".js-image-links").sortable({
				update: function(evt, ui) {
					scheduleUpdate(200);
				},
				forcePlaceholderSize: true,
				placeholder: 'j-card-placeholder',
				tolerance: 'pointer',
				items: ".js-image-link-item"
			});
		}
		
		function reorderUpdate() {
			var toUpdate = [];
			$j('.js-image-link-list .js-image-link').each(function(index) {
				var ref = $j(this).data('ref');
				var slide = refMap[ref];
				slide.sortKey = -index;
				toUpdate.push(slide);
			});
			
			core.updateAll(toUpdate).done(function() {
				published = Array.prototype.slice.call(arguments, 0);
				published.sort(sortKeyComparator);
				$j.each(published, function() {
					refMap[this.resources.self.ref] = this;
				});
				notifySuccess();
			}).fail(function() {
				console.log("update failed: ", arguments);
			});
		}
		
		function notifySuccess() {
			var saved = jive.eae.common.jsI18nHelper({key: 'global.saved'});
			$j('<p/>').html(saved).message({style: 'success'});
		}
		
		function scheduleUpdate(delay) {
            delay = delay || 2000;
			clearTimeout(scheduleUpdate.timeoutId);
			scheduleUpdate.timeoutId = setTimeout(reorderUpdate, delay);
		}
		
		function populateImageLinks() {
			var spinner = new jive.loader.LoaderView({size: 'big'});
			spinner.prependTo($j(".js-published-image-links"));
			
			core.getObject(options.containerType, options.containerId).then(function(container) {
				var filters = {'filters': 'place(' + container.resources.self.ref + ')' };
				return core.runQuery(function(osapi) {
                    return osapi.jive.corev3.slides.get(filters);
                });
			}).then(core.slurp).then(displayPublished, function() {
				console.log("getSlides failed");
			}).always(function() {
				spinner.destroy();
				spinner.getContent().remove();
			});
		} 
		
		function initHover() {
			$j('.js-published-image-links').find('ol.first').children().hover(function() {
				$j(this).addClass('hover');
			}, function() {
				$j(this).removeClass('hover');
			});
		}
		
		function deleteHandler(evt) {
			var $slide = $j(evt.target).closest('.js-image-link-item').find('.js-image-link');
			var ref = $slide.data('ref');
			var slide = refMap[ref];
			
			core.runQuery(function(osapi) {
                return osapi.jive.corev3.statics.get({htmlRef: slide.image});
            }).then(function(staticObjs) {
				if(staticObjs.length > 0) {
					var imageStatic = staticObjs[0];
					core.runQuery(imageStatic.destroy());
				}
			});
			
			core.runQuery(slide.destroy()).done(function() {
				delete refMap[ref];
				
				published = $j.map(published, function(entry) {
					if(entry.resources.self.ref == ref) {
						return null;
					}
					return entry;
				});
				
				$slide.closest('.js-image-link-item').remove();
			});
			
			if($j('js-create-image-link').is(':hidden')) {
				$j('.js-create-image-link').show();
			}
			
			return false;
		}
	}
});
;
$j(function() {
    var yes = $j('#ask_a_question_looking_for_yes');
    yes.click(function(e) {
        e.preventDefault();
        $j(this).parents('.jive-info-box').fadeOut();
    });
});

;
$j(function() {
    // look for appropriate places to put the widgets, only then do stuff
    if (1 == $j('#socialmedia-root').length) {
        // found an overview widget
        displaySocialWidget('topicWidget');
    } else if (1 == $j('div.j-box-actions').length) {
        // found action sidebar, so there's a good chance we'll do something
        // list of content tab ids on which we allow the big widget
        var onBrowseContent = $j(".j-body-place .j-browse-content").length > 0
        if (onBrowseContent) {
            // ok, we found a tab to use! yay!
            displaySocialWidget('topicBase');
        } else {
            // see if we can find a content page
            // list of content type classes for which we display only social peek widget
            var allowed_content = [ '.jive-body-content-thread', '.doc-page', '.j-blog', '.jive-body-poll','.jive-body-content-video', '.jive-content-header-ideas', 'jive-event'];
            $j.each(allowed_content, function(_, selector) {
                if (1 == $j(selector).length) {
                    displaySocialWidget('content');
                    return false;
                }
            });
        }
    }
});

function displaySocialWidget(widgetType) {
    $j.ajax({
        url: jive.rest.url("/socialmedia/config"),
        dataType: "json",
        data: {limit:'120'},
        error: function(data) {
            if (console.log) {
                console.log("AJAX search request failed. Message: " + data);
            }
        },
        success: function(data) {
            // default share URL shouldn't have params like it would default to otherwise
            data.shareUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
            if ( ('content' == widgetType) && (window.location.pathname.indexOf("message/") != -1) ) {
                var canon = $j('link[rel="canonical"]').attr('href');
                if (-1 != canon.indexOf('#')) {
                    canon = canon.substring(0, canon.indexOf('#'));
                }
                data.shareUrl = window.location.protocol + "//" + window.location.host + canon;
            }

            // facepile uses shareUrl by default, but can optionally use activityStreamUrl
            data.facePileUrl = data.shareUrl;
            if ("true" == data.facePileUseActivityStreamUrl) {
                data.facePileUrl = data.activityStreamUrl;
            }

            // uplevel data to a config variable to make params cleaner in soy
            configData = new Object();
            configData.config = data;
            // add the widget markup
            if ('topicBase' == widgetType) {
                $j('div.j-box-actions').after(socialmedia.displayForTopic(configData));
                runXFBML();
            } else if ('topicWidget' == widgetType) {
                $j('#socialmedia-root').html(socialmedia.displayForTopicWidget(configData));
                runXFBML();
            } else if ('content' == widgetType) {
                $j('div.j-box-actions').after(socialmedia.displayForContent(configData));
            }

            $j.getScript( "https://platform.twitter.com/widgets.js", function() {
                if (console.log) {
                    console.log('widgets.js loaded' );
                }
            });

            $j.getScript( "https://www.google.com/buzz/api/button.js", function() {
                if (console.log) {
                    console.log('button.js loaded');
                }
            });

            $j.getScript( "https://s7.addthis.com/js/250/addthis_widget.js#async=1", function() {
                if (console.log) {
                    console.log('addthis_widget.js loaded');
                }
                addthis.init();
                if (console.log) {
                    console.log('addthis_widget.js init done');
                }
            });


        }
    });

}

function runXFBML() {
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/"+_jive_locale+"/all.js#xfbml=1";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
}


;
/*
 * $Revision$
 * $Date$
 *
 * Copyright (C) 1999-2012 Jive Software. All rights reserved.
 *
 * This software is the proprietary information of Jive Software. Use is subject to license terms.
 */
if (typeof(jive) != "undefined") {

    /**
     * defines a simple Macro interface to mimic the RenderMacro class on the server
     */
    jive.rte.plugin.videomacro = function (shortname, url, macrotag, settingsHuh, displayHuh, paramSets, params,
                                           enabled, button)
    {
        var that = this;

        params = [
            {}
        ];

        /**
         * gets the unique name for this macro
         * i.e. "code" or "youtube"
         */
        this.getName = function () {
            return shortname;
        };

        /**
         * gets the optional url for this macro
         */
        this.getUrl = function () {
            return url;
        };

        /**
         * returns true if it should be a button or not
         */
        this.isButton = function () {
            return button;
        };

        this.isEnabled = function () {
            return enabled;
        };

        this.isShowSettings = function () {
            return settingsHuh;
        };

        /**
         * Display in RTE Insert List?
         */
        this.isShowInMacroList = function () {
            return displayHuh;
        };

        /**
         * returns true if this macro accepts
         * raw text input, like a code macro,
         * or false if it doesn't, like
         * a youtube macro
         */
        this.getMacroType = function () {
            return macrotag;
        };

        /**
         * returns an array of allowed parameters
         */
        this.getAllowedParameters = function () {
            return params;
        };

        this.usesCustomBackground = function () {
            return true;
        };

        /**
         * update the position of $obj to properly display behind ele's content
         * in the RTE
         * @param rte the jive RTE object
         * @param ele the DOM element /inside/ the RTE proper. this should
         * be clear so show through to $obj behind it
         * @param $ele the DOM element /behind/ the RTE that shows rich content
         */
        this.refreshPosition = function (rte, ele, $ele) {
//

            that.updatePreviewContentPosition(ele, $ele); //todo not sure we need this extra call
        };

        this.updatePreviewContentPosition = function (ele, $ele) {
            // get offset inside the RTE
            var t = jive.ext.x.xPageY(ele);
            var l = jive.ext.x.xPageX(ele);

            if ($ele) {

                if ($ele.css("top") != t) {
                    $ele.css("top", t);
                }

                if ($ele.css("left") != l) {
                    $ele.css("left", l);
                }
            }
        };

        /**
         * update the element's display w/ the latest
         * parameter value.
         */
        this.refresh = function (rte, ele) {
            var $ele = rte.getHiddenElementFor($j(ele).attr("_jivemacro_uid"));

            if($ele == null) return;

            if ($ele.data("init") == null) {
                // because this is called *immediately* after the insert macro
                // the browser hasn't actually set the width/height correctly
                // so we need to wait for just a bit before refreshing the graph
                setTimeout(function (rte, ele, $ele) {
                    return function () {
                        that.displayVideo(rte, ele, $ele);
                        that.updatePreviewContentPosition(ele, $ele);
                    }
                }(rte, ele, $ele), 328);
            }
            else {
                that.displayVideo(rte, ele, $ele);
            }
        };

        this.displayVideo = function (rte, ele, $ele) {
            var uid = ele.getAttribute("_jivemacro_uid");

            // fix the legacy elements for id to videoid conversion since ids are stripped
            var $e = $j(ele);
            var _id = $e.attr('_id');
            var _videoid = $e.attr('_videoid');
            if (_id && !_videoid) {
                $e.attr('_videoid', _id);
            }

            var previewImgSrc = ele.getAttribute("_imageURL");
            if (previewImgSrc) {
                $j(ele).width(520)
                    .height(328)
                    .css("background", "transparent");
                $ele.width(520)
                    .height(328)
                    .html("<img src='" + previewImgSrc + "/520'/>");
            }
        };


        this.retrieveInsertionUUID = function ($ele) {
            return $j($ele, '#insertionUUID').attr("id");
        };

        this.getEditorWindowHandle = function () {
            var w;

            if (typeof(window.parent.editor) == "undefined") {
                w = window.parent.tinyMCE.activeEditor.getWin().parent;
            }
            else {
                w = window.parent;
            }
            return w;
        };

        this.doSetResizedDimensions = function (ele, $ele, width, height, superRichContentMaxWidth) {
            $ele.width(superRichContentMaxWidth - 500 > width ? superRichContentMaxWidth - 500 : width);
            $ele.height(height);
            $j(ele).width(superRichContentMaxWidth - 500 > width ? superRichContentMaxWidth - 500 : width);
            $j(ele).height(height);
            $j(ele).attr('src', "/images/tiny_mce3/plugins/alignment/img/spacer.gif");
        }
    }


    // bind to app artifacts in the RTE (RTE itself need not necessarily be visible). So any rendered content.
    if (jive.localexchange) {


        jive.localexchange.addListener("renderedContentWithSelector", function ($renderedContent, opts) {

            $renderedContent.find('div.jive-content-video[data-video-id]').each(function (index, element) {

                var $element = $j(element);

                if ($element.attr('data-video-id') && !$element.attr('data-video-rendered')) {

                    // TODO move it to videos's specific source.js maybe so it's a real MVC and subclasses RestService
                    // get the object data and add the auth token
                    var objectType = $element.attr('data-object-type');
                    var objectID = $element.attr('data-object-id');
                    var videoID = $element.attr('data-video-id');
                    var divID = $element.attr("id");
                    $element.attr("data-video-rendered", "true");
                    getVideoDataAndRender(divID, videoID, objectType, objectID);
                }


            });
        });
    }

}
;
// This file was automatically generated from common.soy.
// Please don't edit this file by hand.

goog.provide('jive.videos.common.activityStreamVideoInfo');
goog.provide('jive.videos.common.description');
goog.provide('jive.videos.common.inboxVideoInfo');
goog.provide('jive.videos.common.noFlash');
goog.provide('jive.videos.common.videoViewActivity');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.shared.soy.resourceInlineJs');


jive.videos.common.description = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<h5><label for="jive-video-editor-container" id="jive-video-description-label">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.description'),[])), '</label></h5>');
  return opt_sb ? '' : output.toString();
};


jive.videos.common.videoViewActivity = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="video-activity"><span>', (opt_data.activity.type == 'view') ? '<span class="jive-icon-sml jive-glyph-edit"></span>' : '', '</span> <span class="j-bullet">&#8226;</span> <span class="j-act-meta font-color-meta">', (opt_data.activity.creationTime) ? soy.$$escapeHtml(opt_data.activity.creationTime) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.less_than_a_minute_ago'),[])), '</span></div>');
  return opt_sb ? '' : output.toString();
};


jive.videos.common.inboxVideoInfo = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-stream-comms-video-info clearfix">');
  jive.shared.soy.resourceInlineJs({code: '$j(function() {getVideoDataAndRender(\'video-' + soy.$$escapeHtml(opt_data.video.videoID) + '\',' + soy.$$escapeHtml(opt_data.video.videoID) + ', ' + soy.$$escapeHtml(opt_data.video.objectType) + ', ' + soy.$$escapeHtml(opt_data.video.videoID) + ', 440, 247, false);});'}, output);
  output.append('<div class="jive-content-body"><div class="jive-content-video"><div class="jive-video-view"><!-- This will insert the embed code into the media div below --><div id=\'video-', soy.$$escapeHtml(opt_data.video.videoID), '\'  class="media { type:\'swf\'}"></div></div></div></div></div>');
  return opt_sb ? '' : output.toString();
};


jive.videos.common.activityStreamVideoInfo = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-stream-comms-video-info clearfix">');
  jive.shared.soy.resourceInlineJs({code: '$j(function() {getVideoThumbnailAndRender(\'video-link-' + soy.$$escapeHtml(opt_data.video.videoID) + '\', ' + soy.$$escapeHtml(opt_data.video.videoID) + ', ' + soy.$$escapeHtml(opt_data.video.objectType) + ', ' + soy.$$escapeHtml(opt_data.video.videoID) + ', 440, 247, true); $j(\'#video-link-' + soy.$$escapeHtml(opt_data.video.videoID) + '\').click(function(e) {var $this = $j(this); require([\'jive.Accessibility\'], function(Accessibility) {Accessibility.pushFocus($this);}); getVideoDataAndRender(\'video-link-' + soy.$$escapeHtml(opt_data.video.videoID) + '\', ' + soy.$$escapeHtml(opt_data.video.videoID) + ', ' + soy.$$escapeHtml(opt_data.video.objectType) + ', ' + soy.$$escapeHtml(opt_data.video.videoID) + ', 440, 247, true); e.preventDefault();});});'}, output);
  output.append('<a href="#" id="video-link-', soy.$$escapeHtml(opt_data.video.videoID), '" ><img src="', soy.$$escapeHtml(opt_data.video.previewImageURL), '/111" width="111" height="70" title="', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('video.preview.image'),[])), '" alt="', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('video.preview.image'),[])), '"/></a></div>');
  return opt_sb ? '' : output.toString();
};


jive.videos.common.noFlash = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id=\'flash-not-installed\' class=\'flash-not-installed\'><h4><span class=\'jive-icon-med jive-icon-warn\'></span>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('video.tips.attention.text'),[])), ' ', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.colon'),[])), '</h4><p>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('video.view.flashWarning.text'),[])), '</p><p><a href=\'http://www.adobe.com/go/getflash\'> ', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('video.view.flashUpdate.link'),[])), '</a></p></div>');
  return opt_sb ? '' : output.toString();
};

;
/*
 * $Revision$
 * $Date$
 *
 * Copyright (C) 1999-2012 Jive Software. All rights reserved.
 *
 * This software is the proprietary information of Jive Software. Use is subject to license terms.
 *
 * @depends template=jive.videos.common.noFlash
 *
 * @depends path=/resources/scripts/jive/i18n.js
 *
 * @depends i18nKeys=video.encoding.text
 */
function renderVideoWithFlash(divID, video) {
    //console.log("renderVideoWithFlash vidID: "+video.videoID);

    var videoID = video.externalID ? "" + video.externalID : '';
    var movie = video.playerBaseURL + '/plugins/player.swf?v=' + videoID + '&auth_token=' + video.authtoken + '&p=' + video.playerName;
    var base = video.playerBaseURL;
    var autoplay = video.autoplay;
    lastAutoplay = autoplay;
    var src = video.playerBaseURL + '/plugins/player.swf?p=' + video.playerName + '&auth_token=' + video.authtoken;
    var watermark = video.watermarkURL ? video.watermarkURL : '';
    lastWatermark = watermark;
    var width = video.width? video.width : 747;
    var height = video.height? video.height : 420;

    var $div, $parent_div;
    var lightboxme = false;

    if (divID) {
        $div = $j('#' + divID);
    }
    // if no div then should create one and lightbox me
    else {
        $div = $j('<div id="as-video-container" class="media { type:\'swf\' }"></div>');
        $parent_div = $j('<div id="lb_image_wrapper" class="jive-modal"><a class="j-modal-close-top close j-icon-close" href="#"><span class="j-close-icon j-ui-elem" role="img"></span></a></div>');
        $parent_div.append($div);
        $j('body').append($parent_div);
        lightboxme = true;
    }

    if ($div.find('object').length > 0) {
        return;
    }

    require(['jquery/jquery.media'], function() {
        var div = $div.media({
            width:     width,
            height:    height,
            flashVersion: '9.0.115.0',
            autoplay: '\'' + autoplay + '\'' ,
            src:  src,
            attrs:     { id: 'embedded_player', tabindex: '0' },  // object/embed attrs
            params:    {
                allowscriptaccess: 'always',
                allowfullscreen: 'true',
                movie: movie,
                base: base,
                bgColor: '#000000',
                quality: 'high',
                wmode: 'opaque'
            }, // object params/embed attrs
            flashvars: {
                v:'0',
                autoplay: autoplay,
                config: '{config:{autoplay:' + autoplay + '}}' ,
                l:'[{video_id:\'' + videoID +'\',logo_file:\''+ watermark + '\'}]'
            },
            caption: false // supress caption text
        });

        if (lightboxme) {
            $parent_div.lightbox_me({
                destroyOnClose: true,
                onClose: function() {
                    $j('#lb_image_wrapper').remove();
                },
                modalCSS : {top:'160px'},
                closeSelector: ".jive-modal-close-top, .close",
                onLoad: function() {

                    if ($j('#embedded_player').length == 0) {
                        var player = $j('object').first();
                        if (player) {
                            player.attr('id', 'embedded_player');
                            player.attr('tabindex', '0');
                        }

                    }
                    $j('#embedded_player').get(0).focus();
                    $j("#as-video-container").css("background-color", "#000000");
                }
            });
        }

        if (div.find('object').length == 0) {
            $div.after(jive.videos.common.noFlash());
        }
    });
}

/**
 * ObjectID and ObjectType are for the object the video is embedded into
 * for permission checking purposes but
 * in case of the video rendering itself, it's the same as video
 *
 * @param divID
 * @param videoID
 * @param objectType
 * @param objectID
 * @param width
 * @param height
 * @param autoplay
 */
function getVideoDataAndRender(divID, videoID, objectType, objectID, width, height, autoplay) {

    var url = jive.rest.url("/videos");
    //console.log("getVideoDataAndRender: div: "+divID+" vid: "+videoID);

    if(videos && videos[videoID] != null) {  //lets load up our existing video to save another call to the server
        videoResultHandler(divID, videos[videoID]); //use new video player for main videos
        return;
    }

    $j.ajax({
        type: "GET",
        url: url + "/" + videoID + "?objectType="+objectType+"&objectID="+objectID,
        success: function(video) {
            if (video.authtoken) {
                video.videoID = videoID;

                if(width !== undefined) {
                    if(video) {
                        video.width = width;
                        video.setSizes = true; //tells the loader to hard set sizes
                    }
                }

                if(height !== undefined) {
                    if(video) video.height = height;
                }

                if(autoplay !== undefined) {
                    if(video) video.autoplay = autoplay;
                }

                videos[video.videoID] = video; //collect all the videos in this page for storing

                videoResultHandler(divID, video); //use new video player for main videos
            }
        }
    });
}

function getAutoplay(videoId){
    if(videos[videoId] && videos[videoId].autoplay != null) return videos[videoId].autoplay;
    return  lastAutoplay;
}

function getWatermarkUrl(videoId){
    if(videos[videoId] && videos[videoId].watermarkURL != null) return videos[videoId].watermarkURL;
    return  lastWatermark;
}

function useVideoConfig() {
    return true;
}

/**
 *
 * @depends i18nKeys=video.encoding.text
 *
 * @param divID
 * @param video
 */
function renderVideo(divID, video) {

    //console.log("renderVideo: "+divID+" : videoId: "+video.videoID);

    if (!video.doneTranscoding && !video.embedded) {

        var $warningDiv = $j(
            '<div class="jive-video-encode-box">' +
                '<div class="jive-video-message-large">'+ jive.i18n.getMsg("video.encoding.text") +  '</div>' +
                '<div class="jive-video-encode-icon"></div>' +
            '</div>');

        $j('#' + divID).prepend($warningDiv);
        return;
    }

    if(isFlashEnabled() && !video.mobileEnabled) {
        renderVideoWithFlash(divID, video);
        return;
    }

    var videoID = video.externalID ? "" + video.externalID : '';
    var width = (video.width? video.width : 747);
    var height = (video.height? video.height : 420);

    var $div, $parent_div;
    var lightboxme = false;

    if (divID) {
        $div = $j('#' + divID);
    }
    else {
        $div = $j('<div id="as-video-container" class="media { type:\'swf\' }"></div>');
        $parent_div = $j('<div id="lb_image_wrapper" class="jive-modal"><a class="j-modal-close-top close j-icon-close" href="#"><span class="j-close-icon j-ui-elem" role="img"></span></a></div>');
        $parent_div.append($div);
        $j('body').append($parent_div);
        lightboxme = true;
    }

    // Twistage JS won't work because header_javascript.ftl blocks document.write calls
    // so use iFrame to host the video and still use their code
    var $vidContents = $j('<iframe width="'+ (width + 25) + '" height="'+ (height +25) +'" id="iframe_'+ videoID +'">');

    // Swap out video and placeholder image
    $div.find('img').replaceWith($vidContents);

    if($vidContents[0].contentWindow == null) {
        $div.replaceWith($vidContents);
    }

    var doc = ($vidContents[0].contentWindow || $vidContents[0].contentDocument);
    if(doc.document) doc = doc.document;

    var script = doc.createElement('script');
    script.type = 'text/javascript';
    script.src = video.playerBaseURL + '/api/script';
    var head = doc.getElementsByTagName('head')[0];

    script.onload = script.onreadystatechange = function() {
        if (!this.readyState ||this.readyState == "loaded" || this.readyState == "complete" ) {
            var s = doc.createElement('script');
            s.type = 'text/javascript';
            s.text = 'viewNode(\''+ videoID + '\',{ server_detection: true, width: 747, height: 420, player_profile:\''+video.playerName+'\', auth_token:\''+video.authtoken +'\'});'
            head.insertBefore(s, head.firstChild);
        }
    };

    head.insertBefore(script, head.firstChild);

    if (lightboxme) {

        $parent_div.lightbox_me({
            destroyOnClose: true,
            onClose: function() {
                $j('#lb_image_wrapper').remove();
            },
            closeSelector: ".jive-modal-close-top, .close"
        });
    }

}

//checks if flash is installed/enabled on the browser
function isFlashEnabled()
{
    if(navigator.mimeTypes["application/x-shockwave-flash"] !== undefined) return true;
    var flashObj = null;
    try {
        flashObj = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
    } catch (ex) { return false; }
    if (flashObj != null) return true;
}

////////////////////////////////////////////////////////////////////////////////
//
//      Jive Video Player Controller
//      Created by Denis Mars
//      Copyright 2013 - Jive Software Inc
//
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
//
//      Private Variables
//
////////////////////////////////////////////////////////////////////////////////
var maxWidth            = 900;      //the maximum width of the player
var maxHeight           = 600;      //the maximum height of the player
var originalWidth       = 747;      //the default width of the player
var originalHeight      = 420;      //default height of the player
var originalAspectRatio = 1.77;     //16:9 HD Aspect Ratio
var offsetPercentage    = 80;       //the percentage offset of player vs frame
var VIDEO_HOSTED_TYPE   = "video_hosted_type"; //this video is hosted somewhere else
var VIDEO_EMBEDDED_TYPE = "video_embeded_type"; //this video is an embedded video
var VIDEO_TWISTAGE_TYPE = "video_twistage_type"; //this video is a provided by twistage service
var videos              = {}; //holds all the videos we have on the page
var enableAutoResize    = true; //do we want to resize the player

////////////////////////////////////////////////////////////////////////////////
//
//      Main Video Result Handler and Renderer
//
////////////////////////////////////////////////////////////////////////////////
function videoResultHandler(divID, video) {
    //console.log("videoResultHandler: videoId: "+video.videoID);
    //mainVideo.videoType = VIDEO_EMBEDDED_TYPE;  //--------- FOR DEMOING
    //mainVideo.videoSource = embedYT;            //--------- FOR DEMOING

    if(!video.hasOwnProperty("videoType")) {
        loadTwistageVideo(divID, video); //load the normal player
        return;
    }

    if(video.videoType === VIDEO_TWISTAGE_TYPE) {
        loadTwistageVideo(divID, video);
        return;
    }

    if(video.videoType === VIDEO_HOSTED_TYPE) {
        loadHostedVideo(divID, video);
        return;
    }

    if(video.videoType === VIDEO_EMBEDDED_TYPE) {
        loadEmbeddedVideo(divID, video);
    }
}

////////////////////////////////////////////////////////////////////////////////
//
//      Video Loaders for loading particular videos
//
////////////////////////////////////////////////////////////////////////////////

function loadTwistageVideo(divID, video) {
    renderVideo(divID, video);
    showVideoPlayer();
    resizePlayer(); //resize me
}

function loadHostedVideo(divID, video) {

}

function loadEmbeddedVideo(divID, video) {
    //console.log("loadEmbeddedVideo: videoId: "+video.videoID);
    var embed = escape(video.videoSource);
    var source = '<iframe src="video-player!input.jspa?autoplay='+video.autoplay+'&media='+embed+'" frameborder="0" height="'+video.height+'" width="'+video.width+'" id="mediaFrame" name="mediaFrame" allowTransparency="true" tabIndex="0"> </iframe>';
    insertVideoElement(divID, source, video.setSizes, video.width, video.height);
}

//uses embedly to load up video thumbnails
function getVideoThumbnailAndRender(divID, videoID, objectType, objectID, width, height, autoplay) {

    var url = jive.rest.url("/videos");
    //console.log("loadEmbededVideoThumbnail: div: "+divID+" vid: "+videoID);

    if(videos && videos[videoID] != null) {  //lets load up our existing video to save another call to the server
        var video = videos[videoID];
        if(video.videoType === VIDEO_EMBEDDED_TYPE) {
            if(video.videoThumbnail !== undefined) {
                loadThumb(divID, video.videoThumbnail);
            } else {
                processVideoForThumbnails(divID, video);
            }
        }
    } else {
        $j.ajax({  //lets go ang get a fresh video
            type: "GET",
            url: url + "/" + videoID + "?objectType="+objectType+"&objectID="+objectID,
            success: function(video) {
                if (video.authtoken) {
                    video.videoID = videoID;

                    if(width !== undefined) {
                        if(video) {
                            video.width = width;
                            video.setSizes = true; //tells the loader to hard set sizes
                        }
                    }

                    if(height !== undefined) {
                        if(video) video.height = height;
                    }

                    if(autoplay !== undefined) {
                        if(video) video.autoplay = autoplay;
                    }
                    videos[video.videoID] = video; //collect all the videos in this page for storing
                    if(video.videoType === VIDEO_EMBEDDED_TYPE) {
                        if(video.videoThumbnail !== undefined) {
                            loadThumb(divID, video.videoThumbnail);
                        } else {
                            processVideoForThumbnails(divID, video);
                        }
                    }
                }

            }
        });
    }

    function processVideoForThumbnails(divID, video) {
        var videoEmbed = $j(video.videoSource);
        var src = videoEmbed.attr("src");

        if(src === undefined) {
            var embedChildren = videoEmbed.children(); //get all the child elements
            for(var i=0; i < embedChildren.length; i++) {
                var childElement = embedChildren[i];
                var tagName = childElement.tagName.toLowerCase();
                if( tagName == "iframe") {
                    src = $j(childElement).attr("src");
                    break;
                }

                if(tagName == "object") {
                    src = $j(childElement).attr("data");
                    break;
                }

                if(tagName == "param") {
                    var movie = $j(childElement).attr("movie")
                    if(movie) {
                        src = $j(childElement).attr("value");
                        break;
                    }
                }

                if(tagName == "embed") {
                    src = $j(childElement).attr("src");
                    break;
                }
            }
        }

        var meta = new jive.MetaSource();
        if(meta == null) return;

        var embedly = meta.fetchEmbedly(src).addCallback(function(data) {
            //console.log("success");
            if(data) {
                video.data = data;
                if(data.images) {
                    if(data.images && data.images.length > 0) {
                        if(data.images[0] && data.images[0].url) loadThumb(divID, data.images[0].url);
                    }
                }
            }
        });
    }

    function loadThumb(divID, thumbUrl) {
        $j("#"+divID+" img").attr("src", thumbUrl);
    }
}
////////////////////////////////////////////////////////////////////////////////
//
//      VideoInsertion Control
//
////////////////////////////////////////////////////////////////////////////////
function insertVideoElement(divID, videoElement, setSizes, setWidth, setHeight) {
    //console.log("insertVideoElement Div: "+divID);

    if(divID) {  //lets load up the normal player
        $div = $j('#' + divID);
        $j("#"+divID).empty().append(videoElement).show();
        if(setSizes) {
            applyElementSizing(videoElement, setWidth, setHeight);
        }
        showVideoPlayer();
        resizePlayer(); //resize me
    }
    else { //lets load up the lightbox
        var element = $j('<div id="as-video-container" class="media { type:\'swf\' }"><div class="jive-video-base"><div class="jive-video-player" id="jive-video-display"></div></div></div>');
        $parent_div = $j('<div id="lb_image_wrapper" class="jive-modal"><a class="j-modal-close-top close j-icon-close" href="#"><span class="j-close-icon j-ui-elem" role="img"></span></a></div>');
        $parent_div.append(element);
        $j('body').append($parent_div);

        element.width("747px").height("420px");

        enableAutoResize = false;

        $parent_div.lightbox_me({
            destroyOnClose: true,
            onClose: function() {
                $j('#lb_image_wrapper').remove();
            },
            modalCSS : {top:'160px'},
            closeSelector: ".jive-modal-close-top, .close",
            onLoad: function() {
                showVideoPlayer();
                element.width("747px").height("420px");
                $j(".jive-video-base").css("display", "block");
                $j("#jive-video-display").append(videoElement).show().focus();
                setPlayerSizes("100%", "100%");
            }
        });
    }
}
////////////////////////////////////////////////////////////////////////////////
//
//      Video Player Controller Functions
//
////////////////////////////////////////////////////////////////////////////////
/**
 * Shows the video is being encoded message
 */
function showVideoEncoding() {
    $j(".jive-video-player").hide();
    $j(".jive-video-message").show();
}

/**
 * Displays the video player and hides all
 * other elements from view.
 */
function showVideoPlayer() {
    $j(".jive-video-poster").hide();
    $j(".jive-video-base").show();
    $j(".jive-video-player").show();
    $j(".jive-video-message").hide();
}

/**
 * Detects resizing of the widow to adjust video player sizes
 */
function detectResize() {

    $j(window).resize(function(){
        if(enableAutoResize) resizePlayer();
    });
}

/**
 * Resizes the player based on its container dimensions.
 *
 */
function resizePlayer() {
    var videoBase = $j('.jive-video-base');
    var currentPlayerWidth = videoBase.width();
    var currentPlayerHeight = videoBase.height();

    var videoContent = $j('.jive-video-content');

    var currentContentWidth = videoContent.width();
    var currentContentHeight = videoContent.height();

    var newPlayerHeight = parseInt(offsetPercentage/100*currentContentHeight);
    var newPlayerWidth = parseInt(originalAspectRatio*newPlayerHeight);

    //lets set our new width and heights
    if(newPlayerHeight <= maxHeight && newPlayerWidth <= maxWidth) {

    }

    //lets make sure we stay within the offset percentage in widths
    if(newPlayerWidth >= currentContentWidth*offsetPercentage/100) {
        newPlayerWidth = parseInt(currentContentWidth*offsetPercentage/100);
        newPlayerHeight = parseInt(newPlayerWidth/originalAspectRatio);
    }

    //lets make sure we stay within the offset percentage in height
    if(newPlayerHeight >= currentContentHeight*offsetPercentage/100) {
        newPlayerHeight = parseInt(currentContentHeight*offsetPercentage/100);
        newPlayerWidth = parseInt(originalAspectRatio*newPlayerHeight);
    }

    setPlayerSizes(newPlayerWidth, newPlayerHeight);
    centerElement(videoBase, $j(".jive-video-content"));
}

/**
 * Applies player sizing using the main continers video-base
 * and video-player and places all internal elements as 100% sizing
 *
 * @param width (int)
 * @param height (int)
 *
 */
function setPlayerSizes(newWidth, newheight) {
    var videoBase = $j('.jive-video-base');
    var videoPlayer = $j(".jive-video-player");
    videoBase.width(newWidth);
    videoBase.height(newheight);
    videoPlayer.css("width", "100%");
    videoPlayer.css("height", "100%");
    videoPlayer.children().css("width", videoPlayer.width());
    videoPlayer.children().css("height", videoPlayer.height());
    videoPlayer.children().attr("width", videoPlayer.width());
    videoPlayer.children().attr("height", videoPlayer.height());
}

/**
 * Applies a set of width and height dimensions to an
 * element that's been passed in. Used when we need to load
 * players with a specific width and height requirement.
 *
 * @param element (object)
 * @param width (int)
 * @param height (int)
 *
 */
function applyElementSizing(element, width, height) {
   var mainElement = $j(element);
    mainElement.attr("width", width+"px").attr("height", height+"px");
    var embedChildren = mainElement.children(); //get all the child elements
    for(var i=0; i < embedChildren.length; i++) {
        var childElement = embedChildren[i];
        var tagName = childElement.tagName.toLowerCase();
        if( tagName == "iframe" || tagName == "object" || tagName == "embed") {
            $j(childElement).attr("width", width+"px");
            $j(childElement).attr("height", height+"px");
        }
    }
}

/**
 * Applies default sizing for main video view page
 * such that all loads start with the same width and height
 * dimensions.
 */
function applyDefaultSizing() {
    $j('.jive-video-base').width(originalWidth).height(originalHeight);
    centerElement($j('.jive-video-base'), $j(".jive-video-content"));
}

/**
 * Used by the main video view page to center the player
 * within the dark viewer backdrop. Ignored on other
 * player view profiles.
 */
function centerElement(element, parent){
    var newTop = parseInt( (parent.height() - element.height())/2);
    var newLeft = parseInt( (parent.width() - element.width())/2);
    element.css('top', newTop+"px");
    element.css('left', newLeft+"px");
}

/**
 * Starts off the player view container on
 * the main video view page. Is ignored on all other
 * pages.
 */
function initVideoPlayer() {
    applyDefaultSizing();
    detectResize();
    resizePlayer();
}

////////////////////////////////////////////////////////////////////////////////
//
//      Main Init to start the Video Player System
//
////////////////////////////////////////////////////////////////////////////////
initVideoPlayer();

;
