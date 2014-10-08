// This file was automatically generated from link_edit.soy.
// Please don't edit this file by hand.

goog.provide('jive.imagenav.images.edit');
goog.provide('jive.imagenav.images.imageForm');
goog.provide('jive.imagenav.images.imageLinkEditControls');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');


jive.imagenav.images.edit = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<head><title>', (opt_data.slideId == -1) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('image_nav.manage.add.title'),[])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('image_link.edit.title'),[])), '</title></head><body class="jive-body-formpage jive-body-formpage-slide j-image-link-create"><header><h3>', (opt_data.slideId == -1) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('image_nav.manage.add.title'),[])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('image_link.edit.title'),[])), '</h3></header><div class="js-edit js-image-link j-layout j-layout-ls j-box j-rc5 j-contained"><div class="j-description"><span>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('image_link.create.desc'),[opt_data.parentName])), '</span><span class="font-color-meta"> ', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('image_link.create.required.desc'),[])), '</span></div><form class="js-image-link-form j-form" name="editImageLink" action="#" method="POST"><div class="j-column-wrap-l"><div class="j-column j-column-l"><div class="j-box-body-padding js-editControls"></div></div></div><div class="j-column j-column-s"><div class="j-preview-wrapper js-preview-wrapper"><header><h4 class="font-color-meta">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('announcement.preview'),[])), '</h4></header><div class="j-preview-box js-preview-box"></div></div></div></form>');
  jive.imagenav.images.imageForm(soy.$$augmentMap(opt_data, {isCreate: opt_data.slideId == -1}), output);
  output.append('</div><script>$j(function(){require([\'jive.ImageLink.Edit.Main\'], function(M) {M({slideId: ', soy.$$escapeHtml(opt_data.slideId), ', slideType: ', soy.$$escapeHtml(opt_data.slideType), ', containerType: \'', soy.$$escapeHtml(opt_data.parentType), '\', containerId: \'', soy.$$escapeHtml(opt_data.parentId), '\'});});});<\/script></body>');
  return opt_sb ? '' : output.toString();
};


jive.imagenav.images.imageLinkEditControls = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-form-row"><label for="targetLink">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('slide.edit.targetLink.label'),[])), '</label><div class="js-targetLink-wrapper"><input type="url" id="targetLink" name="targetLink" class="js-targetLink" required="required" aria-required="true" value="', soy.$$escapeHtml(opt_data.slide.targetLink ? opt_data.slide.targetLink : ''), '" maxlength="3500"/></div></div><p class="j-form-row"><label class="jive-formfield-required" for="subject">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('slide.subject.text'),[])), '<span class="jive-form-label-desc">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('slide.subject.text.desc'),[])), '</span></label><input type="text" id="subject" name="subject" class="js-subject" required="required" aria-required="true" value="', soy.$$filterNoAutoescape(opt_data.slide.subject), '" size="60" maxlength="75" /></p><div class="j-form-row"><label for="image">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('slide.image.include'),[])), '<span class="jive-form-label-desc">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('slide.image.include.desc'),[])), '</span></label><input type="hidden" id="image" name="image" class="js-image" value="', soy.$$escapeHtml(opt_data.slide.image ? opt_data.slide.image : ''), '" required="required" /><div class="js-file-input" tabindex="-1"><a tabindex="-1" role="button" href="javascript:;" class="j-draganddrop js-no-image-link j-draganddrop-target" ', (opt_data.slide.image) ? ' style="display: none" ' : '', '><div class="js-image-message">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('slide.draganddrop'),[])), '<p id="drag-drop-message" class="font-color-meta" style="display: none">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('slide.draganddrop.desc'),[])), '</p></div></a><div class="imagePreviewContainer" ', (! opt_data.slide.image) ? ' style="display: none" ' : '', ' tabindex="0" role="img" aria-label="', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('announcement.imageUpload.label'),[])), '"><img src="', soy.$$escapeHtml(opt_data.slide.image ? opt_data.slide.image : jive.soy.func.buildUrl('/images/blank.gif')), '" class="imagePreview" alt="', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('slide.imageUpload.label'),[])), '" /></div><p tabindex="0"><a href="javascript:;">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('slide.image.replace'),[])), '</a></p></div></div><p class="j-form-row" style="display:none"><label for="body">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('slide.body.text'),[])), '<span class="jive-form-label-desc">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('slide.body.text.desc'),[])), '</span></label><textarea id="body" class="js-body jive-form-textarea" rows="25" cols="80">', soy.$$escapeHtml(opt_data.slide.content ? opt_data.slide.content.text : ''), '</textarea></p><div class="j-form-row"><button type="submit" name="save" value="save" class="j-btn-callout">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('announcement.saveButton.text'),[])), '</button><button type="button" name="cancel" value="', soy.$$escapeHtml(jive.soy.func.buildUrl('/')), '">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('announcement.cancelButton.text'),[])), '</button></div>');
  return opt_sb ? '' : output.toString();
};


jive.imagenav.images.imageForm = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form class="imageUploadForm" name="imageUpload" action="', soy.$$escapeHtml(jive.soy.func.buildUrl('/api/core/v3/statics')), '" method="', soy.$$escapeHtml(opt_data.isCreate ? 'post' : 'put'), '" enctype="multipart/form-data"><input type="file" class="imageFileInput" name="imageFile" id="imageFileInput" tabindex="-1" /><input type="hidden" name="jive.token.name" value="', soy.$$escapeHtml(opt_data.tokenName), '" /><input type="hidden" name="', soy.$$escapeHtml(opt_data.tokenName), '" value="', soy.$$escapeHtml(opt_data.tokenValue), '" /><input type="hidden" name="json" value="" /></form>');
  return opt_sb ? '' : output.toString();
};

;
/*
 * jQuery Tools v1.2.6 - The missing UI library for the Web
 *
 * validator/validator.js
 *
 * NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.
 *
 * http://flowplayer.org/tools/
 *
 * Version fc1115e63a5263754a6a562aff21778c4269b5ac
 * https://github.com/jquerytools/jquerytools/blob/master/src/validator/validator.js
 *
 */
(function(f){f.tools=f.tools||{version:"@VERSION"};var j=/\[type=([a-z]+)\]/,h=/^-?[0-9]*(\.[0-9]+)?$/,c=f.tools.dateinput,a=/^([a-z0-9_\.\-\+]+)@([\da-z\.\-]+)\.([a-z\.]{2,6})$/i,g=/^https?:\/\/(?:[^:]+:[^@])?[\w\.]+(?::\d+)?\S*$/,i;i=f.tools.validator={conf:{grouped:false,effect:"default",errorClass:"invalid",inputEvent:null,errorInputEvent:"keyup",formEvent:"submit",lang:"en",message:"<div/>",messageAttr:"data-message",messageClass:"error",offset:[0,0],position:"center right",singleError:false,speed:"normal"},messages:{"*":{en:"Please correct this value"}},localize:function(n,m){f.each(m,function(o,p){i.messages[o]=i.messages[o]||{};i.messages[o][n]=p})},localizeFn:function(m,n){i.messages[m]=i.messages[m]||{};f.extend(i.messages[m],n)},fn:function(n,o,m){if(f.isFunction(o)){m=o}else{if(typeof o=="string"){o={en:o}}this.messages[n.key||n]=o}var p=j.exec(n);if(p){n=e(p[1])}k.push([n,m])},addEffect:function(m,n,o){b[m]=[n,o]}};function l(o,n,q){var t=o.offset().top,p=o.offset().left,r=q.position.split(/,?\s+/),s=r[0],u=r[1];t-=n.outerHeight()-q.offset[0];p+=o.outerWidth()+q.offset[1];if(/iPad/i.test(navigator.userAgent)){t-=f(window).scrollTop()}var v=n.outerHeight()+o.outerHeight();if(s=="center"){t+=v/2}if(s=="bottom"){t+=v}var m=o.outerWidth();if(u=="center"){p-=(m+n.outerWidth())/2}if(u=="left"){p-=m}return{top:t,left:p}}function e(n){function m(){return this.getAttribute("type")==n}m.key="[type="+n+"]";return m}var k=[],b={"default":[function(m){var n=this.getConf();f.each(m,function(p,q){var o=q.input;o.addClass(n.errorClass);var r=o.data("msg.el");if(!r){r=f(n.message).addClass(n.messageClass).appendTo(document.body);o.data("msg.el",r)}r.css({visibility:"hidden"}).find("p").remove();f.each(q.messages,function(u,t){f("<p/>").html(t).appendTo(r)});if(r.outerWidth()==r.parent().width()){r.add(r.find("p")).css({display:"inline"})}var s=l(o,r,n);r.css({visibility:"visible",position:"absolute",top:s.top,left:s.left}).fadeIn(n.speed)})},function(m){var n=this.getConf();m.removeClass(n.errorClass).each(function(){var o=f(this).data("msg.el");if(o){o.css({visibility:"hidden"})}})}]};f.each("email,url,number".split(","),function(n,m){f.expr[":"][m]=function(o){return o.getAttribute("type")===m}});f.fn.oninvalid=function(m){return this[m?"bind":"trigger"]("OI",m)};i.fn(":email","Please enter a valid email address",function(n,m){return !m||a.test(m)});i.fn(":url","Please enter a valid URL",function(n,m){return !m||g.test(m)});i.fn(":number","Please enter a numeric value.",function(n,m){return h.test(m)});i.fn("[max]","Please enter a value no larger than $1",function(o,n){if(n===""||c&&o.is(":date")){return true}var m=o.attr("max");return parseFloat(n)<=parseFloat(m)?true:[m]});i.fn("[min]","Please enter a value of at least $1",function(o,m){if(m===""||c&&o.is(":date")){return true}var n=o.attr("min");return parseFloat(m)>=parseFloat(n)?true:[n]});i.fn("[required]","Please complete this mandatory field.",function(n,m){if(n.is(":checkbox")){return n.is(":checked")}if(!n.is("input:file")){n.val($j.trim((n.val())))}if(n.attr("placeholder")&&n.val()==n.attr("placeholder")){return false}return !!m});i.fn("[pattern]",function(m){var n=new RegExp("^"+m.attr("pattern")+"$");return n.test(m.val())});function d(m,r,p){var o=this,q=r.add(o);m=m.not(":button, :image, :reset, :submit");r.attr("novalidate","novalidate");function n(x,v,t){if(!p.grouped&&x.length){return}var w;if(t===false||f.isArray(t)){w=i.messages[v.key||v]||i.messages["*"];w=w[p.lang]||i.messages["*"].en;var u=w.match(/\$\d/g);if(u&&f.isArray(t)){f.each(u,function(y){w=w.replace(this,t[y])})}}else{w=t[p.lang]||t}x.push(w)}f.extend(o,{getConf:function(){return p},getForm:function(){return r},getInputs:function(){return m},reflow:function(){m.each(function(){var t=f(this),u=t.data("msg.el");if(u){var v=l(t,u,p);u.css({top:v.top,left:v.left})}});return o},invalidate:function(t,u){if(!u){var v=[];f.each(t,function(x,y){var w=m.filter("[name='"+x+"']");if(w.length){w.trigger("OI",[y]);v.push({input:w,messages:[y]})}});t=v;u=f.Event()}u.type="onFail";q.trigger(u,[t]);if(!u.isDefaultPrevented()){b[p.effect][0].call(o,t,u)}return o},reset:function(t){t=t||m;t.removeClass(p.errorClass).each(function(){var u=f(this).data("msg.el");if(u){u.remove();f(this).data("msg.el",null)}}).unbind(p.errorInputEvent||"");return o},destroy:function(){r.unbind(p.formEvent+".V").unbind("reset.V");m.unbind(p.inputEvent+".V").unbind("change.V");return o.reset()},checkValidity:function(u,w){u=u||m;u=u.not(":disabled");if(!u.length){return true}w=w||f.Event();w.type="onBeforeValidate";q.trigger(w,[u]);if(w.isDefaultPrevented()){return w.result}var t=[];u.not(":radio:not(:checked)").each(function(){var z=[],x=f(this).data("messages",z),y=c&&x.is(":date")?"onHide.v":p.errorInputEvent+".v";x.unbind(y);f.each(k,function(){var C=this,A=C[0];if(x.filter(A).length){var B=C[1].call(o,x,x.val());if(B!==true){w.type="onBeforeFail";q.trigger(w,[x,A]);if(w.isDefaultPrevented()){return false}var D=x.attr(p.messageAttr);if(D){z=[D];return false}else{n(z,A,B)}}}});if(z.length){t.push({input:x,messages:z});x.trigger("OI",[z]);if(p.errorInputEvent){x.bind(y,function(A){o.checkValidity(x,A)})}}if(p.singleError&&t.length){return false}});var v=b[p.effect];if(!v){throw'Validator: cannot find effect "'+p.effect+'"'}if(t.length){o.invalidate(t,w);return false}else{v[1].call(o,u,w);w.type="onSuccess";q.trigger(w,[u]);u.unbind(p.errorInputEvent+".v")}return true}});f.each("onBeforeValidate,onBeforeFail,onFail,onSuccess".split(","),function(u,t){if(f.isFunction(p[t])){f(o).bind(t,p[t])}o[t]=function(v){if(v){f(o).bind(t,v)}return o}});if(p.formEvent){r.bind(p.formEvent+".V",function(t){if(!o.checkValidity(null,t)){return t.preventDefault()}t.target=r;t.type=p.formEvent})}r.bind("reset.V",function(){o.reset()});if(m[0]&&m[0].validity){m.each(function(){this.oninvalid=function(){return false}})}if(r[0]){r[0].checkValidity=o.checkValidity}if(p.inputEvent){m.bind(p.inputEvent+".V",function(t){o.checkValidity(f(this),t)})}m.filter(":checkbox, select").filter("[required]").bind("change.V",function(u){var t=f(this);if(this.checked||(t.is("select")&&f(this).val())){b[p.effect][1].call(o,t,u)}});var s=m.filter(":radio").change(function(t){o.checkValidity(s,t)});f(window).resize(function(){o.reflow()})}f.fn.validator=function(n){var m=this.data("validator");if(m){m.destroy();this.removeData("validator")}n=f.extend(true,{},i.conf,n);if(this.is("form")){return this.each(function(){var o=f(this);m=new d(o.find(":input"),o,n);o.data("validator",m)})}else{m=new d(this,this.eq(0).closest("form"),n);return this.data("validator",m)}}})(jQuery);
;
// This file was automatically generated from link_common.soy.
// Please don't edit this file by hand.

goog.provide('jive.imagelinks.dynamicImageLinkList');
goog.provide('jive.imagelinks.imageLink');
goog.provide('jive.imagelinks.imageLinkList');
goog.provide('jive.imagelinks.sizedImageLinkList');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');


jive.imagelinks.dynamicImageLinkList = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul class="j-image-links js-image-links">');
  var rowList4 = opt_data.rows;
  var rowListLen4 = rowList4.length;
  for (var rowIndex4 = 0; rowIndex4 < rowListLen4; rowIndex4++) {
    var rowData4 = rowList4[rowIndex4];
    output.append('<li class="j-image-link-row clearfix">');
    jive.imagelinks.sizedImageLinkList({slides: rowData4}, output);
    output.append('</li>');
  }
  output.append('</ul>');
  return opt_sb ? '' : output.toString();
};


jive.imagelinks.sizedImageLinkList = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul class="j-image-links-', soy.$$escapeHtmlAttribute(opt_data.slides.length), '">');
  var slideList15 = opt_data.slides;
  var slideListLen15 = slideList15.length;
  for (var slideIndex15 = 0; slideIndex15 < slideListLen15; slideIndex15++) {
    var slideData15 = slideList15[slideIndex15];
    output.append('<li>');
    jive.imagelinks.imageLink({slide: slideData15}, output);
    output.append('</li>');
  }
  output.append('</ul>');
  return opt_sb ? '' : output.toString();
};


jive.imagelinks.imageLinkList = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul class="j-slides js-image-links">');
  var slideList24 = opt_data.slides;
  var slideListLen24 = slideList24.length;
  for (var slideIndex24 = 0; slideIndex24 < slideListLen24; slideIndex24++) {
    var slideData24 = slideList24[slideIndex24];
    output.append('<li class="j-slide-item">');
    jive.imagelinks.imageLink({slide: slideData24}, output);
    output.append('</li>');
  }
  output.append('</ul>');
  return opt_sb ? '' : output.toString();
};


jive.imagelinks.imageLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-slide js-image-link" ', (opt_data.slide.resources) ? 'data-ref="' + soy.$$escapeHtmlAttribute(opt_data.slide.resources.self.ref) + '"' : '', '><a class="js-image-link-link" href="', soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.slide.targetLink)), '"><span class="j-508-label">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.announcement'),[])), '</span><div class="j-slide-image-wrapper"><img class="j-slide-image" ', (opt_data.slide.image) ? 'src="' + soy.$$filterNoAutoescape(jive.soy.func.buildUrl(opt_data.slide.image)) + '"' : '', ' alt="', soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('global.access.slide.image'),[])), '" ', (! opt_data.slide.image) ? ' style="display: none"' : '', ' /></div><h3>', soy.$$filterNoAutoescape(opt_data.slide.subject), '</h3></a></div>');
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from form-message.soy.
// Please don't edit this file by hand.

goog.provide('jive.error.form.actionErrors');
goog.provide('jive.error.form.actionMessageList');
goog.provide('jive.error.form.fieldError');
goog.provide('jive.error.form.fieldErrors');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');


jive.error.form.actionErrors = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.fieldErrors && opt_data.fieldErrors.length > 0) {
    output.append('<div id="jive-error-box" class="jive-error-box" role="alert" aria-live="assertive" aria-atomic="true" aria-relevant="additions text" tabindex="-1"><div><span class="jive-icon-med jive-icon-redalert"></span>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('error.field_error.text'),[])), '</div></div>');
  } else if (opt_data.actionErrors && opt_data.actionErrors.length > 0) {
    output.append('<div id="jive-error-box" class="jive-error-box" role="alert" aria-live="assertive" aria-atomic="true" aria-relevant="additions text" tabindex="-1"><div><span class="jive-icon-med jive-icon-redalert"></span>', (opt_data.actionErrors.length > 1) ? '<ul>' : '');
    var actionErrorList13 = opt_data.actionErrors;
    var actionErrorListLen13 = actionErrorList13.length;
    for (var actionErrorIndex13 = 0; actionErrorIndex13 < actionErrorListLen13; actionErrorIndex13++) {
      var actionErrorData13 = actionErrorList13[actionErrorIndex13];
      output.append((opt_data.actionErrors.length > 1) ? '<li>' : '', (actionErrorData13.message) ? soy.$$filterNoAutoescape(actionErrorData13.message) : '', (opt_data.actionErrors.length > 1) ? '</li>' : '');
    }
    output.append((opt_data.actionErrors.length > 1) ? '</ul>' : '', '</div></div>');
  } else if (opt_data.actionMessages && opt_data.actionMessages.length > 0) {
    output.append('<div id="jive-success-box" class="jive-success-box" role="status" aria-live="polite" aria-atomic="true" aria-relevant="additions text" tabindex="-1"><div><span class="jive-icon-med jive-icon-check"></span>');
    jive.error.form.actionMessageList(opt_data, output);
    output.append('</div></div>');
  }
  return opt_sb ? '' : output.toString();
};


jive.error.form.actionMessageList = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var actionMessageList35 = opt_data.actionMessages;
  var actionMessageListLen35 = actionMessageList35.length;
  for (var actionMessageIndex35 = 0; actionMessageIndex35 < actionMessageListLen35; actionMessageIndex35++) {
    var actionMessageData35 = actionMessageList35[actionMessageIndex35];
    output.append((actionMessageData35.message) ? soy.$$escapeHtml(actionMessageData35.message) : '');
  }
  return opt_sb ? '' : output.toString();
};


jive.error.form.fieldErrors = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.fieldErrors && opt_data.name && opt_data.fieldErrors.length > 0) {
    var fieldErrorList43 = opt_data.fieldErrors;
    var fieldErrorListLen43 = fieldErrorList43.length;
    for (var fieldErrorIndex43 = 0; fieldErrorIndex43 < fieldErrorListLen43; fieldErrorIndex43++) {
      var fieldErrorData43 = fieldErrorList43[fieldErrorIndex43];
      if (fieldErrorData43 && fieldErrorData43.name == opt_data.name && fieldErrorData43.messages) {
        var msgList46 = fieldErrorData43.messages;
        var msgListLen46 = msgList46.length;
        for (var msgIndex46 = 0; msgIndex46 < msgListLen46; msgIndex46++) {
          var msgData46 = msgList46[msgIndex46];
          jive.error.form.fieldError({msg: soy.$$escapeHtml(msgData46)}, output);
        }
      }
    }
  }
  return opt_sb ? '' : output.toString();
};


jive.error.form.fieldError = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="jive-error-message">', soy.$$escapeHtml(opt_data.msg), '</span>');
  return opt_sb ? '' : output.toString();
};

;
jive.namespace("hte");jive.hte.HTE=function(h,p){var n=$j(h);if(n.length!=1){console.log("selector must select a single element.  Selector: ",h,n);throw new Error("selector must select a single element",h,n)}var k=this;jive.conc.observable(this);this.editor=null;this.$elem=n;this.load=a(o);this.save=a(m);this.getValue=a(i);this.getContent=a(g);p=$j.extend({},{atMention:true},p);var e=$j('<div class="rte_wrap tiny_mce_content"><div class="popOverContent"></div></div>').css({position:"absolute",top:0,left:0,width:"100%"});var c=$j('<div class="rte_wrap tiny_mce_content"><div class="superRichContent" style="position: absolute;"></div></div>').css({position:"absolute",overflow:"hidden",top:0,left:0,width:"100%"});this.addListener("initFinished",function(q){q.$elem.trigger("hteSuccess",[q]).data("hteStatus",true)});this.addListener("initFailed",function(q){q.$elem.trigger("hteFail").data("hteStatus",false)});var b=d(h,p);b.done(function(q){k.editor=tinymce.get(q.prop("id"));k.emit("initFinished",k)}).fail(function(q){console.log("failed to construct hyper-text editors for element",q);k.emit("initFailed",k)});function a(r){return function q(){if(!this.editor){console.log("not initialized when attempting to call "+r.name);throw new Error("The HTE is not yet initialized")}return r.apply(this,arguments)}}function o(q){this.editor.setContent(q)}function i(){return this.editor.getContent({format:"raw"})}function g(){return this.editor.getContent()}function m(){var q=this.getValue();this.$elem.val(q)}function f(){if(!jive.hte.HTE.next){jive.hte.HTE.next=1}return jive.hte.HTE.next++}function d(q,r){var t=new $j.Deferred();try{require(["jive.rte"],function(){try{var w=$j(q);if(!w.prop("id")){w.prop("id","hypertext-editor-id-"+f())}function z(){var A=tinymce.get(w.prop("id"));$j("#"+w.prop("id")+"_tbl td.mceIframeContainer").prepend(c).append(e);$j.each(A.plugins,function(){try{if(this.setRTE){this.setRTE(k)}}catch(B){console.log("Error calling setRTE in plugin",this.getInfo(),B)}});A.onFocus.add(function(){k.emit("hteFocus");$j("#"+w.prop("id")+"_tbl").addClass("focus")});A.onBlur.add(function(){k.emit("hteBlur");$j("#"+w.prop("id")+"_tbl").removeClass("focus")});t.resolve(w)}var y={mode:"exact",theme:"advanced",width:"95%",theme_advanced_toolbar_location:"none",theme_advanced_statusbar_location:"none",content_css:computeRTEPluginStyle(CS_RESOURCE_BASE_URL+"/styles/tiny_mce3/themes/advanced/skins/default/content.css"),editor_css:" ",body_class:"tiny_mce_content",plugins:"jiveutil,jivescroll,jiveemoticons,jivemacros,paste,jivemention",skin:"hte",formats:{alignleft:{},aligncenter:{},alignright:{},alignfull:{},bold:{},italic:{},underline:{},strikethrough:{},forecolor:{},hilitecolor:{},fontname:{},fontsize:{},blockquote:{},removeformat:{},h1:{},h2:{},h3:{},h4:{},h5:{},h6:{},div:{},address:{},pre:{},code:{},dt:{},dd:{},samp:{}},valid_elements:"p/div/pre/blockquote/h1/h2/h3/h4/h5/h6,a[href],span[class|id|data-*]",oninit:function v(){var A=tinymce.get(w.prop("id"));A.onInit.add(z)},oninitFail:function u(){t.reject(w)},elements:w.prop("id")};if(!r.atMention){y.plugins=y.plugins.replace(",jivemention","")}tinymce.init(y)}catch(x){console.log("Failed to init the HTE",x);jive.conc.nextTick(function(){t.reject(w,"initHte failed",x)})}})}catch(s){console.log("Failed load the TinyMCE JS files",s);jive.conc.nextTick(function(){t.reject($elem,"TinyMCE failed to load",s)})}return t.promise()}var l=null;this.getHiddenContainer=function(){if(l){return l}l=c.find("div.superRichContent");return l};var j=null;this.getPopOverContainer=function(){if(j){return j}j=e.find("div.popOverContent");return j};this.getEntitlementService=function(){return null};this.scrollRichContent=function(r,q){this.getHiddenContainer().css("top",(-1*q)+25).css("left",(-1*r)+15);this.getPopOverContainer().css("top",(-1*q)).css("left",(-1*r))}};
;
jive.namespace('ImageLink.Edit');

/**
 * @depends path=/resources/scripts/jive/hte/hte.js
 * @depends template=jive.imagenav.images.imageLinkEditControls
 * @depends template=jive.imagelinks.imageLink
 * @depends template=jive.error.form.fieldError
 */
define("jive.ImageLink.Edit.View", ["jquery"], function($){
    return jive.ImageLink.Edit.View = function editView(options){
        var $scope = options.$scope;
        jive.conc.observable(this);
        var that = this;
    
        var serial = 0;
        function idGen(prefix){
            return prefix + (serial++);
        }
        function getId(elem, prefix){
            var $elem = $(elem);
            if(!$elem.attr('id')){
                $elem.attr('id', idGen(prefix));
            }
            return $elem.attr('id');
        }
    
        //the UI object will have methods that depend on the UI being initialized.  addMethod creates public stubs for those methods.
        var ui = null;
        function addMethod(toCall){
            that[toCall] = function initCheckImpl(){
                if(!ui){
                    console.log("not initialized when attempting to call " + toCall);
                    throw new Error("The view is not yet initialized");
                }
                return ui[toCall].apply(ui, arguments);
            }
        }
    
        addMethod('getImage');
        addMethod('setImage');
    
        addMethod('getSubject');
        addMethod('setSubject');
    
        addMethod('getTargetLink');
        addMethod('setTargetLink');
    
        addMethod('getBody');
        addMethod('getContent');

        addMethod('updateImageToken');
        addMethod('updatePreview');
    
        addMethod('isFormDirty');
    
        this.initView = function initView(options){
            $scope.find(".js-editControls").html(jive.imagenav.images.imageLinkEditControls({
                slide: options.slide
            }));
    
            var $form = $scope.find(".js-slideForm");
            var $subject = $scope.find(".js-subject");
            var $targetLink = $scope.find(".js-targetLink");
            var $previewBox = $scope.find(".js-preview-box");
            var $previewImage = $scope.find(".imagePreview");
            var $image = $scope.find(".js-image");
            var $fileRegion = $scope.find(".js-file-input");
            var $selectImageLink = $scope.find('.js-no-image-link');

            var urlRe = /^https?:\/\/(?:[^:]+:[^@])?[\w\.]+(?::\d+)?\S*$/;
            var relativeUrl = /^\/(?:[^:]+:[^@])?[\w\.]+(?::\d+)?\S*$/;

            $scope.find("button[name='cancel']").click(function(){
                that.emit("cancelClicked");
            });

            //noinspection FunctionWithInconsistentReturnsJS
            function handlePastedUrl(evt) {
                if (evt.originalEvent.clipboardData || evt.originalEvent.dataTransfer) {
                    var textContent = (evt.originalEvent.clipboardData || evt.originalEvent.dataTransfer).getData('Text');
                    if(urlRe.test(textContent)){
                        that.emit("resolve", textContent);
                        return false;
                    }
                }else{
                    jive.conc.nextTick(handleSubjectUrlChange);
                }
            }

            function handleSubjectUrlChange(){
                var urlStr = $targetLink.val();
                if(isValidUrl(urlStr)){
                    that.emit("resolve", urlStr);
                } else {
                    var munged;
                    if(startsWithBaseUrl(urlStr)) {
                        munged = absolutifyRelativeUrlWithBase(urlStr);
                    } else if(isBaselessRelativeUrl(urlStr)) {
                        munged = absolutifyRelativeUrlWithoutBase(urlStr);
                    } else {
                        munged = 'http://' + urlStr;
                    }

                    if(isValidUrl(munged)){
                        $targetLink.val(munged);
                        that.emit("resolve", munged);
                    }
                }
            }

            function isValidUrl(urlStr) {
                return urlRe.test(urlStr);
            }

            function startsWithBaseUrl(urlStr) {
                if(window._jive_base_url.length == 0) {
                    return false;
                }
                return urlStr.startsWith(window._jive_base_url);
            }

            function isBaselessRelativeUrl(urlStr) {
                return relativeUrl.test(urlStr);
            }

            function absolutifyRelativeUrlWithBase(urlStr) {
                var noBase = urlStr.substring(window._jive_base_url.length);

                return absolutifyRelativeUrlWithoutBase(noBase);
            }

            function absolutifyRelativeUrlWithoutBase(urlStr) {
                if(urlStr.startsWith('/') && window._jive_base_absolute_url.endsWith('/')) {
                    urlStr = urlStr.substring(1);
                } else if(!urlStr.startsWith('/') && !window._jive_base_absolute_url.endsWith('/')) {
                    urlStr = "/" + urlStr;
                }
                return window._jive_base_absolute_url + urlStr;
            }

            // bind link paste handler
            $targetLink.on("paste", handlePastedUrl).on("change", handleSubjectUrlChange);
    
    
            // if the file upload region receives focus, shift
            // focus to the link itself.
            $fileRegion.on('focus', function() {
                $selectImageLink.focus();
            });
            $image.on('focus', function() {
                $selectImageLink.focus();
            });
    
            if($.browser.msie){
                $("#drag-drop-message").hide();
            }
    
            //set up hypertext RTE for body
            var $body = $scope.find(".js-body");
            var editor = new jive.hte.HTE($body, { atMention: false });
            var editorDeferred = new $.Deferred();
            editor.addListener("initFinished", function(){
                that.emit("hteInitFinished");
                editorDeferred.resolve();
            }).addListener("hteFocus", function() {
                $previewBox.addClass('focus');
            }).addListener("hteBlur", function() {
                $previewBox.removeClass('focus');
                $body.trigger("change");
            });
    
            $.when(editorDeferred).done(function(){
                isFormDirty(); //init original value
            });
    
            function getFormStr(){
                var formStr = $form.serialize();
                formStr += "&imageUrl=" + encodeURIComponent($previewImage.attr("src"));
                formStr += "&editorBody=" + encodeURIComponent(editor.getValue());
                return formStr;
            }
    
            function isFormDirty(){
                if(isFormDirty.origVal){
                    console.log("orig: " + isFormDirty.origVal);
                    console.log("new:  " + getFormStr());
    
                    return getFormStr() != isFormDirty.origVal;
                }else{
                    //init origVal
                    isFormDirty.origVal = getFormStr();
                }
                return false;
            }
    
            $selectImageLink.on('click', function() {
                triggerImageFileInputClick();
            });
    
            function triggerImageFileInputClick() {
    //            $scope.find("#imageFileInput").trigger("click"); // TODO: handle the static image uploader -- move to a different view file?
            }
    
            /* -- Set up image upload -- */
            var $fileInput = $scope.find(".imageUploadForm").ajaxForm({
                dataType: "json",
                success: function(response){
                    //ask the JS API to wrap the response object.  This is not supported, per se.
                    response = osapi.jive.corev3._interceptData(response);
                    if(response.error){
                        console.log("image upload failed", response);
                        var error = {
                            type: response.error.context,
                            constraint: response.error.constraint
                        };
                        $(jive.staticFileStore.soy.errorMessage(error)).message({style: "error"});
                    } else {
                        that.emit("imageUploadSuccess", response);
                    }
                },
                beforeSerialize: function($form){
                    var suffix = String(Math.random() * Math.pow(2, 64));
                    var fileExt = $scope.find("#imageFileInput").val();
                    fileExt = fileExt.split('.').pop();

                    var imageMeta = {
                        'placeURI': options.containerUrl,
                        'filename': "slide-" + suffix,
                        'filenameExtension': fileExt,
                        'resize': true,
                        'maxWidth': '200',
                        'maxHeight': '150'
                    };
                    $form.find("input[name='json']").val(JSON.stringify(imageMeta));
                    }
            }).find("input[type='file']")
                .change(function(){

                    var  $uploadForm = $(this).parent("form");

                    jive.util.securedForm( $uploadForm ).then(function () {
                        $uploadForm.submit();
                    }, function(err) {
                        $(jive.staticFileStore.soy.errorMessage({type: "unknown"})).message({style: "error"});
                    });

                });


            function resetFileInputPosition(){
                var $displayedChild = $fileRegion.children(":visible");
                $fileInput.css({
                    "opacity": "0",
                    "position": "absolute",
                    "z-index": 1,
                    "outline": "none"
                })
                    .width(50)
                    .height(50);
    
                //The file input control needs to chase the mouse cursor around so that we can be assured
                //that we're clicking on an active region of it.
                $fileRegion.children().unbind("mousemove.fileCatch");
                $displayedChild.bind("mousemove.fileCatch", function(evt){
                    //move the file input.
                    var pos = {
                        'left': evt.pageX - 25,
                        'top': evt.pageY - 25
                    };
                    $fileInput.offset(pos);
                });
            }
            that.addListener("_resetFileInputPosition", resetFileInputPosition);
    
            resetFileInputPosition();
            $previewImage.load(function(){
                resetFileInputPosition();
                that.emit("dataChange");
            });
    
    
            /* -- Set up UI methods -- */
            ui = {};
            ui.getImage = function(){
                var image = $previewImage.attr("src");
                if(image == "/images/blank.gif"){
                    image = null;
                }
                return image;
            };
            ui.setImage = function(url){
                $previewImage.attr("src", url);
                $previewImage.parent().show();
                $scope.find(".js-no-image-link").hide();

                $image.val(url).trigger("change");
            };
            ui.getSubject = function(){
                return $subject.val();
            };
            ui.setSubject = function(text){
                $subject.val(text).trigger("change");
                that.emit("dataChange");
            };
            ui.getTargetLink = function(){
                return $targetLink.val();
            };
            ui.setTargetLink = function(url){
                $targetLink.val(url);
                that.emit("dataChange");
            };
            ui.getBody = function (){
                return editor.getValue();
            };
            ui.getContent = function(){
                return editor.getContent();
            };
            ui.updateImageToken = function(name, value){
                var $imgForm = $scope.find(".imageUploadForm");
    
                //replace the token value with the new one from the response
                $imgForm.find("input[name='jive.token.name']").val(name);
                $imgForm.find("input[name='" + name + "']").val(value);
            };
            ui.updatePreview = function(slide){
                // escape the subject here, since all uses are escaped somewhere else (before the template)
                slide.subject = soy.$$escapeHtml(slide.subject);
                var slidePreviewHtml = jive.imagelinks.imageLink({
                    slide: slide
                });
                $scope.find(".js-preview-box").html(slidePreviewHtml);
            };
            ui.isFormDirty = isFormDirty;
    
    
            // bind fun scrolly bits
            var $preview = $('.js-preview-wrapper');
            var top = $preview.offset().top;
    
            $(window).scroll(function() {
                if (top - $(this).scrollTop() <= 0) {
                    $preview.addClass('fixed');
                } else {
                    $preview.removeClass('fixed');
                }
            });

            $j('.j-preview-box').hover(function(){
                $j(this).addClass("hover");
            }, function () {
                $j(this).removeClass("hover");
            });


            if(relativeUrl.test($targetLink.val())) {
                $targetLink.val(absolutifyRelativeUrlWithoutBase($targetLink.val()));
            }

            // Auto-focus the subject/title input
            jive.conc.nextTick(function() {
                $targetLink.focus();
            });
        };
    
        //See the docs for jQuery.tools.validator.addEffect; these are the second and third params to that method.
        this.validationEffectError = function(errors) {
            $.each(errors, function (index) {
                //find or construct the error container for this element.
                var $errorContainer = $("label[for=\"" + getId(this.input, "field_") + "\"]");
                $errorContainer.children('.jive-error-message').remove(); //clear previous errors
    
                //add all the messages
                $.each(this.messages, function () {
                    $errorContainer.append(jive.error.form.fieldError({msg:this}));
                });
    
                //put it in place, and scroll to it if it's the first on the page
                var $input = $(this.input).attr("aria-invalid", "true");
                if (index === 0) {
                    $.scrollTo($errorContainer, 800, function(){
                        $input.focus();
                    });
                }
            });
            if(errors.length > 0){
                that.emit("_resetFileInputPosition");
            }
        };
        this.validationEffectPass = function($inputs){
            var changeCount = 0;
            $inputs.each(function(){
                $(this).attr("aria-invalid", "false");
                var $errorContainer = $("label[for=\"" + getId(this, "field_") + "\"]");
                var toRemove = $errorContainer.children(".jive-error-message");
                changeCount += toRemove.length;
                toRemove.remove();
            });
            if(changeCount > 0){
                that.emit("_resetFileInputPosition");
            }
        };
    }
});
;
define("jive/promise_util",["jquery"],function(d){function h(){var j=d.Deferred();j.resolve.apply(j,arguments);return j.promise()}function b(){var j=d.Deferred();j.reject.apply(j,arguments);return j.promise()}function c(k,l){var j=d.Deferred();k.then(j.resolve,function(){l.then(j.resolve,j.reject,j.notify)},j.notify);return j.promise()}function g(j){return d.when.apply(d,j).then(function(){return Array.prototype.slice.call(arguments)})}function e(k,j){k.then(j.resolve,j.reject,j.notify)}function a(m,o,n){var k=d.Deferred(),l=1800000;n=n||5000;o=o||Infinity;(function j(p){var q=m();q.done(e.bind(null,q,k)).fail(function(){var r=n*Math.pow(2,o-p);if(p<=1){e(q,k)}else{setTimeout(j.bind(null,p-1),Math.min(r,l))}})}(o));return k.promise()}function f(k){var j=d.Deferred();e(k,j);return j.promise()}function i(k){var j=d.Deferred();k(j.resolve,j.reject,j.notify);return j.promise()}return{success:h,failure:b,orElse:c,whenAll:g,proxy:e,retry:a,convert:f,promise:i}});
;
define("apps/shared/models/core_deferred",["jquery","underscore","jive/promise_util"],function(f,l,h){var e=function(){return e};e.runQuery=d;e.runAll=o;e.updateAll=a;e.getObject=m;e.withOsapi=c;e.slurp=j;e.squashBatchLists=g;function d(p){return n(p).then(function(r){var q=f.Deferred();r.execute(function(s){k(s,q)});return q.promise()})}function o(p){return h.whenAll(p.map(n)).then(function(q){return c(function(u){var r=u.newBatch();var t=q.map(function(w,v){r.add(String(v),w);return new f.Deferred()});var s=t.map(function(v){return v.promise().then(b)});r.execute(function(v){var w={batch:r,rawResponse:v};t.forEach(function(x,z){var y=String(z);k.call(w,v[y],x)})});return h.whenAll(s)})})}function a(p){return o(l.invoke(p,"update"))}function c(q){var p=f.Deferred();require(["apps/shared/models/lazy_corev3"],function(r){p.resolve(r)});return p.promise().then(q)}function n(p){if(f.isFunction(p.execute)){return h.success(p)}else{return c(p)}}function k(q,p){if(q.error){p.reject(q,this)}else{if(q.list){p.resolve(q.list,q)}else{p.resolve(q)}}}function j(q,p,r){if(!r){r=[]}if(q.length<p.itemsPerPage){return r.concat(q)}else{return d(p.getNextPage()).then(function(t,s){return j(t,s,r.concat(q))})}}function g(p){return l.pluck(p,0)}var i={3:"people",37:"places",600:"places",700:"places",14:"places",1527402675:"places"};function m(q,p){var s=i[q];if(!s){s="contents"}var r=function(t){var u=t.jive.corev3[s];return u.getByEntityDescriptor({entityDescriptor:q+","+p})};return d(r).then(function(t){return t[0]})}function b(){if(arguments.length>1){return Array.prototype.slice.apply(arguments)}else{if(arguments.length===1){return arguments[0]}else{return f.when()}}}return e});
;
jive.namespace('ImageLink.Edit');

/**
 * @depends path=/resources/scripts/jquery/jquery.validator.js
 * @depends path=/plugins/customer-service-plugin/resources/scripts/apps/imageLinks/edit/view.js
 * @depends i18nKeys=content.validation.*
 */
define('jive.ImageLink.Edit.Main', ['jquery', 'apps/shared/models/core_deferred', 'jive.ImageLink.Edit.View'], function($, core, View) {
	return function editMain(options) {
		var origImageUrl = null;
		var imageStatics = [];
		var redirectUrl = "/manage-image-nav.jspa?containerType=" + options.containerType + "&containerID=" + options.containerId;
		
		var $scope = $(".js-image-link.js-edit");
		var $form = $scope.find(".js-image-link-form");
		
		var view = new jive.ImageLink.Edit.View($j.extend({
			$scope: $scope
		}, options));
		
		view.addListener("resolve", resolveUrl);
		view.addListener("hteInitFinished", function() {
			$scope.on("change", "*", refreshPreview);
			setInterval(function checkBody() {
				var newText = view.getBody();
				if (checkBody.lastText && checkBody.lastText != newText) {
					refreshPreview();
				}
				checkBody.lastText = newText;
			}, 2000);
			view.addListener("dataChange", function() {
				refreshPreview();
			});
			refreshPreview();
		});
		
		view.addListener("imageUploadSuccess", function(response) {
			console.log("uploaded image: ", response);
			imageStatics.push(response);
			view.setImage(response.resources.html.ref);
		});
		
		view.addListener("cancelClicked", function() {
			var imageLink = null;
			if (options.slideId >= 0) {
				imageLink = core.getObject(options.slideType, options.slideId);
			}
			$.when(imageLink).pipe(function(imageLink) {
				return cleanupImageStatics(imageLink);
			}).done(function() {
				window.location = redirectUrl;
			});
		});
		
		view.addListener("disabledField", function($field) {
			view.validationEffectPass($field);
		});
		
		var linkService = new jive.rte.LinkService();
		setUnloadHandler();
		
		(function initialize(){
			var slideToEdit;
			if(options.slideId >= 0) {
				slideToEdit = core.getObject(options.slideType, options.slideId);
			} else {
                slideToEdit = core.withOsapi(function(osapi) {
                    var slide = new osapi.jive.corev3.contents.Slide();
                    slide.subject = '';
                    return slide;
                });
			}
			$.when(slideToEdit, core.getObject(options.containerType, options.containerId)).then(function initView(slideToEdit, container) {
				view.initView($.extend({
					slide: slideToEdit,
					containerUrl: container.resources.self.ref
				}, options));
				
				$form.validator({
					lang: _jive_locale,
					messageClass: 'jive-error-message',
					inputEvent: 'change',
					effect: "slideEdit",
					formEvent: null
				});
				
				origImageUrl = slideToEdit.image;
			});
		})();
		
		function cleanupImageStatics(slide) {
			if(origImageUrl) {
				return core.runQuery(osapi.jive.corev3.statics.get({htmlRef: origImageUrl})).pipe(function(staticObj) {
					imageStatics.push(staticObj[0]);
					return clearStatics();
				}, clearStatics);
			} else {
				return clearStatics();
			}
			
			function clearStatics() {
				var queue = [];
				for(var i = 0; i <imageStatics.length; ++i) {
					if(imageStatics[i] && (!slide || (imageStatics[i].resources.html.ref != slide.image && _jive_base_absolute_url + imageStatics[i].resources.html.ref != slide.image ))) {
						queue.push(core.runQuery(imageStatics[i].destroy()));
					}
				}
				return $.when.apply($, queue);
			}
		}
		
		$.tools.validator.localize(_jive_locale, {
	        '*': jive.i18n.getMsg('content.validation.any'),
	        ':email': jive.i18n.getMsg('content.validation.email'),
	        ':number': jive.i18n.getMsg('content.validation.number'),
	        ':url': jive.i18n.getMsg('content.validation.url'),
	        '[max]': jive.i18n.getMsg('content.validation.max'),
	        '[min]': jive.i18n.getMsg('content.validation.min'),
	        '[required]': jive.i18n.getMsg('content.validation.required')
		});
		$.tools.validator.addEffect("slideEdit", view.validationEffectError, view.validationEffectPass);
//		$.tools.validator.fn("textarea.js-body", jive.i18n.getMsg('content.validation.required'), function(value, element) {
//			var content = view.getContent();
//			return !!content;
//		});
		
		var formService = new jive.rte.FormService({
			$form: $form,
			formSubmitHandler: function(evt) {
				evt.preventDefault();
				
				getSlideFromFormData().pipe(function(slide) {
					if(typeof slide.update === 'function') {
						return core.runQuery(slide.update());
					} else {
                        return core.runQuery(function(osapi) {
                            return osapi.jive.corev3.slides.create(slide);
                        });
					}
				}).done(function (createSlide) {
					cleanupImageStatics(createSlide).done(function() {
						clearUnloadHandler();
						window.location = redirectUrl;
					});
				});
			}
		});
		
		function getSlideFromFormData() {
			return core.getObject(options.containerType, options.containerId).pipe(function(parentContainer) {
				var parentUri = parentContainer.resources.self.ref;
				var image = view.getImage();
				var targetLink = stripDownTargetLink(view.getTargetLink());
				
				if(options.slideId == -1) {
					var slideToCreate = new osapi.jive.corev3.contents.Slide();
					slideToCreate.type = 'slide';
					slideToCreate.author = '@me';
					slideToCreate.content = { text: '<body>placeholder</body>', type: 'text/html' };
					slideToCreate.parent = parentUri;
					slideToCreate.status = 'published';
					slideToCreate.subject = view.getSubject();
					slideToCreate.targetLink = targetLink;
					slideToCreate.image = image;
					slideToCreate.sortKey = Math.round(new Date().getTime()/10000);
					return slideToCreate;
				} else {
					return core.getObject(options.slideType, options.slideId).pipe(function(slideToEdit) {
						slideToEdit.content.type = 'text/html';
						slideToEdit.content.text = view.getBody();
						slideToEdit.parent = parentUri;
						slideToEdit.status = 'published';
						slideToEdit.subject = view.getSubject();
						slideToEdit.targetLink = targetLink;
						slideToEdit.image = image;
						return slideToEdit;
					});
				}
			});
		}

        function stripDownTargetLink(targetLink) {
            if(targetLink.startsWith(window._jive_base_absolute_url)) {
                return targetLink.substring(window._jive_base_absolute_url.length);
            }

            return targetLink;
        }
		
	    function refreshPreview(){
	        getSlideFromFormData().done(function(ann){
	            view.updatePreview(ann);
	        });
	    }
	    
	    function setUnloadHandler(){
	        $(window).on("beforeunload.slideEdit", function(){
	            if(view.isFormDirty()){
	                return '';
	            }
	        });
	    }
	    
	    function clearUnloadHandler(){
	        $(window).off("beforeunload.slideEdit");
	    }
	    
	    function resolveUrl(url){
	        //start spinner
	        var spinner = new jive.loader.LoaderView({size: 'big'});
	        spinner.prependTo($scope);
	        $j("#j-loading-content").focus();

	        //prevent submit until resolved
	        var disableToken = formService.setFormEnabled(false);
	        var linkTitleDeferred = linkService.resolve(url).deferred()
	            .then(function(linkData){
	                var title = linkData.title;
	                title = $j("<div></div>").html(title).text();  //turn any entities into actual characters

	                //Limit the title to 120 characters
	                if(title.length > 120){
	                    title = title.substring(0, 120) + "\u2026"; //ellipsis
	                }
	                view.setSubject(title);
	            }, function(err){
	                console.log("resolveLink failed", err);
	                view.setSubject(url);
	            });

	        $j.when(linkTitleDeferred).always(function(){
	            formService.setFormEnabled(disableToken);
	            spinner.destroy();
	            spinner.getContent().remove();
	        });
	        view.setTargetLink(url);
	    }

	};	
});

;
// This file was automatically generated from deluxe_ask_a_question.soy.
// Please don't edit this file by hand.

goog.provide('jive.widget.deluxeaskaquestion.answeredQuestionResults');
goog.provide('jive.widget.deluxeaskaquestion.browseUrl');
goog.provide('jive.widget.deluxeaskaquestion.chooseContainerModal');
goog.provide('jive.widget.deluxeaskaquestion.documentResults');
goog.provide('jive.widget.deluxeaskaquestion.lookingfor');
goog.provide('jive.widget.deluxeaskaquestion.main');
goog.provide('jive.widget.deluxeaskaquestion.result');
goog.provide('jive.widget.deluxeaskaquestion.results');
goog.provide('jive.widget.deluxeaskaquestion.resultsGroup');
goog.provide('jive.widget.deluxeaskaquestion.rootcontainer');
goog.provide('jive.widget.deluxeaskaquestion.searchUrl');
goog.provide('jive.widget.deluxeaskaquestion.threadResults');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.shared.soy.resourceInlineJs');


jive.widget.deluxeaskaquestion.main = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  jive.shared.soy.resourceInlineJs({code: '$j(function() {new jive.DeluxeAskAQuestion.Main({widgetFrameID: ' + soy.$$escapeHtml(opt_data.widgetFrameID) + ', numResults: ' + soy.$$escapeHtml(opt_data.numResults) + ', canConfig: ' + soy.$$escapeHtml(opt_data.canConfig) + ', config: ' + soy.$$filterNoAutoescape(JSON.stringify(opt_data.config).replace(/</g, '\\u003C').replace(/>/g, '\\u003E').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029')) + '});});'}, output);
  output.append('<div class="ask-a-question-container"><form action="', soy.$$escapeHtml(jive.soy.func.buildUrl('/discussion/create.jspa')), '" method="GET" class="j-form">', (opt_data.canConfig) ? '<span><a href="#" class="deluxe-config-link">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('widget.deluxeaskaquestion.config.link'),[])) + '</a></span>' : '', (opt_data.config.postTargetMode == 1) ? '<input type="hidden" name="chooseContainer" value="true" />' : '', '<input type="text" aria-required="true" required class="ask-a-question-search" autocomplete="off" placeholder="', soy.$$escapeHtml(opt_data.config.headerText), '" /><button type="submit">', soy.$$escapeHtml(opt_data.config.submitButtonText), '</button></form></div>');
  return opt_sb ? '' : output.toString();
};


jive.widget.deluxeaskaquestion.rootcontainer = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<h2>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('widget.askaquestion.root_container'),[])), '</h2>');
  return opt_sb ? '' : output.toString();
};


jive.widget.deluxeaskaquestion.results = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="ask-a-question-results">');
  if (opt_data.bean.threadResults) {
    jive.widget.deluxeaskaquestion.threadResults({results: opt_data.bean.threadResults, query: opt_data.bean.query, containerBrowseID: opt_data.bean.containerBrowseID, containerName: opt_data.bean.container.name}, output);
  }
  if (opt_data.bean.answeredQuestionResults) {
    jive.widget.deluxeaskaquestion.answeredQuestionResults({results: opt_data.bean.answeredQuestionResults, query: opt_data.bean.query, containerBrowseID: opt_data.bean.containerBrowseID, containerName: opt_data.bean.container.name, containerPath: opt_data.bean.container.jiveObjectURL}, output);
  }
  if (opt_data.bean.documentResults) {
    jive.widget.deluxeaskaquestion.documentResults({results: opt_data.bean.documentResults, query: opt_data.bean.query, containerBrowseID: opt_data.bean.containerBrowseID, containerName: opt_data.bean.container.name}, output);
  }
  output.append((opt_data.bean.hasResults) ? '<h4>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('widget.askaquestion.dont_see'),[])) + '</h4>' : '', '</div>');
  return opt_sb ? '' : output.toString();
};


jive.widget.deluxeaskaquestion.threadResults = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  jive.widget.deluxeaskaquestion.resultsGroup(soy.$$augmentMap(opt_data, {headerText: jive.i18n.i18nText(jive.i18n.getMsg('widget.deluxeaskaquestion.results.discussions.header'),[]), type: 'discussion'}), output);
  return opt_sb ? '' : output.toString();
};


jive.widget.deluxeaskaquestion.answeredQuestionResults = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  jive.widget.deluxeaskaquestion.resultsGroup(soy.$$augmentMap(opt_data, {headerText: jive.i18n.i18nText(jive.i18n.getMsg('widget.deluxeaskaquestion.results.answered_questions.header'),[]), type: 'answeredQuestion'}), output);
  return opt_sb ? '' : output.toString();
};


jive.widget.deluxeaskaquestion.documentResults = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  jive.widget.deluxeaskaquestion.resultsGroup(soy.$$augmentMap(opt_data, {headerText: jive.i18n.i18nText(jive.i18n.getMsg('widget.deluxeaskaquestion.results.documents.header'),[]), type: 'document'}), output);
  return opt_sb ? '' : output.toString();
};


jive.widget.deluxeaskaquestion.resultsGroup = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="ask-a-question-results-group"><h4>', soy.$$escapeHtml(opt_data.headerText), '</h4><ul>');
  var resultList81 = opt_data.results;
  var resultListLen81 = resultList81.length;
  for (var resultIndex81 = 0; resultIndex81 < resultListLen81; resultIndex81++) {
    var resultData81 = resultList81[resultIndex81];
    jive.widget.deluxeaskaquestion.result({result: resultData81, query: opt_data.query}, output);
  }
  output.append('<li><span class="jive-icon-sml jive-icon-magnifyingglass" />');
  if (opt_data.type == 'answeredQuestion') {
    jive.widget.deluxeaskaquestion.browseUrl(opt_data, output);
  } else {
    jive.widget.deluxeaskaquestion.searchUrl(opt_data, output);
  }
  output.append('</li></ul></div>');
  return opt_sb ? '' : output.toString();
};


jive.widget.deluxeaskaquestion.browseUrl = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.containerBrowseID == 0) ? '<a href="' + soy.$$escapeHtml(jive.soy.func.buildUrl('/content',{'filterID':'all~objecttype~objecttype[thread]~thread[answered]'})) + '" class="ask-a-question-search-all">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('widget.askaquestion.search'),[])) + ' &rarr;</a>' : '<a href="' + soy.$$escapeHtml(jive.soy.func.buildUrl(opt_data.containerPath + '/content',{'filterID':'contentstatus[published]~objecttype~objecttype[thread]~thread[answered]'})) + '" class="ask-a-question-search-all">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('widget.askaquestion.search.space'),[opt_data.containerName])) + ' &rarr;</a>');
  return opt_sb ? '' : output.toString();
};


jive.widget.deluxeaskaquestion.searchUrl = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.containerBrowseID == 0) ? '<a href="' + soy.$$escapeHtml(jive.soy.func.buildUrl('/search.jspa',{'facet':'content','type':opt_data.type,'q':opt_data.query,'sort':'relevanceDesc'})) + '" class="ask-a-question-search-all">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('widget.askaquestion.search'),[])) + ' &rarr;</a>' : '<a href="' + soy.$$escapeHtml(jive.soy.func.buildUrl('/search.jspa',{'facet':'content','type':opt_data.type,'q':opt_data.query,'sort':'relevanceDesc','place':'/places/' + opt_data.containerBrowseID})) + '" class="ask-a-question-search-all">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('widget.askaquestion.search.space'),[opt_data.containerName])) + ' &rarr;</a>');
  return opt_sb ? '' : output.toString();
};


jive.widget.deluxeaskaquestion.result = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li><a href="', soy.$$escapeHtml(opt_data.result.objectURL), '?q=', soy.$$escapeHtml(opt_data.query), '" class="ask-a-question-result-item"><span class="', soy.$$escapeHtml(opt_data.result.objectCSS), '" /><span class="j-search-result">', soy.$$escapeHtml(opt_data.result.subject), '</span><em>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('widget.askaquestion.askedby'),[opt_data.result.userDisplayName,(opt_data.result.created ? _jive_moment((parseFloat(opt_data.result.created) ? parseFloat(opt_data.result.created) : opt_data.result.created)).lang(_jive_locale.toLowerCase().replace('_','-')).format('LLL') : '')])), '</em><em class="ask-a-question-result-body">', soy.$$escapeHtml(opt_data.result.body), '</em></a></li>');
  return opt_sb ? '' : output.toString();
};


jive.widget.deluxeaskaquestion.chooseContainerModal = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="jive-modal j-modal jive-modal-deluxe-choose-container" id="jive-modal-deluxe-choose-container"><header><h2>', soy.$$escapeHtml(opt_data.title), '</h2></header><label class="j-508-label" id="close-modal-508">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.close.modal'),[])), '</label><a href="#" class="j-modal-close-top close" aria-labelledby="close-modal-508" title="', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.close.modal'),[])), '">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.close'),[])), '<span class="j-close-icon j-ui-elem" role="img"></span></a><section class="jive-modal-content j-deluxe-choose-container-modal clearfix"><p>', soy.$$escapeHtml(opt_data.instructions), '</p><div class="deluxe-container-list"><ul>');
  var placeList147 = opt_data.containers;
  var placeListLen147 = placeList147.length;
  for (var placeIndex147 = 0; placeIndex147 < placeListLen147; placeIndex147++) {
    var placeData147 = placeList147[placeIndex147];
    output.append('<li><span class="', soy.$$escapeHtml(placeData147.cssClass), '"></span><a href="#" class="question-container" data_type="', soy.$$escapeHtml(placeData147.type), '" data_id="', soy.$$escapeHtml(placeData147.id), '">', soy.$$escapeHtml(placeData147.name), '</a></li>');
  }
  output.append('</ul></div></section></div>');
  return opt_sb ? '' : output.toString();
};


jive.widget.deluxeaskaquestion.lookingfor = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="jive-info-box lookingfor"><div><span class="jive-icon-med jive-icon-question"></span><span class="j-looking-for">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('widget.deluxeaskaquestion.looking_for'),[])), '</span><a id="ask_a_question_looking_for_yes" href="#">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.yes'),[])), '</a><a href="', soy.$$escapeHtml(opt_data.referer), '">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('widget.askaquestion.take_back'),[])), '</a><a href="', soy.$$escapeHtml(jive.soy.func.buildUrl('/search.jspa',{'view':'content','q':opt_data.query})), '">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('widget.askaquestion.search_whole_community'),[opt_data.query])), '</a></div></div>');
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from deluxe_question_config.soy.
// Please don't edit this file by hand.

goog.provide('jive.widget.deluxeaskaquestion.config.configModal');
goog.provide('jive.widget.deluxeaskaquestion.config.main');
goog.provide('jive.widget.deluxeaskaquestion.config.missingHeaderTextMessage');
goog.provide('jive.widget.deluxeaskaquestion.config.missingPlacePickerInstructionsMessage');
goog.provide('jive.widget.deluxeaskaquestion.config.missingPlacePickerTitleMessage');
goog.provide('jive.widget.deluxeaskaquestion.config.missingPostTargetModeMessage');
goog.provide('jive.widget.deluxeaskaquestion.config.missingResultsDisplayMessage');
goog.provide('jive.widget.deluxeaskaquestion.config.missingSearchSourceMessage');
goog.provide('jive.widget.deluxeaskaquestion.config.missingSubmitButtonTextMessage');
goog.provide('jive.widget.deluxeaskaquestion.config.missingTargetPlaceMessage');
goog.provide('jive.widget.deluxeaskaquestion.config.missingTargetPlacesMessage');
goog.provide('jive.widget.deluxeaskaquestion.config.multiPlacePicker');
goog.provide('jive.widget.deluxeaskaquestion.config.saveConfirmation');
goog.provide('jive.widget.deluxeaskaquestion.config.selectedPlace');
goog.provide('jive.widget.deluxeaskaquestion.config.singlePlacePicker');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.shared.soy.resourceInlineJs');


jive.widget.deluxeaskaquestion.config.main = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  jive.shared.soy.resourceInlineJs({code: '$j(function() {require([\'jive.DeluxeAskAQuestion.ConfigApp.Main\'], function(Main) {new Main({widgetFrameID: ' + soy.$$escapeHtml(opt_data.widgetFrameID) + ', config: ' + soy.$$filterNoAutoescape(JSON.stringify(opt_data.config).replace(/</g, '\\u003C').replace(/>/g, '\\u003E').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029')) + ', initialConfig: true});});});'}, output);
  output.append('<div class="deluxe-config-notice">', (opt_data.canConfig) ? '<h3><a href="#" class="deluxe-config-link" data_widgetFrameID="' + soy.$$escapeHtml(opt_data.widgetFrameID) + '">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('widget.deluxeaskaquestion.config_needed.link'),[])) + '</a></h3>' : '<h3>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('widget.deluxeaskaquestion.config_needed'),[])) + '</h3>', '</div>');
  return opt_sb ? '' : output.toString();
};


jive.widget.deluxeaskaquestion.config.configModal = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="jive-modal j-modal jive-modal-deluxe-config" id="jive-modal-deluxe-config"><header><h2>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('widget.deluxeaskaquestion.config.title'),[])), '</h2></header><label class="j-508-label" id="close-modal-508">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.close.modal'),[])), '</label><a href="#" class="j-modal-close-top close" aria-labelledby="closed-modal-508" title="', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.close.modal'),[])), '">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.close'),[])), '<span class="j-close-icon j-ui-elem" role="img"></span></a><section class="jive-modal-content j-deluxe-config-modal clearfix"><form id="deluxe-config-form" action="" class="j-form"><div class="j-form-row"><label for="header-text-input">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('widget.deluxeaskaquestion.config.header.text.label'),[])), '</label><input type="text" id="header-text-input" class="required" name="headerText" value="', soy.$$escapeHtml(opt_data.headerText), '" /></div><div class="j-form-row"><label for="submit-button-text-input">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('widget.deluxeaskaquestion.config.submit.button.text.label'),[])), '</label><input type="text" id="submit-button-text-input" class="required" name="submitButtonText" value="', soy.$$escapeHtml(opt_data.submitButtonText), '" /></div><div class="j-form-row"><label>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('widget.deluxeaskaquestion.config.sources.label'),[])), '</label><ul><li><input type="radio" name="searchSourceMode" id="source_all" value="0" ', (opt_data.searchSourceMode == 0) ? 'checked="checked"' : '', '/><label class="radio-label" for="source_all">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('widget.deluxeaskaquestion.config.all_places.text'),[])), '</label></li><li><input type="radio" name="searchSourceMode" id="source_single" value="1" ', (opt_data.searchSourceMode == 1) ? 'checked="checked"' : '', '/><label class="radio-label" for="source_single">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('widget.deluxeaskaquestion.config.single_place.text'),[])), '</label>');
  jive.widget.deluxeaskaquestion.config.singlePlacePicker({pickerID: 'source-place-picker-' + soy.$$escapeHtml(opt_data.widgetFrameID), shouldNotDisplay: opt_data.searchSourceMode != 1, containerTypeFieldName: 'sourceContainerType', containerTypeFieldID: 'source-container-chooser-type-' + soy.$$escapeHtml(opt_data.widgetFrameID), containerIDFieldName: 'sourceContainerID', containerIDFieldID: 'source-container-chooser-id-' + soy.$$escapeHtml(opt_data.widgetFrameID), chooserFieldID: 'source-container-chooser-' + soy.$$escapeHtml(opt_data.widgetFrameID), chooserFieldName: 'sourceContainerName', containerSelectedID: 'source-container-chooser-selected-' + soy.$$escapeHtml(opt_data.widgetFrameID), selectedPlace: opt_data.searchSource, pickerName: 'sourceAutocompleteContainer'}, output);
  output.append('</li></ul></div><div class="j-form-row"><label>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('widget.deluxeaskaquestion.config.results.label'),[])), '</label><ul><li><input type="checkbox" name="displayThreadsResultsPane" id="display_threads_pane" ', (opt_data.displayThreadsResultsPane == true) ? 'checked="checked"' : '', ' /><label class="radio-label" for="display_threads_pane">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('widget.deluxeaskaquestion.config.display_threads_pane.text'),[])), '</label></li><li><input type="checkbox" name="displayAnsweredQuestionsResultsPane" id="display_answered_questions_pane" ', (opt_data.displayAnsweredQuestionsResultsPane == true) ? 'checked="checked"' : '', ' /><label class="radio-label" for="display_answered_questions_pane">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('widget.deluxeaskaquestion.config.display_answered_questions_pane.text'),[])), '</label></li><li><input type="checkbox" name="displayDocumentsResultsPane" id="display_documents_pane" ', (opt_data.displayDocumentsResultsPane == true) ? 'checked="checked"' : '', ' /><label class="radio-label" for="display_documents_pane">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('widget.deluxeaskaquestion.config.display_documents_pane.text'),[])), '</label></li></ul></div><div class="j-form-row"><label>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('widget.deluxeaskaquestion.config.target.label'),[])), '</label><ul><li><input type="radio" name="postTargetMode" id="target_single" value="2" ', (opt_data.postTargetMode == 2) ? 'checked="checked"' : '', ' /><label class="radio-label" for="post_single">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('widget.deluxeaskaquestion.config.target_single.text'),[])), '</label>');
  jive.widget.deluxeaskaquestion.config.singlePlacePicker({pickerID: 'target-place-picker-' + soy.$$escapeHtml(opt_data.widgetFrameID), shouldNotDisplay: opt_data.postTargetMode != 2, containerTypeFieldName: 'targetContainerType', containerTypeFieldID: 'target-container-chooser-type-' + soy.$$escapeHtml(opt_data.widgetFrameID), containerIDFieldName: 'targetContainerID', containerIDFieldID: 'target-container-chooser-id-' + soy.$$escapeHtml(opt_data.widgetFrameID), chooserFieldID: 'target-container-chooser-' + soy.$$escapeHtml(opt_data.widgetFrameID), chooserFieldName: 'targetContainerName', containerSelectedID: 'target-container-chooser-selected-' + soy.$$escapeHtml(opt_data.widgetFrameID), selectedPlace: opt_data.postTarget, pickerName: 'targetAutocompleteContainer'}, output);
  output.append('</li><li><input type="radio" name="postTargetMode" id="target_choice" value="1" ', (opt_data.postTargetMode == 1) ? 'checked="checked"' : '', ' /><label class="radio-label" for="post_choice">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('widget.deluxeaskaquestion.config.target_choice.text'),[])), '</label>');
  jive.widget.deluxeaskaquestion.config.multiPlacePicker({pickerID: 'target-places-picker-' + soy.$$escapeHtml(opt_data.widgetFrameID), shouldNotDisplay: opt_data.postTargetMode != 1, containersFieldName: 'targetContainers', containersFieldID: 'target-containers-' + soy.$$escapeHtml(opt_data.widgetFrameID), chooserFieldID: 'target-containers-chooser-' + soy.$$escapeHtml(opt_data.widgetFrameID), chooserFieldName: 'target-containers-chooser', containerSelectedID: 'target-containers-chooser-selected-' + soy.$$escapeHtml(opt_data.widgetFrameID), selectedContainersStr: opt_data.postTargetsStr, selectedContainers: opt_data.postTargets, pickerName: 'targetAutocompleteContainers'}, output);
  output.append('</li></ul></div><div class="j-form-row place-picker-row" ', (opt_data.postTargetMode != 1) ? 'style="display: none;"' : '', '><label for="place-picker-title-input">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('widget.deluxeaskaquestion.config.place_picker.title.label'),[])), '</label><input type="text" id="place-picker-title-input" name="targetPlacePickerTitle" value="', soy.$$escapeHtml(opt_data.targetPlacePickerTitle), '" /></div><div class="j-form-row place-picker-row" ', (opt_data.postTargetMode != 1) ? 'style="display: none;"' : '', '><label for="place-picker-instructions-input">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('widget.deluxeaskaquestion.config.place_picker.instructions.label'),[])), '</label><input type="text" id="place-picker-instructions-input" name="targetPlacePickerInstructions" value="', soy.$$escapeHtml(opt_data.targetPlacePickerInstructions), '" /></div><div class="j-form-row j-form-buttons"><input type="submit" name="save-config" class="j-btn-callout" value="', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('widget.deluxeaskaquestion.config.save.text'),[])), '" /><button type="button" class="close">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.cancel'),[])), '</button></div></section></form></section></div>');
  return opt_sb ? '' : output.toString();
};


jive.widget.deluxeaskaquestion.config.singlePlacePicker = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="', soy.$$escapeHtml(opt_data.pickerID), '" ', (opt_data.shouldNotDisplay) ? 'style="display: none;"' : '', '><input type="hidden" name="', soy.$$escapeHtml(opt_data.containerTypeFieldName), '" id="', soy.$$escapeHtml(opt_data.containerTypeFieldID), '" value="', (opt_data.selectedPlace) ? soy.$$escapeHtml(opt_data.selectedPlace.type) : '-1', '" /><input type="hidden" name="', soy.$$escapeHtml(opt_data.containerIDFieldName), '" id="', soy.$$escapeHtml(opt_data.containerIDFieldID), '" value="', (opt_data.selectedPlace) ? soy.$$escapeHtml(opt_data.selectedPlace.id) : '-1', '" /><div id="', soy.$$escapeHtml(opt_data.containerSelectedID), '" onclick="', soy.$$escapeHtml(opt_data.pickerName), '.removeContainer(); return false;" ', (! opt_data.selectedPlace) ? 'style="display: none;"' : '', '>', (opt_data.selectedPlace) ? '<span><span class="' + soy.$$escapeHtml(opt_data.selectedPlace.cssClass) + '"></span>' + soy.$$escapeHtml(opt_data.selectedPlace.name) + '</span>' + ((opt_data.selectedPlace.visibleToPartner) ? '<span title="' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('partner.browse.ext_access'),[])) + '" class="jive-icon-med jive-icon-partner"></span>' : '') : '', '<a class="j-js-change" href="#" class="font-color-meta">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.change'),[])), '</a></div><input type="text" id="', soy.$$escapeHtml(opt_data.chooserFieldID), '" name="', soy.$$escapeHtml(opt_data.chooserFieldName), '" class="jive-autocomplete" ', (opt_data.selectedPlace) ? 'style="display:none;"' : '', ' /></div>');
  jive.shared.soy.resourceInlineJs({code: '$j(function() {var ' + soy.$$escapeHtml(opt_data.pickerName) + ' = new JiveContainerPicker({showRootCommunity: false, chooser: \'' + soy.$$escapeHtml(opt_data.chooserFieldID) + '\', containerSelected: \'' + soy.$$escapeHtml(opt_data.containerSelectedID) + '\', containerTypeField: \'' + soy.$$escapeHtml(opt_data.containerTypeFieldID) + '\', containerIDField: \'' + soy.$$escapeHtml(opt_data.containerIDFieldID) + '\'});});'}, output);
  return opt_sb ? '' : output.toString();
};


jive.widget.deluxeaskaquestion.config.multiPlacePicker = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="', soy.$$escapeHtml(opt_data.pickerID), '" ', (opt_data.shouldNotDisplay) ? 'style="display: none;"' : '', '><input type="hidden" name="', soy.$$escapeHtml(opt_data.containersFieldName), '" id="', soy.$$escapeHtml(opt_data.containersFieldID), '" value="', (opt_data.selectedContainersStr) ? soy.$$escapeHtml(opt_data.selectedContainersStr) : '', '" /><div id="', soy.$$escapeHtml(opt_data.containerSelectedID), '" class="jive-chooser-list j-result-list clearfix"><ul class="clearfix">');
  if (opt_data.selectedContainers) {
    var containerList269 = opt_data.selectedContainers;
    var containerListLen269 = containerList269.length;
    for (var containerIndex269 = 0; containerIndex269 < containerListLen269; containerIndex269++) {
      var containerData269 = containerList269[containerIndex269];
      jive.widget.deluxeaskaquestion.config.selectedPlace(containerData269, output);
    }
  }
  output.append('</ul></div><input type="text" id="', soy.$$escapeHtml(opt_data.chooserFieldID), '" name="', soy.$$escapeHtml(opt_data.chooserFieldName), '" class="jive-autocomplete" /></div>');
  jive.shared.soy.resourceInlineJs({code: '$j(function() {var ' + soy.$$escapeHtml(opt_data.pickerName) + ' = new JiveMultiContainerPicker({showRootCommunity: false, chooser: \'' + soy.$$escapeHtml(opt_data.chooserFieldID) + '\', containerSelected: \'' + soy.$$escapeHtml(opt_data.containerSelectedID) + '\', containersField: \'' + soy.$$escapeHtml(opt_data.containersFieldID) + '\'});});'}, output);
  return opt_sb ? '' : output.toString();
};


jive.widget.deluxeaskaquestion.config.selectedPlace = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li data-container-type="', soy.$$escapeHtml(opt_data.type), '" data-container-id="', soy.$$escapeHtml(opt_data.id), '"><span>', (opt_data.cssClass) ? '<span class="' + soy.$$escapeHtml(opt_data.cssClass) + '"></span>' : '', soy.$$escapeHtml(opt_data.name), '</span>', (opt_data.visibleToPartner) ? '<span title="' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('partner.browse.ext_access'),[])) + '" class="jive-icon-med jive-icon-partner"></span>' : '', '<em><a class="remove" href="#">Remove</a></em></li>');
  return opt_sb ? '' : output.toString();
};


jive.widget.deluxeaskaquestion.config.saveConfirmation = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<p>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('widget.deluxeaskaquestion.config.save_confirmation.text'),[])), '</p>');
  return opt_sb ? '' : output.toString();
};


jive.widget.deluxeaskaquestion.config.missingHeaderTextMessage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="error">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('widget.deluxeaskaquestion.config.error.header_text.missing'),[])), '</span>');
  return opt_sb ? '' : output.toString();
};


jive.widget.deluxeaskaquestion.config.missingSubmitButtonTextMessage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="error">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('widget.deluxeaskaquestion.config.error.submit_button_text.missing'),[])), '</span>');
  return opt_sb ? '' : output.toString();
};


jive.widget.deluxeaskaquestion.config.missingResultsDisplayMessage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="error">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('widget.deluxeaskaquestion.config.error.results_display.missing'),[])), '</span>');
  return opt_sb ? '' : output.toString();
};


jive.widget.deluxeaskaquestion.config.missingPostTargetModeMessage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="error">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('widget.deluxeaskaquestion.config.error.post_target_mode.missing'),[])), '</span>');
  return opt_sb ? '' : output.toString();
};


jive.widget.deluxeaskaquestion.config.missingSearchSourceMessage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="error">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('widget.deluxeaskaquestion.config.error.search_source.missing'),[])), '</span>');
  return opt_sb ? '' : output.toString();
};


jive.widget.deluxeaskaquestion.config.missingTargetPlaceMessage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="error">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('widget.deluxeaskaquestion.config.error.target_place.missing'),[])), '</span>');
  return opt_sb ? '' : output.toString();
};


jive.widget.deluxeaskaquestion.config.missingTargetPlacesMessage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="error">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('widget.deluxeaskaquestion.config.error.target_places.missing'),[])), '</span>');
  return opt_sb ? '' : output.toString();
};


jive.widget.deluxeaskaquestion.config.missingPlacePickerTitleMessage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="error">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('widget.deluxeaskaquestion.config.error.place_picker_title.missing'),[])), '</span>');
  return opt_sb ? '' : output.toString();
};


jive.widget.deluxeaskaquestion.config.missingPlacePickerInstructionsMessage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="error">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('widget.deluxeaskaquestion.config.error.place_picker_instructions.missing'),[])), '</span>');
  return opt_sb ? '' : output.toString();
};

;
define("jive/fresh_action_queue",["jquery"],function(a){return function b(h){var d=[],i=[],c=[];if(typeof h==="undefined"){h=500}function f(o,n){var l=new a.Deferred();var m=g(d.length,n);d.push(o);i.push(new Date());c.push(n);function k(){if(e(o,n)){o.then(function(){l.resolve.apply(l,arguments)},function(){l.reject.apply(l,arguments)})}}o.then(k,k,function(){l.notify.apply(l,arguments)});if(h&&m){j(m.promise,m.time,m.group)}return l.promise()}function j(o,n,m){var l=new Date();var k=l-n;setTimeout(e.bind(null,o,m),Math.max(h-k,0))}function e(o,n){var p=d.lastIndexOf(o);var l=g(p,n);var k=d.length;var m;if(p>-1){if(l){d=d.slice(l.index+1);i=i.slice(l.index+1);c=c.slice(l.index+1)}m=k-d.length;d.splice(p-m,1);i.splice(p-m,1);c.splice(p-m,1);return o}}function g(m,l){for(var k=m-1;k>=0;k-=1){if(typeof l==="undefined"||c[k]!==l){return{index:k,promise:d[k],time:i[k],group:c[k]}}}}return{push:f}}});
;
(function(d){var f={typeAheadOptions:{keystrokeWait:400},popoverOptions:{focusPopover:false,onClose:d.noop,addClass:"j-autocomplete",setRole:"listbox"},processResults:h,parseSearchString:h,displayResults:l,displayEmptySearch:false,closeOnBlur:true,minChars:2,clearButton:d()};function h(m){return m}function l(n,m){d(n).popover(m);return m}function c(n,m){var o=this;n=d.extend(true,{},f,n);n.input=m;n.popoverOptions.context=m;var q=n.popoverOptions.onClose;n.popoverOptions.onClose=function(){m.trigger("closed");return q()};n.popoverOptions.returnPopover=true;if(!n.queryFunc){if(!n.querySource||!n.querySource.get){console.log("Error: missing querySource.get in options, and no queryFunc supplied",n)}n.queryFunc=function p(){return n.querySource.get.call(n.querySource,arguments)}}if(!n.template){console.log("Error: missing template in options",n)}this.options=n;m.prop("autocomplete","off").attr("aria-autocomplete","list").attr("aria-haspopup","true");if(!m.is("[role=combobox]")){console.log("Warning: adding combobox role to input",m.parent().get(0));m.attr("role","combobox")}this.lastSearchString=null;this.currentPopover=null;this.queue=new g();n.input.typeAhead(n.typeAheadOptions).on("keystroke.suggestBox",function(){o.showPopover();o.updateClearButton()}).on("focusWaitFinished.suggestBox",function(){o.showPopover()}).on("close.suggestBox",d.proxy(o.destroyPopover,o)).on("tabChanged.suggestBox",function(){o.currentPopover.reposition()}).on("otherClick.suggestBox",function(){jive.conc.nextTick(function(){o.currentPopover.reposition()})});if(n.closeOnBlur){n.input.on("blurWaitFinished.suggestBox",function(r){n.input.trigger("close")})}if(n.clearButton.length){d(n.clearButton).on("click.suggestBox",function(){n.input.val("");n.input.trigger("keystroke")});this.updateClearButton()}}c.prototype.updateClearButton=function k(){if(this.options.clearButton.length){if(this.options.input.val()){this.options.clearButton.show()}else{this.options.clearButton.hide()}}};c.prototype.displaySuggestions=function a(q){var n=d.extend({},this.options.popoverOptions);this.destroyPopover();n=this.options.displayResults(q,n,this.currentPopover);this.currentPopover=n;var p=this.currentPopover.popOver;if(!p.is("[role=listbox]")&&p.find("[role=listbox]").length===0){console.log("Warning: adding role 'listbox' to results container");p.attr("role","listbox")}var o=this.options.input.data("typeAhead");var m=o.getSelectable();if(m.length>0&&m.select("option, [role=option]").length===0&&m.parent("[role=option]").length===0){console.log("Warning: selectable elements are not options");m.attr("role","option")}o.setSuggestElement(p)};c.prototype.showPopover=function e(){var o=this,n=this.options;var m=n.parseSearchString(n.input.val());if(m==null||m.length<n.minChars){m="";if(!n.displayEmptySearch){return}}if(this.lastSearchString!=null&&this.lastSearchString==m){if(this.isPopoverShowing()){return}}this.lastSearchString=m;this.queue.push(n.queryFunc(m)).then(function(r){if(r&&r.trim){r=r.trim()}var s=n.processResults(r,n.input.data("typeAhead"),m);if(!s){o.destroyPopover()}else{var q=n.template(s);if(q&&q.length){o.displaySuggestions(q)}else{o.destroyPopover();console.log("suggestion html empty for results",r,s)}}},function p(){console.log("failed suggestBox query for '"+m+"'",arguments)})};c.prototype.destroyPopover=function j(m){if(this.currentPopover&&this.currentPopover.closeFunc){this.currentPopover.closeFunc()}this.currentPopover=null;if(m&&m.type==="close"){m.stopPropagation()}};c.prototype.isPopoverShowing=function b(){return this.currentPopover!=null};c.prototype.teardown=function i(){var m=this.options.input;this.destroyPopover();m.data("typeAhead").teardown();m.off(".suggestBox");m.removeData("suggestBox");this.options.clearButton.off(".suggestBox")};d.fn.suggestBox=function(m){return this.each(function(){var n=d(this);if(!n.data("suggestBox")){n.data("suggestBox",new c(m,n))}})};var g;require(["jive/fresh_action_queue"],function(m){g=m})})(jQuery);
;
var JiveContainerPicker=$Class.extend({defaults:{chooser:"jive-container-chooser",containerSelected:"jive-container-chooser-selected",containerTypeField:"jive-container-chooser-type",containerIDField:"jive-container-chooser-id",validTypes:[],contentType:-1,bridge:-1,showRootCommunity:true,excludeResultIfUserCannotViewContent:false},init:function(a){this.options=$j.extend({},this.defaults,a);this.startAutoCompleter()},startAutoCompleter:function(){var a=(this.options.bridge>-1)?"bridge-widget-container-autocomplete.jspa":"container-autocomplete.jspa";var d={bridge:this.options.bridge>-1?this.options.bridge:[],contentType:this.options.contentType>0?this.options.contentType:[],showRootCommunity:this.options.showRootCommunity,excludeResultIfUserCannotViewContent:this.options.excludeResultIfUserCannotViewContent};if(this.options.validTypes&&this.options.validTypes.length){d.validTypes=this.options.validTypes}var c=this;function b(f){var e=$j.extend({query:f},d);return $j.post(a,e,"json")}$j("#"+this.options.chooser).suggestBox({typeAheadOptions:{itemSelector:"li.jive-container:visible"},queryFunc:b,template:function(e){return"<div class='j-menu' role='listbox'>"+e+"</div>"}}).on("selectionChosen",function(h,f,g){var e=g.attr("id");e=e.split("-")[1];c.addContainer(e,g.find("a").text());$j(this).trigger("close")});$j("#"+this.options.containerSelected).off("click").on("click",function(f){f.preventDefault();c.removeContainer()})},addContainer:function(b,c){var d=b.split("_").first(),a=b.split("_").last();if(d&&a){$j("#"+this.options.containerTypeField).val(d);$j("#"+this.options.containerIDField).val(a);$j("#"+this.options.chooser).hide().val("").prop("disabled",true);$j("#"+this.options.containerSelected).find(".j-js-change").remove().end().append(c+'<a class="j-js-change" href="#" class="font-color-meta">Change</a>').show();this.addContainerHook(c)}},addContainerHook:function(a){},removeContainer:function(){$j("#"+this.options.containerTypeField).val("-1");$j("#"+this.options.containerIDField).val("-1");$j("#"+this.options.containerSelected).hide().html("");$j("#"+this.options.chooser).prop("disabled",false).val("").show();this.removeContainerHook()},removeContainerHook:function(){}});
;
/*
 * $Revision$
 * $Date$
 *
 * Copyright (C) 1999-2012 Jive Software. All rights reserved.
 *
 * This software is the proprietary information of Jive Software. Use is subject to license terms.
 */

/*extern $j $Class */

/**
 *
 * @depends path=/resources/scripts/jquery/jquery.suggestBox.js
 */
var JiveMultiContainerPicker = $Class.extend({
    defaults: {
        chooser : 'jive-container-chooser',
        containerSelected : 'jive-container-chooser-selected',
//        containerTypeField : 'jive-container-chooser-type',
//        containerIDField : 'jive-container-chooser-id',
        validTypes: [],
        contentType: -1,
        bridge: -1,
        showRootCommunity: true,
        excludeResultIfUserCannotViewContent: false
    },

    init: function(custom) {
        this.options = $j.extend({}, this.defaults, custom);
        this.startAutoCompleter();
    },

    startAutoCompleter: function() {
        var url = (this.options.bridge > -1) ? "bridge-widget-container-autocomplete.jspa" : "container-autocomplete.jspa";
        var extraParams = {
            bridge: this.options.bridge > -1 ? this.options.bridge : [],
            contentType: this.options.contentType > 0 ? this.options.contentType : [],
            showRootCommunity: this.options.showRootCommunity,
            excludeResultIfUserCannotViewContent: this.options.excludeResultIfUserCannotViewContent
        };
        if (this.options.validTypes && this.options.validTypes.length) {
            extraParams.validTypes = this.options.validTypes;
        }
        var that = this;

        function queryFunction(query){
            var data = $j.extend({
                query: query
            }, extraParams);
            return $j.post(url, data, "json");
        }

        $j('#' + this.options.chooser).suggestBox({
            typeAheadOptions: {
                itemSelector: "li.jive-container:visible"
            },
            queryFunc: queryFunction,
            template: function(data){
                return "<div class='j-menu' role='listbox'>" + data + "</div>";
            }
        }).on("selectionChosen", function(ev, typeAhead, selected){
            var containerTypeAndId = selected.attr("id");
            containerTypeAndId = containerTypeAndId.split("-")[1];
            that.addContainer(containerTypeAndId, selected.find("a").text());

            $j(this).trigger("close");
            $j('#' + that.options.chooser).val('');
        });

        $j('#' + this.options.containerSelected + ' ul li em a.remove').click(function(e) {
        	e.preventDefault();
        	var $liParent = $j(this).closest('li');
        	
        	that.removeContainer($liParent);
        });
        
//        $j('#' + this.options.containerSelected).off('click').on('click', function(e){
//            e.preventDefault();
//            that.removeContainer();
//        });
    },

    addContainer: function(containerTypeAndID, selected) {
    	var that = this;
    	
    	var $containersField = $j('#' + this.options.containersField);
    	var oldValue = $containersField.val();
    	var newValue = oldValue;
    	if(newValue.length > 0) {
    		newValue += ',';
    	}
    	newValue += containerTypeAndID;
    	
    	$containersField.val(newValue);

    	var $selectedList = $j('#' + this.options.containerSelected + ' ul');
    	var $newItem = $j(jive.widget.deluxeaskaquestion.config.selectedPlace( {
    		type: containerTypeAndID.split('_').first(),
    		id: containerTypeAndID.split('_').last(),
    		name: selected
    	}));
    	
    	$selectedList.append($newItem);
    	
    	$newItem.find('em a.remove').click(function(e) {
    		e.preventDefault();
    		that.removeContainer($newItem);
    	});
    	
//        var containerType = containerTypeAndID.split('_').first(),
//            containerID   = containerTypeAndID.split('_').last();
//        if (containerType && containerID) {
//            // set hidden containerType and containerID
//            $j('#' + this.options.containerTypeField).val(containerType);
//            $j('#' + this.options.containerIDField).val(containerID);
//                                                 
//            // show $selected value
//            $j('#' + this.options.chooser).hide().val('').prop('disabled', true);
//            $j('#' + this.options.containerSelected)
//                .find('.j-js-change').remove().end()
//                .append(selected + '<a class="j-js-change" href="#" class="font-color-meta">Change</a>').show();
//            this.addContainerHook(selected);
//        }
    },

    addContainerHook: function(selected) {

    },

    removeContainer: function($containerLi) {
    	var type = $containerLi.attr('data-container-type');
    	var id = $containerLi.attr('data-container-id');
    	var container = type + '_' + id;
    	
    	$containerLi.remove();
    	
    	var $containersField = $j('#' + this.options.containersField);
    	var oldValue = $containersField.val();
    	var containers = oldValue.split(',');	
    	var location = containers.indexOf(container);
    	containers.splice(location, 1);
    	
    	$containersField.val(containers.join());
//    	
//        // reset hidden containerType and containerID
//        $j('#' + this.options.containerTypeField).val('-1');
//        $j('#' + this.options.containerIDField).val('-1');
//
//        // show chooser
//        $j('#' + this.options.containerSelected).hide().html('');
//        $j('#' + this.options.chooser).prop('disabled', false).val('').show();

        this.removeContainerHook();
    },

    removeContainerHook: function() {

    }
});

;
 define('jive.DeluxeAskAQuestion.ConfigApp.View', ['apps/shared/views/abstract_view'], function(AbstractView) {
	return AbstractView.extend(function(protect, _super) {
		protect.init = function(options) {
			var view = this;
			this.config = options.config;
			this.widgetFrameID = options.widgetFrameID;
			
			$j(document).ready(function() {
				$j('.deluxe-config-link').click(function() {
					view.openConfigModal();
					return false;
				});
			})
		};
		
		this.setConfig = function(config) {
			this.config = config;
		}
		
		this.openConfigModal = function() {
			var view = this;
			
			var $modal = $j(jive.widget.deluxeaskaquestion.config.configModal({
				widgetFrameID : view.widgetFrameID,
				headerText: view.config.headerText,
				submitButtonText: view.config.submitButtonText,
				searchSourceMode: view.config.searchSourceMode,
				searchSource: view.config.searchSource,
                displayThreadsResultsPane: view.config.displayThreadsResultsPane,
                displayAnsweredQuestionsResultsPane: view.config.displayAnsweredQuestionsResultsPane,
                displayDocumentsResultsPane: view.config.displayDocumentsResultsPane,
				postTargetMode: view.config.postTargetMode,
				postTarget: view.config.targetPlace,
				postTargets: view.config.targetPlaces,
				postTargetsStr: view.config.targetPlacesStr,
                targetPlacePickerTitle: view.config.targetPlacePickerTitle,
                targetPlacePickerInstructions: view.config.targetPlacePickerInstructions
			}));
			$modal.lightbox_me({destroyOnClose: true, centered: true, onLoad: function() { $modal.find('input:visible:first').focus(); }});

			var $sourcePicker = $modal.find('#source-place-picker-' + view.widgetFrameID);
			$modal.find('#source_single').change(function() {
				$sourcePicker.show();
			});
			$modal.find('#source_all').change(function() {
				$sourcePicker.hide();
			});
		
			var $multiTargetPicker = $modal.find('#target-places-picker-' + view.widgetFrameID);
			var $targetPicker = $modal.find('#target-place-picker-' + view.widgetFrameID);
            var $targetPlacePickerRows = $modal.find('.place-picker-row');
			
			$modal.find('#target_single').change(function() {
				$multiTargetPicker.hide();
                $targetPlacePickerRows.hide();
				$targetPicker.show();
			});
			$modal.find('#target_choice').change(function() {
				$targetPicker.hide();
				$multiTargetPicker.show();
                $targetPlacePickerRows.show();
			});

			$modal.find('form').submit(function() {
				$j(this).find('input,button').attr('disabled', 'disabled');

                view.validate($modal, function() {
                    view.saveConfig($modal);
                })

				return false;
			});
		};

        this.validate = function($modal, callback) {
            this.resetValidation($modal);

            var newConfig = this.extractConfigFromForm($modal);

            if(!newConfig.headerText || newConfig.headerText == '') {
                $modal.find('#header-text-input').siblings('label').append(jive.widget.deluxeaskaquestion.config.missingHeaderTextMessage());
                $modal.find('#header-text-input').addClass('error');
            }

            if(!newConfig.submitButtonText || newConfig.sumitButtonText == '') {
                $modal.find('#submit-button-text-input').siblings('label').append(jive.widget.deluxeaskaquestion.config.missingSubmitButtonTextMessage());
                $modal.find('#submit-button-text-input').addClass('error');
            }

            if(newConfig.searchSourceMode == 1 && newConfig.searchSource.id == -1) {
                $modal.find('#source_all').closest('ul').siblings('label').append(jive.widget.deluxeaskaquestion.config.missingSearchSourceMessage());
                $modal.find('input[name="sourceContainerName"]').addClass('error');
            }

            if(!newConfig.displayThreadsResultsPane && !newConfig.displayAnsweredQuestionsResultsPane && !newConfig.displayDocumentsResultsPane) {
                $modal.find('#display_threads_pane').closest('ul').siblings('label').append(jive.widget.deluxeaskaquestion.config.missingResultsDisplayMessage());
            }

            if(!newConfig.postTargetMode) {
                $modal.find('#target_single').closest('ul').siblings('label').append(jive.widget.deluxeaskaquestion.config.missingPostTargetModeMessage());
            }

            if(newConfig.postTargetMode == 2 && newConfig.targetPlace.id == -1) {
                $modal.find('input[name="targetContainerName"]').before(jive.widget.deluxeaskaquestion.config.missingTargetPlaceMessage());
                $modal.find('input[name="targetContainerName"]').addClass('error');
            }

            if(newConfig.postTargetMode == 1) {
                if(!newConfig.targetPlacesStr || newConfig.targetPlacesStr == '') {
                    $modal.find('#target-containers-chooser-' + this.widgetFrameID).before(jive.widget.deluxeaskaquestion.config.missingTargetPlacesMessage());
                    $modal.find('#target-containers-chooser-' + this.widgetFrameID).addClass('error');
                }

                if(!newConfig.targetPlacePickerTitle || newConfig.targetPlacePickerTitle == '') {
                    $modal.find('#place-picker-title-input').siblings('label').append(jive.widget.deluxeaskaquestion.config.missingPlacePickerTitleMessage());
                    $modal.find('#place-picker-title-input').addClass('error');
                }

                if(!newConfig.targetPlacePickerInstructions || newConfig.targetlacePickerInstructions == '') {
                    $modal.find('#place-picker-instructions-input').siblings('label').append(jive.widget.deluxeaskaquestion.config.missingPlacePickerInstructionsMessage());
                    $modal.find('#place-picker-instructions-input').addClass('error');
                }
            }

            if($j('span.error').length == 0) {
                callback();
            } else {
                $modal.find('input, button').removeAttr('disabled');
            }
        };

        this.resetValidation = function($modal) {
            $modal.find('span.error').remove();
            $modal.find('input.error').removeClass('error');
        }

        this.extractConfigFromForm = function($modalDiv) {
            var view = this;
            var newConfig = new Object();

            newConfig.headerText = $modalDiv.find('#header-text-input').val();
            newConfig.submitButtonText = $modalDiv.find('#submit-button-text-input').val();
            newConfig.searchSourceMode = $modalDiv.find('input[name="searchSourceMode"]:radio:checked').val();
            newConfig.searchSource = new Object();
            newConfig.searchSource.id = $modalDiv.find('#source-container-chooser-id-' + view.widgetFrameID).val();
            newConfig.searchSource.type = $modalDiv.find('#source-container-chooser-type-' + view.widgetFrameID).val();
            newConfig.displayThreadsResultsPane = $modalDiv.find('#display_threads_pane').is(':checked');
            newConfig.displayAnsweredQuestionsResultsPane = $modalDiv.find('#display_answered_questions_pane').is(':checked');
            newConfig.displayDocumentsResultsPane = $modalDiv.find('#display_documents_pane').is(':checked');
            newConfig.postTargetMode = $modalDiv.find('input[name="postTargetMode"]:radio:checked').val();
            newConfig.targetPlacesStr = $modalDiv.find('#target-containers-' + view.widgetFrameID).val();
            newConfig.targetPlace = new Object();
            newConfig.targetPlace.id = $modalDiv.find('#target-container-chooser-id-' + view.widgetFrameID).val();
            newConfig.targetPlace.type = $modalDiv.find('#target-container-chooser-type-' + view.widgetFrameID).val();
            newConfig.targetPlacePickerTitle = $modalDiv.find('#place-picker-title-input').val();
            newConfig.targetPlacePickerInstructions = $modalDiv.find('#place-picker-instructions-input').val();

            return newConfig;
        };
		
		this.saveConfig = function($modalDiv) {
			var view = this;
			var newConfig = this.extractConfigFromForm($modalDiv);
			view.emitP('configSaved', newConfig)
			.addCallback(function(newConfig) {
				$j(jive.widget.deluxeaskaquestion.config.saveConfirmation()).message({style: 'success'});
				view.config = newConfig;
				$modalDiv.trigger('close');
			})
			.addErrback(function(message, code) {
				var content = message ? $j('<p>' + message + '</p>') : $j(jive.error.rest.soy.errorUpdating({ href: window.location }));
				content.message({ showClose: true, style: 'error' });
				$modalDiv.find('input, button').removeAttr('disabled');
			});
		}
	});
});
;
define('jive.DeluxeAskAQuestion.ConfigApp.Source', ['apps/shared/models/rest_service'], function(RestService) {
	return RestService.extend(function(protect, _super) {
		protect.init = function(options) {
            this.configID = options.config.id;
		};
		
		this.saveConfig = function(config) {
			var promise = new jive.conc.Promise(),
			    source = this;
			
			$j.ajax({
				url: jive.rest.url('/askAQuestionConfig/' + source.configID),
				type: 'PUT',
				dataType: 'json',
				data: JSON.stringify(config),
				success: function() {
					source.getConfig().addCallback( function(newConfig) {
						promise.emitSuccess(newConfig);
					}).addErrback(function(error, status) {
						promise.emitError(error, status);
					});
				},
				error: source.errorCallback(promise),
				timeout: 30000
			});
			
			return promise;
		};
		
		this.getConfig = function() {
			var promise = new jive.conc.Promise(),
			    source = this;
			
			$j.ajax({
				url: jive.rest.url('/askAQuestionConfig/' + source.configID),
				type: 'GET',
				dataType: 'json',
				success: function(data) {
					promise.emitSuccess(data);
				},
				error: source.errorCallback(promise),
				timeout: 30000
			});
			
			return promise;
		}
	});
});
;
/**
 * @depends path=/plugins/customer-service-plugin/resources/scripts/apps/deluxeAskAQuestion/config/views/deluxe_ask_a_question_config_view.js
 * @depends path=/plugins/customer-service-plugin/resources/scripts/apps/deluxeAskAQuestion/config/model/deluxe_ask_a_question_config_source.js
 */
define('jive.DeluxeAskAQuestion.ConfigApp.Main', [
    'jive.DeluxeAskAQuestion.ConfigApp.View', 
    'jive.DeluxeAskAQuestion.ConfigApp.Source'
], function(View, Source) {
	return function(options) {
		var main = this;
		this.view = new View(options);
		this.source = new Source(options);
		
		main.view.addListener('configSaved', function(configuration, promise) {
			main.source.saveConfig(configuration)
			.addCallback(function(savedConfig) {
				promise.emitSuccess(savedConfig);
				
				if(options.initialConfig) {
					var widget = jive.widget.deluxeaskaquestion.main( {
						widgetFrameID: options.widgetFrameID,
						config: savedConfig,
						canConfig: true,
						numResults: options.numResults
					});
					$j('.deluxe-config-notice').parent().html(widget);
				}
				main.emit('configSaved', savedConfig);
			})
			.addErrback(function(error, status) {
				promise.emitError(error, status);
			});
		});
		
		jive.conc.observable(this);
		
		this.setConfig = function(config) {
			this.view.setConfig(config);
			
		}
	};
});
;
jive.namespace('DeluxeAskAQuestion');

/**
 * @depends template=jive.widget.deluxeaskaquestion.*
 * @depends path=/plugins/customer-service-plugin/resources/scripts/apps/deluxeAskAQuestion/view/view.js
 * @depends path=/plugins/customer-service-plugin/resources/scripts/apps/deluxeAskAQuestion/view/source.js
 * @depends path=/plugins/customer-service-plugin/resources/scripts/apps/deluxeAskAQuestion/config/main.js
 */
jive.DeluxeAskAQuestion.Main = jive.oo.Class.extend(function(protect) {
    var _ = jive.DeluxeAskAQuestion,
        $ = jQuery;

    protect.init = function(options) {
        var main = this;
        this.view =  new _.View(options);
        this.source =  new _.Source(options);
        this.config = options.config;

        this.view.addListener('search', function(data) {
            main.source.search(data).addCallback(function(resp) {
                main.view.success(resp);
            });
        });

        this.view.addListener('referrer', main.source.referrer);
        
        
        
        require(['jive.DeluxeAskAQuestion.ConfigApp.Main'], function(Main) {
        	main.configApp = new Main({
        		widgetFrameID: options.widgetFrameID,
        		config: options.config,
        		
        	});
        	
        	main.configApp.addListener('configSaved', function(config) {
        		main.configChanged(config);
        	});
        });
    };
    
    protect.configChanged = function(config) {
    	this.config = config;
    	this.view.config = config;
    	this.source.config = config;
    	
    	this.configApp.setConfig(config);
    }
});


;
jive.Validator=jive.oo.Class.extend(function(a){var e=jQuery;var b=0;function c(f){return f+(b++)}function d(g,h){var f=e(g);if(!f.attr("id")){f.attr("id",c(h))}return f.attr("id")}this.init=function(g){var i="content.validation";this.options=e.extend({form:null,validator:this.validator,onSuccess:this.onSuccess,keys:{any:i+".any",email:i+".email",number:i+".number",url:i+".url",max:i+".max",min:i+"min",required:i+".required"}},g);var f=this;var h=function(k){var j=e(this);if(j.attr("formaction")){f.options.form.data("formaction",j.attr("formaction"))}if(j.attr("formnovalidate")!=undefined){f.options.form.data("formnovalidate",true)}if(j.attr("formenctype")){f.options.form.data("formenctype",j.attr("formenctype"))}if(j.attr("formmethod")){f.options.form.data("formmethod",j.attr("formmethod"))}if(j.attr("data-submit-id")){f.options.form.data("submit-id",j.attr("data-submit-id"))}};f.options.form.find("input[type=submit]").live("click",h);f.options.form.find("button[type=submit]").live("click",h);f.getValidator();f.options.form.submit(function(j){if(!f.options.form.data().formnovalidate){if(!f.getValidator().checkValidity()){j.preventDefault()}}setTimeout(function(){f.options.form.removeData("formaction");f.options.form.removeData("formnovalidate");f.options.form.removeData("formenctype");f.options.form.removeData("formmethod");f.options.form.removeData("submit-id")},100)});e.tools.validator.localize("jive",{"*":"any",":email":"email",":number":"number",":url":"url","[max]":"max","[min]":"min","[required]":"required"});e.tools.validator.addEffect("jive",function(k,j){e.each(k,function(r,s){var u=s.input;var t=e('label[for="'+d(u,"field_")+'"]');var m=e("iframe[id^="+u.attr("id")+"_ifr]");t.find(".jive-error-message").remove();u.prev(".jive-error-message").remove();var o=s.messages[0];var q=jive.i18n.getMsg(o)!=o;var p;if(q){p=jive.i18n.getMsg(o)}else{p=u.data(o)||(f.options.keys[o]?jive.i18n.getMsg(f.options.keys[o]):o)}var l=e(jive.error.form.fieldError({msg:p}));u.attr("aria-invalid","true");t.append(l);if(t.length==0||t.is(".j-508-label")){u.before(l.clone())}if(m.length>0){m.attr("title",p)}var n=u.closest("form");u.parentsUntil(n,":hidden").show();if(r==0){e.scrollTo(l,800,function(){u.focus();if(m.length>0){jive.conc.nextTick(function(){editor.get(u.attr("id")).focus()})}})}})},function(j){j.each(function(){var k=e('label[for="'+d(this,"field_")+'"]');k.find(".jive-error-message").remove()});j.prev(".jive-error-message").remove();j.attr("aria-invalid","false")})};this.getValidator=function(){var f=this.options.form.find(":input").data("validator");if(f){f.destroy({})}this.options.form.find(":input").validator({lang:"jive",position:"top left",messageClass:"jive-field-error",inputEvent:"change",effect:"jive",formEvent:null});return this.options.form.find(":input").data("validator")}});define("apps/content/common/validator",function(){return jive.Validator});
;
jive.namespace('DeluxeAskAQuestion');

/**
 * @depends path=/resources/scripts/apps/shared/views/abstract_view.js
 * @depends path=/resources/scripts/apps/content/common/validator.js
 * @depends path=/resources/scripts/jquery/jquery.placeheld.js
 */
jive.DeluxeAskAQuestion.View = jive.AbstractView.extend(function(protect) {
    var $ = jQuery
        , _ = jive.DeluxeAskAQuestion;

    protect.init = function(options) {
        var view = this;
        this.frame = $('#jive-widgetframe_' + options.widgetFrameID);
        this.searchElem = this.frame.find('.ask-a-question-search');
        this.container = this.frame.find('.ask-a-question-container');
        this.config = options.config;

        $(function() {
            var form = view.container.find('form');

            new jive.Validator({form: form});

            var searchFunc = function() {
                var val = view.searchElem.val();
                if (val) {
                    view.emit('search', val);
                }
            };
            var $input = view.container.find('input');
            $input.placeHeld();
            $input.keyup(function() {
                clearTimeout($.data(this, 'timer'));
                var wait = setTimeout(searchFunc, 500);
                $(this).data('timer', wait);
            });

            form.submit(function(e) {

                if (e.isDefaultPrevented()) {
                    return;
                }

                if($(this).find('input[name="chooseContainer"]').length > 0) {
                    view.displayContainerChoiceModal();
                } else {
                    view.containerChosen(view.config.targetPlace.type, view.config.targetPlace.id);
                }

                e.preventDefault();
            });
        });
    };

    this.success = function(data) {
        var resultMarkup = jive.widget.deluxeaskaquestion.results({
           bean: data
        });

        var results = this.frame.find('.ask-a-question-results');
        if (results.length) {
            results.replaceWith(resultMarkup);
        } else {
            $(this.container).find('button[type=submit]').before(resultMarkup);
        }
    };

    this.displayContainerChoiceModal = function() {
        var view = this;

        var $modal = $j(jive.widget.deluxeaskaquestion.chooseContainerModal({
            title: view.config.targetPlacePickerTitle,
            instructions: view.config.targetPlacePickerInstructions,
            containers: view.config.targetPlaces
        }));
        $modal.lightbox_me({destroyOnClose: true, centered: true});
        $modal.find('.question-container').click(function() {
            var containerType = $j(this).attr('data_type');
            var containerID = $j(this).attr('data_id');
            view.containerChosen(containerType, containerID);
            $modal.trigger('close');
            return false;
        });
    };

    this.containerChosen = function(containerType, containerID) {
        var view = this;
        var $form = $j(view.container.find('form'));

        var url = $form.prop('action');
        url += '?containerType=' + containerType + '&containerID=' + containerID + '&question=true&subject=' + view.searchElem.val();

        if (typeof loginApp === "undefined") {
            window.location.href = url;
        } else {
            view.emit('referrer', url);
            $('#navLogin').click();
        }
    }
});


;
jive.namespace('DeluxeAskAQuestion');

/**
 * Handles interactions with the bookmark and unbookmark actions in a list view
 *
 * @class
 * @param {jQuery|DOMElement|String} element reference to element that contains bookmark links
 *
 * @depends path=/resources/scripts/apps/shared/models/rest_service.js
 */
jive.DeluxeAskAQuestion.Source = jive.RestService.extend(function(protect, _super) {
    var $ = jQuery
        , _ = jive.DeluxeAskAQuestion;

    protect.resourceType = "deluxeaskaquestion";
    protect.pluralizedResourceType = protect.resourceType;

    this.init = function init(options) {
        _super.init.call(this, options);
        this.options = options;
        this.config = options.config;
    };

    this.search = function(val) {
        return this.get('', {
            q: val,
            searchSourceMode: this.config.searchSourceMode,
            searchSourceID: this.config.searchSource.id,
            searchSourceType: this.config.searchSource.type,
            searchThreads: this.config.displayThreadsResultsPane,
            searchAnsweredQuestions: this.config.displayAnsweredQuestionsResultsPane,
            searchDocuments: this.config.displayDocumentsResultsPane,
            numResults: this.options.numResults
        });
    };

    this.referrer = function(url) {
        return this.save({
            url: url
        });
    };
});

;
// This file was automatically generated from socialmedia.soy.
// Please don't edit this file by hand.

goog.provide('socialmedia.activitystream');
goog.provide('socialmedia.displayForContent');
goog.provide('socialmedia.displayForTopic');
goog.provide('socialmedia.displayForTopicWidget');
goog.provide('socialmedia.facepile');
goog.provide('socialmedia.followus');
goog.provide('socialmedia.socialpeek');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');


socialmedia.socialpeek = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="socialmedia-socialpeek"><!-- AddThis Button BEGIN --><div id="socialmedia-addthis">', soy.$$filterNoAutoescape(opt_data.config.addThisToolbox), '</div><!-- AddThis Button END --><script type="text/javascript">var addthis_config ={', (opt_data.config.addThisProfileId) ? '\'pubid\':\'' + soy.$$escapeHtml(opt_data.config.addThisProfileId) + '\', \'data_track_clickback\':' + soy.$$escapeHtml(opt_data.config.addThisTrackingEnabled) : '', '}; var addthis_share ={\'url\':\'', soy.$$escapeHtml(opt_data.config.shareUrl), '\',}<\/script></div>');
  return opt_sb ? '' : output.toString();
};


socialmedia.followus = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.config.followFacebookEnabled || opt_data.config.followTwitterEnabled) ? '<div id="socialmedia-follow">' + ((opt_data.config.followFacebookEnabled) ? '<p id="socialmedia-follow-facebook"><a href="' + soy.$$escapeHtml(opt_data.config.followFacebookUrl) + '"><span class="socialmedia-icon"></span>Friend ' + soy.$$escapeHtml(opt_data.config.followFacebookName) + ' on Facebook</a></p>' : '') + ((opt_data.config.followTwitterEnabled) ? '<p id="socialmedia-follow-twitter"><a href="' + soy.$$escapeHtml(opt_data.config.followTwitterUrl) + '"><span class="socialmedia-icon"></span>Follow @' + soy.$$escapeHtml(opt_data.config.followTwitterName) + ' on Twitter</a></p>' : '') + '</div>' : '');
  return opt_sb ? '' : output.toString();
};


socialmedia.facepile = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.config.facePileEnabled) ? '<div id="socialmedia-facepile"><div class="fb-facepile" data-href="' + soy.$$escapeHtml(opt_data.config.facePileUrl) + '" data-width="' + soy.$$escapeHtml(opt_data.config.facePileWidth) + '" data-max-rows="' + soy.$$escapeHtml(opt_data.config.facePileRows) + '"></div></div>' : '');
  return opt_sb ? '' : output.toString();
};


socialmedia.activitystream = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.config.activityStreamEnabled) ? '<div id="socialmedia-activity"><div class="fb-activity" data-site="' + soy.$$escapeHtml(opt_data.config.activityStreamUrl) + '" data-width="' + soy.$$escapeHtml(opt_data.config.activityStreamWidth) + '" data-height="' + soy.$$escapeHtml(opt_data.config.activityStreamHeight) + '" data-header="' + soy.$$escapeHtml(opt_data.config.activityStreamUseHeader) + '" data-recommendations="' + soy.$$escapeHtml(opt_data.config.activityStreamUseRecommendations) + '"></div></div>' : '');
  return opt_sb ? '' : output.toString();
};


socialmedia.displayForTopicWidget = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="fb-root"><div class="j-box-body">');
  socialmedia.socialpeek(opt_data, output);
  socialmedia.facepile(opt_data, output);
  socialmedia.followus(opt_data, output);
  socialmedia.activitystream(opt_data, output);
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


socialmedia.displayForTopic = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-box"><header><h4>', soy.$$escapeHtml(opt_data.config.socialMediaTitle), '</h4></header>');
  socialmedia.displayForTopicWidget(opt_data, output);
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


socialmedia.displayForContent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-box"><header><h4>', soy.$$escapeHtml(opt_data.config.socialMediaTitle), '</h4></header><div class="j-box-body">');
  socialmedia.socialpeek(opt_data, output);
  socialmedia.followus(opt_data, output);
  output.append('</div></div>');
  return opt_sb ? '' : output.toString();
};

;
if(!jive.share){jive.share=(function(){var a;jive.dispatcher.listen("share",function(b){require(["apps/share/main"],function(c){a=a||new c();a.showModal(b.objectId,b.objectType)})});return{}})()};
;
// This file was automatically generated from share.soy.
// Please don't edit this file by hand.

goog.provide('jive.soy.share.attachmentLinks');
goog.provide('jive.soy.share.control');
goog.provide('jive.soy.share.emailLinks');
goog.provide('jive.soy.share.listWithoutPermission');
goog.provide('jive.soy.share.secretGroupMessage');
goog.provide('jive.soy.share.send_private_msg');
goog.provide('jive.soy.share.share');
goog.provide('jive.soy.share.shareConfirmation');
goog.provide('jive.soy.share.userWithoutPermission');
goog.provide('jive.soy.share.usersNotRelated');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.UserPicker.soy.inputPlaceholder');


jive.soy.share.control = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a href="#" class="', (opt_data.type == 'text') ? 'share-link j-meta-control ' : (opt_data.type == 'largeButton') ? 'j-social-action ' : '', (opt_data.classes) ? soy.$$escapeHtmlAttribute(opt_data.classes) : '', '" title="', soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('share.link.title'),[])), '" data-command="share" data-object-type="', soy.$$escapeHtmlAttribute(opt_data.objectType), '" data-object-id="', soy.$$escapeHtmlAttribute(opt_data.objectId), '">', (opt_data.icon) ? '<span' + ((opt_data.type == 'smallButton') ? ' class="j-ui-elem"' : '') + '><span class="jive-icon-med jive-icon-share"></span>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('share.link'),[])) + '</span>' : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('share.link'),[])), '</a>');
  return opt_sb ? '' : output.toString();
};


jive.soy.share.share = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="jive-modal j-modal j-pop" id="jive-modal-share"><header><h2>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('share.title'),[opt_data.objectNameLower])), '</h2></header><label class="j-508-label" id="close-modal-508">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.close.modal'),[])), '</label><a href="#" class="j-modal-close-top close" aria-labelledby="close-modal-508" title="', soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('global.close.modal'),[])), '">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.close'),[])), '  <span class="j-close-icon j-ui-elem" role="img"></span></a><section class="jive-modal-content j-pop-main j-invite-modal clearfix"><div id="share-error" class="jive-error-box" style="display:none" aria-live="polite" aria-atomic="true" ></div><form class="j-form">', (opt_data['private']) ? '<p class="j-info"><span class="j-info-icon j-ui-elem"></span>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('share.private.access'),[opt_data.objectNameLower])) + '</p>' : '', '<label for="share-users">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('share.people.label'),[])), ' (', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('send.invite.nonusers.noimport.label'),[])), ')</label><div class="ie-zindex-fix j-form-exp font-color-meta-light"><strong>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('send.invite.examples'),[])), ' </strong>');
  jive.UserPicker.soy.inputPlaceholder({userAllowed: true, emailAllowed: opt_data.externallyShareable, multiple: true}, output);
  output.append('</div><div class="j-user-input-typeahead"><input type="text" name="share-users" id="share-users" class="j-autocomplete-input j-user-autocomplete j-autocomplete-jive-chooser-input jive-form-element-text j-ui-elem" autocomplete="on" role="combobox"/></div><div class="ie-zindex-fix j-form-exp j-noimport">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('send.invite.nonusers.noimport.explanation'),[])), '</div><p><label for="jive-send-content-not-message">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('share.message.label'),[])), '</label><textarea name="message" class="jive-form-element-textarea font-color-normal" id="jive-send-content-not-message">', soy.$$filterNoAutoescape(opt_data.message), '</textarea></p><div class="j-pop-row j-last"><button type="submit" id="share-content-submit" name="share-content-submit" class="j-btn-callout">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('share.submit.button'),[])), '</button><button type="button" class="close">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.cancel'),[])), '</button></div></form></section></div>');
  return opt_sb ? '' : output.toString();
};


jive.soy.share.shareConfirmation = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<p>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('share.confirm'),[])), '</p>');
  return opt_sb ? '' : output.toString();
};


jive.soy.share.secretGroupMessage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<p>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('share.secretgroup'),[])), '</p>');
  return opt_sb ? '' : output.toString();
};


jive.soy.share.send_private_msg = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('send.private.autoaccess'),[opt_data.objectName])));
  return opt_sb ? '' : output.toString();
};


jive.soy.share.userWithoutPermission = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="js-share-msg j-tips">');
  if (opt_data.user.anonymous || opt_data.user.external) {
    if (! opt_data.invitationsEnabled) {
      output.append((opt_data.attachmentAvailable) ? '<p class="j-warn">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('share.guest.nopermission.attachment'),[])) + '<p>' : '<p class="j-warn">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('share.guest.nopermission.noattachment'),[])) + '<p>');
    } else {
      if (opt_data['private'] && opt_data.editor) {
        output.append('<p class="j-warn">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('share.guest.nopermission.invite.private'),[])), '<p>');
        jive.soy.share.attachmentLinks(opt_data.user, output);
      } else if (opt_data.attachmentAvailable) {
        output.append('<p class="j-warn">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('share.guest.nopermission.invite.attachment'),[])), '<p>');
        jive.soy.share.attachmentLinks(opt_data.user, output);
      } else {
        output.append('<p class="j-warn">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('share.guest.nopermission.invite.noattachment'),[])), '<p>');
        jive.soy.share.emailLinks(opt_data.user, output);
      }
    }
  } else {
    output.append((opt_data['private'] && opt_data.editor) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('share.user.nopermission.private'),[])) : (opt_data.attachmentAvailable) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('share.user.nopermission.attachment'),[])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('share.user.nopermission.noattachment'),[])));
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


jive.soy.share.attachmentLinks = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<p><a href="#" class="js-notify-user" data-user-identifier="', soy.$$escapeHtmlAttribute(opt_data.email), '" ', (opt_data.notified) ? 'style="display:none"' : '', ' >', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('share.attachment.send.link'),[])), '</a><a href="#" class="js-unnotify-user" data-user-identifier="', soy.$$escapeHtmlAttribute(opt_data.email), '" ', (! opt_data.notified) ? 'style="display:none"' : '', ' >', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('share.attachment.remove.link'),[])), '</a><p>');
  return opt_sb ? '' : output.toString();
};


jive.soy.share.emailLinks = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<p><a href="#" class="js-notify-user" data-user-identifier="', soy.$$escapeHtmlAttribute(opt_data.email), '" ', (opt_data.notified) ? 'style="display:none"' : '', '>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('share.email.send.link'),[])), '</a><a href="#" class="js-unnotify-user" data-user-identifier="', soy.$$escapeHtmlAttribute(opt_data.email), '" ', (! opt_data.notified) ? 'style="display:none"' : '', '>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('share.email.remove.link'),[])), '</a><p>');
  return opt_sb ? '' : output.toString();
};


jive.soy.share.listWithoutPermission = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="js-share-msg j-tips">', (opt_data['private'] && opt_data.editor) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('share.list.nopermission.private'),[])) : (opt_data.attachmentAvailable) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('share.list.nopermission.attachment'),[])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('share.list.nopermission.noattachment'),[])), '</div>');
  return opt_sb ? '' : output.toString();
};


jive.soy.share.usersNotRelated = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<p class="j-warn"><span class="jive-icon-sml jive-icon-redalert"></span>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('share.notrelated'),[])), '</p>');
  return opt_sb ? '' : output.toString();
};

;
jive.namespace("ShareApp");define("apps/share/views/share_view",["apps/userpicker/main","soy!jive.error.rest.soy.errorFinding","soy!jive.error.rest.soy.errorUpdating","soy!jive.soy.share.share","soy!jive.soy.share.shareConfirmation","soy!jive.soy.share.secretGroupMessage","soy!jive.soy.share.usersNotRelated","soy!jive.soy.share.userWithoutPermission","soy!jive.soy.share.listWithoutPermission","jquery/jquery.lightbox_me"],function(a,e,c,f,d,h,i,b,g){jive.ShareApp.ShareView=jive.oo.Class.extend(function(j){jive.conc.observable(this);this.init=function(){this.recipients=[];this.options={}};j.submitShare=function(p,l,n,o){var k=this;var m={message:$j("#jive-send-content-not-message").val(),recipients:k.buildRecipientArray(),subject:$j("#jive-send-content-not-subject").val()};m.message=m.message.replace(/</g,"&lt;").replace(/>/g,"&gt;");k.emitP("share",l,p,m).addCallback(function(){$j(d({objectName:o})).message({style:"success"});n.trigger("close");if(k.recipients.some(function(q){return q.id!==window._jive_current_user.ID})){jive.dispatcher.dispatch("trial.share.created");jive.dispatcher.dispatch("trial.updatePercentComplete")}k.recipients=[]}).addErrback(function(r){var q=r?$j("<p>"+r+"</p>"):$j(c({href:window.location}));q.message({showClose:true,style:"error"});n.find("input, button").prop("disabled",false)})};j.buildRecipientArray=function(){this.checkExternalUsers(this.userPicker.getSelectedUsersAndLists(true));return this.recipients.map(function(k){return{identifier:k.id!=-1?k.id:k.email,notified:k.notified}})};j.checkExternalUsers=function(l){$j("#jive-include-attach-div").hide();l.users.forEach(function(m){if(m.id==-1||!m.entitled){$j("#jive-include-attach-div").show()}});this.recipients=this.recipients.filter(function(m){return l.users.some(function(n){return n.email===m.email})});var k=this.addedRecipients(l.users);this.recipients=this.recipients.concat(k)};j.addedRecipients=function(l){var k=this;return l.filter(function(m){return !k.recipients.some(function(n){return m.email===n.email})}).map(function(m){return $j.extend({},m,{notified:false})})};j.recipient=function(k){return this.recipients.filter(function(l){return l.email===k})};j.notifyUser=function(k,l){this.recipient(k).forEach(function(m){m.notified=l});$j(".js-notify-user").toggle();$j(".js-unnotify-user").toggle()};this.openShareModal=function(m,l){var k=this;k.emitP("prepareShare",l,m).addCallback(function(q){if(!k.open){k.open=true;if(q.invitationsEnabled){k.options.invitationsEnabled=true}k.recipients=[];if(q.secretGroup){$j(h()).message({showClose:true,style:"error"})}else{var o=$j(f(q));o.lightbox_me({destroyOnClose:true,centered:true,closeClick:false,closeEsc:false,closeFocusSelector:jive.Accessibility.hasStackedFocus()?jive.Accessibility.popFocus():'a[data-command="share"][data-object-id="'+m+'"][data-object-type="'+l+'"]',onLoad:function(){jive.dispatcher.dispatch("trial.share.modal.loaded")},onClose:function(){k.cleanupModal()}});o.find("form").submit(function(){$j(this).find("input,button").prop("disabled",true);k.submitShare(m,l,o,q.objectNameCapital);return false});var n=new a({multiple:true,listAllowed:true,emailAllowed:q.externallyShareable,message:"",object:{objectID:m,objectType:l},entitlement:"VIEW",$input:$j("#share-users"),canInvitePartners:q.attachmentAvailable,canInviteJustPartners:false,canInvitePreprovisioned:true,relatedMessage:$j(i()),userMessages:[k.getUserPermissionsMessage(q)],listMessages:[k.getListPermissionsMessage(q)],placeholder:" "});n.addListener("selectedUsersChanged",function(r){k.checkExternalUsers(r)});k.userPicker=n;var p=$j("body");p.delegate(".js-notify-user","click",function(r){k.notifyUser($j(this).data("user-identifier"),true);r.preventDefault()});p.delegate(".js-unnotify-user","click",function(r){k.notifyUser($j(this).data("user-identifier"),false);r.preventDefault()})}}}).addErrback(function(o){var n=o?$j("<p>"+o+"</p>"):$j(e({href:window.location}));n.message({showClose:true,style:"error"})})};j.cleanupModal=function(){var k=this;$j(".js-userpicker-user-msg").trigger("close");var l=$j("body");l.undelegate(".js-notify-user","click");l.undelegate(".js-unnotify-user","click");k.open=false};j.getUserPermissionsMessage=function(l){var k=this;return{type:"warn",render:function(m){m.notified=k.recipient(m.email).some(function(o){return o.notified});var n=$j.extend({user:m},l);return b(n)}}};j.getListPermissionsMessage=function(k){return{type:"warn",render:function(){return g(k)}}}});return jive.ShareApp.ShareView});
;
jive.namespace("ShareApp");define("apps/share/models/share_source",["apps/shared/models/rest_service"],function(a){jive.ShareApp.ShareSource=a.extend(function(b){this.init=function(){this.suppressGenericErrorMessages()};this.save=function(c,g,e){var f=new jive.conc.Promise(),d=this;$j.ajax({type:"POST",url:jive.rest.url("/objects/")+c+"/"+g+"/shares",dataType:"json",data:JSON.stringify(e),contentType:"application/json; charset=utf-8",success:function(h,j,i){if(h){d.merge(e,h)}f.emitSuccess(e)},error:d.errorCallback(f),timeout:30000});return f};this.get=function(c,f){var e=new jive.conc.Promise(),d=this;$j.ajax({type:"GET",url:jive.rest.url("/objects/")+c+"/"+f+"/sharetemplate",dataType:"json",data:{},contentType:"application/json; charset=utf-8",success:function(g,i,h){e.emitSuccess(g)},error:d.errorCallback(e),timeout:30000});return e}});return jive.ShareApp.ShareSource});
;
jive.namespace("ShareApp");define("apps/share/main",["apps/share/models/share_source","apps/share/views/share_view"],function(b,a){jive.ShareApp.Main=jive.oo.Class.extend(function(){this.init=function(e){var d=e||{};var c=d.source||new b();this.view=new a();this.view.addListener("prepareShare",function(f,h,g){c.get(f,h).addCallback(g.emitSuccess.bind(g)).addErrback(g.emitError.bind(g))});this.view.addListener("share",function(f,i,g,h){c.save(f,i,g).addCallback(h.emitSuccess.bind(h).aritize(0)).addErrback(h.emitError.bind(h))})};this.showModal=function(d,c){this.view.openShareModal(d,c)}});return jive.ShareApp.Main});
;
// This file was automatically generated from membership.soy.
// Please don't edit this file by hand.

goog.provide('jive.socialgroups.soy.joinConfirmation');
goog.provide('jive.socialgroups.soy.leaveConfirmation');
goog.provide('jive.socialgroups.soy.leaveGroup');
goog.provide('jive.socialgroups.soy.renderError');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.error.rest.soy.errorFinding');


jive.socialgroups.soy.leaveGroup = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="jive-modal jive-modal-medium" id="jive-modal-leave-group"><header>', (opt_data.pendingApproval) ? '<h2 class="jive-modal-title jive-modal-title-leave-group">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('sgroup.join.cancel'),[])) + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.colon'),[])) + ' ' + soy.$$escapeHtml(opt_data.groupName) + '</h2>' : '<h2 class="jive-modal-title jive-modal-title-leave-group">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('sgroup.leave.title'),[])) + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.colon'),[])) + ' ' + soy.$$escapeHtml(opt_data.groupName) + '</h2>', '</header><label class="j-508-label" id="close-modal-508">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.close.modal'),[])), '</label><a href="#" class="j-modal-close-top close" aria-labelledby="close-modal-508" title="', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.close.modal'),[])), '">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.close'),[])), '  <span class="j-close-icon  j-ui-elem"></span></a><!-- Manage categories listing --><section class="jive-modal-content j-modal-content-text jive-modal-leave-group clearfix">', (opt_data.canLeaveSocialGroup) ? ((opt_data.pendingApproval) ? '<h3>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('sgroup.leave.canceljoin'),[opt_data.groupName])) + '</h3>' + ((opt_data.requiresApproval) ? '<p>' + soy.$$escapeHtml(opt_data.leaveI18n) + '</p>' : '') : '<h3>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('sgroup.leave.confirm'),[opt_data.groupName])) + '</h3>' + ((opt_data.requiresApproval) ? '<p>' + soy.$$escapeHtml(opt_data.leaveI18n) + '</p>' : '') + '<p>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('sgroup.leave.follow.remove'),[])) + '</p>') + '<div class="jive-form-buttons"><button type="button" class="j-btn-callout" id="group-leave-submit">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('sgroup.leave.accept'),[])) + '</button><button type="button" class="jive-modal-close close">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.cancel'),[])) + '</button></div>' : (opt_data.onlyOneOwner) ? '<p>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('sgroup.leave.onlyowner'),[])) + '</p><p>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('sgroup.leave.onlyowner.info'),[])) + '</p><div class="jive-form-buttons"><button type="button" class="jive-modal-close close">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.cancel'),[])) + '</button></div>' : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('sgroup.leave.already.gone'),[])), '</section></div>');
  return opt_sb ? '' : output.toString();
};


jive.socialgroups.soy.joinConfirmation = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.pendingApproval) ? '<div>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('sgroup.join.apprvl.info'),[])) + '</div>' : (opt_data.banned) ? '<div>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('sgroup.banned_member.msg'),[])) + '</div>' : '<div>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('sgroup.join.confirm'),[])) + '</div>');
  return opt_sb ? '' : output.toString();
};


jive.socialgroups.soy.leaveConfirmation = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.pendingApproval) ? '<div>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('sgroup.cancel.message'),[])) + '</div>' : '<div>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('sgroup.leave.message'),[])) + '</div>');
  return opt_sb ? '' : output.toString();
};


jive.socialgroups.soy.renderError = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  switch (opt_data.code) {
    case 4026:
      output.append('<p>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('sgroup.join.notallowed'),[])), '</p>');
      break;
    case 4008:
      output.append('<p>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('sgroup.not.found'),[])), '</p>');
      break;
    default:
      if (opt_data.message) {
        output.append('<p>', soy.$$escapeHtml(opt_data.message), '</p>');
      } else {
        jive.error.rest.soy.errorFinding(opt_data, output);
      }
  }
  return opt_sb ? '' : output.toString();
};

;
jive.namespace("MembershipApp");jive.MembershipApp.MembershipView=jive.oo.Class.extend(function(a){var b="browse",d="landing";jive.conc.observable(this);this.init=function(g,i,f){var e=this;this.joinContainer=g;this.leaveContainer=i;this.options=f||{};var h="objectID" in f?d:b;this.isPage=function(j){return h===j};$j(document).ready(function(){if(e.isPage(d)){$j(document).delegate(e.joinContainer,"click",function(j){e.joinGroup($j(this));j.preventDefault()});$j(document).delegate(e.leaveContainer,"click",function(j){e.displayLeaveGroupModal($j(this));j.preventDefault()})}else{$j("body").on("click",".sgroup-join, .sgroup-leave",function(k){k.preventDefault();var j=$j(this);if(j.is(".sgroup-join")){e.joinGroup(j)}else{e.displayLeaveGroupModal(j)}})}})};this.joinGroup=function(f){var e=this;var g=e.determineObjectID(f);e.emitP("join",g).addCallback(function(h){var i=$j.noop;if(e.isPage(d)){if(!h.banned){$j(e.leaveContainer).show();$j(e.joinContainer).hide()}i=function(){if(window.location.href.match(/\?(.*&)?qstep=(\d+)/)&&h.memberToContribute){window.location=c(1)}else{if(e.options.redirectOnJoin){window.location=e.options.redirectOnJoin}else{window.location.reload()}}}}else{$j(f).closest(".j-thumb-back, .j-td-follow-action").find("a.sgroup-leave").show();$j(f).hide()}e.displayMessage(jive.socialgroups.soy.joinConfirmation(h),i);$j("#jive-link-socialgroup-startFollowing").hide();$j("#jive-link-socialgroup-following").show()}).addErrback(function(i,h){console.log("got error message: "+i+" code: "+h);e.displayError(i,h)})};this.displayLeaveGroupModal=function(f){var e=this;var g=e.determineObjectID(f);e.emitP("prepareLeave",g).addCallback(function(j){var h=$j(jive.socialgroups.soy.leaveGroup(j));$j("body").append(h);var i=$j("body").find("#jive-modal-leave-group");i.lightbox_me({closeSelector:".jive-modal-close, .close",destroyOnClose:true});i.find("#group-leave-submit").click(function(){e.leaveGroup(f,j);i.trigger("close")})}).addErrback(function(i,h){e.displayError(i,h)})};this.leaveGroup=function(f,g){var e=this;var h=e.determineObjectID(f);e.emitP("leave",h).addCallback(function(){var i=$j.noop;if(e.isPage(d)){$j(e.joinContainer).show();$j(e.leaveContainer).hide();$j("#jive-link-socialgroup-following").hide();$j("#jive-link-socialgroup-startFollowing").show();i=function(){if(!g.visibleAfterLeaving){window.location=jive.app.url({path:"/groups"})}else{if(g.memberToContribute){window.location=c(-1)}}}}else{$j(f).closest(".j-thumb-back, .j-td-follow-action").find("a.sgroup-join").show();$j(f).hide()}e.displayMessage(jive.socialgroups.soy.leaveConfirmation(g),i)}).addErrback(function(j,i){e.displayError(j,i)})};this.displayMessage=function(e,f){$j("<p />").html(e).message({style:"success",dismissCallback:f||$j.noop})};this.displayError=function(g,f){var e=jive.socialgroups.soy.renderError({message:g,code:f,href:window.location.href});$j(e).message({style:"error",showClose:true})};this.determineObjectID=function(e){var f=this.options.objectID||e.attr("data-objectid")||0;return parseInt(f,10)};function c(e){return window.location.href.replace(/\?(.*&)?qstep=(\d+)/,function(h,f,i){var g=parseInt(i)+e;return"?"+f+"qstep="+g})}this.tearDown=function(){var e=this;if(e.isPage(d)){$j(e.joinContainer).off("click");$j(e.leaveContainer).off("click")}else{$j(".sgroup-join").off("click");$j(".sgroup-leave").off("click")}}});define("apps/socialgroup/membership/views/membership_view",function(){return jive.MembershipApp.MembershipView});
;
jive.namespace("MembershipApp");define("apps/socialgroup/membership/models/membership_source",["apps/shared/models/rest_service"],function(a){jive.MembershipApp.MembershipSource=a.extend(function(b){b.resourceType="socialgroup";this.save=function(e){var f=new jive.conc.Promise(),d=this;var c=$j.deparam.querystring().fromQ;$j.ajax({type:"POST",url:this.RESOURCE_ENDPOINT+"/"+e.objectID+"/members",dataType:"json",data:c,contentType:"application/json; charset=utf-8",success:function(g,i,h){f.emitSuccess(g)},error:function(i,k,j){try{var h=$j.parseJSON(i.responseText);if(h&&h.error&&h.error.message){f.emitError(h.error.message,h.error.code)}}catch(g){f.emitError(null,i&&i.status)}}});return f};this.get=function(e){var f=new jive.conc.Promise(),d=this;var c={};c[this.resourceType]=e;$j.ajax({type:"GET",url:this.RESOURCE_ENDPOINT+"/"+e.objectID+"/memberInfo",dataType:"json",success:function(g,i,h){f.emitSuccess(g)},error:function(i,k,j){try{var h=$j.parseJSON(i.responseText);if(h&&h.error&&h.error.message){f.emitError(h.error.message,h.error.code)}}catch(g){f.emitError(null,i&&i.status)}}});return f};this.destroy=function(c){var d=new jive.conc.Promise();$j.ajax({type:"DELETE",url:this.RESOURCE_ENDPOINT+"/"+c.objectID+"/members",success:function(){d.emitSuccess()},error:function(g){try{var f=$j.parseJSON(g.responseText);if(f&&f.error&&f.error.message){d.emitError(f.error.message,f.error.code)}}catch(e){d.emitError(null,g&&g.status)}}});return d}});return jive.MembershipApp.MembershipSource});
;
jive.namespace("MembershipApp");define("apps/socialgroup/membership/main",function(){jive.MembershipApp.Main=jive.oo.Class.extend(function(a){this.init=function(c){var b=this;this.membershipSource=new jive.MembershipApp.MembershipSource(c);this.membershipView=new jive.MembershipApp.MembershipView("#jive-link-joinSocialGroup,.jive-link-joinSocialGroup","#jive-link-leaveSocialGroup,.jive-link-leaveSocialGroup",c);this.membershipView.addListener("join",function(e,d){b.membershipSource.save({objectID:e}).addCallback(function(f){d.emitSuccess(f);jive.switchboard.emit("sgroup.member.join",f)}).addErrback(function(g,f){console.log("got a err in main.js");d.emitError(g,f)})}).addListener("leave",function(e,d){b.membershipSource.destroy({objectID:e}).addCallback(function(){jive.switchboard.emit("sgroup.member.leave",e);d.emitSuccess()}).addErrback(function(g,f){console.log("got a err in main.js");d.emitError(g,f)})}).addListener("prepareLeave",function(e,d){b.membershipSource.get({objectID:e}).addCallback(function(f){d.emitSuccess(f)}).addErrback(function(g,f){console.log("got a err in main.js");d.emitError(g,f)})})};this.tearDown=function(){this.membershipView.removeListener("join").removeListener("leave").removeListener("prepareLeave").tearDown()}});return jive.MembershipApp.Main});
;
// This file was automatically generated from main.soy.
// Please don't edit this file by hand.

goog.provide('jive.soy.email_notification.common');
goog.provide('jive.soy.email_notification.commonInSocialButton');
goog.provide('jive.soy.email_notification.message');
goog.provide('jive.soy.email_notification.start');
goog.provide('jive.soy.email_notification.stop');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');


jive.soy.email_notification.start = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  switch (opt_data.type) {
    case 'common':
      jive.soy.email_notification.common({message: soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('thread.start_watch.link'),[]))}, output);
      break;
    case 'socialButton':
      jive.soy.email_notification.commonInSocialButton({message: soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('thread.start_watch.link'),[]))}, output);
      break;
  }
  return opt_sb ? '' : output.toString();
};


jive.soy.email_notification.stop = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  switch (opt_data.type) {
    case 'common':
      jive.soy.email_notification.common({message: soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('thread.stop_watch.link'),[]))}, output);
      break;
    case 'socialButton':
      jive.soy.email_notification.commonInSocialButton({message: soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('thread.stop_watch.link'),[]))}, output);
      break;
  }
  return opt_sb ? '' : output.toString();
};


jive.soy.email_notification.message = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  switch (opt_data.type) {
    case 'watch':
      output.append((opt_data.isUser) ? '<p>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.watchuser.start'),[])) + '</p>' : '<p>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.watch.start'),[])) + '</p>');
      break;
    case 'unwatch':
      output.append((opt_data.isUser) ? '<p>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.watchuser.stop'),[])) + '</p>' : '<p>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.watch.stop'),[])) + '</p>');
      break;
  }
  return opt_sb ? '' : output.toString();
};


jive.soy.email_notification.common = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a href="#" rel="nofollow"><span class="jive-icon-med jive-icon-message-open"></span>', soy.$$escapeHtml(opt_data.message), '</a>');
  return opt_sb ? '' : output.toString();
};


jive.soy.email_notification.commonInSocialButton = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a href="#" class="j-social-button j-rc5 j-button-toggle-email-notifications j-ui-elem"><span class="j-ui-elem"><span class="jive-icon-med jive-icon-message-open"></span>', soy.$$escapeHtml(opt_data.message), '</span></a>');
  return opt_sb ? '' : output.toString();
};

;
jive.namespace("EmailNotification");define("apps/email_notification/model/source",["apps/shared/models/rest_service"],function(a){jive.EmailNotification.Source=a.extend(function(b){b.resourceType="emailwatches";b.pluralizedResourceType=b.resourceType;b.resourceType="emailwatches";this.watch=function(e,c){var d=this.RESOURCE_ENDPOINT+"/watch/"+c+"/"+e;return this.commonAjaxRequest(new jive.conc.Promise(),"POST",{url:d})};this.unwatch=function(e,c){var d=this.RESOURCE_ENDPOINT+"/unwatch/"+c+"/"+e;return this.commonAjaxRequest(new jive.conc.Promise(),"POST",{url:d})}});return jive.EmailNotification.Source});
;
jive.namespace("EmailNotification");jive.EmailNotification.Main=function(e,d,b){var a=new jive.EmailNotification.Source(),c={watch:{newId:"jive-link-thread-unwatch",save:a.watch.bind(a),view:jive.soy.email_notification.stop},unwatch:{newId:"jive-link-thread-watch",save:a.unwatch.bind(a),view:jive.soy.email_notification.start}};$j("#jive-link-thread-watch, #jive-link-thread-unwatch").delegate("a","click",function(g){g.preventDefault();var h=$j(this).closest("#jive-link-thread-watch, #jive-link-thread-unwatch"),f=h.attr("id").split("-").pop();c[f].save(e,d).addCallback(function(){h.attr("id",c[f].newId).html(c[f].view({type:h.attr("data-type")||"common"}));$j(jive.soy.email_notification.message({type:f,isUser:!!b})).message({style:"success"})})})};define("apps/email_notification/main",function(){return jive.EmailNotification.Main});
;
// This file was automatically generated from fewer_meetings.soy.
// Please don't edit this file by hand.

goog.provide('jive.trial.quests.fewerMeetings.panelContent');
goog.provide('jive.trial.quests.fewerMeetings.panelTitle');
goog.provide('jive.trial.quests.fewerMeetings.questComplete');
goog.provide('jive.trial.quests.fewerMeetings.questName');
goog.provide('jive.trial.quests.fewerMeetings.questReadyToComplete');
goog.provide('jive.trial.quests.fewerMeetings.tips');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.eae.common.groupedUsers');
goog.require('jive.shared.displayutil.userDisplayNameLink');
goog.require('jive.shared.soy.i18nHelper');
goog.require('jive.trial.recentlyCompleted');


jive.trial.quests.fewerMeetings.questName = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.fewer_meetings.link'),[])));
  return opt_sb ? '' : output.toString();
};


jive.trial.quests.fewerMeetings.panelTitle = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a href="#" class="j-quest-group-header js-quest-group-header j-fewer-meetings', (opt_data.questData.stepsComplete == opt_data.questData.steps.length) ? ' j-quest-complete' : '', (opt_data.panelData.lastViewedQuest == 'HaveFewerMeetingsQuest') ? ' j-active font-color-normal' : '', '" data-id="HaveFewerMeetingsQuest"><span class="lnk"><span class="j-donecheck-sm"></span>');
  jive.trial.quests.fewerMeetings.questName(null, output);
  output.append('<span class="quest-selected"></span></span></a>');
  return opt_sb ? '' : output.toString();
};


jive.trial.quests.fewerMeetings.panelContent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="section clearfix collaboration"', (opt_data.panelData.lastViewedQuest != 'HaveFewerMeetingsQuest') ? ' style="display:none"' : '', 'data-id="HaveFewerMeetingsQuest"><p class="j-vdescription font-color-normal">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.fewer_meetings.text'),[])), '</p><div class="quest-section clearfix"><div class="j-quest-lcol"><div class="j-quest-video"><div id="wistia_b8c47e6cac" class="j-qvideo"style="width:325px;height:208px;" data-video-width="328" data-video-height="208">&nbsp;</div></div><div class="j-quest-completors"><h4>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.fewer_meetings.recently_completed.text'),[])), '</h4>');
  jive.trial.recentlyCompleted({users: opt_data.questData.recentlyCompleted}, output);
  output.append('</div></div><div class="j-quest-tasks ', (opt_data.questData.stepsComplete == opt_data.questData.steps.length) ? 'j-quest-complete' : '', '"><h3 class="j-quest-theme font-face-deco"><span class="j-theme-arrow"></span>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.tryit.label'),[])), '</h3><div class="j-qtask-list">', (opt_data.questData.stepsComplete == opt_data.questData.steps.length) ? '<span class="j-completed-ribbon">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.completed.label'),[])) + '</span>' : '', '<ul><li class="j-qtask j-', soy.$$escapeHtmlAttribute(opt_data.questData.steps[0].state), '" data-stepaction="', soy.$$escapeHtmlAttribute(jive.soy.func.buildUrl('/discussion/create.jspa?fromQ=HaveFewerMeetingsQuest&qstep=0')), '"', (opt_data.questData.steps[0].state == 'completed') ? 'tabindex=\'0\'' : ' role="button"', '><span class="j-qtitle ', (opt_data.questData.steps[0].state == 'available') ? 'font-color-link' : '', '">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.fewer_meetings.post.title'),[])), '</span>', (opt_data.questData.steps[0].state != 'completed') ? '<strong class="j-qnotstarted font-color-meta-light">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.notstarted.label'),[])) + '</strong><p class="j-quest-text font-color-meta">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.fewer_meetings.post.text'),[])) + '</p><span class="j-qgobtn" tabindex="0" role="button"><label class="j-508-label">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('onboarding.go.button'),[])) + '</label></span>' : '<strong class="j-qdone">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.done.label'),[])) + '<span class="j-donecheck"></span></strong>' + ((opt_data.questData.steps[0].completionData.forumThreadViewBean) ? '<div class="j-quest-detail"><strong class="j-quest-action">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.fewer_meetings.youposted.text'),[])) + '</strong><p class="j-quest-output"><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl(opt_data.questData.steps[0].completionData.forumThreadViewBean.jiveObjectURL))) + '" class="j-quest-content"><span class="' + soy.$$escapeHtmlAttribute(opt_data.questData.steps[0].completionData.forumThreadViewBean.jiveObjectCSS) + '"></span>' + soy.$$escapeHtml((function(word, limit) {   var bits, i;   if ('string' !== typeof word) {       return '';   }    bits = word.split('');   if (bits.length > limit) {        for (i = bits.length - 1; i > -1; --i) {            if (i > limit) {                bits.length = i;            }            else if (' ' === bits[i]) {                bits.length = i;                break;            }        }        bits.push('...');    }    return bits.join('');})(opt_data.questData.steps[0].completionData.forumThreadViewBean.htmlSubject, 32)) + '</a></p></div>' : ''), '</li><li class="j-qtask j-', soy.$$escapeHtmlAttribute(opt_data.questData.steps[1].state), '" data-stepaction="', (opt_data.questData.steps[0].completionData.forumThreadViewBean) ? soy.$$escapeHtmlAttribute(jive.soy.func.buildUrl(opt_data.questData.steps[0].completionData.forumThreadViewBean.jiveObjectURL + '?fromQ=HaveFewerMeetingsQuest&qstep=1')) : '', '"', (opt_data.questData.steps[1].state == 'completed') ? 'tabindex=\'0\'' : ' role="button"', '><span class="j-qtitle ', (opt_data.questData.steps[1].state == 'available') ? 'font-color-link' : '', '">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.fewer_meetings.invite.title'),[])), '</span>');
  if (! opt_data.questData.steps[1].completionData.shareViewBean) {
    output.append('<strong class="j-qnotstarted font-color-meta-light">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.notstarted.label'),[])), '</strong><p class="j-quest-text font-color-meta">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.fewer_meetings.invite.text'),[])), '</p><span class="j-qgobtn" tabindex="0" role="button"><label class="j-508-label">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('onboarding.go.button'),[])), '</label></span>');
  } else {
    output.append('<strong class="j-qdone">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.done.label'),[])), '<span class="j-donecheck"></span></strong><div class="j-quest-detail share"><strong class="j-quest-action">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.fewer_meetings.youinvited.text'),[])), '</strong><div class="j-quest-output j-sharees font-color-meta">');
    jive.eae.common.groupedUsers({groupedUserList: opt_data.questData.steps[1].completionData.sharedUsers, groupAfterNum: 3}, output);
    output.append('</div></div>');
  }
  output.append('</li><li class="j-qtask j-', (opt_data.questData.steps[2].completionData.replyCount && opt_data.questData.steps[2].completionData.replyCount < 2) ? 'unavailable' : soy.$$escapeHtmlAttribute(opt_data.questData.steps[2].state), '" data-stepaction="', (opt_data.questData.steps[0].completionData.forumThreadViewBean) ? soy.$$escapeHtmlAttribute(jive.soy.func.buildUrl(opt_data.questData.steps[0].completionData.forumThreadViewBean.jiveObjectURL + '?fromQ=HaveFewerMeetingsQuest&qstep=2')) : '', '"', (opt_data.questData.steps[2].state == 'completed') ? 'tabindex=\'0\'' : ' role="button"', '><span class="j-qtitle ', (opt_data.questData.steps[2].state == 'available') ? (! (opt_data.questData.steps[2].completionData.replyCount && opt_data.questData.steps[2].completionData.replyCount < 2)) ? 'font-color-link' : '' : '', '">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.fewer_meetings.discussdecide.title'),[])), '</span>');
  if (opt_data.questData.steps[2].state != 'completed') {
    output.append('<strong class="j-qnotstarted font-color-meta-light">', (opt_data.questData.steps[2].completionData.replyCount && opt_data.questData.steps[2].completionData.replyCount < 2) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.awaiting.label'),[])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.notstarted.label'),[])), '</strong><p class="j-quest-text font-color-meta">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.fewer_meetings.discussdecide.text'),[])), '</p>', (opt_data.questData.steps[2].completionData.replyCount && opt_data.questData.steps[2].completionData.replyCount < 2) ? '<p class="j-quest-waiting font-color-meta">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.awaiting.text'),[])) + '</p>' : '', '<span class="j-qgobtn" tabindex="0" role="button"><label class="j-508-label">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('onboarding.go.button'),[])), '</label></span>');
  } else {
    output.append('<strong class="j-qdone">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.done.label'),[])), '<span class="j-donecheck"></span></strong>');
    if (opt_data.questData.steps[2].completionData.author) {
      output.append('<div class="j-quest-detail"><strong class="j-quest-action">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.fewer_meetings.youdecided.text'),[])), '</strong><p class="j-quest-output j-correct font-color-meta"><a href="', soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl(opt_data.questData.steps[2].completionData.url))), '">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('forum.thrd.correct_answer.link'),[])), '</a> ');
      var param177 = new soy.StringBuilder(' <span class="j-answerer">');
      jive.shared.displayutil.userDisplayNameLink(opt_data.questData.steps[2].completionData.author, param177);
      param177.append('</span>');
      jive.shared.soy.i18nHelper({i18nKey: 'eae.container.by', arg0: param177.toString(), noAutoEscape: true}, output);
      output.append('</p></div>');
    }
  }
  output.append('</li></ul></div></div></div></div>');
  return opt_sb ? '' : output.toString();
};


jive.trial.quests.fewerMeetings.tips = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.pageID == 'create-discussion') ? (opt_data.renderLocation == 'subject') ? '<div class="j-tips inline js-trial-tip" data-fromq="HaveFewerMeetingsQuest" data-location="subject" style="top: -70px;"><div class="d-' + soy.$$escapeHtmlAttribute(opt_data.renderLocation) + '-tip"><h4 class="font-face-deco">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.fewer_meetings.tip.discussion_title.label'),[])) + '</h4><p class="font-color-meta">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.fewer_meetings.tip.discussion_title.text'),[])) + '</p></div><span class="j-tiparrow-e j-tarrow" style="top: 80px"></span></div>' : (opt_data.renderLocation == 'body') ? '<div class="j-tips inline js-trial-tip" data-fromq="HaveFewerMeetingsQuest" data-location="body" style="top: 120px;"><div class="d-' + soy.$$escapeHtmlAttribute(opt_data.renderLocation) + '-tip"><h4 class="font-face-deco">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.fewer_meetings.tip.discussion_content.label'),[])) + '</h4><p class="font-color-meta">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.fewer_meetings.tip.discussion_content.text'),[])) + '</p></div><span class="j-tiparrow-e j-tarrow" style="top: 80px"></span></div>' : (opt_data.renderLocation == 'publishbar') ? '<div class="j-tips inline p-bar js-trial-tip" data-fromq="HaveFewerMeetingsQuest" data-location="publishbar" style="bottom: -30px;"><div class="d-' + soy.$$escapeHtmlAttribute(opt_data.renderLocation) + '-tip"><h4 class="font-face-deco">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.fewer_meetings.tip.discussion_location.label'),[opt_data.communityName])) + '</h4><p class="font-color-meta">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.fewer_meetings.tip.discussion_location.text'),[])) + '</p></div><span class="j-tiparrow-e j-tarrow" style="bottom: 35px"></span></div>' : (opt_data.renderLocation == 'post') ? '<div class="j-tips inline p-bar js-trial-tip" data-fromq="HaveFewerMeetingsQuest" data-location="post" style="top: -35px;"><div class="d-' + soy.$$escapeHtmlAttribute(opt_data.renderLocation) + '-tip"><h4 class="font-face-deco">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.fewer_meetings.tip.discussion_alldone.label'),[])) + '</h4><p class="font-color-meta">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.fewer_meetings.tip.discussion_alldone.text'),[])) + '</p></div><span class="j-tiparrow-e j-tarrow" style="top: 40px"></span></div>' : '' : (opt_data.pageID == 'view-discussion') ? (opt_data.renderLocation == 'share') ? '<div class="j-pop js-pop popover js-trial-tip" data-fromq="HaveFewerMeetingsQuest" data-location="share" style="top: 15px; left: -360px; z-index: 100;"><div class="j-tips d-' + soy.$$escapeHtmlAttribute(opt_data.renderLocation) + '-tip j-pop-main"><h4 class="font-face-deco">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.fewer_meetings.tip.discussion_share.label'),[])) + '</h4><p>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.fewer_meetings.tip.discussion_share.text'),[])) + '</p></div><span class="leftArrow pointer" style="right: -9px; top: 40px;"></span></div>' : (opt_data.renderLocation == 'outcome') ? '<div class="j-pop js-pop popover js-trial-tip" data-fromq="HaveFewerMeetingsQuest" data-location="outcome" style="top: 185px; left: -0px; z-index: 100;"><div class="j-tips d-' + soy.$$escapeHtmlAttribute(opt_data.renderLocation) + '-tip j-pop-main"><h4 class="font-face-deco">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.fewer_meetings.tip.discussion_outcome.label'),[])) + '</h4><p>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.fewer_meetings.tip.discussion_outcome.text'),[])) + '</p></div><span class="belowArrow pointer" style="left: 30px; top: -9px;"></span></div>' : (opt_data.renderLocation == 'share.modal.users') ? '<div class="j-tips mtip js-trial-tip" style="position: absolute; top: -205px; left: -155px; visibility: visible; z-index: 100;"><div class="d-tip"><h4 class="font-face-deco font-color-white">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.fewer_meetings.tip.share.email.text'),[])) + '</h4></div><span class="j-arrow-righthook white j-qarrow" style="left: 60px; bottom: -75px;"></span></div>' : (opt_data.renderLocation == 'share.modal.message') ? '<div class="j-tips mtip js-trial-tip" style="position: absolute; top: 50px; width: 135px; left: -235px; visibility: visible; z-index: 100;"><div class="d-tip"><h4 class="font-face-deco font-color-white">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.fewer_meetings.tip.share.message.text'),[])) + '</h4></div><span class="j-arrow-rightess white j-qarrow" style="right: -35px; top: 0"></span></div>' : (opt_data.renderLocation == 'share.modal.submit') ? '<div class="j-tips mtip js-trial-tip" style="position: absolute; top: 270px; width: 240px; left: -55px; visibility: visible; z-index: 100;"><div class="d-tip"><h4 class="font-face-deco font-color-white">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.fewer_meetings.tip.share.button.text'),[])) + '</h4></div><span class="j-arrow-up white j-qarrow" style="left: 77px; top: -30px"></span></div>' : (opt_data.renderLocation == 'answer') ? '<div class="j-pop js-pop popover js-trial-tip" data-fromq="HaveFewerMeetingsQuest" data-location="answer" style="position: absolute; top: 30px; left: 320px; visibility: visible; z-index: 100;"><div class="j-tips d-' + soy.$$escapeHtmlAttribute(opt_data.renderLocation) + '-tip j-pop-main wide"><h4 class="font-face-deco">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.fewer_meetings.tip.decision.label'),[])) + '</h4><p>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.fewer_meetings.tip.decision.text1'),[])) + '</p><p><span class="j-correct-btn-star j-ui-elem"></span><strong class="font-color-okay">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.fewer_meetings.tip.decision.text2'),[])) + '</strong></p></div><span class="rightArrow pointer" style="left: -9px; top: 63px;"></span></div>' : (opt_data.renderLocation == 'banner') ? '<div class="j-pop js-pop popover js-trial-tip" data-fromq="HaveFewerMeetingsQuest" data-location="banner" style="position: absolute; top: 50px; left: 50%; margin-left: -180px; visibility: visible; z-index: 100;"><div class="j-tips d-' + soy.$$escapeHtmlAttribute(opt_data.renderLocation) + '-tip j-pop-main"><h4 class="font-face-deco">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.fewer_meetings.tip.take5.label'),[])) + '</h4><p>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.fewer_meetings.tip.take5.text1'),[])) + '</p>' + ((opt_data.nextQuestID) ? '<p><strong><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl('/get-started',{'showQ':opt_data.nextQuestID}))) + '">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.fewer_meetings.tip.take5.text2'),[])) + '</a></strong></p>' : '<p><strong><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl('/home'))) + '">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.fewer_meetings.tip.take5.text3'),[])) + '</a></strong></p>') + '</div><span class="belowArrow pointer" style="left: 170px; top: -9px;"></span></div>' : '' : '');
  return opt_sb ? '' : output.toString();
};


jive.trial.quests.fewerMeetings.questComplete = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-pop js-pop popover js-trial-tip" data-fromq="HaveFewerMeetingsQuest" data-location="banner" style="position: absolute; top: 50px; left: 50%; margin-left: -250px; visibility: visible; z-index: 100;"><div class="font-color-normal j-tips wide j-pop-main"><h4 class="font-face-deco"><strong>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.fewer_meetings.tip.completed.label'),[])), '</strong></h4>', (opt_data.nextQuestID) ? '<p>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.fewer_meetings.tip.completed.text'),[])) + '</p><p class="j-qlinks"><strong><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl('/get-started',{'showQ':opt_data.nextQuestID}))) + '">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.fewer_meetings.tip.onward.link'),[])) + '</a></strong></p><p><strong><a href="#" id="quest-complete-close" class="js-close">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.fewer_meetings.tip.later.link'),[])) + '</a></strong></p>' : '<p><strong><a href="#" id="quest-complete-close" class="js-close">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.fewer_meetings.tip.allcompleted.link'),[])) + '</a></strong></p>', '</div><span class="belowArrow pointer" style="top: -9px; left: 235px;"></span></div>');
  return opt_sb ? '' : output.toString();
};


jive.trial.quests.fewerMeetings.questReadyToComplete = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-pop js-pop popover js-trial-tip" data-fromq="HaveFewerMeetingsQuest" data-location="banner" style="position: absolute; top: 50px; left: 50%; margin-left: -180px; visibility: visible; z-index: 100;"><div class="j-tips d-banner-tip j-pop-main"><h4 class="font-face-deco">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.fewer_meetings.tip.close.label'),[])), '</h4><p><strong><a href="', soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl('/get-started',{'showQ':'HaveFewerMeetingsQuest'}))), '">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.fewer_meetings.tip.onward.link'),[])), '</a></strong></p><p><strong><a href="#" id="quest-complete-close" class="js-close">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.fewer_meetings.tip.later.link'),[])), '</a></strong></p></div><span class="belowArrow pointer" style="left: 170px; top: -9px;"></span></div>');
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from less_email.soy.
// Please don't edit this file by hand.

goog.provide('jive.trial.quests.lessEmail.panelContent');
goog.provide('jive.trial.quests.lessEmail.panelTitle');
goog.provide('jive.trial.quests.lessEmail.questComplete');
goog.provide('jive.trial.quests.lessEmail.questName');
goog.provide('jive.trial.quests.lessEmail.tips');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.eae.common.groupedUsers');
goog.require('jive.shared.displayutil.userDisplayNameLink');
goog.require('jive.trial.recentlyCompleted');


jive.trial.quests.lessEmail.questName = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.less_email.title'),[])));
  return opt_sb ? '' : output.toString();
};


jive.trial.quests.lessEmail.panelTitle = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a href="#" class="j-quest-group-header js-quest-group-header j-less-email', (opt_data.questData.stepsComplete == opt_data.questData.steps.length) ? ' j-quest-complete' : '', (opt_data.panelData.lastViewedQuest == 'LessEmailQuest') ? ' j-active font-color-normal' : '', '" data-id="LessEmailQuest"><span class="lnk"><span class="j-donecheck-sm"></span>');
  jive.trial.quests.lessEmail.questName(null, output);
  output.append('<span class="quest-selected"></span></span></a>');
  return opt_sb ? '' : output.toString();
};


jive.trial.quests.lessEmail.panelContent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="section clearfix collaboration"', (opt_data.panelData.lastViewedQuest != 'LessEmailQuest') ? ' style="display:none"' : '', 'data-id="LessEmailQuest"><p class="j-vdescription font-color-normal">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.less_email.text'),[])), '</p><div class="quest-section clearfix"><div class="j-quest-lcol"><div class="j-quest-video"><div id="wistia_a26f53f98e" class="j-qvideo" style="width:325px;height:208px;" data-video-width="328" data-video-height="208">&nbsp;</div></div><div class="j-quest-completors"><h4>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.less_email.recently_completed.text'),[])), '</h4>');
  jive.trial.recentlyCompleted({users: opt_data.questData.recentlyCompleted}, output);
  output.append('</div></div><div class="j-quest-tasks ', (opt_data.questData.stepsComplete == opt_data.questData.steps.length) ? 'j-quest-complete' : '', '"><h3 class="j-quest-theme font-face-deco"><span class="j-theme-arrow"></span>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.tryit.label'),[])), '</h3><div class="j-qtask-list">', (opt_data.questData.stepsComplete == opt_data.questData.steps.length) ? '<span class="j-completed-ribbon">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.completed.label'),[])) + '</span>' : '', '<ul><li class="j-qtask j-', soy.$$escapeHtmlAttribute(opt_data.questData.steps[0].state), '" data-stepaction="', (opt_data.questData.steps[0].visibility) ? soy.$$escapeHtmlAttribute(jive.soy.func.buildUrl('/document/create.jspa',{'fromQ':'LessEmailQuest','qstep':'0','QVis':opt_data.questData.steps[0].visibility})) : soy.$$escapeHtmlAttribute(jive.soy.func.buildUrl('/document/create.jspa',{'fromQ':'LessEmailQuest','qstep':'0'})), '" ', (opt_data.questData.steps[0].state == 'completed') ? 'tabindex=\'0\'' : ' role="button"', '><span class="j-qtitle ', (opt_data.questData.steps[0].state == 'available') ? 'font-color-link' : '', '">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.less_email.createdoc.title'),[])), '</span>', (opt_data.questData.steps[0].state != 'completed') ? '<strong class="j-qnotstarted font-color-meta-light">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.notstarted.label'),[])) + '</strong><p class="j-quest-text font-color-meta">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.less_email.createdoc.text'),[])) + '</p><span class="j-qgobtn" tabindex="0" role="button"><label class="j-508-label">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('onboarding.go.button'),[])) + '</label></span>' : '<strong class="j-qdone">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.done.label'),[])) + '<span class="j-donecheck"></span></strong>' + ((opt_data.questData.steps[0].completionData.documentViewBean) ? '<div class="j-quest-detail"><strong class="j-quest-action">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.less_email.createdoc.complete.text'),[])) + '</strong><p class="j-quest-output"><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl(opt_data.questData.steps[0].completionData.documentViewBean.jiveObjectURL))) + '" class="j-quest-content"><span class="' + soy.$$escapeHtmlAttribute(opt_data.questData.steps[0].completionData.documentViewBean.jiveObjectCSS) + '"></span>' + soy.$$escapeHtml((function(word, limit) {   var bits, i;   if ('string' !== typeof word) {       return '';   }    bits = word.split('');   if (bits.length > limit) {        for (i = bits.length - 1; i > -1; --i) {            if (i > limit) {                bits.length = i;            }            else if (' ' === bits[i]) {                bits.length = i;                break;            }        }        bits.push('...');    }    return bits.join('');})(opt_data.questData.steps[0].completionData.documentViewBean.subject, 40)) + '</a></p></div>' : ''), '</li><li class="j-qtask j-', soy.$$escapeHtmlAttribute(opt_data.questData.steps[1].state), '" data-stepaction="', (opt_data.questData.steps[0].completionData.documentViewBean) ? soy.$$escapeHtmlAttribute(jive.soy.func.buildUrl(opt_data.questData.steps[0].completionData.documentViewBean.jiveObjectURL + '?fromQ=LessEmailQuest&qstep=1')) : '', '"', (opt_data.questData.steps[1].state == 'completed') ? 'tabindex=\'0\'' : ' role="button"', '><span class="j-qtitle ', (opt_data.questData.steps[1].state == 'available') ? 'font-color-link' : '', '">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.less_email.addcollab.title'),[])), '</span>');
  if (! opt_data.questData.steps[1].completionData.collaborators) {
    output.append('<strong class="j-qnotstarted font-color-meta-light">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.notstarted.label'),[])), '</strong><p class="j-quest-text font-color-meta">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.less_email.addcollab.text'),[])), '</p><span class="j-qgobtn" tabindex="0" role="button"><label class="j-508-label">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('onboarding.go.button'),[])), '</label></span>');
  } else {
    output.append('<strong class="j-qdone">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.done.label'),[])), '<span class="j-donecheck"></span></strong><div class="j-quest-detail"><strong class="j-quest-action">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.less_email.youinvited.text'),[])), '</strong><div class="j-quest-output j-sharees font-color-meta">');
    jive.eae.common.groupedUsers({groupedUserList: opt_data.questData.steps[1].completionData.collaborators, groupAfterNum: 3}, output);
    output.append('</div></div>');
  }
  output.append('</li><li class="j-qtask ', (opt_data.questData.steps[2].state == 'completed') ? 'j-completed' : 'j-unavailable', '" data-stepaction="', (opt_data.questData.steps[0].completionData.documentViewBean) ? soy.$$escapeHtmlAttribute(jive.soy.func.buildUrl(opt_data.questData.steps[0].completionData.documentViewBean.jiveObjectURL)) : '', '"', (opt_data.questData.steps[2].state == 'completed') ? 'tabindex=\'0\'' : ' role="button"', '><span class="j-qtitle ', (opt_data.questData.steps[2].state == 'available') ? (! opt_data.questData.steps[2].completionData.modifierUser) ? 'font-color-normal' : 'font-color-link' : '', '">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.less_email.edit.title'),[])), '</span>');
  if (! opt_data.questData.steps[2].completionData.modifierUser) {
    output.append('<strong class="j-qnotstarted font-color-meta-light">', (opt_data.questData.steps[0].state == 'completed' && opt_data.questData.steps[1].state == 'completed' && opt_data.questData.steps[2].state != 'completed') ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.waiting.label'),[])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.notstarted.label'),[])), '</strong><p class="j-quest-text j-wait font-color-meta">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.less_email.edit.text'),[])), '</p>');
  } else {
    output.append('<strong class="j-qdone">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.done.label'),[])), '<span class="j-donecheck"></span></strong><div class="j-quest-detail"><strong class="j-quest-action">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.less_email.edit.complete.editedby'),[])), '</strong><p class="j-quest-output font-color-meta">');
    jive.shared.displayutil.userDisplayNameLink(opt_data.questData.steps[2].completionData.modifierUser, output);
    output.append('</p></div>');
  }
  output.append('</li></ul></div></div></div></div>');
  return opt_sb ? '' : output.toString();
};


jive.trial.quests.lessEmail.tips = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.pageID == 'create-document') ? (opt_data.renderLocation == 'subject') ? '<div class="j-tips inline js-trial-tip" data-fromq="LessEmailQuest" data-location="subject" style="top: -5px; visibility: visible; z-index: 100;"><div class="d-' + soy.$$escapeHtmlAttribute(opt_data.renderLocation) + '-tip"><h4 class="font-face-deco">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.less_email.tip.doc_title.label'),[])) + '</h4><p class="font-color-meta">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.less_email.tip.doc_title.text'),[])) + '</em></p></div><span class="j-tiparrow-e j-tarrow" style="top: 20px"></span></div>' : (opt_data.renderLocation == 'body') ? '<div class="j-tips inline js-trial-tip" data-fromq="LessEmailQuest" data-location="body" style="top: 120px;"><div class="d-' + soy.$$escapeHtmlAttribute(opt_data.renderLocation) + '-tip"><h4 class="font-face-deco">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.less_email.tip.doc_body.label'),[])) + '</h4><p class="font-color-meta">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.less_email.tip.doc_body.text'),[])) + '</p></div><span class="j-tiparrow-e j-tarrow" style="top: 20px"></span></div>' : (opt_data.renderLocation == 'publishbar') ? '<div class="j-tips inline p-bar js-trial-tip" data-fromq="HaveFewerMeetingsQuest" data-location="publishbar" style="top: 37px;"><div class="d-' + soy.$$escapeHtmlAttribute(opt_data.renderLocation) + '-tip"><h4 class="font-face-deco">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.less_email.tip.doc_location.label'),[])) + '</h4><p class="font-color-meta">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.less_email.tip.doc_location.text1'),[])) + '</p><p class="font-color-j-highlight"><em>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.less_email.tip.doc_location.text2'),[])) + '</em></p></div><span class="j-tiparrow-e j-tarrow" style="top: 50px"></span></div>' : (opt_data.renderLocation == 'post') ? '<div class="j-tips inline p-bar js-trial-tip" data-fromq="LessEmailQuest" data-location="post" style="top: -9px;"><div class="d-' + soy.$$escapeHtmlAttribute(opt_data.renderLocation) + '-tip"><h4 class="font-face-deco">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.less_email.tip.doc_alldone.label'),[])) + '</h4><p class="font-color-meta">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.less_email.tip.doc_alldone.text'),[])) + '</p></div><span class="j-tiparrow-e j-tarrow" style="top: 20px"></span></div>' : '' : (opt_data.pageID == 'view-document') ? (opt_data.renderLocation == 'edit') ? '<div class="js-pop j-tips j-pop-main js-trial-tip" data-fromq="HaveFewerMeetingsQuest" data-location="edit" style="left: -220px; top: -9px; visibility: visible; z-index: 100;"><div class="d-' + soy.$$escapeHtmlAttribute(opt_data.renderLocation) + '-tip"><h4 class="font-face-deco">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.less_email.tip.doc_edit.label'),[])) + '</h4><p>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.less_email.tip.doc_edit.text'),[])) + '</p></div><span class="leftArrow pointer" style="right: -9px; top: 40px;"></span></div>' : (opt_data.renderLocation == 'collaborators') ? '<div class="j-pop js-pop popover font-color-normal js-trial-tip" data-fromq="HaveFewerMeetingsQuest" data-location="collaborators" style="position: absolute; top: 25px; left: 270px; visibility: visible; z-index: 100;"><div class="j-tips d-' + soy.$$escapeHtmlAttribute(opt_data.renderLocation) + '-tip j-pop-main"><h4 class="font-face-deco">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.less_email.tip.take5.label'),[])) + '</h4><p class="j-qtip-msg">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.less_email.tip.take5.text1'),[])) + '</p>' + ((opt_data.nextQuestID) ? '<p><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl('/get-started',{'showQ':opt_data.nextQuestID}))) + '"><strong class="font-color-link">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.less_email.tip.take5.text2'),[])) + '</strong></a></p>' : '<p><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl('/home'))) + '"><strong class="font-color-link">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.less_email.tip.take5.text3'),[])) + '</strong></a></p>') + '</div><span class="rightArrow pointer" style="left: -9px; top: 60px;"></span></div>' : '' : (opt_data.pageID == 'edit-document') ? (opt_data.renderLocation == 'publishbar') ? '<div class="j-tips inline p-bar js-trial-tip" data-fromq="LessEmailQuest" data-location="publishbar" style="top: 37px;"><div class="d-' + soy.$$escapeHtmlAttribute(opt_data.renderLocation) + '-tip"><h4 class="font-face-deco">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.less_email.tip.doc_location.label2'),[])) + '</h4><p class="font-color-meta">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.less_email.tip.doc_location.text1'),[])) + '</p><p class="font-color-j-highlight"><em>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.less_email.tip.doc_location.text2'),[])) + '</em></p></div><span class="j-tiparrow-e j-tarrow" style="top: 50px"></span></div>' : (opt_data.renderLocation == 'skip-down') ? '<div class="j-tips inline js-pop js-trial-tip" data-fromq="LessEmailQuest" data-location="skip-down" style="top: 65px; left: -220px;"><h4 class="font-face-deco">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.less_email.tip.skip.label'),[])) + '</h4><p>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.less_email.tip.skip.text'),[])) + '</p><span class="j-arrow-skipdown" style="left: -200px; top: 40px;"></span></div>' : (opt_data.renderLocation == 'publishbar-preselect') ? '<div class="j-tips inline p-bar js-pop js-trial-tip" data-fromq="LessEmailQuest" data-location="publishbar-preselect" style="bottom: 0;"><div class="d-' + soy.$$escapeHtmlAttribute(opt_data.renderLocation) + '-tip"><h4 class="font-face-deco">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.less_email.tip.doc_location.label'),[])) + '</h4></div><span class="j-tiparrow-e j-tarrow" style="top: 40px"></span></div>' : '' : '');
  return opt_sb ? '' : output.toString();
};


jive.trial.quests.lessEmail.questComplete = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-tips j-pop js-pop popover js-trial-tip" data-fromq="LessEmailQuest" data-location="banner" style="position: absolute; top: 50px; width: 400px; left: 50%; margin-left: -200px; visibility: visible; z-index: 100;"><div class="j-pop-main"><h4 class="font-face-deco"><strong>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.less_email.tip.completed.label'),[])), '</strong></h4>', (opt_data.nextQuestID) ? '<p>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.less_email.tip.completed.text'),[])) + '</p><p class="j-qlinks"><strong><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl('/get-started',{'showQ':opt_data.nextQuestID}))) + '">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.less_email.tip.onward.link'),[])) + '</a></strong></p><p><strong><a href="#" id="quest-complete-close" class="js-close">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.less_email.tip.later.link'),[])) + '</a></strong></p>' : '<p><strong><a href="#" id="quest-complete-close" class="js-close">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.less_email.tip.allcompleted.link'),[])) + '</a></strong></p>', '</div><span class="belowArrow pointer" style="top: -10px; left: 195px;"></span></div>');
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from stay_in_touch.soy.
// Please don't edit this file by hand.

goog.provide('jive.trial.quests.stayInTouch.mobileModal');
goog.provide('jive.trial.quests.stayInTouch.panelContent');
goog.provide('jive.trial.quests.stayInTouch.panelTitle');
goog.provide('jive.trial.quests.stayInTouch.questComplete');
goog.provide('jive.trial.quests.stayInTouch.questName');
goog.provide('jive.trial.quests.stayInTouch.tips');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.shared.displayutil.renderGuestDisplayName');
goog.require('jive.shared.displayutil.userDisplayNameLink');
goog.require('jive.shared.soy.i18nHelper');
goog.require('jive.trial.recentlyCompleted');


jive.trial.quests.stayInTouch.questName = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.stay_in_touch.title'),[])));
  return opt_sb ? '' : output.toString();
};


jive.trial.quests.stayInTouch.panelTitle = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a href="#" class="j-quest-group-header js-quest-group-header j-stay-in-touch', (opt_data.questData.stepsComplete == opt_data.questData.steps.length) ? ' j-quest-complete' : '', (opt_data.panelData.lastViewedQuest == 'StayInTouchQuest') ? ' j-active font-color-normal' : '', ' " data-id="StayInTouchQuest"><span class="lnk"><span class="j-donecheck-sm"></span>');
  jive.trial.quests.stayInTouch.questName(null, output);
  output.append('<span class="quest-selected"></span></span></a>');
  return opt_sb ? '' : output.toString();
};


jive.trial.quests.stayInTouch.panelContent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="section clearfix collaboration"', (opt_data.panelData.lastViewedQuest != 'StayInTouchQuest') ? ' style="display:none"' : '', 'data-id="StayInTouchQuest"><p class="j-vdescription font-color-normal">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.stay_in_touch.text'),[])), '</p><div class="quest-section clearfix"><div class="j-quest-lcol"><div class="j-quest-video"><div id="wistia_9a4efbeb33" class="j-qvideo" style="width:325px;height:208px;" data-video-width="328" data-video-height="208">&nbsp;</div></div><div class="j-quest-completors"><h4>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.stay_in_touch.recently_completed.text'),[])), '</h4>');
  jive.trial.recentlyCompleted({users: opt_data.questData.recentlyCompleted}, output);
  output.append('</div></div><div class="j-quest-tasks ', (opt_data.questData.stepsComplete == opt_data.questData.steps.length) ? 'j-quest-complete' : '', '"><h3 class="j-quest-theme font-face-deco"><span class="j-theme-arrow"></span>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.tryit.label'),[])), '</h3><div class="j-qtask-list">', (opt_data.questData.stepsComplete == opt_data.questData.steps.length) ? '<span class="j-completed-ribbon">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.completed.label'),[])) + '</span>' : '', '<ul><li class="j-qtask j-', soy.$$escapeHtml(opt_data.questData.steps[0].state), '" data-stepaction="', soy.$$escapeHtml(jive.soy.func.buildUrl('/activity?fromQ=StayInTouchQuest&qstep=0')), '"', (opt_data.questData.steps[0].state == 'completed') ? 'tabindex=\'0\'' : ' role="button"', '><span class="j-qtitle ', (opt_data.questData.steps[0].state == 'available') ? 'font-color-link' : '', '">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.stay_in_touch.microblogging.title'),[])), '</span>', (! opt_data.questData.steps[0].completionData.wallEntryViewBean) ? '<strong class="j-qnotstarted font-color-meta-light">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.notstarted.label'),[])) + '</strong><p class="j-quest-text font-color-meta">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.stay_in_touch.microblogging.text'),[])) + '</p><span class="j-qgobtn" tabindex="0" role="button"><label class="j-508-label">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('onboarding.go.button'),[])) + '</label></span>' : '<strong class="j-qdone">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.done.label'),[])) + '<span class="j-donecheck"></span></strong><div class="j-quest-detail"><strong class="j-quest-action">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.stay_in_touch.microblogging.complete.text'),[])) + '</strong><p class="j-quest-output"><a href="' + soy.$$escapeHtml(jive.soy.func.buildUrl(opt_data.questData.steps[0].completionData.wallEntryViewBean.jiveObjectURL)) + '"><span class="' + soy.$$escapeHtml(opt_data.questData.steps[0].completionData.wallEntryViewBean.jiveObjectCSS) + '"></span>' + soy.$$escapeHtml((function(word, limit) {   var bits, i;   if ('string' !== typeof word) {       return '';   }    bits = word.split('');   if (bits.length > limit) {        for (i = bits.length - 1; i > -1; --i) {            if (i > limit) {                bits.length = i;            }            else if (' ' === bits[i]) {                bits.length = i;                break;            }        }        bits.push('...');    }    return bits.join('');})(opt_data.questData.steps[0].completionData.wallEntryViewBean.subject, 40)) + '</a></p></div>', '</li><li class="j-qtask j-', soy.$$escapeHtml(opt_data.questData.steps[1].state), '" data-stepaction="', soy.$$escapeHtml(jive.soy.func.buildUrl('/activity?fromQ=StayInTouchQuest&qstep=1')), '"', (opt_data.questData.steps[1].state == 'completed') ? 'tabindex=\'0\'' : ' role="button"', '><span class="j-qtitle ', (opt_data.questData.steps[1].state == 'available') ? 'font-color-link' : '', '">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.stay_in_touch.like.title'),[])), '</span>');
  if (! opt_data.questData.steps[1].completionData.acclaimViewBean) {
    output.append('<strong class="j-qnotstarted font-color-meta-light">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.notstarted.label'),[])), '</strong><p class="j-quest-text font-color-meta">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.stay_in_touch.like.text'),[])), '</p><span class="j-qgobtn" tabindex="0"><label class="j-508-label">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('onboarding.go.button'),[])), '</label></span>');
  } else {
    output.append('<strong class="j-qdone">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.done.label'),[])), '<span class="j-donecheck"></span></strong><div class="j-quest-detail"><strong class="j-quest-action">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.stay_in_touch.like.complete.text'),[])), '</strong><p class="j-quest-output j-like-task">');
    var param110 = new soy.StringBuilder();
    if (! opt_data.questData.steps[1].completionData.acclaimViewBean.likedContentOwner.anonymous) {
      jive.shared.displayutil.userDisplayNameLink(opt_data.questData.steps[1].completionData.acclaimViewBean.likedContentOwner, param110);
    } else {
      jive.shared.displayutil.renderGuestDisplayName({message: opt_data.questData.steps[1].completionData.acclaimViewBean.likedContent}, param110);
    }
    jive.shared.soy.i18nHelper({i18nKey: 'eae.inbox.rel.user.plural', arg0: param110.toString(), noAutoEscape: true}, output);
    output.append((opt_data.questData.steps[1].completionData.acclaimViewBean.likedContent.hasi18nTextKey && opt_data.questData.steps[1].completionData.acclaimViewBean.likedContent.objectType != 801) ? ' ' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(opt_data.questData.steps[1].completionData.acclaimViewBean.likedContent.i18nTextKey),[])) + ' ' : '', ' <a href="', soy.$$filterNoAutoescape(jive.soy.func.buildUrl(opt_data.questData.steps[1].completionData.acclaimViewBean.likedContent.jiveObjectURL)), '">', (opt_data.questData.steps[1].completionData.acclaimViewBean.likedContent.jiveObjectIconLink) ? soy.$$filterNoAutoescape(opt_data.questData.steps[1].completionData.acclaimViewBean.likedContent.jiveObjectIconLink) : '<span class="' + soy.$$escapeHtml(opt_data.questData.steps[1].completionData.acclaimViewBean.likedContent.jiveObjectCSS) + '"></span>', '<span class="j-item">', soy.$$escapeHtml(opt_data.questData.steps[1].completionData.acclaimViewBean.likedContent.subject), '</span></a></p></div>');
  }
  output.append('</li>', (opt_data.questData.steps.length == 3) ? '<li class="j-qtask j-' + soy.$$escapeHtml(opt_data.questData.steps[2].state) + '"' + ((! opt_data.questData.steps[2].viewData.oAuthEnabled) ? ' data-stepaction="mobile_modal" data-mobileurl="' + soy.$$escapeHtml(opt_data.questData.steps[2].viewData.mobileUrl) + '"' : ' data-stepaction="' + soy.$$escapeHtml(jive.soy.func.buildUrl(opt_data.questData.steps[2].viewData.mobileUrl)) + '"') + ((opt_data.questData.steps[2].state == 'completed') ? 'tabindex=\'0\'' : ' role="button"') + '><span class="j-qtitle ' + ((opt_data.questData.steps[2].state == 'available') ? 'font-color-link' : '') + '">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.stay_in_touch.mobile.title'),[])) + '</span>' + ((opt_data.questData.steps[2].state != 'completed') ? '<strong class="j-qnotstarted font-color-meta-light">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.notstarted.label'),[])) + '</strong><p class="j-quest-text font-color-meta">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.stay_in_touch.mobile.text'),[])) + '</p><span class="j-qgobtn" tabindex="0" role="link"><label class="j-508-label">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('onboarding.go.button'),[])) + '</label></span>' : '<strong class="j-qdone">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.done.label'),[])) + '<span class="j-donecheck"></span></strong><div class="j-quest-detail"><p class="j-quest-text">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.stay_in_touch.mobile.complete.text'),[])) + '</p></div>') + '</li>' : '', '</ul></div></div></div></div>');
  return opt_sb ? '' : output.toString();
};


jive.trial.quests.stayInTouch.mobileModal = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="jive-modal jive-modal-wide j-trial-mob-modal" id="j-trial-mob-modal"><header><h2 class="jive-modal-title">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.stay_in_touch.mobile.modal.title'),[])), '</h2></header><label class="j-508-label" id="close-modal-508">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.close.modal'),[])), '</label><a class="j-modal-close-top jive-close close" href="#" aria-labelledby="close-modal-508" title="', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.close.modal'),[])), '">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.close'),[])), ' <span class="j-close-icon j-ui-elem close"></span></a><div class="jive-modal-content clearfix"><div class="j-mob-url"><h3><span class="j-theme-arrow"></span>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.stay_in_touch.mobile.modal.description.url'),[])), '</h3><p class="j-rc5"><strong>', soy.$$escapeHtml(opt_data.url), '</strong></p></div><div class="j-mob-qr"><h3>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.stay_in_touch.mobile.modal.description.qr'),[])), '</h3><div class="j-mob-accesscode j-mob-accesslink"><span class="qr-code" style="background-image:url(', soy.$$escapeHtml(jive.soy.func.buildUrl('/__services/v2/rest/onboarding/qrcode/qrcode.gif')), ')"></span></div></div><div class="j-mob-qrnote clearfix">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.stay_in_touch.mobile.modal.whats.qr'),[])), '</div></div></div>');
  return opt_sb ? '' : output.toString();
};


jive.trial.quests.stayInTouch.tips = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.pageID == 'all-activity') {
    if (opt_data.renderLocation == 'mb_body') {
      output.append('<div class="j-pop js-pop popover q-statusupdate js-trial-tip" data-fromq="StayInTouchQuest" data-location="mb_body" style="position: absolute; top: 70px; left: -125px; visibility: visible; z-index: 100;"><div class="j-tips d-', soy.$$escapeHtml(opt_data.renderLocation), '-tip j-pop-main"><h4 class="font-face-deco">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.stay_in_touch.tip.mb.label'),[])), '</h4><p>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.stay_in_touch.tip.mb.text'),[])), '</p></div><span class="belowArrow pointer" style="top: -9px; left: 200px;"></span></div>');
    } else if (opt_data.renderLocation == 'at_mention_btn') {
      output.append('<div class="j-pop js-pop popover q-statusupdate js-trial-tip" data-fromq="StayInTouchQuest" data-location="at_mention_btn" style="position: absolute; top: 135px; right: -160px; visibility: visible; z-index: 100;"><div class="j-tips wide d-', soy.$$escapeHtml(opt_data.renderLocation), '-tip j-pop-main"><h4 class="font-face-deco">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.stay_in_touch.tip.mention.label'),[])), '</h4><p>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.stay_in_touch.tip.mention.text0'),[])), '</p><p><em>');
      jive.shared.soy.i18nHelper({i18nKey: 'trial.quest.stay_in_touch.tip.mention.text1', arg0: '<span class="jive-icon-med jive-icon-mention j-quest-mention">@</span>', noAutoEscape: true}, output);
      output.append('</em></p><p><strong>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.stay_in_touch.tip.mention.text2'),[])), '</strong></p></div><span class="belowArrow pointer" style="right: 165px; top: -10px"></span></div>');
    } else if (opt_data.renderLocation == 'banner_post_mb') {
      output.append('<div class="j-pop js-pop popover js-trial-tip" data-fromq="StayInTouchQuest" data-location="banner" style="position: absolute; top: 50px; left: 50%; margin-left: -180px; visibility: visible; z-index: 100;"><div class="j-tips j-banner-tip d-', soy.$$escapeHtml(opt_data.renderLocation), '-tip j-pop-main"><h4 class="font-face-deco">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.stay_in_touch.tip.mb_done.label'),[])), '</h4><p><button class="js-back-to-onb j-btn-callout close">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.ok'),[])), '</button></p></div><span class="belowArrow pointer" style="left: 170px; top: -10px;"></span></div>');
    } else if (opt_data.renderLocation == 'stream_header') {
      output.append('<div class="j-pop js-pop popover j-qtip js-trial-tip" data-fromq="StayInTouchQuest" data-location="answer" style="position: fixed; top: 50px; left: 50%; margin-left: -250px; visibility: visible; z-index: 100;"><div class="j-tips wide d-', soy.$$escapeHtml(opt_data.renderLocation), '-tip j-pop-main"><h4 class="j-qtip-header font-face-deco">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.stay_in_touch.tip.like.label'),[])), '</h4><p>');
      jive.shared.soy.i18nHelper({i18nKey: 'trial.quest.stay_in_touch.tip.like.text1', arg0: '<span style="background: #e28044; color: #fff; font-weight: bold; -moz-border-radius: 3px; -webkit-border-radius: 3px; border-radius: 3px; padding: 2px 5px; margin: -2px;">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.like'),[])) + '</span>', noAutoEscape: true}, output);
      output.append('</p><p>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.stay_in_touch.tip.like.text2'),[])), '</p></div></div>');
    } else if (opt_data.renderLocation == 'banner_post_like') {
      output.append('<div class="j-pop js-pop popover j-qtip js-trial-tip" data-fromq="StayInTouchQuest" data-location="banner" style="position: absolute; top: 50px; left: 50%; margin-left: -180px; visibility: visible; z-index: 100;"><div class="j-tips d-', soy.$$escapeHtml(opt_data.renderLocation), '-tip j-pop-main"><h4 class="font-face-deco">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.stay_in_touch.tip.like_done.label'),[])), '</h4><p><button class="js-back-to-onb j-btn-callout close">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.ok'),[])), '</button></p></div><span class="belowArrow pointer" style="left: 170px; top: -10px;"></span></div>');
    }
  }
  return opt_sb ? '' : output.toString();
};


jive.trial.quests.stayInTouch.questComplete = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-pop js-pop popover j-qtip js-trial-tip" data-fromq="StayInTouchQuest" data-location="banner" style="position: absolute; top: 50px; width: 400px; left: 50%; margin-left: -200px; visibility: visible; z-index: 100;"><div class="j-quest-tip d-banner-tip j-pop-main"><h4 class="j-qtip-header font-face-deco"><strong class="font-color-new">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.stay_in_touch.tip.completed.label'),[])), '</strong></h4>', (opt_data.nextQuestID) ? '<p class="j-qtip-body">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.stay_in_touch.tip.completed.text'),[])) + '</p><p class="j-qtip-body j-qlinks"><strong><a href="' + soy.$$escapeHtml(jive.soy.func.buildUrl('/get-started',{'showQ':opt_data.nextQuestID})) + '">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.stay_in_touch.tip.onward.link'),[])) + '</a></strong></p><p class="j-qtip-body"><strong><a href="#" id="quest-complete-close" class="js-close">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.stay_in_touch.tip.later.link'),[])) + '</a></strong></p>' : '<p class="j-qtip-body"><strong><a href="#" id="quest-complete-close" class="js-close">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.stay_in_touch.tip.allcompleted.link'),[])) + '</a></strong></p>', '</div><span class="belowArrow pointer" style="top: -9px; left: 195px;"></span></div>');
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from community_feedback.soy.
// Please don't edit this file by hand.

goog.provide('jive.trial.quests.communityFeedback.tips');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');


jive.trial.quests.communityFeedback.tips = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.pageID == 'create-discussion') ? (opt_data.renderLocation == 'body') ? '<div class="j-tips inline js-trial-tip" data-fromq="CommunityFeedbackQuest" data-location="body" style="position: absolute; top: 60px; visibility: visible; z-index: 100;"><div class="d-' + soy.$$escapeHtmlAttribute(opt_data.renderLocation) + '-tip"><h4 class="j-qtip-header font-face-deco">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.tip.prefilled.label'),[])) + '</h4><p class="j-qtip-body font-color-meta">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.tip.prefilled.text'),[])) + '</p></div><span class="j-tiparrow-e j-tarrow" style="top: 25px"></span></div>' : '' : '');
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from teamwork.soy.
// Please don't edit this file by hand.

goog.provide('jive.trial.quests.teamwork.approved');
goog.provide('jive.trial.quests.teamwork.panelContent');
goog.provide('jive.trial.quests.teamwork.panelTitle');
goog.provide('jive.trial.quests.teamwork.pendingApproval');
goog.provide('jive.trial.quests.teamwork.questComplete');
goog.provide('jive.trial.quests.teamwork.questName');
goog.provide('jive.trial.quests.teamwork.tips');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.eae.common.groupedUsers');
goog.require('jive.shared.soy.i18nHelper');
goog.require('jive.trial.recentlyCompleted');


jive.trial.quests.teamwork.questName = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.link'),[])));
  return opt_sb ? '' : output.toString();
};


jive.trial.quests.teamwork.panelTitle = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a href="#" class="j-quest-group-header js-quest-group-header j-teamwork', (opt_data.questData.stepsComplete == opt_data.questData.steps.length) ? ' j-quest-complete ' : '', (opt_data.panelData.lastViewedQuest == 'WorkBetterAsATeamQuest') ? ' j-active font-color-normal' : '', '" data-id="WorkBetterAsATeamQuest"><span class="lnk"><span class="j-donecheck-sm"></span>');
  jive.trial.quests.teamwork.questName(null, output);
  output.append('<span class="quest-selected"></span></span></a>');
  return opt_sb ? '' : output.toString();
};


jive.trial.quests.teamwork.panelContent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="section clearfix collaboration"', (opt_data.panelData.lastViewedQuest != 'WorkBetterAsATeamQuest') ? ' style="display:none"' : '', 'data-id="WorkBetterAsATeamQuest"><p class="j-vdescription font-color-normal">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.text'),[])), '</p><div class="quest-section clearfix"><div class="j-quest-lcol"><div class="j-quest-video"><div id="wistia_6f7950d404" class="j-qvideo" style="width:325px;height:208px;" data-video-width="328" data-video-height="208">&nbsp;</div></div><div class="j-quest-completors"><h4>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.completed.text'),[])), '</h4>');
  jive.trial.recentlyCompleted({users: opt_data.questData.recentlyCompleted}, output);
  output.append('</div></div><div class="j-quest-tasks"><h3 class="j-quest-theme font-face-deco"><span class="j-theme-arrow"></span>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.tryit.label'),[])), '</h3><div class="j-qtask-list">', (opt_data.questData.stepsComplete == opt_data.questData.steps.length) ? '<span class="j-completed-ribbon">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.completed.label'),[])) + '</span>' : '', '<ul>', (! (opt_data.questData.steps[0].state == 'completed') && opt_data.questData.steps[0].completionData.pending) ? '<li class="j-qtask j-pending" tabindex=\'0\'>' : '<li class="j-qtask j-' + soy.$$escapeHtmlAttribute(opt_data.questData.steps[0].state) + '" data-stepaction="' + ((opt_data.questData.steps[0].viewData.activeInvitation) ? soy.$$escapeHtmlAttribute(jive.soy.func.buildUrl(opt_data.questData.steps[0].viewData.activeInvitation.place.link + '?fromQ=WorkBetterAsATeamQuest&qstep=0')) : soy.$$escapeHtmlAttribute(jive.soy.func.buildUrl('/edit-place.jspa?containerType=700&fromQ=WorkBetterAsATeamQuest&qstep=0'))) + '" ' + ((opt_data.questData.steps[0].state == 'completed') ? 'tabindex=\'0\'' : ' role="button"') + '>');
  if (! (opt_data.questData.steps[0].state == 'completed') && ! opt_data.questData.steps[0].completionData.pending) {
    if (opt_data.questData.steps[0].viewData.activeInvitation) {
      output.append('//user has an inviation<span class="j-qtitle ', (opt_data.questData.steps[0].state == 'available') ? 'font-color-link' : '', '">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.group.caption.join'),[])), '</span><strong class="j-qnotstarted font-color-meta-light">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.notstarted.label'),[])), '</strong><div class="j-quest-detail"><strong class="j-quest-action j-invited">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.group.invite.join'),[])), '</strong><p class="j-quest-output"><strong class="group name"><span class="jive-icon-med jive-icon-group"></span>', soy.$$escapeHtml(opt_data.questData.steps[0].viewData.activeInvitation.place.subject), '</strong></p></div>');
      if (opt_data.questData.steps[0].viewData.groupsExist) {
        output.append('<span class="j-quest-altpath font-color-meta">');
        jive.shared.soy.i18nHelper({i18nKey: 'trial.quest.work_better.group.caption.altpath', arg0: '<a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl('/create-group!input.jspa?containerType=700&fromQ=WorkBetterAsATeamQuest&qstep=0'))) + '">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.group.caption.create.lc'),[])) + '</a>', noAutoEscape: true}, output);
        output.append('</span>');
      }
    } else {
      output.append('<span class="j-qtitle ', (opt_data.questData.steps[0].state == 'available') ? 'font-color-link' : '', '">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.group.caption.create'),[])), '</span><strong class="j-qnotstarted font-color-meta-light">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.notstarted.label'),[])), '</strong><p class="j-quest-text font-color-meta">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.group.direction.create'),[])), '</p>');
      if (opt_data.questData.steps[0].viewData.groupsExist) {
        output.append('<span class="j-quest-altpath font-color-meta">');
        jive.shared.soy.i18nHelper({i18nKey: 'trial.quest.work_better.group.caption.altpath', arg0: '<a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl('/places?filterID=all~objecttype~objecttype[socialgroup]&fromQ=WorkBetterAsATeamQuest&qstep=0'))) + '" role="link">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.group.caption.join.lc'),[])) + '</a>', noAutoEscape: true}, output);
        output.append('</span>');
      }
    }
    output.append('<span class="j-qgobtn" tabindex="0" role="button"><label class="j-508-label">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('onboarding.go.button'),[])), '</label></span>');
  } else if (! (opt_data.questData.steps[0].state == 'completed') && opt_data.questData.steps[0].completionData.pending) {
    output.append('<span class="j-qtitle">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.group.caption.join'),[])), '</span><div class="j-quest-detail share"><strong class="j-quest-action">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.group.pending.caption'),[])), '</strong><p class="j-quest-output">', (opt_data.questData.steps[0].completionData.socialGroupViewBean) ? '<a href="' + soy.$$filterNoAutoescape(jive.soy.func.buildUrl(opt_data.questData.steps[0].completionData.socialGroupViewBean.jiveObjectURL)) + '" class="j-qcontent jivecontainerTT-hover-container" data-objectId="' + soy.$$escapeHtmlAttribute(opt_data.questData.steps[0].completionData.socialGroupViewBean.id) + '" data-objectType="' + soy.$$escapeHtmlAttribute(opt_data.questData.steps[0].completionData.socialGroupViewBean.objectType) + '" role="link"><span class="jive-icon-med ' + soy.$$escapeHtmlAttribute(opt_data.questData.steps[0].completionData.socialGroupViewBean.jiveObjectCSS) + '"></span><span class="j-item">' + soy.$$filterNoAutoescape(opt_data.questData.steps[0].completionData.socialGroupViewBean.groupName) + '</span></a>' : '', '</p><strong class="j-qnotstarted">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.approval.label'),[])), '</strong></div>');
  } else {
    output.append('<span class="j-qtitle">', (opt_data.questData.steps[0].completionData.joined) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.group.caption.join'),[])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.group.caption.create'),[])), '</span><strong class="j-qdone">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.done.label'),[])), '<span class="j-donecheck"></span></strong><div class="j-quest-detail share"><strong class="j-quest-action">', (opt_data.questData.steps[0].completionData.joined) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.group.complete.caption.join'),[])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.group.complete.caption.create'),[])), '</strong><p class="j-quest-output">', (opt_data.questData.steps[0].completionData.socialGroupViewBean) ? '<a href="' + soy.$$filterNoAutoescape(jive.soy.func.buildUrl(opt_data.questData.steps[0].completionData.socialGroupViewBean.jiveObjectURL)) + '" class="j-qcontent jivecontainerTT-hover-container" data-objectId="' + soy.$$escapeHtmlAttribute(opt_data.questData.steps[0].completionData.socialGroupViewBean.id) + '" data-objectType="' + soy.$$escapeHtmlAttribute(opt_data.questData.steps[0].completionData.socialGroupViewBean.objectType) + '" role="link"><span class="jive-icon-med ' + soy.$$escapeHtmlAttribute(opt_data.questData.steps[0].completionData.socialGroupViewBean.jiveObjectCSS) + '"></span><span class="j-item">' + soy.$$filterNoAutoescape(opt_data.questData.steps[0].completionData.socialGroupViewBean.groupName) + '</span></a>' : '', '</p></div>');
  }
  output.append('</li><li class="j-qtask j-', soy.$$escapeHtmlAttribute(opt_data.questData.steps[1].state), '"', (opt_data.questData.steps[0].completionData && opt_data.questData.steps[0].completionData.socialGroupViewBean) ? 'data-stepaction="' + soy.$$escapeHtmlAttribute(jive.soy.func.buildUrl('/document/upload.jspa?containerType=' + opt_data.questData.steps[0].completionData.socialGroupViewBean.objectType + '&containerID=' + opt_data.questData.steps[0].completionData.socialGroupViewBean.id + '&fromQ=WorkBetterAsATeamQuest&qstep=1')) + '"' : '', (opt_data.questData.steps[1].state == 'completed') ? 'tabindex=\'0\'' : ' role="button"', '><span class="j-qtitle ', (opt_data.questData.steps[1].state == 'available') ? 'font-color-link' : '', '">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.document.caption'),[])), '</span>', (! (opt_data.questData.steps[1].state == 'completed')) ? '<strong class="j-qnotstarted font-color-meta-light">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.notstarted.label'),[])) + '</strong><p class="j-quest-text font-color-meta">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.document.direction'),[])) + '</p><span class="j-qgobtn" tabindex="0" role="button"><label class="j-508-label">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('onboarding.go.button'),[])) + '</label></span>' : '<strong class="j-qdone">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.done.label'),[])) + '<span class="j-donecheck"></span></strong><div class="j-quest-detail"><strong class="j-quest-action">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.document.complete.caption'),[])) + '</strong><p class="j-quest-output">' + ((opt_data.questData.steps[1].completionData && opt_data.questData.steps[1].completionData.documentItemBean) ? '<a href="' + soy.$$filterNoAutoescape(jive.soy.func.buildUrl(opt_data.questData.steps[1].completionData.documentItemBean.link)) + '" class="js-header-text j-qcontent" role="link"><span class="jive-icon-med ' + soy.$$escapeHtmlAttribute(opt_data.questData.steps[1].completionData.documentItemBean.iconCss) + '"></span><span class="j-item">' + soy.$$filterNoAutoescape(opt_data.questData.steps[1].completionData.documentItemBean.subject) + '</span></a>' : '') + '</p></div>', '</li><li class="j-qtask j-', soy.$$escapeHtmlAttribute(opt_data.questData.steps[2].state), '"', (opt_data.questData.steps[0].completionData && opt_data.questData.steps[0].completionData.socialGroupViewBean) ? 'data-stepaction="' + soy.$$escapeHtmlAttribute(jive.soy.func.buildUrl(opt_data.questData.steps[0].completionData.socialGroupViewBean.jiveObjectURL + '?fromQ=WorkBetterAsATeamQuest&qstep=2')) + '"' : '', (opt_data.questData.steps[2].state == 'completed') ? 'tabindex=\'0\'' : ' role="button" ', '><span class="j-qtitle ', (opt_data.questData.steps[2].state == 'available') ? 'font-color-link' : '', '">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.invite.caption'),[])), '</span>');
  if (! (opt_data.questData.steps[2].state == 'completed')) {
    output.append('<strong class="j-qnotstarted font-color-meta-light">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.notstarted.label'),[])), '</strong><p class="j-quest-text font-color-meta">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.invite.direction'),[])), '</p><span class="j-qgobtn" tabindex="0" role="button"><label class="j-508-label">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('onboarding.go.button'),[])), '</label></span>');
  } else {
    output.append('<strong class="j-qdone">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.done.label'),[])), '<span class="j-donecheck"></span></strong><div class="j-quest-detail"><strong class="j-quest-action">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.invite.complete.caption'),[])), '</strong><div class="j-quest-output">');
    if (opt_data.questData.steps[2].completionData && opt_data.questData.steps[2].completionData.invitedUsers) {
      output.append('<div class="j-quest-result j-invites">');
      jive.eae.common.groupedUsers({groupedUserList: opt_data.questData.steps[2].completionData.invitedUsers, groupAfterNum: 3}, output);
      output.append('</div>');
    }
    output.append('</div></div>');
  }
  output.append('</li></ul></div></div></div></div>');
  return opt_sb ? '' : output.toString();
};


jive.trial.quests.teamwork.tips = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.pageID == 'create-group') {
    output.append((opt_data.renderLocation == 'group-type') ? '<div class="j-tips inline p-bar js-trial-tip" style="top: -30px; visibility: visible; z-index: 100;" data-fromq="WorkBetterAsATeamQuest" ><div class="d-' + soy.$$escapeHtmlAttribute(opt_data.renderLocation) + '-tip"><h4 class="font-face-deco">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('onboarding.step.tip.create_group.type.label'),[])) + '</h4><p class="font-color-meta">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('onboarding.step.tip.create_group.type.text'),[])) + '</p></div><span class="j-tiparrow-e j-tarrow" style="top: 50px"></span></div>' : '');
  } else if (opt_data.pageID == 'places') {
    if (opt_data.renderLocation == 'banner') {
      output.append('<div class="j-pop js-pop popover js-trial-tip" style="position: absolute; top: 50px; left: 50%; margin-left: -250px; visibility: visible; z-index: 100;"><div class="j-tips j-pop-main wide"><h4 class="font-face-deco">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.tip.joined.label'),[])), '</h4><p>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.tip.joined.text'),[])), '</p><p class="j-qlinks"><strong><a href="', soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl('/get-started',{'showQ':'WorkBetterAsATeamQuest'}))), '" id="quest-complete-continue">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.tip.continue.link'),[])), '</a></strong></p><p><strong><a id="quest-complete-close" href="#">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.tip.notnow.link'),[])), '</a></strong></p></div></div>');
    } else {
      output.append('<div id="js-teamwork-join-tip" class="j-pop js-pop popover js-trial-tip" data-fromq="WorkBetterAsATeamQuest" data-location="upload-link" style="position: absolute; top: 75px; right: 50px; visibility: visible; z-index: 100;"><div class="j-tips d-', soy.$$escapeHtmlAttribute(opt_data.renderLocation), '-tip j-pop-main wide"><h4 class="font-face-deco">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.tip.findgroup.label'),[])), '</h4><p class="font-color-meta">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.tip.findgroup.text1'),[])), '</p><p><strong>');
      jive.shared.soy.i18nHelper({i18nKey: 'trial.quest.work_better.tip.findgroup.text2', arg0: '<a href="#" id="js-teamwork-create-group-link">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.tip.createown.text'),[])) + '</a>', noAutoEscape: true}, output);
      output.append('</strong></p></div></div>');
    }
  } else if (opt_data.pageID == 'place') {
    output.append((opt_data.renderLocation == 'banner') ? '<div class="j-pop js-pop popover js-trial-tip" style="position: absolute; top: 50px; left: 50%; margin-left: -250px; visibility: visible; z-index: 100;"><div class="j-tips j-pop-main wide"><h4 class="font-face-deco">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.tip.approval.label'),[])) + '</h4><p>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.tip.approval.text'),[])) + '</p><p class="j-qlinks"><strong><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl('/get-started',{'showQ':'WorkBetterAsATeamQuest'}))) + '" id="quest-complete-continue">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.tip.continue.link'),[])) + '</a></strong></p><p><strong><a id="quest-complete-close" href="#">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.tip.notnow.link'),[])) + '</a></strong></p></div></div>' : (opt_data.renderLocation == 'join-link') ? (opt_data['private']) ? '<div id="js-teamwork-join-tip" class="j-pop js-pop popover js-trial-tip" data-fromq="HaveFewerMeetingsQuest" data-location="join-link" style="position: absolute; top: -28px; ' + ((opt_data['private'] == 'ask-to-join') ? ' left: 530px; ' : ' left: 490px; ') + ' visibility: visible; z-index: 100;"><div class="j-tips d-' + soy.$$escapeHtmlAttribute(opt_data.renderLocation) + '-tip j-pop-main"><h4 class="font-face-deco">' + ((opt_data['private'] == 'ask-to-join') ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.tip.askjoingroup.label'),[])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.tip.joingroup.label'),[]))) + '</h4>' + ((opt_data['private'] == 'ask-to-join') ? '<p>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.tip.askjoingroup.text'),[])) + '</p>' : '') + '</div><span class="rightArrow pointer" style="left: -9px; top: 33px;"></span></div>' : '<div id="js-teamwork-join-tip" class="j-pop js-pop popover js-trial-tip" data-fromq="HaveFewerMeetingsQuest" data-location="join-link" style="position: absolute; top: -25px; right: 120px; visibility: visible; z-index: 100;"><div class="j-tips d-' + soy.$$escapeHtmlAttribute(opt_data.renderLocation) + '-tip j-pop-main"><h4 class="font-face-deco">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.tip.joingroup.label'),[])) + '</h4></div><span class="leftArrow pointer" style="right: -9px; top: 33px;"></span></div>' : (opt_data.renderLocation == 'actions-link') ? '<div class="j-pop js-pop j-qtip popover js-trial-tip" style="position: absolute; top: 48px; left: -130px; visibility: visible; z-index: 100;"><div class="j-tips d-actions-button-tip j-pop-main"><h4 class="font-face-deco">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.tip.actions_btn.label'),[])) + '</h4></div><span class="leftArrow pointer" style="top: 50px;"></span></div>' : (opt_data.renderLocation == 'upload-link') ? '<div class="j-pop js-pop j-qtip popover js-trial-tip" style="position: absolute; top: 50px; left: 200px; visibility: visible; z-index: 100;"><div class="j-tips j-pop-main"><h4 class="font-face-deco">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.tip.doc_upload.label'),[])) + '</h4><p>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.tip.doc_upload.text'),[])) + '</p></div><span class="belowArrow pointer" style="left: 168px;"></span></div>' : (opt_data.renderLocation == 'invite-link') ? '<div class="j-pop-main j-tips" style="width: 338px"><h4 class="font-face-deco">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.tip.invite_link.label'),[])) + '</h4></div>' : (opt_data.renderLocation == 'invite.modal.users') ? '<div class="j-tips mtip js-trial-tip" style="position: absolute; top: -180px; left: -180px; width: 325px; visibility: visible; z-index: 100;"><div class="d-tip"><h4 class="font-face-deco font-color-white">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.tip.invite.email.text'),[])) + '</h4></div><span class="j-arrow-righthook white j-qarrow" style="left: 85px; bottom: -50px;"></span></div>' : (opt_data.renderLocation == 'invite.modal.message') ? '<div class="j-tips mtip js-trial-tip" style="position: absolute; top: 65px; width: 135px; left: -225px; visibility: visible; z-index: 100;"><div class="d-tip"><h4 class="font-face-deco font-color-white">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.tip.invite.message.text'),[])) + '</h4></div><span class="j-arrow-rightess white j-qarrow" style="right: -25px; top: -20px"></span></div>' : (opt_data.renderLocation == 'invite.modal.submit') ? '<div class="j-tips mtip js-trial-tip" style="position: absolute; top: 270px; width: 240px; left: -55px; visibility: visible; z-index: 100;"><div class="d-tip"><h4 class="font-face-deco font-color-white">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.tip.invite.button.text'),[])) + '</h4></div><span class="j-arrow-up white j-qarrow" style="left: 80px; top: -25px"></span></div>' : '');
  } else if (opt_data.pageID == 'upload') {
    output.append((opt_data.renderLocation == 'choose-file') ? '<div class="j-tips inline p-bar js-trial-tip" data-fromq="WorkBetterAsATeamQuest" data-location="upload" style="top: 80px;"><div class="d-' + soy.$$escapeHtmlAttribute(opt_data.renderLocation) + '-tip"><h4 class="font-face-deco">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.tip.file_choose.label'),[])) + '</h4><p class="font-color-meta">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.tip.file_choose.text'),[])) + '</p></div><span class="j-tiparrow-e j-tarrow" style="top: 25px"></span></div>' : (opt_data.renderLocation == 'choose-place') ? '<div class="j-tips p-bar inline js-trial-tip" data-fromq="WorkBetterAsATeamQuest" data-location="upload" style="top: 0;"><div class="d-' + soy.$$escapeHtmlAttribute(opt_data.renderLocation) + '-tip"><h4 class="font-face-deco">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.tip.file_location.label'),[])) + '</h4><p class="font-color-meta">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.tip.file_location.text'),[])) + '</p></div><span class="j-tiparrow-e j-tarrow" style="top: 25px"></span></div>' : (opt_data.renderLocation == 'submit') ? '<div class="j-tips inline p-bar js-trial-tip" data-fromq="WorkBetterAsATeamQuest" data-location="upload" style="top: -20px;"><div class="d-' + soy.$$escapeHtmlAttribute(opt_data.renderLocation) + '-tip"><h4 class="font-face-deco">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.tip.file_publish.label'),[])) + '</h4><p class="font-color-meta">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.tip.file_publish.text'),[])) + '</p></div><span class="j-tiparrow-e j-tarrow" style="top: 25px"></span></div>' : '');
  } else if (opt_data.pageID == 'view-document') {
    output.append((opt_data.renderLocation == 'banner') ? '<div class="j-pop js-pop popover js-trial-tip" data-fromq="WorkBetterAsATeamQuest" data-location="banner" style="position: absolute; top: 50px; left: 50%; margin-left: -250px; visibility: visible; z-index: 100;"><div class="j-tips d-' + soy.$$escapeHtmlAttribute(opt_data.renderLocation) + '-tip j-pop-main wide"><h4 class="font-face-deco">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.tip.nice_work.label'),[])) + '</h4><p>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.tip.nice_work.text'),[])) + '</p><p class="j-qlinks"><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl('/get-started',{'showQ':'WorkBetterAsATeamQuest'}))) + '" id="post-upload-tip-continue"><strong>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.tip.continue.link'),[])) + '</strong></a></p><p><a id="post-upload-tip-close" href="#"><strong>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.tip.notnow.link'),[])) + '</strong></a></p></div></div>' : (opt_data.renderLocation == 'edit') ? '<div class="j-tips js-pop j-pop-main js-trial-tip" data-fromq="WorkBetterAsATeamQuest" data-location="edit"><div class="d-' + soy.$$escapeHtmlAttribute(opt_data.renderLocation) + '-tip"><h4 class="font-face-deco">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.tip.doc_edit.label'),[])) + '</h4><p>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.tip.doc_edit.text'),[])) + '</p></div><span class="leftArrow pointer" style="right: -9px; top: 40px;"></span></div>' : '');
  }
  return opt_sb ? '' : output.toString();
};


jive.trial.quests.teamwork.questComplete = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-pop js-pop popover js-trial-tip" style="position: absolute; top: 50px; left: 50%; margin-left: -250px; visibility: visible; z-index: 100;"><div class="j-tips j-pop-main wide"><h4 class="font-face-deco">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.tip.completed.label'),[])), '</h4>', (opt_data.nextQuestID) ? '<p>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.tip.completed.text'),[])) + '</p><p class="j-qlinks"><strong><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl('/get-started',{'showQ':opt_data.nextQuestID}))) + '" id="quest-complete-continue">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.tip.onward.link'),[])) + '</a></strong></p><p><strong><a href="#" id="quest-complete-close" class="js-close">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.tip.notnow.link'),[])) + '</a></strong></p>' : '<p><strong><a href="#" id="quest-complete-close" class="js-close">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.tip.allcompleted.link'),[])) + '</a></strong></p>', '</div></div>');
  return opt_sb ? '' : output.toString();
};


jive.trial.quests.teamwork.pendingApproval = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-pop js-pop popover js-trial-tip" style="position: absolute; top: 50px; left: 50%; margin-left: -250px; visibility: visible; z-index: 100;"><div class="j-tips j-pop-main wide"><h4 class="font-face-deco">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.tip.approval.label'),[])), '</h4><p>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.tip.approval.text'),[])), '</p><p class="j-qlinks"><strong><a href="', soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl('/get-started',{'showQ':opt_data.nextQuestID}))), '" id="quest-complete-continue">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.tip.continue.link'),[])), '</a></strong></p><p><strong><a id="quest-complete-close" href="#">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.tip.notnow.link'),[])), '</a></strong></p></div></div>');
  return opt_sb ? '' : output.toString();
};


jive.trial.quests.teamwork.approved = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-tips j-pop js-pop popover js-trial-tip" style="position: absolute; top: 50px; left: 50%; margin-left: -250px; visibility: visible; z-index: 100; width: auto;"><div class="j-tips j-pop-main wide"><h4 class="font-face-deco">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.tip.approved.label'),[])), '</h4><p>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.tip.approved.text'),[])), '</p><p class="j-qlinks"><strong><a href="', soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl('/get-started',{'showQ':opt_data.nextQuestID}))), '" id="quest-complete-continue">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.tip.continue.link'),[])), '</a></strong></p><p><strong><a id="quest-complete-close" href="#">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.work_better.tip.notnow.link'),[])), '</a></strong></p></div></div>');
  return opt_sb ? '' : output.toString();
};

;
define("apps/trial/views/trial_tip_helper",["jquery"],function(a){return jive.AbstractView.extend(function(b){this.init=function(c){var g=this,e=$j.deparam.querystring(),d=e.fromQ,f=e.qstep||0;g.communityName=c.communityName;if(d=="WorkBetterAsATeamQuest"||d=="HaveFewerMeetingsQuest"||d=="LessEmailQuest"||d=="StayInTouchQuest"||d=="CommunityFeedbackQuest"){g.setupPage(d,f)}};this.setupPage=function(c,e){var d=this;d.emitP("shouldSetupPage",c,e).addCallback(function(f){if(f||(c=="LessEmailQuest"&&e==1)||(c=="WorkBetterAsATeamQuest"&&e==0)){if(!f){d.setupPage(c,parseInt(e,10)+1)}else{if(c=="HaveFewerMeetingsQuest"){if(e==0){d.fewerMeetingsStep0(c,e)}else{if(e==1){d.fewerMeetingsStep1(c)}else{if(e==2){d.fewerMeetingsStep2(c)}}}}else{if(c=="LessEmailQuest"){if(e==0){d.lessEmailStep0(c,e)}else{if(e==1&&f){d.lessEmailStep1(c,e)}else{if((e==1&&!f)||e==2){d.lessEmailStep2()}}}}else{if(c=="StayInTouchQuest"){if(e==0){d.stayInTouchStep0(c)}else{if(e==1){d.stayInTouchStep1(c)}}}else{if(c=="CommunityFeedbackQuest"){d.communityFeedbackTips(c)}else{if(c=="WorkBetterAsATeamQuest"){if(e==1){d.uploadDocumentTips(c,e)}else{if(e==2){d.inviteTips(c,e)}}}}}}}}}})};this.fewerMeetingsStep0=function(d,f){var e=this;if($j("#jive-compose-title").length){var g="create-discussion";$j("body").addClass("j-quest-active");var c=$j("#create-discussion");c.append('<input type="hidden" name="fromQuest" value="'+d+'" />');c.append('<input type="hidden" name="qstep" value="'+f+'" />');c.append('<input type="hidden" name="markAsQuestion" value="true" />');$j("#jive-compose-title").prepend($j(jive.trial.quests.fewerMeetings.tips({pageID:g,renderLocation:"subject"})));$j("div.jive-editor-panel").prepend($j(jive.trial.quests.fewerMeetings.tips({pageID:g,renderLocation:"body"})));$j("#js-all").before($j(jive.trial.quests.fewerMeetings.tips({pageID:g,renderLocation:"publishbar",communityName:e.communityName})));$j("#submitButton").before($j(jive.trial.quests.fewerMeetings.tips({pageID:g,renderLocation:"post"})));$j("#js-all").click();if($j.browser.msie&&$j.browser.version<9){$j("#js-all").change()}}};this.fewerMeetingsStep1=function(c){var d=this;if($j("ul.j-social-actions").length){var e="view-discussion";$j("ul.j-social-actions").before($j(jive.trial.quests.fewerMeetings.tips({pageID:e,renderLocation:"share"})));$j("#jive-replies div.j-thread-post footer").first().before($j(jive.trial.quests.fewerMeetings.tips({pageID:"view-discussion",renderLocation:"outcome"})));jive.dispatcher.listen("trial.share.modal.loaded",function(){$j("div.js_lb_overlay").addClass("j-quest-active");$j("#share-users").before($j(jive.trial.quests.fewerMeetings.tips({pageID:e,renderLocation:"share.modal.users"})));$j("#jive-send-content-not-message").before($j(jive.trial.quests.fewerMeetings.tips({pageID:e,renderLocation:"share.modal.message"})));$j("#jive-send-content-not-message").after($j(jive.trial.quests.fewerMeetings.tips({pageID:e,renderLocation:"share.modal.submit"})))});jive.dispatcher.listen("trial.share.created",function(){d.closeTip(c);d.emit("clearActiveQuest");d.emitP("getAllQuestProgressData").addCallback(function(j){var f="";for(var h=0,g=j.quests.length;h<g;h++){if(j.quests[h].stepsComplete==0){f=j.quests[h].name+"";break}}var k=$j(jive.trial.quests.fewerMeetings.tips({pageID:e,renderLocation:"banner",nextQuestID:f}));$j("body").prepend(k);$j("body").on("click.afterTip",function(i){if(!$j(i.target).parents(".js-trial-tip").length){$j("div.js-trial-tip").remove();$j("body").off("click.afterTip")}})})})}};this.fewerMeetingsStep2=function(){if($j("div.jive-thread-reply-btn-correct").length){var c="view-discussion";$j("div.jive-thread-reply-btn-correct").first().after($j(jive.trial.quests.fewerMeetings.tips({pageID:c,renderLocation:"answer"})))}};this.lessEmailStep0=function(d,e){if($j("#create-document").length){var g="create-document",f=$j("#create-document");f.append('<input type="hidden" name="fromQuest" value="'+d+'" />');f.append('<input type="hidden" name="qstep" value="'+e+'" />');$j("body").addClass("j-quest-active");var c=$j("#js-people");$j("#jive-compose-title").prepend($j(jive.trial.quests.lessEmail.tips({pageID:g,renderLocation:"subject"})));$j("div.jive-editor-panel").prepend($j(jive.trial.quests.lessEmail.tips({pageID:g,renderLocation:"body"})));c.before($j(jive.trial.quests.lessEmail.tips({pageID:g,renderLocation:"publishbar"})));$j("#submitButton").before($j(jive.trial.quests.lessEmail.tips({pageID:g,renderLocation:"post"})))}};this.lessEmailStep1=function(e,f){if($j("#jive-link-edit2 a").length){var i="view-document";var d=$j("#jive-link-edit2 a");d.attr("href",d.attr("href")+"&fromQ="+e+"&qstep="+f);var h=$j(jive.trial.quests.lessEmail.tips({pageID:i,renderLocation:"edit"}));$j(h).popover({context:d,position:"left",darkPopover:true,destroyOnClose:false,putBack:true,addClass:"j-qtip",closeOnClick:false,nudge:{left:-25},arrowOffset:0})}else{if($j("#edit-document").length){i="edit-document";$j("body").addClass("j-quest-active");var c=$j("#js-people"),g=$j(jive.trial.quests.lessEmail.tips({pageID:i,renderLocation:"skip-down"})),j=$j(jive.trial.quests.lessEmail.tips({pageID:i,renderLocation:"publishbar-preselect"}));$j("#edit-document").prepend(g);c.before(j);c.change(function(){g.remove();j.remove();c.before($j(jive.trial.quests.lessEmail.tips({pageID:i,renderLocation:"publishbar"})));$j("#submitButton").before($j(jive.trial.quests.lessEmail.tips({pageID:"create-document",renderLocation:"post"})))})}}};this.lessEmailStep2=function(){var d=this;if($j("#jive-body-main header span.jive-shared-list").length){var e="view-document";var c=$j("#jive-body-main header span.jive-shared-list");d.emitP("getAllQuestProgressData").addCallback(function(j){var f="";for(var h=0,g=j.quests.length;h<g;h++){if(j.quests[h].stepsComplete==0){f=j.quests[h].name+"";break}}var k=$j(jive.trial.quests.lessEmail.tips({pageID:e,renderLocation:"collaborators",nextQuestID:f}));c.append(k);$j("body").on("click.afterTip",function(i){if(!$j(i.target).parents(".js-trial-tip").length){$j("div.js-trial-tip").remove();$j("body").off("click.afterTip")}})})}};this.stayInTouchStep0=function(d){var c=this;require(["jive.ActivityStream.MBController"],function(e){var g=e.getMicrobloggingView();if(g){var j="all-activity";e.addListener("submitSuccess",function(){c.closeTip(d);jive.dispatcher.dispatch("trial.updatePercentComplete");$j("body").prepend($j(jive.trial.quests.stayInTouch.tips({pageID:j,renderLocation:"banner_post_mb"})));$j("body").on("click.afterTip",function(m){var k=$j(m.target);if(!k.parents(".js-trial-tip").length||k.is(".close")){$j("div.js-trial-tip").remove();$j("body").off("click.afterTip");var l=jive.app.url({path:"/get-started"});window.location=l}})});var i=$j(jive.trial.quests.stayInTouch.tips({pageID:j,renderLocation:"mb_body"})),h=$j("#statusInputs-mb-header-editor");h.prepend(i);var f=$j(jive.trial.quests.stayInTouch.tips({pageID:j,renderLocation:"at_mention_btn"})).hide();h.prepend(f);g.addListener("focus",function(){if(!f.is(":visible")){i.hide();f.show()}}).addListener("cancel",function(){if(f.is(":visible")){i.show();f.hide()}})}})};this.stayInTouchStep1=function(e){var g=this,d=$j("#j-activity-page .j-act-header h1");if(d.length){var h="all-activity";d.after($j(jive.trial.quests.stayInTouch.tips({pageID:h,renderLocation:"stream_header"})));var c=$j('<style type="text/css"> a.jive-acclaim-likelink.like{ background: #e28044; color: #fff !important; font-weight: bold; -moz-border-radius: 3px; -webkit-border-radius: 3px; border-radius: 3px; padding: 2px 5px; margin: -2px;} </style>');c.appendTo("head");var f=function(){jive.localexchange.removeListener("trial.like.created",f);g.closeTip(e);c.remove();g.emit("clearActiveQuest");$j("html, body").animate({scrollTop:0},"fast");$j("body").prepend($j(jive.trial.quests.stayInTouch.tips({pageID:h,renderLocation:"banner_post_like"})));$j("body").on("click.afterTip",function(k){var i=$j(k.target);if(!i.parents(".js-trial-tip").length||i.is(".close")){$j("div.js-trial-tip").remove();$j("body").off("click.afterTip");var j=jive.app.url({path:"/get-started"});window.location=j}})};jive.localexchange.addListener("trial.like.created",f)}};this.communityFeedbackTips=function(f){var e=$j("#create-discussion"),d=$j("#js-all"),c=$j("#js-publishbar-select input[type=radio]");if(e.length){var g="create-discussion";$j("body").addClass("j-quest-active");e.append('<input type="hidden" name="markAsQuestion" value="true" />');e.append('<input type="hidden" name="fromQuest" value="'+f+'" />');d.click();if($j.browser.msie&&$j.browser.version<9){d.change()}c.attr("disabled","disabled");c.each(function(){$j(this).attr("name",$j(this).attr("name")+".disabled")});d.after('<input type="hidden" name="publishBar.visibility" value="all"/>');$j("div.jive-editor-panel").prepend($j(jive.trial.quests.communityFeedback.tips({pageID:g,renderLocation:"body"})))}};this.createSocialGroupTips=function(f,g){var e=this,h;if($j("body.j-body-yourplaces").length){h="places";$j("#jive-body").prepend($j(jive.trial.quests.teamwork.tips({pageID:h,renderLocation:"body"})));var d=jive.app.url({path:"/edit-place.jspa?containerType=700&fromQ="+f+"&qstep=0"});$j("#js-teamwork-create-group-link").attr("href",d);jive.switchboard.addListener("sgroup.member.join",function(){$j("#js-teamwork-join-tip").hide();e.uploadDocumentTips(f,1);jive.dispatcher.dispatch("trial.updatePercentComplete")})}else{if($j("#jive-link-joinSocialGroup").length){h="place";var j=false;if(!$j(".j-bigtab-nav").length){j=true}var c=$j("#jive-link-joinSocialGroup").filter(":visible");if(c){if(c.hasClass("j-ask-join")&&j){j="ask-to-join"}else{if(j){j="join"}}c.before($j(jive.trial.quests.teamwork.tips({pageID:h,renderLocation:"join-link","private":j})));jive.switchboard.addListener("sgroup.member.join",function(){$j("#js-teamwork-join-tip").hide();e.uploadDocumentTips(f,1);jive.dispatcher.dispatch("trial.updatePercentComplete")})}}else{if($j("#jive-socialgroup-desc").length){h="create-group";$j("div.j-form-advanced").hide();$j("body").addClass("j-quest-active");var i=a("#jive-socialgroup-type-OPEN");setTimeout(function(){var l=$j(jive.trial.quests.teamwork.tips({pageID:h,renderLocation:"group-type"})),k=i.offset();a("body").prepend(l);l.css({position:"fixed",top:k.top-(l.outerHeight()/2)+"px",left:k.left-l.width()-60+"px","z-index":1002});l.addClass("j-pop");l.children("div").addClass("j-pop-main");l.children("span").css("top",((l.outerHeight()/2)-(l.children("span:first").outerHeight()/2))+"px");a(".js-about-form .j-aboutClose button").one("click",function(){e.closeTip(f)})},600);$j("#jive-socialgroup-template").prepend($j(jive.trial.quests.teamwork.tips({pageID:h,renderLocation:"template"})));$j("#jive-socialgroup-name").prepend($j(jive.trial.quests.teamwork.tips({pageID:h,renderLocation:"group-name"})));$j("#jive-socialgroup-img").prepend($j(jive.trial.quests.teamwork.tips({pageID:h,renderLocation:"group-img"})));$j("input.j-btn-callout").before($j(jive.trial.quests.teamwork.tips({pageID:h,renderLocation:"submit"})))}}}};this.uploadDocumentTips=function(c,d){var f=$j("#jive-place-link-actions"),e,g;if($j("body.j-body-yourplaces").length){e="places";g=$j(jive.trial.quests.teamwork.tips({pageID:e,renderLocation:"banner"}));g.delegate("#quest-complete-close","click",function(h){h.preventDefault();$j("div.js-trial-tip").remove()});$j("body").prepend(g)}else{if(f.length&&!$j("div.js-placeEditBanner").length){this.showUploadFileTip()}else{if(f.length&&$j("div.js-placeEditBanner").length){jive.localexchange.addListener("place.activity.view",this.showUploadFileTip)}else{if(!f.length&&$j("body.j-body-place").length){e="place";g=$j(jive.trial.quests.teamwork.tips({pageID:e,renderLocation:"banner"}));g.delegate("#quest-complete-close","click",function(h){h.preventDefault();$j("div.js-trial-tip").remove()});$j("body").prepend(g)}else{if($j(".jive-create-doc").length){e="upload";$j("body").addClass("j-quest-active");$j(".jive-create-doc").prepend($j(jive.trial.quests.teamwork.tips({pageID:e,renderLocation:"choose-file"})));$j("#js-publishbar-visibility").before($j(jive.trial.quests.teamwork.tips({pageID:e,renderLocation:"choose-place"})));$j("#submitButton").before($j(jive.trial.quests.teamwork.tips({pageID:e,renderLocation:"submit"})))}}}}}};this.showUploadFileTip=function(){jive.localexchange.removeListener("place.activity.view",this.showUploadFileTip);var d="place";var c=a('#j-as-create-menu a[data-ident="nav.bar.create.file"]');c.attr("href",c.attr("href")+"&fromQ=WorkBetterAsATeamQuest&qstep=1");var e=$j(jive.trial.quests.teamwork.tips({pageID:d,renderLocation:"upload-link"}));c.after(e)};this.inviteTips=function(k,e){var c=$j("#jive-place-link-actions"),i,f;if(c.length){i="place";var g=a("#jive-place-link-actions"),h=g.offset(),j=$j(jive.trial.quests.teamwork.tips({pageID:i,renderLocation:"actions-link"}));a("#jive-body").prepend(j);j.css("top",h.top-j.height()+"px");j.css("left",h.left-j.width()-30+"px");var l=function(){j.remove();jive.localexchange.removeListener("actionsMenuToggled",l);var m=a("#jive-place-link-actions-invite");f=$j(jive.trial.quests.teamwork.tips({pageID:i,renderLocation:"invite-link"}));f.popover({context:m,position:"left",darkPopover:true,addClass:"j-q-tip wide",nudge:{top:-5,left:-20},arrowOffset:-5,onLoad:function(){$j("#jive-place-link-actions-invite").one("click",function(){$j("div.js_lb_overlay").addClass("j-quest-active");$j("#invitees").before($j(jive.trial.quests.teamwork.tips({pageID:i,renderLocation:"invite.modal.users"})));$j("#jive-invite-message-content").before($j(jive.trial.quests.teamwork.tips({pageID:i,renderLocation:"invite.modal.message"})));$j("#jive-invite-message-content").after($j(jive.trial.quests.teamwork.tips({pageID:i,renderLocation:"invite.modal.submit"})));$j("#jive-modal-invite").on("close",function(){jive.dispatcher.dispatch("trial.updatePercentComplete")})})}})};jive.localexchange.addListener("actionsMenuToggled",l)}else{if($j("div.doc-page").length){var d=this;d.emitP("shouldSetupPage",k,e-1).addCallback(function(m){var p="view-document";if(!m){d.closeTip(k);var q=$j(jive.trial.quests.teamwork.tips({pageID:p,renderLocation:"banner"}));q.delegate("#post-upload-tip-close","click",function(r){r.preventDefault();$j("div.js-trial-tip").remove()});$j("body").prepend(q)}else{p="view-document";var n=$j("#jive-link-edit a");n.attr("href",n.attr("href")+"?fromQ="+k+"&qstep="+(e-1));var o=$j(jive.trial.quests.teamwork.tips({pageID:p,renderLocation:"edit"}));$j(o).popover({context:n,position:"left",darkPopover:true,destroyOnClose:false,putBack:true,addClass:"j-qtip",closeOnClick:false})}})}}};this.closeTip=function(e,c){var d="div.js-trial-tip[data-fromq="+e+"]";if(c){d+="[data-location="+c+"]"}var f=$j(d);if(f.length){f.each(function(){var h=$j(this);var g=h.closest("div.js-pop").length;if(g.length){g.trigger("close");g.remove()}else{h.remove()}})}}})});
;
define("apps/shared/models/nested_rest_service",["apps/shared/models/rest_service"],function(a){jive.NestedRestService=a.extend(function(b,c){b.init=function(d){c.init.call(this,d);this.parentType=d.parentType;this.parentID=d.parentID;this.POST_RESOURCE_ENDPOINT=[this.RESOURCE_ENDPOINT,this.parentType,this.parentID].join("/")}});return jive.NestedRestService});
;
jive.namespace("Browse.Content");define("apps/browse/content/model/content_source",["apps/shared/models/rest_service"],function(a){jive.Browse.Content.ItemSource=a.extend(function(b){b.resourceType="content";b.pluralizedResourceType=b.resourceType;b.putOnUpdate=true});return jive.Browse.Content.ItemSource});
;
jive.namespace("Move.Content");jive.Move.Content.MoveContentItemSource=jive.Browse.Content.ItemSource.extend(function(a,b){a.suppressGenericErrorMessages();a.errorCallback=function(e,c){var d=this;return function(k,l,h){var i,g,f;try{i=JSON.parse(k.responseText)}catch(j){}g=i?i.message:null;f=(i&&i.code)?i.code:k.status;if(l!=="error"||k.status>=100){if(g){try{$j("<p>"+g+"</p>").message({style:"error"})}catch(j){if(console&&console.log){console.log(j)}}}else{a.displayError(c())}e.emitError.apply(e,[g,f])}}}});define("apps/movecontent/models/move_content_item_source",function(){return jive.Move.Content.MoveContentItemSource});
;
jive.namespace("Browse.Container");define("apps/browse/container/model/container_source",["apps/shared/models/rest_service"],function(a){jive.Browse.Container.ItemSource=a.extend(function(b){b.resourceType="container";this.getContainerProperty=function(d){var c=this.RESOURCE_ENDPOINT+"/"+d.containerType+"/"+d.containerID+"/prop/"+d.propName;return this.commonAjaxRequest(new jive.conc.Promise(),"GET",{url:c,data:{}})};this.setContainerProperty=function(d){var c=this.RESOURCE_ENDPOINT+"/"+d.containerType+"/"+d.containerID+"/prop/"+d.propName;return this.commonAjaxRequest(new jive.conc.Promise(),"POST",{url:c,data:d.propValue})};this.removeContainerProperty=function(d){var c=this.RESOURCE_ENDPOINT+"/"+d.containerType+"/"+d.containerID+"/prop/"+d.propName;return this.commonAjaxRequest(new jive.conc.Promise(),"DELETE",{url:c})};this.getSpaceChildren=function(d){var c=this.RESOURCE_ENDPOINT+"/"+d.containerID+"/children";return this.commonAjaxRequest(new jive.conc.Promise(),"GET",{url:c,data:d})};this.getBreadcrumbBean=function(d){var c=this.RESOURCE_ENDPOINT+"/"+d.containerType+"/"+d.containerID+"/breadcrumbs";return this.commonAjaxRequest(new jive.conc.Promise(),"GET",{url:c,data:{}})}});return jive.Browse.Container.ItemSource});
;
// This file was automatically generated from placepicker.soy.
// Please don't edit this file by hand.

goog.provide('jive.placepicker.browseContainers');
goog.provide('jive.placepicker.containerLink');
goog.provide('jive.placepicker.containerList');
goog.provide('jive.placepicker.containerListEntry');
goog.provide('jive.placepicker.containers');
goog.provide('jive.placepicker.moreContainers');
goog.provide('jive.placepicker.recentPlaces');
goog.provide('jive.placepicker.searchResults');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.shared.soy.i18nHelper');


jive.placepicker.containers = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<nav class="j-nav-back"><p class="font-color-meta"><strong><span class="', (opt_data.upload && opt_data.selectedContentType.uploadLink) ? soy.$$escapeHtmlAttribute(opt_data.selectedContentType.uploadLink.iconCss) : soy.$$escapeHtmlAttribute(opt_data.selectedContentType.iconCss), ' jive-icon-med"></span>', (opt_data.upload && opt_data.selectedContentType.uploadLink) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(opt_data.selectedContentType.uploadLink.headingKey),[])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(opt_data.selectedContentType.headingKey),[])), '</strong>(<a href="#" class="back">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('nav.bar.create.select_different_type'),[])), '</a>)</p></nav><div role="search"><h4 class="font-color-meta">', (opt_data.upload && opt_data.selectedContentType.uploadLink) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(opt_data.selectedContentType.uploadLink.searchPlaceholderKey),[])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(opt_data.selectedContentType.searchPlaceholderKey),[])), '</h4><label for="container-filter-id" class="j-508-label">', (opt_data.upload && opt_data.selectedContentType.uploadLink) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(opt_data.selectedContentType.uploadLink.searchPlaceholderKey),[])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(opt_data.selectedContentType.searchPlaceholderKey),[])), '</label><input type="search" name="container-filter" id="container-filter-id" class="j-form-elem-special j-container-browse-search j-ui-elem" /></div><div class="j-places-list">');
  jive.placepicker.recentPlaces(opt_data, output);
  output.append('</div><a href="#" class="j-menu-quick-bottomlink">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('nav.bar.create.browse_places'),[])), '</a>');
  return opt_sb ? '' : output.toString();
};


jive.placepicker.recentPlaces = function(opt_data, opt_sb) {
  opt_data = opt_data || {};
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.suggestCreatePersonalBlog) {
    output.append('<div class="j-places-list-personal">');
    jive.shared.soy.i18nHelper({i18nKey: 'blogs.picker.create.new.text', arg0: '<a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl('blogs-create-blog!input.jspa'))) + '">', arg1: '</a>', noAutoEscape: true}, output);
    output.append('</div>');
  } else if (opt_data.userContainerType && opt_data.userContainerID && ! opt_data.hideUserContainer) {
    output.append('<div class="j-places-list-personal">');
    jive.placepicker.containerLink({subject: opt_data.upload && opt_data.selectedContentType.uploadLink ? jive.i18n.i18nText(jive.i18n.getMsg(opt_data.selectedContentType.uploadLink.personalContainerTitleKey),[]) : jive.i18n.i18nText(jive.i18n.getMsg(opt_data.selectedContentType.personalContainerTitleKey),[]), type: opt_data.userContainerType, id: opt_data.userContainerID, contentType: opt_data.selectedContentType.id, iconCss: 'jive-icon-profile', iconSize: 'sml', caption: opt_data.upload && opt_data.selectedContentType.uploadLink ? jive.i18n.i18nText(jive.i18n.getMsg(opt_data.selectedContentType.uploadLink.personalContainerCaptionKey),[]) : jive.i18n.i18nText(jive.i18n.getMsg(opt_data.selectedContentType.personalContainerCaptionKey),[]), writableByUser: true, upload: opt_data.upload}, output);
    output.append('</div>');
  } else if (opt_data.personalBlogType && opt_data.personalBlogID) {
    output.append('<div class="j-places-list-personal">');
    jive.placepicker.containerLink({subject: opt_data.personalBlogName, type: opt_data.personalBlogType, id: opt_data.personalBlogID, contentType: opt_data.selectedContentType.id, iconCss: 'jive-icon-blog', iconSize: 'sml', caption: opt_data.upload && opt_data.selectedContentType.uploadLink ? jive.i18n.i18nText(jive.i18n.getMsg(opt_data.selectedContentType.uploadLink.personalContainerCaptionKey),[]) : jive.i18n.i18nText(jive.i18n.getMsg(opt_data.selectedContentType.personalContainerCaptionKey),[]), writableByUser: true}, output);
    output.append('</div>');
  }
  if (opt_data.containers && opt_data.containers.length > 0) {
    output.append('<h4 class="font-color-meta">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('place.picker.recent'),[])), '</h4>');
    jive.placepicker.containerList(opt_data, output);
  }
  return opt_sb ? '' : output.toString();
};


jive.placepicker.searchResults = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<h4 class="j-place-search-results font-color-meta">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('place.picker.search.results'),[])), ' <em>(<a href="#" class="j-clear-search">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('place.picker.clear.results'),[])), '</a>)</em></h4>');
  jive.placepicker.containerList(opt_data, output);
  return opt_sb ? '' : output.toString();
};


jive.placepicker.containerList = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.containerName) ? '<div class="j-container-selected-space"><a href="#" class="js-parent-container j-subspace-back-link"><span class="jive-icon-sml ui-icon-triangle-1-w"></span>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('community.list.spaces.navigate.back_to'),[])) + ' ' + soy.$$escapeHtml(opt_data.containerName) + '</a></div>' : '', '<ul class="j-icon-list wide">');
  var containerList96 = opt_data.containers;
  var containerListLen96 = containerList96.length;
  if (containerListLen96 > 0) {
    for (var containerIndex96 = 0; containerIndex96 < containerListLen96; containerIndex96++) {
      var containerData96 = containerList96[containerIndex96];
      jive.placepicker.containerListEntry({container: containerData96, contentType: opt_data.contentType, containerType: opt_data.containerType, containerID: opt_data.containerID, upload: opt_data.upload, showSubspaces: opt_data.showSubspaces}, output);
    }
  } else {
    output.append('<li>', (opt_data.emptyKey) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(opt_data.emptyKey),[])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.noresults'),[])), '</li>');
  }
  output.append('</ul>');
  return opt_sb ? '' : output.toString();
};


jive.placepicker.containerListEntry = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li ', (opt_data.container.type == opt_data.containerType && opt_data.container.id == opt_data.containerID) ? 'class="current"' : '', '>');
  jive.placepicker.containerLink(soy.$$augmentMap(opt_data.container, {contentType: opt_data.contentType, iconSize: 'sml', upload: opt_data.upload, writableByUser: opt_data.container.prop && opt_data.container.prop.perms && opt_data.container.prop.perms.allowedToContribute && opt_data.container.prop.perms.allowedToMove, props: opt_data.container.prop}), output);
  output.append((opt_data.container.type == opt_data.containerType && opt_data.container.id == opt_data.containerID) ? '<em>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('nav.bar.create.current_place'),[])) + '</em>' : '', (opt_data.showSubspaces) ? (opt_data.container.prop && opt_data.container.prop.childInfo && opt_data.container.prop.childInfo.hasChildren) ? '<a href="#" class="js-child-spaces j-subspace-view-link font-color-meta" data-objecttype="' + soy.$$escapeHtmlAttribute(opt_data.container.type) + '" data-objectid="' + soy.$$escapeHtmlAttribute(opt_data.container.id) + '"' + ((opt_data.container.prop.parentInfo) ? 'data-parent-objecttype="' + soy.$$escapeHtmlAttribute(opt_data.container.prop.parentInfo.type) + '" data-parent-objectid="' + soy.$$escapeHtmlAttribute(opt_data.container.prop.parentInfo.id) + '"' : '') + ' title="' + ((opt_data.container.prop.childInfo.numChildren == 1) ? soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.subspacecount.singular'),[1])) : soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.subspacecount.plural'),[opt_data.container.prop.childInfo.numChildren]))) + '">' + ((opt_data.container.prop.childInfo.numChildren == 1) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.subspacecount.singular'),[1])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.subspacecount.plural'),[opt_data.container.prop.childInfo.numChildren]))) + '<span class="jive-icon-sml ui-icon-triangle-1-e"></span></a>' : '' : '', '</li>');
  return opt_sb ? '' : output.toString();
};


jive.placepicker.containerLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.writableByUser) ? (opt_data.contentType == 14) ? '<a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl('/edit-place.jspa',{'parentObjectID':opt_data.id,'parentObjectType':opt_data.type,'containerType':opt_data.contentType}))) + '" data-objecttype="' + soy.$$escapeHtmlAttribute(opt_data.type) + '" data-objectid="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="js-target-container">' : '<a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl('/choose-container.jspa',{'contentType':opt_data.contentType,'containerType':opt_data.type,'container':opt_data.id,'upload':opt_data.upload ? 'true' : 'false'}))) + '" data-objecttype="' + soy.$$escapeHtmlAttribute(opt_data.type) + '" data-objectid="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" class="js-target-container">' : '', '<span   ', (opt_data.writableByUser) ? (opt_data.type == 600) ? 'title=\'' + soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('global.project'),[])) + '\'' : (opt_data.type == 700) ? 'title=\'' + soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('global.group'),[])) + '\'' : (opt_data.type == 14) ? 'title="' + soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('global.space'),[])) + '"' : '' : 'title=\'' + soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('global.access.placeunavailable'),[])) + '\'', ' class="', (opt_data.writableByUser) ? soy.$$escapeHtmlAttribute(opt_data.iconCss) + ' jive-icon-' + ((opt_data.iconSize) ? soy.$$escapeHtmlAttribute(opt_data.iconSize) : 'med') : 'jive-icon-sml jive-icon-place-unavailable', '" role="img"></span><span class="', (! opt_data.writableByUser) ? 'jive-container-unavailable-text' : '', ' js-container-title" ', (! opt_data.writableByUser) ? 'title="' + ((opt_data.type == 2020) ? soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('place.picker.usercontainer.unavailable'),[])) : soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('place.picker.unavailable'),[]))) + '"' : '', '>', soy.$$escapeHtml(opt_data.subject), '</span>', (opt_data.props && opt_data.props.isVisibleToPartner) ? '<span class="jive-icon-med jive-icon-partner" title="' + soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('partner.browse.ext_access'),[])) + '"></span>' : '', (opt_data.writableByUser) ? '</a>' : '', (opt_data.caption) ? ' <span class="j-container-caption font-color-meta">' + soy.$$escapeHtml(opt_data.caption) + '</span>' : '');
  return opt_sb ? '' : output.toString();
};


jive.placepicker.browseContainers = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-container-browse jive-modal"><header><h2>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('place.picker.choose'),[])), '</h2></header><label class="j-508-label" id="close-modal-508">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.close.modal'),[])), '</label><a href="#" class="j-modal-close-top close" aria-labelledby="close-modal-508" title="', soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('global.close.modal'),[])), '">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.close'),[])), '  <span class="j-close-icon j-ui-elem" role="img"></span></a><section class="jive-modal-content"><div><input type="search" name="container-filter" ', (opt_data.selectedContentType.searchPlaceholderKey) ? 'placeholder="' + soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg(opt_data.selectedContentType.searchPlaceholderKey),[])) + '"' : '', ' class="j-form-elem-special j-container-browse-search j-ui-elem" /></div><div class="js-place-picker-content"><div class="j-container-browse-personal">');
  if (opt_data.suggestCreatePersonalBlog) {
    jive.shared.soy.i18nHelper({i18nKey: 'blogs.picker.create.new.text', arg0: '<a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl('blogs-create-blog!input.jspa'))) + '">', arg1: '</a>', noAutoEscape: true}, output);
  } else if (opt_data.userContainer && ! opt_data.hideUserContainer) {
    if (opt_data.selectedContentType.id == 38) {
      jive.placepicker.containerLink({subject: opt_data.userContainer.subject, type: opt_data.userContainer.type, id: opt_data.userContainer.id, contentType: opt_data.selectedContentType.id, iconCss: 'jive-icon-blog', iconSize: 'sml', caption: jive.i18n.i18nText(jive.i18n.getMsg(opt_data.selectedContentType.personalContainerCaptionKey),[]), writableByUser: opt_data.userContainer.prop && opt_data.userContainer.prop.perms && opt_data.userContainer.prop.perms.allowedToContribute && opt_data.userContainer.prop.perms.allowedToMove, props: opt_data.userContainer.prop}, output);
    } else {
      jive.placepicker.containerLink({subject: jive.i18n.i18nText(jive.i18n.getMsg(opt_data.selectedContentType.personalContainerTitleKey),[]), type: opt_data.userContainer.type, id: opt_data.userContainer.id, contentType: opt_data.selectedContentType.id, iconCss: 'jive-icon-profile', iconSize: 'sml', caption: jive.i18n.i18nText(jive.i18n.getMsg(opt_data.selectedContentType.personalContainerCaptionKey),[]), writableByUser: opt_data.userContainer.prop && opt_data.userContainer.prop.perms && opt_data.userContainer.prop.perms.allowedToContribute && opt_data.userContainer.prop.perms.allowedToMove, upload: opt_data.upload, props: opt_data.userContainer.prop}, output);
    }
  }
  output.append('</div><section class="j-accordion-container">');
  var filterList301 = opt_data.filterGroupBean.filters;
  var filterListLen301 = filterList301.length;
  for (var filterIndex301 = 0; filterIndex301 < filterListLen301; filterIndex301++) {
    var filterData301 = filterList301[filterIndex301];
    output.append('<h4 class="j-accordion-toggle selected"><a href="#" class="js-accordion-link" data-placefilter="', soy.$$escapeHtmlAttribute(filterData301.id), '">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(filterData301.description),[])), '</a></h4><div class="j-places-list" style="display:none"></div>');
  }
  output.append('</section></div></section><div>');
  return opt_sb ? '' : output.toString();
};


jive.placepicker.moreContainers = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var containerList310 = opt_data.containers;
  var containerListLen310 = containerList310.length;
  for (var containerIndex310 = 0; containerIndex310 < containerListLen310; containerIndex310++) {
    var containerData310 = containerList310[containerIndex310];
    jive.placepicker.containerListEntry({container: containerData310, contentType: opt_data.contentType, containerType: opt_data.containerType, containerID: opt_data.containerID, upload: opt_data.upload, showSubspaces: opt_data.showSubspaces}, output);
  }
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from movecontent.soy.
// Please don't edit this file by hand.

goog.provide('jive.movecontent.confirm');
goog.provide('jive.movecontent.imports');
goog.provide('jive.movecontent.successMessage');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.shared.displayutil.containerDisplayNameLink');
goog.require('jive.shared.soy.i18nHelper');


jive.movecontent.imports = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  return opt_sb ? '' : output.toString();
};


jive.movecontent.successMessage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="jive-success-box" aria-live="polite" aria-atomic="true"><div><span class="jive-icon-med jive-icon-check"></span>');
  var param9 = new soy.StringBuilder();
  jive.shared.displayutil.containerDisplayNameLink({container: opt_data.prevContainer}, param9);
  var param12 = new soy.StringBuilder();
  jive.shared.displayutil.containerDisplayNameLink(opt_data, param12);
  jive.shared.soy.i18nHelper({i18nKey: 'content.mv.success', arg0: soy.$$escapeHtml(opt_data.contentTypeName), arg1: param9.toString(), arg2: param12.toString(), noAutoEscape: 'true'}, output);
  output.append('</div></div>');
  return opt_sb ? '' : output.toString();
};


jive.movecontent.confirm = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="js-move-confirm-section"><header><h2>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('content.mv.confirm.title'),[])), '</h2></header><a class="j-modal-close-top close" href="#">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.close'),[])), ' <span class="j-close-icon j-ui-elem" role="img"></span></a><section class="jive-modal-content jive-modal-content-move clearfix"><h6>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('content.mv.really_move_it.text'),[opt_data.content.objectTypeName])), '</h6><p><img src="', soy.$$escapeHtml(jive.soy.func.resourceUrl(window._jive_base_url,'/7.0.0.0/','','/images/transparent.png')), '" alt="" class="', soy.$$escapeHtml(opt_data.content.iconCss), ' jive-icon-med" /> ', soy.$$filterNoAutoescape(opt_data.content.subject), '</p><h6>');
  if (opt_data.targetPersonalContainer) {
    jive.shared.soy.i18nHelper({i18nKey: 'content.mv.into_ctr.text', arg0: '<img src="' + soy.$$escapeHtml(jive.soy.func.resourceUrl(window._jive_base_url,'/7.0.0.0/','','/images/transparent.png')) + '" alt="" class="' + soy.$$escapeHtml(opt_data.content.iconCss) + ' jive-icon-med" /> ' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(opt_data.personalContainerKey),[])), noAutoEscape: 'true'}, output);
  } else {
    output.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('content.mv.into_this_ctr.text'),[opt_data.targetContainer.objectTypeName])));
  }
  output.append('</h6>', (! opt_data.targetPersonalContainer) ? '<p><img src="' + soy.$$escapeHtml(jive.soy.func.resourceUrl(window._jive_base_url,'/7.0.0.0/','','/images/transparent.png')) + '" alt="" class="' + soy.$$escapeHtml(opt_data.targetContainer.iconCss) + ' jive-icon-med" /> ' + soy.$$filterNoAutoescape(opt_data.targetContainer.subject) + '</p>' : '', (opt_data.docWithCollaborators) ? '<p class="jive-warning"><span><span class="jive-icon-sml jive-icon-warn"></span>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('content.mv.remove_collab.text'),[])) + '</span></p>' : '', (opt_data.restrictedSocialGroup) ? '<p class="jive-warning"><span><span class="jive-icon-sml jive-icon-warn"></span>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('content.mv.restricted_group.text'),[])) + '</span></p>' : '', '<p class="j-move-notify-streams" ', (opt_data.content.archetype != 'content') ? 'style="display:none;"' : '', '><input type="checkbox" class="js-move-notify-streams" /> <strong class="j-move-notify-label js-move-notify-toggle">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('content.mv.notify_streams.text'),[])), '</strong></p><div class="j-form-row"><button class="js-move-confirm j-btn-callout">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('content.mv.confirm.button'),[])), '</button><button class="js-move-confirm-cancel">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.cancel'),[])), '</button></div></section></div>');
  return opt_sb ? '' : output.toString();
};

;
jive.namespace("Move.Content");jive.Move.Content.MoveView=jive.AbstractView.extend(function(a){var c=jQuery,b=jive.Move.Content;a.init=function(){var d=this;c(document).ready(function(){c("#jive-link-move a, a#jive-link-move").click(function(e){d.emit("browse");e.preventDefault()})})};this.confirm=function(f){var d=this;var e=c(".jive-modal");var g=jive.movecontent.confirm(f);d.prevContent=e.children();d.visibleContent=d.prevContent.filter(":visible");d.visibleContent.hide();e.append(g).removeClass("j-container-browse").trigger("resize");e.find(".js-move-notify-toggle").click(function(){var h=e.find(".js-move-notify-streams");h.attr("checked",!h.is(":checked"))});e.find(".js-move-confirm").click(function(h){d.emit("moveConfirmed",{targetContainerType:f.targetContainer.type,targetContainerID:f.targetContainer.id,notifyStreams:e.find(".js-move-notify-streams").is(":checked")});h.preventDefault()});e.find(".js-move-confirm-cancel").click(function(h){e.find(".js-move-confirm-section").remove();d.visibleContent.show();e.addClass("j-container-browse").trigger("resize");h.preventDefault()});e.find(".close").click(function(h){e.find(".js-move-confirm-section").remove();h.preventDefault()});c("body").find(".js_lb_overlay").click(function(h){e.find(".js-move-confirm-section").remove();h.preventDefault()})}});define("apps/movecontent/views/move_view",function(){return jive.Move.Content.MoveView});
;
jive.namespace("Move.Content");jive.Move.Content.CapabilitiesSource=jive.NestedRestService.extend(function(a,b){a.resourceType="capability";a.init=function(c){b.init.call(this,c);this.pluralizedResourceType="capabilities";this.RESOURCE_ENDPOINT=jive.rest.url("/"+["content",this.parentType,this.parentID,this.pluralizedResourceType].join("/"));this.POST_RESOURCE_ENDPOINT=this.RESOURCE_ENDPOINT}});define("apps/movecontent/models/move_content_source",function(){return jive.Move.Content.CapabilitiesSource});
;
jive.namespace("Move.Container");jive.Move.Container.CapabilitiesSource=jive.NestedRestService.extend(function(a,b){a.resourceType="capability";a.init=function(c){b.init.call(this,c);this.pluralizedResourceType="capabilities";this.RESOURCE_ENDPOINT=jive.rest.url("/"+["containers",this.parentType,this.parentID,this.pluralizedResourceType].join("/"));this.POST_RESOURCE_ENDPOINT=this.RESOURCE_ENDPOINT}});define("apps/movecontent/models/move_container_source",function(){return jive.Move.Container.CapabilitiesSource});
;
jive.TypeaheadInput=jive.oo.Class.extend(function(b){var c=jQuery;jive.conc.observable(this);b.init=function(g,f){var d=this;f=f||{};this.element=c(g);this.minLength=f.minLength||2;this.delay=f.delay||333;this.suppressEnterKey=f.suppressEnterKey;var h=this.processKey.bind(this);if(c.browser.mozilla){this.element.keypress(function(i){h(i)})}else{this.element.keydown(function(i){h(i)})}this.element.bind("search change",h);this.element.focus(function(){d.focused=true;d.startWatch(h)});this.element.blur(function(){d.focused=false;d.stopWatch(h)});if(!("placeholder" in c("<input>")[0])){this.placeholder=this.element.attr("placeholder");this.placeheldClass=((this.element.data("placeHeld")||{}).options||{}).className}var e=this.delay;this.getDelay=c.isFunction(e)?this.delay:function(){return e};this.isClear=a(this.minLength,this.element.val())};this.val=function(d){if(this.focused&&typeof d!="undefined"){}else{if(d===""&&this.placeholder){this.element.val(this.placeholder);this.element.addClass(this.placeheldClass)}else{return this.element.val.apply(this.element,arguments)}}};b.processKey=function(g){var f=this.element.val(),d=this;if(g&&g.which=="13"&&d.suppressEnterKey){g.preventDefault()}if(f!==this.prevValue){if(this.timeout){clearTimeout(this.timeout)}this.timeout=setTimeout(function(){d.emitChange(d.element.val())},this.getDelay(f));this.prevValue=f}};b.emitChange=function(d){if(!this.isClear&&a(this.minLength,d)){this.emit("clear");this.isClear=true}else{if(d.length>=this.minLength&&!this.placeheld()){this.emit("change",d);this.isClear=false}}};function a(d,e){return c.trim(e)===""||e.length<d}b.placeheld=function(){if(this.placeholder&&this.placeheldClass){return this.element.val()===this.placeholder&&this.element.hasClass(this.placeheldClass)}else{return false}};b.startWatch=function(e){var d=this;this.stopWatch(e);this.watchTimeout=setTimeout(function(){e();d.startWatch(e)},333)};b.stopWatch=function(){clearTimeout(this.watchTimeout)}});define("apps/shared/views/typeahead_input",function(){return jive.TypeaheadInput});
;
jive.namespace("Placepicker");jive.Placepicker.ContainerSearchView=jive.oo.Class.extend(function(a){var b=jQuery;jive.conc.observable(this);this.init=function(d,f,e){var c=this;this.target=b(f);this.prevContent=this.target.children();this.visibleContent=this.prevContent.filter(":visible");b(d).each(function(){var g=new jive.TypeaheadInput(this);g.addListener("change",function(h){c.emitP("search",h).addCallback(function(i){if(c.searchResults){c.searchResults.remove()}c.searchResults=b(jive.placepicker.searchResults(i));c.flatFind(c.searchResults,".j-clear-search").click(function(j){c.restoreContent();g.val("");j.preventDefault()});if(c.visibleContent.size()==0){c.visibleContent=c.prevContent.filter(":visible")}c.visibleContent.hide();f.append(c.searchResults);c.resizePopover()})});g.addListener("clear",c.restoreContent.bind(c))})};this.update=function(){};a.restoreContent=function(){if(this.searchResults){this.searchResults.remove()}this.visibleContent.show();this.resizePopover()};a.flatFind=function(d,c){return d.find("*").andSelf().filter(c)};a.resizePopover=function(){this.target.parents(".js-pop *").trigger("triggerPopoverReposition",[{fade:false}]);jive.localexchange.emit("containerChooserUpdated")}});define("apps/placepicker/views/container_search_view",function(){return jive.Placepicker.ContainerSearchView});
;
(function(a){a.fn.endlessScroll=function(c){var f={bottomPixels:50,fireOnce:true,fireDelay:150,loader:"<br />Loading...<br />",data:"",insertAfter:"div:last",resetCounter:function(){return false},callback:function(){return true},ceaseFire:function(){return false}};var c=a.extend(f,c);var d=true;var e=false;var b=0;if(c.ceaseFire.apply(this)===true){d=false}if(d===true){a(this).scroll(function(){var h=a(".endless_scroll_inner_wrap",this);if(h.length==0){var i=a("*:focus");a(this).wrapInner('<div class="endless_scroll_inner_wrap" />');i.focus()}if(h.length>0&&(h.height()-a(this).height()<=a(this).scrollTop()+c.bottomPixels)){if((c.fireOnce==false||(c.fireOnce==true&&e!=true))){if(c.resetCounter.apply(this)===true){b=0}e=true;b++;a(c.insertAfter).after('<div id="endless_scroll_loader">'+c.loader+"</div>");if(typeof c.data=="function"){data=c.data.apply(this)}else{data=c.data}if(data!==false){a("div#endless_scroll_loader").remove();a(c.insertAfter).after('<div id="endless_scroll_data">'+data+"</div>");a("div#endless_scroll_data").hide().fadeIn();a("div#endless_scroll_data").removeAttr("id");var g=new Array();g[0]=b;c.callback.apply(this,g);if(c.fireDelay!==false||c.fireDelay!==0){a("body").after('<div id="endless_scroll_marker"></div>');a("div#endless_scroll_marker").fadeTo(c.fireDelay,1,function(){a(this).remove();e=false})}else{e=false}}}}})}}})(jQuery);
;
jive.namespace("Placepicker");jive.Placepicker.ContainerBrowseView=jive.AbstractView.extend(function(a){var b=jQuery;a.init=function(c){this.containerStack=new Array();c=c||{};this.filterGroup=c.filterGroup||"placePicker";this.followLinks=c.followLinks||false;this.parent=c.parent||null;this.closeOnSelect=c.closeOnSelect||false;this.hideUserContainer=c.hideUserContainer||false};this.render=function(e){var f=new jive.conc.Promise(),c=this;c.rootCommunity=e.rootCommunity;c.showRootCommunity=e.showRootCommunity;c.contentType=e.contentType;c.modal=b(jive.placepicker.browseContainers(e));c.modal.delegate(".js-target-container","click",function(j){var h=b(this).data("objecttype");var i=b(this).data("objectid");var g=$j(this).find(".js-container-title").text();c.emit("container",{targetContainerType:h,targetContainerID:i,targetContainerName:g});if(c.closeOnSelect){c.modal.trigger("close")}if(!c.followLinks){j.preventDefault()}});var d=function(){c.setupSubspaceHandlers(c.modal);var g=c.serviceArgs("following");c.showSpinner();c.emitP("browseLoad",g).addCallback(function(i){var j=b(jive.placepicker.containerList(jQuery.extend({emptyKey:"browse.places.empty.message"},i)));c.addListToAccordionSection(c.modal.find(".j-places-list").first(),j,true);var h=c.modal.find(".j-accordion-container").accordion({create:function(l,m){b(this).find("h4 a.js-accordion-link").attr("tabindex","-1")},changestart:function(n,o){if(o.newContent.find("li").length==0){var m=o.newHeader.find(".js-accordion-link");var l=c.serviceArgs(m.data("placefilter"));c.setupAccordionSection(o.newHeader.next(),l,true)}}});var k=new jive.Placepicker.ContainerSearchView(c.modal.find("input[name=container-filter]"),c.modal.find(".js-place-picker-content"));c.proxyListener(k,"search")}).always(function(){c.hideSpinner()})};c.modal.lightbox_me({closeSelector:".close",destroyOnClose:true,onLoad:d,showOverlay:true,closeFocusSelector:"#js-publishbar-place-browse",parentLightbox:b(c.parent).closest(".jive-modal:visible")});return f};this.close=function(){if(this.modal){this.modal.trigger("close")}};a.setupAccordionSection=function(d,g,i){var c=this;var f=c.isSpacesSection(g.filterID);var e=c.isFollowingSection(g.filterID);if(f){g=c.setupSpaceArgs(g);d.data("containerType",g.containerType);d.data("containerID",g.containerID);if(c.isRootCommunity(g)){var h=c.rootCommunityList();return c.addListToAccordionSection(d,h,i)}}var j=null;if(e){j="browse.places.empty.message"}c.showSpinner(d);c.emitP("browseLoad",g).addCallback(function(l){c.hideSpinner(d);if(f){if(c.isRootCommunityChildren(g)&&!c.showRootCommunity){l.containerName=null}}var k=b(jive.placepicker.containerList(jQuery.extend({showSubspaces:f,emptyKey:j},l)));return c.addListToAccordionSection(d,k,i)})};a.addScroller=function(d){var c=this;d.endlessScroll({fireDelay:false,callback:function(){var i=b(this).find("li").size();if(i%20==0){var g=b(this).prev().find("a");var f=g.data("placefilter");var h=c.serviceArgs(f,i);var e=b(this).data("containerID");var j=b(this).data("containerType");if(e>-1){h=b.extend({containerType:j,containerID:e},h)}c.emitP("browseLoad",h).addCallback(function(l){var k=b(jive.placepicker.moreContainers(b.extend({showSubspaces:c.isSpacesSection(f)},l)));d.find("ul").append(k)})}}})};a.setupSubspaceHandlers=function(d){var c=this;c.containerStack.push({containerType:c.rootCommunity.type,containerID:-1});d.delegate(".js-child-spaces","click",function(h){var g=b(this).closest(".j-places-list").prev(".j-accordion-toggle").find(".js-accordion-link");var e=g.data("placefilter");var f=b.extend({containerType:b(this).data("objecttype"),containerID:b(this).data("objectid")},c.serviceArgs(e));c.containerStack.push({containerType:b(this).data("parent-objecttype"),containerID:b(this).data("parent-objectid")});c.setupAccordionSection(b(this).closest(".j-places-list"),f,false);h.preventDefault()});d.delegate(".js-parent-container","click",function(h){var g=b(this).closest(".j-places-list").prev(".j-accordion-toggle").find(".js-accordion-link");var e=g.data("placefilter");var j=c.containerStack.pop();if(c.isRootCommunity(j)){var i=c.rootCommunityList();c.addListToAccordionSection(b(this).closest(".j-places-list"),i,false)}else{var f=b.extend({containerType:j.containerType,containerID:j.containerID},c.serviceArgs(e));c.setupAccordionSection(b(this).closest(".j-places-list"),f,false)}h.preventDefault()})};a.flatFind=function(d,c){return d.find("*").andSelf().filter(c)};a.isSpacesSection=function(c){return c=="space"};a.isFollowingSection=function(c){return c=="following"};a.isRootCommunityChildren=function(d){var c=this;return d.containerType==c.rootCommunity.type&&d.containerID==c.rootCommunity.id};a.isRootCommunity=function(d){var c=this;return d.containerType==c.rootCommunity.type&&d.containerID==-1};a.setupSpaceArgs=function(d){var c=this;if(!d.containerType&&!d.containerID){if(c.showRootCommunity){d.containerType=c.rootCommunity.type;d.containerID=-1}else{d.containerType=c.rootCommunity.type;d.containerID=c.rootCommunity.id}}return d};a.addListToAccordionSection=function(d,e,f){var c=this;d.html(e);d.show();if(f){c.addScroller(d)}jive.localexchange.emit("containerChooserUpdated")};a.serviceArgs=function(d,f){var c=this;var e=c.isSpacesSection(d)?"spaceOrder":"subject";return{filterGroupID:c.filterGroup,filterID:d,start:f?f:0,sortKey:e,numResults:20}};a.rootCommunityList=function(){var c=this;return b(jive.placepicker.containerList({showSubspaces:true,containers:[c.rootCommunity],contentType:c.contentType,containerType:-1,containerID:-1}))};a.createSpinner=function(c){this.$spinner=b(jive.shared.soy.loading());if(c){c.append(this.$spinner)}};a.destroySpinner=function(c){if(this.$spinner){this.$spinner.remove()}}});define("apps/placepicker/views/container_browse_view",function(){return jive.Placepicker.ContainerBrowseView});
;
jive.namespace("Placepicker");define("apps/placepicker/models/browse_containers_source",["apps/shared/models/rest_service"],function(a){jive.Placepicker.BrowseContainersSource=a.extend(function(b,c){b.resourceType="container";b.init=function(d){c.init.call(this,d);this.RESOURCE_ENDPOINT=jive.rest.url("/containers")}});return jive.Placepicker.BrowseContainersSource});
;
jive.namespace("Placepicker");define("apps/placepicker/models/search_containers_source",["apps/shared/models/rest_service"],function(a){jive.Placepicker.SearchContainersSource=a.extend(function(b,c){b.resourceType="container";b.init=function(d){c.init.call(this,d);this.RESOURCE_ENDPOINT=jive.rest.url("/containers/search")}});return jive.Placepicker.SearchContainersSource});
;
jive.namespace("Placepicker");define("apps/placepicker/models/place_picker_source",["apps/shared/models/rest_service"],function(a){jive.Placepicker.PlacePickerSource=a.extend(function(b,c){b.resourceType="placepicker";b.init=function(e,d){d=d||{};c.init.call(this,d);$j.extend(this.defaultParams,{containerType:d.containerType,containerID:d.containerID});this.RESOURCE_ENDPOINT=jive.rest.url("/placepicker/"+e)}});return jive.Placepicker.PlacePickerSource});
;
jive.namespace("Placepicker");jive.Placepicker.Main=jive.oo.Class.extend(function(a){jive.conc.observable(this);a.init=function(c){var b=this;this.pickerContext=c.pickerContext||"create";this.objectType=c.objectType;this.objectID=c.objectID||-1;this.upload=c.upload;this.personalContainerTitleKey=c.personalContainerTitleKey;this.personalContainerCaptionKey=c.personalContainerCaptionKey;this.searchPlaceholderKey=c.searchPlaceholderKey;this.containerType=c.containerType;this.containerID=c.containerID;this.filterGroup=c.filterGroup;this.followLinks=c.followLinks||false;this.parent=c.parent||null;this.closeOnSelect=c.closeOnSelect||false;this.filterByContainer=c.filterByContainer||false;this.hideUserContainer=c.hideUserContainer||false;this.fromQuest=c.fromQuest;this.containers=new jive.Placepicker.SearchContainersSource();this.browseContainers=new jive.Placepicker.BrowseContainersSource();this.placePicker=new jive.Placepicker.PlacePickerSource(this.pickerContext,{containerType:this.containerType,containerID:this.containerID});this.containerBrowseView=new jive.Placepicker.ContainerBrowseView({filterGroup:this.filterGroup,parent:this.parent,followLinks:this.followLinks,closeOnSelect:this.closeOnSelect,hideUserContainer:this.hideUserContainer});this.containerBrowseView.addListener("browseLoad",function(d,f){var e=jQuery.extend({contentType:b.objectType,contentID:b.objectID},d);if(b.filterByContainer){e=jQuery.extend({},{containerType:b.containerType,containerID:b.containerID},e)}b.browseContainers.findAll(e).addCallback(function(g){f.emitSuccess({contentType:b.objectType,containerType:b.containerType,containerID:b.containerID,upload:b.upload,containers:g.items,containerName:g.containerName,parentName:g.parentName})})});this.containerBrowseView.addListener("search",function(d,e){b.containers.findAll({query:d,contentType:b.objectType,contentID:b.objectID}).addCallback(function(f){e.emitSuccess(jQuery.extend({contentType:b.objectType,containerType:b.containerType,containerID:b.containerID,upload:b.upload},f))})});this.containerBrowseView.addListener("container",function(d){b.emit("container",d)})};this.showPicker=function(){var b=this;b.placePicker.findAll({contentType:b.objectType,contentID:b.objectID}).addCallback(function(c){b.containerBrowseView.render(jQuery.extend({contentID:b.contentID,contentType:b.objectType,containerType:b.containerType,containerID:b.containerID,hideUserContainer:b.hideUserContainer,selectedContentType:{id:b.objectType,personalContainerTitleKey:b.personalContainerTitleKey,personalContainerCaptionKey:b.personalContainerCaptionKey,searchPlaceholderKey:b.searchPlaceholderKey}},c))})}});define("apps/placepicker/main",function(){return jive.Placepicker.Main});
;
jive.namespace("Move.Content");jive.Move.Content.Main=jive.oo.Class.extend(function(a){a.init=function(c){var b=this;this.objectType=c.objectType;this.objectID=c.objectID;this.containerType=c.containerType;this.containerID=c.containerID;this.isContainer=c.isContainer||false;this.contentCapabilitiesSource=new jive.Move.Content.CapabilitiesSource({parentID:this.objectID,parentType:this.objectType});this.containerCapabilitiesSource=new jive.Move.Container.CapabilitiesSource({parentID:this.objectID,parentType:this.objectType});this.contentSource=new jive.Move.Content.MoveContentItemSource();this.containerSource=new jive.Browse.Container.ItemSource();this.moveView=new jive.Move.Content.MoveView();this.placePicker=new jive.Placepicker.Main($j.extend({pickerContext:"move"},c));this.moveView.addListener("browse",function(d){b.placePicker.showPicker()});this.moveView.addListener("moveConfirmed",function(d){if(b.isContainer){b.handleConfirmation(b.containerSource,d)}else{b.handleConfirmation(b.contentSource,d)}});this.placePicker.addListener("container",function(d,e){if(b.isContainer){b.handleContainerSelected(b.containerCapabilitiesSource,d)}else{b.handleContainerSelected(b.contentCapabilitiesSource,d)}})};a.handleConfirmation=function(d,c){var b=this;d.save({id:b.objectType+"/"+b.objectID,objectType:c.targetContainerType,objectID:c.targetContainerID,notifyStreams:!!c.notifyStreams}).addCallback(function(e){window.location=jive.app.url({path:e.link+"?prevContainerType="+b.containerType+"&prevContainerID="+b.containerID})})};a.handleContainerSelected=function(d,c){var b=this;d.findAll({containerType:c.targetContainerType,containerID:c.targetContainerID}).addCallback(function(e){b.moveView.confirm(e)})}});define("apps/movecontent/main",function(){return jive.Move.Content.Main});
;
jive.namespace("ThreadToDoc");jive.ThreadToDoc.ThreadToDocView=jive.AbstractView.extend(function(a){var c=jQuery,b=jive.Move.Content;a.init=function(){var d=this;c(document).ready(function(){c("#jive-link-wiki a").click(function(e){d.emit("browse");e.preventDefault()})})};this.maxMessagesExceeded=function(e){var d=this;if(confirm(jive.threadtodoc.maxMessagesExceeded())){d.emit("confirm",e)}}});define("apps/threadtodoc/views/threadtodoc_view",function(){return jive.ThreadToDoc.ThreadToDocView});
;
jive.namespace("ThreadToDoc");define("apps/threadtodoc/models/threadtodoc_source",["apps/shared/models/rest_service"],function(a){jive.ThreadToDoc.ThreadToDocSource=a.extend(function(b){b.resourceType="threadconversion"});return jive.ThreadToDoc.ThreadToDocSource});
;
jive.namespace("ThreadToDoc");jive.ThreadToDoc.Main=jive.oo.Class.extend(function(a){a.init=function(c){var b=this;this.objectType=c.objectType;this.objectID=c.objectID;this.personalContainerTitleKey=c.personalContainerTitleKey;this.personalContainerCaptionKey=c.personalContainerCaptionKey;this.searchPlaceholderKey=c.searchPlaceholderKey;this.containerType=c.containerType;this.containerID=c.containerID;this.maxMessages=c.maxMessages;this.threadMessageCount=c.threadMessageCount;this.threadToDocView=new jive.ThreadToDoc.ThreadToDocView();this.threadToDocView.addListener("browse",function(e){if(b.threadMessageCount>b.maxMessages){b.threadToDocView.maxMessagesExceeded(e)}else{var d=new jive.ThreadToDoc.ThreadToDocSource();d.save({threadID:b.objectID,containerType:b.containerType,containerID:b.containerID}).addCallback(function(f){window.location=f})}})}});define("apps/threadtodoc/main",function(){return jive.ThreadToDoc.Main});
;
// This file was automatically generated from threadtodoc.soy.
// Please don't edit this file by hand.

goog.provide('jive.threadtodoc.imports');
goog.provide('jive.threadtodoc.maxMessagesExceeded');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');


jive.threadtodoc.imports = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  return opt_sb ? '' : output.toString();
};


jive.threadtodoc.maxMessagesExceeded = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('forum.thrd.confirm_convert.text'),[])));
  return opt_sb ? '' : output.toString();
};

;
jive.namespace("Modalizer");jive.Modalizer.ModalView=jive.AbstractView.extend(function(a){var c=jQuery,b=jive.Modalizer;a.init=function(h){var e=this,f,g={};if(h.width&&h.width.match(/^(narrow|medium|wide)$/i)){f="jive-modal-"+h.width}else{if(h.width){g.width=h.width}else{f="jive-modal-medium"}}this.width=f;this.styles=g;this.opts=h;var d=function(j){var i=c(this).attr("href")||c(this).find("a:first").attr("href");if(i){e.modalize(i)}else{alert("No valid URL found to modalize")}j.preventDefault()};c(document).ready(function(){if(h.triggers){c.each(h.triggers,function(){c(""+this).click(d)})}if(h.liveTriggers){c.each(h.liveTriggers,function(){c(""+this).live("click",d)})}})};this.modalize=function(f,e){var d=this,g=this.width,i=this.styles,h=this.opts;d.emitP("launch",f).addCallback(function(o){var n=c("<div/>",{"class":"jive-modal j-modal"+(g?" "+g:""),id:"js-modalized"}).css(i);var m=d.separateScripts(o);var l=d.shiv(m[0]);var j=m[1];var k=!c.browser.msie||parseInt(c.browser.version,10)>8;k&&n.html(l);n.lightbox_me({destroyOnClose:true,closeFocusSelector:e?e:(h.triggers?h.triggers.join(", "):h.liveTriggers.join(", ")),onClose:h.onClose,onLoad:function(){if(!k){n.html(l);j()}}});if(k){j()}})}});define("apps/modalizer/views/modal_view",function(){return jive.Modalizer.ModalView});
;
jive.namespace("Modalizer");jive.Modalizer.ModalSource=jive.oo.Class.extend(function(a){this.getConfirmation=function(b,c){$j.ajax({url:b,type:"GET",dataType:"html",success:function(d){c(d)},error:function(){alert("failed..")}})}});define("apps/modalizer/models/modal_source",function(){return jive.Modalizer.ModalSource});
;
jive.namespace("Modalizer");jive.Modalizer.Main=jive.oo.Class.extend(function(a){a.init=function(c){var b=this;this.modalView=new jive.Modalizer.ModalView(c);this.modalSource=jive.Modalizer.ModalSource();this.modalView.addListener("launch",function(d,e){b.modalSource.getConfirmation(d,function(f){e.emitSuccess(f)})})};this.modalize=function(c,b){this.modalView.modalize(c,b)}});define("apps/modalizer/main",function(){return jive.Modalizer.Main});
;
// This file was automatically generated from modalizer.soy.
// Please don't edit this file by hand.

goog.provide('jive.modalizer.foo');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');


jive.modalizer.foo = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  return opt_sb ? '' : output.toString();
};

;

// Provide a default path to dwr.engine
if (dwr == null) var dwr = {};
if (dwr.engine == null) dwr.engine = {};
if (DWREngine == null) var DWREngine = dwr.engine;

if (ToggleFeatured == null) var ToggleFeatured = {};
ToggleFeatured._path = '/dwr';
ToggleFeatured.toggleFeatured = function(p0, p1, p2, p3, callback) {
  dwr.engine._execute(ToggleFeatured._path, 'ToggleFeatured', 'toggleFeatured', p0, p1, p2, p3, callback);
}
ToggleFeatured.toggleFeaturedOnProfile = function(p0, p1, callback) {
  dwr.engine._execute(ToggleFeatured._path, 'ToggleFeatured', 'toggleFeaturedOnProfile', p0, p1, callback);
}

;
jive.action=(function(){var a=_jive_base_url+"/";return{url:function(b,c){var d="";Object.keys(c).forEach(function(e){d+=e+"="+c[e]+"&"});if(d.length>0){d="?"+d.slice(0,d.length-1)}return a+b+".jspa"+d}}})();
;
define("apps/shared/models/rest_service",["jquery"],function(a){window.jive.RestService=jive.oo.Class.extend(function(b){b.resourceType="abstract";b.displayGenericErrorMessages=true;b.putOnUpdate=false;b.init=function(d){var c=this;this.pluralizedResourceType=this.pluralizedResourceType||this.resourceType+"s";var e=jive.rest.url("/"+this.pluralizedResourceType);this.RESOURCE_ENDPOINT=(d&&d.forceSecure)?jive.secure(e):e;this.POST_RESOURCE_ENDPOINT=this.RESOURCE_ENDPOINT;this.defaultParams={}};this.suppressGenericErrorMessages=function(){this.displayGenericErrorMessages=false};b.commonAjaxRequest=function(j,e,d,h){var g=this,i,c,f;e=e.toUpperCase();if(e=="POST"){f={contentType:"application/json; charset=utf-8"};c=this.errorSaving}else{if(e=="GET"){c=this.errorFinding}else{if(e=="PUT"){f={contentType:"application/json; charset=utf-8"};c=this.errorUpdating}else{if(e=="DELETE"){c=this.errorDestroying}}}}a.ajax(a.extend({type:e,dataType:"json",success:i||function(k,m,l){g.normalizeID(k);j.emitSuccess(k)},error:this.errorCallback(j,c),timeout:120000},f||{},d));return j};this.save=function(d){this.normalizeID(d);var c=this.saveUrl(d);var e=this.saveMethod(d);return this.commonAjaxRequest(new jive.conc.Promise(),e,{url:c,data:JSON.stringify(this.withoutId(d))},d)};this.get=function(f,e){var c=this.RESOURCE_ENDPOINT+"/"+f,d=jQuery.extend({},this.defaultParams,e||{});return this.commonAjaxRequest(new jive.conc.Promise(),"GET",{url:c,data:d})};this.findAll=function(e){var c=this.RESOURCE_ENDPOINT,d=a.extend({},this.defaultParams,e);return this.commonAjaxRequest(new jive.conc.Promise(),"GET",{url:c,data:d})};this.destroy=function(e){var d=new jive.conc.Promise(),c=this;if(e.hasOwnProperty("id")){e=e.id}a.ajax({type:"DELETE",url:this.RESOURCE_ENDPOINT+"/"+e,success:function(){d.emitSuccess()},error:function(f){c.maybeEmitError(d,c.errorDestroying,[null,f&&f.status])},timeout:30000});return d};b.normalizeID=function(c){var d=c?(c.id||c[this.resourceType+"ID"]):null;if(c&&d){c.id=d}};b.unwrapResponse=function(c){if(Object.keys(c).length===1){return c[Object.keys(c)[0]]}else{return c}};b.errorCallback=function(e,c){var d=this;return function(k,l,h){var i,g,f;try{i=JSON.parse(k.responseText)}catch(j){}g=i?i.message||i.error||null:null;f=(i&&i.code)?i.code:k.status;if(l!=="error"||k.status>=100){d.maybeEmitError(e,c,[g,f])}}};b.maybeEmitError=function(e,c,d){if(this.displayGenericErrorMessages){this.displayError(c())}e.emitError.apply(e,d)};b.displayError=function(c){a(c).message({style:"error"})};b.errorSaving=function(){return jive.error.rest.soy.errorSaving({href:window.location})};b.errorFinding=function(){return jive.error.rest.soy.errorFinding({href:window.location})};b.errorUpdating=function(){return jive.error.rest.soy.errorUpdating({href:window.location})};b.errorDestroying=function(){return jive.error.rest.soy.errorDestroying({href:window.location})};b.withoutId=function(c){var d={};Object.keys(c).forEach(function(e){if(e!="id"){d[e]=c[e]}});return d};b.saveUrl=function(c){if(c.id){return this.RESOURCE_ENDPOINT+"/"+c.id}else{return this.POST_RESOURCE_ENDPOINT}};b.saveMethod=function(c){if(c.id&&this.putOnUpdate){return"PUT"}else{return"POST"}}});return window.jive.RestService});
;
define("apps/shared/models/nested_rest_service",["apps/shared/models/rest_service"],function(a){jive.NestedRestService=a.extend(function(b,c){b.init=function(d){c.init.call(this,d);this.parentType=d.parentType;this.parentID=d.parentID;this.POST_RESOURCE_ENDPOINT=[this.RESOURCE_ENDPOINT,this.parentType,this.parentID].join("/")}});return jive.NestedRestService});
;
jive.namespace("CommentApp");jive.CommentApp.Comment=$Class.extend({init:function(b){var a=this;Object.keys(b).forEach(function(c){if(c!="outcome"){a[c]=b[c]}})}});define("apps/comment_app/models/comment",function(){return jive.CommentApp.Comment});
;
// This file was automatically generated from messages.soy.
// Please don't edit this file by hand.

goog.provide('jive.DiscussionApp.soy.renderReply');
goog.provide('jive.DiscussionApp.soy.replyErrorMessage');
goog.provide('jive.DiscussionApp.soy.rteMsgQuote');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.CommentApp.soy.outcomeAttachmentMenu');
goog.require('jive.i18n.soy');
goog.require('jive.resource.url');


jive.DiscussionApp.soy.renderReply = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="addReply jive-js-addReply" style="display:none"><div msgID="', soy.$$escapeHtml(opt_data.messageID), '" class="jive-thread-reply-indent0 jive-reply-add-inline"><div class="jive-thread-reply-indent-shadow"><div class="jive-thread-reply jive-thread-reply-self clearfix"><div class="jive-thread-reply-inline">', (opt_data.moderated) ? '<div id="jive-moderation-box" class="jive-content-moderation-box"><span class="jive-icon-med jive-icon-warn"></span>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('mod.content.create'),[])) + '</div>' : '', '<strong class="font-color-meta">', soy.$$escapeHtml(opt_data.i18n.forumThrdReplyTo), ' <span class="replyToName">', soy.$$escapeHtml(opt_data.userName), '</span> <img src="');
  jive.resource.url({path: '/images/inline-reply-arrow.png'}, output);
  output.append('"></strong>', (opt_data.externallyVisible == 'true') ? '' : '', (opt_data.anonymous) ? '<div class="jive-comment-post-anonymous"><div><input id="reply-author" name="replyGuestName" type="text" required aria-required="true"><label for="reply-author">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.name'),[])) + '<span class="font-color-meta-light">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('blogs.vwpst.required.label'),[])) + '</span></label></div><div><input id="comment-email" name="replyGuestEmail" type="email" required aria-required="true"><label for="comment-email">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.email_address'),[])) + '<span class="font-color-meta-light">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('blogs.vwpst.rqdNotPblshd.label'),[])) + '</span></label></div></div>' : '', '<a class="font-color-meta advEditor" href="javascript:void(0);">', soy.$$escapeHtml(opt_data.i18n.advEditor), '</a>');
  jive.CommentApp.soy.outcomeAttachmentMenu(null, output);
  output.append('<p class="jive-discussion-post"></p></div></div></div></div></li>');
  return opt_sb ? '' : output.toString();
};


jive.DiscussionApp.soy.replyErrorMessage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(opt_data.key),[])));
  return opt_sb ? '' : output.toString();
};


jive.DiscussionApp.soy.rteMsgQuote = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="jive-rendered-content"><blockquote class="jive-quote"><span class="jive-quote-header">');
  if (opt_data.isAnonymous) {
    output.append(soy.$$escapeHtml(opt_data.i18n.postGuestWroteLabel));
  } else {
    jive.i18n.soy({string: opt_data.i18n.postUserWroteLabel, zero: soy.$$escapeHtml(opt_data.userName)}, output);
  }
  output.append(':</span><br/><br/>', soy.$$filterNoAutoescape(opt_data.msgBody), '</blockquote></div>');
  return opt_sb ? '' : output.toString();
};

;
jive.namespace("SharedViews");define("apps/shared/views/rte_view",function(){jive.SharedViews.RteView=$Class.extend({init:function(a,b){this._preferredMode=window.preferredMode||b.preferredMode||"advanced";this._container=$j(a);this._formActionContainer=(b.formActionContainer)?$j(b.formActionContainer):this._container;this._rteDisabledBrowser=b.rteDisabledBrowser;this._resourceID=b.resourceID;this._resourceType=b.resourceType;this._isAnonymous=b.isAnonymous;this._templateName=b.templateName||"rte-template";this._bodyContent=b.bodyContent;this._settingsID=b.settingsID||"mini";this._i18n=b.i18n;this.images_enabled=b.imagesEnabled;var c=this;$j(document).ready(function(){c._render();if(!c._rteDisabledBrowser){c._createRTE()}c._addListeners()})},remove:function(){if(!this._rteDisabledBrowser){if(this._rte){this._rte.destroy()}window.editor.clear("wysiwygtext");jive.rte.multiRTE=jive.rte.multiRTE.filter(function(a){return a!="wysiwygtext"})}this._container.find("form").remove();$j(window).unbind("unload",this._unloadCallback);this.emit("remove")},val:function(a){if(a){this._rte.setHTML(a);return this}else{return this._getContentBody()}},setPreviewButtonText:function(a){this._container.find("[name=preview]").val(a)},focus:function(){this._rte.tinymceFocus()},_initEditor:function(){this._currentMode="advanced";var a=this;var b=new jive.rte.RTEListener();b.doneTogglingMode=function(){if(a._currentMode=="advanced"){a._currentMode="rawhtml"}else{a._currentMode="advanced"}a._refreshLinks();a.emit("toggle",a._currentMode)};this._rte.addListener(b);if(this._preferredMode=="rawhtml"){this._rte.toggleEditorMode("wysiwygtext")}else{if(tinymce.isIE){this._rte.toggleEditorMode();this._rte.toggleEditorMode()}}},_initRTE:function(){var a=this;if(this._rte.isTextOnly()){$j("#wysiwyg-panel").removeClass("loading");this._preferredMode="rawhtml";this._currentMode="rawhtml";return}this._initEditor();this._refreshLinks();setTimeout(function(){a.focus()},0);this.emit("ready")},_createRTE:function(){var b=this;var a={images_enabled:this.images_enabled||false};this._rte=new jive.rte.RTE(jiveControl,"wysiwygtext",this._settingsID,a);window.editor.put("wysiwygtext",this._rte);jive.rte.multiRTE.push("wysiwygtext");var c=new jive.rte.RTEListener();c.initFinished=function(d){b._initRTE()};this._rte.addListener(c)},_getContentBody:function(){if(!this._rteDisabledBrowser){return this._rte.getHTML()}else{return this._container.find("textarea:visible").val()}},_getValues:function(){return{body:this._getContentBody()}},_postHandler:function(){this.emit("post",this._getValues());return false},_addListeners:function(){var a=this;this._formActionContainer.find("[name=post]").click(function(){return a._postHandler()}).end().find("[name=preview]").click(function(){a.emit("preview",a._getValues());return false}).end().find("[name=cancel]").click(function(){a.emit("cancel",a._getValues());a._unload();return false});this._container.find(".toggle_preferred_mode").click(function(){var b=a._currentMode;WikiTextConverter.setPreferredEditorMode(b,{callback:function(){a._preferredMode=b;window.preferredMode=b;a._refreshLinks()},timeout:DWRTimeout});return false}).end().find(".toggle_html").click(function(){a._rte.toggleEditorMode("wysiwygtext");return false});this._unloadCallback=this._unload.bind(this);$j(window).bind("unload",this._unloadCallback)},_unload:(function(){}),_template:(function(){var b={};return function a(f,e){var c=/^[\w\-]+$/.test(f)?b[f]=b[f]||a(document.getElementById(f).innerHTML):new Function("obj","var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('"+f.replace(/[\r\t\n]/g," ").replace(/(^|%>)(.+?)(<%|$)/,function(g,h,i,j){return h+d(i)+j}).split("<%").join("\t").replace(/((^|%>)[^\t]*)'/g,"$1\r").replace(/\t=(.*?)%>/g,"',$1,'").split("\t").join("');").split("%>").join("p.push('").split("\r").join("\\'")+"');}return p.join('');");return e?c(e):c;function d(g){return g.replace("'","&apos;").replace("\\","\\\\")}}})(),_render:function(){this._container.append(this._template(this._templateName,{body:this._bodyContent}))},_refreshLinks:function(){this._container.find(".toggle_html").toggle(this._currentMode=="rawhtml");this._container.find(".toggle_preferred_mode").toggle(this._preferredMode!=this._currentMode)}});jive.SharedViews.RteView.setMiniRTEQuotedMsg=function(c,b,d,a){window._jive_gui_quote_text=jive.DiscussionApp.soy.rteMsgQuote({i18n:b,userName:c,isAnonymous:d,msgBody:a})};jive.conc.observable(jive.SharedViews.RteView.prototype);return jive.SharedViews.RteView});
;
// This file was automatically generated from form_waiting_view.soy.
// Please don't edit this file by hand.

goog.provide('jive.shared.formwaiting.formWaitingOverlay');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');


jive.shared.formwaiting.formWaitingOverlay = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="jive-js-form-disable jive-form-waiting-disable"><div class="', soy.$$escapeHtml(opt_data.bgCssClass), '"></div></div>');
  return opt_sb ? '' : output.toString();
};

;
jive.namespace("shared");jive.shared.FormWaitingView=$Class.extend({init:function(a,b){this._$container=$j(a);b=b||{};if(b.containerPadding){this._containerPadding=b.containerPadding}else{this._containerPadding=this._$container.css("padding-left")==null?0:Number(this._$container.css("padding-left").replace("px",""))}this._buttonSelector=b.buttonSelector||"input[type=button], input[type=submit]";this._bgCssClass=b.bgCssClass||"jive-form-waiting-disable-bg"},disableForm:function(){var e=new jive.loader.LoaderView({size:"big"});if(this._$container.find(".jive-js-form-disable").length==0){var c={width:this._$container.innerWidth(),height:this._$container.innerHeight(),left:0,top:0};var d=$j(jive.shared.formwaiting.formWaitingOverlay({bgCssClass:this._bgCssClass}));for(var b in c){d.css(b,c[b]+"px")}d.prependTo(this._$container);var a=e.getContent();e.appendTo(d);a.css("left",(c.width/2-a.width()/2)+"px");a.css("top",(c.height/2-a.height()/2)+"px");this._$container.find(this._buttonSelector).prop("disabled",true)}},enableForm:function(){this._$container.find(".jive-js-form-disable").remove();this._$container.find(this._buttonSelector).prop("disabled",false)}});define("apps/shared/views/form_waiting_view",function(){return jive.shared.FormWaitingView});
;
// This file was automatically generated from comments.soy.
// Please don't edit this file by hand.

goog.provide('jive.CommentApp.soy.outcomeAttachment');
goog.provide('jive.CommentApp.soy.outcomeAttachmentMenu');
goog.provide('jive.CommentApp.soy.renderReply');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.outcomes.badge.badgeRaw');
goog.require('jive.resource.url');
goog.require('jive.shared.displayutil.avatar');
goog.require('jive.shared.soy.i18nHelper');


jive.CommentApp.soy.renderReply = function(opt_data, opt_sb) {
  opt_data = opt_data || {};
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="addReply jive-js-addReply" style="display:none;', (opt_data.indent) ? ' margin-left:' + soy.$$escapeHtml(opt_data.indent) : '', '">');
  jive.shared.displayutil.avatar({anonymous: _jive_current_user.anonymous, enabled: _jive_current_user.enabled, partner: _jive_current_user.partner, username: _jive_current_user.username, id: _jive_current_user.id, ID: _jive_current_user.ID, displayName: _jive_current_user.displayName, visible: true, prop: _jive_current_user.prop, avatarID: _jive_current_user.avatarID, currentUserPartner: _jive_current_user.partner, size: 32}, output);
  output.append('<div class="jive-comment-arrow"></div><div class="jive-comment-content jive-create-comment"><p class="jive-comment-meta font-color-meta-light"><strong style="" class="font-color-meta replyTo">');
  jive.shared.soy.i18nHelper({i18nKey: 'cmnt.reply_to.gtitle', arg0: '<span class="replyToName">' + soy.$$escapeHtml(opt_data.username) + '</span>', noAutoEscape: true}, output);
  output.append('<img src="');
  jive.resource.url({path: '/images/inline-reply-arrow.png'}, output);
  output.append('"/></strong></p>');
  if (opt_data.commentMode == 'comments') {
    jive.CommentApp.soy.outcomeAttachmentMenu(null, output);
  }
  output.append((opt_data.externallyVisible == 'true') ? '' : '', '<div ', (opt_data.commentID) ? 'id="comment-body-' + soy.$$escapeHtml(opt_data.commentID) + '"' : '', ' class="jive-comment-body"><div class="jive-rendered-content"><p><div ', (opt_data.commentID) ? 'id="jive-content-post-' + soy.$$escapeHtml(opt_data.commentID) + '"' : '', ' class="jive-comment-post"></div></p></div></div></div></li>');
  return opt_sb ? '' : output.toString();
};


jive.CommentApp.soy.outcomeAttachmentMenu = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-reply-outcome-action-container js-reply-outcome-action-container" style="display: none;"><a href="#" class="font-color-meta js-reply-outcome-button">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('outcomes.reply.actionButton.label'),[])), ' <span class="j-ui-elem j-action-down-arrow"></span></a><div class="js-reply-outcome-badge-container" styles="display: none;"></div></div>');
  return opt_sb ? '' : output.toString();
};


jive.CommentApp.soy.outcomeAttachment = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('cmnt.outcome.attached'),[])), ' ');
  jive.outcomes.badge.badgeRaw({tagName: 'span', outcomeType: String(opt_data.outcomeType.name).toLowerCase(), embedded: true}, output);
  output.append('<a href="#" class="j-remove-outcome js-remove-outcome" title="', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.remove'),[])), '"><span class="jive-icon-sml jive-glyph-remove"></span><span class="j-508-label"></span></a></span>');
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from draft.soy.
// Please don't edit this file by hand.

goog.provide('jive.content.draft');
goog.provide('jive.content.draftDeleteButtonLabel');
goog.provide('jive.content.draftRecoverButtonLabel');
goog.provide('jive.content.draftlastsaved');
goog.provide('jive.content.drafts');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.shared.soy.i18nHelper');


jive.content.drafts = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="autosave-prompt" class="jive-warn-box" role="alert" aria-live="polite" aria-atomic="true" tabindex="0"><p><span class="jive-icon-med jive-icon-warn"></span>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('draft.exists.info'),[])), '</p>');
  var draftList6 = opt_data.drafts;
  var draftListLen6 = draftList6.length;
  for (var draftIndex6 = 0; draftIndex6 < draftListLen6; draftIndex6++) {
    var draftData6 = draftList6[draftIndex6];
    jive.content.draft(draftData6, output);
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


jive.content.draftlastsaved = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="last-saved">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('draft.saved.last'),[(opt_data.date ? _jive_moment((parseFloat(opt_data.date) ? parseFloat(opt_data.date) : opt_data.date)).lang(_jive_locale.toLowerCase().replace('_','-')).format('LT') : '')])), '</span>');
  return opt_sb ? '' : output.toString();
};


jive.content.draft = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="jive-draft" id="draft-', soy.$$escapeHtml(opt_data.id), '"><dl><dt>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('draft.saved.last.short'),[])), '</dt><dd>', soy.$$escapeHtml(((opt_data.modificationDate ? jive.model.DateUtil.parseISODateTime(opt_data.modificationDate) : '') ? _jive_moment((parseFloat((opt_data.modificationDate ? jive.model.DateUtil.parseISODateTime(opt_data.modificationDate) : '')) ? parseFloat((opt_data.modificationDate ? jive.model.DateUtil.parseISODateTime(opt_data.modificationDate) : '')) : (opt_data.modificationDate ? jive.model.DateUtil.parseISODateTime(opt_data.modificationDate) : ''))).lang(_jive_locale.toLowerCase().replace('_','-')).format('ll') : '')), '</dd>', (opt_data.subject) ? '<dt>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.subject'),[])) + ':</dt><dd>' + soy.$$escapeHtml((function(word, limit) {   var bits, i;   if ('string' !== typeof word) {       return '';   }    bits = word.split('');   if (bits.length > limit) {        for (i = bits.length - 1; i > -1; --i) {            if (i > limit) {                bits.length = i;            }            else if (' ' === bits[i]) {                bits.length = i;                break;            }        }        bits.push('...');    }    return bits.join('');})(opt_data.subject, 70)) + '</dd>' : '', '</dl><button id="draft-recover-button-', soy.$$escapeHtml(opt_data.id), '" class="jive-description use-draft" aria-labelledby="draft-recover-label-', soy.$$escapeHtml(opt_data.id), '" role="button">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('draft.recover'),[])), '</button>');
  jive.content.draftRecoverButtonLabel(opt_data, output);
  output.append('<button id="draft-delete-button-', soy.$$escapeHtml(opt_data.id), '" class="jive-description destroy-draft" aria-labelledby="draft-delete-label-', soy.$$escapeHtml(opt_data.id), '" role="button">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('draft.delete'),[])), '</button>');
  jive.content.draftDeleteButtonLabel(opt_data, output);
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


jive.content.draftRecoverButtonLabel = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span aria-hidden="true" class="j-508-label" id="draft-recover-label-', soy.$$escapeHtml(opt_data.id), '">');
  jive.shared.soy.i18nHelper({i18nKey: opt_data.subject ? 'draft.recover.label.subject' : 'draft.recover.label.subject.none', arg0: soy.$$escapeHtml((opt_data.modificationDate ? _jive_moment((parseFloat(opt_data.modificationDate) ? parseFloat(opt_data.modificationDate) : opt_data.modificationDate)).lang(_jive_locale.toLowerCase().replace('_','-')).format('ll') : '')), arg1: soy.$$escapeHtml((function(word, limit) {   var bits, i;   if ('string' !== typeof word) {       return '';   }    bits = word.split('');   if (bits.length > limit) {        for (i = bits.length - 1; i > -1; --i) {            if (i > limit) {                bits.length = i;            }            else if (' ' === bits[i]) {                bits.length = i;                break;            }        }        bits.push('...');    }    return bits.join('');})(opt_data.subject, 70))}, output);
  output.append('</span>');
  return opt_sb ? '' : output.toString();
};


jive.content.draftDeleteButtonLabel = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span aria-hidden="true" class="j-508-label" id="draft-delete-label-', soy.$$escapeHtml(opt_data.id), '">');
  jive.shared.soy.i18nHelper({i18nKey: opt_data.subject ? 'draft.delete.label.subject' : 'draft.delete.label.subject.none', arg0: soy.$$escapeHtml((opt_data.modificationDate ? _jive_moment((parseFloat(opt_data.modificationDate) ? parseFloat(opt_data.modificationDate) : opt_data.modificationDate)).lang(_jive_locale.toLowerCase().replace('_','-')).format('ll') : '')), arg1: soy.$$escapeHtml((function(word, limit) {   var bits, i;   if ('string' !== typeof word) {       return '';   }    bits = word.split('');   if (bits.length > limit) {        for (i = bits.length - 1; i > -1; --i) {            if (i > limit) {                bits.length = i;            }            else if (' ' === bits[i]) {                bits.length = i;                break;            }        }        bits.push('...');    }    return bits.join('');})(opt_data.subject, 70))}, output);
  output.append('</span>');
  return opt_sb ? '' : output.toString();
};

;
var form2js=(function(){function e(m,l,n,k,p){if(typeof n=="undefined"||n==null){n=true}if(typeof l=="undefined"||l==null){l="."}if(arguments.length<5){p=false}m=typeof m=="string"?document.getElementById(m):m;var q=[],j,o=0;if(m.constructor==Array||(typeof NodeList!="undefined"&&m.constructor==NodeList)){while(j=m[o++]){q=q.concat(d(j,k,p))}}else{q=d(m,k,p)}return b(q,n,l)}function b(s,A,C){var p={},q={},y,x,w,v,u,r,n,t,o,m,z,D,B;for(y=0;y<s.length;y++){u=s[y].value;if(A&&(u===""||u===null)){continue}D=s[y].name;B=D.split(C);r=[];n=p;t="";for(x=0;x<B.length;x++){z=B[x].split("][");if(z.length>1){for(w=0;w<z.length;w++){if(w==0){z[w]=z[w]+"]"}else{if(w==z.length-1){z[w]="["+z[w]}else{z[w]="["+z[w]+"]"}}m=z[w].match(/([a-z_]+)?\[([a-z_][a-z0-9_]+?)\]/i);if(m){for(v=1;v<m.length;v++){if(m[v]){r.push(m[v])}}}else{r.push(z[w])}}}else{r=r.concat(z)}}for(x=0;x<r.length;x++){z=r[x];if(z.indexOf("[]")>-1&&x==r.length-1){o=z.substr(0,z.indexOf("["));t+=o;if(!n[o]){n[o]=[]}n[o].push(u)}else{if(z.indexOf("[")>-1){o=z.substr(0,z.indexOf("["));m=z.replace(/(^([a-z_]+)?\[)|(\]$)/gi,"");t+="_"+o+"_"+m;if(!q[t]){q[t]={}}if(o!=""&&!n[o]){n[o]=[]}if(x==r.length-1){if(o==""){n.push(u);q[t][m]=n[n.length-1]}else{n[o].push(u);q[t][m]=n[o][n[o].length-1]}}else{if(!q[t][m]){if((/^[a-z_]+\[?/i).test(r[x+1])){n[o].push({})}else{n[o].push([])}q[t][m]=n[o][n[o].length-1]}}n=q[t][m]}else{t+=z;if(x<r.length-1){if(!n[z]){n[z]={}}n=n[z]}else{n[z]=u}}}}}return p}function d(k,j,l){var i=a(k,j,l);return i.length>0?i:g(k,j,l)}function g(k,j,m){var i=[],l=k.firstChild;while(l){i=i.concat(a(l,j,m));l=l.nextSibling}return i}function a(l,j,n){var k,m,i,o=f(l,n);k=j&&j(l);if(k&&k.name){i=[k]}else{if(o!=""&&l.nodeName.match(/INPUT|TEXTAREA/i)){m=c(l);i=[{name:o,value:m}]}else{if(o!=""&&l.nodeName.match(/SELECT/i)){m=c(l);i=[{name:o.replace(/\[\]$/,""),value:m}]}else{i=g(l,j,n)}}}return i}function f(i,j){if(i.name&&i.name!=""){return i.name}else{if(j&&i.id&&i.id!=""){return i.id}else{return""}}}function c(i){if(i.disabled){return null}switch(i.nodeName){case"INPUT":case"TEXTAREA":switch(i.type.toLowerCase()){case"radio":case"checkbox":if(i.checked&&i.value==="true"){return true}if(!i.checked&&i.value==="true"){return false}if(i.checked){return i.value}break;case"button":case"reset":case"submit":case"image":return"";break;default:return i.value;break}break;case"SELECT":return h(i);break;default:break}return null}function h(o){var k=o.multiple,j=[],n,p,m;if(!k){return o.value}for(n=o.getElementsByTagName("option"),p=0,m=n.length;p<m;p++){if(n[p].selected){j.push(n[p].value)}}return j}return e})();var js2form=(function(){var f=/^\[\d+?\]/,j=/^[a-zA-Z_][a-zA-Z_0-9]+/,l=/\[[0-9]+?\]$/,g=/(.*)(\[)([0-9]*)(\])$/,k=/\[([0-9]+)\]\[([0-9]+)\]/g,d=/INPUT|TEXTAREA/i;function h(q,s,m,u,p){if(arguments.length<3){m="."}if(arguments.length<4){u=null}if(arguments.length<5){p=false}var o,r;o=i(s);r=a(q,p,m,{},false);for(var t=0;t<o.length;t++){var v=o[t].name,n=o[t].value;if(typeof r[v]!="undefined"){b(r[v],n)}else{if(typeof r[v.replace(l,"[]")]!="undefined"){b(r[v.replace(l,"[]")],n)}}}}function b(q,p){var o,n,m;if(q instanceof Array){for(n=0;n<q.length;n++){if(q[n].value==p){if(q[n].checked!=true){$j(q[n]).click()}}}}else{if(d.test(q.nodeName)){$j(q).val(p)}else{if(/SELECT/i.test(q.nodeName)){o=q.getElementsByTagName("option");for(n=0,m=o.length;n<m;n++){if(o[n].value==p){o[n].selected=true;if(q.multiple){break}}else{if(!q.multiple){o[n].selected=false}}}}}}}function a(q,p,n,v,r){if(arguments.length<4){v={}}var A={},w=q.firstChild,m,o,y,u,t,s,z;while(w){m="";if(w.name&&w.name!=""){m=w.name}else{if(p&&w.id&&w.id!=""){m=w.id}}if(m==""){var x=a(w,p,n,v,r);for(y in x){if(typeof A[y]=="undefined"){A[y]=x[y]}else{for(u=0;u<x[y].length;u++){A[y].push(x[y][u])}}}}else{if(/SELECT/i.test(w.nodeName)){for(t=0,z=w.getElementsByTagName("option"),s=z.length;t<s;t++){if(r){z[t].selected=false}o=e(m,n,v);A[o]=w}}else{if(/INPUT/i.test(w.nodeName)&&/CHECKBOX|RADIO/i.test(w.type)){if(r){w.checked=false}o=e(m,n,v);o=o.replace(l,"[]");if(!A[o]){A[o]=[]}A[o].push(w)}else{if(r){w.value=""}o=e(m,n,v);A[o]=w}}}w=w.nextSibling}return A}function e(o,p,u){var v=[],n=o.split(p),s,r,q,m,w,t;o=o.replace(k,"[$1].[$2]");for(t=0;t<n.length;t++){s=n[t];v.push(s);r=s.match(g);if(r!=null){q=v.join(p);m=q.replace(g,"$3");q=q.replace(g,"$1");if(typeof(u[q])=="undefined"){u[q]={lastIndex:-1,indexes:{}}}if(m==""||typeof u[q].indexes[m]=="undefined"){u[q].lastIndex++;u[q].indexes[m]=u[q].lastIndex}w=u[q].indexes[m];v[v.length-1]=s.replace(g,"$1$2"+w+"$4")}}q=v.join(p);q=q.replace("].[","][");return q}function i(q,o){var m=[],p,n;if(arguments.length==1){o=0}if(q==null){m=[{name:"",value:null}]}else{if(typeof q=="string"||typeof q=="number"||typeof q=="date"||typeof q=="boolean"){m=[{name:"",value:q}]}else{if(q instanceof Array){for(p=0;p<q.length;p++){n="["+p+"]";m=m.concat(c(q[p],n,o+1))}}else{for(p in q){n=p;m=m.concat(c(q[p],n,o+1))}}}}return m}function c(n,q,p){var t;var m=[],o=i(n,p+1),r,s;for(r=0;r<o.length;r++){t=q;if(f.test(o[r].name)){t+=o[r].name}else{if(j.test(o[r].name)){t+="."+o[r].name}}s={name:t,value:o[r].value};m.push(s)}return m}return h})();(function(a){a.fn.toObject=function(c){var b=[],d={mode:"first",delimiter:".",skipEmpty:true,nodeCallback:null,useIdIfEmptyName:false};if(c){a.extend(d,c)}switch(d.mode){case"first":return form2js(this.get(0),d.delimiter,d.skipEmpty,d.nodeCallback,d.useIdIfEmptyName);break;case"all":this.each(function(){b.push(form2js(this,d.delimiter,d.skipEmpty,d.nodeCallback,d.useIdIfEmptyName))});return b;break;case"combine":return form2js(Array.prototype.slice.call(this),d.delimiter,d.skipEmpty,d.nodeCallback,d.useIdIfEmptyName);break}}})(jQuery);
;
define("apps/shared/models/location_state",function(){if(jive.LocationState&&jive.locationState){return jive.locationState}jive.LocationState=jive.oo.Class.extend(function(a){var b=jQuery;jive.conc.observable(this);a.defaults={supportPushState:true,supportFragment:true};a.init=function(c){var f=b.extend({},this.defaults,c||{}),e=location.href,g=this;this.location=e;this.description="";this.manuallyUpdatingHash=false;this.supportPushState=f.supportPushState&&!!(window.history&&window.history.pushState);this.supportFragment=f.supportFragment;var d=[this.supportPushState?"popstate":null,this.supportFragment?"hashchange":null].filter(function(h){return !!h}).join(" ");b(window).bind(d,function(i){var h=location.href;if(g.afterInit||h!==e){g.location=h;if(!g.manuallyUpdatingHash){g.emitChange(g.current(),g.description,h)}g.manuallyUpdatingHash=false}})};this.get=function(c){return this.current()[c]};this.getState=function(){return this.current()};this.getEphemeralState=function(){return b.deparam.fragment()};a.getPermaState=function(){return b.deparam.querystring()};this.pushState=function(e,c){var d=b.extend(this.current(),e);Object.keys(e).forEach(function(f){if(typeof e[f]=="undefined"||(b.isArray(e[f])&&e[f].length<1)){delete d[f]}});this.setState(d,c)};this.setState=function(g,f,e){var d=this.lastLocation;this.location=this.supportPushState?this.newLocation(g,e):this.newFragment(g,e);this.description=f||"";this.emitChange(g,f,this.location);if(this.location!==d){if(this.supportPushState){try{history.pushState(this.current(),this.description,this.location)}catch(c){window.location=this.location}}else{if(this.supportFragment){this.updateLocationHash(this.location)}}}};this.watchParam=function(d,e){var c=this.getState()[d];this.addListener("change",function(i,h,g){var f=i[d];if(f!==c){e(f,i,h,g);c=f}})};a.current=function(){var e=this.location.match(/\?/)?b.deparam.querystring(this.location):{},d=this.location.match(/#/)?b.deparam.fragment(this.location):{};var f=b.extend({},e,d);var c={};Object.keys(f).forEach(function(g){if(f[g]!==""){c[g]=f[g]}});return c};a.newLocation=function(e,c){var d;if(!c){d=location.href.split(/[?#]/)[0]}else{if(c.slice(0,_jive_base_url.length)===_jive_base_url||c.match(/^[a-z]+:/i)){d=c}else{d=jive.app.url({path:"/"+c.replace(/^\//,"")})}}return b.param.querystring(d,e)};a.newFragment=function(g,e){var c={},f=b.deparam.querystring(),h;h=location.href.split("#")[0];if(e){g.nPLoc=e}Object.keys(f).forEach(function(i){if(typeof g[i]==="undefined"||(b.isArray(g[i])&&g[i].length<1)){c[i]=""}});Object.keys(g).forEach(function(i){if(f[i]!==String(g[i])){c[i]=g[i]}});var d=b.param.fragment(h,c);if(/#[^=&]+=$/.test(d)){d=d.substring(0,d.length-1)}return d};a.emitChange=function(e,d,c){if(c!==this.lastLocation){this.emit("change",e,d,c);this.lastLocation=c;this.afterInit=true}else{this.emit("noChange",e,d,c)}};a.updateLocationHash=function(d){var c=this;function e(){c.preserveScrollPosition(d.split("#")[1],function(){c.manuallyUpdatingHash=true;location.href=d})}if(b.browser.msie&&b.browser.version<8){(this.locationHashTimeouts||[]).forEach(function(f){clearTimeout(f)});this.locationHashTimeouts=[];this.locationHashTimeouts.push(setTimeout(function(){c.locationHashTimeouts.push(setTimeout(e,100))},100))}else{e()}};a.preserveScrollPosition=function(c,e){var d;if(c){d=b(window).scrollTop();e();b(window).scrollTop(d)}else{e()}}});jive.locationState=new jive.LocationState();return jive.locationState});
;
jive.namespace("draft");jive.draft.View=jive.AbstractView.extend(function(b,d){var e=jQuery,a,f;var c=false;this.init=function(g){d.init.call(this,g);this.options=e.extend({pushStateEnabled:true},g);a=this;a.locationState=new jive.LocationState();e(function(){var j=a.getContent();var h=a.serializeForm();j.data("autosave",h);a.emit("display");e("#autosave-prompt .use-draft").live("click",function(m){var l=e(m.target).closest(".jive-draft");var k=l.data("draft");a.emit("restore",k);jive.switchboard.emit("draft.destroy",k.id)});e("#autosave-prompt .destroy-draft").live("click",function(m){var l=e(m.target).closest(".jive-draft");var k=l.data("draft");a.emit("destroy",k.id);jive.switchboard.emit("draft.destroy",k.id)});a.unpause();var i=window.setInterval(function(){a.emit("keepalive",i)},g.keepaliveInterval*1000);e(window).unload(function(){a.removeFromWorkingDrafts(j.data("autosave").id)});e(".jive-form-button-cancel").on("click",function(){a.removeFromWorkingDrafts(j.data("autosave").id)});jive.switchboard.addListener("draft.destroy",function(k){a.destroy(k)})})};this.pause=function(){if(f){clearTimeout(f);f=null}};this.unpause=function(){if(!f){f=setTimeout(a.save,a.options.interval*1000)}};this.save=function(){var i=new Date().getTime();var o=false;var j=function(r,q){if(q==4026||q==403){c=true}g()};function g(){var q=(new Date().getTime()-i);f=setTimeout(a.save,Math.min(Math.max(q*20,a.options.interval*1000),a.options.interval*50000))}var h=a.serializeForm();if(h.body.length===0){g();return}var m=a.getContent();var n=m.data("autosave");var l=m.data("lastAttempt");if(l){o=h.body==l.body&&h.subject==l.subject&&JSON.stringify(h.properties)==JSON.stringify(l.properties)}var k=h.body!=n.body||h.subject!=n.subject||JSON.stringify(h.properties)!=JSON.stringify(n.properties);if(!o){c=false}m.data("lastAttempt",h);if(!k){g();return}if(!c){if(n.id){h.id=n.id;var p=a.emitP("save",h,j).addCallback(g)}else{var p=a.emitP("create",h,j).addCallback(g)}}else{g()}};b.serializeForm=function(){var g={};var h=a.getContent().toObject({mode:"all"})[0];g.objectType=a.options.objectType;g.draftObjectType=a.options.draftObjectType;g.draftObjectID=a.options.draftObjectID;g.subject=e("#"+a.options.subject).val();g.body=a.getRTE()?a.getRTE().getHTML():"";g.properties={};e.each(a.options.properties,function(k,j){g.properties[j]=h[j]});return g};b.getRTE=function(){return window.editor.get(a.options.editorId)};this.saved=function(i,m){try{var l=a.getContent();l.data("autosave",i);a.addToWorkingDrafts(i.id);if(a.options.pushStateEnabled){a.updatePushState(i.id)}a.updateFormDraftID(l,i.id);var k=e(jive.content.draftlastsaved({date:new Date()}));var h=e(a.getRTE().getBelowEditorArea());var g=h.find(".last-saved");if(g.length){g.replaceWith(k)}else{k.hide().appendTo(h).fadeIn();a.getRTE().autoReposition()}m.emitSuccess(i)}catch(j){if(m){m.emitError(j)}}};this.display=function(l){var h=a.locationState.getState().draftID;if(h){var k=false;e.each(l,function(n,m){if(m.id==h){a.emit("restore",m);k=true}});if(k){return}}var i=[];e.each(l,function(n,m){if(!a.isWorkingDraft(m.id)){i.push(m)}});if(i.length===0){return}var j=a.getContent();var g=e(jive.content.drafts({drafts:i}));g.find(".jive-draft").each(function(m){e(this).data("draft",i[m])});g.hide().insertBefore(j).fadeIn();g.focus()};this.restore=function(h){var g=a.getContent();js2form(g[0],h.properties);a.getRTE().setHTML(h.body);e("#"+a.options.subject).val(h.subject);g.trigger("restore",h);a.addToWorkingDrafts(h.id);a.updateFormDraftID(g,h.id);g.data("autosave",h);e("#autosave-prompt").fadeOut(function(){e(this).safeRemove()});if(a.options.pushStateEnabled){a.updatePushState(h.id)}};this.destroy=function(k){var g=e("#autosave-prompt");if(g.length===0){return}var i=e("#draft-"+k);if(i.length===0){return}var j=g.find(".jive-draft").length>1;var h=j?i:g;h.fadeOut(function(){e(this).safeRemove()})};b.updateFormDraftID=function(h,i){var g=h.find("input#draftID");if(g.length===0){g=e("<input />",{id:"draftID",name:"draftID",type:"hidden"});g.appendTo(h)}g.val(i)};b.updatePushState=function(g){a.locationState.pushState({draftID:g})};b.addToWorkingDrafts=function(h){var g=a.getWorkingDrafts();if(!a.isWorkingDraft(h)){g.push(h)}if(typeof(localStorage)!="undefined"){localStorage.setItem("workingDrafts",g)}};b.removeFromWorkingDrafts=function(h){var g=a.getWorkingDrafts();g.splice(g.indexOf(String(h)),1);if(typeof(localStorage)!="undefined"){localStorage.setItem("workingDrafts",g)}};b.isWorkingDraft=function(g){return e.inArray(String(g),a.getWorkingDrafts())>-1};b.getWorkingDrafts=function(){if(typeof(localStorage)=="undefined"){return[]}var g=localStorage.getItem("workingDrafts");return g?g.split(","):[]}});define("apps/content/draft/view",function(){return jive.draft.View});
;
jive.namespace("draft");define("apps/content/draft/source",["apps/shared/models/rest_service"],function(a){jive.draft.Model=a.extend(function(b){b.resourceType="draft";b.pluralizedResourceType=b.resourceType;this.save=function(c){return this.commonAjaxRequest(new jive.conc.Promise(),"PUT",{url:this.RESOURCE_ENDPOINT+"/"+c.id,contentType:"application/json; charset=utf-8",data:JSON.stringify(c)})};this.create=function(c){return this.commonAjaxRequest(new jive.conc.Promise(),"POST",{url:this.RESOURCE_ENDPOINT,contentType:"application/json; charset=utf-8",data:JSON.stringify(c)})};this.display=function(c){return this.get(c)}});return jive.draft.Model});
;
jive.namespace("draft");jive.draft.Main=jive.oo.Class.extend(function(a){this.init=function(b){a.main=this;this.options=$j.extend({enabled:true,interval:10,keepaliveInterval:90,objectType:null,draftObjectType:null,draftObjectID:null,editorId:null,subject:null,images:[],properties:[],confirmationMessage:jive.i18n.getMsg("global.unsaved_changes.text"),saveMessage:jive.i18n.getMsg("forum.post.save_and_edit.text"),savedMessage:jive.i18n.getMsg("forum.post.save_and_edit.text")},b);b=this.options;this.view=new jive.draft.View(b);this.model=new jive.draft.Model(b);this.view.addListener("keepalive",function(c){var d=a.main.model.get("");d.addListener("error",function(f,e){if(e==403){window.clearInterval(c)}})});this.view.addListener("display",function(c){var d=b.objectType+"/"+b.draftObjectType+"/"+b.draftObjectID;a.main.model.display(d).addCallback(function(e){a.main.view.display(e)})});this.view.addListener("create",function(d,c,e){a.main.model.create(d).addCallback(function(f){a.main.view.saved(f,e)}).addErrback(function(){e.emitError()}).addListener("error",c)});this.view.addListener("save",function(d,c,e){a.main.model.save(d).addCallback(function(f){a.main.view.saved(f,e)}).addErrback(function(){e.emitError()}).addListener("error",c)});this.view.addListener("restore",function(c){a.main.view.restore(c)});this.view.addListener("destroy",function(c){a.main.model.destroy(c).addCallback(function(d){a.main.view.destroy(c)})})};this.pause=function(){a.main.view.pause()};this.unpause=function(){a.main.view.unpause()}});define("apps/content/draft/main",function(){return jive.draft.Main});
;
jive.namespace("CommentApp");define("apps/comment_app/views/form_view",function(){jive.CommentApp.FormView=jive.oo.Class.extend(function(a,b){jive.conc.observable(this);this.init=function(c,d){this._parentCommentID=d.parentCommentID;this._commentMode=d.commentMode;if(!this._postBlock){this._postBlock=$j("#jive-comment-post-block")}this._itemAuthorID="comment-author";this._itemBodyID="commentBody";this._itemEmailID="comment-email";this._itemURLID="comment-url";this._container=$j(c);this._initFormWaitingView(d.i18n);this.rteView=null;this.options=d;this._render()};this.getParentCommentID=function(){return this._parentCommentID};a._initFormWaitingView=function(c){this._formWaitingView=new jive.shared.FormWaitingView(this._container.parents(".jive-js-addReply"),{containerPadding:0})};a.focus=function(){if(this._isAnonymous){$j("#"+this._itemAuthorID).focus()}else{b.focus.call(this)}};a._getValues=function(){return{body:this.rteView.getHTML(),mobileEditor:this.rteView.isMobileOnly(),name:$j("#"+this._itemAuthorID).val(),email:$j("#"+this._itemEmailID).val(),url:$j("#"+this._itemURLID).val(),parentCommentID:this._parentCommentID,commentMode:this._commentMode,outcome:this._container.find(".js-outcome-attachment").data("outcomeType")}};a._postHandler=function(){var c=this;if(c._validateComment()){c._formWaitingView.disableForm();c.emitP("post",c._getValues()).addCallback(function(){c._formWaitingView.enableForm()}).addErrback(function(){c._formWaitingView.enableForm()})}return false};a._validateComment=function(){var c=this._getValues();if(this.options.isAnonymous&&$def(c.name)&&$j.trim(c.name)===""){$j("<p/>",{text:jive.DiscussionApp.soy.replyErrorMessage({key:"forum.thrd.name_required.text"})}).message({style:"error"});return false}else{if(this.options.isAnonymous&&$def(c.email)&&$j.trim(c.email)===""){$j("<p/>",{text:jive.DiscussionApp.soy.replyErrorMessage({key:"forum.thrd.email_required.text"})}).message({style:"error"});return false}else{if($j.trim(c.body)===""){$j("<p/>",{text:jive.DiscussionApp.soy.replyErrorMessage({key:"post.err.pls_enter_body.text"})}).message({style:"error"});return false}else{return true}}}};a._initFormControls=function(d,c){};a._isEdit=function(){return false};a._render=function(){var e=this._template();var j="wysiwyg_id_"+jive.CommentApp.FormView.id;jive.CommentApp.FormView.id++;e.find("textarea").attr("id",j);this._container.append(e);this._initFormControls(this._container,j);var h=this;var c=new jive.rte.EntitlementService({objectID:h.options.resourceID,objectType:h.options.resourceType,entitlement:"VIEW"});var g=new jive.rte.ImageService({objectId:-1,objectType:-1,containerId:h.options.containerID,containerType:h.options.containerType});var f=$j("#"+j).closest("form");var d=new jive.rte.FormService({$form:f,formSubmitHandler:function(){return h._postHandler()}});var i=$j.extend({$element:$j("#"+j),isEditing:this._isEdit,pinToolbar:false,onReady:function(){if(h.options.rteOptions.onReady){h.options.rteOptions.onReady()}jive.conc.nextTick(function(){h.rteView.focus()});if(!h.options.isAnonymous){var k={selector:f,objectType:105,draftObjectType:h.options.resourceType,draftObjectID:h.options.resourceID,editorId:j,pushStateEnabled:false};new jive.draft.Main(k)}},services:{imageService:g,formService:d,entitlementService:c}},this.options.rteOptions);this.rteView=new jive.rte.RTEWrap(i);this._container.find("form").find("[name=cancel]").click(function(k){h.emit("cancel",h._getValues());k.preventDefault()})};a._template=function(){return $j("<div></div>").html(this._postBlock.html())};this.remove=function(){var c=this.rteView.getID();if(this.rteView){this.rteView.killYourself();this.rteView.destroy()}window.editor.clear(c);jive.rte.multiRTE=jive.rte.multiRTE.filter(function(d){return d!=c});this._container.find("form").parent().html("");$j(window).unbind("unload",this._unloadCallback);this.emit("remove")}});jive.CommentApp.FormView.id=0;return jive.CommentApp.FormView});
;
jive.namespace("CommentApp");jive.CommentApp.EditFormView=jive.CommentApp.FormView.extend(function(a,b){this.init=function(c,d){this._id=d.id;this._postBlock=$j("#jive-comment-edit-block");b.init.call(this,c,d)};a._initFormWaitingView=function(c){this._formWaitingView=new jive.shared.FormWaitingView($j(this._container).parents(".jive-comment-content"),{containerPadding:0})};a._initFormControls=function(h,g){var d=h.find(".jive-comment-rte-source").val();var c=h.find("[name=commentGuestName]").val();var f=h.find("[name=commentGuestEmail]").val();var e=h.find("[name=commentGuestUrl]").val();if(c||f||e){h.find(".jive-comment-rte-source").val();h.find(".jive-comment-post-anonymous [name=name]").val(c);h.find(".jive-comment-post-anonymous [name=email]").val(f);h.find(".jive-comment-post-anonymous [name=url]").val(e);h.find(".jive-comment-post-anonymous").show()}else{h.find(".jive-comment-post-anonymous").hide()}$j("#"+g).val(d)};a._isEdit=function(){return true};a._getValues=function(){return{body:this.rteView.getHTML(),mobileEditor:this.rteView.isMobileOnly(),name:this._container.find("[name=name]").val(),email:this._container.find("[name=email]").val(),url:this._container.find("[name=url]").val(),id:this._id}}});define("apps/comment_app/views/edit_form_view",function(){return jive.CommentApp.EditFormView});
;
jive.namespace("CommentApp");jive.CommentApp.CommentView=function(l,q){jive.conc.observable(this);var n=q.id,i=$j(l),e=q.isThreaded,p=q.i18n,h=this;function f(){i.fadeOut(function(){$j(this).remove()});this.emit("remove",n);return this}function o(r){i.find("[class*=comment-preview]").html(r).fadeIn()}function m(){return i}function c(s,t,u){if(!u){u=i}var r=u.find(".jive-rendered-content").html();jive.SharedViews.RteView.setMiniRTEQuotedMsg(s,p,t,r)}function j(){i.find(".jive-comment-meta:first, #comment-body-"+n+", .js-comment-footer").hide();i.find(".jive-comment-meta:first").after('<p class="jive-js-edit-title j-editing-comment jive-comment-meta font-color-meta-light">'+p.cmntEditingTitle+"</p>")}function k(){i.find(".jive-comment-meta:first, #comment-body-"+n+", .js-comment-footer").show();i.find(".jive-js-edit-title").remove()}function g(){return n}function d(){return i.find(".jive-username-link:first").text()}function a(r){var s;if(e){s=i.find("ul.jive-comment:first");if(s.length===0){s=$j("<ul/>",{"class":"jive-comment clearfix jive-comment-threaded jive-comment-indent-1"});i.append(s)}s.append(r)}else{i.parent().append(r)}}function b(){var r=i.parents().andSelf().filter("ul.jive-comment").toArray();return r.slice(1).reduce(function(t,s){return t+parseInt($j(s).css("margin-left"),10)},0)}this.remove=f;this.displayPreview=o;this.getDOMElement=m;this.setQuotedMsg=c;this.getCommentID=g;this.username=d;this.showCommentEdit=j;this.hideCommentEdit=k;this.append=a;this.indent=b};define("apps/comment_app/views/comment_view",function(){return jive.CommentApp.CommentView});
;
jive.namespace("DiscussionApp");jive.DiscussionApp.Discussion=jive.CommentApp.Comment.extend({getFieldProps:function(){var b={};for(var a in this){if(!$j.isFunction(this[a])&&a!="outcome"){b[a]=this[a]}}return b}});define("apps/discussion_app/models/discussion",function(){return jive.DiscussionApp.Discussion});
;
jive.namespace("DiscussionApp");define("apps/discussion_app/models/discussion_rest_source",["apps/shared/models/rest_service"],function(a){jive.DiscussionApp.DiscussionRestSource=a.extend(function(b){b.resourceType="message";b.pluralizedResourceType=b.resourceType;this.createMessage=function(h){var e=this.RESOURCE_ENDPOINT+"/"+h.forumThreadID+"/"+h.ID,d=h.name,c=h.email;delete h.name;delete h.email;var f=$j.deparam.querystring().fromQ?$j.deparam.querystring().fromQ:$j.deparam.fragment().fromQ;if(f){h.fromQuest=f}var g=JSON.stringify(h);if(d){e+="/guest";g={messageBean:h,guestUserName:d,guestUserEmail:c};g=JSON.stringify(g)}return this.commonAjaxRequest(new jive.conc.Promise(),"POST",{url:e,data:g})}});return jive.DiscussionApp.DiscussionRestSource});
;
jive.namespace("DiscussionApp");jive.DiscussionApp.QuestionSource=function(h){var c=jive.rest.url("/message/"+h),b=c+"/question";function f(i){if(typeof i=="function"){i={success:i}}return i}function g(i){i=f(i);$j.ajax({type:"GET",url:b,dataType:"json",data:{},success:function(j){i.success(j)},error:function(j){if(typeof i.error=="function"){i.error.call(null,j)}}});return this}function d(i){i=f(i);$j.ajax({type:"POST",url:c+"/assumedanswered",dataType:"json",data:{},success:function(j){i.success(j)},error:function(j){if(typeof i.error=="function"){i.error.call(null,j)}}})}function e(i,j){j=f(j);$j.ajax({type:"POST",url:c+"/"+i+"/correct",dataType:"json",data:{},success:function(k){j.success(k)},error:function(k){if(typeof j.error=="function"){j.error.call(null,k)}}})}function a(i,j){j=f(j);$j.ajax({type:"POST",url:c+"/"+i+"/unmark",dataType:"json",data:{},success:function(k){j.success(k)},error:function(k){if(typeof j.error=="function"){j.error.call(null,k)}}})}this.getQuestion=g;this.markAsCorrect=e;this.markAssumedAnswered=d;this.unMarkAsCorrect=a};define("apps/discussion_app/models/question_source",function(){return jive.DiscussionApp.QuestionSource});
;
jive.namespace("DiscussionApp");jive.DiscussionApp.DiscussionView=function(h){jive.conc.observable(this);var e=$j(h),c=this;function b(){e.fadeOut(function(){$j(this).remove()});c.emit("remove",c.messageID);return c}function d(i){e.find("[class*=discussion-preview]").html(i).fadeIn()}function f(){return e}function g(k,j,l){var i=e.find(".jive-rendered-content").html();jive.SharedViews.RteView.setMiniRTEQuotedMsg(k,j,l,i)}function a(){var i=e.parents().andSelf().filter("li.reply").toArray();return i.slice(1).reduce(function(k,j){var l=$j(j);return k+parseInt(l.css("margin-left"),10)+parseInt(l.css("padding-left"),10)},0)}this.remove=b;this.displayPreview=d;this.getDOMElement=f;this.setQuotedMsg=g;this.indent=a;(function(j){var i=e.find("a.discussionAdd");j.messageID=i.attr("data-messageID");j.username=i.attr("data-discussionusername");j.userid=i.attr("data-discussionuserid");j.isReply=(i.attr("data-isReply")||"").toLowerCase()==="true";j.replySubject=i.attr("data-replySubject");j.isAnonymous=(i.attr("data-isAnonymous")||"").toLowerCase()==="true";j.advEditorLnk=i.attr("data-advEditorLnk")})(this)};define("apps/discussion_app/views/discussion_view",function(){return jive.DiscussionApp.DiscussionView});
;
// This file was automatically generated from badges.soy.
// Please don't edit this file by hand.

goog.provide('jive.outcomes.badge.badge');
goog.provide('jive.outcomes.badge.badgeActionLink');
goog.provide('jive.outcomes.badge.badgeAlertedNames');
goog.provide('jive.outcomes.badge.badgeByline');
goog.provide('jive.outcomes.badge.badgeComment');
goog.provide('jive.outcomes.badge.badgeContainer');
goog.provide('jive.outcomes.badge.badgeDetails');
goog.provide('jive.outcomes.badge.badgeOutdatedLink');
goog.provide('jive.outcomes.badge.badgePopup');
goog.provide('jive.outcomes.badge.badgeRaw');
goog.provide('jive.outcomes.badge.badgeShareLink');
goog.provide('jive.outcomes.badge.badges');
goog.provide('jive.outcomes.badge.fakeOutcomeBadge');
goog.provide('jive.outcomes.badge.outcomeBadge');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.shared.displayutil.itemList');
goog.require('jive.shared.displayutil.userDisplayNameLink');


jive.outcomes.badge.badgeContainer = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul class="js-outcome-badge-container j-outcome-badge-container js-ed-', soy.$$escapeHtml(opt_data.objectType), '-', soy.$$escapeHtml(opt_data.objectId), (opt_data.extraClasses) ? ' ' + soy.$$escapeHtml(opt_data.extraClasses) : '', '" data-object-type="', soy.$$escapeHtml(opt_data.objectType), '" data-object-id="', soy.$$escapeHtml(opt_data.objectId), '"', (opt_data.parentType) ? 'data-parent-object-type="' + soy.$$escapeHtml(opt_data.parentType) + '"' : '', (opt_data.parentID) ? 'data-parent-object-id="' + soy.$$escapeHtml(opt_data.parentID) + '"' : '', 'aria-label="', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('outcomes.badgeContainer.ariaLabel'),[])), '"', (opt_data.allowedOutcomeTypes) ? 'data-allowed-outcome-types="' + soy.$$escapeHtml(JSON.stringify(opt_data.allowedOutcomeTypes).replace(/</g, '\\u003C').replace(/>/g, '\\u003E').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029')) + '"' : '', 'aria-live="polite">');
  if (opt_data.outcomes) {
    jive.outcomes.badge.badges(opt_data, output);
  }
  output.append('</ul>');
  return opt_sb ? '' : output.toString();
};


jive.outcomes.badge.badges = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var outcomeList40 = opt_data.outcomes;
  var outcomeListLen40 = outcomeList40.length;
  for (var outcomeIndex40 = 0; outcomeIndex40 < outcomeListLen40; outcomeIndex40++) {
    var outcomeData40 = outcomeList40[outcomeIndex40];
    jive.outcomes.badge.outcomeBadge({outcome: outcomeData40, embedded: opt_data.embedded}, output);
  }
  return opt_sb ? '' : output.toString();
};


jive.outcomes.badge.outcomeBadge = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  jive.outcomes.badge.badge({outcomeType: String(opt_data.outcome.outcomeType.name).toLowerCase(), embedded: opt_data.embedded}, output);
  return opt_sb ? '' : output.toString();
};


jive.outcomes.badge.fakeOutcomeBadge = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  jive.outcomes.badge.badgeRaw({outcomeType: String(opt_data.outcomeTypeName).toLowerCase(), tagName: 'li', embedded: true, extraClasses: 'j-fake-badge js-fake-badge'}, output);
  return opt_sb ? '' : output.toString();
};


jive.outcomes.badge.badge = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  jive.outcomes.badge.badgeRaw(soy.$$augmentMap(opt_data, {tagName: 'li'}), output);
  return opt_sb ? '' : output.toString();
};


jive.outcomes.badge.badgeRaw = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName), ' class="js-outcome-badge j-outcome-badge js-outcome-type-', soy.$$escapeHtml(opt_data.outcomeType), ' j-outcome-type-', soy.$$escapeHtml(opt_data.outcomeType), ' ', (opt_data.extraClasses) ? ' ' + soy.$$escapeHtml(opt_data.extraClasses) : '', '" data-outcome-type="', soy.$$escapeHtml(opt_data.outcomeType), '">', (! opt_data.embedded) ? '<a href="#" aria-haspopup="true">' : '', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('outcomes.badge.' + opt_data.outcomeType),[])), (! opt_data.embedded) ? '</a>' : '', '</', soy.$$escapeHtml(opt_data.tagName), '>');
  return opt_sb ? '' : output.toString();
};


jive.outcomes.badge.badgePopup = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-outcome-badge-popup j-outcome-popup">');
  jive.outcomes.badge.badgeByline(opt_data, output);
  if (opt_data.comment) {
    jive.outcomes.badge.badgeComment(opt_data, output);
  }
  if (opt_data.alertedNames) {
    jive.outcomes.badge.badgeAlertedNames(opt_data, output);
  }
  if (opt_data.shareLink) {
    jive.outcomes.badge.badgeShareLink(opt_data.shareLink, output);
  }
  if (opt_data.props.url && opt_data.props.title) {
    jive.outcomes.badge.badgeOutdatedLink({href: opt_data.props.url, title: opt_data.props.title}, output);
  }
  if (opt_data.actions.length > 0) {
    output.append('<footer class="j-outcome-modal-footer j-pop-row j-last">');
    var itemList105 = opt_data.actions;
    var itemListLen105 = itemList105.length;
    for (var itemIndex105 = 0; itemIndex105 < itemListLen105; itemIndex105++) {
      var itemData105 = itemList105[itemIndex105];
      output.append((! (itemIndex105 == 0)) ? '<span class="font-color-meta-light">|</span>' : '');
      jive.outcomes.badge.badgeActionLink(itemData105, output);
    }
    output.append('</footer>');
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


jive.outcomes.badge.badgeByline = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-outcome-byline">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('outcomes.badge.popup.' + opt_data.outcomeTypeName),[])), ' ');
  jive.shared.displayutil.userDisplayNameLink(soy.$$augmentMap(opt_data.author, {anonymous: false}), output);
  output.append(' <span class="font-color-meta">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('outcomes.badge.popup.datePart'),[((opt_data.modifiedDate ? jive.model.DateUtil.parseISODateTime(opt_data.modifiedDate) : '') ? _jive_moment((parseFloat((opt_data.modifiedDate ? jive.model.DateUtil.parseISODateTime(opt_data.modifiedDate) : '')) ? parseFloat((opt_data.modifiedDate ? jive.model.DateUtil.parseISODateTime(opt_data.modifiedDate) : '')) : (opt_data.modifiedDate ? jive.model.DateUtil.parseISODateTime(opt_data.modifiedDate) : ''))).lang(_jive_locale.toLowerCase().replace('_','-')).format('lll') : '')])), '</span></div>');
  return opt_sb ? '' : output.toString();
};


jive.outcomes.badge.badgeDetails = function(opt_data, opt_sb) {
  opt_data = opt_data || {};
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.comment) ? '<div class="j-outcome-comment"><strong class="font-color-meta">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('outcomes.badge.popup.messageLabel'),[])) + '</strong> ' + soy.$$changeNewlineToBr(soy.$$escapeHtml(opt_data.comment)) + '</div>' : '');
  if (opt_data.alertedNames) {
    jive.outcomes.badge.badgeAlertedNames(opt_data, output);
  }
  return opt_sb ? '' : output.toString();
};


jive.outcomes.badge.badgeComment = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-outcome-comment"><p><strong class="font-color-meta">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('outcomes.badge.popup.messageLabel'),[])), '</strong> ', soy.$$changeNewlineToBr(soy.$$escapeHtml(opt_data.comment)), '</p></div>');
  return opt_sb ? '' : output.toString();
};


jive.outcomes.badge.badgeAlertedNames = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-outcome-approvers font-color-meta"><strong>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('outcomes.badge.popup.approversLabel'),[])), '</strong> ');
  jive.shared.displayutil.itemList({items: opt_data.alertedNames, expandable: true}, output);
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


jive.outcomes.badge.badgeActionLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a class="j-outcome-modal-footer-link js-actionLink ', soy.$$escapeHtml(opt_data.extraClasses ? opt_data.extraClasses : ''), '"', (opt_data.actionData) ? 'data-action-data="' + soy.$$escapeHtml(opt_data.actionData) + '"' : '', (opt_data.event) ? 'data-event="' + soy.$$escapeHtml(opt_data.event) + '"' : '', 'href="#">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('outcomes.actionMenu.item.' + opt_data.labelSuffix),[])), '</a>');
  return opt_sb ? '' : output.toString();
};


jive.outcomes.badge.badgeShareLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a class="j-share-link ', (opt_data.actionData && opt_data.event) ? 'js-actionLink j-ui-elem j-share-add-contributors font-color-meta-light' : '', '"', (opt_data.actionData) ? 'data-action-data="' + soy.$$escapeHtml(opt_data.actionData) + '"' : '', (opt_data.event) ? 'data-event="' + soy.$$escapeHtml(opt_data.event) + '"' : '', (opt_data.actionData && opt_data.event) ? 'title="' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('outcomes.actionMenu.share.' + opt_data.labelSuffix),[])) + '"' : '', 'href="', soy.$$escapeHtml(opt_data.href ? opt_data.href : '#'), '">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('outcomes.actionMenu.share.' + opt_data.labelSuffix),[])), '</a>');
  return opt_sb ? '' : output.toString();
};


jive.outcomes.badge.badgeOutdatedLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-outcomes-outdated-redirect j-outcome-comment"><p><h5>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('outcomes.badge.popup.outdated.link'),[])), ' </h5><a href="', soy.$$escapeHtml(opt_data.href), '">', soy.$$escapeHtml(opt_data.title), '</a></p></div>');
  return opt_sb ? '' : output.toString();
};

;
define("apps/shared/models/promise_cache",["jquery"],function(d){function a(l,k){this.cache={};this.keyNames=l;this.logEnabled=k&&console&&console.log}a.prototype._access=function i(m,p,o){var k=this.cache;for(var l=0;k!=null&&l<this.keyNames.length;++l){var n=m[this.keyNames[l]];if(k[n]==null){if(p){if(l<this.keyNames.length-1){k[n]={}}else{if(o!=null){k[n]=o}}}}else{if((l==this.keyNames.length-1)&&p&&o==null){delete k[n]}}k=k[n]}return k};a.prototype.get=function b(l,m){var k=this._access(l);if(k==null){if(this.logEnabled){console.log("Cache missed",l)}if(m){return this.put(l,m(l))}else{k=new d.Deferred();k.reject(this,l);return k.promise()}}else{if(this.logEnabled){console.log("Cache Hit",l)}return k}};a.prototype.getAll=function e(m,n){var l=[];var k=this;d.each(m,function(){l.push(k.get(this,n))});return d.when.apply(d,l).then(function(){return Array.prototype.slice.apply(arguments)})};a.prototype.getAllBulk=function c(o,n){var p=[],m=this;d.each(o,function(){if(!m.has(this)){p.push(this)}});if(p.length){var k=n(p);d.each(p,function(r,q){if(m.logEnabled){console.log("Bulk Cache missed",q)}m.put(q,k.then(function s(t){return t[r]}))})}function l(q,r){console.error("ERROR: bulk load failed",r);return this}return this.getAll(o,l)};a.prototype.put=function h(k,l){return this._access(k,true,l)};a.prototype.has=function j(k){var l=this._access(k);return l!=null};a.prototype.clear=function f(k){this._access(k,true,null)};a.prototype.clearAll=function g(){this.cache={}};return a});
;
define("apps/outcomes/outcomesModel",["jquery","apps/shared/models/core_deferred","apps/shared/models/promise_cache"],function(j,A,i){var I=false;var r=new i(["type","id"],I);var d=new i(["type","id"],I);function p(L,K,J){return{outcomeType:L,note:K,properties:J}}function B(N){var M={};function L(O){var P=O.type,Q=O.id;if(!M[P]){M[P]={}}if(!M[P][Q]){M[P][Q]=true;return false}else{return true}}var J=[];for(var K=0;K<N.length;++K){if(!L(N[K])){J.push(N[K])}else{console.log("warning: duplicate ed:",N[K])}}return J}function E(J){if(!J){throw new Error("Null entity descriptor")}return r.get(J,function(K){return A.getObject(K.type,K.id)})}function l(K){return r.getAllBulk(K,function J(L){var M=[];j.each(L,function(){M.push(this.type);M.push(this.id)});return A.runQuery(function(N){return N.jive.corev3.contents.getByEntityDescriptor({entityDescriptor:M.join(",")})})})}function f(J){return J}function e(J){return A.runQuery(function(K){return K.jive.corev3.outcomes.get({uri:J})})}function x(K,M,J){var N=K.join(","),L={filters:"outcomeType("+N+")",count:M,hidden:!!J};return A.runQuery(function(O){return O.jive.corev3.outcomes.get(L)})}function G(J){return E(J).then(function(K){return A.runQuery(K.getOutcomeTypes())}).then(f)}function q(J){return E(J).then(c)}function c(J){return d.get(J,function(K){return A.runQuery(K.getOutcomes()).then(f)})}function C(J){return E(J).then(function(K){return j.when(K,c(K))})}function b(J,L){if(!L){L="outcomes"}var K=d.getAllBulk(J,function(N){var M=[];j.each(N,function(){M.push(this.getOutcomes())});return A.runAll(M).then(A.squashBatchLists)});return K.then(function(M){for(var N=0;N<J.length;++N){J[N][L]=M[N]}j.each(J,function(){var O=this;j.each(O[L],function(Q,R){var P=R.outcomeType.name.toLowerCase();O[L][P]=R})});return J})}function n(J){return A.runQuery(J.getHistory())}function v(J){var K=0,M;if(J.replyCount){K=J.replyCount}var L={hierarchical:false,filter:"likeCount("+K+")",fields:"@most_liked"};if(J.getReplies){M=J.getReplies(L)}else{M=J.getComments(L)}return M}function y(K,J){var N=J.join(","),L={filter:"outcomeType("+N+")",hierarchical:false,fields:"@outcome_replies"},M;if(K.getReplies){M=K.getReplies(L)}else{M=K.getComments(L)}return M}function k(J,L){var K=[];j.each(J,function(){K.push(this[L].get())});return A.runAll(K).then(function(N){for(var M=0;M<J.length;++M){J[M][L]=N[M]}return J})}function t(J){if(J.properties&&J.properties.approvers){var K=J.properties.approvers.map(function(L){return function(M){return M.jive.corev3.people.get({uri:L,fields:"@summary"})}});return A.runAll(K).then(function(L){J.properties.alertedUsers=L;return J})}return j.when(J)}function h(J){if(J.properties&&J.properties.share){return A.runQuery(function(K){return K.jive.corev3.shares.get({uri:J.properties.share})}).then(function(K){J.properties.outcomeShare=K;return J})}return j.when(J)}function o(J,M,L,K){return E(J).then(function(N){return A.runQuery(N.createOutcome(p(M,L,K))).done(function(){d.clear(N)})}).then(function(N){return k([N],"user")}).then(function(N){return N[0]})}function D(J,M,N,L,K){return A.runQuery(M.createOutcome(p(N,L,K))).done(function(){E(J).done(function(O){d.clear(O)})}).then(function(O){return k([O],"user")}).then(function(O){return O[0]})}function u(J,M,N,L,K){return C(J).then(function(O,Q){var P=null;j.each(Q,function(){if(this.outcomeType.name==M.name){P=this}});if(!P){return z()}P.properties=j.extend(P.properties,K);return A.runQuery(P.update()).then(function(R){d.clear(O);return R})})}function F(J,K){return C(J).then(function(M,N){d.clear(M);var L=null;j.each(N,function(){if(this.outcomeType.name.toLowerCase()==K.name.toLowerCase()){L=this;return false}return true});if(!L){return z()}return A.runQuery(L.destroy())})}function m(K,J){return E(K).then(function(L){if(L.getChildOutcomeTypes){return A.runQuery(L.getChildOutcomeTypes({isCreate:!!J})).then(f)}else{return[]}})}function s(J){return j.when(E(J),m(J)).then(function(K,M){var L=[];j.each(M,function(){var N=this.name.toLowerCase(),O=y(K,[N]);L.push(A.runQuery(O).then(A.slurp).then(function(Q){var P={};P[N]=Q.length;return P}))});L.push(c(K));return j.when.apply(j,L)}).then(function(){var L={};if(arguments.length>1){L=j.extend.apply(j,[{}].concat(Array.prototype.slice.call(arguments,0,arguments.length-1)))}var K=arguments[arguments.length-1];j.each(K,function(){var M=this.outcomeType.name.toLowerCase();if(L[M]!=null){L[M]+=1}});return L})}function w(J){return E(J).then(function(K){return A.runQuery(v(K)).then(A.slurp)})}function g(K,J){return A.runQuery(y(K,J)).then(A.slurp)}function a(J){J=B(J);return l(J).then(function(K){var L=[];j.each(K,function(){L.push(this.getOutcomes())});return A.runAll(L)}).then(A.squashBatchLists).then(function(K){var L=[];j.each(K,function(M,N){L.push({ed:J[M],outcomes:N})});return L})}function H(){d.clearAll()}function z(){var K=j.Deferred();var L=jive.i18n.getMsg("outcomes.error.missing");var J={error:{code:409,message:L}};K.reject(J);return K.promise()}return{getOutcome:e,getOutcomeHistory:n,getOutcomeTypes:G,getDescendantOutcomeTypes:m,getOutcomes:q,getOutcomesForObj:c,getAllOutcomes:b,getFullUsers:k,getApproverUsers:t,getShare:h,createOutcome:o,createSuccessorOutcome:D,destroyOutcome:F,updateOutcome:u,getOutcomeCounts:s,getObject:E,getRepliesByOutcomeTypes:g,getMostLikedReplies:w,getOutcomesForEntities:a,clearCache:H,getUserOutcomes:x}});
;
define("apps/outcomes/shareModel",["jquery","apps/shared/models/core_deferred","apps/shared/models/promise_cache"],function(e,a,c){function b(g,h,f){return{content:{text:h,type:"text/html"},shared:g,participants:f}}function d(g,i,f){var h=b(g,i,f);return a.runQuery(function(j){return j.jive.corev3.shares.create(h)})}return{createShare:d}});
;
define("apps/outcomes/shareMain",["jquery","apps/shared/controllers/localexchange","apps/outcomes/shareModel","apps/outcomes/outcomesModel"],function(e,b,f,a){function d(g,h){if(!h.properties||!h.properties.message||!h.properties.approvers||!h.properties.shared){return}if(h.properties.share){return}f.createShare(h.resources.self.ref,h.properties.message,h.properties.approvers).done(function(i){return c(g,h,i)})}function c(g,j,i){var h=j.properties;h.message="";h.share=i.resources.self.ref;return a.updateOutcome(g,j.outcomeType,null,null,h)}b.addListener("outcome.created",d);b.addListener("outcome.updated",d);return{createShare:d}});
;
define("apps/outcomes/outcomesMain",["jquery","apps/shared/controllers/localexchange","apps/shared/controllers/switchboard","apps/outcomes/outcomesModel","apps/outcomes/shareMain"],function(i,c,m,f){function q(H,N,G,F,J,I,M){var L;var K;if(N.outcomeType){L=f.getOutcome(N.predecessor.url).then(function(O){return f.createSuccessorOutcome(H,O,N.outcomeType,J,I).done(function(){var P=O.outcomeType;K=O;m.emit("outcome.deleted",H,P);c.emit("outcome.deleted",H,P)})})}else{L=f.createOutcome(H,N,J,I)}L.done(function(O){var P=K&&O.outcomeType.id==K.outcomeType.id&&O.user.id!=K.user.id;m.emit("outcome.created",H,O,P);c.emit("outcome.created",H,O,P)}).fail(function(O){console.log("Failed to create",O);B(O);c.emit("outcome.refresh",[H])});if(M){M.proxy(L)}return L}function C(G,J,L,I,H,K){var F=f.destroyOutcome(G,J).done(function(){m.emit("outcome.deleted",G,J);c.emit("outcome.deleted",G,J)}).fail(function(M){console.log("Failed to delete",M);B(M);c.emit("outcome.removeBadge",G,J);c.emit("outcome.refreshSummary")});if(K){K.proxy(F)}return F}function o(G,K,M,J,I,H,L){var F=f.updateOutcome(G,K,M,J,H).done(function(N){if(!H){H.shared=N.properties.shared}m.emit("outcome.updated",G,N,H.shared);c.emit("outcome.updated",G,N,H.shared)}).fail(function(N){console.log("Failed to update",N);B(N);c.emit("outcome.removeBadge",G,K);c.emit("outcome.refreshSummary")});if(L){L.proxy(F)}return F}function A(F){f.getObject(F).done(function(G){f.getOutcomeCounts(F).done(function(H){f.getMostLikedReplies(F).done(function(I){c.emit("outcome.summary",F,H,I,G)})})})}function r(F,G){G.proxy(f.getOutcomes(F))}function n(F,G){G.proxy(f.getOutcomeHistory(F))}function a(F,G){G.proxy(f.getObject(F))}function y(F,I,H){var G;f.getObject(F).then(function(J){G=J.subject;return i.when(f.getRepliesByOutcomeTypes(J,[I]),f.getOutcomesForObj(J),J)}).then(function(M,J,K){for(var L=0;L<J.length;++L){if(J[L].outcomeType.name.toLowerCase()==I){M.unshift(K)}}return f.getFullUsers(M,"author")}).then(function(J){return f.getAllOutcomes(J,"outcomes")}).done(function(J){c.emit("outcome.rolledup",I,J,H,G)})}function s(H,G,F){f.getFullUsers(H,"author").done(function(I){c.emit("mostLiked.rolledup",I,G,F)})}function g(F){c.emitP("outcome.clearBadges",F).then(function(){f.getOutcomesForEntities(F).done(function(G){i.each(G,function(){var H=this.ed;i.each(this.outcomes,function(){c.emit("outcome.display",H,this)})})})})}function t(F,G){G.proxy(f.getObject(F).then(function(H){var I=[];if(H.destroy){I.push(new d(H,"delete",F))}if(H.update){I.push(new d(H,"edit",F))}return I}))}function k(F,G){G.proxy(f.getDescendantOutcomeTypes(F))}function b(F,G){G.proxy(f.getDescendantOutcomeTypes(F,true))}function j(F,G){G.proxy(i.when(f.getOutcomeTypes(F),f.getOutcomes(F)).then(function(I,J){var H=[];i.each(I,function(){H.push(new d(this,"post",F))});i.each(J,function(){if(this.destroy){H.push(new d(this.outcomeType,"delete",F))}else{H.push(new d(this.outcomeType,"get",F))}if(this.update){H.push(new d(this.outcomeType,"put",F))}});return H}))}function h(F,G){G.proxy(f.getOutcomeTypes(F).then(function(I){var H=[];i.each(I,function(){H.push(new d(this,"post",F))});return H}))}function x(G){var F=[];if(G.destroy){F.push(new d(G.outcomeType,"delete",null))}if(G.createOutcome&&G.successorOutcomeTypes){i.each(G.successorOutcomeTypes,function(){F.push(new d(this,"post",G))})}return new i.Deferred().resolve(F)}function z(F,G){return G.proxy(f.getOutcome(F).then(x))}function p(F){return f.getApproverUsers(F).then(function(G){return f.getShare(G)})}function l(F,G){G.proxy(f.getOutcome(F).then(function(H){return i.when(p(H),x(H))}))}function u(F,G){G.proxy(f.getOutcome(F).then(function(H){return f.getApproverUsers(H)}))}function E(F,G){G.proxy(f.getObject(F).then(function(H){return H.subject}))}function w(F){F.proxy(f.getUserOutcomes(["pending"],2,true))}function v(F){c.emit("outcome.refreshSummary")}function D(){f.clearCache()}function e(F,G){c.emit("outcome.display",F,G);c.emit("outcome.refreshSummary")}m.addListener("outcome.created",e);m.addListener("outcome.updated",function(F,G){c.emit("outcome.removeBadge",F,G.outcomeType);c.emit("outcome.display",F,G)});m.addListener("outcome.deleted",function(F,G){c.emit("outcome.removeBadge",F,G);c.emit("outcome.refreshSummary")});m.addListener("acclaim.recorded",function(){c.emit("outcome.refreshSummary")});function B(G){if(G&&G.error&&G.error.message){var F=G.error.code&&G.error.code==404?jive.i18n.getMsg("outcomes.error.missing"):G.error.message;$j("<p>"+F+"</p>").message({style:"error"})}else{$j(jive.error.rest.soy.errorSaving({href:window.location})).message({showClose:true,style:"error"})}c.emit("outcome.resync")}function d(G,H,F){this.subject=G;this.verb=H;this.context=F}c.addListener("outcome.post",q);c.addListener("outcome.delete",C);c.addListener("outcome.put",o);c.addListener("outcome.summarize",A);c.addListener("outcome.get",r);c.addListener("outcome.getHistory",n);c.addListener("outcome.getContentObject",a);c.addListener("outcome.refresh",g);c.addListener("outcome.rollup",y);c.addListener("outcome.rollupMostLiked",s);c.addListener("outcome.getOutcomeActions",j);c.addListener("outcome.getOutcomeCreateActions",h);c.addListener("outcome.prepareForBadgePopup",l);c.addListener("outcome.prepareOutcomeDetails",u);c.addListener("outcome.prepareForShareActionPopup",E);c.addListener("outcome.prepareActionTooltip",w);c.addListener("outcome.getOutcomeUrlActions",z);c.addListener("outcome.getContentObjectActions",t);c.addListener("outcome.getDescendantOutcomeTypes",k);c.addListener("outcome.getDescendantOutcomeTypesForCreate",b);c.addListener("commentDeleted",v);c.addListener("outcome.clearCache",D);return{create:q,summarize:A,history:history,refresh:g,rollup:y,rollupMostLiked:s}});
;
define("apps/outcomes/replyOutcomeView",["jquery","apps/shared/controllers/localexchange","apps/outcomes/outcomesMain"],function(e,b){function a(g){g.preventDefault();var h=e(this).closest(".js-reply-outcome-action-container");h.find("a.js-reply-outcome-button").show();h.find(".js-reply-outcome-badge-container").hide().children().remove();h.closest(".jive-js-addReply").find(".js-outcome-attachment").removeData("outcomeType").val("")}function f(i,g){g.find("a.js-reply-outcome-button").hide();var h=jive.CommentApp.soy.outcomeAttachment({outcomeType:i});g.find(".js-reply-outcome-badge-container").show().html(h);g.find(".js-remove-outcome").on("click",a);g.find(".js-outcome-attachment").data("outcomeType",i).val(i.name.toLowerCase())}function c(g){return b.emitP("outcome.getDescendantOutcomeTypesForCreate",g)}function d(g,h){return c(h).then(function(i){if(i.length>0){g.find(".js-reply-outcome-action-container").show();g.find(".js-reply-outcome-button").on("click",function(k){k.preventDefault();var l=[];e.each(i,function(m,n){l.push({labelSuffix:n.name.toLowerCase()+".post",actionData:JSON.stringify(n),event:"attachOutcome"})});var j={context:e(this),returnPopover:true};e(jive.outcomes.action.actionMenu({outcomes:l,actions:[]})).on("click","a.js-actionItem",function(n){var o=e(this);var m=o.data("actionData");f(m,g);n.preventDefault();j.closeFunc()}).popover(j)})}})}return d});
;
jive.namespace("DiscussionApp");define("apps/discussion_app/views/discussion_list_view",["jquery","apps/outcomes/replyOutcomeView","apps/shared/controllers/localexchange"],function(c,b,a){jive.DiscussionApp.DiscussionListView=function(v,g){jive.conc.observable(this);var m=this;var e,s,f=this,r=g.i18n,B=0,D,q=1,x=!g.isFinalized||window.location.hash.length>0;function F(){if(window.location.hash){c.scrollTo("a[name='"+window.location.hash.substring(1)+"']")}a.removeListener("heightChanged",F)}a.addListener("heightChanged",F);a.addListener("outcome.expandCollapsedComments",function(){x=true;y()});a.addListener("outcome.collapseComments",function(){x=false;y()});this._getValues=function(){var M={};e.find("[name='mobileEditor'],[name='containerType'],[name='container'],[name='thread'],[name='reply'],[name='message'],[name='postedFromGUIEditor'],[name='subject'],[name^='message.post'],[name='inlinePost'],[name='imageFile']").each(function(){var O=c(this).attr("name");if((O in M)){var N=M[O];M[O]=[];if(c.isArray(N)){c.each(N,function(P,Q){M[O].push(Q)})}else{M[O].push(N)}M[O].push(c(this).val())}else{M[O]=c(this).val()}});var L=e.find("[name='ansQuestion']:checked");if(L.length>0){M.ansQuestion=L.val()}M.outcome=e.find(".js-outcome-attachment").data("outcomeType");return c.extend(M,{body:s.getHTML()})};function K(){return c("<div></div>").html(c("#rte-template").html())}function A(N,Q){if(s){console.log("reusing RTE",s);s.setHTML("");s.focus()}else{var R="wysiwygtext"+q;++q;N.append(K());N.find("textarea").attr("id",R);var M=new jive.rte.EntitlementService({objectID:g.resourceID,objectType:g.resourceType,entitlement:"VIEW"});var P=new jive.rte.ImageService({objectId:-1,objectType:-1,containerId:g.containerID,containerType:g.containerType});var O=new jive.rte.FormService({$form:c("#"+R).closest("form"),formSubmitHandler:function(){j();var W=c.ajaxSettings.traditional;c.ajaxSettings.traditional=true;var X=c("#reply-author");var V=X.val();var U=c("#comment-email");var T=U.val();var Y=m._getValues();if(X.length>0&&c.trim(V)===""){c("<p/>",{text:jive.DiscussionApp.soy.replyErrorMessage({key:"forum.thrd.name_required.text"})}).message({style:"error"});return false}else{if(U.length>0&&c.trim(T)===""){c("<p/>",{text:jive.DiscussionApp.soy.replyErrorMessage({key:"forum.thrd.email_required.text"})}).message({style:"error"});return false}else{if(c.trim(Y.body)===""){c("<p/>",{text:jive.DiscussionApp.soy.replyErrorMessage({key:"post.err.pls_enter_body.text"})}).message({style:"error"});return false}else{Y=c.extend(Y,{name:V,email:T})}}}m._formWaitingView.disableForm();f.emit("saveDiscussion",Y,function(){m._formWaitingView.enableForm();c.ajaxSettings.traditional=W});return false}});var L=c("#reply-author").length>0;var S=c.extend({$element:c("#"+R),isEditing:false,minHeight:242,pinToolbar:false,onReady:function(){if(g.rteOptions.onReady){g.rteOptions.onReady()}jive.conc.nextTick(function(){s.focus()});if(!L){var T={selector:e,objectType:105,draftObjectType:g.resourceType,draftObjectID:g.resourceID,editorId:R,pushStateEnabled:false};new jive.draft.Main(T)}},services:{imageService:P,formService:O,entitlementService:M}},g.rteOptions);s=new jive.rte.RTEWrap(S);e=S.$element.parents("form");e.find(".jive-form-button-cancel").click(function(){w();s.destroy();s=null});h(Q)}e.find("[name=message]").val(Q.parentDiscussionID);b(N.closest(".jive-js-addReply"),{type:g.resourceType,id:g.resourceID});f.emit("formReady",{discussionId:Q.resourceID,parentMessageId:Q.parentDiscussionID,isReply:Q.isReply})}function h(L){m._advEditorLnk=L.advEditorLnk;H().click(function(){d();return false})}function H(){return D.parent().find(".advEditor")}function d(){var L=s.getHTML();if(L!=null&&L.length>0){L="&unsanitaryBody="+encodeURIComponent(L)}m._formWaitingView.disableForm();jive.util.createAndSubmitDynamicForm({url:m._advEditorLnk+L,method:"post"})}function E(L){w();x=true;var M=y();var O=$def(window._jive_current_user)&&(window._jive_current_user.ID==L.userid)?window._jive_current_user.username:L.username;L.setQuotedMsg(O,r,L.isAnonymous);var N=c.extend({parentDiscussionID:L.messageID,advEditorLnk:L.advEditorLnk,isReply:L.isReply,replySubject:L.replySubject,userName:L.username},g);M.then(function(){var P=t(L);A(P,N)})}function J(M){var L=c(M).closest(".jive-thread-message, .j-thread-post, #jive-thread-reply-footer");if(L.length>0){return new jive.DiscussionApp.DiscussionView(L)}else{return null}}function u(){c(".jive-thread-reply-hidden").closest(".reply").css("background-position","left -55px");y();c("#jive-unroll-replies").off("click").on("click",function(L){L.preventDefault();x=true;y()})}function p(){D.find("a.discussionAdd").live("click",function(){var L=J(this);E(L);return false});u()}function l(L){D.find(".jive-js-addReply #post-error-table > #post-error-subject").html(L).show().parent().slideDown()}function C(){l(jive.i18n.sub(r.globalLoginRequired,'<a href="'+encodeURI(window.location).replace(/#.*$/,"")+'">',"</a>"))}function j(){D.find(".jive-js-addReply #post-error-table").slideUp().find("#post-error-subject").html("").hide()}function i(M,L){c("#success-moderation-edit").html('<div><span class="jive-icon-med jive-icon-warn"></span>'+M+"</div>").fadeIn("normal",function(){if(L){c.scrollTo(c("#success-moderation-edit"),"slow",{offset:{top:-20,left:0}})}})}function o(){c("#success-moderation-edit").hide()}function I(L){var N=!L.isReply?D.find("ul.jive-discussion-replies:first > li:last"):L.getDOMElement().closest("li.reply");var O=true;if(N.length===0&&!L.isReply){N=c('<ul class="jive-discussion-replies jive-discussion-flat jive-discussion-indent-0"/>');D.append(N);O=false}var M;if(g.isThreaded&&L.isReply){M=N.find("ul.jive-discussion-replies:first > li:last");if(M.length==0){M=c('<ul class="jive-discussion-replies jive-discussion-flat jive-discussion-indent-1"/>');N.append(M);return M}else{return M.parent()}}else{M=O?N.parent():N;return M}}function t(L){var N=D.find(".jive-js-addReply");if(N.length>0){N.remove();if(s){s.destroy();s=null}}N=c(jive.DiscussionApp.soy.renderReply({userName:L.username,messageID:L.messageID,i18n:r,anonymous:g.isAnonymous,moderated:g.isModerated}));I(L).append(N);var M=L.indent();c(".addReply").css("margin-left",-M+"px");m._formWaitingView=new jive.shared.FormWaitingView(D.find(".jive-js-addReply"),{i18n:g.i18n,containerPadding:M,bgCssClass:"jive-form-waiting-disable-bg-discusssions"});N.fadeIn("fast");c.scrollTo(N,"slow",{offset:{top:-40,left:0}});return N.find(".jive-discussion-post")}function w(){var L=D.find(".jive-js-addReply");var M=L.parent();L.fadeOut("fast",function(){if(M.children().length==0){M.hide()}})}function G(M){s.destroy();s=null;var L=D.find(".jive-content-rating").detach();L.find("script").remove();c.ajax({url:_jive_base_url+"/inline-message.jspa?message="+M.id,async:false,success:function(N){D.closest(".j-column-wrap-l").replaceWith(c(N));D=c("#jive-thread-messages-container");jive.localexchange.emit("renderedContent",D)}});D.find(".jive-content-rating").replaceWith(L);u()}function k(M){M=M||c("<p>").html(g.i18n.postSuccessText);var L=B<=0;i(M.html(),L);B+=1}function z(){x=true;y().then(function(){c("a.localScroll").first().click()})}function n(N){var M=c("#thread-message-"+N+", .js-tlo.js-ed-1-"+N).first(),L=null;if(M.length){L=new jive.DiscussionApp.DiscussionView(M)}E(L)}function y(){if(!!window.location.hash){x=true}if(x){if($j("#jive-rolled-up-replies").is(":visible")){$j("#jive-rolled-up-replies").fadeOut(150,function(){$j("#jive-replies").fadeIn(200)})}}else{if(!$j("#jive-rolled-up-replies").is(":visible")){$j("#jive-replies").fadeOut(200,function(){$j("#jive-rolled-up-replies").fadeIn(150)})}}return c("#jive-rolled-up-replies, #jive-replies").promise()}this.displayError=l;this.displayLoginError=C;this.displaySuccess=i;this.hideSuccess=o;this.scrollToLatestMsg=z;this.redisplayReplies=G;this.displayModeratedMessage=k;this.createReplyTo=n;c(document).ready(function(){D=c(v);p()})};return jive.DiscussionApp.DiscussionListView});
;
// This file was automatically generated from discussions-question.soy.
// Please don't edit this file by hand.

goog.provide('jive.discussions.soy.qCorrectAnswer');
goog.provide('jive.discussions.soy.qDisplayInlineAnswers');
goog.provide('jive.discussions.soy.qDisplayInlineCorrectAnswer');
goog.provide('jive.discussions.soy.qDisplayQuestionStateMessage');
goog.provide('jive.discussions.soy.qMarkAsCorrect');
goog.provide('jive.discussions.soy.qQuestionAssumedAnswered');
goog.provide('jive.discussions.soy.qQuestionNotAnswered');
goog.provide('jive.discussions.soy.qQuestionResolved');
goog.provide('jive.discussions.soy.qUnmarkAsCorrect');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.shared.displayutil.avatar');
goog.require('jive.shared.displayutil.userDisplayNameLink');


jive.discussions.soy.qDisplayQuestionStateMessage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.question.questionState == opt_data.questionStateEnum.open) {
    jive.discussions.soy.qQuestionNotAnswered(opt_data, output);
  } else if (opt_data.question.questionState == opt_data.questionStateEnum.assumed_resolved) {
    jive.discussions.soy.qQuestionAssumedAnswered(opt_data, output);
  } else if (opt_data.question.questionState == opt_data.questionStateEnum.resolved) {
    jive.discussions.soy.qQuestionResolved(opt_data, output);
  }
  return opt_sb ? '' : output.toString();
};


jive.discussions.soy.qQuestionNotAnswered = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<p class="jive-answer-type jive-answer-type-notanswered font-color-meta" style="">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(opt_data.i18n.questionNotAnswered),[new soydata.VERY_UNSAFE.ordainSanitizedHtml('<strong class="font-color-danger">'),new soydata.VERY_UNSAFE.ordainSanitizedHtml('</strong>')])), (opt_data.question.displayMarkAsAssumedAnswered) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(opt_data.i18n.markQuestionAsAssumedAnswered),[new soydata.VERY_UNSAFE.ordainSanitizedHtml('<em style=""><a href="#">'),opt_data.i18n.leftParen,opt_data.i18n.rightParen,new soydata.VERY_UNSAFE.ordainSanitizedHtml('</a></em>')])) : '', '</p>');
  return opt_sb ? '' : output.toString();
};


jive.discussions.soy.qQuestionAssumedAnswered = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<p class="jive-answer-type jive-answer-type-assumedanswered font-color-meta" style="">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(opt_data.i18n.questionAssumedAnswered),[new soydata.VERY_UNSAFE.ordainSanitizedHtml('<strong>'),new soydata.VERY_UNSAFE.ordainSanitizedHtml('</strong>')])), '</p>');
  return opt_sb ? '' : output.toString();
};


jive.discussions.soy.qQuestionResolved = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<p class="jive-answer-type jive-answer-type-answered font-color-meta" style="">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(opt_data.i18n.questionAnswered),[new soydata.VERY_UNSAFE.ordainSanitizedHtml('<strong class="font-color-okay">'),new soydata.VERY_UNSAFE.ordainSanitizedHtml('</strong>')])), '</p>');
  return opt_sb ? '' : output.toString();
};


jive.discussions.soy.qMarkAsCorrect = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.question.correctScenarioEnabled) ? '<div class="jive-thread-reply-btn-correct"><a href="#"><span class="j-correct-btn-star j-ui-elem"></span>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(opt_data.i18n.correctAnswer),[])) + '</a></div>' : '');
  return opt_sb ? '' : output.toString();
};


jive.discussions.soy.qUnmarkAsCorrect = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<!-- Unmark as correct --><div class="jive-thread-reply-btn-correct-unmark jive-reply-unmark', (opt_data.question.bridged) ? '-bridged' : '', '" style="display: inline-block;"><a href="#" class="font-color-normal">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(opt_data.i18n.unmarkAsCorrectAnswer),[])), '</a></div>');
  return opt_sb ? '' : output.toString();
};


jive.discussions.soy.qCorrectAnswer = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="thisCorrect" style=""><span class="jive-icon-med jive-icon-discussion-okay"></span><span class="jive-thread-reply-message-correct-label font-color-okay">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(opt_data.i18n.correctAnswer),[])), '</span></span>');
  return opt_sb ? '' : output.toString();
};


jive.discussions.soy.qDisplayInlineAnswers = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-answer-rollup"><!-- Embedded Correct Answer -->');
  if (opt_data.question.questionState == opt_data.questionStateEnum.resolved && opt_data.question.correctAnswer) {
    jive.discussions.soy.qDisplayInlineCorrectAnswer(opt_data, output);
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


jive.discussions.soy.qDisplayInlineCorrectAnswer = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-inline-correct-answer" class="j-rc3"><header class="j-author-block"><span class="j-avatar-container">');
  jive.shared.displayutil.avatar(soy.$$augmentMap(opt_data.question.correctAnswer.user, {size: 32}), output);
  output.append('</span><div class="j-author-info"><strong class="font-color-okay j-line1">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(opt_data.i18n.correctAnswer),[])), ' </strong><span class="font-color-meta j-line2">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(opt_data.i18n.byWord),[])), ' ');
  jive.shared.displayutil.userDisplayNameLink(opt_data.question.correctAnswer.user, output);
  output.append(' ', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(opt_data.i18n.onWord),[])), ' ', soy.$$escapeHtml(opt_data.question.correctAnswer.modificationDate), '</span></div></header><section>', soy.$$filterNoAutoescape(opt_data.question.correctAnswerHtml), '</section><footer><strong><a href="', (opt_data.question.correctAnswer.useFullURL) ? soy.$$escapeHtml(opt_data.question.correctAnswer.url) : '#' + soy.$$escapeHtml(opt_data.question.correctAnswer.ID), '" class="jive-inline-correct-answer-context-link ', (! opt_data.question.correctAnswer.useFullURL) ? 'localScroll' : '', '"><span class="jive-icon-sml jive-icon-arrow-generic-down"></span>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(opt_data.i18n.seeAnswerInContext),[])), '</a></strong></footer></div>');
  return opt_sb ? '' : output.toString();
};

;
jive.namespace("DiscussionApp");jive.DiscussionApp.QuestionView=function(g,l,o){jive.conc.observable(this);var h=this;var m;var a={open:"open",resolved:"resolved",assumed_resolved:"assumed_resolved"};function j(p){c(p);f(p);k(p);if($j.browser.msie&&$j.browser.version<7){$j("#jive-thread-messages-container").hide().show()}}function k(p){$j(".js-thread-post-wrapper").each(function(){b($j(this),p)})}function b(p,q){var s=$j(p).find("a:first").attr("name");var r=parseInt(s,10);n(p,r,q);e($j(p).find("section"),r,q)}function e(u,s,p){if(p.canManageQuestionState){var r=$j(u).closest(".j-thread-post").find("header");var q=r.find(".j-dotted-star");var t=$j(u).find(".jive-thread-reply-btn");if(r.find(".j-dotted-star").length==0){r.append('<span class="j-dotted-star j-ui-elem"/>')}if(t.length==0){$j(u.append($j("<div>").addClass("jive-thread-reply-btn")));t=$j(u).find(".jive-thread-reply-btn")}t.empty();q.unbind();if(p.correctAnswer&&s==p.correctAnswer.ID){t.append(jive.discussions.soy.qUnmarkAsCorrect({question:p,i18n:o}));t.find(".jive-thread-reply-btn-correct-unmark").click(function(){l.unMarkAsCorrect(s,h.renderAll);return false})}else{if(p.questionState!="resolved"){t.append(jive.discussions.soy.qMarkAsCorrect({question:p,i18n:o}));t.find(".jive-thread-reply-btn-correct").click(function(){l.markAsCorrect(s,function(v){h.renderAll(v);jive.dispatcher.dispatch("trial.updatePercentComplete")});return false})}}}}function n(p,r,q){var s=$j(p).closest(".js-thread-post-wrapper");if(q.correctAnswer&&r==q.correctAnswer.ID){if(!s.is(".j-correct")){s.addClass("j-correct");$j(p).find("header h6").prepend(jive.discussions.soy.qCorrectAnswer({question:q,i18n:o}));if($j(p).find(".j-correct-star").length<1){$j(p).find("header").append('<a class="j-star j-correct-star j-ui-elem"></a>');$j(p).find(".j-star").addClass("popped")}}}else{s.removeClass("j-correct");s.find(".thisCorrect").remove();s.find(".j-star").remove()}}function c(p){if(p.questionState=="open"){$j(".jive-answer-type-answered").remove();$j(".jive-answer-type-assumedanswered").remove()}else{if(p.questionState=="assumedResolved"){$j(".jive-answer-type-answered").remove();$j(".jive-answer-type-notanswered").remove()}else{$j(".jive-answer-type-assumedanswered").remove();$j(".jive-answer-type-notanswered").remove()}}$j(".js-original-header h1").after(jive.discussions.soy.qDisplayQuestionStateMessage({question:p,questionStateEnum:a,i18n:o}));if(p.questionState=="open"){$j(".jive-answer-type-notanswered").find("em").find("a").click(function(){l.markAssumedAnswered(h.renderQuestionStateMessage)})}}function f(p){$j("div.j-answer-rollup").remove();if(!p.threaded){d(p)}var q=$j(jive.discussions.soy.qDisplayInlineAnswers({question:p,questionStateEnum:a,i18n:o,currentUserPartner:_jive_current_user.partner}));$j(".j-original-message").append(q);jive.localexchange.emit("renderedContent",q)}function d(p){if(p.correctAnswer&&!i(p.correctAnswer.ID)){p.correctAnswer.useFullURL=true}}function i(p){return($j("a[name='"+p+"']").length>0)}this.renderAll=j;this.renderInlineAnswers=f;this.renderQuestionStateMessage=c;this.renderResponses=k;this.renderReply=b;this.renderAnswerButtons=e;this.renderReplyDetails=n};define("apps/discussion_app/views/question_view",function(){return jive.DiscussionApp.QuestionView});
;
jive.namespace("DiscussionApp");define("apps/discussion_app/main",["apps/discussion_app/views/discussion_list_view"],function(){jive.DiscussionApp.Main=function(o){var l=o.resourceID,c=o.resourceType,j=o.resourceVersionID,g=o.listAction,k=o.isModerated,f=o.isThreaded,e=o.sort||"datedesc",n=o.i18n,a,b,i,d,m,h="#jive-thread-messages-container";a=new jive.DiscussionApp.DiscussionRestSource(o);b=new jive.DiscussionApp.DiscussionListView(h,o);m=new jive.Modalizer.Main({});jive.localexchange.addListener("reply.message.edit",function(p){window.location=o.editAction+"?id="+p.id}).addListener("reply.message.delete",function(q,s,t,p){var r=o.deleteAction+"&message="+q.id;m.modalize(r,p)}).addListener("reply.message.create",function(p){b.createReplyTo(p.id)});b.addListener("saveDiscussion",function(t,q){var r=new jive.DiscussionApp.Discussion(t),p=this,s=t.outcome;a.createMessage({forumThreadID:r.thread,ID:r.message,subject:r.subject,body:r.body,name:r.name,email:r.email}).addCallback(function(w){b.redisplayReplies(w.content);if(i){i.getQuestion(d.renderAll)}if(s){jive.localexchange.emit("outcome.doAction","outcome.post",{type:w.content.objectType,id:w.content.id},s,$j())}b.scrollToLatestMsg();var x=$j("div#jive-thread-reply-footer");var u=$j("a#jive-link-thread-following");var v=$j("a#jive-link-thread-startFollowing");if(x.exists()){setTimeout(function(){jive.Accessibility.focusIn(x)},100)}else{if(u.exists()){setTimeout(function(){u.focus()},100)}else{if(v.exists()){setTimeout(function(){v.focus()},100)}}}if(w.moderated){b.displayModeratedMessage()}}).addErrback(function(v,u){b.displayError(v);b._formWaitingView.enableForm()})});b.addListener("formReady",function(){});if(o.question){i=new jive.DiscussionApp.QuestionSource(l);d=new jive.DiscussionApp.QuestionView(l,i,n);$j(document).ready(function(){i.getQuestion(d.renderAll)})}$j(document).ready(function(){require(["jive.rte"],$j.noop)});this.addDiscussionListViewListener=function(p,q){b.addListener(p,q)}};return jive.DiscussionApp.Main});
;
// This file was automatically generated from headerBadges.soy.
// Please don't edit this file by hand.

goog.provide('jive.outcomes.badge.headerBadge');
goog.provide('jive.outcomes.badge.headerBadgeActionLink');
goog.provide('jive.outcomes.badge.headerBadgeByline');
goog.provide('jive.outcomes.badge.headerBadgeContainer');
goog.provide('jive.outcomes.badge.headerBadgeOutdatedLink');
goog.provide('jive.outcomes.badge.headerBadgePopup');
goog.provide('jive.outcomes.badge.headerBadgeRaw');
goog.provide('jive.outcomes.badge.headerBadges');
goog.provide('jive.outcomes.badge.headerOutcomeBadge');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.shared.displayutil.userDisplayNameLink');


jive.outcomes.badge.headerBadgeOutdatedLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="j-outcomes-redirect">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('outcomes.badge.popup.outdated.link.meta'),[])), ' <a href="', soy.$$escapeHtml(opt_data.href), '">', soy.$$escapeHtml(opt_data.title), '</a></span>');
  return opt_sb ? '' : output.toString();
};


jive.outcomes.badge.headerBadgeContainer = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul class="js-outcome-badge-container js-outcome-badge-container-top j-outcome-badge-container-top j-outcome-badge-container js-ed-', soy.$$escapeHtml(opt_data.objectType), '-', soy.$$escapeHtml(opt_data.objectId), (opt_data.extraClasses) ? ' ' + soy.$$escapeHtml(opt_data.extraClasses) : '', '" data-object-type="', soy.$$escapeHtml(opt_data.objectType), '" data-object-id="', soy.$$escapeHtml(opt_data.objectId), '"', (opt_data.parentType) ? 'data-parent-object-type="' + soy.$$escapeHtml(opt_data.parentType) + '"' : '', (opt_data.parentID) ? 'data-parent-object-id="' + soy.$$escapeHtml(opt_data.parentID) + '"' : '', 'aria-label="', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('outcomes.badgeContainer.ariaLabel'),[])), '"', (opt_data.allowedOutcomeTypes) ? 'data-allowed-outcome-types="' + soy.$$escapeHtml(JSON.stringify(opt_data.allowedOutcomeTypes).replace(/</g, '\\u003C').replace(/>/g, '\\u003E').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029')) + '"' : '', 'aria-live="polite">');
  if (opt_data.outcomes) {
    jive.outcomes.badge.headerBadges(opt_data, output);
  }
  output.append('</ul>');
  return opt_sb ? '' : output.toString();
};


jive.outcomes.badge.headerBadges = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var outcomeList48 = opt_data.outcomes;
  var outcomeListLen48 = outcomeList48.length;
  for (var outcomeIndex48 = 0; outcomeIndex48 < outcomeListLen48; outcomeIndex48++) {
    var outcomeData48 = outcomeList48[outcomeIndex48];
    jive.outcomes.badge.headerOutcomeBadge({outcome: outcomeData48, embedded: opt_data.embedded}, output);
  }
  return opt_sb ? '' : output.toString();
};


jive.outcomes.badge.headerOutcomeBadge = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  jive.outcomes.badge.headerBadge({outcomeType: String(opt_data.outcome.outcomeType.name).toLowerCase(), embedded: opt_data.embedded}, output);
  return opt_sb ? '' : output.toString();
};


jive.outcomes.badge.headerBadge = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  jive.outcomes.badge.headerBadgeRaw(soy.$$augmentMap(opt_data, {tagName: 'li'}), output);
  return opt_sb ? '' : output.toString();
};


jive.outcomes.badge.headerBadgeRaw = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<', soy.$$escapeHtml(opt_data.tagName), ' class="js-outcome-badge js-outcome-badge-noclick js-outcome-type-', soy.$$escapeHtml(opt_data.outcomeType), ' j-outcome-type-', soy.$$escapeHtml(opt_data.outcomeType), (opt_data.extraClasses) ? ' ' + soy.$$escapeHtml(opt_data.extraClasses) : '', '" data-outcome-type="', soy.$$escapeHtml(opt_data.outcomeType), '"><span class="j-outcome-badge j-outcome-type-', soy.$$escapeHtml(opt_data.outcomeType), '">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('outcomes.badge.' + opt_data.outcomeType),[])), '</span></', soy.$$escapeHtml(opt_data.tagName), '>');
  return opt_sb ? '' : output.toString();
};


jive.outcomes.badge.headerBadgeByline = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="j-outcome-byline font-color-meta">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('outcomes.badge.popup.' + opt_data.outcomeTypeName),[])), ' ');
  jive.shared.displayutil.userDisplayNameLink(soy.$$augmentMap(opt_data.author, {anonymous: false}), output);
  output.append(' <span class="font-color-meta">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('outcomes.badge.popup.datePart'),[((opt_data.modifiedDate ? jive.model.DateUtil.parseISODateTime(opt_data.modifiedDate) : '') ? _jive_moment((parseFloat((opt_data.modifiedDate ? jive.model.DateUtil.parseISODateTime(opt_data.modifiedDate) : '')) ? parseFloat((opt_data.modifiedDate ? jive.model.DateUtil.parseISODateTime(opt_data.modifiedDate) : '')) : (opt_data.modifiedDate ? jive.model.DateUtil.parseISODateTime(opt_data.modifiedDate) : ''))).lang(_jive_locale.toLowerCase().replace('_','-')).format('lll') : '')])), '</span></span>');
  return opt_sb ? '' : output.toString();
};


jive.outcomes.badge.headerBadgePopup = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-outcome-badge-popup j-outcome-popup j-outcome-meta">');
  if (! (opt_data.props.url && opt_data.props.title)) {
    jive.outcomes.badge.headerBadgeByline(opt_data, output);
  }
  if (opt_data.props.url && opt_data.props.title) {
    jive.outcomes.badge.headerBadgeOutdatedLink({href: opt_data.props.url, title: opt_data.props.title}, output);
  }
  if (opt_data.props.url && opt_data.props.title) {
    jive.outcomes.badge.headerBadgeByline(opt_data, output);
  }
  if (opt_data.actions.length > 0) {
    var itemList104 = opt_data.actions;
    var itemListLen104 = itemList104.length;
    for (var itemIndex104 = 0; itemIndex104 < itemListLen104; itemIndex104++) {
      var itemData104 = itemList104[itemIndex104];
      output.append((! (itemIndex104 == 0)) ? '' : '');
      jive.outcomes.badge.headerBadgeActionLink(itemData104, output);
    }
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


jive.outcomes.badge.headerBadgeActionLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="j-outcome-modal-footer-link font-color-meta"><a class="j-outcome-modal-footer-link js-actionLink ', soy.$$escapeHtml(opt_data.extraClasses ? opt_data.extraClasses : ''), '"', (opt_data.actionData) ? 'data-action-data="' + soy.$$escapeHtml(opt_data.actionData) + '"' : '', (opt_data.event) ? 'data-event="' + soy.$$escapeHtml(opt_data.event) + '"' : '', 'href="#">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('outcomes.actionMenu.item.meta.' + opt_data.labelSuffix),[])), '</a></span>');
  return opt_sb ? '' : output.toString();
};

;
define("apps/outcomes/viewUtil",["jquery","apps/shared/controllers/localexchange"],function(g,i){var l=["finalized","outdated","official","decision","pending","resolved","success","helpful"];function c(q){var o=[];var r=false;for(var p=l.length-1;p>=0;--p){if(r){o.push(l[p])}else{if(l[p]===q){r=true}}}return o}function f(u,r){if(u===r){return 0}var t=u.name.toLowerCase(),o=r.name.toLowerCase(),p=t.localeCompare(o);if(p===0){return 0}for(var q=0;q<l.length;++q){var s=l[q];if(s==t){return -1}if(s==o){return 1}}return p}function b(){if(b.timeout){clearTimeout(b.timeout)}b.timeout=setTimeout(function(){b.timeout=null;i.emit("heightChanged")},250)}function j(q,p,o){this.labelSuffix=q;this.event=p;this.actionData=o}function a(o){return g.map(o,function(p){if(p.verb=="get"){return null}var r="outcome."+p.verb;var q;if(p.context){q={outcomeType:p.subject,predecessor:{url:p.context.resources.self.ref,outcomeType:p.context.outcomeType,shared:p.context.properties?p.context.properties.shared:false}}}else{q=p.subject}q=JSON.stringify(q);var s;if(p.context){s=p.context.outcomeType.name.toLowerCase()+"."}else{s=""}s+=p.subject.name.toLowerCase()+"."+p.verb;return new j(s,r,q)})}function d(s,r,q){var o=r.first();var p=null;while(o.length){p=null;s.each(function(){if(o.has(this).length){p=g(this);return false}return true});if(p){return p}o=o.parent()}if(!r||r.length==0){s.each(function(){if(g(this).data("outcome-type")==q){p=g(this);return false}return true});if(p){return p}}return g()}return{getEd:function k(p){var o=g(p);return{type:o.data("objectType"),id:o.data("objectId")}},getParentEd:function e(p){var o=g(p);return{type:o.data("parentObjectType"),id:o.data("parentObjectId")}},getContext:function n(p){var o=g(p);return o.data("context")},getContextMeta:function n(p){var o=g(p);return o.data("meta-context")},getRootCommunityName:function m(p){var o=g(p);return o.data("root-community")},placeItem:function h(q,t,s,r,p){var u=g();var o=g();q.each(function(){var y=g(this),x=y.children(":visible").length==0,v=g(t).clone(),w=c(s);if(x&&p){y.hide()}u=u.add(v);if(w!=null){var z=g();g.each(w,function(A,B){z=r(y,B);return z.length==0});if(z.length==0){y.prepend(v)}else{z.after(v)}}else{y.append(v)}if(p){y.slideDown(p)}if(x){o=o.add(y)}});if(o.length>0){o.promise().done(b)}return u},outcomeTypeComparator:f,buildLinkActions:a,nearest:d}});
;
// This file was automatically generated from history.soy.
// Please don't edit this file by hand.

goog.provide('jive.outcomes.history.item');
goog.provide('jive.outcomes.history.showLink');
goog.provide('jive.outcomes.history.showPopup');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.outcomes.badge.badgeRaw');
goog.require('jive.shared.displayutil.itemList');
goog.require('jive.shared.displayutil.userDisplayNameLink');


jive.outcomes.history.showLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a href="#" class="font-color-meta j-outcome-modal-footer-link j-outcome-history-link js-outcome-history-link">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('outcomes.history.link'),[])), '</a>');
  return opt_sb ? '' : output.toString();
};


jive.outcomes.history.showPopup = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-outcome-badge-popup j-outcome-popup j-pop-main" style="display: block;"><div class="j-outcome-history-items"><div class="j-outcome-history-title">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('outcomes.history.title'),[])), ' ', soy.$$escapeHtml(opt_data.subject), '</div>');
  if (opt_data.alertedNames) {
    output.append('<div class="j-outcome-approvers font-color-meta"><strong>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('outcomes.badge.popup.approversLabel'),[])), '</strong> ');
    jive.shared.displayutil.itemList({items: opt_data.alertedNames, expandable: true}, output);
    output.append('</div>');
  }
  var itemList21 = opt_data.items;
  var itemListLen21 = itemList21.length;
  for (var itemIndex21 = 0; itemIndex21 < itemListLen21; itemIndex21++) {
    var itemData21 = itemList21[itemIndex21];
    jive.outcomes.history.item({item: itemData21}, output);
  }
  output.append('</div><footer class="j-outcome-modal-footer j-pop-row j-last"><a href="#" class="js-outcome-done-button j-outcome-modal-footer-link">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('outcomes.history.done'),[])), '</a></footer></div>');
  return opt_sb ? '' : output.toString();
};


jive.outcomes.history.item = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-outcome-history-item">');
  if (opt_data.item.ownerChanged) {
    output.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('outcomes.history.ownerChanged'),[])), ' ');
  } else {
    jive.outcomes.badge.badgeRaw({outcomeType: opt_data.item.outcomeType.name, embedded: true, tagName: 'span'}, output);
    output.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('outcomes.history.marked'),[])), ' ');
  }
  output.append('<span class="j-outcome-reply-author">');
  jive.shared.displayutil.userDisplayNameLink(soy.$$augmentMap(opt_data.item.user, {anonymous: false}), output);
  output.append('</span> <span class="font-color-meta">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('outcomes.history.date'),[((opt_data.item.creationDate ? jive.model.DateUtil.parseISODateTime(opt_data.item.creationDate) : '') ? _jive_moment((parseFloat((opt_data.item.creationDate ? jive.model.DateUtil.parseISODateTime(opt_data.item.creationDate) : '')) ? parseFloat((opt_data.item.creationDate ? jive.model.DateUtil.parseISODateTime(opt_data.item.creationDate) : '')) : (opt_data.item.creationDate ? jive.model.DateUtil.parseISODateTime(opt_data.item.creationDate) : ''))).lang(_jive_locale.toLowerCase().replace('_','-')).format('lll') : '')])), '</span><p class="j-outcome-history-note">', soy.$$escapeHtml(opt_data.item.note), '</p><br></div>');
  return opt_sb ? '' : output.toString();
};

;
(function(c){var a=0;var b="__generated_id_";c.fn.id=function(d){if(!this.length){return""}var e=this.first();if(d){e.attr("id",d);return this}else{var f=e.attr("id");if(f){return f}else{d=b+a;++a;e.attr("id",d);return d}}}})(jQuery);
;
define("apps/outcomes/historyView",["jquery","apps/shared/controllers/localexchange","apps/shared/views/itemList","apps/outcomes/outcomesMain"],function(e,d,b){function g(j){if(j){j.preventDefault()}var i=e(this);var h=i.data("originalContext");if(!h){h=i}if(i.data("outcome")){a(h,i.data("outcome"),i.data("alertedNames"),i.data("targetEd"))}else{console.log("History link is missing an entity descriptor: ",i)}}function a(h,j,k,i){d.emitP("outcome.getHistory",j).then(function(l){d.emitP("outcome.getContentObject",i).then(function(n){var u=[];var m={};var s;var t;var q;l.forEach(function(v){q=v.user;if(t&&q.id!=t.id){u.push($j.extend(true,v,{ownerChanged:true}))}t=q;s=v.outcomeType;if(s.id!=m.id){u.push(v)}m=s});var o={items:u,alertedNames:k,subject:n.subject};var r=jive.outcomes.history.showPopup(o);var p=e(r).popover({context:h,onClose:function(){h.removeAttr("aria-owns")},hoverSelection:false});p.find(".js-outcome-done-button").on("click",function(v){p.trigger("close")});h.attr("aria-owns",p.id());d.emit("outcome.history.popoverDisplayed",j);b.bindHandlers(p)})})}function c(k,l,m,j,h){if(k.predecessorOutcome){var i=e(jive.outcomes.history.showLink());i.data("outcome",k);i.data("alertedNames",l);i.data("originalContext",h);i.data("targetEd",j);m.append(i);d.emit("outcome.history.linkDisplayed",k)}}function f(h,i){i.find(".js-outcome-history-link").safeRemove()}d.addListener("outcome.history.displayLink",c);d.addListener("outcome.history.removeLink",f);return{display:c,remove:f,clickHandler:g}});
;
// This file was automatically generated from summary.soy.
// Please don't edit this file by hand.

goog.provide('jive.outcomes.summary.avatar');
goog.provide('jive.outcomes.summary.detailsLinks');
goog.provide('jive.outcomes.summary.rollup');
goog.provide('jive.outcomes.summary.rollupReply');
goog.provide('jive.outcomes.summary.summaryContainer');
goog.provide('jive.outcomes.summary.summaryCount');
goog.provide('jive.outcomes.summary.textCountBadge');
goog.provide('jive.outcomes.summary.typeIdFromTypeName');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.outcomes.badge.badgeByline');
goog.require('jive.outcomes.badge.badgeRaw');
goog.require('jive.shared.displayutil.avatar');
goog.require('jive.shared.displayutil.userDisplayNameLink');


jive.outcomes.summary.summaryContainer = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul id="js-outcome-summary-container-', soy.$$escapeHtml(opt_data.objectType), '-', soy.$$escapeHtml(opt_data.objectId), '" class="js-outcome-summary-container j-outcome-summary-container js-ed-', soy.$$escapeHtml(opt_data.objectType), '-', soy.$$escapeHtml(opt_data.objectId), '" data-object-type="', soy.$$escapeHtml(opt_data.objectType), '" data-object-id="', soy.$$escapeHtml(opt_data.objectId), '" aria-label="', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('outcomes.summaryContainer.ariaLabel'),[])), '" role="group"></ul>');
  return opt_sb ? '' : output.toString();
};


jive.outcomes.summary.summaryCount = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="js-outcome-summary-count j-outcome-summary-count js-outcome-type-', soy.$$escapeHtml(opt_data.outcomeType), ' j-outcome-type-', soy.$$escapeHtml(opt_data.outcomeType), '" tabindex="0" role="button" aria-haspopup="true" data-outcome-type="', soy.$$escapeHtml(opt_data.outcomeType), '" data-count="', soy.$$escapeHtml(opt_data.count), '" aria-label="', soy.$$escapeHtml(opt_data.outcomeType), '"><a class="js-outcome-count-block j-outcome-count-block" href="#"><span class="j-outcome-count">', soy.$$escapeHtml(opt_data.count), '</span>');
  jive.outcomes.badge.badgeRaw({outcomeType: opt_data.outcomeType, embedded: true, tagName: 'span'}, output);
  output.append('</a></li>');
  return opt_sb ? '' : output.toString();
};


jive.outcomes.summary.rollup = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-outcome-rollup jive-modal-wide"><h3 class="j-outcome-rollup-title">');
  jive.outcomes.badge.badgeRaw({tagName: 'span', outcomeType: opt_data.outcomeType, embedded: true}, output);
  output.append('<span class="j-outcome-rollup-title-text"> ', soy.$$filterNoAutoescape(opt_data.tloTitle), '</span></h3><div class="j-outcome-rollup-replies">');
  var replyList47 = opt_data.replies;
  var replyListLen47 = replyList47.length;
  for (var replyIndex47 = 0; replyIndex47 < replyListLen47; replyIndex47++) {
    var replyData47 = replyList47[replyIndex47];
    jive.outcomes.summary.rollupReply({reply: replyData47, outcomeTypeName: opt_data.outcomeType}, output);
  }
  output.append('</div><div class="j-outcome-done-block j-rc5 j-rc-none-top"><a href="#" class="js-outcome-done-button">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('outcomes.summary.done'),[])), '</a></div></div>');
  return opt_sb ? '' : output.toString();
};


jive.outcomes.summary.avatar = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  jive.shared.displayutil.avatar(soy.$$augmentMap(opt_data.user, {enabled: opt_data.user.jive.enabled, partner: opt_data.user.jive.externalContributor, username: opt_data.user.jive.username, visible: opt_data.user.jive.visible, anonymous: false, prop: null, avatarID: 0, size: 32, hideTooltip: true}), output);
  return opt_sb ? '' : output.toString();
};


jive.outcomes.summary.rollupReply = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-outcome-badge-popup">');
  jive.outcomes.summary.detailsLinks({outcome: opt_data.reply.outcomes[opt_data.outcomeTypeName], contextUrl: opt_data.reply.resources.html.ref}, output);
  jive.outcomes.badge.badgeByline({outcomeTypeName: opt_data.outcomeTypeName, author: opt_data.reply.outcomes[opt_data.outcomeTypeName].user, modifiedDate: opt_data.reply.outcomes[opt_data.outcomeTypeName].updated}, output);
  output.append('<div class="j-outcome-details js-outcome-details" style="display:none;"></div></div><div class="j-outcome-rollup-reply"><div class="j-outcome-reply-avatar">');
  if (opt_data.reply.author) {
    jive.outcomes.summary.avatar({user: opt_data.reply.author}, output);
  } else {
    jive.shared.displayutil.avatar({anonymous: true, enabled: true, partner: false, username: 'guest', id: 0, ID: 0, displayName: '', visible: true, prop: null, avatarID: 0, size: 32}, output);
  }
  output.append('</div><div class="j-outcome-reply-box"><p class="j-outcome-reply-byline jive-comment-meta font-color-meta">');
  if (opt_data.reply.author) {
    jive.shared.displayutil.userDisplayNameLink(soy.$$augmentMap(opt_data.reply.author, {anonymous: false}), output);
  } else {
    jive.shared.displayutil.userDisplayNameLink({anonymous: true, enabled: true, username: 'guest', id: 0, displayName: '', visible: true}, output);
  }
  output.append(' <a href="', soy.$$escapeHtml(opt_data.reply.resources.html.ref), '" class="j-outcome-reply-date font-color-normal js-outcome-reply-incontext">', soy.$$escapeHtml(((opt_data.reply.updated ? jive.model.DateUtil.parseISODateTime(opt_data.reply.updated) : '') ? _jive_moment((parseFloat((opt_data.reply.updated ? jive.model.DateUtil.parseISODateTime(opt_data.reply.updated) : '')) ? parseFloat((opt_data.reply.updated ? jive.model.DateUtil.parseISODateTime(opt_data.reply.updated) : '')) : (opt_data.reply.updated ? jive.model.DateUtil.parseISODateTime(opt_data.reply.updated) : ''))).lang(_jive_locale.toLowerCase().replace('_','-')).format('lll') : '')), '<span class="j-in-context font-color-meta-light"> (', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('outcomes.summary.rollup.inContext'),[])), ')</span></a></p><div class="j-outcome-reply-body js-outcome-reply-body">', soy.$$filterNoAutoescape(opt_data.reply.content.text), '</div><div class="j-outcome-more js-outcome-more" style="display:none;"><a class="j-rc3 font-color-meta" href=\'#\'>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.more'),[])), '</a></div></div></div>');
  return opt_sb ? '' : output.toString();
};


jive.outcomes.summary.detailsLinks = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.outcome.note || opt_data.outcome.properties && opt_data.outcome.properties.approvers) ? '<div class="j-outcome-link-container"><a class="j-outcome-link-details js-outcome-link-details js-outcome-link" href="#" data-outcome-url="' + soy.$$escapeHtml(opt_data.outcome.resources.self.ref) + '">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('outcomes.summary.details'),[])) + '</a><a class="j-outcome-link-incontext js-outcome-link-incontext js-outcome-link" href="' + soy.$$escapeHtml(opt_data.contextUrl) + '" style="display:none;">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('outcomes.summary.rollup.inContext'),[])) + '</a></div>' : '');
  return opt_sb ? '' : output.toString();
};


jive.outcomes.summary.typeIdFromTypeName = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  switch (opt_data.typeName) {
    case 'document':
      output.append('102');
      break;
    case 'comment':
      output.append('105');
      break;
    case 'discussion':
      output.append('1');
      break;
    case 'message':
      output.append('2');
      break;
    case 'post':
      output.append('38');
      break;
    case 'update':
      output.append('1464927464');
      break;
    default:
      output.append('-1');
  }
  return opt_sb ? '' : output.toString();
};


jive.outcomes.summary.textCountBadge = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="j-outcome-count j-search-result-meta"> ', (opt_data.outcomeType != 'finalized' && opt_data.outcomeType != 'outdated') ? soy.$$escapeHtml(opt_data.count) : '', '</span> <span class="js-outcome-text-badge j-outcome-text-badge js-outcome-type-', soy.$$escapeHtml(opt_data.outcomeType), ' j-outcome-type-', soy.$$escapeHtml(opt_data.outcomeType), '" data-outcome-type="', soy.$$escapeHtml(opt_data.outcomeType), '">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('outcomes.badge.' + opt_data.outcomeType),[])), (opt_data.isLast != true) ? '<span class="j-search-result-meta">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.comma'),[])) + '</span>' : '', '</span>');
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from mostLiked.soy.
// Please don't edit this file by hand.

goog.provide('jive.outcomes.mostLiked.pseudoBadge');
goog.provide('jive.outcomes.mostLiked.reply');
goog.provide('jive.outcomes.mostLiked.rollup');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.outcomes.badge.badgeRaw');
goog.require('jive.outcomes.summary.avatar');
goog.require('jive.shared.displayutil.avatar');
goog.require('jive.shared.displayutil.userDisplayNameLink');


jive.outcomes.mostLiked.pseudoBadge = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="js-outcome-summary-count j-outcome-summary-count js-mostLiked j-most-liked" tabindex="0" role="button" aria-haspopup="true"><a class="js-outcome-count-block j-outcome-count-block" href="#">');
  jive.outcomes.badge.badgeRaw({outcomeType: 'mostLiked', embedded: true, tagName: 'span'}, output);
  output.append('</a></li>');
  return opt_sb ? '' : output.toString();
};


jive.outcomes.mostLiked.rollup = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-outcome-rollup jive-modal-wide"><h3 class="j-outcome-rollup-title">');
  jive.outcomes.badge.badgeRaw({outcomeType: 'mostLiked', embedded: true, tagName: 'span'}, output);
  output.append('<b>', soy.$$escapeHtml(opt_data.tloSubject), '</b></h3><div class="j-outcome-rollup-replies">');
  var replyList18 = opt_data.replies;
  var replyListLen18 = replyList18.length;
  for (var replyIndex18 = 0; replyIndex18 < replyListLen18; replyIndex18++) {
    var replyData18 = replyList18[replyIndex18];
    jive.outcomes.mostLiked.reply({reply: replyData18}, output);
  }
  output.append('</div><div class="j-outcome-done-block j-rc5 j-rc-none-top"><a href="#" class="js-outcome-done-button">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('outcomes.summary.done'),[])), '</a></div></div>');
  return opt_sb ? '' : output.toString();
};


jive.outcomes.mostLiked.reply = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-outcome-badge-popup"><div class="outcome-byline">', (opt_data.reply.likeCount == 1) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('outcomes.mostLiked.likes_singular'),[])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('outcomes.mostLiked.likes_plural'),[opt_data.reply.likeCount])), '</div></div><div class="j-outcome-rollup-reply"><div class="j-outcome-reply-avatar">');
  if (opt_data.reply.author) {
    jive.outcomes.summary.avatar({user: opt_data.reply.author}, output);
  } else {
    jive.shared.displayutil.avatar({anonymous: true, enabled: true, partner: false, username: 'guest', id: 0, ID: 0, displayName: '', visible: true, prop: null, avatarID: 0, size: 32}, output);
  }
  output.append('</div><div class="j-outcome-reply-box"><p class="j-outcome-reply-byline jive-comment-meta font-color-meta">');
  if (opt_data.reply.author) {
    jive.shared.displayutil.userDisplayNameLink(soy.$$augmentMap(opt_data.reply.author, {anonymous: false}), output);
  } else {
    jive.shared.displayutil.userDisplayNameLink({anonymous: true, enabled: true, username: 'guest', id: 0, displayName: '', visible: true}, output);
  }
  output.append(' <a href="', soy.$$escapeHtml(opt_data.reply.resources.html.ref), '" class="j-outcome-reply-date font-color-normal js-outcome-reply-incontext">', soy.$$escapeHtml(((opt_data.reply.updated ? jive.model.DateUtil.parseISODateTime(opt_data.reply.updated) : '') ? _jive_moment((parseFloat((opt_data.reply.updated ? jive.model.DateUtil.parseISODateTime(opt_data.reply.updated) : '')) ? parseFloat((opt_data.reply.updated ? jive.model.DateUtil.parseISODateTime(opt_data.reply.updated) : '')) : (opt_data.reply.updated ? jive.model.DateUtil.parseISODateTime(opt_data.reply.updated) : ''))).lang(_jive_locale.toLowerCase().replace('_','-')).format('lll') : '')), '<span class="j-in-context font-color-meta-light"> (', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('outcomes.summary.rollup.inContext'),[])), ')</span></a></p><div class="j-outcome-reply-body js-outcome-reply-body">', soy.$$filterNoAutoescape(opt_data.reply.content.text), '</div><div class="j-outcome-more js-outcome-more" style="display:none;"><a class="j-rc3 font-color-meta" href=\'#\'>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.more'),[])), '</a></div></div></div>');
  return opt_sb ? '' : output.toString();
};

;
define("apps/outcomes/mostLikedView",["jquery","apps/shared/controllers/localexchange","apps/outcomes/viewUtil","apps/outcomes/outcomesMain"],function(d,a,c){function f(g){return g.length>0}function b(j,i,g){if(f(i)){var h=d(jive.outcomes.mostLiked.pseudoBadge({}));j.find(".js-mostLiked").remove();j.append(h)}}function e(l,j,h){var k=jive.outcomes.mostLiked.rollup({replies:l,tloSubject:j});var i={context:h,returnPopover:true,hoverSelection:false,onClose:function(){h.removeAttr("aria-owns")}};var m=d(k).popover(i);h.attr("aria-owns",m.id());function g(o){var p=o.hasClass("j-js-expanded");if(!p){o.addClass("j-js-expanded")}var n=o.height();if(!p){o.removeClass("j-js-expanded")}return n}m.find(".js-outcome-reply-body").each(function(){var n=d(this);if(g(n)>150){n.next(".js-outcome-more").show()}});m.find(".js-outcome-more").on("click",function(n){d(this).hide().prev(".js-outcome-reply-body").addClass("j-js-expanded");n.preventDefault()});m.find(".js-outcome-done-button").on("click",function(n){i.closeFunc();n.preventDefault()});a.emit("renderedContent",m);a.emit("mostLiked.rollupDisplayed",l)}a.addListener("mostLiked.rolledup",e);a.addListener("mostLiked.badge",b);return{mostLikedRollup:e,mostLikedBadge:b}});
;
define("apps/outcomes/badgeHelper",["jquery"],function(f){var d=["outdated","official","finalized"];var a=false;function g(){a=true}function c(){a=false}function b(h){if(a&&d.indexOf(h)!=-1){return true}return false}function e(j,i){var h=j.outcomeType.name.toLowerCase();if(a&&d.indexOf(h)>-1){return jive.outcomes.badge.headerOutcomeBadge({outcome:j,customBadgeTemplate:i})}else{return jive.outcomes.badge.outcomeBadge({outcome:j,customBadgeTemplate:i})}}return{isHeaderBadge:b,getBadge:e,enableHeaderBadges:g,disableHeaderBadges:c}});
;
define("apps/outcomes/badgeView",["jquery","apps/shared/controllers/localexchange","apps/outcomes/viewUtil","apps/shared/views/itemList","apps/outcomes/badgeHelper","apps/outcomes/outcomesMain"],function(j,l,d,n,b){function i(s,r,t){return d.placeItem(s,r,t,function(v,u){return v.find(".js-outcome-badge.js-outcome-type-"+u)})}function m(s,v){var t=v.outcomeType.name.toLowerCase();var w=j(".js-outcome-badge-container.js-ed-"+s.type+"-"+s.id);var u=w.data("customBadgeTemplate");var r=b.getBadge(v,u);w=f(w,t);w=w.not(":has(.js-outcome-type-"+t+")");i(w,r,t).data("outcome",v.resources.self.ref).data("ed",s);if(b.isHeaderBadge(t)){c(w)}l.emit("outcome.displayed",s,v)}function e(s,t,v){var r=jive.outcomes.badge.fakeOutcomeBadge({outcomeTypeName:t});var u=j(".js-outcome-badge-container.js-ed-"+s.type+"-"+s.id);u=f(u,t);i(u.not(":has(.js-outcome-badge.js-outcome-type-"+t+")"),r,t);v.emitSuccess(u.find(".js-outcome-badge.js-outcome-type-"+t))}function g(r,t){var s=t.name.toLowerCase();var u=j(".js-outcome-badge-container.js-ed-"+r.type+"-"+r.id);u.find(".js-outcome-badge.js-outcome-type-"+s).safeRemove()}function q(s,r){j.each(s,function(){var t=this;var u=j(".js-outcome-badge-container.js-ed-"+t.type+"-"+t.id);u.find(".js-outcome-badge").safeRemove()});if(r){r.emitSuccess()}}function p(r){r=r||document;var s=[];j(".js-outcome-badge-container",r).not("[data-no-hydrate]").each(function(){s.push(d.getEd(this))});l.emit("outcome.refresh",s)}function o(r){if(r){r.preventDefault()}var s=j(this);if(s.data("outcome")&&s.data("ed")){k(s,s.data("ed"),s.data("outcome"))}else{console.log("badge is missing outcome or entity descriptor data: ",s)}}function h(u,t,s,r){this.labelSuffix=u;this.event=t;this.actionData=s;this.href=r}function c(t){var s=t.find("li");var r=$j(".js-outcome-badge-container-top > li > .j-outcome-badge-popup");if(!(r.length>0)){if(s.data("outcome")&&s.data("ed")){l.emitP("outcome.prepareForBadgePopup",s.data("outcome")).then(function(x,y){var w=d.buildLinkActions(y);var v={outcomeTypeName:x.outcomeType.name.toLowerCase(),author:x.user,modifiedDate:x.updated,actions:w,props:x.properties};v=a(x,v);var u=jive.outcomes.badge.headerBadgePopup(v);s.append(u);s.on("click",".js-actionLink",function(A){A.preventDefault();var B=j(this);var C=s.closest(".js-outcome-badge-container");var z=d.getEd(C);l.emit("outcome.doAction",B.data("event"),z,B.data("actionData"),C)})})}}}function a(s,r){if(s.note){r.comment=s.note}if(s.properties){var u=[];if(s.properties.alertedUsers){j.each(s.properties.alertedUsers,function(w,v){u.push(v.displayName)});r.alertedNames=u}if(s.outcomeType.name=="pending"){if(u.length==0){u.push(s.user.displayName);r.alertedNames=u}if(s.properties.outcomeShare){if(document.URL!=s.properties.outcomeShare.resources.html.ref){var t=s.outcomeType.name.toLowerCase()+".view";r.shareLink=new h(t,null,null,s.properties.outcomeShare.resources.html.ref)}}else{if(s.update){var t=s.outcomeType.name.toLowerCase()+".put";r.shareLink=new h(t,"outcome.put",JSON.stringify(s.outcomeType),null)}}}}return r}function k(t,r,s){if(t.attr("aria-owns")){j("#"+t.attr("aria-owns")).trigger("close")}else{l.emitP("outcome.prepareForBadgePopup",s).then(function(y,z){var x=d.buildLinkActions(z);var v={outcomeTypeName:y.outcomeType.name.toLowerCase(),author:y.user,modifiedDate:y.updated,actions:x,props:y.properties};v=a(y,v);var u=jive.outcomes.badge.badgePopup(v);var w=j(u).popover({context:t,onClose:function(){t.removeAttr("aria-owns")},hoverSelection:false});l.emit("outcome.history.displayLink",y,v.alertedNames,w.find(".j-outcome-modal-footer"),r,t);l.addListener("outcome.history.popoverDisplayed",function(){w.trigger("close")});t.attr("aria-owns",w.id());n.bindHandlers(w);w.on("click",".js-actionLink",function(B){B.preventDefault();var C=j(this);var D=j(t).closest(".js-outcome-badge-container");var A=d.getEd(D);l.emit("outcome.doAction",C.data("event"),A,C.data("actionData"),t);C.trigger("close")})})}}function f(s,r){s=s.filter(function(){var t=j(this).data("allowedOutcomeTypes");return !t||t.indexOf(r)>=0});return s}l.addListener("outcome.display",m);l.addListener("outcome.displayFake",e);l.addListener("outcome.removeBadge",g);l.addListener("outcome.clearBadges",q);return{display:m,removeBadge:g,refresh:p,clickHandler:o}});
;
require(["jquery","apps/shared/controllers/localexchange"],function(b,a){a.addLazyListener("renderedContent",["apps/outcomes/badgeView"],function(d,c){d.refresh(c)},function(c){return b(".js-outcome-badge-container",c).not("[data-no-hydrate]").length>0});a.addLazyListener("renderedContent",["apps/outcomes/summaryView"],function(d,c){d.summarize(c)},function(c){return b(".js-outcome-summary-container",c).length>0});a.addLazyListener("renderedContent",["apps/outcomes/actionView"],function(d,c){d.tloActionButtonRefresh(c)},function(c){return b(".js-tlo-action-button",c).length>0});b(function(){b("body").off(".outcomes").on("click.outcomes","a.js-outcome-button",function(d){var c=this;require(["apps/outcomes/actionView"],function(e){e.clickHandler.call(c)});d.preventDefault()}).on("click.outcomes",".js-outcome-badge-container .js-outcome-badge:not(.js-outcome-badge-noclick)",function(d){var c=this;require(["apps/outcomes/badgeView"],function(e){e.clickHandler.call(c)});d.preventDefault()}).on("click.outcomes",".js-outcome-history-link",function(d){var c=this;require(["apps/outcomes/historyView"],function(e){b(c).parent("j-pop-main").attr("id");e.clickHandler.call(c)});d.preventDefault()}).on("click.outcomes",".j-outcome-link-details",function(d){var c=this;require(["apps/outcomes/summaryView"],function(e){e.clickHandler.call(c)})});require(["apps/outcomes/actionView"],function(c){c.tloActionButtonRefresh()})})});
;
jive.Rate=function(h,g,o,r,v,l,x,q,b){var n=jive.rest.url("/rating/"+o+"/"+r);var p;var d;var c;var e;var t;var f;var s;$j.getJSON(n,function(z){p=z.ratingInfo;w();u();k();if(f){var y={body:"",element:s,i18n:l,containerType:h,containerID:g,resourceType:o,resourceID:r,rteOptions:b};require(["apps/rate/main"],function(A){new A(y)})}});function u(){if(q){s=$j('.jive-content-rating[data-guid="'+q+'"]')}else{s=$j("#jive-content-rating")}}function w(){d=(p.ratedByUser&&p.userRating.score>0)?p.userRating.score:0;c=p.userRating?p.userRating.description:"";e=false;t=p.availableRatings;f=p.commentable&&x}function i(y){$j.getJSON(n,function(z){j(z);y.resolve()});return false}function j(y){require(["soy!jive.rate.soy.renderRating"],function(A){y.i18n=l;var z=A(y);s.find(".jive-content-avgrating").html(z)})}function a(A){e=true;var y=s.find(".j-rating-comment-instruct .font-color-okay strong"),z=new $j.Deferred;y.html(l.rateSavingText);if(!s.find(".j-rating-container").hasClass("j-rating-container-active")){s.find(".j-rating-container").addClass("j-rating-container-active");if(!s.find(".j-rating-container").hasClass("j-rating-container-active-tab")){s.find(".j-rating-comment-instruct").css("opacity","0").animate({width:"toggle",opacity:1},500)}}$j.post(n,{score:A},function(){i(z);d=A;m(A);s.find(".jive-icon-userrating-"+A).attr("aria-pressed","true");s.find(".jive-icon-userrating-"+A).prevAll("a").attr("aria-pressed","false");s.find(".jive-icon-userrating-"+A).nextAll("a").attr("aria-pressed","false");s.find(".jive-icon-userrating-"+A).focus()});z.then(function(){y.html(l.rateSavedText);if(!f){s.find(".j-rating-comment-instruct").fadeOut(2500,function(){s.find(".j-rating-container").removeClass("j-rating-container-active")})}e=false})}function m(y){$j.each(t,function(z,A){if(y==0){s.find(".jive-content-userrating-desc").html("")}if(y==A.score){s.find(".jive-content-userrating-desc").html(A.description)}s.find(".jive-icon-userrating-"+A.score).toggleClass("jive-icon-rate-usr-on",y>=A.score).toggleClass("jive-icon-rate-usr-off",y<A.score)})}function k(){var y=jive.rate.soy.renderRating({ratingInfo:p,i18n:l});if(p.rateable){y+=jive.rate.soy.renderUserRating({ratingInfo:p,userRating:d,commentable:f,ratingDescription:c,i18n:l})}s.append(y);s.find(".jive-content-userrating").show();$j.each(p.availableRatings,function(A,z){s.find(".jive-icon-userrating-"+z.score).bind("click",function(){a(z.score)});s.find(".jive-icon-userrating-"+z.score).hover(function(){m(z.score)},function(){m(d)});s.find(".jive-icon-userrating-"+z.score).bind("focus",function(){m(z.score)});s.find(".jive-icon-userrating-"+z.score).bind("blur",function(){m(d)})})}};
;
// This file was automatically generated from rate.soy.
// Please don't edit this file by hand.

goog.provide('jive.rate.soy.renderRating');
goog.provide('jive.rate.soy.renderUserRating');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');


jive.rate.soy.renderRating = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="jive-content-avgrating" tabindex="0" aria-labelledby="j-rating-score"><span class="j-508-label" id="j-rating-score">', soy.$$escapeHtml(opt_data.i18n.avgUserRatingTitlei18n), ': ', (opt_data.ratingInfo.ratingCount > 0) ? soy.$$escapeHtml(opt_data.ratingInfo.meanRating) + ' ' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.of'),[])) + ' ' + soy.$$escapeHtml(opt_data.ratingInfo.availableRatings.length) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('rate.ratings.none'),[])), ' (', soy.$$escapeHtml(opt_data.ratingInfo.ratingCount), ' ', (opt_data.ratingInfo.ratingCount == 1) ? soy.$$escapeHtml(opt_data.i18n.rateRatingLabel) : soy.$$escapeHtml(opt_data.i18n.rateRatingsLabel), ')</span><div class="jive-content-avgrating-title">', soy.$$escapeHtml(opt_data.i18n.avgUserRatingTitlei18n), '</div><div class="jive-content-avgrating-score" title="', soy.$$escapeHtml(opt_data.i18n.avgUserRatingLabeli18n), ': ', soy.$$escapeHtml(opt_data.ratingInfo.meanRating), ' ', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.of'),[])), ' ', soy.$$escapeHtml(opt_data.ratingInfo.availableRatings.length), '"><span class="j-508-label">', (opt_data.ratingInfo.ratingCount > 0) ? soy.$$escapeHtml(opt_data.i18n.avgUserRatingLabeli18n) + ': ' + soy.$$escapeHtml(opt_data.ratingInfo.meanRating) + ' ' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.of'),[])) + ' ' + soy.$$escapeHtml(opt_data.ratingInfo.availableRatings.length) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('rate.ratings.none'),[])), '</span>');
  var availableRatingList46 = opt_data.ratingInfo.availableRatings;
  var availableRatingListLen46 = availableRatingList46.length;
  for (var availableRatingIndex46 = 0; availableRatingIndex46 < availableRatingListLen46; availableRatingIndex46++) {
    var availableRatingData46 = availableRatingList46[availableRatingIndex46];
    output.append('<span class="jive-icon-avgrating-', soy.$$escapeHtml(availableRatingData46.score), ' jive-icon-med jive-icon-rate-avg-', (opt_data.ratingInfo.meanRating >= availableRatingData46.score) ? 'on' : (opt_data.ratingInfo.meanRating >= availableRatingData46.score - 0.5) ? 'half' : 'off', '"></span>');
  }
  output.append('</div><div class="jive-content-rating-print" style="display: none;">', soy.$$escapeHtml(opt_data.ratingInfo.meanRating), '</div><div class="jive-content-avgrating-count">(', soy.$$escapeHtml(opt_data.ratingInfo.ratingCount), ' ', (opt_data.ratingInfo.ratingCount == 1) ? soy.$$escapeHtml(opt_data.i18n.rateRatingLabel) : soy.$$escapeHtml(opt_data.i18n.rateRatingsLabel), ')</div></div>');
  return opt_sb ? '' : output.toString();
};


jive.rate.soy.renderUserRating = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="jive-content-userrating jive-content-myrating-print"><div class="j-rating-container clearfix"><div class="j-rating clearfix"><div class="jive-content-userrating-title">', soy.$$escapeHtml(opt_data.i18n.myRatingLabel), ' <span class="jive-content-userrating-desc">', soy.$$escapeHtml(opt_data.ratingDescription), '</span></div><div class="jive-content-userrating-score">');
  var availableRatingList76 = opt_data.ratingInfo.availableRatings;
  var availableRatingListLen76 = availableRatingList76.length;
  for (var availableRatingIndex76 = 0; availableRatingIndex76 < availableRatingListLen76; availableRatingIndex76++) {
    var availableRatingData76 = availableRatingList76[availableRatingIndex76];
    output.append('<a href="javascript:void(0);" class="jive-icon-userrating-', soy.$$escapeHtml(availableRatingData76.score), ' jive-icon-med jive-icon-rate-usr-', (opt_data.userRating >= availableRatingData76.score) ? 'on' : 'off', '" aria-labelledby="button-score-label-', soy.$$escapeHtml(availableRatingData76.score), '" role="button" aria-pressed="', (opt_data.userRating == availableRatingData76.score) ? 'true' : 'false', '"><span id="button-score-label-', soy.$$escapeHtml(availableRatingData76.score), '" class="j-508-label">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('rate.rating.rate'),[])), ' ', soy.$$escapeHtml(availableRatingData76.description), '(', soy.$$escapeHtml(availableRatingData76.score), ' ', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.of'),[])), ' ', soy.$$escapeHtml(opt_data.ratingInfo.availableRatings.length), ')</span></a>');
  }
  output.append('<div class="jive-content-userrating-saved" style="display: none;" role="status"></div></div></div><div class="j-rating-comment-instruct"><p class="font-color-okay" role="status"><strong>', soy.$$escapeHtml(opt_data.i18n.rateRatingSaved), '</strong></p>', (opt_data.commentable) ? '<p class="font-color-meta"><a href="#" class="j-comment-on-rating"><strong>' + soy.$$escapeHtml(opt_data.i18n.writeAReview) + '</strong></a></p>' : '', '</div></div></div><div class="j-rating-comment"><ul class="jive-comment"><li><div class="jive-comment-arrow"></div><div class="jive-comment-content"><p class="jive-comment-meta font-color-meta-light">', soy.$$escapeHtml(opt_data.i18n.commentOnRating), '</p><div class="jive-rating-comment-body"> </div></div></li></ul></div>');
  return opt_sb ? '' : output.toString();
};

;
jive.namespace("Rate");define("apps/rate/main",["commentMacroApps"],function(){jive.Rate.Main=function(k){var j=k.containerID;var g=k.containerType;var a=k.container;var b=k.resourceType;var i=k.resourceID;var c=k.i18n;var h=k.body,d=k.element?k.element:"#jive-rating-content",f;function e(m,l){window.jive.CommentApp.comments.closeForms();if(f){f.remove()}jive.CommentApp.comments.renderForm(jive.CommentApp.FormView,m,$j.extend({commentMode:"rate",i18n:c},l))}$j(document).ready(function(){var l=$j(d);$j(function(){l.find(".j-comment-on-rating").click(function(){e(l.find(".jive-rating-comment-body"),{formActionContainer:".jive-rating-comment-body",bodyContent:h,containerType:g,containerID:j,resourceType:b,resourceID:i,rteOptions:k.rteOptions});l.find(".jive-content-avgrating").css("height","30px").animate({padding:"0",width:"0",opacity:"0"},500,function(){l.find(".j-rating-comment").animate({opacity:"toggle"},800).slideDown()});l.find(".jive-content-userrating").animate({padding:"0"},500).css("border","none");l.find(".j-rating-comment-instruct").animate({width:"0",opacity:"0",padding:"0"},400,function(){$j(this).hide()}).css("border","none");l.find(".j-rating-container").removeClass("j-rating-container-active");l.find(".j-rating-container").addClass("j-rating-container-active-tab");return false})});var m=function(){l.find(".j-rating-comment").hide();l.find(".jive-content-userrating").removeAttr("style");l.find(".jive-content-avgrating").removeAttr("style");l.find(".j-rating-comment-instruct").removeAttr("style");l.find(".j-rating-container").removeClass("j-rating-container-active");l.find(".j-rating-container").removeClass("j-rating-container-active-tab")};jive.CommentApp.comments.addCommentListViewListener("cancelComment",m);jive.CommentApp.comments.addCommentListViewListener("savedComment",m);jive.CommentApp.comments.addCommentListViewListener("createComment",m);jive.CommentApp.comments.addCommentListViewListener("replyComment",m);jive.CommentApp.comments.addCommentListViewListener("editComment",m)})};return jive.Rate.Main});
;
// This file was automatically generated from userlist.soy.
// Please don't edit this file by hand.

goog.provide('jive.browse.activityinfo.userListHover');
goog.provide('jive.browse.activityinfo.userListHoverBox');
goog.provide('jive.browse.activityinfo.userListHoverItem');
goog.provide('jive.browse.activityinfo.userListHoverTableBody');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.people.profile.followLink');
goog.require('jive.shared.displayutil.avatar');


jive.browse.activityinfo.userListHover = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<header><h2>', (opt_data.activityType == 'reply') ? (opt_data.totalCount == 1) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.replycount.singular'),[opt_data.totalCount])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.replycount.plural'),[opt_data.totalCount])) : (opt_data.activityType == 'like') ? (opt_data.totalCount == 1) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.likecount.singular'),[opt_data.totalCount])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.likecount.plural'),[opt_data.totalCount])) : (opt_data.activityType == 'bookmark') ? (opt_data.totalCount == 1) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.bookmarkcount.singular'),[opt_data.totalCount])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.bookmarkcount.plural'),[opt_data.totalCount])) : (opt_data.activityType == 'follow') ? (opt_data.totalCount == 1) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.followercount.singular'),[opt_data.totalCount])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.followercount.plural'),[opt_data.totalCount])) : (opt_data.activityType == 'membership') ? (opt_data.totalCount == 1) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.membercount.singular'),[opt_data.totalCount])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.membercount.plural'),[opt_data.totalCount])) : (opt_data.activityType == 'connections') ? (opt_data.bidirectionalGraph) ? (opt_data.totalCount == 1) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.friendcount.singular'),[opt_data.totalCount])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.friendcount.plural'),[opt_data.totalCount])) : (opt_data.totalCount == 1) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.followingcount.singular'),[opt_data.totalCount])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.followingcount.plural'),[opt_data.totalCount])) : '', '</h2></header><a href="#" class="j-modal-close-top close">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.close'),[])), '  <span class="j-close-icon j-ui-elem" role="img"></span></a><section class="jive-modal-content"><table><tbody>');
  jive.browse.activityinfo.userListHoverTableBody(opt_data, output);
  output.append('</tbody></table></section>');
  return opt_sb ? '' : output.toString();
};


jive.browse.activityinfo.userListHoverTableBody = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var userList55 = opt_data.items;
  var userListLen55 = userList55.length;
  if (userListLen55 > 0) {
    for (var userIndex55 = 0; userIndex55 < userListLen55; userIndex55++) {
      var userData55 = userList55[userIndex55];
      jive.browse.activityinfo.userListHoverItem({currentUserID: opt_data.currentUserID, user: userData55}, output);
    }
  } else {
    output.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.user.list.empty'),[])));
  }
  return opt_sb ? '' : output.toString();
};


jive.browse.activityinfo.userListHoverItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<tr><td class="j-td-avatar">');
  jive.shared.displayutil.avatar(soy.$$augmentMap(opt_data.user, {size: 35}), output);
  output.append('</td><td class="j-td-name"><a href="', soy.$$escapeHtml(jive.soy.func.buildUrl('/people/' + encodeURIComponent(opt_data.user.username))), '">', (opt_data.currentUserID == opt_data.user.id) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.you'),[])) : soy.$$escapeHtml(opt_data.user.displayName), '</a></td><td class="j-td-follow">');
  if (opt_data.user.prop.connections && opt_data.user.prop.connections.followLinkShown) {
    jive.people.profile.followLink(soy.$$augmentMap(opt_data.user.prop.connections, {targetUserID: opt_data.user.id, targetUserDisplayName: opt_data.user.displayName, hideFollowingCount: true, renderLocation: 'user-list', streamsAssociatedCount: opt_data.user.prop.connections.streamsAssociatedBean ? opt_data.user.prop.connections.streamsAssociatedBean.streamIDs.length : 0}), output);
  }
  output.append('</td></tr>');
  return opt_sb ? '' : output.toString();
};


jive.browse.activityinfo.userListHoverBox = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="jive-activity-info-hover" class="jive-modal j-people-list-modal"></div>');
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from acclaim.soy.
// Please don't edit this file by hand.

goog.provide('jive.soy.acclaim.displayUserRow');
goog.provide('jive.soy.acclaim.displayYou');
goog.provide('jive.soy.acclaim.privateBookmarkNotification');
goog.provide('jive.soy.acclaim.renderAcclaimModal');
goog.provide('jive.soy.acclaim.renderEmptyListText');
goog.provide('jive.soy.acclaim.renderUserList');
goog.provide('jive.soy.acclaim.renderUserNotesList');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.app.url');
goog.require('jive.people.profile.followLink');
goog.require('jive.shared.displayutil.avatar');
goog.require('jive.shared.displayutil.icon');
goog.require('jive.shared.displayutil.userDisplayNameLink');
goog.require('jive.shared.soy.getCountTextByType');


jive.soy.acclaim.renderAcclaimModal = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="jive-modal j-modal j-acclaim-mini-modal j-people-list-modal" data-you-id="', soy.$$escapeHtml(opt_data.youID), '" role="dialog" tabindex="-1" aria-labelledby="acclaim-header"><header role="header" id="acclaim-header"><h2 ', (opt_data.activityType == 'bookmark') ? 'class="j-modal-bookmark-header"' : '', '>', (opt_data.activityType == 'like') ? '<span class="jive-icon-med jive-icon-like"></span>' : '', (opt_data.activityType == 'bookmark') ? '<div class="jive-bookmark-ribbon j-ui-elem"></div>' : '', '<p class="modal-initially-focused" tabindex="0">');
  jive.shared.soy.getCountTextByType({count: opt_data.totalCount, type: opt_data.activityType, bidirectionalGraph: opt_data.bidirectionalGraph}, output);
  output.append('</p></h2></header><label class="j-508-label" id="close-modal-508">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.close.modal'),[])), '</label><a href="#" class="j-modal-close-top close" aria-labelledby="close-modal-508" title="', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.close.modal'),[])), '">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.close'),[])), ' <span class="j-close-icon j-ui-elem" role="img"></span></a><section  class="jive-modal-content clearfix">', (! opt_data.guest) ? '<nav id="jive-view-picker" class="j-modal-filter"><input type="checkbox" value="1" id="js-friends" name="user-filter"/><label for="js-friends">' + ((opt_data.bidirectionalGraph) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('profile.friends.filter.label'),[])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('profile.connections.filter.label'),[]))) + '</label>' + ((opt_data.activityType == 'bookmark') ? '<br/><input type="checkbox" value="2" id="js-only-notes" name="user-filter"/><label for="js-only-notes">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('bookmarks.sidebar.filter.notes'),[])) + '</label>' : '') + '</nav>' : '');
  jive.soy.acclaim.renderUserList({activityType: opt_data.activityType, users: opt_data.users, currentUserID: opt_data.youID, currentUserPartner: opt_data.youPartner, onlyFriends: false, id: 'modal-liked-everyone', classNames: 'liked-everyone-list js-everyone-list', show: true}, output);
  jive.soy.acclaim.renderUserList({activityType: opt_data.activityType, users: opt_data.users, currentUserID: opt_data.youID, currentUserPartner: opt_data.youPartner, onlyFriends: true, id: 'modal-liked-friends', classNames: 'liked-friends-list js-friends-list', show: false}, output);
  if (opt_data.activityType == 'bookmark') {
    jive.soy.acclaim.renderUserNotesList({activityType: opt_data.activityType, users: opt_data.users, currentUserID: opt_data.youID, currentUserPartner: opt_data.youPartner, onlyFriends: false, onlyNotes: true, id: 'modal-bookmark-notes', classNames: 'j-user-bookmark-notes-list j-js-user-bookmark-notes-list', show: false}, output);
    jive.soy.acclaim.renderUserNotesList({activityType: opt_data.activityType, users: opt_data.users, currentUserID: opt_data.youID, currentUserPartner: opt_data.youPartner, onlyFriends: true, onlyNotes: true, id: 'modal-bookmark-friends-notes', classNames: 'j-user-bookmark-notes-list j-js-user-bookmark-friends-notes-list', show: false}, output);
  }
  output.append('</section></div>');
  return opt_sb ? '' : output.toString();
};


jive.soy.acclaim.renderUserList = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<table', (opt_data.id) ? ' id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', (opt_data.classNames) ? ' class="' + soy.$$escapeHtml(opt_data.classNames) + '"' : '', (! opt_data.show) ? ' style="display: none;"' : '', '><tbody>');
  var userList100 = opt_data.users;
  var userListLen100 = userList100.length;
  if (userListLen100 > 0) {
    for (var userIndex100 = 0; userIndex100 < userListLen100; userIndex100++) {
      var userData100 = userList100[userIndex100];
      jive.soy.acclaim.displayUserRow({activityType: opt_data.activityType, user: userData100, currentUserID: opt_data.currentUserID, currentUserPartner: opt_data.currentUserPartner, onlyFriends: opt_data.onlyFriends, onlyNotes: opt_data.onlyNotes, hideFollow: opt_data.hideFollow, extraParams: opt_data.extraParams}, output);
    }
  } else {
    output.append('<tr><td><p class="j-empty font-color-meta-light">');
    if (opt_data.emptyContent) {
      output.append(soy.$$filterNoAutoescape(opt_data.emptyContent));
    } else {
      jive.soy.acclaim.renderEmptyListText(opt_data, output);
    }
    output.append('</p></td></tr>');
  }
  output.append('</tbody></table>');
  return opt_sb ? '' : output.toString();
};


jive.soy.acclaim.renderEmptyListText = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.activityType == 'bookmark') ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('acclaim.modal.empty.msg.bookmarks'),[])) : (opt_data.activityType == 'like') ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('acclaim.modal.empty.msg.likes'),[])) : (opt_data.activityType == 'follow') ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('acclaim.modal.empty.msg.follow'),[])) : (opt_data.activityType == 'connections') ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('acclaim.modal.empty.msg.connections'),[])) : (opt_data.activityType == 'membership') ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('acclaim.modal.empty.msg.membership'),[])) : '');
  return opt_sb ? '' : output.toString();
};


jive.soy.acclaim.renderUserNotesList = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<table id="', soy.$$escapeHtml(opt_data.id), '" class="', soy.$$escapeHtml(opt_data.classNames), '"', (! opt_data.show) ? ' style="display: none;"' : '', '><tbody>');
  var userList144 = opt_data.users;
  var userListLen144 = userList144.length;
  if (userListLen144 > 0) {
    for (var userIndex144 = 0; userIndex144 < userListLen144; userIndex144++) {
      var userData144 = userList144[userIndex144];
      if (userData144.prop.bookmarknotes) {
        jive.soy.acclaim.displayUserRow({activityType: opt_data.activityType, user: userData144, currentUserID: opt_data.currentUserID, currentUserPartner: opt_data.currentUserPartner, onlyFriends: opt_data.onlyFriends, onlyNotes: opt_data.onlyNotes}, output);
      }
    }
  } else {
    output.append('<tr><td><p class="j-empty font-color-meta-light">There are no bookmark notes on this item</p></td></tr>');
  }
  output.append('</tbody></table>');
  return opt_sb ? '' : output.toString();
};


jive.soy.acclaim.displayYou = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a href="');
  jive.app.url({path: '/people/' + soy.$$escapeHtml(encodeURIComponent(opt_data.username))}, output);
  output.append('" data-userid="', soy.$$escapeHtml(opt_data.ID), '" class="jiveTT-hover-user">', soy.$$escapeHtml(opt_data.i18n.acclaimLikedYou), '</a>');
  return opt_sb ? '' : output.toString();
};


jive.soy.acclaim.displayUserRow = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (! opt_data.onlyFriends || opt_data.onlyFriends && opt_data.currentUserID != opt_data.user.id && opt_data.user.prop.connections.targetUserACurrentFriend) {
    if (opt_data.onlyNotes && opt_data.user.prop.hasBookmarknotes || ! opt_data.onlyNotes) {
      output.append('<tr data-user-id="', soy.$$escapeHtml(opt_data.user.id), '">');
      if (! opt_data.onlyNotes) {
        output.append('<td class="j-td-avatar ', (opt_data.user.prop.hasBookmarknotes) ? 'j-td-topalign' : '', '">');
        if (opt_data.activityType == 'expertise') {
          jive.shared.displayutil.icon(soy.$$augmentMap(opt_data.user, {size: 35}), output);
        } else {
          jive.shared.displayutil.avatar(soy.$$augmentMap(opt_data.user, {size: 35, currentUserPartner: opt_data.currentUserPartner, extraParams: opt_data.extraParams}), output);
        }
        output.append('</td>');
      }
      output.append('<td class="j-td-name">');
      if (opt_data.currentUserID == opt_data.user.id) {
        jive.shared.displayutil.userDisplayNameLink(soy.$$augmentMap(opt_data.user, {displayNameOverride: jive.i18n.i18nText(jive.i18n.getMsg('global.you'),[]), extraParams: opt_data.extraParams}), output);
      } else {
        jive.shared.displayutil.userDisplayNameLink(soy.$$augmentMap(opt_data.user, {extraParams: opt_data.extraParams}), output);
      }
      output.append((! opt_data.onlyNotes) ? '<!-- TODO: show truncated version of the notes -->' + ((opt_data.activityType == 'bookmark' && opt_data.user.prop.hasBookmarknotes && opt_data.user.prop.bookmarknotes) ? '<p class="j-user-bookmark-notes">' + soy.$$filterNoAutoescape(opt_data.user.prop.bookmarknotes) + '</p>' : '') : '<!-- TODO: show full, non-plain text / non-escaped version of the full notes -->' + ((opt_data.activityType == 'bookmark' && opt_data.user.prop.hasBookmarknotes && opt_data.user.prop.bookmarknotes) ? '<p class="j-user-bookmark-notes">' + soy.$$filterNoAutoescape(opt_data.user.prop.bookmarknotes) + '</p>' : ''), '</td>');
      if (opt_data.activityType != 'bookmark' && ! opt_data.hideFollow) {
        if (! opt_data.onlyNotes) {
          output.append('<td class="j-td-follow">');
          if (opt_data.user.prop.connections && opt_data.user.prop.connections.followLinkShown) {
            if (opt_data.user.id != opt_data.currentUserID && opt_data.user.visible) {
              jive.people.profile.followLink(soy.$$augmentMap(opt_data.user.prop.connections, {targetUserID: opt_data.user.id, targetUserDisplayName: opt_data.user.displayName, hideFollowingCount: true, renderLocation: 'bookmarked-user-list', streamsAssociatedCount: opt_data.user.prop.connections.streamsAssociatedBean ? opt_data.user.prop.connections.streamsAssociatedBean.streamIDs.length : 0}), output);
            }
          }
          output.append('</td>');
        }
      }
      output.append('</tr>');
    }
  }
  return opt_sb ? '' : output.toString();
};


jive.soy.acclaim.privateBookmarkNotification = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<tr class="j-private-bookmark-notification j-js-private-bookmark-notification"><td colspan="3">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('acclaim.modal.privateBookmarks'),[])), '</td></tr>');
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from pagination.soy.
// Please don't edit this file by hand.

goog.provide('jive.shared.soy.numberedPageLink');
goog.provide('jive.shared.soy.pageToStart');
goog.provide('jive.shared.soy.pageToStart__Cce8');
goog.provide('jive.shared.soy.pageUrl');
goog.provide('jive.shared.soy.pageUrl__C2bf6');
goog.provide('jive.shared.soy.paginationLinks');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');


jive.shared.soy.paginationLinks = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-pagination"', (opt_data.elementID) ? 'id="' + soy.$$escapeHtmlAttribute(opt_data.elementID) + '"' : '', (opt_data.max <= 1 && ! opt_data.alwaysShow) ? 'style="display:none"' : '', '>');
  if (opt_data.current >= 1) {
    jive.shared.soy.numberedPageLink(soy.$$augmentMap(opt_data, {number: 1, active: opt_data.current == 1}), output);
  }
  output.append((opt_data.current > 5) ? '<span class="ellipsis">&hellip;</span>' : '');
  var iInit21 = opt_data.current - 3;
  var iLimit21 = opt_data.current + 4;
  for (var i21 = iInit21; i21 < iLimit21; i21++) {
    if (i21 > 1 && i21 <= opt_data.max) {
      jive.shared.soy.numberedPageLink(soy.$$augmentMap(opt_data, {number: i21, active: opt_data.current == i21}), output);
    }
  }
  output.append((opt_data.max > opt_data.current + 4) ? '<span class="ellipsis">&hellip;</span>' : '');
  if (opt_data.max > opt_data.current + 3) {
    jive.shared.soy.numberedPageLink(soy.$$augmentMap(opt_data, {number: opt_data.max}), output);
  }
  output.append('<span class="j-pagination-prevnext">');
  if (opt_data.current > 1) {
    output.append('<a href="');
    jive.shared.soy.pageUrl__C2bf6(soy.$$augmentMap(opt_data, {page: opt_data.current - 1}), output);
    output.append('" class="j-pagination-prev" title="', soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('global.previous_page_title'),[])), '" data-start="');
    jive.shared.soy.pageToStart__Cce8(soy.$$augmentMap(opt_data, {page: opt_data.current - 1}), output);
    output.append('">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.previous'),[])), '</a>');
  } else {
    output.append('<span class="j-pagination-prev j-disabled font-color-meta">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.previous'),[])), '</span>');
  }
  if (opt_data.current < opt_data.max) {
    output.append('<a href="');
    jive.shared.soy.pageUrl__C2bf6(soy.$$augmentMap(opt_data, {page: opt_data.current + 1}), output);
    output.append('" class="j-pagination-next" title="', soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('global.next_page_title'),[])), '" data-start="');
    jive.shared.soy.pageToStart__Cce8(soy.$$augmentMap(opt_data, {page: opt_data.current + 1}), output);
    output.append('">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.next'),[])), '</a>');
  } else {
    output.append('<span class="j-pagination-next j-disabled font-color-meta">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.next'),[])), '</span>');
  }
  output.append('</span></div>');
  return opt_sb ? '' : output.toString();
};


jive.shared.soy.numberedPageLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.active) {
    output.append('<a href="');
    jive.shared.soy.pageUrl__C2bf6(soy.$$augmentMap(opt_data, {page: opt_data.number}), output);
    output.append('" class="j-pagination-current font-color-normal" title="', soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('global.numbered_page_title'),[opt_data.number])), '" data-start="');
    jive.shared.soy.pageToStart__Cce8(soy.$$augmentMap(opt_data, {page: opt_data.number}), output);
    output.append('"><strong>', soy.$$escapeHtml(opt_data.number), '</strong></a>');
  } else {
    output.append('<a href="');
    jive.shared.soy.pageUrl__C2bf6(soy.$$augmentMap(opt_data, {page: opt_data.number}), output);
    output.append('" title="', soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('global.numbered_page_title'),[opt_data.number])), '" data-start="');
    jive.shared.soy.pageToStart__Cce8(soy.$$augmentMap(opt_data, {page: opt_data.number}), output);
    output.append('">', soy.$$escapeHtml(opt_data.number), '</a>');
  }
  return opt_sb ? '' : output.toString();
};


jive.shared.soy.pageUrl = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.urlParams) ? soy.$$escapeHtml(opt_data.urlPath) + soy.$$escapeHtml((Object.keys(jQuery.extend({}, opt_data.urlParams, (function() { var map = {}; var pairs = [['start', opt_data.page > 1 ? (opt_data.page - 1) * opt_data.pageSize : []]]; for (var i = 0; i < pairs.length; i += 1) { map[pairs[i][0]] = pairs[i][1]; } return map; })())).length > 0 ? '?'+ jQuery.param(jQuery.extend({}, opt_data.urlParams, (function() { var map = {}; var pairs = [['start', opt_data.page > 1 ? (opt_data.page - 1) * opt_data.pageSize : []]]; for (var i = 0; i < pairs.length; i += 1) { map[pairs[i][0]] = pairs[i][1]; } return map; })())) : '')) : soy.$$escapeHtml(opt_data.urlPath) + soy.$$escapeHtml((Object.keys((function() { var map = {}; var pairs = [['start', opt_data.page > 1 ? (opt_data.page - 1) * opt_data.pageSize : []]]; for (var i = 0; i < pairs.length; i += 1) { map[pairs[i][0]] = pairs[i][1]; } return map; })()).length > 0 ? '?'+ jQuery.param((function() { var map = {}; var pairs = [['start', opt_data.page > 1 ? (opt_data.page - 1) * opt_data.pageSize : []]]; for (var i = 0; i < pairs.length; i += 1) { map[pairs[i][0]] = pairs[i][1]; } return map; })()) : '')));
  return opt_sb ? '' : output.toString();
};


jive.shared.soy.pageToStart = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append(soy.$$escapeHtml((opt_data.page - 1) * opt_data.pageSize));
  return opt_sb ? '' : output.toString();
};


jive.shared.soy.pageUrl__C2bf6 = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.urlParams) ? soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.urlPath)) + soy.$$escapeHtmlAttribute((Object.keys(jQuery.extend({}, opt_data.urlParams, (function() { var map = {}; var pairs = [['start', opt_data.page > 1 ? (opt_data.page - 1) * opt_data.pageSize : []]]; for (var i = 0; i < pairs.length; i += 1) { map[pairs[i][0]] = pairs[i][1]; } return map; })())).length > 0 ? '?'+ jQuery.param(jQuery.extend({}, opt_data.urlParams, (function() { var map = {}; var pairs = [['start', opt_data.page > 1 ? (opt_data.page - 1) * opt_data.pageSize : []]]; for (var i = 0; i < pairs.length; i += 1) { map[pairs[i][0]] = pairs[i][1]; } return map; })())) : '')) : soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.urlPath)) + soy.$$escapeHtmlAttribute((Object.keys((function() { var map = {}; var pairs = [['start', opt_data.page > 1 ? (opt_data.page - 1) * opt_data.pageSize : []]]; for (var i = 0; i < pairs.length; i += 1) { map[pairs[i][0]] = pairs[i][1]; } return map; })()).length > 0 ? '?'+ jQuery.param((function() { var map = {}; var pairs = [['start', opt_data.page > 1 ? (opt_data.page - 1) * opt_data.pageSize : []]]; for (var i = 0; i < pairs.length; i += 1) { map[pairs[i][0]] = pairs[i][1]; } return map; })()) : '')));
  return opt_sb ? '' : output.toString();
};


jive.shared.soy.pageToStart__Cce8 = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append(soy.$$escapeHtmlAttribute((opt_data.page - 1) * opt_data.pageSize));
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from action_link.soy.
// Please don't edit this file by hand.

goog.provide('jive.shared.soy.actionLink');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');


jive.shared.soy.actionLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a ', (opt_data.id) ? 'id="' + soy.$$escapeHtml(opt_data.id) + '"' : '', ' href="', soy.$$escapeHtml(jive.soy.func.buildUrl(opt_data.url,opt_data.urlParams)), '" class="', (opt_data.linkCss) ? soy.$$escapeHtml(opt_data.linkCss) : '', (opt_data.activeTab) ? ' j-ui-elem' : '', '"', (opt_data.urlParams && opt_data.urlParams.contentType) ? 'data-content-type="' + soy.$$escapeHtml(opt_data.urlParams.contentType) + '"' : '', (opt_data.urlParams && opt_data.urlParams.containerType) ? 'data-container-type="' + soy.$$escapeHtml(opt_data.urlParams.containerType) + '"' : '', '>', (! opt_data.hideIcon) ? '<span class="' + ((opt_data.iconCss) ? soy.$$escapeHtml(opt_data.iconCss) : '') + ' jive-icon-' + ((opt_data.iconSize) ? soy.$$escapeHtml(opt_data.iconSize) : 'med') + '">' + ((opt_data.icon) ? '<img src="' + soy.$$escapeHtml(opt_data.icon) + '"/>' : '') + '</span>' : '', (opt_data.label) ? soy.$$escapeHtml(opt_data.label) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(opt_data.nameKey),[])), (opt_data.includeCounter) ? ' <span class="j-js-newCount j-rc5" style="display:none">' + ((opt_data.count) ? soy.$$escapeHtml(opt_data.count) : '0') + '</span>' : '', '</a>');
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from modal.soy.
// Please don't edit this file by hand.

goog.provide('jive.shared.soy.modal');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');


jive.shared.soy.modal = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="jive-modal j-modal ', (opt_data.modalCss) ? soy.$$escapeHtml(opt_data.modalCss) : '', '"><header><h2>', (opt_data.header) ? soy.$$filterNoAutoescape(opt_data.header) : '&nbsp;', '</h2></header><label class="j-508-label" id="close-modal-508">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.close.modal'),[])), '</label><a class="j-modal-close-top jive-close no-underline close ', (opt_data.closeCss) ? soy.$$escapeHtml(opt_data.closeCss) : '', '" href="#" aria-labelledby="close-modal-508" title="', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.close.modal'),[])), '">', (! opt_data.closeText) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.close'),[])) : soy.$$escapeHtml(opt_data.closeText), ' <span class="j-close-icon j-ui-elem" role="img"></span></a><section class="jive-modal-content clearfix ', (opt_data.contentCss) ? soy.$$escapeHtml(opt_data.contentCss) : '', '">', soy.$$filterNoAutoescape(opt_data.contents), '</section></div>');
  return opt_sb ? '' : output.toString();
};

;
jive.namespace("Activity.Info");jive.Activity.Info.ActivityInfoView=jive.AbstractView.extend(function(a){var c=jQuery;function b(d){return d==="bookmark"}this.init=function(e){var d=this;this.$modal=null;this.pageSize=e.pageSize;this.soyParams={};this.renderModal=function(f){return $j(jive.soy.acclaim.renderAcclaimModal(f))};this.handleFollow=function(h){if(this.$modal){var g=this.$modal.find("table.js-everyone-list, table.js-friends-list"),f="tr[data-user-id="+h.id+"]";if(!g.eq(1).find(f).length){g.eq(0).find(f).clone().prependTo(g.eq(1).find("tbody"))}}};jive.switchboard.addListener("follow.user.complete",this.handleFollow.bind(this))};this.showUsers=function(d,i){var e=this,g={centered:true,destroyOnClose:true,closeFocusSelector:i.context,initialFocusSelector:".modal-initially-focused",onClose:function(){$j(".js-pop").remove()}};this.soyParams=a.buildSoyParams(d,i);this.$modal&&this.$modal.remove();var f=this.renderModal(this.soyParams);if(b(d.activityType)){var h=jive.soy.acclaim.privateBookmarkNotification();f.find("table.js-everyone-list tbody").each(function(){$j(this).append(h)})}this.$modal=f.lightbox_me(g);this.$modal.find("#jive-view-picker input:checkbox").click(function(){var j=$j("#jive-view-picker input:checked");var k=0;if(j.length==1){k=j.val()}else{if(j.length==2){k=3}}e.$modal.find("table").hide();e.$modal.find("table").eq(k).show()});this.$modal.find(".jive-modal-content").endlessScroll({fireDelay:false,callback:function(j){if(e.soyParams.moreResults){e.emitP("loadUsersFromIndex",i,e.pageSize*j).addCallback(function(k){e.soyParams.moreResults=k.moreResults;e.appendUsers(k)})}}})};this.appendUsers=function(e){var j=e&&e.items?e.items:[];if(j.length>0){this.$modal.find(".j-js-private-bookmark-notification").remove();var d=this.$modal.find(".jive-modal-content tbody:visible");var g=d.parent().attr("id");var h=this.renderModal($j.extend({},this.soyParams,{users:j}));var f=h.find("table#"+g+" tr");d.append(f.clone());if(b(this.soyParams.activityType)){var i=jive.soy.acclaim.privateBookmarkNotification();d.append(i)}}};a.buildSoyParams=function(d,e){return{activityType:e.activityType,bidirectionalGraph:d.bidirectionalGraph,currentUserID:d.currentUserID,currentUserPartner:d.currentUserPartner,moreResults:d.moreResults,objectID:e.objectID,objectType:e.objectType,totalCount:d.totalCount,users:d.items,youID:e.youID||d.currentUserID,youPartner:e.youPartner||d.currentUserPartner}}});define("apps/browse/activity/info/views/activity_info_view",function(){return jive.Activity.Info.ActivityInfoView});
;
jive.namespace("Activity");define("apps/browse/activity/model/activity_source",["apps/shared/models/rest_service"],function(a){jive.Activity.ItemSource=a.extend(function(b){b.resourceType="activity";b.pluralizedResourceType=b.resourceType;this.getContentActivityUsers=function(e,f,d){var c={cache:false,data:{count:d,start:f},url:[this.RESOURCE_ENDPOINT,"users",e.activityType,e.objectType,e.objectID].join("/")};return this.commonAjaxRequest(new jive.conc.Promise(),"GET",c)}});return jive.Activity.ItemSource});
;
jive.namespace("Activity.Info");jive.Activity.Info.Main=jive.oo.Class.extend(function(a){this.init=function(){this.pageSize=20;this.source=new jive.Activity.ItemSource();this.view=new jive.Activity.Info.ActivityInfoView({pageSize:this.pageSize});var b=this;this.view.addListener("loadUsersFromIndex",function(e,d,c){b.source.getContentActivityUsers(e,d,b.pageSize).addCallback(function(f){c.emitSuccess(f)})})};this.showUsers=function(e,d){var b=this.view,c=new jive.conc.Promise();this.source.getContentActivityUsers(e,d,this.pageSize).addCallback(function(f){b.showUsers(f,e);c.emitSuccess($j.extend({totalCount:f.totalCount},e))}).addErrback(function(){c.emitError()});return c}});define("apps/browse/activity/info/main",function(){return jive.Activity.Info.Main});
;
if(!jive.acclaim){jive.acclaim=(function(c){var b=jive.conc.observable({}),a=new jive.Activity.Info.Main(),d={showBookmarks:"bookmark",showChildren:"children",showConnections:"connections",showFollowers:"follow",showLikes:"like",showMembers:"membership",showExternalContributorMembers:"externalContributorsMembership"};jive.dispatcher.listen(Object.keys(d),function(f,e){f=c.extend({activityType:d[e]},f);delete f.count;delete f.command;var g=c.extend({objectID:f.objectId,context:this},f);delete g.objectId;b.emit("beforeFetch",f);a.showUsers(g,0).addCallback(function(h){b.emit("afterFetch",c.extend({totalCount:h.totalCount},f))}).addErrback(function(){b.emit("afterFetch",f)})});return b})(jQuery)};
;
// This file was automatically generated from acclaim_count.soy.
// Please don't edit this file by hand.

goog.provide('jive.eae.acclaim.count');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');


jive.eae.acclaim.count = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.accessibilityLinkLabel) ? '<label class="j-508-label" id="' + soy.$$escapeHtmlAttribute(opt_data.command) + '-' + soy.$$escapeHtmlAttribute(opt_data.objectId) + '-' + soy.$$escapeHtmlAttribute(opt_data.objectType) + '-count-label">' + soy.$$escapeHtml(opt_data.accessibilityLinkLabel) + '</label>' : '', '<a ', (opt_data.id) ? 'id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '"' : '', ' ', (opt_data.classes) ? 'class="' + soy.$$escapeHtmlAttribute(opt_data.classes) + '"' : '', ' data-command="', soy.$$escapeHtmlAttribute(opt_data.command), '" data-object-id="', soy.$$escapeHtmlAttribute(opt_data.objectId), '" data-object-type="', soy.$$escapeHtmlAttribute(opt_data.objectType), '" data-count="', soy.$$escapeHtmlAttribute(opt_data.count), '" href="#" role="button"', (opt_data.accessibilityLinkLabel) ? 'aria-labelledby="' + soy.$$escapeHtmlAttribute(opt_data.command) + '-' + soy.$$escapeHtmlAttribute(opt_data.objectId) + '-' + soy.$$escapeHtmlAttribute(opt_data.objectType) + '-count-label"' : '', '>', (opt_data.text) ? soy.$$escapeHtml(opt_data.text) : soy.$$escapeHtml(opt_data.count), '</a>');
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from acclaim.soy.
// Please don't edit this file by hand.

goog.provide('jive.eae.acclaim.acclaimContainerMedium');
goog.provide('jive.eae.acclaim.activityAcclaimLinkContainer');
goog.provide('jive.eae.acclaim.expressLike');
goog.provide('jive.eae.acclaim.likeControl');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.eae.acclaim.count');
goog.require('jive.shared.soy.getCountTextByType');


jive.eae.acclaim.likeControl = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  switch (opt_data.type) {
    case 'medium':
      jive.eae.acclaim.acclaimContainerMedium(opt_data, output);
      break;
    case 'mini':
      jive.eae.acclaim.activityAcclaimLinkContainer(opt_data, output);
      break;
    case 'small':
      output.append('<span class="j-js-liking-control">');
      jive.eae.acclaim.activityAcclaimLinkContainer(opt_data, output);
      output.append('</span>');
      break;
  }
  return opt_sb ? '' : output.toString();
};


jive.eae.acclaim.activityAcclaimLinkContainer = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.showIcon) ? '<span class="jive-icon-sml jive-' + ((opt_data.showGlyph) ? 'glyph' : 'icon') + '-like"></span>' : '', '<span id="acclaim-container-', soy.$$escapeHtmlAttribute(opt_data.objectType), '-', soy.$$escapeHtmlAttribute(opt_data.objectId), '" class="acclaim-container"><span id="jive-acclaim-like-container-', soy.$$escapeHtmlAttribute(opt_data.objectType), '-', soy.$$escapeHtmlAttribute(opt_data.objectId), '" data-likes="', soy.$$escapeHtmlAttribute(opt_data.likeCount), '" data-can-like="', soy.$$escapeHtmlAttribute(opt_data.canLike), '" data-type="', (opt_data.type) ? soy.$$escapeHtmlAttribute(opt_data.type) : 'mini', '" data-showicon="', soy.$$escapeHtmlAttribute(opt_data.showIcon), '" class="js-acclaim-container acclaim-like-container font-color-meta-light"><span class="j-social-action">');
  jive.eae.acclaim.expressLike(soy.$$augmentMap(opt_data, {disabled: ! opt_data.canLike, iconType: 'none', type: (opt_data.liked) ? 'unlike' : 'like', classes: 'jive-acclaim-likelink'}), output);
  output.append(' ');
  var param61 = new soy.StringBuilder();
  jive.shared.soy.getCountTextByType({count: opt_data.likeCount, type: 'showlikescount'}, param61);
  jive.eae.acclaim.count(soy.$$augmentMap(opt_data, {command: 'showLikes', count: opt_data.likeCount, classes: 'jive-acclaim-likedlink', text: '(' + soy.$$escapeHtml(opt_data.likeCount) + ')', accessibilityLinkLabel: param61.toString()}), output);
  output.append('</span></span></span>');
  return opt_sb ? '' : output.toString();
};


jive.eae.acclaim.acclaimContainerMedium = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span>');
  if (opt_data.canLike) {
    jive.eae.acclaim.expressLike(soy.$$augmentMap(opt_data, {disabled: ! opt_data.canLike, iconType: 'medium', type: (opt_data.liked) ? 'unlike' : 'like', classes: 'jive-acclaim-likelink j-social-action'}), output);
  } else {
    output.append('<span class="j-social-action"><span class="jive-icon-med jive-icon-like"></span>', (opt_data.liked) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('acclaim.liking.unlike'),[])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('acclaim.liking.like'),[])), '</span>');
  }
  var param92 = new soy.StringBuilder();
  jive.shared.soy.getCountTextByType({count: opt_data.likeCount, type: 'showlikescount'}, param92);
  jive.eae.acclaim.count(soy.$$augmentMap(opt_data, {command: 'showLikes', count: opt_data.likeCount, classes: 'j-people-count j-rc3 jive-acclaim-likedlink', accessibilityLinkLabel: param92.toString()}), output);
  output.append('</span>');
  return opt_sb ? '' : output.toString();
};


jive.eae.acclaim.expressLike = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((! opt_data.disabled) ? '<a ' + ((opt_data.id) ? 'id="' + soy.$$escapeHtmlAttribute(opt_data.id) + '"' : '') + 'class="' + ((opt_data.classes) ? soy.$$escapeHtmlAttribute(opt_data.classes) : '') + ' ' + soy.$$escapeHtmlAttribute(opt_data.type) + '" data-command="' + soy.$$escapeHtmlAttribute(opt_data.type) + '" data-object-id="' + soy.$$escapeHtmlAttribute(opt_data.objectId) + '" data-object-type="' + soy.$$escapeHtmlAttribute(opt_data.objectType) + '" title="' + ((opt_data.type == 'like') ? soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('acclaim.liking.like'),[])) : soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('acclaim.liking.unlike'),[]))) + '" href="#">' + ((opt_data.iconType != 'none') ? '<span class="jive-icon-' + ((opt_data.iconType == 'small') ? 'sml' : (opt_data.iconType == 'medium') ? 'med' : '') + ' jive-icon-like"></span>' : '') + ((opt_data.type == 'like') ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('acclaim.liking.like'),[])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('acclaim.liking.unlike'),[]))) + '</a>' : ((opt_data.iconType != 'none') ? '<span class="jive-icon-' + ((opt_data.iconType == 'small') ? 'sml' : (opt_data.iconType == 'medium') ? 'med' : '') + ' jive-icon-like"></span>' : '') + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('acclaim.liking.like'),[])));
  return opt_sb ? '' : output.toString();
};

;
jive.namespace("Liking");define("apps/like/models/like_source",["apps/shared/models/rest_service"],function(a){jive.Liking.LikeSource=a.extend(function(b){jive.conc.observable(this);b.resourceType="acclaim";b.pluralizedResourceType=b.resourceType;this.getLikes=function(d,f){var e=this.RESOURCE_ENDPOINT+"/"+d+"/"+f+"/scoredisplay";var c="like";return this.commonAjaxRequest(new jive.conc.Promise(),"POST",{url:e,data:{ratingType:c}})};this.getLikeData=function(d,f){var e=this.RESOURCE_ENDPOINT+"/"+d+"/"+f;var c="like";return this.commonAjaxRequest(new jive.conc.Promise(),"GET",{url:e,data:{ratingType:c}})};this.setLiked=function(c,e,f){var d,g,h="like",k=1,l=new jive.conc.Promise();if(c){g={ratingType:h,voteValue:k};var j=$j.deparam.querystring().fromQ;if(j){g.fromQuest=j}else{if(jive.Onboarding&&jive.Onboarding.Controller){var i=jive.Onboarding.Controller.getActiveQuestAndStep();if(i.activeQuestID=="StayInTouchQuest"&&i.activeQuestStep==1){g.fromQuest=i.activeQuestID}}}if(g.fromQuest){l.addCallback(function(){jive.localexchange.emit("trial.like.created");jive.dispatcher.dispatch("trial.updatePercentComplete")})}d="/"+this.resourceType+"/"+e+"/"+f+"/addvote"}else{d="/"+this.resourceType+"/"+e+"/"+f+"/removevote";g={ratingType:h}}$j.post(jive.rest.url(d),g,function(){l.emitSuccess()});return l}});return jive.Liking.LikeSource});
;
if(!jive.Like){jive.namespace("Like",(function(c,d){function b(k,j,e,h){var l=k.closest(".js-acclaim-container"),g,f=l.data("likes"),m={canLike:true,liked:j,objectId:h,objectType:e,type:l.data("type"),showIcon:l.data("showicon")};f+=j?1:-1;f=f<0?0:f;m.likeCount=f;switch(m.type){case"mini":g=k.closest(".j-js-liking-control").html(d(m));break;case"medium":g=l.data("likes",f).html(d(m));break;case"small":g=$j(d($j.extend({showGlyph:true},m)));var i=l.closest(".j-js-liking-control");if(i.length>0){i.replaceWith(g)}else{l.replaceWith(g)}break;default:throw"Unknown widget type"}if(g){g.find("a.jive-acclaim-likelink").focus()}}var a={};jive.dispatcher.listen(["like","unlike"],function(i,f,h){var e=i.objectType+"_"+i.objectId;if(a[e]){console.log("duplicate like request, ignoring",i,f,h);return}else{a[e]=true}var g=f==="like";c.setLiked(g,i.objectType,i.objectId).addCallback(function(){b($j(h),g,i.objectType,i.objectId);jive.switchboard.emit("acclaim.recorded",g,i.objectType,i.objectID)}).always(function(){delete a[e]})});return{}})(new jive.Liking.LikeSource({}),jive.eae.acclaim.likeControl));define("apps/like/like",jive.Like)};
;
jive.namespace("MoreLikeThisApp");jive.MoreLikeThisApp.MoreLikeThisSource=function(){var c=jive.rest.url("/morelikethis");function b(d){if(typeof d=="function"){d={success:d}}return d}function a(d,h,g,f){f=b(f);var e=c+"/"+d+"/"+h+"/type/"+d+"?numResults="+g;$j.ajax({type:"GET",url:e,dataType:"json",success:function(i){if(typeof f.success=="function"){f.success.call(i,i.morelikethisresultobject)}},error:function(i){if(typeof f.error=="function"){f.error.call(i)}}});return this}this.getMoreLike=a};define("apps/morelikethis/model/morelikethis_source",function(){return jive.MoreLikeThisApp.MoreLikeThisSource});
;
jive.namespace("MoreLikeThisApp");jive.MoreLikeThisApp.MoreLikeThisView=function(i,j){var c=j.noContentMessage,g=j.errorMessage,e="#"+i;function b(l){var k="";if(l.length>0){k+='<ul class="j-icon-list">';l.forEach(function(m){var n;if(a(m.objectType)){n=jive.shared.displayutil.containerDisplayNameLink({container:f(m)})}else{n='<a href="'+_jive_base_url+m.objectURL+'"><span class="'+m.objectClass+'"></span>'+m.subject+"</a>"}k+="<li>"+n+"</li>"});k+="</ul>"}else{k="<p>"+c+"</p>"}$j(e).empty().append(k)}var h=[3,2020,14,600,700];function f(k){return{jiveObjectURL:k.objectURL,id:k.ID,type:k.objectType,name:'<span class="'+k.objectClass+'"></span>'+k.subject}}function a(k){return $j.inArray(k,h)!=-1}function d(){$j(e).empty().append("<p>"+g+"</p>")}this.setContent=b;this.displayError=d};define("apps/morelikethis/views/morelikethis_view",function(){return jive.MoreLikeThisApp.MoreLikeThisView});
;
jive.namespace("MoreLikeThisApp");jive.MoreLikeThisApp.Main=function(d){var b=d.objectType,h=d.objectID,a=d.containerID,e=d.numResults||5,g,f;function c(){f.getMoreLike(b,h,e,{success:function(i){g.setContent(i)},error:function(){g.displayError()}})}g=new jive.MoreLikeThisApp.MoreLikeThisView(a,{noContentMessage:d.noContentMessage,errorMessage:d.errorMessage});f=new jive.MoreLikeThisApp.MoreLikeThisSource();$j(document).ready(function(){c()})};define("apps/morelikethis/main",function(){return jive.MoreLikeThisApp.Main});
;
// This file was automatically generated from autosearch.soy.
// Please don't edit this file by hand.

goog.provide('jive.autosearch.contentItem');
goog.provide('jive.autosearch.contentItemDetail');
goog.provide('jive.autosearch.lightbox');
goog.provide('jive.autosearch.overlay');
goog.provide('jive.autosearch.peopleItem');
goog.provide('jive.autosearch.placeItem');
goog.provide('jive.autosearch.resultList');
goog.provide('jive.autosearch.resultSection');
goog.provide('jive.autosearch.results');
goog.provide('jive.autosearch.showMoreAccessibleLabel');
goog.provide('jive.autosearch.spotlightPopup');
goog.provide('jive.autosearch.spotlightView');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.nav.searchForm');
goog.require('jive.shared.displayutil.avatar');
goog.require('jive.shared.displayutil.icon');


jive.autosearch.spotlightPopup = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="jive-spotlight-search-result" data-component="popup" style="display: none;"><div>');
  return opt_sb ? '' : output.toString();
};


jive.autosearch.spotlightView = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div>', (opt_data.view == 'frequent' || opt_data.view == 'recent' || opt_data.view == 'bookmarks') ? '<p class="j-pop-desc"><strong>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('search.view.default.header'),[opt_data.communityName])) + '</strong> <span class="j-ui-elem j-spotlight-arrow"></span></p><h5>' + ((! opt_data.availableViews['bookmarks']) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('search.view.nobookmarks.title'),[])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('search.view.default.title'),[]))) + '</h5><nav class="j-spotlightnav font-color-meta" >' + ((opt_data.availableViews['frequent']) ? '<a data-component="button" data-view="frequent" class="' + ((opt_data.view == 'frequent') ? 'j-active' : '') + '" href="javascript:void(0);">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('search.view.frequent.caption'),[])) + '</a>' : '') + ((opt_data.availableViews['recent']) ? '<a data-component="button" data-view="recent" class="' + ((opt_data.view == 'recent') ? 'j-active' : '') + '" href="javascript:void(0);">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('search.view.recent.caption'),[])) + '</a>' : '') + ((opt_data.availableViews['bookmarks']) ? '<a data-component="button" data-view="bookmarks" class="' + ((opt_data.view == 'bookmarks') ? 'j-active' : '') + ' j-last" href="javascript:void(0);">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('search.view.bookmarks.caption'),[])) + '</a>' : '') + '</nav>' : ((opt_data.availableViews['frequent'] || opt_data.availableViews['recent'] || opt_data.availableViews['bookmarks']) ? '<p class="j-pop-desc">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('search.view.search.header.history'),[])) + '</p>' : '') + ((opt_data.view == 'all' || opt_data.view == 'filtered') ? '<h5>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('search.view.search.title'),[])) + ' <span class="spinner" data-component="progressmeter" data-mode="undetermined" data-active="false" data-size="small"></span></h5>' : '') + ((opt_data.availableViews['filtered'] && opt_data.availableViews['all']) ? '<nav class="j-spotlightnav font-color-meta trimmed"><a href="javascript:void(0);" data-component="button" data-view="all" class="' + ((opt_data.view == 'all') ? 'j-active' : '') + '">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('search.view.all.caption'),[])) + '</a><a href="javascript:void(0);" data-component="button" data-view="filtered" class="' + ((opt_data.view == 'filtered') ? 'j-active' : '') + ' j-last">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('search.view.filtered.caption'),[opt_data.filterDisplayName])) + '</a></nav>' : ''), '<div class="j-spotlight-find" data-component="list" data-wrap="true"><div data-component="loadingpanel" class="j-spotlight-working font-color-meta"><div>', (opt_data.view == 'all' || opt_data.view == 'filtered') ? '<p>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('search.view.search.searching.text'),[])) + '</p>' : '<p>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('search.view.history.loading.text'),[])) + '</p>', '</div><span data-component="progressmeter" data-mode="undetermined" data-active="false"></span></div></div></div>');
  return opt_sb ? '' : output.toString();
};


jive.autosearch.results = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.results.content && opt_data.results.content.length) {
    output.append('<div class="j-results" data-type="contents">', (! (opt_data.view == 'bookmarks') && ! (opt_data.view == 'filtered')) ? '<h4 class="font-color-meta" id="header_content">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('search.search_for.content'),[])) + '</h4>' : '');
    jive.autosearch.resultSection(soy.$$augmentMap(opt_data, {list: opt_data.results.content, type: 'content', max: (! (opt_data.view == 'bookmarks') && ! (opt_data.view == 'filtered')) ? '5' : ''}), output);
    output.append('</div>');
  }
  if (opt_data.results.people && opt_data.results.people.length) {
    output.append('<div class="j-results" data-type="people"><h4 class="font-color-meta" id="header_people">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('search.search_for.people'),[])), '</h4>');
    jive.autosearch.resultSection(soy.$$augmentMap(opt_data, {list: opt_data.results.people, type: 'people', max: 5}), output);
    output.append('</div>');
  }
  if (opt_data.results.places && opt_data.results.places.length) {
    output.append('<div class="j-results" data-type="places"><h4 class="font-color-meta"  id="header_places">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('search.search_for.places'),[])), '</h4>');
    jive.autosearch.resultSection(soy.$$augmentMap(opt_data, {list: opt_data.results.places, type: 'places', max: 5}), output);
    output.append('</div>');
  }
  output.append(((! opt_data.results.content || ! opt_data.results.content.length) && (! opt_data.results.people || ! opt_data.results.people.length) && (! opt_data.results.places || ! opt_data.results.places.length)) ? '<div class="j-spotlight-empty font-color-meta">' + ((opt_data.view == 'frequent') ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('search.view.frequent.empty.text'),[])) : (opt_data.view == 'recent') ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('search.view.recent.empty.text'),[])) : (opt_data.view == 'bookmarks') ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('search.view.bookmarks.empty.text'),[])) : (opt_data.view == 'all' || opt_data.view == 'filtered') ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('search.view.search.empty.text'),[])) : '') + '</div>' : '');
  return opt_sb ? '' : output.toString();
};


jive.autosearch.resultSection = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ol aria-labelledby="header_', soy.$$escapeHtmlAttribute(opt_data.type), '" role="listbox">');
  jive.autosearch.resultList(opt_data, output);
  output.append((opt_data.view == 'bookmarks') ? '<li class="j-listitem font-color-meta" data-component="listitem" role="option"><a class="more all" href="' + soy.$$filterNoAutoescape(jive.soy.func.buildUrl('/bookmarks')) + '">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('search.history.bookmarks.link'),[])) + '<span class="arrow-right"></span></a></li>' : (opt_data.view == 'all' || opt_data.view == 'filtered') ? '<li class="j-listitem' + ((opt_data.max && opt_data.list.length > opt_data.max) ? ' j-inactive' : '') + ' font-color-meta" data-component="listitem" role="option"><a class="more all" href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl('/search.jspa'))) + '?q=' + soy.$$escapeUri(opt_data.searchTerm) + '&facet=' + soy.$$escapeUri(opt_data.type) + ((opt_data.view == 'filtered') ? '&' + soy.$$escapeUri(opt_data.filterType) + '=' + soy.$$escapeUri(opt_data.filter) : '') + '" >' + ((opt_data.type == 'places') ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('search.results.all.place.link'),[])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('search.results.all.' + opt_data.type + '.link'),[]))) + '<span class="arrow-right"></span></a></li>' : (opt_data.view == 'recent') ? '<li class="j-listitem' + ((opt_data.max && opt_data.list.length > opt_data.max) ? ' j-inactive' : '') + ' font-color-meta" data-component="listitem" role="option"><a class="more all" href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl('/' + opt_data.type))) + '?filterID=historyarchetype%5B' + ((opt_data.type == 'places') ? 'containers' : soy.$$escapeUri(opt_data.type)) + '%5D" >' + ((opt_data.type == 'places') ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('search.history.recent.containers.link'),[])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('search.history.recent.' + opt_data.type + '.link'),[]))) + '<span class="arrow-right"></span></a></li>' : '');
  if (opt_data.view != 'bookmarks' && opt_data.max && opt_data.list.length > opt_data.max) {
    output.append('<li class="j-listitem font-color-meta" data-component="listitem" role="option"><a href="#" class="more" data-component="button" data-command="more"><span role="presentation" aria-hidden="true">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('search.show.more'),[opt_data.list.length - opt_data.max])), '</span><span role="img" class="arrow-down" aria-hidden="true"></span>');
    jive.autosearch.showMoreAccessibleLabel({type: opt_data.type, numMoreResults: opt_data.list.length - opt_data.max}, output);
    output.append('</a></li>');
  }
  output.append('</ol>');
  return opt_sb ? '' : output.toString();
};


jive.autosearch.showMoreAccessibleLabel = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="j-508-label" id="', soy.$$escapeHtmlAttribute(opt_data.type), '-show-more-label">', (opt_data.type == 'places') ? (opt_data.numMoreResults == 1) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('search.show.more.places.singular'),[opt_data.numMoreResults])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('search.show.more.places.plural'),[opt_data.numMoreResults])) : (opt_data.type == 'people') ? (opt_data.numMoreResults == 1) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('search.show.more.people.singular'),[opt_data.numMoreResults])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('search.show.more.people.plural'),[opt_data.numMoreResults])) : (opt_data.numMoreResults == 1) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('search.show.more.content.singular'),[opt_data.numMoreResults])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('search.show.more.content.plural'),[opt_data.numMoreResults])), '</span>');
  return opt_sb ? '' : output.toString();
};


jive.autosearch.resultList = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var itemList226 = opt_data.list;
  var itemListLen226 = itemList226.length;
  for (var itemIndex226 = 0; itemIndex226 < itemListLen226; itemIndex226++) {
    var itemData226 = itemList226[itemIndex226];
    output.append('<li data-component="listitem" class="j-listitem ', (opt_data.max && itemIndex226 >= opt_data.max) ? 'j-inactive' : '', ' ', (opt_data.type == 'people') ? 'j-listitem-people' : '', '" role="option" data-type="', soy.$$escapeHtmlAttribute(itemData226.type), '" data-id="', soy.$$escapeHtmlAttribute(itemData226.id), '">');
    switch (opt_data.type) {
      case 'content':
        jive.autosearch.contentItem({item: itemData226}, output);
        break;
      case 'people':
        jive.autosearch.peopleItem({item: itemData226}, output);
        break;
      case 'places':
        jive.autosearch.placeItem({item: itemData226}, output);
        break;
    }
    output.append('</li>');
  }
  return opt_sb ? '' : output.toString();
};


jive.autosearch.contentItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a ', (opt_data.item.resources.html) ? ' href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.item.resources.html.ref)) + '"' : '', ' class="j-result-bookmark">');
  if (opt_data.item.type == 'favorite') {
    output.append('<span data-id="', soy.$$escapeHtmlAttribute(opt_data.item.id), '" class="j-remove-mark jive-icon-med jive-icon-bookmark-ribbon" data-component="button" data-command="remove"></span>');
    if (opt_data.item.favoriteObject.type == 'url') {
      jive.autosearch.contentItemDetail(opt_data, output);
    } else {
      jive.autosearch.contentItemDetail({item: opt_data.item.favoriteObject}, output);
    }
  } else {
    jive.autosearch.contentItemDetail(opt_data, output);
  }
  output.append('</a>');
  return opt_sb ? '' : output.toString();
};


jive.autosearch.contentItemDetail = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  jive.shared.displayutil.icon(soy.$$augmentMap(opt_data.item, {size: 'med'}), output);
  output.append((opt_data.item.subject) ? '<span class="result-title">' + soy.$$escapeHtml(opt_data.item.subject) + '</span><span class="j-508-label">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.left_paren'),[])) + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.access.content.type.' + opt_data.item.type),[])) + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.right_paren'),[])) + '</span>' : (opt_data.item.parentContent && opt_data.item.parentContent.name) ? '<span class="result-title">' + soy.$$escapeHtml(opt_data.item.parentContent.name) + '</span><span class="j-508-label">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.left_paren'),[])) + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.access.content.type.' + opt_data.item.parentContent.type),[])) + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.right_paren'),[])) + '</span>' : '', (opt_data.item.author) ? ' <em class="font-color-meta-light">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('search.spotlight.by_author_posted_date'),[opt_data.item.author.displayName,(opt_data.item.updatedDate ? _jive_moment((parseFloat(opt_data.item.updatedDate) ? parseFloat(opt_data.item.updatedDate) : opt_data.item.updatedDate)).lang(_jive_locale.toLowerCase().replace('_','-')).format('ll') : '')])) + '</em>' : '', (opt_data.item.displayExternalAccess) ? '<span class="font-color-meta-light j-browse-external-access"><em>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('partner.browse.ext_access'),[])) + '</em></span>' : '');
  return opt_sb ? '' : output.toString();
};


jive.autosearch.peopleItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a href="', soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.item.resources.html.ref)), '">');
  jive.shared.displayutil.avatar({enabled: true, username: opt_data.item.jive.username, id: null, displayName: opt_data.item.displayName, visible: true, prop: null, avatarID: opt_data.item.thumbnailId, size: 24, hideTooltip: true, hideLink: true}, output);
  output.append('<span class="result-title">', soy.$$escapeHtml(opt_data.item.displayName), '</span><span class="j-508-label">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.left_paren'),[])), soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.user'),[])), soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.right_paren'),[])), '</span>', (opt_data.item.title || opt_data.item.department) ? ' <em class="font-color-meta-light">' + ((opt_data.item.title && opt_data.item.department) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('search.result.people.in'),[opt_data.item.title,opt_data.item.department])) : (opt_data.item.title) ? soy.$$escapeHtml(opt_data.item.title) : (opt_data.item.department) ? soy.$$escapeHtml(opt_data.item.department) : '') + '</em>' : '', (opt_data.item.displayExternalContributor) ? '<span class="font-color-meta-light j-browse-external-access"><em>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('partner.browse.external.contributor'),[])) + '</em></span>' : '', '</a>');
  return opt_sb ? '' : output.toString();
};


jive.autosearch.placeItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a href="', soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.item.resources.html.ref)), '"><span class="jive-icon-med jive-icon-', soy.$$escapeHtmlAttribute(opt_data.item.type), '"></span><span class="result-title">', soy.$$escapeHtml(opt_data.item.name), '</span><span class="j-508-label">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.left_paren'),[])), soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.' + opt_data.item.type),[])), soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.right_paren'),[])), '</span>', (opt_data.item.displayExternalAccess) ? '<span class="font-color-meta-light j-browse-external-access"><em>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('partner.browse.ext_access'),[])) + '</em></span>' : '', '</a>');
  return opt_sb ? '' : output.toString();
};


jive.autosearch.overlay = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.type == 'bookmark') ? '<div class="j-tooltip" role="alert"><span class="jive-icon-med jive-icon-bookmark-ribbon"></span><span class="j-tooltip-content">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('search.placeholder.bookmark'),[])) + '</span><span class="j-ui-elem j-pointer"></span></div>' : '');
  return opt_sb ? '' : output.toString();
};


jive.autosearch.lightbox = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="jive-modal j-tile-searchContent"><header><h2>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('search.view.lightbox.title'),[])), '</h2></header><label class="j-508-label" id="close-modal-508">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.close.modal'),[])), '</label><a href="#" class="j-modal-close-top close" aria-labelledby="close-modal-508" title="', soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('global.close.modal'),[])), '">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.close'),[])), ' <span class="j-close-icon j-ui-elem" role="img"></span></a><section class="jive-modal-content"><div class="j-spotlight-search j-tileModal-search" role="search">');
  jive.nav.searchForm(soy.$$augmentMap(opt_data, {spotlightSearchEnabled: true, fieldId: 'autosearch-lightbox', anchorId: 'searchpopupanchor-lightbox'}), output);
  output.append('</div><div class="jive-spotlight-search-result js-search-results"></div></section></div>');
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from loading.soy.
// Please don't edit this file by hand.

goog.provide('jive.nav.loading');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');


jive.nav.loading = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<p class="font-color-meta-light j-menu-loading clearfix"><img src="', soy.$$escapeHtml(jive.soy.func.buildUrl('/images/jive-image-loading.gif')), '" alt="', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('customize.loading'),[])), '" /> <span>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('customize.loading'),[])), '</span></p>');
  return opt_sb ? '' : output.toString();
};

;
jive=this.jive||{};jive.oo=jive.oo||{};jive.oo["abstract"]=function(){};jive.oo._abstract=jive.oo["abstract"];
;
jive.namespace("Navbar.Menu");jive.Navbar.Menu.AbstractListView=jive.AbstractView.extend(function(a,b){this.init=function(d,f,e){var c=this;c.$menu=$j(f);c.$button=$j(d);c.menuOpts=e||{};c.popoverOpen=false;c.$button.click(function(g){if(!c.popoverOpen){c.$button.addClass("active");c.showSpinner();if(c.spinning){c.spinning=false;c.openPopover();c.spinning=true}c.emitP("toggle").addCallback(function(h){c.data=h||c.data;c.render(c.data);c.openPopover()}).always(function(){c.hideSpinner()})}g.preventDefault()});c.$menu.on("navbarPopoverLoad",function(){var g=$j(this);jive.conc.nextTick(function(){jive.Accessibility.focusIn(g)})})};this.render=jive.oo._abstract;a.setContent=function(c,d){this.content=$j(c);if(this.popoverOpen){this.$menu.trigger("updatePopoverHTML",[this.content,d])}else{this.$menu.children().remove();this.$menu.append(this.content);if(d){d()}}};this.getContent=function(){this.content=this.content||this.$menu.children();return this.content};this.close=function(){this.$menu.trigger("close")};this.repositionPopover=$j.noop;a.createSpinner=function(){if(!this.popoverOpen){this.spinner=new jive.loader.LoaderView();this.setContent(this.spinner.getContent());this.openPopover()}else{b.createSpinner.call(this)}this.spinning=true};a.destroySpinner=function(){this.spinning=false;b.destroySpinner.call(this);if(this.spinner){this.spinner.destroy()}};a.openPopover=function(){var c=this;if(!c.popoverOpen&&!c.spinning){c.$button.addClass("active");var d={};c.$menu.popover($j.extend(d,{context:c.$button,containWithinViewport:true,flip:false,hoverSelection:true,returnPopover:true,onClose:function(){c.repositionPopover=$j.noop;c.$button.removeClass("active");c.popoverOpen=false;c.$menu.find("div.js-onboarding-tip").remove()},onLoad:function(){c.repositionPopover=d.reposition;c.$menu.trigger("navbarPopoverLoad")}},c.menuOpts));c.popoverOpen=true}}});define("apps/navbar/menu/view/abstract_list",function(){return jive.Navbar.Menu.AbstractListView});
;
jive.namespace("Navbar.Menu");jive.Navbar.Menu.Main=jive.oo.Class.extend(function(a){a.init=function(c,e,d){var b=this;this.initialized=false;this.buttonSelector=c;this.listView=this.buildListView(c,e,d);this.itemSource=this.buildItemSource();this.listView.addListener("toggle",function(f){b.populate(f)})};a.populate=function(c){var b=this;if(!b.initialized){if(b.itemSource!=null){$j(b.buttonSelector).attr("aria-busy","true");b.itemSource.findAll(b.sourceParams()).addCallback(function(d){c.emitSuccess(d);$j(b.buttonSelector).attr("aria-busy","false");b.initialized=true})}else{c.emitSuccess({});b.initialized=true}}else{c.emitSuccess()}return c};a.invalidate=function(){this.initialized=false};a.sourceParams=function(){return{}};a.buildListView=jive.oo._abstract;a.buildItemSource=jive.oo._abstract});define("apps/navbar/menu/main",function(){return jive.Navbar.Menu.Main});
;
jive.namespace("Apps");jive.Apps.RteArtifacts=jive.oo.Class.extend(function(b){var i=CS_RESOURCE_BASE_URL+"/images/tiny_mce3/themes/advanced/skins/default/img/progress.gif";var f=450;var h="OpenSocial/2.5";var g="legacy";this.init=function(){};b.showMessage=function(l,k){$j("<p/>").html(l).message({style:k})};this.buildArtifactMarkup=function(v,z){var m=v?v[osapi.container.GadgetSite.RPC_ARG_KEY]:null;var o=m.jiveData.app;var y=z.artifactJson;var r=z.rteBound;b.makeArtifactURLsAbsolute(y,o,z.suppressImageUpload);var t=b.normalizeArtifact(y);var l=t.icon;var q=t.previewImage;var x=l||q;if(console){console.log("imageUrl",x)}var u=this;var s=function(K,H){if(!K){v.callback({error:"No artifactJson metadata was provided"});return}var I=m.getActiveSiteHolder().getGadgetInfo();var C=I.modulePrefs.features.actions;var A;if(C&&C.params&&C.params["action-contributions"]){var F=C.params["action-contributions"];for(var E=0;E<F.length;++E){var M=F[E].replace(/\n/mg,"");var D=M.match(/id="(.+?)"/);A=D?D[1]:null;if(A&&A==z.actionId){break}}}if(!A){v.callback({error:"App does not define action "+z.actionId});return}if(!m){u.showMessage("Error occured, app site missing");v.callback({error:"Application framework error"});return}var N=m.jiveData;var J=u.createArtifact({ed:document,appUUID:N.app.appUUID,appInstanceUUID:N.app.appInstanceUUID,data:K,rteBound:r});var G=$j(J);var L=G.wrap("<span></span>").parent().html();if($j.browser.msie){if($j.browser.version<9){L=L.replace(/<\w[^>]*>/g,function(O){return O.replace(/(\w+=)([-.\w]+)/g,'$1"$2"')});L=L.replace(/(<IMG((\s+\w+(\s*=\s*(?:".*?"|'.*?'|[^'">\s]+))?)+\s*|\s*)\s*>)/g,"$1</IMG>")}else{var B=function(O,P){var Q=G.attr(P);if(Q){var R=Q.replace(/\"/g,"&quot;");O=O.replace(P+"='"+Q+"'",P+'="'+R+'"')}return O};L=B(L,"_context")}}v.callback({markup:L,error:H})};if(z.suppressImageUpload||!x){s(y);return}var n=l?b.uploadArtifactIcon(l,o.appInstanceUUID):undefined;var p=q?b.uploadArtifactImage(q):undefined;var k=n||p;if(!k){var w="Error uploading iconUrl or previewImage.";u.showMessage(w);if(console){console.log(w)}s(y,w);return}k.addCallback(function(A){A=A||x;if(l){b.updateIcon(y,A)}else{b.updatePreviewImage(y,A)}s(y)}).addErrback(function(A){var B="Could not upload "+x;u.showMessage(B);if(console){console.log(B,A)}s(y,B)})};b.isProxiedUrl=function(k){return k.startsWith(gadgets.io.getProxyUrl().split("?")[0])};b.makeRelativeAppResourceUrl=function(k,m){var l=m.appURL?m.appURL.match(/.*\//)[0]:"";if(k.match(/^http/)===null&&k.match(/^\/\//)===null){return l+k}return null};this.makeArtifactURLsAbsolute=function(l,q,k){var m=function(s){var r=b.makeRelativeAppResourceUrl(s,q);if(r){return r}else{if(s.match(/^\/\//)){if(typeof gadgets!="undefined"){var v=gadgets.io.getProxyUrl();var u=v.match(/^https?:(\/\/.+)\?/);if(u&&u.length>1){u[1]=u[1].substring(0,2)+".*"+u[1].substring(2);if(s.match("^"+u[1])){var t=s.match(/url=(.+)&?/);if(t&&t.length>1){return t[1]}}}}}}};var p=b.normalizeArtifact(l);var o=p.previewImage;if(o){o=m(o)||o;if(!k&&!b.isProxiedUrl(o)){o=gadgets.io.getProxyUrl(o)}b.updatePreviewImage(l,o)}var n=p.icon;if(n){n=m(n)||n;if(!k&&!b.isProxiedUrl(n)){n=gadgets.io.getProxyUrl(n)}b.updateIcon(l,n)}if(console){console.log(l)}};b.updatePreviewImage=function(l,k){if(b.deduceArtifactFormatType(l)==h){l.previewImage=k}else{l.display.previewImage=k}};b.updateIcon=function(k,l){if(b.deduceArtifactFormatType(k)==h){k.preferredExperience.display.icon=l}else{k.display.icon=l}};b.deduceArtifactFormatType=function(k){return k.preferredExperience?h:g};b.normalizeArtifact=function(l){var p=b.deduceArtifactFormatType(l);if(p==h){var o=l.preferredExperience;var k=o.target.type;k=k==="gadget"?"embed":k;o.display=o.display||{};o.target=o.target||{};var n=o.display.type;var m=n=="image"?o.display.altText:o.display.label;return{hasPreviewImage:n=="image"&&l.previewImage,hasIcon:n=="text"&&Boolean(o.display.icon),linkType:k||"none",label:m||l.actionLabel,icon:o.display.icon,previewImage:l.previewImage,url:l.url,view:o.target.view,context:l.context,artifactFormatType:p}}else{l.display=l.display||{};l.target=l.target||{};return{hasPreviewImage:l.display.type=="image",hasIcon:l.display.type=="text"&&Boolean(l.display.icon),linkType:l.target.type||"none",label:l.display.label||l.actionLabel,icon:l.display.icon,previewImage:l.display.previewImage,url:l.target.url,view:l.target.view,context:l.target.context,artifactFormatType:p}}};b.extractFileName=function(k){return b.isProxiedUrl(k)?k.match(/.*\%2F(.+)/)[1]:k.match(/.*\/(.+)/)[1]};this.createArtifact=function(m){var x=m.rte,p=m.ed,D=m.appUUID,E=m.actionId,J=m.data,C=m.editedContentBean,n=m.appInstanceUUID,k=m.rteBound;var q=x||k;var G=q?function(M){return"__"+M}:function(M){return"_"+M};J=J||{};J.actionLabel=m.actionLabel;var s=b.normalizeArtifact(J);var u=s.hasPreviewImage;var B=s.hasIcon;var A=s.linkType;var v=s.label;var H=s.icon;var z=s.previewImage;var o=s.url;var y=s.view;var l=s.context;var L=x?p.getDoc():p;var r=$j(L.createElement("a"));r.attr("jivemacro","appEmbeddedView");r.attr("__jive_macro_name","appEmbeddedView");r.attr("href",A=="url"?o:"javascript:;");if(x){if(u){var F=(C&&C.attachmentConfigActionBean)?C.attachmentConfigActionBean.canAttach:true;var I=b.extractFileName(z);var w=$j(p.dom.create("img")).attr("src",i).attr("alt",I);r.append(w);var t=$j(p.dom.create("img")).attr("src",z).attr("alt",I).addClass("jiveImage").hide();r.append(t);t.load(function(){t.unbind();j(t);w.unbind().remove();t.show();jive.conc.nextTick(function(){if(F&&e(t)){c(t,x,p).addCallback(function(M){z=M.attr("src");r.attr("__previewImage",z)})}})});r.addClass("jive-link-app-preview")}else{if(B){var F=(C&&C.attachmentConfigActionBean)?C.attachmentConfigActionBean.canAttach:true;r.text(v);r.css("background-image","url('"+H+"')");r.addClass("jive-link-app-icon");r.attr("__icon",H);var I=b.extractFileName(H);var t=$j(p.dom.create("img")).attr("src",H).attr("alt",I).hide();jive.conc.nextTick(function(){if(F&&e(t)){d(t,x,p,n).addCallback(function(M){H=M.attr("src");r.attr("__icon",H);r.css("background-image","url('"+H+"')")})}});r.append($j(p.dom.create("span")).addClass("j-ui-elem").addClass("j-app-link"))}else{r.text(v);r.addClass("jive-link-app");r.append($j(x?p.dom.create("span"):L.createElement("span")).addClass("j-ui-elem").addClass("j-app-link"))}}}else{if(u){var I=b.extractFileName(z);r.attr(G("previewImage"),z);r.addClass("jive-link-app-preview");var K=$j(L.createElement("img"));K.attr("src",z).attr("alt",I).addClass("jiveImage");r.append(K)}else{if(B){r.text(v);if(!$j.browser.msie){r.css("background-image","url('"+H+"')")}r.addClass("jive-link-app-icon");r.attr(G("icon"),H);r.append($j(L.createElement("span")).addClass("j-ui-elem").addClass("j-app-link"))}else{r.text(v);r.addClass("jive-link-app");r.append($j(L.createElement("span")).addClass("j-ui-elem").addClass("j-app-link"))}}}if(v){r.attr("title",v)}r.attr(G("appUUID"),D);r.attr(G("action_id"),E);if(A=="embed"){r.attr(G("view"),y||"embedded");r.attr(G("context"),JSON.stringify(l||{}))}if(o){r.attr(G("url"),o)}r.attr("modifiedTitle","true");r.addClass("jive_macro");r.addClass("jive_macro_appEmbeddedView");return r[0]};this.parseSelectionContextFromArtifact=function(n){var m=n.attr("__context");var t=n.attr("__view");var l=n.attr("__url");var o=n.attr("__previewImage")?"image":"text";var u=n.attr("__title");var p=n.attr("__previewImage");var v=n.text().trim()||"";var s=n.attr("__icon");var r=null;switch(o){case"image":r={type:"image",previewImage:p};if(u){r.label=u}break;case"text":r={type:"text",label:v};if(s){r.icon=s}break}var k=(m||t)?"embed":"url";var q=null;switch(k){case"embed":q={type:"embed",view:t||"embedded"};if(m){q.context=JSON.parse(m)}if(l){q.url=l}break;case"url":q={type:"url",url:l||""};break}return{display:r,target:q}};this.uploadArtifactIcon=function(l,k){var m=b.extractFileName(l);var n=jive.api.apps("instances/"+k+"/attach_image")+"?name="+m;return a(n,l)};this.uploadArtifactImage=function(k){var l=b.extractFileName(k);var m=jive.rest.url("/rteImages")+"?name="+l+"&objectId=-1&objectType=-1";return a(m,k)};function j(m){var k=m.width();if(k>f){var n=f/k;var l=Math.round(n*k);m.attr("width",l)}}function e(m){var k=m.attr("src");if(k.match(/^\/[^\/]/)){return 0}var l="(https?:)?//"+location.hostname+(location.port?":"+location.port:"");if(!k.match("^"+l)){return true}return b.isProxiedUrl(k)?1:0}function d(n,m,l,k){var o=jive.api.apps("instances/"+k+"/attach_image");return c(n,m,l,o)}function c(k,l,r,p){var m=l.getImageService();var s=k.attr("alt");var t=k.attr("src");function o(){if(console){console.log("Image REST request failed for %s",s,arguments)}k.remove()}var n=new jive.conc.Promise();var u=l.getFormService();var q=u.setFormEnabled(false,r.getLang("jiveimage.please_wait"));m.createFromImageSrc(s,b.isProxiedUrl(t)?t:encodeURI(t),p).addCallback(function(v){k.load(function(){var w=$j(this);w.css({width:w.width()+"px",height:w.height()+"px","max-width":"","max-height":""})});k.attr("src",v.url);jive.conc.nextTick(function(){r.nodeChanged()});n.emitSuccess(k)}).addErrback(function(){o();n.emitError()}).always(function(){u.setFormEnabled(q)});return n}function a(o,k){var n=new jive.conc.Promise();var l={url:o,contentType:"application/x-www-form-urlencoded",processData:false,data:"url="+b.isProxiedUrl(k)?k:encodeURIComponent(k)};var m={contentType:"application/json; charset=utf-8"};$j.ajax($j.extend({type:"POST",dataType:"json",success:function(p,r,q){if(!p||!p.url){n.emitError()}else{n.emitSuccess(p.url)}},error:function(p){n.emitError(p)},timeout:30000},m,l));return n}});define("jive/app/rte/artifacts",["gadgets"],function(a){return jive.Apps.RteArtifacts});
;
// This file was automatically generated from autocomplete.soy.
// Please don't edit this file by hand.

goog.provide('jive.tags.autocomplete.completions');
goog.provide('jive.tags.autocomplete.popoverContent');
goog.provide('jive.tags.autocomplete.popularTags');
goog.provide('jive.tags.autocomplete.tagBadge');
goog.provide('jive.tags.autocomplete.tagCloud');
goog.provide('jive.tags.autocomplete.tagInput');
goog.provide('jive.tags.autocomplete.tagList');
goog.provide('jive.tags.autocomplete.tagListItem');
goog.provide('jive.tags.autocomplete.tags');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');


jive.tags.autocomplete.tags = function(opt_data, opt_sb) {
  opt_data = opt_data || {};
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="', (opt_data.identifier) ? soy.$$escapeHtml(opt_data.identifier) : '', ' jive-compose-tags-form" class="j-tag-form"><label for="js-tag-input', (opt_data.identifier) ? ' ' + soy.$$escapeHtml(opt_data.identifier) : '', 'j">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('publishbar.tags.title'),[])), ' <span class="font-color-meta">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('publishbar.tags.desc'),[])), '</span></label>');
  jive.tags.autocomplete.tagInput(opt_data, output);
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


jive.tags.autocomplete.tagInput = function(opt_data, opt_sb) {
  opt_data = opt_data || {};
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-tags"><ul><li class="j-tag-icon j-tag-input j-ui-elem" role="presentation"></li><li class="js-tag-entry j-tag-entry"><input type="text" data-is-not-create-field="', (opt_data.isNotCreateField) ? soy.$$escapeHtml(opt_data.isNotCreateField) : 'false', '" data-hide-prepopulated-tags="', (opt_data.hidePrepopulatedTags) ? soy.$$escapeHtml(opt_data.hidePrepopulatedTags) : 'false', '" data-hide-suggestions-on-init="', (opt_data.hideSuggestionsOnInit) ? soy.$$escapeHtml(opt_data.hideSuggestionsOnInit) : 'false', '" data-is-skill="', (opt_data.isSkill) ? soy.$$escapeHtml(opt_data.isSkill) : 'false', '" data-focus-on-load="', (opt_data.focusOnLoad) ? soy.$$escapeHtml(opt_data.focusOnLoad) : 'false', '" placeholder="', (opt_data.placeholder) ? soy.$$escapeHtml(opt_data.placeholder) : '', '" class=" js-tag-input', (opt_data.identifier) ? ' ' + soy.$$escapeHtml(opt_data.identifier) : '', '" value="" autocomplete="off" role="combobox" aria-label="', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('tags.aria.label'),[])), '"/></li></ul></div><input type="hidden" class="js-hidden-tag-input" name="tags" value="', soy.$$filterNoAutoescape(opt_data.tags ? (opt_data.tags).replace(new RegExp('"', 'g'), '&quot;') : ''), '"/>');
  return opt_sb ? '' : output.toString();
};


jive.tags.autocomplete.tagBadge = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class=\'js-tag j-tag j-btn-global\'><span class=\'js-tag-text j-tag-text\' >', soy.$$filterNoAutoescape(opt_data.tag), '</span><span class=\'remove\' role="presentation" aria-hidden="true">X</span></li>');
  return opt_sb ? '' : output.toString();
};


jive.tags.autocomplete.popoverContent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div><p>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.loading'),[])), '</p></div>');
  return opt_sb ? '' : output.toString();
};


jive.tags.autocomplete.popularTags = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="js-tags-suggestions j-tags-suggestions j-menu"><p class="j-actions font-color-meta">', (opt_data.skill) ? soy.$$filterNoAutoescape(jive.i18n.i18nText(jive.i18n.getMsg('browse.filter.tag.typeahead.skills'),[])) : soy.$$filterNoAutoescape(jive.i18n.i18nText(jive.i18n.getMsg('browse.filter.tag.typeahead'),[])), '</p><div class="j-autocomplete-nav clearfix"><span id="popular-tags-tab" data-tab-id=\'popular-tags\' class="', (! opt_data.active || opt_data.active == 'popular-tags') ? 'j-active' : '', ' js-tab"><a href="#">', (opt_data.skill) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.filter.tag.popular_skills'),[])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.filter.tag.popular_tags'),[])), '</a></span>', (opt_data.yourTags && opt_data.yourTags.length > 0) ? '<span id="your-tags-tab" data-tab-id=\'your-tags\' class="' + ((opt_data.active == 'your-tags') ? 'j-active' : '') + ' js-tab"><a href="#">' + ((opt_data.skill) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.filter.tag.your_skills'),[])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.filter.tag.your_tags'),[]))) + '</a></span>' : '', '</div>');
  jive.tags.autocomplete.tagList({tags: opt_data.popularTags, id: 'popular-tags', hidden: opt_data.active && opt_data.active != 'popular-tags', skill: opt_data.skill}, output);
  if (opt_data.yourTags && opt_data.yourTags.length > 0) {
    jive.tags.autocomplete.tagList({tags: opt_data.yourTags, id: 'your-tags', hidden: opt_data.active != 'your-tags', skill: opt_data.skill}, output);
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


jive.tags.autocomplete.completions = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="js-tags-completions j-tags-suggestions j-menu">');
  jive.tags.autocomplete.tagList(soy.$$augmentMap(opt_data, {id: 'tag-completions'}), output);
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


jive.tags.autocomplete.tagList = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul class="js-suggestions j-autocomplete-results" ', (opt_data.id) ? 'id="' + opt_data.id + '"' : '', ' ', (opt_data.hidden) ? 'style="display:none"' : '', ' role="listbox">');
  if (opt_data.query) {
    jive.tags.autocomplete.tagListItem({tag: opt_data.query, create: true}, output);
  }
  var tagList144 = opt_data.tags;
  var tagListLen144 = tagList144.length;
  if (tagListLen144 > 0) {
    for (var tagIndex144 = 0; tagIndex144 < tagListLen144; tagIndex144++) {
      var tagData144 = tagList144[tagIndex144];
      jive.tags.autocomplete.tagListItem({tag: tagData144}, output);
    }
  } else {
    output.append((! opt_data.query) ? '<li class="font-color-meta" role="alert"><p class="j-empty">' + ((opt_data.skill) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('skills.search.empty'),[])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('tags.search.empty'),[]))) + '</p></li>' : '');
  }
  output.append('</ul>');
  return opt_sb ? '' : output.toString();
};


jive.tags.autocomplete.tagListItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="js-suggestion" role="option"><a href="#" data-value="', soy.$$escapeHtml(opt_data.tag), '" class="quick">', (opt_data.create) ? '<span class="font-color-normal">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.create'),[])) + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.colon'),[])) + ' </span>' : '', '<span class="jive-icon-tag jive-icon-med"></span>', soy.$$escapeHtml(opt_data.tag), '</a></li>');
  return opt_sb ? '' : output.toString();
};


jive.tags.autocomplete.tagCloud = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="jive-modal j-modal jive-modal-medium"><header><h2>', (opt_data.placeName) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('tags.top_tags_in'),[opt_data.maxCount,opt_data.placeName])) : (opt_data.skillList) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.filter.tag.top_skills_in_this_place'),[opt_data.maxCount])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.filter.tag.top_tags_in_this_place'),[opt_data.maxCount])), '</h2></header><label class="j-508-label" id="close-modal-508">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.close.modal'),[])), '</label><a href="#" class="j-modal-close-top close" aria-labelledby="close-modal-508" title="', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.close.modal'),[])), '">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.close'),[])), ' <span class="j-close-icon j-ui-elem" role="img"></span></a><section class="jive-modal-content j-modal-content-text clearfix">');
  if (opt_data.availableTags.length > 0) {
    output.append('<p>', (opt_data.skillList) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.filter.tag.skills_cloud_tip'),[])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.filter.tag.cloud_tip'),[])), '</p><ul class="jive-tagcloud-list">');
    var tagList197 = opt_data.availableTags;
    var tagListLen197 = tagList197.length;
    for (var tagIndex197 = 0; tagIndex197 < tagListLen197; tagIndex197++) {
      var tagData197 = tagList197[tagIndex197];
      output.append('<li class="js-tag jive-tagset-popularity', soy.$$escapeHtml(tagData197.bucket), (opt_data.selectedTags.indexOf(tagData197.renderedTag) > -1) ? ' js-selected' : '', '" data-value="', soy.$$escapeHtml(tagData197.renderedTag), '"><a href="#" title="', (tagData197.count != 1) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('tags.used_n_times.tooltip'),[tagData197.count])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('tags.used_1_time.tooltip'),[])), '">', soy.$$escapeHtml(tagData197.renderedTag), '</a></li> ');
    }
    output.append('</ul><button class="close j-btn-callout">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.done'),[])), '</button>');
  } else {
    output.append('<p>', (opt_data.skillList) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.filter.tag.no_skills'),[])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.filter.tag.no_popular_tags'),[])), '</p>');
  }
  output.append('</section></div>');
  return opt_sb ? '' : output.toString();
};

;
jive.namespace("Tags");define("apps/tags/tags_controller",["jquery","underscore","apps/shared/views/tab_view","apps/tags/model/tag_input_model","apps/tags/model/tag_service","apps/tags/model/tag_suggestions","apps/tags/view/tag_cloud","apps/tags/view/tag_badges","soy!jive.tags.autocomplete.completions","soy!jive.tags.autocomplete.popularTags"],function(h,m,n,f,c,i,b,k,g,d){var a=",",l=55,e=100,j=/[^,]+$/;jive.Tags.Controller=jive.oo.Class.extend(function(q){jive.conc.observable(this);q.init=function(w,v){v=h.extend({},v);var u=this,y={max:10,containerType:v.containerType||17,containerID:v.containerID||1};v=v||{};if(v.objectTypes&&v.objectTypes.length>0){y.taggableTypes=v.objectTypes}if(v.addClass&&v.addClass.length>0){u.element.addClass(v.addClass)}u.element=h(w);u.singleTagInput=v.singleTagInput;u.hiddenElement=u.element.closest(".j-form").find(".js-hidden-tag-input");u.initialTags=u.hiddenElement.val().split(a);u.isSkills=u.element.data("isSkill");u.badgeElement=u.element.closest(".j-form").find(".j-tags");u.isNotCreateField=u.element.data("isNotCreateField");u.hidePrepopulatedTags=u.element.data("hidePrepopulatedTags");u.hideSuggestionsOnInit=u.element.data("hideSuggestionsOnInit");u.focusOnLoad=u.element.data("focusOnLoad");u.suggestions=new i();u.tagService=new c(y);u.tagBadges=new k(u.badgeElement);u.tagModel=new f({element:u.hiddenElement});u.tagCloud=new b(w,(this.element.closest(".j-browse-people").length>0));u.tagService.suppressGenericErrorMessages();u.userID=_jive_current_user.ID||"-1";if(this.userID!="-1"){this.yourTagParams={filterUserID:u.userID}}function x(z){function A(D){if(D){return D.map(function(E){return E.renderedTag})}return[]}function B(D){if(D){return D.tagSearchResult.map(function(E){return E.name})}return[]}if(typeof z=="string"&&z.trim().length){return u.suggestions.get(z).then(function(D){return{tags:B(D)}})}var C={popularTags:u.tagService.findAll()};if(u.yourTagParams){C.yourTags=u.tagService.findAll(u.yourTagParams)}if(z&&z.length){C.yourTags=u.tagService.findAll({tags:z})}return jive.conc.synchronize(C).then(function(D){return{popularTags:A(D.popularTags),yourTags:A(D.yourTags)}})}u.element.suggestBox({displayEmptySearch:true,queryFunc:x,template:this.templateSwitcher,parseSearchString:function(A){var z=A.match(j);return(z?z.pop():"")},processResults:function(A,z,B){if(A.tags){if(!m.contains(A.tags,B.trim())&&!u.isNotCreateField){A.query=B}A.tags=A.tags.unique()}else{var C=z.getActiveTab();if(C.length>0){A.active=C.data("tabId")}}if(u.isSkills){A.skill=true}return A},displayResults:function(A,z){if(u.element.val()!=""&&(!u.hideSuggestionsOnInit||u.startedTyping)&&!(u.isNotCreateField&&h(A).find(".j-empty").length>0)){u.startedTyping=true;m.extend(z,{context:u.element,container:h("#j-expertise-modal"),addClass:"j-tag-autocomplete j-autocomplete",align:"left",arrowOffset:15});var B=h(A).popover(z);new n(B,{activeClass:"j-active",tabSelector:".js-tab"});return z}}}).on("selectionChosen",this.onTagSelected.bind(u)).on("keydown",this.onKeydown.bind(u)).on("paste",function(){jive.conc.nextTick(o.curry(u.element));h(this).one("change",u.onChange.bind(u))}).focus(this.controllerHasFocus.curry(true,u)).on("blur blurWaitFinished",this.controllerHasFocus.curry(false,u)).on("tags.resizeInput",u.resizeInput.curry(u.element).bind(u)).click(function(z){z.stopPropagation()});if(v.focusOnLoad){u.element.focus()}if(jive.onLoadEventComplete){this.createInitialTags()}else{h(window).on("load",this.createInitialTags.bind(u))}h(window).on("resize",u.resizeInput.curry(u.element).bind(u));this.hiddenElement.on("change",this.createInitialTags.bind(u));this.element.parents(".j-tags").on("click",".remove",this.onClickRemoveBadge.bind(this)).on("click",function(){w.focus()});this.tagCloud.addListener("cloud",function(){var z=u.tagModel.getTags(),B={max:200},A=u.tagService.findAll(B);u.tagCloud.show(A,z,200).addCallback(function(C){if(z.join(a)!=C.join(a)){u.insertTags(C.join(a))}})});this.tagModel.addListener("tags.duplicate",function(z){var A=u.tagBadges.findExistingBadge(z);if(!A){u.emit("tags.duplicate",z)}});this.tagService.findAll();this.tagService.findAll(this.yourTagParams)};this.getElement=function(){return this.element};this.populate=function(){this.createInitialTags()};this.getTagsFromBadges=function(){return this.tagBadges.getTagsFromBadges()};this.getInputVal=function(){return this.element.val()};this.clear=function(){this.tagBadges.clear();this.clearInput(this.element)};this.insertTags=function(w,x){var u=this,v=m.isArray(w)?w:String(w).split(a);$j.each(v,function(A,y){var z=u.sanitizeTag(y);if(z.length==0){return}u.tagBadges.addBadge(z,u.tagModel.getTags(),x);if(u.tagModel.addTag(z)&&x){u.emitTagChange("add",z)}});this.resizeInput(this.element);if(u.singleTagInput){this.element.hide()}};this.teardown=function(){var u=this.element.data("suggestBox");this.element.off("selectionChosen").off("keydown").off("paste").off("focus").off("click").off("blur").off("blurWaitFinish");this.element.parents(".j-tags").off("click");this.tagModel.removeListener("tags.duplicate");this.hiddenElement.off("change");if(u){u.teardown()}};q.createInitialTags=function(){var u;if(this.hiddenElement.length!=0){this.resizeInput(this.element);if(!this.hidePrepopulatedTags){u=this.tagModel.getTags();if(!u||0==u.length){return}this.insertTags(u,false)}}};q.controllerHasFocus=function(v,u){var w=h(".j-tags");u.focused=v;w.addClass(v?"focus":"blur");w.removeClass(v?"blur":"focus");if(!v){u.tagBadges.blurBadge()}};q.clearInput=function(u){u.val("");u.trigger("close.suggestBox")};q.resizeInput=function(z){var u=7,v=this.element.closest("form").find(".j-tags").width(),y=m.reduce(this.element.closest("form").find(".j-tags li"),function(B,A){var E=h(A),C=h(A).outerWidth(true);if(E.hasClass("js-tag-entry")){return B}else{var D=B+C;if(D+e+u>=v){return 0}else{return B+C}}},0),x=Math.floor((v-y)-u),w=x<e?e:x;z.hide();z.width(w);z.show()};q.sanitizeTag=function(u){return u.trim().replace(/\s+/g," ").replace(/\//g,"").toLowerCase()};q.removeTagByBadge=function(v){var u=v.find(".js-tag-text").text();this.tagBadges.removeBadge(v);this.tagModel.deleteTag(u);this.emitTagChange("remove",u);if(this.singleTagInput){this.element.show();this.element.focus()}};q.emitTagChange=function(v,u){this.emit("tags.change",this.tagModel.getTags());this.emit("tags."+v,u)};q.onKeydown=function(w){var u=this.element.val(),v=this;if(w.which&&s(w)&&u.length>0){this.clearInput(this.element);this.insertTags(u,true);if(!h.keyIs("tab",w.which)){w.preventDefault();jive.conc.nextTick(function(){v.element.focus()})}}else{if(w.which&&r(w,u)){var x=h(".js-tag.selected");if(x.length!=0){this.removeTagByBadge(x);this.element.focus()}else{this.tagBadges.focusBadge()}w.preventDefault();this.clearInput(this.element)}else{if(w.which&&t(w,u)){w.preventDefault()}else{if(p(w)){w.preventDefault()}else{removeSlashes(this.element,u);this.tagBadges.blurBadge()}}}}};q.onChange=function(){var u=this.element.val();this.insertTags(u,true)};q.onClickRemoveBadge=function(v){var u=h(v.target).parent();this.removeTagByBadge(u)};q.onTagSelected=function(x,v,w){var u=w.find("a").data("value");this.insertTags(u,true);this.clearInput(this.element)};q.templateSwitcher=function(u){if(u.tags){return g(u)}return d(u)};function t(v,u){return(u>=l&&!(h.keyIs("backspace",v.which)||v.metaKey))}function s(u){return(h.keyIs("comma",u.which)&&!u.shiftKey)||h.keyIs("enter",u.which)||h.keyIs("tab",u.which)}function r(v,u){return(h.keyIs("backspace",v.which)&&u=="")}function p(u){return h.keyIs("forward_slash",u.which)}function o(v){var u=v.val().replace(/\//g,"");if(u.length>=l){v.val(u.substring(0,l))}}});return jive.Tags.Controller});
;
define("apps/activity_stream/models/rtc_source",["jquery","underscore","apps/shared/models/core_deferred"],function(c,b,a){jive.RTCSource=jive.oo.Class.extend(function(d){d.init=function(e){if(e&&e.collabID){this.collabID=e.collabID;this.rtcEnabled=e.rtcEnabled;this.collabDeferred=this.getCollaboration(this.collabID)}};this.getCollaboration=function(e){return a.runQuery(function(f){return f.jive.corev3.collaborations.get({uri:"/collaborations/"+e})})};this.getInteractions=function(f){var e=this;return e.collabDeferred.then(function(g){return a.runQuery(g.getInteractions(f)).then(function(h){b.each(h,function(i){b.extend(i.author,i.author.jive);i.author.entitled=true;i.collabID=e.collabID;i.rtcEnabled=e.rtcEnabled});return h})})};this.updateSubject=function(g){var f=this,e={subject:g};return f.collabDeferred.then(function(h){return a.runQuery(h.setSubject(e))})};this.createInteraction=function(g){var f=this;var e={content:{text:g}};return f.collabDeferred.then(function(h){return a.runQuery(h.createInteraction(e)).then(function(i){b.extend(i.author,i.author.jive);i.author.entitled=true;i.collabID=f.collabID;i.rtcEnabled=f.rtcEnabled;return i})})};this.createCollaboration=function(f,h,g){var e=this;return a.runQuery(function(i){return i.jive.corev3.collaborations.create({participants:f,subject:g})}).then(function(i){e.collabDeferred=c.when(i);e.createInteraction("<body>"+h+"</body>")})};this.addCollaborators=function(g,i,h){var e=this,f=i.split(",").map(function(j){return{id:j}});return e.collabDeferred.then(function(j){return a.runQuery(j.addParticipant({participants:f}))}).then(function(j){return j.participants.map(function(k){return b.find(h,function(l){return l.id==k.id})})})};this.leaveCollaboration=function(){var e=this;return e.collabDeferred.then(function(){return a.runQuery(function(f){return f.jive.corev3.collaborations.participants.removeParticipants({userID:window._jive_current_user.ID,collabID:e.collabID})})})};this.deleteDM=function(e){return this.remove(jive.rest.corev3.url("/dms/"+e))};this.deleteComment=function(e){return this.remove(jive.rest.corev3.url("/comments/"+e))};this.remove=function(f){function e(){c("<p />").html(jive.i18n.getMsg("global.ajax_error")).message({style:"error"})}return c.ajax(f,{type:"DELETE",error:e})}});return jive.RTCSource});
;
jive.namespace("Browse.User");define("apps/browse/user/model/user_source",["apps/shared/models/rest_service"],function(a){jive.Browse.User.ItemSource=a.extend(function(b){b.resourceType="user";this.findAll=function(e){var d=(e.userID)?e.userID:"current";var c=this.RESOURCE_ENDPOINT+"/"+d+"/browse";return this.commonAjaxRequest(new jive.conc.Promise(),"GET",{url:c,data:e||{}})};this.findAllOrgChart=function(e){var d=(e&&e.userID)?e.userID:"current";var c=this.RESOURCE_ENDPOINT+"/"+d+"/orgchart";return this.commonAjaxRequest(new jive.conc.Promise(),"GET",{url:c,data:e||{}})};this.getDirectReportCount=function(d){var c=this.RESOURCE_ENDPOINT+"/"+d.userID+"/directreports/count";return this.commonAjaxRequest(new jive.conc.Promise(),"GET",{url:c,data:{}})};this.getDirectReports=function(d){var c=this.RESOURCE_ENDPOINT+"/"+d.userID+"/directreports";return this.commonAjaxRequest(new jive.conc.Promise(),"GET",{url:c,data:{}})};this.getUserProperty=function(d){var c=this.RESOURCE_ENDPOINT+"/"+d.userID+"/prop/"+d.propName;return this.commonAjaxRequest(new jive.conc.Promise(),"GET",{url:c,data:{}})};this.setUserProperty=function(d){var c=this.RESOURCE_ENDPOINT+"/"+d.userID+"/prop/"+d.propName;return this.commonAjaxRequest(new jive.conc.Promise(),"POST",{url:c,data:d.propValue})};this.removeUserProperty=function(d){var c=this.RESOURCE_ENDPOINT+"/"+d.userID+"/prop/"+d.propName;return this.commonAjaxRequest(new jive.conc.Promise(),"DELETE",{url:c})}});return jive.Browse.User.ItemSource});
;
jive.namespace("Tips");jive.Tips.TipGroupState=jive.oo.Class.extend(function(a){a.init=function(b){this.stateKey=b.stateKey;this.currentTipId=b.currentTipID||null;this.dismissed=b.dismissed||false;this.skipped=false};this.setCurrentTipId=function(b){this.currentTipId=b};this.getCurrentTipId=function(){return this.currentTipId};this.setDismissed=function(b){this.dismissed=b};this.isDismissed=function(){return this.dismissed};this.setSkipped=function(b){this.skipped=b};this.isSkipped=function(){return this.skipped};this.getKey=function(){return this.stateKey};this.serialize=function(){var b=this.isDismissed()?"true":"false";if(this.currentTipId){b+="#"+this.currentTipId}return b}});define("apps/tips/models/tip_group_state",function(){return jive.Tips.TipGroupState});
;
// This file was automatically generated from tips-app.soy.
// Please don't edit this file by hand.

goog.provide('jive.tips.application');
goog.provide('jive.tips.renderTip');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.shared.soy.resourceInlineJs');


jive.tips.application = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  jive.shared.soy.resourceInlineJs({code: '$j(function() {var tipsApp = new jive.Tips.Main({tipGroups:' + soy.$$filterNoAutoescape(JSON.stringify(opt_data.tipGroups).replace(/</g, '\\u003C').replace(/>/g, '\\u003E').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029')) + ', skippedTipGroupIDs: ' + soy.$$filterNoAutoescape(JSON.stringify(opt_data.skippedTipGroupIDs).replace(/</g, '\\u003C').replace(/>/g, '\\u003E').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029')) + '});});'}, output);
  return opt_sb ? '' : output.toString();
};


jive.tips.renderTip = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="jive-tips-', soy.$$escapeHtmlAttribute(opt_data.id), '" data-group-id="', soy.$$escapeHtmlAttribute(opt_data.groupId), '" style="display: none" class="j-tips ', (opt_data.cssClass) ? soy.$$escapeHtmlAttribute(opt_data.cssClass) : '', '">', (opt_data.templateName) ? soy.$$filterNoAutoescape(jive.soy.func.eval(opt_data.templateName,true,false,{'data':opt_data.templateData})) : ((opt_data.titleKey) ? '<h4 class="font-face-deco">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(opt_data.titleKey),[])) + '</h4>' : '') + '<p>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(opt_data.bodyKey),[])) + '</p>', '<!-- BEGIN tip footer --><div class="j-tips-footer"><div class="j-tips-footer-overlay"></div>', (opt_data.count > 1) ? '<div class="j-pagination"><span class="j-tips-count font-color-meta-light">' + soy.$$escapeHtml(opt_data.index + 1) + ' / ' + soy.$$escapeHtml(opt_data.count) + '</span><span class="j-pagination-prevnext">' + ((! opt_data.first) ? '<a href="#" class="j-pagination-prev js-prev-tip" title="' + soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('tips.prev_tip.title'),[])) + '">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('tips.prev_tip'),[])) + '</a>' : '<span class="j-pagination-prev j-disabled font-color-meta">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('tips.prev_tip'),[])) + '</span>') + ((! opt_data.last) ? '<a href="#" class="j-pagination-next js-next-tip" title="' + soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('tips.next_tip.title'),[])) + '">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('tips.next_tip'),[])) + '</a>' : '<span class="j-pagination-next j-disabled font-color-meta">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('tips.next_tip'),[])) + '</span>') + '</span></div>' : '', '<ul class="j-tips-actions"><li><a href="#" class="js-ignore-tips close" title="', soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('tips.ignore_tips.title'),[])), '">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('tips.ignore_tips'),[])), '</a></li><li><a href="#" class="js-close-tips close" title="', soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('tips.close_tips.title'),[])), '">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('tips.close_tips'),[])), '</a></li></ul></div><!-- END tip footer --></div>');
  return opt_sb ? '' : output.toString();
};

;
/*
 * jQuery imagesLoaded plugin v1.0.3
 * http://github.com/desandro/imagesloaded
 *
 * MIT License. by Paul Irish et al.
 */
(function(a,b){a.fn.imagesLoaded=function(i){var g=this,e=g.find("img").add(g.filter("img")),c=e.length,h="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";function f(){i.call(g,e)}function d(){if(--c<=0&&this.src!==h){setTimeout(f);e.unbind("load error",d)}}if(!c){f()}e.bind("load error",d).each(function(){if(this.complete||this.complete===b){var j=this.src;this.src=h;this.src=j}});return g}})(jQuery);define("jquery/jquery.imagesloaded",["jquery"],function(a){return a.fn.imagesLoaded});
;
(function(f){var e=/^-?\d+$/;function a(g){var h=g.css("position");return h=="absolute"||h=="relative"||h=="fixed"}function d(g){var h=g.css("z-index");return typeof h=="number"||(h&&h.match(e))}function b(g){return(a(g)&&d(g))||g.is("body")}function c(h,g){return g.toArray().every(function(i){return f.contains(h,i)})}jQuery.fn.effectiveZIndex=function(h){var g;if(h&&h.context){g=f(h.context)}else{if(h&&h.relativeTo){g=this.stackingContexts(h)}else{g=f("body")}}var i=[],j=this;while(j.length>0){if(j[0]!==g[0]){i.push(j)}else{break}j=j.parent()}return i.reduce(function(m,l){var k=f(l);if(b(k)){return parseInt(k.css("z-index"),10)}else{return m}},0)};jQuery.fn.stackingContexts=function(g){var h=(g&&g.relativeTo)?f(g.relativeTo):this;var j=this;var i=this.parents().filter(function(){var l=f(this),k=c(this,j)&&c(this,h);return k&&b(l)});return i};jQuery.fn.stackingContext=function(g){return this.stackingContexts(g).filter(":first")}})(jQuery);
;
jive.namespace("Tips");jive.Tips.TipView=jive.AbstractView.extend(function(a){a.init=function(b){this.tipView=$j.extend({},b)};a.getId=function(){return this.tipView.id};this.hasBeenViewed=function(){return this.shown};this.hasValidSelector=function(){var c=this;if(c.tipView.selector){var d=$j(c.tipView.selector);var b=(c.tipView.hiddenSelectorAllowed||d.is(":visible"));return(d.length>0)&&b}return false};a.getLoadSelector=function(){return this.tipView.loadSelector};this.isInitialTip=function(){return this.initialTip};this.render=function(f){var c=this;this.shown=false;c.triggerEventType=f.triggerEventType;c.triggerSelector=f.triggerSelector;c.groupId=f.id;var b=f.getTipViewsWithValidSelectors();var e=f.findIndexById(c.getId(),b);this.initialTip=e==0;var g=$j.extend(c.tipView,{groupId:c.groupId,count:b.length,first:c.initialTip,last:e==(b.length-1),index:e});var d=jive.tips.renderTip(g);c.$tipElement=$j(d);c.bindTipElementHandlers(f)};a.bindTipElementHandlers=function(c){var b=this;b.$tipElement.find(".js-next-tip").bind("click",function(d){c.showNextTip();d.preventDefault()});b.$tipElement.find(".js-prev-tip").bind("click",function(d){c.showPreviousTip();d.preventDefault()});b.$tipElement.find(".js-ignore-tips").bind("click",function(d){c.skip();d.preventDefault()});b.$tipElement.find(".js-close-tips").bind("click",function(d){c.dismiss();d.preventDefault()})};this.display=function(){var b=this;b.$tipSelector=$j(b.tipView.selector).filter(":first");if(b.$tipSelector.length>0){var c=b.$tipSelector;if(b.triggerSelector){c=$j(b.triggerSelector)}if(c.length>0){this.showTip(c)}else{if(console){console.warn("Please ensure a valid trigger selector is specified for tip "+this.tipView.id)}}}else{if(console){console.warn("Please ensure a valid selector is specified for tip "+this.tipView.id)}}};a.isTransientTrigger=function(){return this.isMouseoverTrigger()||this.isFocusTrigger()};a.isMouseoverTrigger=function(){return this.triggerEventType=="mouseover"};a.isFocusTrigger=function(){return this.triggerEventType=="focus"};a.showTip=function(d){var b=this;if(b.triggerEventType&&b.isInitialTip()){b.$triggerSelector=d;b.$triggerSelector.one(b.triggerEventType,function(f){b.showPopover(f)})}else{var c=b.getLoadSelector();if(c){b.showTipWithLoadSelector(c)}else{b.showPopover()}}};a.showTipWithLoadSelector=function(d){var b=this;var c=$j(d);if(c.length>0){if(c.is("img")){c.imagesLoaded(function(){b.showPopover()})}else{c.bind("load",function(){b.showPopover()})}}else{b.showPopover()}};a.showPopover=function(f){var c=this;if(!c.shown){var b=c.determineTipContext(f);var d={context:b,closeOtherPopovers:true,closeOtherPopoversSelector:"BODY > .js-pop > .j-tips[data-group-id='"+c.groupId+"']"};if(c.tipView.hiddenSelectorAllowed){c.handleInvisibleContext(b)}d=$j.extend(d,c.unbindDefocusHandlers());d=$j.extend(d,c.addCloseOptions());d=$j.extend(d,c.addOffsetOptions());c.$tipElement.popover(d);var e=c.$tipElement.closest(".js-pop");e.css("z-index",b.effectiveZIndex({relativeTo:e})+5);c.bindDefocusHandlers();c.shown=true}};a.hasCloseSelector=function(){return(this.tipView.closeSelector&&this.tipView.closeSelector.length>0)||false};a.isCloseOnClick=function(){return this.hasCloseSelector()&&this.tipView.closeSelector.trim().toLowerCase()=="body"};a.addOffsetOptions=function(){var b=this;return{nudge:{top:b.tipView.belowOffset,bottom:b.tipView.aboveOffset}}};a.addCloseOptions=function(){var b=this;var d=b.hasCloseSelector();var c={closeOnClick:d};if(d){c=$j.extend(c,{closeOnClickSelector:b.tipView.closeSelector})}return c};a.bindDefocusHandlers=function(){var b=this;if(!b.isCloseOnClick()){b.$tipElement.bind("click",function(){b.focusTip()});jive.conc.nextTick(function(){$j("BODY").bind("click",function(c){b.blurTip(c)})})}};a.unbindDefocusHandlers=function(){var b=this;var c={};if(!b.isCloseOnClick()){c=$j.extend(c,{onClose:function(){b.$tipElement.unbind("click",b.focusTip);$j("BODY").unbind("click",b.blurTip);b.restoreContextVisibility()}})}return c};a.determineTipContext=function(e){var d=this;var c=d.$tipSelector;if(e){var b=$j(e.currentTarget);var f=b.find(d.tipView.selector);if(f.length==0&&d.triggerSelector){f=$j(e.target).find(d.triggerSelector)}if(f&&f.length>0){c=f}}return c};a.blurTip=function(f){var b=this;if(b.$tipElement){var c=b.$tipElement.parent();var d=$j(f.target).parents().andSelf().toArray().reduce(function(h,e){return h||e==c[0]},false);var g=$j(f.target).parents("body").length>0;if(!d&&g){c.addClass("j-pop-blurred");b.restoreContextVisibility()}}};a.focusTip=function(){if(this.$tipElement){this.$tipElement.parent().removeClass("j-pop-blurred")}};a.handleInvisibleContext=function(c){var b=this;if(!c.is(":visible")){b.hiddenSelector=true;var e=c.attr("style");var d=e&&e.match(/display:/);b.cssDiplayValue=(d)?c.css("display"):"";c.show()}};a.restoreContextVisibility=function(){var b=this;if(b.hiddenSelector&&b.$tipSelector.is(":visible")){b.$tipSelector.css("display",b.cssDiplayValue)}};this.close=function(){if(this.$tipElement){this.$tipElement.trigger("close")}}});define("apps/tips/views/tip_view_view",function(){return jive.Tips.TipView});
;
jive.namespace("Tips");jive.Tips.Tip=jive.AbstractView.extend(function(a){a.init=function(d){var c=this;c.id=d.id;var b=d.views||[];if(!d.views){b.push(d)}this.views=$j.map(b,function(e){return new jive.Tips.TipView($j.extend(e,{id:c.id}))})};a.getActiveTipView=function(){return this.views[this.getValidSelectorIndex()]};this.getId=function(){return this.id};this.hasValidSelector=function(){return this.getValidSelectorIndex()>-1};a.getValidSelectorIndex=function(){var b=this;for(var d=0;d<b.views.length;d++){var c=b.views[d];if(c.hasValidSelector()){return d}}return -1};this.isInitialTip=function(){return this.getActiveTipView().isInitialTip()};this.render=function(b){this.getActiveTipView().render(b)};this.display=function(){this.getActiveTipView().display()};this.close=function(){if(this.hasValidSelector()){this.getActiveTipView().close()}}});define("apps/tips/views/tip_view",function(){return jive.Tips.Tip});
;
jive.namespace("Tips");jive.Tips.TipGroup=jive.AbstractView.extend(function(a){a.init=function(c){var b=this;b.id=c.id;b.index=c.index;b.triggerSelector=c.triggerSelector;b.triggerEventType=c.triggerEventType;b.dismissKey=c.dismissKey||[];b.tips=c.visibleTips||[];b.refreshSelector=c.refreshSelector;b.refreshTimeout=c.refreshTimeout||b.getRefreshTimeout();var d=c.state||{};b.state=new jive.Tips.TipGroupState($j.extend(d,{stateKey:b.dismissKey}));b.buildTipViews();b.bindRefreshHandler()};a.buildTipViews=function(){var b=this;b.tipViews=[];b.activeTipIndex=-1;var c=b.state.getCurrentTipId();$j.each(b.tips,function(e,f){var d=new jive.Tips.Tip(f);if(f.id==c){b.activeTipIndex=(e-1)}b.tipViews.push(d)});while(b.activeTipIndex>=(b.tipViews.length-1)){b.activeTipIndex--}};a.destroyTipViews=function(){$j.each(this.tipViews,function(c,b){b.close()})};a.refresh=function(){var b=this;if(!b.isHidden()){b.destroyTipViews();setTimeout(function(){b.buildTipViews();b.showNextTip()},b.refreshTimeout)}};a.isHidden=function(){return this.state&&(this.state.isSkipped()||this.state.isDismissed())};a.getRefreshTimeout=function(){return jive.localexchange?1000:5000};this.hasVisibleTips=function(){return this.getTipViewsWithValidSelectors().length>0};this.showNextTip=function(){var b=this;var c=b.tipViews;if(c&&b.activeTipIndex<(c.length-1)){b.activeTipIndex++;if(!b.showActiveTip()){b.showNextTip()}}else{if(b.hasVisibleTips()){b.resetSequence()}}};this.showPreviousTip=function(){var b=this;if(b.activeTipIndex>0){b.activeTipIndex--;if(!b.showActiveTip()){b.showPreviousTip()}}else{if(b.hasVisibleTips()){b.resetSequence()}}};a.resetSequence=function(){var b=this;b.activeTipIndex=-1;b.showNextTip()};a.showActiveTip=function(){var b=this;var c=b.getCurrentTipView();if(c){if(c.hasValidSelector()){c.render(b);c.display();b.storeState(c);return true}else{return false}}else{return false}};a.storeState=function(c){var b=this;var d=b.state.getCurrentTipId();if(c.getId()!=d){b.state.setCurrentTipId(c.getId());if(d){b.emit("state",b.state)}}};this.findIndexById=function(b,c){return $j.inArray(b,this.getTipIds(c))};a.getCurrentTipView=function(){return this.tipViews[this.activeTipIndex]};this.skip=function(){var b=this;b.state.setSkipped(true);b.state.setDismissed(false);b.emit("close",b.state)};this.dismiss=function(){var b=this;b.state.setSkipped(false);b.state.setDismissed(true);b.emit("close",b.state)};a.getTipIds=function(b){return $j.map(b,function(c){return c.getId()})};a.getTipViewsWithValidSelectors=function(){var b=this;return $j.map(b.tipViews,function(c){return c.hasValidSelector()?c:null})};a.bindRefreshHandler=function(){var b=this;if(b.hasRefreshSelector()){$j(b.refreshSelector).bind("click",function(c){b.refresh();c.preventDefault()})}else{if(jive.localexchange&&jive.localexchange.viewupdatesource){jive.localexchange.addListener("view.update.start",function(){if(!b.isHidden()){b.destroyTipViews()}});jive.localexchange.addListener("view.update.stop",function(){if(!b.isHidden()){setTimeout(function(){b.buildTipViews();b.showNextTip()},b.refreshTimeout)}})}}};a.hasRefreshSelector=function(){return(this.refreshSelector&&this.refreshSelector.length>0)||false}});define("apps/tips/views/tip_group_view",function(){return jive.Tips.TipGroup});
;
jive.namespace("Tips");jive.Tips.PageView=jive.AbstractView.extend(function(a){a.init=function(c){var b=this;b.currentTipGroupIndex=0;b.tipGroups=c.tipGroups||[];b.asyncLoad=(typeof c.asyncLoad!="undefined")?c.asyncLoad:true;if(b.tipGroups.length>0){b.handleAsyncLoad(function(){b.showNextTipGroup(b.tipGroups[0])})}};a.showNextTipGroup=function(d){var b=this;d.index=b.currentTipGroupIndex;var c=new jive.Tips.TipGroup(d);if(c.hasVisibleTips()){b.addListeners(c);c.showNextTip()}else{if(b.hasUnviewedTipGroups()){b.showNextTipGroup(b.tipGroups[++b.currentTipGroupIndex])}}};a.addListeners=function(c){var b=this;c.addListener("state",function(d){b.emit("state",d)});c.addListener("close",function(d){b.emit("state",d);if(b.hasUnviewedTipGroups()){b.showNextTipGroup(b.tipGroups[++b.currentTipGroupIndex])}})};a.hasUnviewedTipGroups=function(){return this.currentTipGroupIndex<(this.tipGroups.length-1)};a.handleAsyncLoad=function(c){var b=this;if(b.asyncLoad){jive.conc.nextTick(c)}else{c()}}});define("apps/tips/views/page_view",function(){return jive.Tips.PageView});
;
jive.namespace("Tips");jive.Tips.Main=jive.oo.Class.extend(function(a){a.init=function(c){var b=this;if(!$j.deparam.querystring().fromQ){b.userSource=c.userSource||new jive.Browse.User.ItemSource();b.tipView=new jive.Tips.PageView(c);b.skippedTipGroupIDs=c.skippedTipGroupIDs||[];b.tipView.addListener("state",function(d){if(d){if(!d.isSkipped()){b.userSource.setUserProperty({userID:"current",propName:d.getKey(),propValue:d.serialize()})}else{b.skippedTipGroupIDs.push(d.getKey());document.cookie="jive.tipGroups.skipped="+b.skippedTipGroupIDs.unique().join("|")}}})}}});define("apps/tips/main",function(){return jive.Tips.Main});
;
jive.namespace("Trial");define("apps/trial/views/trial_help_view",["jquery"],function(a){return jive.AbstractView.extend(function(b){jive.conc.observable(this);this.init=function(e){var c=this;this.trialBannerID="#jive-trial-banner";this.trialHelpLinkID="#jive-trial-help-link";this.trialHelpPanelID="#jive-trial-help-panel";var f=$j(c.trialBannerID),d=$j(c.trialHelpLinkID),g=$j(c.trialHelpPanelID);if(d){d.click(function(){var h=g.is(".j-active");$j("#jive-trial-help-link").toggleClass("open",!h);$j("#jive-trial-curtain, #jive-trial-help-panel").toggleClass("j-active",!h);b.setJiveHelpCopy(h);h||d.find(".j-js-chat-indicator").hide();return false})}$j("#jive-trial-help-panel a").click(function(h){h.preventDefault();window.open(this.getAttribute("href"))});$j("#jive-trial-help-panel iframe").load(function(){this.contentWindow.jQuery("body").on("onMessageToVisitor",function(){if(!$j("#jive-trial-help-panel").is(".j-active")){$j("#jive-trial-help-link .j-js-chat-indicator").show()}})});$j("#jive-trial-help-panel .close").click(function(h){h.preventDefault();d.click()})};b.setJiveHelpCopy=function(c){var d=c?jive.trial.openHelp():jive.trial.closeHelp();$j("#jive-trial-help-link .j-js-title").text(d)}})});
;
// This file was automatically generated from user_profile_image.soy.
// Please don't edit this file by hand.

goog.provide('jive.browse.user.userProfileImage');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');


jive.browse.user.userProfileImage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.prop.profileImage.url) ? '<a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl(opt_data.link))) + '" class="j-user-photo" tabindex="-1"><img src="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.resourceUrl(window._jive_base_url,'/7.0.0.0/','',opt_data.prop.profileImage.url))) + '" alt="' + soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('profile.image.primary'),[])) + '" width="200"/>' + ((opt_data.prop.isVisibleToPartner) ? '<div class="j-browse-external-access"><span class="jive-icon-med jive-icon-partner" title="' + soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('partner.browse.ext_access'),[])) + '"></span><span>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('partner.browse.external.contributor'),[])) + '</span></div>' : '') + '</a>' + ((opt_data.prop.profileImage.viewingSelf && opt_data.prop.profileImage['default']) ? '<span class="j-profile-img-text j-rc3"><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl('/edit-profile-avatar!input.jspa'))) + '?targetUser=' + soy.$$escapeUri(opt_data.id) + '" class="j-btn-global">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('profile.image.text.add.photo'),[])) + '</a></span>' : '') : '');
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from status_level.soy.
// Please don't edit this file by hand.

goog.provide('jive.people.profile.statusLevel');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');


jive.people.profile.statusLevel = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.ready) ? '<div class="j-status-container"><span class="j-status-img"><img src="' + soy.$$escapeHtml(jive.soy.func.buildUrl(opt_data.imagePath)) + '" alt="' + soy.$$escapeHtml(opt_data.name) + '" title="' + soy.$$escapeHtml(opt_data.name) + '"/></span><span class="j-status-levels">' + ((opt_data.showPoints) ? soy.$$escapeHtml(opt_data.name) + ' (' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('stslvl.points'),[opt_data.pointLevel])) + ')' : '') + '</span></div>' : '');
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from createmenu.soy.
// Please don't edit this file by hand.

goog.provide('jive.nav.menu.create.appActionLink');
goog.provide('jive.nav.menu.create.contentTypeHref');
goog.provide('jive.nav.menu.create.contentTypeLink');
goog.provide('jive.nav.menu.create.contentTypeLinkItem');
goog.provide('jive.nav.menu.create.contentTypes');
goog.provide('jive.nav.menu.create.quick');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.shared.displayutil.a11yBoundary');


jive.nav.menu.create.contentTypes = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-pop-desc">', (opt_data.smallView) ? '<a href="#" class="toggle j-menu-quick-toplink js-use-large-menu font-color-meta" role="presentation">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('nav.bar.create.use_large_link'),[])) + '</a>' : '<a href="#" class="toggle j-menu-quick-toplink js-use-small-menu font-color-meta" role="presentation">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('nav.bar.create.use_small_link'),[])) + '</a>', '<h2>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('nav.bar.create.link'),[])), '</h2></div><div class="j-nav-menu-scrollable js-nav-menu-scrollable">');
  var sectionList16 = opt_data.sections;
  var sectionListLen16 = sectionList16.length;
  for (var sectionIndex16 = 0; sectionIndex16 < sectionListLen16; sectionIndex16++) {
    var sectionData16 = sectionList16[sectionIndex16];
    output.append((sectionIndex16 == 0) ? '<div class="js-nav-menu-scrollable">' : '');
    if (sectionData16.visible) {
      output.append('<strong class="j-menu-quick-sectionlabel font-color-meta-light">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(sectionData16.name),[])), '</strong><ul id="create-list-', soy.$$escapeHtml(sectionIndex16), '" class="j-icon-list js-create-list">');
      var itemList27 = sectionData16.items;
      var itemListLen27 = itemList27.length;
      for (var itemIndex27 = 0; itemIndex27 < itemListLen27; itemIndex27++) {
        var itemData27 = itemList27[itemIndex27];
        if (itemData27.visible) {
          if (itemData27.appAction) {
            jive.nav.menu.create.appActionLink(soy.$$augmentMap(itemData27, {smallView: opt_data.smallView}), output);
          } else {
            jive.nav.menu.create.contentTypeLinkItem(soy.$$augmentMap(itemData27, {smallView: opt_data.smallView}), output);
          }
        }
      }
      output.append('</ul>');
    }
    output.append((sectionIndex16 == sectionListLen16 - 1) ? '</div>' : '');
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


jive.nav.menu.create.contentTypeLinkItem = function(opt_data, opt_sb) {
  opt_data = opt_data || {};
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.uploadable) {
    output.append('<li>');
    jive.nav.menu.create.contentTypeLink(soy.$$augmentMap(opt_data.uploadLink, {upload: true, smallView: opt_data.smallView}), output);
    output.append('</li>');
  }
  output.append('<li>');
  jive.nav.menu.create.contentTypeLink(opt_data, output);
  output.append('</li>');
  return opt_sb ? '' : output.toString();
};


jive.nav.menu.create.contentTypeLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.iconCss) {
    output.append('<a href="');
    jive.nav.menu.create.contentTypeHref(soy.$$augmentMap(opt_data, {legacy: ((opt_data.linkCss).match(new RegExp('js-legacy-create', '')) || []).length > 0}), output);
    output.append('" class="', soy.$$escapeHtml(opt_data.linkCss), '"', (opt_data.urlParams && opt_data.urlParams.contentType) ? ' data-content-type="' + soy.$$escapeHtml(opt_data.urlParams.contentType) + '"' : '', (opt_data.upload) ? ' data-upload="true"' : '');
    if (((opt_data.linkCss).match(new RegExp('quick', '')) || []).length > 0) {
      output.append(' data-quick-create-url="');
      jive.nav.menu.create.contentTypeHref(soy.$$augmentMap(opt_data, {legacy: true}), output);
      output.append('"');
    }
    output.append('><span class="', soy.$$escapeHtml(opt_data.iconCss), ' jive-icon-', (opt_data.iconSize) ? soy.$$escapeHtml(opt_data.iconSize) : (opt_data.smallView) ? 'med' : 'big', '"></span>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(opt_data.smallView && opt_data.smallNameKey ? opt_data.smallNameKey : opt_data.nameKey),[])), '</a>');
  }
  output.append((! opt_data.smallView && opt_data.descriptionKey) ? '<p>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(opt_data.descriptionKey),[])) + '</p>' : '');
  return opt_sb ? '' : output.toString();
};


jive.nav.menu.create.contentTypeHref = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.legacy) ? (opt_data.urlParams) ? soy.$$escapeHtml(jive.soy.func.buildUrl(opt_data.url,jQuery.extend({}, (function() { var map = {}; var pairs = [['sr', 'cmenu']]; for (var i = 0; i < pairs.length; i += 1) { map[pairs[i][0]] = pairs[i][1]; } return map; })(), opt_data.urlParams))) : soy.$$escapeHtml(jive.soy.func.buildUrl(opt_data.url,(function() { var map = {}; var pairs = [['sr', 'cmenu']]; for (var i = 0; i < pairs.length; i += 1) { map[pairs[i][0]] = pairs[i][1]; } return map; })())) : 'javascript:void(0)');
  return opt_sb ? '' : output.toString();
};


jive.nav.menu.create.quick = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="jive-modal jive-modal-quickcreate">');
  jive.shared.displayutil.a11yBoundary({type: 'dialog'}, output);
  output.append('<header class="j-modal-header"><h2 class="js-title">', soy.$$escapeHtml(opt_data.title), '</h2></header><label class="j-508-label" id="close-modal-508">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.close.modal'),[])), '</label><a href="#" class="j-modal-close-top close" aria-labelledby="close-modal-508" title="', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.close.modal'),[])), '">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.close'),[])), '  <span class="j-close-icon j-ui-elem" role="img"></span></a><section class="jive-modal-content">', soy.$$filterNoAutoescape(opt_data.body), '</section>');
  jive.shared.displayutil.a11yBoundary({type: 'dialog', isEnd: true}, output);
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


jive.nav.menu.create.appActionLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li><a href="#" rel="nofollow" class="app-action" data-action-id="', soy.$$escapeHtml(opt_data.id), '" data-app-url="', soy.$$escapeHtml(opt_data.appURL), '" data-app-uuid="', soy.$$escapeHtml(opt_data.appUUID), '" data-app-instance-uuid="', soy.$$escapeHtml(opt_data.appInstanceUUID), '" data-name="os-action-link" data-selection-type="', soy.$$escapeHtml(opt_data.coreAPIType), '" data-label="', soy.$$escapeHtml(opt_data.label), '" data-selection-id="', (opt_data.contextObject) ? soy.$$escapeHtml(opt_data.contextObject.id) : '', '" data-view="', (opt_data.view) ? soy.$$escapeHtml(opt_data.view) : '', '"', (opt_data.tooltip) ? 'title="' + soy.$$escapeHtml(opt_data.tooltip) + '"' : '', '>');
  switch (opt_data.icon) {
    case 'edit':
      output.append('<span class="jive-icon-med jive-icon-edit"></span>');
      break;
    case 'manage':
      output.append('<span class="jive-icon-med jive-icon-gear"></span>');
      break;
    case 'move':
      output.append('<span class="jive-icon-med jive-icon-move"></span>');
      break;
    case 'add':
      output.append('<span class="jive-icon-med jive-icon-plus"></span>');
      break;
    case 'delete':
      output.append('<span class="jive-icon-med jive-icon-delete"></span>');
      break;
    case 'download':
      output.append('<span class="jive-icon-med jive-icon-appmarket"></span>');
      break;
    case 'flag':
      output.append('<span class="jive-icon-med jive-icon-checkpoint"></span>');
      break;
    case 'graph':
      output.append('<span class="jive-icon-med jive-icon-poll"></span>');
      break;
    case 'link':
      output.append('<span class="jive-icon-med jive-icon-link"></span>');
      break;
    case 'create':
      output.append('<span class="jive-icon-med jive-icon-add"></span>');
      break;
    default:
      output.append((opt_data.smallView) ? '<span class="jive-icon-med jive-icon-blank"><img src="' + soy.$$escapeHtml(opt_data.icon) + '" height="16" width="16" /></span>' : '<span class="jive-icon-big jive-icon-blank"><img src="' + soy.$$escapeHtml(opt_data.icon) + '" height="24" width="24" /></span>');
  }
  output.append(soy.$$escapeHtml(opt_data.label), '</a></li>');
  return opt_sb ? '' : output.toString();
};

;
jive=this.jive||{};jive.oo=jive.oo||{};jive.oo.resolve=function(b,a){var c;return a.superclass.extend(function(e,k){var j=a.definition,i,h=this;if(typeof j=="function"){j.call(h,e,k)}else{for(i in j){if(j.hasOwnProperty(i)){h[i]=j[i]}}}g(h);g(e);f(h);f(e);function g(l){d(l,function(m){if(b[m]===c){delete l[m]}})}function f(l){d(l,function(m){if(b[m]){l[b[m]]=l[m];delete l[m]}})}function d(m,n){for(var l in m){if(b.hasOwnProperty(l)&&m.hasOwnProperty(l)){n(l)}}}})};
;
jive.AbstractFlowController=jive.oo.Class.extend(function(a){a.init=function(d,c){var b=this;this.initialView=c;this.activeView=c;this.transitions=d;this.events=Object.keys(d);this.views=[c].concat(Object.values(d)).unique();this.resetHistory();b.views.forEach(function(e){b.events.forEach(function(f){e.addListener(f,function(){var h=Array.prototype.slice.call(arguments),g=b.transitions[f];b.transitionTo.apply(b,[g].concat(h));b.viewHistory.push({view:g,args:h});b.activeView=g})});e.addListener("back",function(){b.viewHistory.pop();var h=b.viewHistory.last(),f=h.view,g=h.args;if(b.transitionBack){b.transitionBack.apply(b,[f].concat(g))}else{b.transitionTo.apply(b,[f].concat(g))}b.activeView=f})})};a.transitionTo=jive.oo._abstract;a.resetHistory=function(){this.viewHistory=[{view:this.initialView,data:[]}]}});define("apps/shared/controllers/abstract_flow_controller",function(){return jive.AbstractFlowController});
;
jive.namespace("Navbar.Menu.Create");jive.Navbar.Menu.Create.CreateFlowController=jive.oo.compose(jive.oo.resolve({init:"initFlowController"},jive.AbstractFlowController),jive.oo.resolve({init:"initListView"},jive.Navbar.Menu.AbstractListView)).extend(function(a,b){a.init=function(c,f,g,e,d){this.initFlowController(g,e);this.initListView(c,f,d);this.views.forEach(function(h){h.addListener("browse",function(){jQuery(f).trigger("close")})})};this.render=function(c){this.activeView=this.initialView;this.activeView.render(c);this.setContent(this.activeView.getContent());this.setClass();this.resetHistory()};this.getContent=function(){return this.activeView.getContent()};a.setContent=function(c,d){this.setClass();b.setContent.call(this,c,d)};a.transitionTo=function(d){var f=Array.prototype.slice.call(arguments,1),c=this,e=this.activeView.getClass?this.activeView.getClass():"",h=d.getClass?d.getClass():"";var i=d.render.apply(d,f).addCallback(function(){var j=d.getContent();c.setContent(j,function(){j.find("a, input").filter(":visible").first().focus();jive.localexchange.emit("containerChooserUpdated")})});var g=f.last();if(f.last()&&f.last().emitSuccess&&f.last().emitError){i.addCallback(g.emitSuccess.bind(g));i.addErrback(g.emitError.bind(g))}};a.setClass=function(){var c=this.$menu,d=this.activeView.getClass?this.activeView.getClass():"";this.views.filter(function(e){return e.getClass||e.getClassToRemove}).forEach(function(f){var e=f.getClassToRemove?f.getClassToRemove():f.getClass;c.removeClass(e)});if(d){c.addClass(d)}}});define("apps/navbar/menu/create/controllers/create_flow_controller",function(){return jive.Navbar.Menu.Create.CreateFlowController});
;
jive.namespace("Navbar.Menu.Create");jive.Navbar.Menu.Create.Main=jive.Navbar.Menu.Main.extend(function(a,c){var b=jive.Navbar.Menu.Create;a.init=function(e,f){var d=this;c.init.call(this,e,f,{container:".js-create-nav-container"});this.suggestedContainers=new jive.Placepicker.SuggestedContainersSource({containerType:containerType,containerID:containerID});this.containers=new jive.Placepicker.SearchContainersSource();this.browseContainers=new jive.Placepicker.BrowseContainersSource();this.placePicker=new jive.Placepicker.PlacePickerSource("create",{containerType:containerType,containerID:containerID});this.quickCreateSource=new b.QuickCreateSource();this.userPrefSource=new jive.Browse.User.ItemSource();this.contentTypes={};this.currentContainerType=containerType;this.currentContainerID=containerID;this.listView.addListener("toggle",function(g){g.addCallback(function(h){d.initializeData(h);jive.localexchange.emit("navbarCreateMenuToggled")})});jive.localexchange.addListener("actions.create",function(g){d.selectedContentType=g.contentType;d.upload=g.upload;d.populate(new jive.conc.Promise()).addCallback(function(i){d.initializeData(i);var h=new jive.Placepicker.Main($j.extend({pickerContext:"create",followLinks:true,objectType:d.selectedContentType,upload:d.upload},d.contentTypes[d.selectedContentType]));h.showPicker();d.invalidate()})});jive.Accessibility.main.addHotkey("c",false,false,false,jive.Accessibility.clickAction($j(e)))};a.buildListView=function(g,i,h){var e=new b.TypeChooserView(),f=new b.ContainerChooserView(),j=new b.QuickCreateView(),d=this;d.flowController=new b.CreateFlowController(g,i,{contentType:f,toggleView:e},e,h);e.addListener("contentType",function(l,k){d.selectedContentType=l;d.upload=k}).addListener("toggleView",function(l,k){d.userPrefSource.setUserProperty({userID:"current",propName:"CreateMenuService.smallView",propValue:String(l)});d.initializeData(k)});f.addListener("render",function(k){d.suggestedContainers.get(d.selectedContentType).addCallback(function(l){k.emitSuccess(jQuery.extend({upload:d.upload,selectedContentType:d.contentTypes[d.selectedContentType]},l))})});f.addListener("search",function(k,l){d.containers.findAll({query:k,contentType:d.selectedContentType,maxReturned:10}).addCallback(function(m){l.emitSuccess(jQuery.extend({contentType:d.selectedContentType,containerType:containerType,containerID:containerID,upload:d.upload},m))})});f.addListener("browse",function(l){var k=new jive.Placepicker.Main($j.extend({pickerContext:"create",followLinks:true,objectType:d.selectedContentType,containerType:l.containerType,containerID:l.containerID,upload:d.upload},l.selectedContentType));k.showPicker()});e.addListener("quickCreate",function(l,k){d.selectedContentType=l;d.url=k;require(["apps/direct_messaging/factory"],function(m){if(m.isContentTypeEqualTo(l)){d.flowController.close();m.create({trackingID:"cmenu"}).showModal()}else{j.render()}})});j.addListener("fetch",function(k){d.flowController.close();if(d.url){d.quickCreateSource.fetch(d.url,k)}});jive.localexchange.addListener("createMenu.close",function(){d.flowController.close()});return d.flowController};a.buildItemSource=function(){return new jive.Navbar.Menu.CreateSource()};a.sourceParams=function(){return{containerType:containerType,containerID:containerID}};a.initializeData=function(e){var d=this;if(e){e.sections.reduce(function(f,g){return f.concat(g.items)},[]).filter(function(f){return f.urlParams&&f.urlParams.contentType}).forEach(function(f){if(f.id===null){delete f.id}if(d.currentContainerType&&typeof f.urlParams.containerType=="undefined"){f.urlParams.containerType=""+d.currentContainerType}if(d.currentContainerID&&typeof f.urlParams.containerID=="undefined"){f.urlParams.containerID=""+d.currentContainerID}d.contentTypes[f.urlParams.contentType]=jQuery.extend({id:f.urlParams.contentType,headingKey:f.headingKey,personalContainerTitleKey:f.personalContainerTitleKey,personalContainerCaptionKey:f.personalContainerCaptionKey,searchPlaceholderKey:f.searchPlaceholderKey},f)})}$j("a.js-container-context.quick").each(function(){$j(this).data("quick-create-url",$j(this).data("quick-create-url")+"&containerType="+d.currentContainerType+"&containerID="+d.currentContainerID);$j(this).removeClass("js-container-context")});$j("a.js-container-context").each(function(){$j(this).querystring("containerType="+d.currentContainerType+"&containerID="+d.currentContainerID);$j(this).removeClass("js-container-context")})}});define("apps/navbar/menu/create/main",function(){return jive.Navbar.Menu.Create.Main});
;
jive.namespace("Navbar.Menu.Create");jive.Navbar.Menu.Create.TypeChooserView=jive.AbstractView.extend(function(a){var b=jQuery;this.getContent=function(){return this.content};this.getClass=function(){if(this.data&&!this.data.smallView){return"j-choose-type j-large-view"}else{return"j-choose-type j-small-view"}};this.getClassToRemove=function(){return"j-choose-type j-small-view j-large-view"};this.render=function(d){var c=b(jive.nav.menu.create.contentTypes(this.data||d)),f=new jive.conc.Promise(),e=this;e.updateCurrentContainer();c.on("click",".js-create-list a",function(i){var j=b(this),k=j.attr("data-content-type"),h=!!j.attr("data-upload");if(j.hasClass("quick")){e.showSpinner({size:"small",showLabel:false,context:b(this).parent("li")});var g=j.data("quick-create-url");e.emit("quickCreate",k,g);i.preventDefault()}else{if(k&&j.hasClass("js-createmenu-containerchooser")){e.showSpinner({size:"small",showLabel:false,context:b(this).parent("li")});e.emitP("contentType",k,h).always(function(){e.hideSpinner()});i.preventDefault()}}});e.flatFind(c,".js-use-small-menu").click(function(g){e.data.smallView=true;e.emit("toggleView",true,e.data);g.preventDefault()});e.flatFind(c,".js-use-large-menu").click(function(g){e.data.smallView=false;e.emit("toggleView",false,e.data);g.preventDefault()});this.content=c;this.data=this.data||d;if(e.currentContainerType&&e.currentContainerID){$j(c).find("a.js-container-context").each(function(){$j(this).querystring("containerType="+e.currentContainerType+"&containerID="+e.currentContainerID)})}f.emitSuccess();return f};a.flatFind=function(d,c){return d.find(c).andSelf().filter(c)};a.updateCurrentContainer=function(){var c=this;if(containerType&&containerID&&(typeof c.currentContainerType=="undefined"||typeof c.currentContainerID=="undefined")){c.currentContainerID=containerID;c.currentContainerType=containerType}}});define("apps/navbar/menu/create/views/type_chooser_view",function(){return jive.Navbar.Menu.Create.TypeChooserView});
;
jive.namespace("Navbar.Menu.Create");jive.Navbar.Menu.Create.QuickCreateView=jive.AbstractView.extend(function(a){var c=jQuery;var b;this.render=function(){var f=new jive.conc.Promise();var d=this;var e=this;d.emitP("fetch").addCallback(function(g){e.showQuickView(g)});return f};this.showQuickView=function(i){var e=this;var k=new jive.conc.Promise();var g=e.separateScripts(i.body),f=g[0],d=g[1],j=(f.match(/data-title\s*=\s*(['"])(.+?)\1/)||[])[2]||"",h;j=c("<div/>",{html:j}).text();h=c(jive.nav.menu.create.quick({title:j,body:f}));h.lightbox_me({closeSelector:".close",closeClick:false,closeEsc:false,destroyOnClose:true,initialFocusSelector:"input[type=text]:first",additionalFocusSelectors:"div[contenteditable]",closeFocusSelector:"#navCreate",onLoad:function(){d();k.emitSuccess()},onClose:function(){h.trigger("lightboxclose");delete e.content}});e.content=h}});define("apps/navbar/menu/create/views/quick_create_view",function(){return jive.Navbar.Menu.Create.QuickCreateView});
;
jive.namespace("Navbar.Menu.Create");jive.Navbar.Menu.Create.ContainerChooserView=jive.AbstractView.extend(function(a){var c=jQuery,b=jive.Navbar.Menu.Create;this.getContent=function(){return this.content};this.getClass=function(){return"j-choose-container"};this.render=function(){var e=new jive.conc.Promise(),d=this;this.emitP("render").addCallback(function(h){var f,i,j,g=$j.deparam.querystring();if(g.fromQ){h.fromQ=g.fromQ}d.content=c(jive.placepicker.containers(h));d.content.find(".back").one("click",function(k){d.emit("back");k.preventDefault()});d.content.filter(".j-menu-quick-bottomlink").one("click",function(k){d.emit("browse",h);k.preventDefault()});i=d.flatFind(d.content,".j-places-list");j=new jive.Placepicker.ContainerSearchView(d.flatFind(d.content,"input[name=container-filter]"),i);d.proxyListener(j,"search");e.emitSuccess()});return e};a.flatFind=function(e,d){return e.find("*").andSelf().filter(d)}});define("apps/navbar/menu/create/views/container_chooser_view",function(){return jive.Navbar.Menu.Create.ContainerChooserView});
;
jive.namespace("Navbar.Menu.Create");jive.Navbar.Menu.Create.QuickCreateSource=jive.oo.Class.extend(function(a){this.fetch=function(b,d){var c=d||new jive.conc.Promise();$j.get(b,function(e){c.emitSuccess({body:e})});return c}});define("apps/navbar/menu/create/models/quick_create_source",function(){return jive.Navbar.Menu.Create.QuickCreateSource});
;
jive.namespace("Navbar.Menu.Create");define("apps/navbar/menu/create/models/create_source",["apps/shared/models/rest_service"],function(a){jive.Navbar.Menu.CreateSource=a.extend(function(b){b.resourceType=b.pluralizedResourceType="createmenu"});return jive.Navbar.Menu.CreateSource});
;
jive.namespace("Placepicker");define("apps/placepicker/models/suggested_containers_source",["apps/shared/models/rest_service"],function(a){jive.Placepicker.SuggestedContainersSource=a.extend(function(b,c){b.resourceType="container";b.init=function(d){c.init.call(this,d);$j.extend(this.defaultParams,{containerType:d.containerType,containerID:d.containerID});this.RESOURCE_ENDPOINT=jive.rest.url("/containers/suggested")}});return jive.Placepicker.SuggestedContainersSource});
;
// This file was automatically generated from menu.soy.
// Please don't edit this file by hand.

goog.provide('jive.nav.menu.generic');
goog.provide('jive.nav.menu.link');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');


jive.nav.menu.generic = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul>');
  var linkList4 = opt_data.links;
  var linkListLen4 = linkList4.length;
  for (var linkIndex4 = 0; linkIndex4 < linkListLen4; linkIndex4++) {
    var linkData4 = linkList4[linkIndex4];
    if (linkData4.visible) {
      jive.nav.menu.link(linkData4, output);
    }
  }
  if (opt_data.lastLink && opt_data.lastLink.visible) {
    jive.nav.menu.link(opt_data.lastLink, output);
  }
  output.append('</ul>');
  return opt_sb ? '' : output.toString();
};


jive.nav.menu.link = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li', (opt_data.itemCss) ? ' class="' + soy.$$escapeHtml(opt_data.itemCss) + '"' : '', '><a id="', soy.$$escapeHtml(opt_data.id), '" href="', soy.$$filterNoAutoescape(jive.soy.func.buildUrl(opt_data.url)), '"', (opt_data.urlParams && opt_data.urlParams.contentType) ? ' data-content-type="' + soy.$$escapeHtml(opt_data.urlParams.contentType) + '" ' : '', (opt_data.headingKey) ? ' data-heading-key="' + soy.$$escapeHtml(opt_data.headingKey) + '" ' : '', (opt_data.linkCss) ? 'class="' + soy.$$escapeHtml(opt_data.linkCss) + '"' : '', '>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(opt_data.nameKey),[])), '</a></li>');
  return opt_sb ? '' : output.toString();
};

;
jive.namespace("Navbar.Menu.Custom");jive.Navbar.Menu.Custom.View=jive.AbstractView.extend(function(a,b){this.init=function(d,f,e){var c=this;c.$menu=$j(f);c.$button=$j(d);c.menuOpts=$j.extend({container:d},e);c.popoverOpen=false;c.$button.click(function(g){if(!c.popoverOpen){c.emitP("toggle").addCallback(function(h){c.data=h||c.data;c.openPopover()}).always(function(){c.hideSpinner();var h=c.getContent();if(h&&h.length){jive.Accessibility.focusIn(h)}})}if(!$j.contains(c.$menu[0],g.target)){g.preventDefault()}})};a.openPopover=function(){var c=this;if(!c.popoverOpen){c.$button.find("a").addClass("active");c.$menu.popover($j.extend({context:c.$button,flip:false,hoverSelection:true,onClose:function(){c.$button.find("a").removeClass("active");c.popoverOpen=false;c.$menu.find("div.js-onboarding-tip").remove()},onLoad:function(){c.$menu.trigger("navbarPopoverLoad")}},c.menuOpts));c.popoverOpen=true}}});define("apps/navbar/menu/custom/views/custom_view",function(){return jive.Navbar.Menu.Custom.View});
;
jive.namespace("Navbar.Menu.Custom");jive.Navbar.Menu.Custom.Main=jive.Navbar.Menu.Main.extend(function(a,b){this.init=function(d,f,e){var c=this;b.init.call(this,d,f,e)};a.buildListView=function(c,e,d){return new jive.Navbar.Menu.Custom.View(c,e,d)};a.buildItemSource=function(){return null}});define("apps/navbar/menu/custom/main",function(){return jive.Navbar.Menu.Custom.Main});
;
// This file was automatically generated from apps-container.soy.
// Please don't edit this file by hand.

goog.provide('jive.apps.container.appModalHeader');
goog.provide('jive.apps.container.blockingAlertView');
goog.provide('jive.apps.container.canvasConfigurationModal');
goog.provide('jive.apps.container.chromeApp');
goog.provide('jive.apps.container.credentialsView');
goog.provide('jive.apps.container.renderMessage');
goog.provide('jive.apps.container.servicesView');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');


jive.apps.container.appModalHeader = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<header><h2><img class="j-app-fav-icon" src="', soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.app.favIconSrc)), '" /> <span class="js-app-title"><span class="js-app-title-main"></span></span></h2></header>');
  return opt_sb ? '' : output.toString();
};


jive.apps.container.chromeApp = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-pop jive-modal j-app-modal js-app-chrome" id="jive-modal-appAction"><!-- start chrome actions -->', (opt_data.app.appSettings) ? '<a id="jive-app-settings" href="#" data-appuuid="' + soy.$$escapeHtmlAttribute(opt_data.app.appUUID) + '" class="j-modal-gear-top"><span class="jive-icon-med jive-icon-app-manage"></span></a>' : '', (opt_data.app.developerRefreshURL) ? '<a href="#" data-appuuid="' + soy.$$escapeHtmlAttribute(opt_data.app.appUUID) + '" data-endpoint="' + soy.$$escapeHtmlAttribute(opt_data.app.developerRefreshURL) + '" class="j-modal-refresh-top"><span class="jive-icon-sml jive-glyph-refresh j-ui-elem"></span></a>' : '', '<a href="#" data-appuuid="', soy.$$escapeHtmlAttribute(opt_data.app.appUUID), '" class="j-modal-back-top"><span class="j-ui-elem"></span> Back</a><!-- end chrome actions -->');
  jive.apps.container.appModalHeader(opt_data, output);
  output.append('<label class="j-508-label" id="close-modal-508">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.close.modal'),[])), '</label><a href="#" class="j-modal-close-top close" aria-labelledby="close-modal-508" title="', soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('global.close.modal'),[])), '"><span class="j-close-icon j-ui-elem" role="img"></span></a><div id="j-app-modal-parent" class="jive-modal-content j-pop-main"></div></div>');
  return opt_sb ? '' : output.toString();
};


jive.apps.container.canvasConfigurationModal = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="jive-modal j-app-modal j-pop js-app-chrome" id="jive-canvas-modal">');
  jive.apps.container.appModalHeader(opt_data, output);
  output.append('<label class="j-508-label" id="close-modal-508">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.close.modal'),[])), '</label><a href="#" class="j-modal-close-top close" aria-labelledby="close-modal-508" title="', soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('global.close.modal'),[])), '"><span class="j-close-icon j-ui-elem" role="img"></span></a><div id="j-app-modal-parent" class="jive-modal-content j-pop-main"></div></div>');
  return opt_sb ? '' : output.toString();
};


jive.apps.container.servicesView = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="app-services-container" class="j-app-modal-content"><div class="j-modal-column"><ul class="j-modal-nav">', (opt_data.app.systemSettingsAvailable) ? '<li><a href="#" id="j-app-sys-settings">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('appframework.apps.system.settings'),[])) + '</a></li>' : '', '<li class="selected"><a href="#" id="j-app-svcs-settings">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('appframework.app.options.preferences'),[])), '</a></li><li><a href="#" id="j-app-svcs-config">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('appframework.app.options.configure'),[])), '</a></li><li><a href="#" id="j-app-svcs-about">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('appframework.app.options.about'),[])), '</a></li></ul></div><div class="j-modal-main-wrap"><div class="j-modal-main"><div id="app-services-detail"></div><div class="j-modal-footer"><button id="j-app-services-submit" type="submit" class="j-btn-callout">Submit</button><button id="j-app-services-cancel" type="submit" class="j-btn-global">Cancel</button></div></div></div></div>');
  return opt_sb ? '' : output.toString();
};


jive.apps.container.blockingAlertView = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="app-blocking-alert-container" class="j-app-modal-content j-pop-main j-app-alert"><div id="app-blocking-alert-detail"></div><div class="j-modal-footer"><button id="j-app-blocking-alert-submit" type="submit" class="j-btn-callout">Submit</button><button id="j-app-blocking-alert-cancel" type="submit" class="j-btn-global">Cancel</button></div></div>');
  return opt_sb ? '' : output.toString();
};


jive.apps.container.credentialsView = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="app-credentials-container" class="j-app-modal-content j-pop-main"></div>');
  return opt_sb ? '' : output.toString();
};


jive.apps.container.renderMessage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span>');
  switch (opt_data.messageKey) {
    case 'success.app.refresh':
      output.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('appframework.app.development.refresh'),[])));
      break;
    default:
      output.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(opt_data.messageKey),[])));
  }
  output.append('</span>');
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from appinstancemenu.soy.
// Please don't edit this file by hand.

goog.provide('jive.nav.menu.apps.instances.computeWidthIcon');
goog.provide('jive.nav.menu.apps.instances.computeWidthIcon__Cce8');
goog.provide('jive.nav.menu.apps.instances.content');
goog.provide('jive.nav.menu.apps.instances.renderAppInstanceLink');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.shared.soy.i18nHelper');


jive.nav.menu.apps.instances.content = function(opt_data, opt_sb) {
  opt_data = opt_data || {};
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-pop-row j-rc7 j-rc-none-bottom"><h2 class="font-color-meta">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('nav.bar.apps.subTitle'),[])), '</h2></div><div id="j-quick-launch-apps" class="j-nav-menu-scrollable js-nav-menu-scrollable">');
  if (opt_data.links && opt_data.links.length > 0) {
    output.append('<ul id="j-quick-launch-apps-list" class="clearfix ');
    jive.nav.menu.apps.instances.computeWidthIcon__Cce8({count: opt_data.links.length}, output);
    output.append('">');
    var linkList12 = opt_data.links;
    var linkListLen12 = linkList12.length;
    for (var linkIndex12 = 0; linkIndex12 < linkListLen12; linkIndex12++) {
      var linkData12 = linkList12[linkIndex12];
      jive.nav.menu.apps.instances.renderAppInstanceLink({appUUID: linkData12.appUUID, url: linkData12.url, largeIconSrc: linkData12.largeIconSrc, smallIconSrc: linkData12.iconSrc, iconSize: opt_data.links.length <= 9 ? 128 : 48, title: linkData12.displayTitle, blockedAppInstance: linkData12.blockedAppInstance}, output);
    }
    output.append('</ul>');
  } else {
    output.append('<div class="j-no-apps-installed j-empty-view"><div class="j-empty-container"><div class="j-ui-elem jive-icon-appsmarket"></div><h2>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('appframework.app.name.plural.capitalized'),['Apps'])), '</h2><p class="font-color-meta"><strong>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('nav.bar.apps.market.no.apps'),['There are currently no apps installed.'])), '</strong></p><div class="j-divider"></div><p>');
    jive.shared.soy.i18nHelper({i18nKey: 'nav.bar.apps.market.no.apps.expound', arg0: '<a class="js-launch-app-market" href="#">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('nav.bar.apps.market.catalog.title'),[])) + '<span class="j-ui-elem j-cta-arrow"></span></a>', noAutoEscape: true}, output);
    output.append('</p></div></div>');
  }
  output.append('</div><div id="app-market-links" class="j-pop-row j-last"><ul id="j-app-market-nav" class="');
  jive.nav.menu.apps.instances.computeWidthIcon__Cce8({count: opt_data.links.length}, output);
  output.append('"><li><a id="app-launch-your-apps" href="#">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('nav.bar.apps.market.manage.title'),[])), '</a></li><li><a id="app-launch-market" href="#">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('nav.bar.apps.market.catalog.title'),[])), '</a></li></ul></div>');
  return opt_sb ? '' : output.toString();
};


jive.nav.menu.apps.instances.computeWidthIcon = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.count == 0) ? 'app-list-cols-0 app-list-lg-icon' : (opt_data.count == 1) ? 'app-list-cols-1 app-list-lg-icon' : (opt_data.count <= 4) ? 'app-list-cols-2 app-list-lg-icon' : (opt_data.count <= 9) ? 'app-list-cols-3 app-list-lg-icon' : (opt_data.count <= 16) ? 'app-list-cols-4 app-list-sm-icon' : (opt_data.count <= 25) ? 'app-list-cols-5 app-list-sm-icon' : 'app-list-cols-6 app-list-sm-icon');
  return opt_sb ? '' : output.toString();
};


jive.nav.menu.apps.instances.renderAppInstanceLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="j-quick-launch-app-item"><a ', (opt_data.appUUID) ? 'id="app-ql-' + soy.$$escapeHtmlAttribute(opt_data.appUUID) + '"' : '', ' href="', soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.url)), '" ', (opt_data.blockedAppInstance) ? 'class="j-quick-launch-app-warn-alert"' : '', '><img src="', soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.iconSize == 48 ? opt_data.smallIconSrc : opt_data.largeIconSrc)), '" width="', soy.$$escapeHtmlAttribute(opt_data.iconSize ? opt_data.iconSize : '128'), '" height="', soy.$$escapeHtmlAttribute(opt_data.iconSize ? opt_data.iconSize : '128'), '" class="js-app-icon"/><div class="j-app-title">', (opt_data.blockedAppInstance) ? '<span class="jive-icon-med  jive-icon-warn"></span>' : '', soy.$$escapeHtml(opt_data.title), '</div></a></li>');
  return opt_sb ? '' : output.toString();
};


jive.nav.menu.apps.instances.computeWidthIcon__Cce8 = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.count == 0) ? 'app-list-cols-0 app-list-lg-icon' : (opt_data.count == 1) ? 'app-list-cols-1 app-list-lg-icon' : (opt_data.count <= 4) ? 'app-list-cols-2 app-list-lg-icon' : (opt_data.count <= 9) ? 'app-list-cols-3 app-list-lg-icon' : (opt_data.count <= 16) ? 'app-list-cols-4 app-list-sm-icon' : (opt_data.count <= 25) ? 'app-list-cols-5 app-list-sm-icon' : 'app-list-cols-6 app-list-sm-icon');
  return opt_sb ? '' : output.toString();
};

;
jive.namespace("Apps");jive.AppMarketLaunch=$Class.extend({init:function(a){var b=this;this.appLaunchView=a.appLaunchView},showAppMarket:function(a){require(["appContainer"],function(b){b.handleMarketContext(a)})},addApp:function(b){var a=$j(jive.nav.menu.apps.instances.renderAppInstanceLink({appLink:b}));this.appLaunchView.showLaunchPad();$j(this.appLaunchView.$menu).find("#j-quick-launch-apps-list").fadeIn(200).append(a)}});
;
jive.namespace("Navbar.Menu.Apps.Instances");jive.Navbar.Menu.Apps.Instances.Main=jive.Navbar.Menu.Main.extend(function(a,c){var b=jive.Navbar.Menu.Apps.Instances;this.init=function(e,g,f){c.init.call(this,e,g,f);var d=this;require(["appContainer"],function(h){h.getMarketEvents().addListener("app_install",function(m,p){var o=p&&p.offset();if($j.isArray(m)){for(var n=0,k=m.length;n<k;++n){j(m[n])}}else{j(m)}function j(i){jive.Navbar.Menu.Apps.animatedInstall(i,o).addErrback(function(){d.invalidate();var l=jive.apps.container.renderMessage({messageKey:"appframework.app.installed"});$j("<p/>").html(l).message({style:"info"})})}});h.getMarketEvents().addListener("show_app_detail",function(i){if(i&&i.appUUID){var j=jive.app.url({path:"/apps/market/marketapp/"})+i.appUUID;window.open(j)}})});jive.switchboard.addListener("apps_market.apps_have_changed",function(){d.invalidate()})};this.buildListView=function(d,f,e){return new b.ListView(d,f,e)};this.buildItemSource=function(){return new jive.AppInstanceSource()};a.sourceParams=function(){return{ts:new Date().getTime()}}});define("apps/navbar/menu/apps/instances/main",function(){return jive.Navbar.Menu.Apps.Instances.Main});
;
(function(b){b.path={};var a={rotate:function(f,g){var e=g*3.141592654/180;var h=Math.cos(e),d=Math.sin(e);return[h*f[0]-d*f[1],d*f[0]+h*f[1]]},scale:function(c,d){return[d*c[0],d*c[1]]},add:function(d,c){return[d[0]+c[0],d[1]+c[1]]},minus:function(d,c){return[d[0]-c[0],d[1]-c[1]]}};b.path.bezier=function(g){g.start=b.extend({angle:0,length:0.3333},g.start);g.end=b.extend({angle:0,length:0.3333},g.end);this.p1=[g.start.x,g.start.y];this.p4=[g.end.x,g.end.y];var d=a.minus(this.p4,this.p1);var e=a.scale(d,g.start.length);e=a.rotate(e,g.start.angle);this.p2=a.add(this.p1,e);var c=a.scale(d,-1);var f=a.scale(c,g.end.length);f=a.rotate(f,g.end.angle);this.p3=a.add(this.p4,f);this.f1=function(h){return(h*h*h)};this.f2=function(h){return(3*h*h*(1-h))};this.f3=function(h){return(3*h*(1-h)*(1-h))};this.f4=function(h){return((1-h)*(1-h)*(1-h))};this.css=function(k){var i=this.f1(k),n=this.f2(k),l=this.f3(k),j=this.f4(k);var h=this.p1[0]*i+this.p2[0]*n+this.p3[0]*l+this.p4[0]*j;var m=this.p1[1]*i+this.p2[1]*n+this.p3[1]*l+this.p4[1]*j;return{top:m+"px",left:h+"px"}}};b.path.arc=function(d){for(var c in d){this[c]=d[c]}this.dir=this.dir||1;while(this.start>this.end&&this.dir>0){this.start-=360}while(this.start<this.end&&this.dir<0){this.start+=360}this.css=function(g){var f=this.start*(g)+this.end*(1-(g));f=f*3.1415927/180;var e=Math.sin(f)*this.radius+this.center[0];var h=Math.cos(f)*this.radius+this.center[1];return{top:h+"px",left:e+"px"}}};b.fx.step.path=function(e){var d=e.end.css(1-e.pos);for(var c in d){e.elem.style[c]=d[c]}}})(jQuery);
;
jive.namespace("Navbar.Menu.Apps.Instances");jive.Navbar.Menu.Apps.Instances.ListView=jive.Navbar.Menu.AbstractListView.extend(function(a){var b=jQuery;this.render=function(f){this.stripDomain(f);var e=b(jive.nav.menu.apps.instances.content({links:f}));this.$menu.html(e);this.repositionPopover();var g=new jive.AppMarketLaunch({appLaunchView:this});window.appsMarketLaunchPad=g;var c=function(h){window.location=jive.app.url({path:"/apps/market"})};b(this.$menu).find("#app-launch-market").unbind("click").click(c);b(this.$menu).find(".js-launch-app-market").unbind("click").click(c);b(this.$menu).find("#app-launch-your-apps").unbind("click").click(function(h){window.location=jive.app.url({path:"/apps/market/yourApps"})});var d=this;jive.switchboard.addListener("at",function(i,h){d.animateInstall(i,h)})};this.showLaunchPad=function(){var c=this;c.$button.click()};this.toggleButton=function(d){var c=this;if(d>0){c.$button.show()}else{c.$button.hide()}};a.stripDomain=function(d){var e=/^https?:\/\/.+?\//;if(d&&d.length){for(var c=0;c<d.length;++c){d[c].url=d[c].url.replace(e,"/");d[c].iconSrc=d[c].iconSrc.replace(e,"/");d[c].largeIconSrc=d[c].largeIconSrc.replace(e,"/");d[c].favIconSrc=d[c].favIconSrc.replace(e,"/")}}}});define("apps/navbar/menu/apps/instances/views/instance_list",function(){return jive.Navbar.Menu.Apps.Instances.ListView});
;
define("apps/shared/models/app_instance_source",["apps/shared/models/rest_service"],function(a){jive.AppInstanceSource=a.extend(function(b){b.init=function(c){this.resourceType="instance";this.pluralizedResourceType="instances";this.RESOURCE_ENDPOINT=jive.api.apps(this.pluralizedResourceType)}});return jive.AppDashboardSource});
;
// This file was automatically generated from welcome.soy.
// Please don't edit this file by hand.

goog.provide('jive.welcome.activityStreamNavItem');
goog.provide('jive.welcome.editPageMessage');
goog.provide('jive.welcome.getStartedNavLink');
goog.provide('jive.welcome.homeSideNav');
goog.provide('jive.welcome.homeSideNavLink');
goog.provide('jive.welcome.layoutUpgradeMessage');
goog.provide('jive.welcome.main');
goog.provide('jive.welcome.navConfigMenuPopover');
goog.provide('jive.welcome.newActivityStreamItem');
goog.provide('jive.welcome.onboardingNavProgress');
goog.provide('jive.welcome.pinnedMessage');
goog.provide('jive.welcome.simplifiedMain');
goog.provide('jive.welcome.streamNameEditForm');
goog.provide('jive.welcome.updateIndicator');
goog.provide('jive.welcome.welcomeDynamicPane');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.announcements.list');
goog.require('jive.invitation.inviteLink');
goog.require('jive.invite.jsInit');
goog.require('jive.shared.soy.resourceInlineJs');
goog.require('jive.skin.template.main');
goog.require('jive.try_jive.tryJiveLink');


jive.welcome.main = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var param8 = new soy.StringBuilder('<div class="j-layout j-layout-sl clearfix j-contained j-rc5"><div class="j-column-wrap-s"><nav class="j-column j-column-s" role="navigation" aria-label="', soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('eae.stream.nav'),[])), '">');
  jive.welcome.homeSideNav({homeNavHelper: opt_data.homeNavHelper, selectedLinkID: 'jive-nav-link-dashboard'}, param8);
  param8.append('</nav></div><!-- BEGIN large column --><div class="j-column-wrap-l"><div id="j-dynamic-pane" class="j-column j-column-l">');
  jive.welcome.welcomeDynamicPane(opt_data, param8);
  param8.append('</div></div></div><!-- END main body -->');
  jive.skin.template.main(soy.$$augmentMap(opt_data.templateView, {title: soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('userbar.welcome.gtitle'),[])), canonicalUrl: opt_data.jiveURL, selectedLinkID: 'jive-nav-link-home', bodyClass: 'j-body-welcome j-body-home', bodyContent: param8.toString(), headContent: '<link rel="stylesheet" href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.resourceUrl(window._jive_base_url,'/7.0.0.0/','','/styles/jive-widgets.css'))) + '" type="text/css" media="all" /><meta name="description" content=' + soy.$$escapeHtmlAttributeNospace(opt_data.communityMetaDescription) + '>'}), output);
  return opt_sb ? '' : output.toString();
};


jive.welcome.simplifiedMain = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var param31 = new soy.StringBuilder();
  jive.welcome.welcomeDynamicPane(soy.$$augmentMap(opt_data, {selectedLinkID: 'jive-nav-link-activity'}), param31);
  jive.skin.template.main(soy.$$augmentMap(opt_data.templateView, {title: soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('userbar.welcome.gtitle'),[])), canonicalUrl: opt_data.jiveURL, selectedLinkID: 'jive-nav-link-home', bodyClass: 'j-body-welcome j-body-home', bodyContent: param31.toString(), headContent: '<link rel="stylesheet" href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.resourceUrl(window._jive_base_url,'/7.0.0.0/','','/styles/jive-widgets.css'))) + '" type="text/css" media="all" /><meta name="description" content=' + soy.$$escapeHtmlAttributeNospace(opt_data.communityMetaDescription) + '>'}), output);
  return opt_sb ? '' : output.toString();
};


jive.welcome.welcomeDynamicPane = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  jive.shared.soy.resourceInlineJs({code: 'if (!widgetContainer) {var widgetContainer = new jive.widgets.Container({\'widgetType\': \'' + soy.$$escapeHtml(opt_data.widgetTypeKey) + '\', \'renderWidgetAction\': \'' + soy.$$escapeHtml(jive.soy.func.buildUrl('/render-widget.jspa')) + '\', \'containerID\': \'' + soy.$$escapeHtml(opt_data.place.id) + '\', \'containerType\': \'' + soy.$$escapeHtml(opt_data.place.objectType) + '\'}); define(\'widgetContainer\',widgetContainer);}function toggleWidgetPanel() {var spinner = new jive.loader.LoaderView(); $j(document.body).addClass(\'jive-widget-progresscursor\').addClass(\'jive-body-widget-customizing\'); $j("#jive-widgets-panel-loading").show(); spinner.appendTo($j("#jive-widgets-panel-loading")); $j("#jive-widget-container").safelyLoad(\'' + soy.$$filterNoAutoescape(jive.soy.func.buildUrl('customize-container.jspa',{'containerType':opt_data.place.objectType,'containerID':opt_data.place.id})) + '\', { cache: false }, function() {$j("#jive-widgets-panel-loading").hide(); spinner.destroy(); $j("#jive-widgets-panel").fadeIn(500); $j("#jive-widgets-warning").fadeIn(500); $j(document.body).removeClass(\'jive-widget-progresscursor\');' + ((! opt_data.customizeMessageSeen) ? '$j(\'#customize-message\').slideDown();' : '') + '});}require([\'apps/places/actions/main\', \'apps/places/manage/main\', \'documentReady\'], function(Actions, ManageMain) {new Actions(' + soy.$$filterNoAutoescape(JSON.stringify(opt_data.place).replace(/</g, '\\u003C').replace(/>/g, '\\u003E').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029')) + '); new ManageMain(' + soy.$$filterNoAutoescape(JSON.stringify(opt_data.place).replace(/</g, '\\u003C').replace(/>/g, '\\u003E').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029')) + ', {canManageAnnouncements: ' + ((opt_data.canManageAnnouncements) ? 'true' : 'false') + ', i18n: ' + soy.$$filterNoAutoescape(JSON.stringify((function() { var map = {}; var pairs = [['startFollowing', jive.i18n.i18nText(jive.i18n.getMsg(opt_data.place.placeI18nKeyPrefix + '.startFollow.desc'),[])], ['stopFollowing', jive.i18n.i18nText(jive.i18n.getMsg(opt_data.place.placeI18nKeyPrefix + '.stopFollow.desc'),[])], ['followError', jive.i18n.i18nText(jive.i18n.getMsg('global.follow.error'),[])]]; for (var i = 0; i < pairs.length; i += 1) { map[pairs[i][0]] = pairs[i][1]; } return map; })()).replace(/</g, '\\u003C').replace(/>/g, '\\u003E').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029')) + '}); widgetContainer.renderAll(); $j(\'#customize-message #dismiss-link\').click(dismissCustomizeMessage); $j(\'#js-layout-upgrade-link\').click(function() { dismissLayoutUpgradeMessage(); return false; }); $j(\'#js-layout-upgrade-change-link\').click(function() { dismissLayoutUpgradeMessage(); toggleWidgetPanel(); return false; }); $j(\'.widget-remove-link\').live(\'click\', function() { removeWidgetFrame(this); return false; }); $j(\'.widget-edit-link\').live(\'click\', function() { editWidgetFrame(this); return false; }); $j(\'.widget-dismiss-link\').live(\'click\', function() { dismissWidgetMessage(this); return false; }); var createQuick = new jive.Navbar.Menu.CreateQuick.Main(\'a.js-create-quick-link, a:has(.js-create-quick-link)\');' + ((opt_data.customizeNow) ? 'toggleWidgetPanel();' : '') + '}); function dismissCustomizeMessage() {$j(\'#customize-message\').slideUp(); if ($j(\'#customize-message\').find(\'#dont-display-message\').prop(\'checked\')) {var userSource = new jive.Browse.User.ItemSource(); userSource.setUserProperty({ userID: \'current\', propName: \'jive.customizeWidgetMsg.closed\', propValue: \'true\' });}return false;}function dismissLayoutUpgradeMessage() {$j(\'#js-layout-upgrade\').slideUp(); var containerSource = new jive.Browse.Container.ItemSource(); containerSource.removeContainerProperty({ containerType: ' + soy.$$escapeHtml(opt_data.place.objectType) + ', containerID: ' + soy.$$escapeHtml(opt_data.place.id) + ', propName: \'jive.upgrade.widgetLayoutInvalid\'});}function dismissWidgetMessage(link) {$j(link).closest(\'.widget-message\').slideUp(); var prop = $j(link).attr(\'data-property\'); if (prop) {var userSource = new jive.Browse.User.ItemSource(); userSource.setUserProperty({ userID: \'current\', propName: prop, propValue: \'true\' });}}function removeWidgetFrame(button) {var frameID = widgets.getWidgetFrameID(button); if (frameID) {widgets.removeWidgetFrame(frameID);}}function editWidgetFrame(button) {var frameID = widgets.getWidgetFrameID(button); if (frameID) {widgets.editWidgetFrame(frameID);}}'}, output);
  if (opt_data.invitationLink) {
    jive.invite.jsInit({container_id: opt_data.place.id, container_name: opt_data.place.name, container_type: opt_data.place.placeI18nKeyPrefix, company: opt_data.invitationLink.companyName, domains: opt_data.invitationLink.domainsAsJSON, allowEmail: opt_data.invitationLink.enabled, allowUsers: true, canInvitePartners: opt_data.place.visibleToPartner && opt_data.invitationLink.canInvitePartners, canInviteJustPartners: opt_data.invitationLink.canInviteJustPartners, canInvitePreprovisioned: opt_data.invitationLink.canInvitePreprovisioned, invitePreprovisionedDomainRestricted: opt_data.invitationLink.invitePreprovisionedDomainRestricted, maxInvite: opt_data.invitationLink.maxInvitationCount, invitePeriod: opt_data.invitationLink.invitationPeriodInHours, showNow: opt_data.showInviter, message: opt_data.defaultInviteMessage, trial: opt_data.invitationLink.trial, trigger: '#jive-place-link-actions-invite', trackingID: ''}, output);
  }
  jive.announcements.list({announcements: opt_data.announcements, showDismiss: false}, output);
  if (opt_data.canManageContainer) {
    if (opt_data.showLayoutUpgradeMessage) {
      jive.welcome.layoutUpgradeMessage(null, output);
    }
    if (! opt_data.customizeMessageSeen) {
      jive.welcome.editPageMessage(null, output);
    }
  }
  output.append('<div id="jive-widgets-panel-loading" style="display: none"></div><div id="jive-widget-container" role="main" aria-label="', soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('eae.header.text.overview'),[])), '"><div id="jive-widget-content" class="clearfix">', soy.$$filterNoAutoescape(opt_data.widgetMarkup), '</div></div>', (opt_data.canManageAnnouncements) ? '<div class="jive-modal" id="jive-modal-announcements"><header><h2 class="jive-modal-title jive-modal-title-manage-announcements">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('announcement.manage.system.title'),[])) + '</h2><h2 class="jive-modal-title jive-modal-title-add-announcement" style="display: none">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('announcement.manage.add.title'),[])) + '</h2><h2 class="jive-modal-title jive-modal-title-edit-announcement" style="display: none">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('announcement.manage.edit.title'),[])) + '</h2></header><a href="#" class="j-modal-close-top close">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.close'),[])) + '  <span class="j-close-icon j-ui-elem" role="img"></span></a><div id="announcements-modal"></div></div>' : '', soy.$$filterNoAutoescape(''));
  return opt_sb ? '' : output.toString();
};


jive.welcome.layoutUpgradeMessage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="customize-message jive-info-box clearfix" id="js-layout-upgrade" aria-live="polite" aria-atomic="true"><a href="#" id="js-layout-upgrade-link" style="float: right">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('welcome.dismiss.link'),[])), '</a><h5>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('welcome.layout.upgrade.header'),[])), '</h5><p class="welcome-message">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('welcome.layout.upgrade.text'),[])), '&nbsp;<a href="#" id="js-layout-upgrade-change-link">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('welcome.layout.upgrade.change.link'),[])), '</a></p></div>');
  return opt_sb ? '' : output.toString();
};


jive.welcome.editPageMessage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="customize-message clearfix" id="customize-message" style="display: none"><h5>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('welcome.editpagetitle'),[])), '</h5><p class="welcome-message">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('welcome.editinfo'),[])), '</p><div class="customize-display clearfix"><a href="#" id="dismiss-link" class="j-btn-global">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('welcome.dismiss.link'),[])), '</a><label for="dont-display-message"><input type="checkbox" id="dont-display-message">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('welcome.dontshowmsg'),[])), '</label></div><div style="float:right"></div></div>');
  return opt_sb ? '' : output.toString();
};


jive.welcome.homeSideNav = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul id="j-home-side-nav" class="j-homenav">');
  if (! opt_data.homeNavHelper.partner) {
    jive.welcome.homeSideNavLink(soy.$$augmentMap(opt_data.homeNavHelper.dashboardLink, {selected: (opt_data.selectedLinkID == opt_data.homeNavHelper.dashboardLink.id) ? 'true' : '', canPin: opt_data.homeNavHelper.canPin, pinned: opt_data.homeNavHelper.canPin && opt_data.homeNavHelper.pinnedLinkID == opt_data.homeNavHelper.dashboardLink.id, visible: opt_data.homeNavHelper.dashboardLink.visible}), output);
  }
  jive.welcome.homeSideNavLink(soy.$$augmentMap(opt_data.homeNavHelper.activityStreamLink, {selected: (opt_data.selectedLinkID == opt_data.homeNavHelper.activityStreamLink.id) ? 'true' : '', canPin: opt_data.homeNavHelper.canPin, pinned: opt_data.homeNavHelper.canPin && opt_data.homeNavHelper.pinnedLinkID == opt_data.homeNavHelper.activityStreamLink.id}), output);
  if (! opt_data.homeNavHelper.anonymous) {
    output.append('<li id="j-as-nav-links" class="j-streamlinks"><ul class="j-custom-streams-nav" aria-label="', soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('eae.stream.custom'),[])), '">');
    if (opt_data.homeNavHelper.activityStreams) {
      var streamList180 = opt_data.homeNavHelper.activityStreams;
      var streamListLen180 = streamList180.length;
      for (var streamIndex180 = 0; streamIndex180 < streamListLen180; streamIndex180++) {
        var streamData180 = streamList180[streamIndex180];
        jive.welcome.activityStreamNavItem(soy.$$augmentMap(streamData180, {id: streamData180.id, name: streamData180.name, selected: streamData180.selected, pollingEnabled: opt_data.homeNavHelper.pollingEnabled, pinnedLinkID: opt_data.homeNavHelper.pinnedLinkID, selectedLinkID: opt_data.selectedLinkID}), output);
      }
    }
    jive.welcome.newActivityStreamItem({disabled: opt_data.homeNavHelper.activityStreams.length >= opt_data.homeNavHelper.maxCustomStreams}, output);
    output.append('</ul></li>');
    if (! opt_data.homeNavHelper.anonymous) {
      jive.welcome.homeSideNavLink(soy.$$augmentMap(opt_data.homeNavHelper.inboxLink, {selected: (opt_data.selectedLinkID == opt_data.homeNavHelper.inboxLink.id) ? 'true' : '', pollingEnabled: opt_data.homeNavHelper.pollingEnabled, canPin: opt_data.homeNavHelper.canPin, pinned: opt_data.homeNavHelper.canPin && opt_data.homeNavHelper.pinnedLinkID == opt_data.homeNavHelper.inboxLink.id}), output);
    }
    jive.welcome.homeSideNavLink(soy.$$augmentMap(opt_data.homeNavHelper.actionsLink, {selected: (opt_data.selectedLinkID == opt_data.homeNavHelper.actionsLink.id) ? 'true' : '', pollingEnabled: opt_data.homeNavHelper.pollingEnabled, canPin: opt_data.homeNavHelper.canPin, pinned: opt_data.homeNavHelper.canPin && opt_data.homeNavHelper.pinnedLinkID == opt_data.homeNavHelper.actionsLink.id}), output);
    jive.welcome.homeSideNavLink(soy.$$augmentMap(opt_data.homeNavHelper.moderationLink, {selected: (opt_data.selectedLinkID == opt_data.homeNavHelper.moderationLink.id) ? 'true' : '', pollingEnabled: opt_data.homeNavHelper.pollingEnabled, canPin: false, pinned: false}), output);
  }
  var linkList218 = opt_data.homeNavHelper.customLinks;
  var linkListLen218 = linkList218.length;
  for (var linkIndex218 = 0; linkIndex218 < linkListLen218; linkIndex218++) {
    var linkData218 = linkList218[linkIndex218];
    jive.welcome.homeSideNavLink(soy.$$augmentMap(linkData218, {selected: (opt_data.selectedLinkID == linkData218.id) ? 'true' : '', pollingEnabled: opt_data.homeNavHelper.pollingEnabled, canPin: false, pinned: false}), output);
  }
  jive.welcome.getStartedNavLink(soy.$$augmentMap(opt_data.homeNavHelper.onboardingLink, {selected: (opt_data.selectedLinkID == opt_data.homeNavHelper.onboardingLink.id) ? 'true' : '', canPin: opt_data.homeNavHelper.canPin, pinned: opt_data.homeNavHelper.canPin && opt_data.homeNavHelper.pinnedLinkID == opt_data.homeNavHelper.onboardingLink.id, visible: opt_data.homeNavHelper.onboardingLink.visible}), output);
  output.append('</ul>');
  jive.shared.soy.resourceInlineJs({code: '$j(function() {require([\'apps/home/home_nav_controller\'], function(HomeNavController) {jive.HomeNav.GlobalController = new HomeNavController({selectedLinkID: \'' + soy.$$escapeHtml(opt_data.selectedLinkID) + '\', pollingEnabled: ' + soy.$$escapeHtml(opt_data.homeNavHelper.pollingEnabled) + ', canPin: ' + soy.$$escapeHtml(opt_data.homeNavHelper.canPin) + ', maxCustomStreams: ' + soy.$$escapeHtml(opt_data.homeNavHelper.maxCustomStreams) + ', showOnbIntroModal: ' + soy.$$escapeHtml(opt_data.homeNavHelper.showOnbIntroModal) + ', sysDefaultHomeNavView: \'' + soy.$$escapeHtml(opt_data.homeNavHelper.systemDefaultHomeNavView) + '\', instanceName: \'' + soy.$$escapeHtml(opt_data.homeNavHelper.instanceName) + '\', userOriginType: \'' + soy.$$escapeHtml(opt_data.homeNavHelper.userOriginType) + '\', displayData: ' + soy.$$filterNoAutoescape(JSON.stringify(opt_data.homeNavHelper.displayData).replace(/</g, '\\u003C').replace(/>/g, '\\u003E').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029')) + '});});});'}, output);
  if (opt_data.homeNavHelper.invitationLink && opt_data.homeNavHelper.invitationLink.visibleButNotToExternalContributors) {
    jive.invitation.inviteLink(soy.$$augmentMap(opt_data.homeNavHelper.invitationLink, {containerId: opt_data.homeNavHelper.invitationLink.communityId, containerType: opt_data.homeNavHelper.invitationLink.communityObjectType, containerName: opt_data.homeNavHelper.invitationLink.communityName, allowUsers: false, maxInvite: opt_data.homeNavHelper.invitationLink.maxInvitationCount, invitePeriod: opt_data.homeNavHelper.invitationLink.invitationPeriodInHours, trackingID: 'sidebar'}), output);
  } else if (opt_data.homeNavHelper.tryJiveLink && opt_data.homeNavHelper.tryJiveLink.visible) {
    jive.try_jive.tryJiveLink(opt_data.homeNavHelper.tryJiveLink, output);
  }
  output.append('<!-- Powered by JIVE - mandated element  --><div class="j-poweredby-activity" id="j-pbj-act" role=\'img\' title=\'', soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('global.access.poweredby'),[])), '\'></div>');
  return opt_sb ? '' : output.toString();
};


jive.welcome.streamNameEditForm = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<form class="j-js-display-name-edit-controls j-edit-name j-form"><label for="', soy.$$escapeHtmlAttribute(opt_data.streamName), '-input-id" class="j-508-label">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.stream.name'),[])), '</label><input type="text" maxlength="36" class="j-stream-name-input j-js-stream-name-input j-rc3" value="', soy.$$escapeHtmlAttribute(opt_data.streamName), '" id="', soy.$$escapeHtmlAttribute(opt_data.streamName), '-input-id"/></form>');
  return opt_sb ? '' : output.toString();
};


jive.welcome.homeSideNavLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.visible) {
    output.append('<li id="', soy.$$escapeHtmlAttribute(opt_data.id), '" class="j-js-side-nav-item j-homenav-item j-rc5 ', (opt_data.selected) ? 'selected' : '', ' ', (opt_data.pinned) ? 'pinned' : '', '" data-source="', soy.$$escapeHtmlAttribute(opt_data.source), '"><span class="jive-icon-med ', soy.$$escapeHtmlAttribute(opt_data.iconCss), ' j-homenav-icon"></span><a href="', soy.$$filterNoAutoescape(jive.soy.func.buildUrl(opt_data.url)), '" ', (opt_data.titleKey) ? 'title="' + soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg(opt_data.titleKey),[])) + '"' : '', ' class="j-homenav-link j-js-side-nav-link ', soy.$$escapeHtmlAttribute(opt_data.linkCss), '"><span class="nav-link lnk">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(opt_data.nameKey),[])), '</span>', (opt_data.canPin) ? '<span class="j-js-pin-stream jive-icon-sml j-stream-pin jive-glyph-pin-dark" title="' + soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('nav.bar.home.set.default'),[])) + '"></span>' : '');
    if (opt_data.countType && opt_data.pollingEnabled) {
      jive.welcome.updateIndicator({type: opt_data.countType, count: 0, extraCssClasses: 'j-sidenav-count'}, output);
    }
    output.append('</a></li>');
  }
  return opt_sb ? '' : output.toString();
};


jive.welcome.getStartedNavLink = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.visible) {
    output.append('<li id="', soy.$$escapeHtmlAttribute(opt_data.id), '" class="j-js-side-nav-item j-homenav-item j-rc5 ', (opt_data.selected) ? 'selected' : '', ' ', (opt_data.pinned) ? 'pinned' : '', '" data-source="', soy.$$escapeHtmlAttribute(opt_data.source), '" role="tab"><span class="jive-icon-med ', soy.$$escapeHtmlAttribute(opt_data.iconCss), ' j-homenav-icon"></span><a href="', soy.$$filterNoAutoescape(jive.soy.func.buildUrl(opt_data.url)), '" ', (opt_data.titleKey) ? 'title="' + soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg(opt_data.titleKey),[])) + '"' : '', ' class="j-homenav-link j-js-side-nav-link ', soy.$$escapeHtmlAttribute(opt_data.linkCss), '"><span class="nav-link lnk">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(opt_data.nameKey),[])), '</span>');
    jive.welcome.onboardingNavProgress({percentComplete: opt_data.viewData.percentComplete, totalSteps: opt_data.viewData.totalSteps, totalStepsComplete: opt_data.viewData.totalStepsComplete}, output);
    output.append('</a></li>');
  }
  return opt_sb ? '' : output.toString();
};


jive.welcome.onboardingNavProgress = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="j-onb-nav-progress" title=""><strong class="j-complete ', (opt_data.percentComplete == 0) ? ' font-color-j-highlight j-notstarted' : 'font-color-meta j-started', '">', soy.$$escapeHtml(opt_data.totalStepsComplete), '/', soy.$$escapeHtml(opt_data.totalSteps), '</strong><div class="j-onb-progress j-rc5" ', (opt_data.percentComplete == 0) ? ' style="display:none"' : 'style="display:block"', '><div class="j-progress-bar"><span class="j-index-holder"><span style="width: ', soy.$$escapeHtmlAttribute(soy.$$filterCssValue(opt_data.percentComplete)), '%;" class="j-index"> </span></span></div></div></div>');
  return opt_sb ? '' : output.toString();
};


jive.welcome.activityStreamNavItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li id="jive-nav-link-', soy.$$escapeHtmlAttribute(opt_data.source), (opt_data.source != 'connections' && opt_data.source != 'watches') ? '-' + soy.$$escapeHtmlAttribute(opt_data.id) : '', '" data-streamid="', soy.$$escapeHtmlAttribute(opt_data.id), '" data-source="', soy.$$escapeHtmlAttribute(opt_data.source), '" class="j-js-side-nav-item j-js-as-nav-item j-homenav-item j-rc5 j-custom-stream-item ', (opt_data.selectedLinkID && (opt_data.source == 'connections' && opt_data.selectedLinkID == 'jive-nav-link-connections' || opt_data.source == 'watches' && opt_data.selectedLinkID == 'jive-nav-link-watches' || opt_data.source == 'custom' && opt_data.selectedLinkID == 'jive-nav-link-custom-' + opt_data.id)) ? 'selected' : '', ' ', (opt_data.pinnedLinkID && (opt_data.source == 'connections' && opt_data.pinnedLinkID == 'jive-nav-link-connections' || opt_data.source == 'watches' && opt_data.pinnedLinkID == 'jive-nav-link-watches' || opt_data.source == 'custom' && opt_data.pinnedLinkID == 'jive-nav-link-custom-' + opt_data.id)) ? 'pinned' : '', '" ><span class="jive-icon-med jive-icon-activity-pulse-active j-homenav-icon"></span><a href="', (opt_data.source == 'connections' || opt_data.source == 'watches') ? soy.$$filterNoAutoescape(jive.soy.func.buildUrl('/activity?streamSource=' + opt_data.source)) : soy.$$filterNoAutoescape(jive.soy.func.buildUrl('/activity?streamSource=' + opt_data.source + '&streamID=' + opt_data.id)), '" class="j-homenav-link j-custom-stream-link j-js-side-nav-link j-js-as-nav-link j-stream-link"><span class="nav-link lnk j-js-nav-stream-name">', soy.$$escapeHtml(opt_data.name), '</span>');
  if (opt_data.pollingEnabled) {
    jive.welcome.updateIndicator({type: 'gauge', count: 0}, output);
  }
  output.append('</a>', (opt_data.source == 'connections') ? '<span class="j-homenav-link j-custom-stream-link js-conns-display-name j-stream-link" style="display:none;"><span class="nav-link lnk">' + soy.$$escapeHtml(opt_data.name) + '</span></span>' : '', '<a href="#" class="j-done-building j-js-done-building">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.activitystream.builder.done'),[])), '</a><a href="#" class="j-js-stream-options j-homenav-options jive-icon-med jive-icon-gear" title="Stream options"></a></li>');
  return opt_sb ? '' : output.toString();
};


jive.welcome.navConfigMenuPopover = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-homenav-options-menu j-nav-menu j-menu j-pop-main"><ul><li><a href=\'#\' class="j-js-edit-stream"><span class="jive-icon-sml jive-glyph-edit"></span>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('home.nav.config.menu.edit'),[])), '</a></li>', (opt_data.canPin) ? '<li><a href=\'#\' class="j-js-pin-stream"><span class="jive-icon-sml jive-glyph-pin"></span>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('home.nav.config.menu.pin'),[])) + '</a></li>' : '', (opt_data.canDelete) ? '<li><a href=\'#\' class="j-js-delete-stream"><span class="jive-icon-sml jive-glyph-delete"></span>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('home.nav.config.menu.delete'),[])) + '</a></li>' : '', '</ul></div>');
  return opt_sb ? '' : output.toString();
};


jive.welcome.newActivityStreamItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li id="jive-nav-link-new" data-streamid="new" class="j-js-side-nav-item j-js-as-nav-item j-homenav-item j-custom-stream-item', (opt_data.disabled) ? ' j-max-streams-reached font-color-meta-light' : '', '"><span class="j-enabled"><span class="jive-icon-sml jive-glyph-plus j-newstream-icon"></span><label id="jive-nav-link-new-label" class="j-508-label">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.streams.new_stream_label'),[])), '</label><a href="#" class="j-homenav-link j-custom-stream-link j-js-edit-stream j-new-stream" aria-labelledby="jive-nav-link-new-label" title="', soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('eae.streams.new_stream_label'),[])), '"><span class="nav-link lnk j-js-nav-stream-name font-color-meta" aria-hidden="true">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.streams.new_stream'),[])), '</span></a></span><span class="j-disabled">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.streams.max_reached'),[])), '</span></li>');
  return opt_sb ? '' : output.toString();
};


jive.welcome.pinnedMessage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('nav.bar.home.pinned.message'),[opt_data.streamName])), '</div>');
  return opt_sb ? '' : output.toString();
};


jive.welcome.updateIndicator = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.type == 'count') ? ' <span data-count="' + soy.$$escapeHtmlAttribute(opt_data.count) + '" tabindex="0" class="j-js-update-indicator j-update-count ' + ((opt_data.count > 50) ? 'fiftyplus' : '') + ' ' + ((opt_data.extraCssClasses) ? soy.$$escapeHtmlAttribute(opt_data.extraCssClasses) : '') + '" ' + ((opt_data.count == 0) ? 'style="display:none;"' : '') + '>' + ((opt_data.count > 50) ? '50+' : soy.$$escapeHtml(opt_data.count)) + '</span>' : (opt_data.type == 'gauge') ? '<span role="img" data-count="' + soy.$$escapeHtmlAttribute(opt_data.count) + '" class="j-js-update-indicator j-update-gauge jive-icon-med ' + ((opt_data.count < 10) ? 'jive-icon-activity-gauge-low' : (opt_data.count < 40) ? 'jive-icon-activity-gauge-med' : 'jive-icon-activity-gauge-high') + '" ' + ((opt_data.count == 0) ? 'style="display:none;"' : '') + ' title="' + ((opt_data.count < 10) ? soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('nav.bar.gauge.lessthanten'),[])) : (opt_data.count < 40) ? soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('nav.bar.gauge.tenplus'),[])) : soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('nav.bar.gauge.fiftyplus'),[]))) + '" aria-label="' + ((opt_data.count < 10) ? soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('nav.bar.gauge.lessthanten'),[])) : (opt_data.count < 40) ? soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('nav.bar.gauge.tenplus'),[])) : soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('nav.bar.gauge.fiftyplus'),[]))) + '" tabindex="0" ></span>' : '');
  return opt_sb ? '' : output.toString();
};

;
jive.namespace("ActivityStream");define("apps/activity_stream/models/fill_in_the_gap_request",["jquery/jquery.oo"],function(a){jive.ActivityStream.FillInTheGapRequest=a.extend({init:function(b){this.originalIDs=b.originalIDs;this.timestamp=b.timestamp;this.fullContent=b.fullContent;this.pageSize=b.pageSize}});return jive.ActivityStream.FillInTheGapRequest});
;
jive.namespace("ActivityStream");define("apps/activity_stream/models/full_replies_request",["jquery/jquery.oo"],function(a){jive.ActivityStream.FullRepliesRequest=a.extend({init:function(b){this.originalIDs=b.originalIDs}});return jive.ActivityStream.FullRepliesRequest});
;
jive.namespace("ActivityStream");define("apps/activity_stream/models/activity_stream_source",["apps/shared/models/rest_service","lib/jiverscripts/src/conc/promise","apps/activity_stream/models/rtc_source"],function(a,b,c){jive.ActivityStream.StreamSource=a.extend(function(d){d.resourceType="activity-stream";d.pluralizedResourceType=d.resourceType;jive.conc.observable(this);this.initializeView=function(g,j,i,e,l,k){var f=this.RESOURCE_ENDPOINT+"/initializeView",h={objectType:e||3,objectID:l||window._jive_current_user.ID,streamSource:g,streamID:j||0,filterType:i||["all"],timestamp:0};d.displayGenericErrorMessages=false;if(!k){k=new b()}return this.commonAjaxRequest(k,"POST",{url:f,data:JSON.stringify(h)}).addErrback(function(n,m){if(m==401||m==403||m==4026||m===0){location.reload()}}).always(function(){d.displayGenericErrorMessages=true})};this.list=function(f,g){var e=this.RESOURCE_ENDPOINT+"/list";d.displayGenericErrorMessages=false;if(!g){g=new b()}return this.commonAjaxRequest(g,"POST",{url:e,data:JSON.stringify(f)}).addErrback(function(i,h){if(h==401||h==403||h==4026||h===0){location.reload()}}).always(function(){d.displayGenericErrorMessages=true})};this.getMore=function(f){var e=this.RESOURCE_ENDPOINT+"/list/before";return this.commonAjaxRequest(new b(),"POST",{url:e,data:JSON.stringify(f)})};this.saveActiveStreamTab=function(f){var e=this.RESOURCE_ENDPOINT+"/activetab/save";return this.commonAjaxRequest(new b(),"POST",{url:e,data:f})};this.saveActiveStreamFilter=function(f,g){var e=this.RESOURCE_ENDPOINT+"/activefilter/save/"+f;return this.commonAjaxRequest(new b(),"POST",{url:e,data:g})};this.saveActiveCommunicationsItem=function(e,g){var f=this.RESOURCE_ENDPOINT+"/activeitem/save/"+e+"/"+g;return this.commonAjaxRequest(new b(),"POST",{url:f})};this.saveRefreshTime=function(e){var f=this.RESOURCE_ENDPOINT+"/refreshtime/save";return this.commonAjaxRequest(new b(),"POST",{url:f,data:e})};this.newCount=function(){var e=this.RESOURCE_ENDPOINT+"/new/count";return this.commonAjaxRequest(new b(),"GET",{url:e})};this.getFullContent=function(e,h){var g=new b(),f=this.RESOURCE_ENDPOINT+"/fullcontent/"+e+"/"+h;if(e==1150305777){f=this.RESOURCE_ENDPOINT+"/acclaim"}return this.commonAjaxRequest(g,"GET",{url:f})};this.getFullReplies=function(e,h,g){var f=this.RESOURCE_ENDPOINT+"/fullreplies/"+e+"/"+h;return this.commonAjaxRequest(new b(),"POST",{url:f,data:JSON.stringify(g)},g)};this.fillInTheGaps=function(e,i,g){var h=new b();var f=this.RESOURCE_ENDPOINT+"/fillinthegaps/"+e+"/"+i;return this.commonAjaxRequest(h,"POST",{url:f,data:JSON.stringify(g)},g)};this.fillActivity=function(e,i,g,h){var f=this.RESOURCE_ENDPOINT+"/fillactivity/"+e+"/"+i;return this.commonAjaxRequest(h,"POST",{url:f,data:JSON.stringify(g)})};this.saveInboxViewType=function(e){var f=this.RESOURCE_ENDPOINT+"/inbox/viewtype/save";return this.commonAjaxRequest(new b(),"POST",{url:f,data:e})};this.saveInboxListHeight=function(e){var f=this.RESOURCE_ENDPOINT+"/inbox/listheight/save";return this.commonAjaxRequest(new b(),"POST",{url:f,data:JSON.stringify(e)})};this.getGlobalNavMenu=function(){var e=this.RESOURCE_ENDPOINT+"/global/nav/menu";return this.commonAjaxRequest(new b(),"GET",{url:e})}});return jive.ActivityStream.StreamSource});
;
jive.namespace("ReadTracking");define("apps/read_tracking/models/read_tracking_source",["apps/shared/models/rest_service"],function(a){jive.ReadTracking.ReadTrackingSource=a.extend(function(b,c){b.resourceType="readtracking";b.pluralizedResourceType=b.resourceType;this.save=function(e,h,g){var f=new jive.conc.Promise(),d="read";if(!g){d="unread"}$j.ajax({type:"POST",dataType:"json",url:this.RESOURCE_ENDPOINT+"/"+e+"/"+h+"/"+d,success:function(i){f.emitSuccess()}});return f};this.markAllRead=function(e){var d=this.RESOURCE_ENDPOINT+"/markallread";var e=e==null?"":e;return this.commonAjaxRequest(new jive.conc.Promise(),"POST",{url:d,data:JSON.stringify(e)})}});return jive.ReadTracking.ReadTrackingSource});
;
// This file was automatically generated from actions_view.soy.
// Please don't edit this file by hand.

goog.provide('jive.eae.actions.actionsContent');
goog.provide('jive.eae.actions.actionsDynamicPane');
goog.provide('jive.eae.actions.actionsTabCount');
goog.provide('jive.eae.actions.actionsTabs');
goog.provide('jive.eae.actions.jsI18nHelper');
goog.provide('jive.eae.actions.main');
goog.provide('jive.eae.actions.markedContent');
goog.provide('jive.eae.actions.markedContentItem');
goog.provide('jive.eae.actions.markedContentItemInner');
goog.provide('jive.eae.actions.markedContentList');
goog.provide('jive.eae.actions.markedContentListItems');
goog.provide('jive.eae.actions.markedItem');
goog.provide('jive.eae.actions.markedItemBadgeContainer');
goog.provide('jive.eae.actions.markedItemInner');
goog.provide('jive.eae.actions.markedItemInnerText');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.apps.v2.canvas.renderAppCanvas');
goog.require('jive.shared.displayutil.avatar');
goog.require('jive.shared.displayutil.userDisplayName');
goog.require('jive.shared.displayutil.userDisplayNameLink');
goog.require('jive.shared.soy.i18nHelper');
goog.require('jive.shared.soy.resourceInlineJs');
goog.require('jive.skin.template.main');
goog.require('jive.welcome.homeSideNav');


jive.eae.actions.main = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var param8 = new soy.StringBuilder('<div class="j-layout j-layout-sl clearfix j-contained j-rc5"><div class="j-column-wrap-s"><nav class="j-column j-column-s" role="navigation" aria-label="', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.stream.nav'),[])), '">');
  jive.welcome.homeSideNav({homeNavHelper: opt_data.homeNavHelper, selectedLinkID: 'jive-nav-link-actions'}, param8);
  param8.append('</nav></div><!-- BEGIN large column --><div class="j-column-wrap-l"><div id="j-dynamic-pane" class="j-column j-column-l">');
  jive.eae.actions.actionsDynamicPane(opt_data, param8);
  param8.append('</div></div></div>');
  jive.skin.template.main(soy.$$augmentMap(opt_data.templateView, {title: soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('nav.bar.actions.link'),[])), metaDescription: jive.i18n.i18nText(jive.i18n.getMsg('eae.actions.description'),[]), selectedLinkID: 'jive-nav-link-home', bodyClass: 'j-body-home j-body-actions', bodyContent: param8.toString()}), output);
  return opt_sb ? '' : output.toString();
};


jive.eae.actions.actionsDynamicPane = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  jive.eae.actions.actionsTabs(opt_data, output);
  output.append('<!-- BEGIN main body --><div id="j-actions-page-content" class="j-stream j-actionStream" role="main" aria-label="', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.header.text.actions'),[])), '">');
  if (opt_data.currentTab == 'jive-aq-marked') {
    jive.eae.actions.actionsContent(opt_data, output);
  }
  if (opt_data.appInstanceView) {
    jive.apps.v2.canvas.renderAppCanvas({appInstanceView: opt_data.appInstanceView, launchContext: opt_data.appLaunchContextView, market: false}, output);
  }
  output.append('</div>');
  jive.shared.soy.resourceInlineJs({code: '$j(function(){require([\'apps/actions/actions_controller\'], function(ActionsMain) {if (jive.Actions && jive.Actions.Controller) {jive.Actions.Controller.init({currentTab: \'' + soy.$$escapeHtml(opt_data.currentTab) + '\'});}else {jive.Actions.Controller = new ActionsMain({currentTab: \'' + soy.$$escapeHtml(opt_data.currentTab) + '\'}); jive.Actions.Controller.attachGlobalEventListeners();}});});'}, output);
  return opt_sb ? '' : output.toString();
};


jive.eae.actions.actionsTabs = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<header id="j-actions-page-tabs" class="clearfix"><div id="j-aq-filters" class="j-act-filter-bar j-rc4 j-rc-none-bottom"><a id="jive-aq-marked" class="filter ', (opt_data.currentTab == 'jive-aq-marked') ? 'j-sub-selected font-color-normal' : '', '" data-type="marked" href="', soy.$$escapeHtml(jive.soy.func.buildUrl('/actions/marked')), '"><span class="lnk">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('actions.show.marked.actions'),[])), '</span> <span class="count">');
  jive.eae.actions.actionsTabCount({count: opt_data.actionsCount}, output);
  output.append('</span></a>');
  if (opt_data.tasksEnabled == true) {
    output.append('<span id="j-tasks-nav" class="j-aq-tasks ', (opt_data.currentTab == 'jive-tasks') ? 'j-sub-selected font-color-normal' : '', '"><a id="jive-tasks" href="#"><span class="lnk">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('actions.tasks.tab'),[])), '</span> <span class="count">');
    jive.eae.actions.actionsTabCount({count: opt_data.tasksCount}, output);
    output.append('</span></a></span>');
  }
  var itemList81 = opt_data.actionsTabLinks;
  var itemListLen81 = itemList81.length;
  for (var itemIndex81 = 0; itemIndex81 < itemListLen81; itemIndex81++) {
    var itemData81 = itemList81[itemIndex81];
    output.append((itemData81 && itemData81.appActionLink && itemData81.visible) ? '<span id="' + soy.$$escapeHtml(itemData81.id) + '-nav"  ><a id="' + soy.$$escapeHtml(itemData81.id) + '" href="' + soy.$$escapeHtml(jive.soy.func.buildUrl(itemData81.url,itemData81.urlParams)) + '" class="j-aq-tasks ' + ((opt_data.currentTab == itemData81.id) ? 'j-sub-selected font-color-normal' : '') + '"><span class="lnk">' + soy.$$escapeHtml(itemData81.label) + '</span> </a></span>' : '');
  }
  output.append('</div></header>');
  return opt_sb ? '' : output.toString();
};


jive.eae.actions.actionsTabCount = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span data-count="', soy.$$escapeHtml(opt_data.count), '" class="j-js-update-indicator" ', (opt_data.count == 0) ? 'style="display:none;"' : '', '>', (opt_data.count > 50) ? '(50+)' : '(' + soy.$$escapeHtml(opt_data.count) + ')', '</span>');
  return opt_sb ? '' : output.toString();
};


jive.eae.actions.actionsContent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="j-actions-list" class="j-aq-stream clearfix">');
  jive.eae.actions.markedContent({markedContentList: opt_data.actions}, output);
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


jive.eae.actions.markedContent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-aq-marked-filters j-act-filter-bar j-sub-bar j-rc4 j-rc-none-bottom"><a class="js-aq-subfilter filter j-sub-selected j-toggle left" data-type="active" href="#"><span class="lnk">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('actions.subfilter.active'),[])), '</span> </a><a class="js-aq-subfilter filter j-toggle right" data-type="resolved" href="#"><span class="lnk">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('actions.subfilter.resolved'),[])), '</span> </a></div><div id="j-marked-list-container" class="js-marked-list-container j-markedActionsList">');
  jive.eae.actions.markedContentList({markedContentList: opt_data.markedContentList, type: 'active'}, output);
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


jive.eae.actions.markedContentList = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.markedContentList.length) ? '<h4 id="j-aq-marked-list-title">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.actionqueue.marked.' + opt_data.type + '.title'),[])) + '</h4>' : '', '<ul id="', soy.$$escapeHtml(opt_data.type), '-content" class="j-markedActions js-marked-list" data-type="', soy.$$escapeHtml(opt_data.type), '">');
  jive.eae.actions.markedContentListItems({markedContentList: opt_data.markedContentList, type: opt_data.type, showMoreAfter: 5}, output);
  output.append('</ul>');
  return opt_sb ? '' : output.toString();
};


jive.eae.actions.markedContentListItems = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var jiveContentOutcomeList147 = opt_data.markedContentList;
  var jiveContentOutcomeListLen147 = jiveContentOutcomeList147.length;
  if (jiveContentOutcomeListLen147 > 0) {
    for (var jiveContentOutcomeIndex147 = 0; jiveContentOutcomeIndex147 < jiveContentOutcomeListLen147; jiveContentOutcomeIndex147++) {
      var jiveContentOutcomeData147 = jiveContentOutcomeList147[jiveContentOutcomeIndex147];
      if (jiveContentOutcomeIndex147 < opt_data.showMoreAfter) {
        jive.eae.actions.markedItem({item: jiveContentOutcomeData147, type: opt_data.type}, output);
      } else {
        output.append('<li><a href="#" class="js-show-more-marked"><span class="j-rc6 j-more-label">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.actionqueue.marked.view.more'),[])), '</span></a></li>');
      }
    }
  } else {
    output.append('<li>', (opt_data.type == 'active') ? '<div class="j-actions-empty-callout"><h3>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.actionqueue.marked.active.none.title'),[])) + '</h3><p>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.actionqueue.marked.active.none.desc'),[])) + '</p></div>' : '<div class="j-actions-empty-callout"><h3>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.actionqueue.marked.resolved.none.title'),[])) + '</h3><p>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.actionqueue.marked.resolved.none.desc'),[])) + '</p></div>', '</li>');
  }
  return opt_sb ? '' : output.toString();
};


jive.eae.actions.markedItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<li class="js-marked-item j-aq-data j-aq-marked-item j-markedActionItem" data-id="', soy.$$escapeHtml(opt_data.item.jiveObjectViewBean.typeThread ? opt_data.item.jiveObjectViewBean.threadID : opt_data.item.jiveObjectViewBean.id), '" data-type="', soy.$$escapeHtml(opt_data.item.jiveObjectViewBean.typeThread ? 1 : opt_data.item.jiveObjectViewBean.objectType), '" data-modification-date="', soy.$$escapeHtml(opt_data.item.outcomeModificationTimestamp), '">');
  if (opt_data.renderLocation == 'globalNav') {
    output.append('<a href="', soy.$$filterNoAutoescape(jive.soy.func.buildUrl(opt_data.item.jiveObjectViewBean.jiveObjectURL)), '" class="j-aq-marked-entry font-color-normal clearfix">');
    jive.eae.actions.markedItemInner(opt_data, output);
    output.append('</a>');
  } else {
    jive.eae.actions.markedItemInner(opt_data, output);
  }
  output.append('</li>');
  return opt_sb ? '' : output.toString();
};


jive.eae.actions.markedItemInner = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.renderLocation != 'globalNav') {
    jive.eae.actions.markedItemBadgeContainer({item: opt_data.item, objectType: opt_data.item.jiveObjectViewBean.typeThread ? 1 : opt_data.item.jiveObjectViewBean.objectType, objectId: opt_data.item.jiveObjectViewBean.typeThread ? opt_data.item.jiveObjectViewBean.threadID : opt_data.item.jiveObjectViewBean.id, type: opt_data.type == 'active' ? 'pending' : 'resolved'}, output);
  }
  if (opt_data.renderLocation == 'globalNav') {
    jive.shared.displayutil.avatar(soy.$$augmentMap(opt_data.item.currentOutcomeOwner, {size: opt_data.renderLocation == 'globalNav' ? 32 : 46, currentUserPartner: opt_data.item.currentOutcomeOwner.partner, hideLink: true}), output);
  } else {
    output.append('<div class="j-act-avatar">');
    jive.shared.displayutil.avatar(soy.$$augmentMap(opt_data.item.currentOutcomeOwner, {size: 46, currentUserPartner: opt_data.item.currentOutcomeOwner.partner}), output);
    output.append('</div>');
  }
  if (opt_data.renderLocation == 'globalNav') {
    output.append('<div class="font-color-meta">');
    jive.eae.actions.markedItemInnerText(opt_data, output);
    output.append('</div>');
  } else {
    output.append('<p class="font-color-meta">');
    jive.eae.actions.markedItemInnerText(opt_data, output);
    output.append('</p>');
  }
  output.append('<div class="j-act-meta"><strong>', soy.$$escapeHtml(opt_data.item.outcomeModificationDate), '</strong></div>');
  return opt_sb ? '' : output.toString();
};


jive.eae.actions.markedItemInnerText = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.item.selfOwned) {
    var param248 = new soy.StringBuilder();
    jive.eae.actions.markedContentItem(opt_data, param248);
    jive.shared.soy.i18nHelper({i18nKey: (opt_data.item.jiveObjectViewBean.typeComment) ? 'eae.actionqueue.marked.' + soy.$$escapeHtml(opt_data.type) + '.comment' + soy.$$escapeHtml(opt_data.type == 'active' ? '.' + opt_data.item.pendingType : '') + '.you' : (opt_data.item.jiveObjectViewBean.typeMessage) ? 'eae.actionqueue.marked.' + soy.$$escapeHtml(opt_data.type) + '.reply' + soy.$$escapeHtml(opt_data.type == 'active' ? '.' + opt_data.item.pendingType : '') + '.you' : 'eae.actionqueue.marked.' + soy.$$escapeHtml(opt_data.type) + '.tlo' + soy.$$escapeHtml(opt_data.type == 'active' ? '.' + opt_data.item.pendingType : '') + '.you', arg0: param248.toString(), noAutoEscape: true}, output);
  } else {
    var param272 = new soy.StringBuilder();
    if (opt_data.renderLocation == 'globalNav') {
      jive.shared.displayutil.userDisplayName(opt_data.item.currentOutcomeOwner, param272);
    } else {
      jive.shared.displayutil.userDisplayNameLink(opt_data.item.currentOutcomeOwner, param272);
    }
    var param278 = new soy.StringBuilder();
    jive.eae.actions.markedContentItem(opt_data, param278);
    jive.shared.soy.i18nHelper({i18nKey: (opt_data.item.jiveObjectViewBean.typeComment) ? 'eae.actionqueue.marked.' + soy.$$escapeHtml(opt_data.type) + '.comment' + soy.$$escapeHtml(opt_data.type == 'active' ? '.' + opt_data.item.pendingType : '') : (opt_data.item.jiveObjectViewBean.typeMessage) ? 'eae.actionqueue.marked.' + soy.$$escapeHtml(opt_data.type) + '.reply' + soy.$$escapeHtml(opt_data.type == 'active' ? '.' + opt_data.item.pendingType : '') : 'eae.actionqueue.marked.' + soy.$$escapeHtml(opt_data.type) + '.tlo' + soy.$$escapeHtml(opt_data.type == 'active' ? '.' + opt_data.item.pendingType : ''), arg0: param272.toString(), arg1: param278.toString(), noAutoEscape: true}, output);
  }
  return opt_sb ? '' : output.toString();
};


jive.eae.actions.markedContentItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.renderLocation == 'globalNav') {
    output.append('<div class="title font-color-link">');
    jive.eae.actions.markedContentItemInner(opt_data, output);
    output.append('</div>');
  } else {
    output.append('<a href="', soy.$$filterNoAutoescape(jive.soy.func.buildUrl(opt_data.item.jiveObjectViewBean.jiveObjectURL)), '" class="title">');
    jive.eae.actions.markedContentItemInner(opt_data, output);
    output.append('</a>');
  }
  return opt_sb ? '' : output.toString();
};


jive.eae.actions.markedContentItemInner = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.item.jiveObjectViewBean.jiveObjectIconLink) ? soy.$$filterNoAutoescape(opt_data.item.jiveObjectViewBean.jiveObjectIconLink) : '<span class="' + soy.$$escapeHtml(opt_data.item.jiveObjectViewBean.jiveObjectCSS) + '"></span>', '<span class="j-item">', soy.$$filterNoAutoescape(opt_data.item.jiveObjectViewBean.subject), '</span>');
  return opt_sb ? '' : output.toString();
};


jive.eae.actions.markedItemBadgeContainer = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul id="js-outcome-badge-container-', soy.$$escapeHtml(opt_data.objectType), '-', soy.$$escapeHtml(opt_data.objectId), '" class="js-outcome-badge-container js-ed-', soy.$$escapeHtml(opt_data.objectType), '-', soy.$$escapeHtml(opt_data.objectId), ' j-badge-action" data-object-type="', soy.$$escapeHtml(opt_data.objectType), '" data-object-id="', soy.$$escapeHtml(opt_data.objectId), '" data-allowed-outcome-types="', soy.$$escapeHtml(['pending', 'resolved']), '" data-no-hydrate="true" aria-label="', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('outcomes.badgeContainer.ariaLabel'),[])), '" aria-live="polite"><li class="js-outcome-badge js-outcome-type-', soy.$$escapeHtml(opt_data.type), '" data-outcome="', soy.$$escapeHtml(jive.soy.func.buildUrl('/api/core/v3/outcomes/' + opt_data.item.outcomeId)), '" data-ed=\'{"type":', soy.$$escapeHtml(opt_data.objectType), ', "id": ', soy.$$escapeHtml(opt_data.objectId), '}\' data-outcome-type="', soy.$$escapeHtml(opt_data.type), '"><a href="#" aria-haspopup="true">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('outcomes.badge.actionqueue.' + opt_data.type),[])), '<span class="jive-icon-med jive-icon-arrow-down"></span></a></li></ul>');
  return opt_sb ? '' : output.toString();
};


jive.eae.actions.jsI18nHelper = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(opt_data.key),[])));
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from homemenu.soy.
// Please don't edit this file by hand.

goog.provide('jive.nav.menu.home.content');
goog.provide('jive.nav.menu.home.main');
goog.provide('jive.nav.menu.home.moderationItem');
goog.provide('jive.nav.menu.home.overdueTask');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.eae.actions.markedItem');
goog.require('jive.shared.displayutil.icon');
goog.require('jive.shared.soy.i18nHelper');


jive.nav.menu.home.main = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="j-home-global-nav-menu" class="j-quick-menu j-badge-menu j-act">');
  if (opt_data.data) {
    jive.nav.menu.home.content(opt_data, output);
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


jive.nav.menu.home.content = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-nav-menu-scrollable js-nav-menu-scrollable j-globalNav-notification">');
  if (opt_data.data.inboxItems.activityContainerList.length) {
    output.append('<h4 class="j-badge-hd j-rc5 j-rc-none-bottom"><a href="', soy.$$escapeHtml(jive.soy.func.buildUrl('/inbox')), '" title="', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.inbox'),[])), '"><span class="jive-icon-med jive-icon-communications"></span>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.inbox'),[])), '</a>');
    if (opt_data.counts['inbox'] > 0) {
      output.append('<strong class="j-menu-count font-color-notify">');
      jive.shared.soy.i18nHelper({i18nKey: 'nav.bar.home.menu.unread', arg0: (opt_data.counts['inbox'] > 50) ? '50+' : soy.$$escapeHtml(opt_data.counts['inbox']), noAutoEscape: true}, output);
      output.append('</strong>');
    }
    output.append('</h4><ul id="j-home-nav-menu-inbox-list" class="j-badge-menu-list"></ul>');
  }
  if (opt_data.data.actionItems.outcomeList.length) {
    output.append('<h4 class="j-badge-hd"><a href="', soy.$$escapeHtml(jive.soy.func.buildUrl('/actions/marked')), '" title="', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.header.text.actionitems'),[])), '"><span class="jive-icon-med jive-icon-actions"></span>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.header.text.actionitems'),[])), '</a><strong class="j-menu-count font-color-notify">');
    jive.shared.soy.i18nHelper({i18nKey: 'nav.bar.home.menu.active', arg0: (opt_data.counts['actions'] > 50) ? '50+' : soy.$$escapeHtml(opt_data.counts['actions']), noAutoEscape: true}, output);
    output.append('</strong></h4><ul id="j-home-nav-menu-tasks-list" class="j-badge-menu-list">');
    var itemList54 = opt_data.data.actionItems.outcomeList;
    var itemListLen54 = itemList54.length;
    for (var itemIndex54 = 0; itemIndex54 < itemListLen54; itemIndex54++) {
      var itemData54 = itemList54[itemIndex54];
      if (itemIndex54 < 5) {
        jive.eae.actions.markedItem({item: itemData54, type: 'active', renderLocation: 'globalNav'}, output);
      }
    }
    output.append('</ul>');
  }
  if (opt_data.data.taskItems.taskList.length) {
    output.append('<h4 class="j-badge-hd"><a href="', soy.$$escapeHtml(jive.soy.func.buildUrl('/actions/tasks')), '" title="', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.header.text.overduetasks'),[])), '"><span class="jive-icon-med jive-icon-actions"></span>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.header.text.overduetasks'),[])), '</a><strong class="j-menu-count font-color-notify">');
    jive.shared.soy.i18nHelper({i18nKey: 'nav.bar.home.menu.overdue', arg0: (opt_data.counts['tasks'] > 50) ? '50+' : soy.$$escapeHtml(opt_data.counts['tasks']), noAutoEscape: true}, output);
    output.append('</strong></h4><ul id="j-home-nav-menu-tasks-list" class="j-badge-menu-list">');
    var taskList83 = opt_data.data.taskItems.taskList;
    var taskListLen83 = taskList83.length;
    for (var taskIndex83 = 0; taskIndex83 < taskListLen83; taskIndex83++) {
      var taskData83 = taskList83[taskIndex83];
      if (taskIndex83 < 5) {
        output.append('<li>');
        jive.nav.menu.home.overdueTask({task: taskData83}, output);
        output.append('</li>');
      }
    }
    output.append('</ul>');
  }
  if (opt_data.data.moderationItems.moderationList.length) {
    output.append('<h4 class="j-badge-hd"><a href="', soy.$$escapeHtml(jive.soy.func.buildUrl('/moderation')), '" title="', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.header.text.moderation'),[])), '"><span class="jive-icon-med jive-icon-actions"></span>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('nav.bar.moderation.link'),[])), '</a><strong class="j-menu-count font-color-notify">');
    jive.shared.soy.i18nHelper({i18nKey: 'nav.bar.home.menu.new', arg0: (opt_data.counts['moderations'] > 50) ? '50+' : soy.$$escapeHtml(opt_data.counts['moderations']), noAutoEscape: true}, output);
    output.append('</strong></h4><ul id="j-home-nav-menu-moderation-list" class="j-badge-menu-list">');
    var moderationItemList112 = opt_data.data.moderationItems.moderationList;
    var moderationItemListLen112 = moderationItemList112.length;
    for (var moderationItemIndex112 = 0; moderationItemIndex112 < moderationItemListLen112; moderationItemIndex112++) {
      var moderationItemData112 = moderationItemList112[moderationItemIndex112];
      if (5 > moderationItemIndex112) {
        output.append('<li>');
        jive.nav.menu.home.moderationItem({moderationItem: moderationItemData112}, output);
        output.append('</li>');
      }
    }
    output.append('<ul>');
  }
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


jive.nav.menu.home.overdueTask = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a href="', soy.$$escapeHtml(jive.soy.func.buildUrl('/actions/tasks')), '" class="j-aq-entry font-color-normal clearfix"><span class="jive-icon-big jive-icon-task acticon"></span><div class="title font-color-link">', soy.$$escapeHtml(opt_data.task.subject), '</div><div class="j-task-duedate font-color-danger">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.task.dueDate.date'),[opt_data.task.dueDate])), '</div></a>');
  return opt_sb ? '' : output.toString();
};


jive.nav.menu.home.moderationItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a href="', soy.$$escapeHtml(jive.soy.func.buildUrl('/moderation')), '" class="j-aq-entry font-color-normal clearfix"><span class="acticon">');
  jive.shared.displayutil.icon({type: opt_data.moderationItem.contentCode, size: 'med'}, output);
  output.append('</span><div class="title font-color-link">', (opt_data.moderationItem.contentCode == 'profileimage') ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('mod.profileimage.subj.text'),[])) : soy.$$escapeHtml(opt_data.moderationItem.contentDisplayName), ' <span class="font-color-meta">by</span> ', soy.$$escapeHtml(opt_data.moderationItem.user.displayName), '</div><div class="j-td-date font-color-meta">', soy.$$escapeHtml(opt_data.moderationItem.creationDate), '</div></a>');
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from include.soy.
// Please don't edit this file by hand.

goog.provide('jive.eae.activitystream.include.activityVerbPhrase');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.shared.displayutil.avatar');
goog.require('jive.shared.displayutil.userDisplayNameLink');
goog.require('jive.shared.soy.escapeHelper');
goog.require('jive.shared.soy.i18nHelper');


jive.eae.activitystream.include.activityVerbPhrase = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.object.deleted) {
    output.append('<span class="font-color-meta j-act-deleted">', (opt_data.object.deletedType && opt_data.object.deletedType == 'mentioned') ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.user.deleted.mention'),[])) + ' ' : (opt_data.type == 2) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.user.deleted.reply'),[])) + ' ' : (opt_data.type == 801) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.user.deleted.bookmark'),[])) + ' ' : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.user.deleted.comment'),[])) + ' ', '</span>');
  } else if (opt_data.object.typeThread) {
    output.append((opt_data.type == 'created') ? (opt_data.object.hasQuestion) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('activity.type.asked'),[])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('activity.type.starteddiscussion'),[])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('activity.type.' + opt_data.type),[])));
  } else if (opt_data.object.parentAuthor && (! opt_data.hideDetailedReplyTo || opt_data.object.typeWallEntryComment)) {
    if (opt_data.object.typeWallEntryComment) {
      var param34 = new soy.StringBuilder();
      var param35 = new soy.StringBuilder();
      if (opt_data.displayAuthorLink) {
        jive.shared.displayutil.userDisplayNameLink(opt_data.object.parentAuthor, param35);
      } else {
        param35.append(soy.$$escapeHtml(opt_data.object.parentAuthor.displayName));
      }
      jive.shared.soy.escapeHelper({stringToEscape: param35.toString()}, param34);
      jive.shared.soy.i18nHelper({i18nKey: 'activity.type.wallentrycomment', arg0: param34.toString(), noAutoEscape: true}, output);
    } else if (! opt_data.hideDetailedReplyTo) {
      var param53 = new soy.StringBuilder();
      var param54 = new soy.StringBuilder();
      if (opt_data.displayAuthorLink) {
        jive.shared.displayutil.userDisplayNameLink(opt_data.object.parentAuthor, param54);
      } else {
        param54.append(soy.$$escapeHtml(opt_data.object.parentAuthor.displayName));
      }
      jive.shared.soy.escapeHelper({stringToEscape: param54.toString()}, param53);
      jive.shared.soy.i18nHelper({i18nKey: (opt_data.object.commentContentResource && opt_data.object.commentContentResource.objectType == 129) ? 'activity.type.authorcommentedinresponseto' : (opt_data.object.typeMessage) ? 'activity.type.repliedinresponseto' : 'activity.type.commentedinresponseto', arg0: param53.toString(), noAutoEscape: true}, output);
      output.append((opt_data.againstObject) ? ' ' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('activity_stream.on_object'),[])) + ' ' : '');
    }
  } else if (opt_data.object.typeMessage || opt_data.type == 'correct_answer_set') {
    if (opt_data.type == 'correct_answer_set') {
      var param72 = new soy.StringBuilder();
      var param73 = new soy.StringBuilder();
      if (opt_data.displayAuthorLink) {
        jive.shared.displayutil.userDisplayNameLink(opt_data.object.user, param73);
      } else {
        param73.append(soy.$$escapeHtml(opt_data.object.user.displayName));
      }
      jive.shared.soy.escapeHelper({stringToEscape: param73.toString()}, param72);
      jive.shared.soy.i18nHelper({i18nKey: 'activity.type.replymarkedcorrect', arg0: param72.toString(), noAutoEscape: true}, output);
    } else if (! opt_data.againstObject) {
      output.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('activity.type.replied'),[])), ' ');
    } else {
      output.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('activity.type.replied.to'),[])), ' ');
    }
  } else if (opt_data.object.typeOutcome) {
    if (opt_data.object.targetObject.typeMessage || opt_data.object.targetObject.typeComment) {
      var param95 = new soy.StringBuilder();
      var param96 = new soy.StringBuilder();
      if (opt_data.displayAuthorLink) {
        jive.shared.displayutil.userDisplayNameLink(opt_data.object.targetObject.user, param96);
      } else {
        param96.append(soy.$$escapeHtml(opt_data.object.targetObject.user.displayName));
      }
      jive.shared.soy.escapeHelper({stringToEscape: param96.toString()}, param95);
      jive.shared.soy.i18nHelper({i18nKey: 'activity.type.outcome.' + soy.$$escapeHtml(opt_data.object.outcomeTypeName) + soy.$$escapeHtml(opt_data.object.outcomeTypeName == 'pending' ? '.' + opt_data.object.pendingType : ''), arg0: param95.toString(), arg1: (opt_data.object.targetObject.typeMessage) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.liking.message'),[])) : (opt_data.object.targetObject.typeComment) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.liking.comment'),[])) : '', noAutoEscape: true}, output);
    } else {
      output.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('activity.type.outcome.' + opt_data.object.outcomeTypeName + '.tlo' + (opt_data.object.outcomeTypeName == 'pending' ? '.' + opt_data.object.pendingType : '')),[])));
    }
  } else if (opt_data.object.typeComment || opt_data.type == 'share') {
    output.append((opt_data.object.commentContentResource && opt_data.object.commentContentResource.objectType == 129) ? (! opt_data.againstObject) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('activity.type.authorcomment'),[])) + ' ' : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('activity.type.authorcommentto'),[])) + ' ' : (! opt_data.againstObject) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('activity.type.commented'),[])) + ' ' : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('activity.type.commentedon'),[])) + ' ');
  } else if (opt_data.object.typePoll && opt_data.type == 'created') {
    output.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('activity.type.startedpoll'),[])));
  } else if ((opt_data.object.typeBlogPost || opt_data.object.typeDocument) && opt_data.type == 'created') {
    output.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('activity.type.wrote'),[])));
  } else if (opt_data.object.typeUserStatus) {
    output.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('activity.type.status'),[])));
  } else if (opt_data.object.typeWallEntry) {
    if (opt_data.type == 'liked') {
      output.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('activity.type.liked'),[])));
    } else if (opt_data.type == 'repost') {
      var param148 = new soy.StringBuilder();
      var param149 = new soy.StringBuilder();
      jive.shared.displayutil.userDisplayNameLink(opt_data.object.repostedUser, param149);
      jive.shared.soy.escapeHelper({stringToEscape: param149.toString()}, param148);
      jive.shared.soy.i18nHelper({i18nKey: (opt_data.user && opt_data.object.repostedUser.id == opt_data.user.id) ? 'activity.type.status.repost.your' : 'activity.type.status.repost', arg0: param148.toString(), noAutoEscape: true}, output);
    } else if (opt_data.object.wallCreationSrc != '') {
      jive.shared.soy.i18nHelper({i18nKey: 'activity.type.status.with.source', arg0: soy.$$filterNoAutoescape(opt_data.object.wallCreationSrc), noAutoEscape: true}, output);
    } else {
      output.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('activity.type.status'),[])));
    }
  } else if (opt_data.object.typeProjectStatus) {
    output.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('activity.type.updatedStatus'),[])));
  } else if (opt_data.object.typeUserRelationship && opt_data.user) {
    var param167 = new soy.StringBuilder();
    var param168 = new soy.StringBuilder();
    jive.shared.displayutil.avatar(soy.$$augmentMap(opt_data.object.relatedUser, {size: 32, currentUserPartner: opt_data.user.partner}), param168);
    jive.shared.displayutil.userDisplayNameLink(opt_data.object.relatedUser, param168);
    jive.shared.soy.escapeHelper({stringToEscape: param168.toString()}, param167);
    jive.shared.soy.i18nHelper({i18nKey: 'activity.type.' + opt_data.type, arg0: param167.toString(), noAutoEscape: true}, output);
  } else if (opt_data.object.typeExternalActivity) {
    output.append(soy.$$filterNoAutoescape(opt_data.object.text), ' ');
  } else if (opt_data.object.typeTileStreamEntry) {
    output.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('activity.type.tileStreamEntry'),[])));
  } else if (opt_data.object.typeCollaboration) {
    output.append((opt_data.user && opt_data.object.user.id == opt_data.user.id) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('activity.type.directmessage.you.sent'),[])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('activity.type.directmessage'),[])));
  } else if (opt_data.object.bookmarkedContent) {
    output.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('activity.type.bookmarked'),[])));
  } else {
    output.append((opt_data.type != '') ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('activity.type.' + opt_data.type),[])) : '');
  }
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from common.soy.
// Please don't edit this file by hand.

goog.provide('jive.eae.common.activityAuthor');
goog.provide('jive.eae.common.activityAuthorNoVerb');
goog.provide('jive.eae.common.activityContainerJoSubject');
goog.provide('jive.eae.common.activityContentCommon');
goog.provide('jive.eae.common.activityContentText');
goog.provide('jive.eae.common.activityHeadingHref');
goog.provide('jive.eae.common.activityHeadingHrefWithReferringUser');
goog.provide('jive.eae.common.activityNavActions');
goog.provide('jive.eae.common.collapsedExcerptText');
goog.provide('jive.eae.common.contentTypeClassName');
goog.provide('jive.eae.common.contentTypeDisplayName');
goog.provide('jive.eae.common.contentTypeParentPreviewStylingClassName');
goog.provide('jive.eae.common.currentCountText');
goog.provide('jive.eae.common.digestSubItem');
goog.provide('jive.eae.common.displayParentAuthor');
goog.provide('jive.eae.common.embeddedPreview');
goog.provide('jive.eae.common.entryRepost');
goog.provide('jive.eae.common.formatMediaLinkUrl');
goog.provide('jive.eae.common.formatMediaLinkUrl__C2bf6');
goog.provide('jive.eae.common.generateUserMetaData');
goog.provide('jive.eae.common.groupedUsers');
goog.provide('jive.eae.common.jsI18nHelper');
goog.provide('jive.eae.common.loadingSpinner');
goog.provide('jive.eae.common.microRTEContainer');
goog.provide('jive.eae.common.parentPreviewLinks');
goog.provide('jive.eae.common.readingPaneBottomReplyLinkKey');
goog.provide('jive.eae.common.renderStreamAttachments');
goog.provide('jive.eae.common.repliedToIcon');
goog.provide('jive.eae.common.replyCountText');
goog.provide('jive.eae.common.replyingToText');
goog.provide('jive.eae.common.repostModal');
goog.provide('jive.eae.common.repostModalSuccess');
goog.provide('jive.eae.common.rtePanel');
goog.provide('jive.eae.common.rteTextArea');
goog.provide('jive.eae.common.sharedVia');
goog.provide('jive.eae.common.subactivity');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.eae.acclaim.likeControl');
goog.require('jive.eae.activitystream.include.activityVerbPhrase');
goog.require('jive.eae.shared.subactivity.outcome');
goog.require('jive.outcomes.badge.badgeContainer');
goog.require('jive.shared.displayutil.avatar');
goog.require('jive.shared.displayutil.containerDisplayNameLink');
goog.require('jive.shared.displayutil.renderGuestDisplayName');
goog.require('jive.shared.displayutil.userDisplayName');
goog.require('jive.shared.displayutil.userDisplayNameLink');
goog.require('jive.shared.soy.escapeHelper');
goog.require('jive.shared.soy.i18nHelper');
goog.require('jive.shared.soy.render');
goog.require('jive.shared.soy.resourceInlineJs');
goog.require('jive.soy.share.control');
goog.require('jive.statusinput.containers.microbloggingCommentStatusInput');
goog.require('jive.statusinput.containers.renderAttachmentsContainer');
goog.require('jive.statusinput.containers.repostStatusInput');


jive.eae.common.rteTextArea = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<textarea id="', soy.$$escapeHtmlAttribute(jive.soy.func.randomString()), '" class=\'wysiwygtext\' name="body" rows="15" cols="30" ></textarea>');
  return opt_sb ? '' : output.toString();
};


jive.eae.common.rtePanel = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-panel-rte-wrap clearfix"><div class="j-panel-rte-loading j-act-reply" style="display:none"><div class="j-rte-placeholder"></div></div><div class="j-panel-rte j-act-reply" style="display:none"><div class="j-reply-to j-js-reply-to"></div><div class="j-act-reply-form">', (opt_data.user.anonymous) ? '<div class="jive-reply-post-anonymous j-form"><div><label for="replyGuestName-id">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.name'),[])) + '<span class="font-color-meta-light"> ' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('blogs.vwpst.required.label'),[])) + '</span><input class="replyGuestName" type="text" name="replyGuestName" id="replyGuestName-id"></label></div><div><label for="replyGuestName-id">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.email_address'),[])) + '<span class="font-color-meta-light"> ' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('blogs.vwpst.rqdNotPblshd.label'),[])) + '</span><input class="replyGuestEmail" type="text" name="replyGuestEmail" id="replyGuestEmail-id"></label></div>' + ((! opt_data.hideGuestURLField) ? '<div><label for="replyGuestUrl-id">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('blogs.vwpst.wsite_address.label'),[])) + '<input class="replyGuestUrl" type="text" name="replyGuestUrl" id="replyGuestUrl-id"></label></div>' : '') + '</div>' : '', '<p class="jive-error-text jive-comment-error" style="display:none"></p><form method="post" action="javascript:void(0);" name="jive-comment-post-form" class="j-panel-rte-view sammy-app-1288289329294-553-">');
  jive.eae.common.rteTextArea(null, output);
  output.append((opt_data.externallyVisible == 'true') ? '<div class="j-rte-message"><span class="jive-icon-med jive-icon-partner"></span><span class="font-color-meta-light j-browse-external-access"><em>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('partner.content.reply.warn.visible'),[])) + '</em></span></div>' : '', '<div class="jive-form-buttons"><input type="submit" name="post" class="j-btn-global j-btn-callout" value="', soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('we.comment.singular'),[])), '" /><a href=\'#\' class=\'j-panel-hide-rte-link j-btn-global\'>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.cancel'),[])), '</a></div></form></div></div></div>');
  return opt_sb ? '' : output.toString();
};


jive.eae.common.replyingToText = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.type == 'user') {
    var param42 = new soy.StringBuilder();
    jive.shared.displayutil.userDisplayNameLink(opt_data.object, param42);
    jive.shared.soy.i18nHelper({i18nKey: soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('cmnt.reply_to.gtitle'),[])), arg0: param42.toString(), noAutoEscape: true}, output);
  } else if (opt_data.type == 'content') {
    jive.shared.soy.i18nHelper({i18nKey: 'eae.inbox.comment.on.originalX', arg0: (opt_data.object.contentTypeName) ? soy.$$escapeHtml(String(opt_data.object.contentTypeName).toLowerCase()) : '', noAutoEscape: true}, output);
  }
  output.append(' <img src="', soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl('/images/inline-reply-arrow.png'))), '"/>', (opt_data.externallyVisible == 'true') ? '' : '');
  return opt_sb ? '' : output.toString();
};


jive.eae.common.replyCountText = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<strong class="j-act-replycount">', (opt_data.activityContainer.jiveObject.typeThread || opt_data.activityContainer.jiveObject.typeDirectMessage) ? '<a href="' + soy.$$filterNoAutoescape(jive.soy.func.buildUrl(opt_data.activityContainer.jiveObject.jiveObjectURL)) + '" class="font-color-meta-light">' + ((opt_data.activityContainer.replyCount == 1) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.menu.reply.lc'),[opt_data.activityContainer.replyCount])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.menu.replies.lc'),[opt_data.activityContainer.replyCount]))) + '</a>' : (opt_data.activityContainer.activityList[0] && opt_data.activityContainer.activityList[0].content.commentContentResource && opt_data.activityContainer.activityList[0].content.commentContentResource.objectType == 129) ? '<a href="' + soy.$$filterNoAutoescape(jive.soy.func.buildUrl(opt_data.activityContainer.jiveObject.jiveObjectURL)) + '#comments" class="font-color-meta-light">' + ((opt_data.activityContainer.replyCount == 1) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.menu.authorcomment.lc'),[opt_data.activityContainer.replyCount])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.menu.authorcomments.lc'),[opt_data.activityContainer.replyCount]))) + '</a>' : '<a href="' + soy.$$filterNoAutoescape(jive.soy.func.buildUrl(opt_data.activityContainer.jiveObject.jiveObjectURL)) + '#comments" class="font-color-meta-light">' + ((opt_data.activityContainer.replyCount == 1) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.menu.comment.lc'),[opt_data.activityContainer.replyCount])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.menu.comments.lc'),[opt_data.activityContainer.replyCount]))) + '</a>');
  if (opt_data.showCurrentCount) {
    jive.eae.common.currentCountText(opt_data, output);
  }
  output.append('</strong>');
  return opt_sb ? '' : output.toString();
};


jive.eae.common.currentCountText = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.activityContainer.numCurrent) ? '<span class="j-new-count font-color-new">' + ((opt_data.activityContainer.numCurrentSubActivities) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.new'),[opt_data.activityContainer.numCurrentSubActivities])) : (opt_data.streamType != 'communications') ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.new'),[])) : '') + '</span>' : (opt_data.forceCount) ? '<span class="j-new-count font-color-new">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.new'),[1])) + '</span>' : '');
  return opt_sb ? '' : output.toString();
};


jive.eae.common.collapsedExcerptText = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.deletedType == 'reply') ? '<em>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('error.deleted.reply.description'),[])) + '</em>' : (opt_data.deletedType == 'comment') ? '<em>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('error.deleted.comment.description'),[])) + '</em>' : (opt_data.deletedType == 'mentioned') ? '<em>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('error.deleted.mention.description'),[])) + '</em>' : (opt_data.deletedType == 'bookmarked') ? '<em>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('error.deleted.bookmark.description'),[])) + '</em>' : (opt_data.deletedType == 'expertise') ? '<em>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('error.deleted.expertise.description'),[])) + '</em>' : (opt_data.text) ? ((opt_data.moderated) ? '<div class="jive-warn-box" aria-live="polite" aria-atomic="true"><span class="jive-icon-med jive-icon-warn"></span>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('blogs.posts.waitingMod.text'),[])) + '</div>' : '') + soy.$$filterNoAutoescape(opt_data.text) + ((opt_data.hasMoreText) ? '&hellip;' : '') : '');
  return opt_sb ? '' : output.toString();
};


jive.eae.common.subactivity = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.activityContainer.jiveObject.activityContentExcerptTemplate) {
    jive.shared.soy.render({templateName: opt_data.activityContainer.jiveObject.activityContentExcerptTemplate, data: (function() { var map = {}; var pairs = [['activityContainer', opt_data.activityContainer], ['activity', opt_data.activity], ['streamType', opt_data.streamType], ['filterData', opt_data.filterData], ['user', opt_data.user], ['canCreateMbImage', opt_data.canCreateMbImage], ['canCreateMbVideo', opt_data.canCreateMbVideo], ['isHidden', opt_data.isHidden], ['addedInline', opt_data.addedInline], ['hideStub', opt_data.hideStub], ['forceCurrent', opt_data.forceCurrent]]; for (var i = 0; i < pairs.length; i += 1) { map[pairs[i][0]] = pairs[i][1]; } return map; })(), failGracefully: true}, output);
  } else {
    if (opt_data.activity.content.typeOutcome) {
      jive.eae.shared.subactivity.outcome(opt_data, output);
    } else {
      output.append('<div id="node-collapsed-', soy.$$escapeHtmlAttribute(opt_data.activity.content.domIDPostfix), '" class="j-act-node', (opt_data.addedInline) ? ' j-js-addedInline' : '', (opt_data.activityContainer.canReply) ? ' j-act-rte-replyable' : '', (opt_data.streamType == 'communications' && (opt_data.activity.current || opt_data.forceCurrent)) ? ' j-current' : '', (opt_data.streamType == 'communications' && (opt_data.activity.content.typeMention || opt_data.activity.containsMention)) ? ' j-act-contains-mention' : '', '" data-extVisible="', soy.$$escapeHtmlAttribute(opt_data.activity.visibleToExtCollaborator), '" data-objectID="', (opt_data.activity.content.typeMention) ? soy.$$escapeHtmlAttribute(opt_data.activity.content.context.id) : soy.$$escapeHtmlAttribute(opt_data.activity.targetObjectID), '" data-objectType="', (opt_data.activity.content.typeMention) ? soy.$$escapeHtmlAttribute(opt_data.activity.content.context.objectType) : soy.$$escapeHtmlAttribute(opt_data.activity.targetObjectType), '" data-current="', (opt_data.activity.current || opt_data.forceCurrent) ? 'true' : '', '" style="', (opt_data.isHidden) ? 'display:none;' : '', '"><div id="excerpt_', soy.$$escapeHtmlAttribute(opt_data.activity.content.domIDPostfix), '" class="', (opt_data.activity.content.deleted) ? 'j-mod font-color-meta-light' : 'reply j-act-comment', '">');
      if (opt_data.activity.content.deleted) {
        jive.eae.common.collapsedExcerptText({text: '', hasMoreText: false, deletedType: opt_data.activity.content.deletedType != null ? opt_data.activity.content.deletedType : 'comment', moderated: false}, output);
        output.append(' ', (opt_data.activity.creationTime) ? soy.$$escapeHtml(opt_data.activity.creationTime) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.less_than_a_minute_ago'),[])));
      } else {
        output.append((opt_data.streamType == 'communications' && (opt_data.activity.content.typeMention || opt_data.activity.containsMention)) ? '<div class="j-act-mentioned font-color-okay"><span class="jive-icon-med jive-icon-mention-label"></span>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.mention.you.were.incontext'),[])) + '</div>' : '', '<div class="j-act-avatar">');
        jive.shared.displayutil.avatar(soy.$$augmentMap(opt_data.activity.activityUser, {size: 32, currentUserPartner: opt_data.user.partner}), output);
        output.append('</div><div class="j-excerpt', (! opt_data.activity.content.summaryIsExcerpt) ? ' j-non-excerpt' : '', ' clearfix" ', (opt_data.hideStub) ? 'style="display:none;"' : '', '>');
        if (! opt_data.hideStub) {
          var param241 = new soy.StringBuilder();
          jive.eae.common.activityContentText({activity: opt_data.activity, noAutoescape: true}, param241);
          jive.eae.common.activityContentCommon({contentTxt: param241.toString(), hasMoreText: opt_data.activity.hasMoreText}, output);
        }
        output.append('</div><div class="j-act-sub-preview" ', (! opt_data.hideStub) ? 'style="display:none;"' : '', '>');
        if (opt_data.activity.content.deleted) {
          output.append('<div class="j-excerpt-full-html-content">');
          if (opt_data.hideStub) {
            jive.eae.common.activityContentText({activity: opt_data.activity, noAutoescape: true}, output);
          }
          output.append('</div><div class="j-author-act font-color-meta-light">', (opt_data.activity.creationTime) ? soy.$$escapeHtml(opt_data.activity.creationTime) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.less_than_a_minute_ago'),[])), '</div>');
        } else {
          output.append('<div class="j-author-act font-color-meta-light">');
          jive.eae.common.activityAuthorNoVerb({activityUser: opt_data.activity.activityUser, object: opt_data.activity.content}, output);
          output.append(' ', (opt_data.activity.type == 'mentioned' && opt_data.activity.content.context.jiveObjectURL) ? '<a href="' + soy.$$filterNoAutoescape(jive.soy.func.buildUrl(opt_data.activity.content.context.jiveObjectURL)) + '" class="font-color-meta-light">' : (opt_data.activity.content.jiveObjectURL) ? '<a href="' + soy.$$filterNoAutoescape(jive.soy.func.buildUrl(opt_data.activity.content.jiveObjectURL)) + '" class="font-color-meta-light">' : '', (opt_data.activity.creationTime) ? soy.$$escapeHtml(opt_data.activity.creationTime) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.less_than_a_minute_ago'),[])), (opt_data.activity.type == 'mentioned' && opt_data.activity.content.context.jiveObjectURL || opt_data.activity.content.jiveObjectURL) ? '</a>' : '', '</div><div class="j-excerpt-full-html-content">');
          if (opt_data.hideStub) {
            jive.eae.common.activityContentText({activity: opt_data.activity, noAutoescape: true}, output);
          }
          output.append('</div>');
          jive.eae.common.renderStreamAttachments({idPrefix: 'expanded', object: opt_data.activity.content, domIDPostfix: opt_data.activity.domIDPostfix}, output);
          jive.outcomes.badge.badgeContainer({objectType: opt_data.activity.targetObjectType, objectId: opt_data.activity.targetObjectID}, output);
          output.append('<div class="j-meta-actions font-color-meta">');
          jive.eae.common.activityNavActions({object: opt_data.activity.parentActivity ? opt_data.activityContainer.jiveObject : opt_data.activity.content, activityContainer: opt_data.activityContainer, amAnAuthor: opt_data.user.id == opt_data.activity.activityUser.id, objectType: opt_data.activity.content.typeMention ? opt_data.activity.content.context.objectType : opt_data.activity.content.objectType, objectId: opt_data.activity.content.typeMention ? opt_data.activity.content.context.id : opt_data.activity.content.id, liked: opt_data.activity.liked, likeCount: opt_data.activity.likeCount, likable: opt_data.activity.likable, user: opt_data.user, location: 'subActivity', streamType: opt_data.streamType, filterData: opt_data.filterData}, output);
          output.append('</div>');
        }
        output.append('</div>');
      }
      output.append('</div></div>');
    }
  }
  return opt_sb ? '' : output.toString();
};


jive.eae.common.activityAuthor = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (! opt_data.activityUser.anonymous) {
    if (opt_data.displayAuthorLink) {
      jive.shared.displayutil.userDisplayNameLink(soy.$$augmentMap(opt_data.activityUser, {renderInvisible: opt_data.object.typeExternalActivity}), output);
    } else if (opt_data.deleted) {
    } else {
      output.append(soy.$$escapeHtml(opt_data.activityUser.displayName));
    }
  } else {
    jive.shared.displayutil.renderGuestDisplayName({message: opt_data.activityUser}, output);
  }
  if (! opt_data.object.typeShare) {
    output.append(' ');
    jive.eae.activitystream.include.activityVerbPhrase(opt_data, output);
  } else {
    output.append(' ', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('activity.type.shared'),[])), ' ');
  }
  return opt_sb ? '' : output.toString();
};


jive.eae.common.activityAuthorNoVerb = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (! opt_data.activityUser.anonymous) {
    jive.shared.displayutil.userDisplayNameLink(opt_data.activityUser, output);
  } else {
    jive.shared.displayutil.renderGuestDisplayName({message: opt_data.activityUser}, output);
  }
  output.append(' ');
  if (opt_data.object.parentAuthor && ! opt_data.object.typeWallEntryComment) {
    jive.eae.common.displayParentAuthor({parentAuthor: opt_data.object.parentAuthor}, output);
  } else if (opt_data.object.context && opt_data.object.context.parentAuthor && ! opt_data.object.context.typeWallEntryComment) {
    jive.eae.common.displayParentAuthor({parentAuthor: opt_data.object.context.parentAuthor}, output);
  }
  return opt_sb ? '' : output.toString();
};


jive.eae.common.displayParentAuthor = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.parentAuthor.username != 'SYSTEM') {
    var param370 = new soy.StringBuilder();
    var param371 = new soy.StringBuilder();
    jive.shared.displayutil.userDisplayNameLink(opt_data.parentAuthor, param371);
    jive.shared.soy.escapeHelper({stringToEscape: param371.toString()}, param370);
    jive.shared.soy.i18nHelper({i18nKey: 'activity.type.toX', arg0: param370.toString(), noAutoEscape: true}, output);
  }
  return opt_sb ? '' : output.toString();
};


jive.eae.common.activityNavActions = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.location != 'subActivity') {
    if (opt_data.activityContainer.container.type && opt_data.activityContainer.container.type != -2) {
      output.append(' <span class="j-bullet">&#8226;</span> ');
      if (opt_data.activityContainer.container.type == 2020) {
        var param385 = new soy.StringBuilder();
        jive.shared.displayutil.userDisplayNameLink(opt_data.activityContainer.originalAuthor, param385);
        jive.shared.soy.i18nHelper({i18nKey: 'main.in_user_container.label', arg0: param385.toString(), arg1: String(opt_data.activityContainer.jiveObject.contentTypeFeatureName).toLowerCase(), noAutoEscape: true}, output);
      } else {
        var param392 = new soy.StringBuilder();
        jive.shared.displayutil.containerDisplayNameLink({container: opt_data.activityContainer.container}, param392);
        jive.shared.soy.i18nHelper({i18nKey: 'eae.container.in', arg0: param392.toString(), noAutoEscape: true}, output);
      }
    }
  }
  output.append((opt_data.object.canRepost) ? ' <span class="j-bullet">&#8226;</span> <span class="j-repost-item" id="j-repost-item-' + soy.$$escapeHtmlAttribute(jive.soy.func.randomString()) + '-' + soy.$$escapeHtmlAttribute(opt_data.object.id) + '"><a href="#" class="j-repost" title="' + soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('eae.menu.repost.link.title'),[])) + '">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.menu.repost'),[])) + '</a></span>' : '');
  if (opt_data.user && ! opt_data.user.anonymous && opt_data.activityContainer.sharable && ! opt_data.object.typeExternalActivity && (opt_data.location == 'Title' || opt_data.location == 'parentPreview')) {
    output.append(' <span class="j-bullet">&#8226;</span> ');
    jive.soy.share.control({objectId: soy.$$escapeHtml(opt_data.activityContainer.jiveObject.typeThread ? opt_data.activityContainer.jiveObject.threadID : opt_data.objectId), objectType: soy.$$escapeHtml(opt_data.activityContainer.jiveObject.typeThread ? 1 : opt_data.objectType), type: 'text'}, output);
  }
  if (opt_data.user && ! opt_data.user.anonymous && opt_data.object.typeExternalActivity && opt_data.activityContainer.sharable) {
    output.append(' <span class="j-bullet">&#8226;</span> ');
    jive.soy.share.control({objectId: opt_data.objectId, objectType: opt_data.objectType, type: 'text'}, output);
  }
  output.append((opt_data.activityContainer.canReply && ! opt_data.object.deleted && ! opt_data.activityContainer.jiveObject.typeWallEntry && ! opt_data.activityContainer.jiveObject.typeDirectMessage && ! opt_data.activityContainer.jiveObject.typeShare && ! opt_data.object.bookmarkedContent) ? ' <span class="j-bullet">&#8226;</span> <a class="j-reply-rte" href="javascript:void(0);">' + ((opt_data.object.typeDocument && ! (opt_data.activityContainer.activityList[0] && opt_data.activityContainer.activityList[0].content.commentContentResource && opt_data.activityContainer.activityList[0].content.commentContentResource.objectType == 129) || opt_data.object.typeBlogPost || opt_data.object.typeExternalActivity || opt_data.object.typeTileStreamEntry || opt_data.object.typeExternalURL || opt_data.object.typePoll) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('activity.comment'),[])) : (opt_data.object.typeDocument && (opt_data.activityContainer.activityList[0] && opt_data.activityContainer.activityList[0].content.commentContentResource && opt_data.activityContainer.activityList[0].content.commentContentResource.objectType == 129)) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.menu.addauthorcomment'),[])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('activity.reply'),[]))) + '</a>' : '', (opt_data.object.typeWallEntry && opt_data.activityContainer.canReply && ! opt_data.object.deleted && opt_data.streamType != 'communications' && opt_data.location == 'parentPreview') ? ' <span class="j-bullet">&#8226;</span> <a id="showMicroRTE_' + soy.$$escapeHtmlAttribute(opt_data.activityContainer.jiveObject.domIDPostfix) + '" class="j-reply-micro" href="#">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('activity.comment'),[])) + '</a>' : '');
  if (opt_data.likable && ! opt_data.object.deleted && ! opt_data.activityContainer.jiveObject.typeDirectMessage) {
    output.append(' <span class="j-bullet">&#8226;</span> <span class="j-js-liking-control">');
    jive.eae.acclaim.likeControl({canLike: opt_data.user && ! opt_data.user.anonymous && (! opt_data.object.typeWallEntry || opt_data.object.canRate) && ! opt_data.amAnAuthor, liked: opt_data.liked, likeCount: opt_data.likeCount, objectId: opt_data.objectId, objectType: opt_data.objectType, showIcon: false, type: 'mini'}, output);
    output.append('</span>');
  }
  output.append(((opt_data.location == 'Title' || opt_data.location == 'parentPreview') && opt_data.streamType != 'all' && opt_data.streamType != 'profile' && opt_data.streamType != 'context' && opt_data.streamType != 'communications' && (opt_data.filterData.selectedFilter.type == 'all' && ! opt_data.filterData.excluding)) ? ' <span class="j-bullet">&#8226;</span> <a href="#" class="js-act-hidemenu" title="' + soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('eae.menu.hide.link.title'),[])) + '">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.menu.hide'),[])) + '</a>' : '');
  return opt_sb ? '' : output.toString();
};


jive.eae.common.repostModal = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="jive-modal j-repost-modal" id="jive-js-repost-modal"><header><h2>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.mb.repost.default.text'),[])), '</h2></header><label class="j-508-label" id="close-modal-508">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.close.modal'),[])), '</label><a href="#" class="j-modal-close-top close" aria-labelledby="close-modal-508" title="', soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('global.close.modal'),[])), '">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.close'),[])), '<span class="j-close-icon j-ui-elem" role="img"></span></a><div class="j-act-mb"><div class="jive-modal-content clearfix">', (opt_data.mbCreationModerated) ? '<div class="jive-content-moderation-box"><span class="jive-icon-med jive-icon-warn"></span>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('mod.content.create'),[])) + '</div>' : '');
  jive.eae.common.entryRepost(opt_data, output);
  output.append('<h4>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('we.repost.comment'),[])), '</h4>');
  jive.statusinput.containers.repostStatusInput({statusID: 'eae-editor-repost-' + opt_data.object.domIDPostfix, jiveObject: opt_data.object, canCreateMbImage: opt_data.canCreateMbImage, canCreateMbVideo: opt_data.canCreateMbVideo, canAtMention: opt_data.canAtMention}, output);
  output.append('</div></div></div>');
  return opt_sb ? '' : output.toString();
};


jive.eae.common.repostModalSuccess = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<p>', (opt_data.wallentry.status != 'AWAITING_MODERATION') ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('we.repost.success'),[])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('we.form.posted.moderation'),[])), '</p>');
  return opt_sb ? '' : output.toString();
};


jive.eae.common.entryRepost = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-wall-repost-content"><div class="j-wall-repost-header">');
  var param500 = new soy.StringBuilder();
  if (! opt_data.author.anonymous) {
    jive.shared.displayutil.userDisplayNameLink(opt_data.author, param500);
  } else {
    jive.shared.displayutil.renderGuestDisplayName({message: opt_data.object}, param500);
  }
  jive.shared.soy.i18nHelper({i18nKey: 'eae.mb.repost.originally_posted_by', arg0: param500.toString(), noAutoEscape: 'true'}, output);
  output.append('</div>', (opt_data.object && opt_data.object.text) ? soy.$$filterNoAutoescape(opt_data.object.text) : '');
  jive.eae.common.renderStreamAttachments({idPrefix: 'reposted-attachments', object: opt_data.object, domIDPostfix: opt_data.object.domIDPostfix}, output);
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


jive.eae.common.parentPreviewLinks = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="font-color-meta-light paren">(</span><a href=\'#\' class="j-js-show-full-content j-act-preview font-color-meta" data-extVisible="', soy.$$escapeHtmlAttribute(opt_data.activityContainer.visibleToExtCollaborator), '" data-objectID="', soy.$$escapeHtmlAttribute(opt_data.activityContainer.jiveObject.id), '" data-objectType="', soy.$$escapeHtmlAttribute(opt_data.activityContainer.jiveObject.objectType), '" ', (opt_data.activityContainer.jiveObject.typePoll) ? 'data-containerID="' + soy.$$escapeHtmlAttribute(opt_data.activityContainer.container.id) + '" data-containerType="' + soy.$$escapeHtmlAttribute(opt_data.activityContainer.container.type) + '" ' : '', ' aria-hidden="false" ', (opt_data.activityContainer.jiveObject.typeTask || opt_data.activityContainer.jiveObject.typeExternalActivity) ? 'title="' + soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('global.show_details'),[])) + '">' : 'title="' + soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('eae.menu.show.full.link.title'),[])) + '">', '<span class="lnk">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.menu.show.full.more'),[])), '</span></a><a href=\'#\' class="j-js-hide-full-content j-act-preview font-color-meta" style="display:none;" aria-hidden="true" ', (opt_data.activityContainer.jiveObject.typeTask || opt_data.activityContainer.jiveObject.typeExternalActivity) ? 'title="' + soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('global.show_details'),[])) + '">' : 'title="' + soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('eae.menu.hide.full'),[])) + '">', '<span class="lnk">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.menu.show.full.less'),[])), '</span></a><span class="font-color-meta-light paren">)</span>');
  return opt_sb ? '' : output.toString();
};


jive.eae.common.microRTEContainer = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.activityContainer.jiveObject && (opt_data.activityContainer.canReply || opt_data.activityContainer.jiveObject.typeCollaboration || opt_data.activityContainer.jiveObject.typeWallEntry && opt_data.activityContainer.jiveObject.canComment && opt_data.activityContainer.jiveObject.id == opt_data.object.id)) {
    output.append('<div id="microRTEContainer_', soy.$$escapeHtmlAttribute(opt_data.object.domIDPostfix), '" class="j-act-reply j-act-micro-rte" ', (! opt_data.showOnLoad) ? 'style="display:none;"' : '', '><div class="r-active">');
    if (! opt_data.activityContainer.jiveObject.typeCollaboration && ! opt_data.activityContainer.jiveObject.typeShare && ! opt_data.activityContainer.jiveObject.typeWallEntry) {
      output.append('<div class="j-act-replyinfo">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('activity.collapsed.commenting_on'),[])), ' <span class="jive-icon-sml ', soy.$$escapeHtmlAttribute(opt_data.activityContainer.jiveObject.jiveObjectCSS), '"></span><strong>');
      jive.eae.common.activityContainerJoSubject(opt_data, output);
      output.append('</strong></div>');
    }
    output.append((opt_data.user.anonymous) ? '<div class="jive-reply-post-anonymous j-form"><div><label for="replyGuestName-id">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.name'),[])) + '<span class="font-color-meta-light"> ' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('blogs.vwpst.required.label'),[])) + '</span><input class="replyGuestName" type="text" name="replyGuestName" id="replyGuestName-id"></label></div><div><label for="replyGuestEmail-id">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.email_address'),[])) + '<span class="font-color-meta-light"> ' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('blogs.vwpst.rqdNotPblshd.label'),[])) + '</span><input class="replyGuestEmail" type="text" name="replyGuestEmail" id="replyGuestEmail-id"></label></div><div><label for="replyGuestUrl-id">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('blogs.vwpst.wsite_address.label'),[])) + '<input class="replyGuestUrl" type="text" name="replyGuestUrl" id="replyGuestUrl-id"></label></div></div>' : '');
    if (opt_data.activityContainer.jiveObject.typeWallEntry && opt_data.activityContainer.jiveObject.canComment || opt_data.activityContainer.jiveObject.typeCollaboration || opt_data.activityContainer.jiveObject.typeShare && opt_data.activityContainer.canReply) {
      jive.statusinput.containers.microbloggingCommentStatusInput({statusID: 'eae-mb-comment-editor-' + opt_data.object.domIDPostfix, jiveObject: opt_data.activityContainer.jiveObject, canAtMention: opt_data.canAtMention, addCssClass: opt_data.addCssClass, showOnLoad: opt_data.showOnLoad, hideAtMentionBtn: opt_data.hideAtMentionBtn, visibleToExtCollaborator: opt_data.object.visibleToExtCollaborator, hideCancelBtn: opt_data.activityContainer.jiveObject.typeCollaboration, i18nSubmitKey: opt_data.i18nSubmitKey, defaultTextKey: opt_data.defaultTextKey}, output);
    }
    output.append('</div></div>');
  }
  return opt_sb ? '' : output.toString();
};


jive.eae.common.repliedToIcon = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="jive-icon-sml jive-icon-arrow-top"></span>');
  return opt_sb ? '' : output.toString();
};


jive.eae.common.activityContentCommon = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.contentTxt != '') ? '<p>' + soy.$$filterNoAutoescape(opt_data.contentTxt) + ((opt_data.hasMoreText) ? '&hellip;' : '') + '</p>' : '');
  return opt_sb ? '' : output.toString();
};


jive.eae.common.generateUserMetaData = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('{anonymous: ', soy.$$escapeHtml(opt_data.user.anonymous), ', avatarID: ', soy.$$escapeHtml(opt_data.user.avatarID), ', displayName: \'', soy.$$escapeHtml(opt_data.user.displayName), '\', email: \'', soy.$$escapeHtml(opt_data.user.email), '\', enabled: ', soy.$$escapeHtml(opt_data.user.enabled), ', entitled: ', soy.$$escapeHtml(opt_data.user.entitled), ', id: ', soy.$$escapeHtml(opt_data.user.id), ', objectType: ', soy.$$escapeHtml(opt_data.user.objectType), ', username: \'', soy.$$escapeHtml(opt_data.user.username), '\'}');
  return opt_sb ? '' : output.toString();
};


jive.eae.common.renderStreamAttachments = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.object.meta && opt_data.object.meta.length > 0) {
    jive.statusinput.containers.renderAttachmentsContainer({id: (opt_data.idPrefix) ? soy.$$escapeHtml(opt_data.idPrefix + '-attachmentContainer-' + opt_data.domIDPostfix) : soy.$$escapeHtml('attachmentContainer-' + opt_data.domIDPostfix), entry: opt_data.object, visible: true}, output);
    jive.shared.soy.resourceInlineJs({code: 'require([\'apps/microblogging/views/attachment_view\'],function(AttachmentView){var id = \'' + ((opt_data.idPrefix) ? soy.$$escapeHtml(opt_data.idPrefix + '-attachmentContainer-' + opt_data.domIDPostfix) : soy.$$escapeHtml('attachmentContainer-' + opt_data.domIDPostfix)) + '\', attachmentView = new AttachmentView({selector:\'#\' + id}); attachmentView.postRender(); AttachmentView.views[id] = attachmentView;});'}, output);
  } else if (opt_data.object.typeExternalActivity && opt_data.object.mediaLink) {
    output.append('<div class="j-act-attachment"><a href="');
    jive.eae.common.formatMediaLinkUrl__C2bf6(opt_data.object, output);
    output.append('" target="_blank" title="', soy.$$escapeHtmlAttribute(opt_data.object.mediaLink.filename ? opt_data.object.mediaLink.filename : ''), '">', (opt_data.object.mediaLink.thumbnailUrl) ? '<div class="j-media-attachment"><img src="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.object.mediaLink.thumbnailUrl)) + '" title="' + soy.$$escapeHtmlAttribute(opt_data.object.mediaLink.title) + '" alt="" width="' + soy.$$escapeHtmlAttribute(opt_data.object.mediaLink.thumbnailWidth) + '" height="' + soy.$$escapeHtmlAttribute(opt_data.object.mediaLink.thumbnailHeight) + '"/></div>' : (opt_data.object.mediaLink.iconClass) ? '<span class="jive-icon-med ' + soy.$$escapeHtmlAttribute(opt_data.object.mediaLink.iconClass) + '"></span><span>' + soy.$$escapeHtml(opt_data.object.mediaLink.title) + '</span>' : '', '</a></div>');
  }
  return opt_sb ? '' : output.toString();
};


jive.eae.common.formatMediaLinkUrl = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.mediaLink.contentUrl) ? (((opt_data.mediaLink.contentUrl).match(new RegExp('/^https?:\\/\\//', '')) || [])) ? soy.$$filterNoAutoescape(opt_data.mediaLink.contentUrl) : soy.$$filterNoAutoescape(jive.soy.func.buildUrl(opt_data.mediaLink.contentUrl)) : (((opt_data.mediaLink.imageUrl).match(new RegExp('/^https?:\\/\\//', '')) || [])) ? soy.$$filterNoAutoescape(opt_data.mediaLink.imageUrl) : soy.$$filterNoAutoescape(jive.soy.func.buildUrl(opt_data.mediaLink.imageUrl)));
  return opt_sb ? '' : output.toString();
};


jive.eae.common.activityContainerJoSubject = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.activityContainer && opt_data.activityContainer.jiveObject && opt_data.activityContainer.jiveObject.subject) ? soy.$$filterNoAutoescape(opt_data.activityContainer.jiveObject.subject) : '');
  return opt_sb ? '' : output.toString();
};


jive.eae.common.activityContentText = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.activity && opt_data.activity.content) ? (opt_data.activity.content.deleted) ? (opt_data.activity.content.typeThread) ? '<em>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('error.deleted.reply.description'),[])) + '</em>' : '<em>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('error.deleted.reply.description'),[])) + '</em>' : (opt_data.activity.content.typeExternalActivity) ? (opt_data.activity.content.summary) ? (opt_data.noAutoescape) ? soy.$$filterNoAutoescape(opt_data.activity.content.summary) : soy.$$escapeHtml(opt_data.activity.content.summary) : '' : ((opt_data.activity.moderated) ? '<div class="jive-warn-box" aria-live="polite" aria-atomic="true"><span class="jive-icon-med jive-icon-warn"></span>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('blogs.posts.waitingMod.text'),[])) + '</div>' : '') + ((opt_data.activity.content.html) ? (opt_data.noAutoescape) ? soy.$$filterNoAutoescape(opt_data.activity.content.html) : soy.$$escapeHtml(opt_data.activity.content.html) : (opt_data.activity.content.text) ? (opt_data.noAutoescape) ? soy.$$filterNoAutoescape(opt_data.activity.content.text) : soy.$$escapeHtml(opt_data.activity.content.text) : '') : '');
  return opt_sb ? '' : output.toString();
};


jive.eae.common.jsI18nHelper = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(opt_data.key),[])));
  return opt_sb ? '' : output.toString();
};


jive.eae.common.groupedUsers = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var noOverflow__soy753 = opt_data.groupedUserList.length <= opt_data.groupAfterNum;
  var singleUserOverflow__soy754 = opt_data.groupedUserList.length == opt_data.groupAfterNum + 1;
  var multiUserOverflow__soy755 = opt_data.groupedUserList.length > opt_data.groupAfterNum + 1;
  var singleUser__soy756 = opt_data.groupedUserList.length == 1;
  var multipleUsers__soy757 = opt_data.groupedUserList.length != 1;
  var groupedUserList758 = opt_data.groupedUserList;
  var groupedUserListLen758 = groupedUserList758.length;
  for (var groupedUserIndex758 = 0; groupedUserIndex758 < groupedUserListLen758; groupedUserIndex758++) {
    var groupedUserData758 = groupedUserList758[groupedUserIndex758];
    var userIsNextToLastGrouped__soy759 = groupedUserIndex758 == opt_data.groupAfterNum - 1;
    var userIsLastGrouped__soy760 = groupedUserIndex758 == opt_data.groupAfterNum;
    var userIsNotLastGrouped__soy761 = groupedUserIndex758 < opt_data.groupAfterNum;
    var userIsLastTotal__soy762 = groupedUserIndex758 == opt_data.groupedUserList.length - 1;
    if (groupedUserData758 && (userIsNotLastGrouped__soy761 || userIsLastGrouped__soy760 && singleUserOverflow__soy754)) {
      output.append((groupedUserIndex758 == groupedUserListLen758 - 1 && opt_data.groupedUserList.length > 1) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.and'),[])) + ' ' : '');
      if (((groupedUserData758.username).match(new RegExp('^__invited__', '')) || []).length) {
        output.append(soy.$$escapeHtml(groupedUserData758.email));
      } else if (! groupedUserData758.anonymous) {
        if (! opt_data.hideLinks) {
          jive.shared.displayutil.userDisplayNameLink(soy.$$augmentMap(groupedUserData758, {displayNameOverride: (opt_data.user && opt_data.user.id == groupedUserData758.id) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.you'),[])) : ''}), output);
        } else {
          if (opt_data.user && opt_data.user.id == groupedUserData758.id) {
            output.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.you'),[])));
          } else {
            jive.shared.displayutil.userDisplayName(groupedUserData758, output);
          }
        }
      } else {
        jive.shared.displayutil.renderGuestDisplayName({message: groupedUserData758}, output);
      }
      output.append((multipleUsers__soy757 && (noOverflow__soy753 && ! userIsLastTotal__soy762 || singleUserOverflow__soy754 && ! userIsLastGrouped__soy760 || multiUserOverflow__soy755 && ! userIsNextToLastGrouped__soy759)) ? ((opt_data.groupedUserList.length > 2) ? ',' : '') + ' ' : '');
    }
  }
  if (opt_data.groupedUserList.length > opt_data.groupAfterNum + 1) {
    output.append(' ', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.and'),[])), ' ', (! opt_data.hideLinks) ? '<a href=\'#\' class="js-show-grouped-users jive-username-link">' : '', soy.$$escapeHtml(opt_data.groupedUserList.length - opt_data.groupAfterNum), ' ', (opt_data.groupedUserList.length > opt_data.groupAfterNum + 1) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.others'),[])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.other'),[])));
    if (! opt_data.hideLinks) {
      output.append('</a><div class="js-grouped-users-popover j-grouped-users-popover" style="display:none"><ul class="j-grouped-user-list j-simple-list">');
      var groupedUserList814 = opt_data.groupedUserList;
      var groupedUserListLen814 = groupedUserList814.length;
      for (var groupedUserIndex814 = 0; groupedUserIndex814 < groupedUserListLen814; groupedUserIndex814++) {
        var groupedUserData814 = groupedUserList814[groupedUserIndex814];
        if (groupedUserData814 && groupedUserIndex814 >= opt_data.groupAfterNum) {
          if (((groupedUserData814.displayName).match(new RegExp('^__invited__', '')) || []).length) {
            output.append(soy.$$escapeHtml(groupedUserData814.email));
          } else if (! groupedUserData814.anonymous) {
            output.append('<li class="j-grouped-user">');
            jive.shared.displayutil.userDisplayNameLink(soy.$$augmentMap(groupedUserData814, {displayNameOverride: (opt_data.user && opt_data.user.id == groupedUserData814.id) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.you'),[])) : ''}), output);
            output.append('</li>');
          } else {
            output.append('<li class="j-grouped-user">');
            jive.shared.displayutil.renderGuestDisplayName({message: groupedUserData814}, output);
            output.append('</li>');
          }
        }
      }
      output.append('</ul></div>');
    }
  }
  return opt_sb ? '' : output.toString();
};


jive.eae.common.contentTypeClassName = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.activityContainer.jiveObject.typeExternalActivity) ? 'j-act-app' : (opt_data.activityContainer.jiveObject.typeCollaboration) ? 'j-act-collaboration' : (opt_data.activityContainer.jiveObject.typeAnnouncement) ? 'j-act-announcement' : (opt_data.activityContainer.jiveObject.typeMention) ? 'j-act-mention' : (opt_data.activityContainer.jiveObject.typeShare) ? 'j-act-share' : (opt_data.activityContainer.jiveObject.typeExternalURL) ? 'j-act-bookmark' : (opt_data.activityContainer.jiveObject.typeThread) ? 'j-act-discussion j-thread-post' : (opt_data.activityContainer.jiveObject.typeDocument) ? 'j-act-document' : (opt_data.activityContainer.jiveObject.typeBlogPost) ? 'j-act-blog' : (opt_data.activityContainer.jiveObject.typePoll) ? 'j-act-poll' : (opt_data.activityContainer.jiveObject.typeTask) ? 'j-act-task' : 'j-act-generic');
  return opt_sb ? '' : output.toString();
};


jive.eae.common.contentTypeDisplayName = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.activityContainer.jiveObject.typeExternalActivity) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.app'),[])) : (opt_data.activityContainer.jiveObject.typeDirectMessage) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.direct_message'),[])) : (opt_data.activityContainer.jiveObject.typeAnnouncement) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.announcement'),[])) : (opt_data.activityContainer.jiveObject.typeMention) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.mention'),[])) : (opt_data.activityContainer.jiveObject.typeShare) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.share'),[])) : (opt_data.activityContainer.jiveObject.typeExternalURL) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.bookmark'),[])) : (opt_data.activityContainer.jiveObject.typeThread) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.discussion'),[])) : (opt_data.activityContainer.jiveObject.typeDocument) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.document'),[])) : (opt_data.activityContainer.jiveObject.typeBlogPost) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.blog'),[])) : (opt_data.activityContainer.jiveObject.typePoll) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.poll'),[])) : (opt_data.activityContainer.jiveObject.typeTask) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.task'),[])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.activity'),[])));
  return opt_sb ? '' : output.toString();
};


jive.eae.common.contentTypeParentPreviewStylingClassName = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.activityContainer.jiveObject.typeThread) ? 'j-thread-post' : (opt_data.activityContainer.jiveObject.typeDocument) ? 'j-doc jive-content' : (opt_data.activityContainer.jiveObject.typeBlogPost) ? 'jive-content' : (opt_data.activityContainer.jiveObject.typeTask) ? 'j-task' : (opt_data.activityContainer.activityList[0].content.typeExternalActivity && opt_data.activityContainer.activityList[0].content.verb == 'uri:jiveName:app_install') ? 'jive-content j-appinstall  j-rc5' : 'jive-content j-rc5');
  return opt_sb ? '' : output.toString();
};


jive.eae.common.loadingSpinner = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<img src="', soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.resourceUrl(window._jive_base_url,'/7.0.0.0/','','/images/jive-icon-working-16x16.gif'))), '" class="j-eae-spinner js-loading-spinner" width="16" height="16" border="0"/>');
  return opt_sb ? '' : output.toString();
};


jive.eae.common.digestSubItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.activity.content.deleted) {
    output.append('<div class="font-color-meta-light">');
    jive.eae.common.collapsedExcerptText({text: '', hasMoreText: false, deletedType: 'expertise', moderated: false}, output);
    output.append('</div>');
  } else if (opt_data.activity.content.activityTemplate) {
    if (opt_data.user) {
      jive.shared.soy.render({templateName: opt_data.activity.content.activityTemplate, data: (function() { var map = {}; var pairs = [['activity', opt_data.activity], ['activityContainer', opt_data.activityContainer], ['user', opt_data.user], ['streamType', opt_data.streamType], ['filterData', opt_data.filterData], ['fromTemplate', opt_data.fromTemplate]]; for (var i = 0; i < pairs.length; i += 1) { map[pairs[i][0]] = pairs[i][1]; } return map; })(), failGracefully: true}, output);
    } else {
      jive.shared.soy.render({templateName: opt_data.activity.content.activityTemplate, data: (function() { var map = {}; var pairs = [['activity', opt_data.activity], ['activityContainer', opt_data.activityContainer], ['streamType', opt_data.streamType], ['filterData', opt_data.filterData], ['fromTemplate', opt_data.fromTemplate]]; for (var i = 0; i < pairs.length; i += 1) { map[pairs[i][0]] = pairs[i][1]; } return map; })(), failGracefully: true}, output);
    }
  } else {
    output.append('<div>');
    jive.eae.common.subactivity({activity: opt_data.activity, activityContainer: opt_data.activityContainer, user: opt_data.user, isHidden: false, streamType: opt_data.streamType, filterData: opt_data.filterData, canCreateMbImage: opt_data.canCreateMbImage, canCreateMbVideo: opt_data.canCreateMbVideo, addedInline: false, hideStub: false, forceCurrent: false}, output);
    output.append('</div>');
  }
  return opt_sb ? '' : output.toString();
};


jive.eae.common.readingPaneBottomReplyLinkKey = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.activityContainer.jiveObject.typeDocument || opt_data.activityContainer.jiveObject.typeBlogPost || opt_data.activityContainer.jiveObject.typeExternalURL || opt_data.activityContainer.jiveObject.typePoll) ? 'eae.inbox.comment.on.originalX' : 'eae.inbox.reply.to.originalX');
  return opt_sb ? '' : output.toString();
};


jive.eae.common.embeddedPreview = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="emb-preview-', soy.$$escapeHtmlAttribute(opt_data.domIDPostfix), '" class="j-act-tile ', (opt_data.imageURL) ? 'hasImg' : '', ' clearfix">', (opt_data.imageURL) ? ((opt_data.externalURL) ? '<a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.externalURL)) + '" class="j-act-tile-img j-rc3">' : '<span class="j-act-tile-img j-rc3">') + '<img class="act-tile-image" src="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.imageURL)) + '" />' + ((opt_data.externalURL) ? '</a>' : '</span>') : '', '<div class="j-act-tile-text">', (opt_data.subject) ? ((opt_data.externalURL) ? '<a class="tileTitle" href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.externalURL)) + '">' : '') + soy.$$filterNoAutoescape(opt_data.subject) + ((opt_data.externalURL) ? '</a>' : '') : '', (opt_data.textContent) ? '<div class="tileContent">' + soy.$$filterNoAutoescape(opt_data.textContent) + '</div>' : '', (opt_data.externalURLHost && opt_data.externalURLRoot) ? '<p class="j-act-tile-url"><a class="font-color-meta-light" href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.externalURLRoot)) + '">' + soy.$$filterNoAutoescape(opt_data.externalURLHost) + '</a></p>' : '', '</div>');
  jive.eae.common.sharedVia(opt_data, output);
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


jive.eae.common.sharedVia = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="act-tile-shared-via font-color-meta"><img class="jive-icon-med jive-ext-icon-16" src="', soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.viaIconURL ? opt_data.viaIconURL : jive.soy.func.buildUrl('/images/transparent.png'))), '"/>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('tse.sharedviaX'),[opt_data.viaName])), '</div>');
  return opt_sb ? '' : output.toString();
};


jive.eae.common.activityHeadingHref = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.activityContainer.activityList && opt_data.activityContainer.activityList.length) {
    if (opt_data.user) {
      if (opt_data.activityContainer.activityList[opt_data.activityContainer.activityList.length - 1].activityUser.id != opt_data.user.id) {
        jive.eae.common.activityHeadingHrefWithReferringUser({url: opt_data.url, source: opt_data.source, referringUserId: opt_data.activityContainer.activityList[opt_data.activityContainer.activityList.length - 1].activityUser.id}, output);
      } else {
        output.append(soy.$$filterNoAutoescape(jive.soy.func.buildUrl(opt_data.url,{'sr':opt_data.source})));
      }
    } else {
      jive.eae.common.activityHeadingHrefWithReferringUser({url: opt_data.url, source: opt_data.source, referringUserId: opt_data.activityContainer.activityList[opt_data.activityContainer.activityList.length - 1].activityUser.id}, output);
    }
  } else if (opt_data.activityContainer.latestAuthor) {
    if (opt_data.user) {
      if (opt_data.activityContainer.latestAuthor.id != opt_data.user.id) {
        jive.eae.common.activityHeadingHrefWithReferringUser({url: opt_data.url, source: opt_data.source, referringUserId: opt_data.activityContainer.latestAuthor.id}, output);
      } else {
        output.append(soy.$$filterNoAutoescape(jive.soy.func.buildUrl(opt_data.url,{'sr':opt_data.source})));
      }
    } else {
      jive.eae.common.activityHeadingHrefWithReferringUser({url: opt_data.url, source: opt_data.source, referringUserId: opt_data.activityContainer.latestAuthor.id}, output);
    }
  } else {
    output.append(soy.$$filterNoAutoescape(jive.soy.func.buildUrl(opt_data.url,{'sr':opt_data.source})));
  }
  return opt_sb ? '' : output.toString();
};


jive.eae.common.activityHeadingHrefWithReferringUser = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((((opt_data.url).match(new RegExp('#', 'g')) || []).length == 0) ? soy.$$filterNoAutoescape(jive.soy.func.buildUrl(opt_data.url,{'sr':opt_data.source,'ru':opt_data.referringUserId})) : soy.$$filterNoAutoescape(jive.soy.func.buildUrl(opt_data.url)));
  return opt_sb ? '' : output.toString();
};


jive.eae.common.formatMediaLinkUrl__C2bf6 = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.mediaLink.contentUrl) ? (((opt_data.mediaLink.contentUrl).match(new RegExp('/^https?:\\/\\//', '')) || [])) ? soy.$$filterNoAutoescape(opt_data.mediaLink.contentUrl) : soy.$$filterNoAutoescape(jive.soy.func.buildUrl(opt_data.mediaLink.contentUrl)) : (((opt_data.mediaLink.imageUrl).match(new RegExp('/^https?:\\/\\//', '')) || [])) ? soy.$$filterNoAutoescape(opt_data.mediaLink.imageUrl) : soy.$$filterNoAutoescape(jive.soy.func.buildUrl(opt_data.mediaLink.imageUrl)));
  return opt_sb ? '' : output.toString();
};

;
jive.namespace("Navbar.Menu.Home");define("apps/navbar/menu/home/navbar_menu_home_main",["jquery","apps/activity_stream/models/activity_stream_source","apps/read_tracking/models/read_tracking_source","soy!jive.nav.menu.home.main","soy!jive.nav.menu.home.content"],function(e,a,b,d,c){jive.Navbar.Menu.Home.Main=jive.oo.Class.extend(function(f){this.init=function(h){var g=this;g.$button=$j(h);g.menuSource=new a();g.readTrackingSource=new b();g.counts={inbox:0,tasks:0,moderations:0};g.unreadItems={};g.pendingActionsCount=0;$j(h).on("click keypress",".j-js-update-indicator",function(m){if(m.type=="click"||(m.which&&$j.keyIs("enter",m.which))){var i=$j(this),k=$j("#j-home-global-nav-menu"),j=$j("#j-globalNav-bg").data("mode")==="simple";if(!k.length){var l=$j(this);g.$menu=$j(d({data:"",counts:""}));g.spinner=new jive.loader.LoaderView();g.$menu.html(g.spinner.getContent());g.$menu.popover({context:l,container:$j("#jive-nav-link-home"),flip:false,darkPopover:false,destroyOnClose:true,containWithinViewport:true,putBack:false,onLoad:function(){g.menuSource.getGlobalNavMenu().addCallback(function(p){var n=p.inboxItems.activityContainerList.length;if(n||p.taskItems.taskList.length||p.moderationItems.moderationList.length){var o=$j(c({data:p,counts:g.counts}));if(n){require(["lazy!apps/home/views/badge_menu_template_loader"],function(r){for(var s=0;s<n&&s<5;s++){var t=p.inboxItems.activityContainerList[s],w=t.activityList[t.activityList.length-1],q="";if(t.jiveObject.groupedCommActivityTemplate=="jive.eae.inbox.item.grouped.collaboratorNotification"){q="collaboratorNotification"}else{if(t.jiveObject.groupedCommActivityTemplate=="jive.eae.inbox.item.grouped.mention"||(w&&w.content.typeMention)){q="mention"}else{if(t.jiveObject.commListItemViewTemplate){var v=t.jiveObject.commListItemViewTemplate.lastIndexOf(".");q=t.jiveObject.commListItemViewTemplate.substring(v+1)}}}var u=$j(home.nav.drop.down.generic({activityContainer:t,user:p.inboxItems.viewingUser,objDescriptor:q}));o.find("#j-home-nav-menu-inbox-list").append(u)}g.$menu.trigger("updatePopoverHTML",[o]);g.spinner.destroy()})}else{g.$menu.trigger("updatePopoverHTML",[o]);g.spinner.destroy()}}else{g.spinner.destroy();g.$menu.trigger("close");i.hide();i.data("count",0);i.html("0");$j("#jive-nav-link-communications .j-js-update-indicator").hide().data("count",0).html("0")}})}})}else{k.trigger("close")}m.preventDefault()}});jive.ActivityStream.activityNotifier.addListener("activityStream.poll",function(i){g.updateCount(i)});jive.ActivityStream.activityNotifier.addListener("activityStream.push",function(i){g.pushCount(i)});jive.localexchange.addListener("inbox.read",function(j,i){g.removeUnreadItem({objectType:j,id:i});g.decrementNewCount("inbox",1)}).addListener("inbox.unread",function(j,i){g.addUnreadItem({objectType:j,id:i});g.decrementNewCount("inbox",-1)});jive.switchboard.addListener("inbox.read",function(j,i){g.removeUnreadItem({objectType:j,id:i});g.decrementNewCount("inbox",1)}).addListener("inbox.unread",function(j,i){g.addUnreadItem({objectType:j,id:i});g.decrementNewCount("inbox",-1)}).addListener("inbox.markAllRead",function(){g.unreadItems={};g.decrementNewCount("inbox",10000)}).addListener("tasks.taskComplete",function(){g.decrementNewCount("tasks",1)}).addListener("tasks.taskIncomplete",function(){g.decrementNewCount("tasks",-1)})};this.updateCount=function(i){var g=this;g.counts.inbox=i.fullCounts.communications.unreadCount;g.counts.actions=i.fullCounts.actions;g.counts.tasks=i.fullCounts.overdueTasks;g.counts.moderations=i.fullCounts.moderations;var h=i.fullCounts.communications.unreadItems;$j.each(h,function(j,k){g.addUnreadItem(k)});g.renderCounts()};this.pushCount=function(m){var g=this;var h=g.$button.find(".j-js-update-indicator"),i=h.data("count"),l,k=m.parent;if(m.counts.tasks){l=i+1;var j=$j(jive.welcome.updateIndicator({type:"count",count:l,extraCssClasses:"j-navbadge-count j-ui-elem"}));if(h.length){h.replaceWith(j)}else{g.$button.append(j)}if(g.$button.hasClass("active")){g.updateTitleCount(l)}}else{if(m.counts.communications&&!g.isItemPreviouslyUnread(k)){jive.localexchange.emit("inbox.unread",k.objectType,k.id)}else{if(!m.counts.communications&&m.updateCommsData&&g.isItemPreviouslyUnread(k)){jive.localexchange.emit("inbox.read",k.objectType,k.id)}}}};this.addUnreadItem=function(g){var i=this.hashUnreadItem(g);var h=this.unreadItems[i];if(h===undefined){this.unreadItems[i]=g}};this.removeUnreadItem=function(g){var i=this.hashUnreadItem(g);var h=this.unreadItems[i];if(h!==undefined){delete this.unreadItems[i]}};this.getUnreadItems=function(){return this.unreadItems};this.isItemPreviouslyUnread=function(h){var i=this.hashUnreadItem(h);var g=this.unreadItems[i];if(g===undefined){return false}return true};this.hashUnreadItem=function(g){return g.objectType+"-"+g.id};this.decrementNewCount=function(h,i){var g=this;if(g.counts[h]<=50||i>1000){g.counts[h]=g.counts[h]-i;if(g.counts[h]<0){g.counts[h]=0}g.renderCounts()}};this.renderCounts=function(){var g=this,j=g.counts.inbox+g.counts.moderations,i=$j(jive.welcome.updateIndicator({type:"count",count:j,extraCssClasses:"j-navbadge-count j-ui-elem"}));var h=g.$button.find(".j-js-update-indicator");if(h.length){h.replaceWith(i)}else{g.$button.append(i)}if(g.$button.hasClass("active")){g.updateTitleCount(j)}};this.updateTitleCount=function(h){var j=document.title,i=j.indexOf(")");if(i!=-1){j=j.substring(j.indexOf(")")+2)}var g="";if(h>0){g="("+(h>50?"50+":h)+")"}document.title=g+" "+j};this.markRead=function(g,j){var h=this,i={objectType:g,id:j};h.readTrackingSource.save(g,j,true);if(h.isItemPreviouslyUnread(i)){jive.switchboard.emit("inbox.read",g,j)}}});return jive.Navbar.Menu.Home.Main});
;
define("jive.component.PopupView",["jquery"],function(b){var a=jive.oo.Class.extend(function(c){c.init=function(d){this.$element=b(d)};this.toString=function(){return"[object PopupView]"};this.show=function(f,e,h,d,g){e=e?e:f;h=h!=null?h:true;d=d!=null?d:false;this.trigger=f;this.$element.popover({container:"#j-spotlight-search",context:e,closeOnClick:true,closeOtherPopovers:h,destroyOnClose:false,flip:false,focusPopover:d,additionalContainerSelector:"#j-spotlight-search, .j-spotlight-search, .jive-spotlight-search-result"})};this.hide=function(){this.$element.trigger("close")};this.getTrigger=function(){return this.trigger};this.getState=function(){return this.$element.is(":visible")?"visible":"hidden"};this.getTopMargin=function(){return this.$element.closest(".js-pop").offset().top-b(window).scrollTop()};this.getOuterHeight=function(){return this.$element.closest(".js-pop").outerHeight()};this.scrollTo=function(d){var g=this.$element.find(".j-spotlight-find");if(g.length<1){return}var h=g.height();var n=g.offset().top;var e=n+h;var k=d.outerHeight();var m=d.offset().top;var l=m+k;var j=g.find("h4").outerHeight()||32;var i=m<n+j;var f=l>e-j;if(i){g.scrollTo(d,{offset:0-j})}else{if(f){g.scrollTo(d,{offset:0-(h-k-j)})}}}});a.toString=function(){return"[wrapper PopupView]"};a.getBindName=function(){return"PopupView"};return a});
;
define("jive.component.ProgressMeterView",["jquery"],function(a){var b=jive.oo.Class.extend(function(c){c.init=function(d){this.$element=a(d)};this.toString=function(){return"[object ProgressMeterView]"};this.start=function(){if(!this.spinner){this.spinner=new jive.loader.LoaderView({inline:true,showLabel:false,size:this.$element.attr("data-size")});this.spinner.appendTo(this.$element);this.$element.attr("data-active",true)}};this.stop=function(){if(this.spinner){this.spinner.getContent().remove();this.spinner.destroy();this.$element.attr("data-active",false)}};this.getMode=function(){var d=this.$element.data("mode");return d?d:"undetermined"};this.isActive=function(){var d=this.$element.data("active");return d?d:false}});b.toString=function(){return"[wrapper ProgressMeterView]"};b.getBindName=function(){return"ProgressMeterView"};return b});
;
(function(a){a.fn.view=function(b,c){if(!jQuery.isFunction(b)){throw"IllegalViewParameterException"}if(!c&&b.getBindName){c=b.getBindName()}if(!c){throw"IllegalBindParameterException"}var e;if(this.length){var d=this.first();e=d.data(c);if(e==null){e=new b(d.get(0));d.data(c,e)}else{if(!(e instanceof b)){throw"PropertyAlreadyBoundException"}}}return e}})(jQuery);
;
define("jive.component.list",["jquery"],function(b){var a={};a.ListView=jive.oo.Class.extend(function(c){this.init=function(d){this.$element=b(d)};this.toString=function(){return"[object ListView]"};this.allowWrap=function(){return this.$element.data("wrap")==true};this.getListItemElements=function(){return this.$element.find("[data-component='listitem']:visible").get()};this.getListItems=function(){var d=[];b(this.getListItemElements()).each(function(e,f){d.push(b(f).view(a.ListItemView))});return d};this.getSelectedElement=function(){return b(this.getListItemElements()).filter(".j-selected").get(0)};this.getSelectedIndex=function(){var d=this.getSelectedElement();if(d){return b(this.getListItemElements()).index(d)}else{return -1}};this.select=function(e){var d=this.getListItemElements();if(b.isNumeric(e)){if(this.allowWrap()){e=this.wrapIndex(e)}e=d[e]}b(d).filter(".j-selected").removeClass("j-selected");b(e).addClass("j-selected")};this.incriment=function(e){if(e==0){return}var d=this.getSelectedIndex();if(e<0&&d==-1){e++}e=d+e;this.select(e)};c.wrapIndex=function(e){var d=this.getListItemElements().length;e=e%d;e=e<0?d+e:e;return e}});a.ListView.toString=function(){return"[wrapper ListView]"};a.ListView.getBindName=function(){return"ListView"};a.ListItemView=jive.oo.Class.extend(function(c){this.init=function(d){this.$element=b(d)};this.toString=function(){return"[object ListItemView]"};this.getListElement=function(){return this.$element.closest("[data-component='list']").get()};this.getList=function(){return b(this.getListElement()).view(item.ListView)};this.select=function(){this.getList().select(this.$element.get())}});a.ListItemView.toString=function(){return"[wrapper ListItemView]"};a.ListItemView.getBindName=function(){return"ListItemView"};return a});
;
define("apps/share/models/deferred_rest_service",function(){jive.DeferredRestService=jive.oo.Class.extend(function(a){var b=jQuery;a.resourceType="abstract";a.displayGenericErrorMessages=true;a.putOnUpdate=false;a.init=function(d){var c=this;this.pluralizedResourceType=this.pluralizedResourceType||this.resourceType+"s";var e=jive.rest.url("/"+this.pluralizedResourceType);this.RESOURCE_ENDPOINT=(d&&d.forceSecure)?jive.secure(e):e;this.POST_RESOURCE_ENDPOINT=this.RESOURCE_ENDPOINT;this.defaultParams={}};this.suppressGenericErrorMessages=function(){this.displayGenericErrorMessages=false};a.commonAjaxRequest=function(j,e,d,h){var g=this,i,c,f;e=e.toUpperCase();if(e=="POST"){f={contentType:"application/json; charset=utf-8"};c=this.errorSaving}else{if(e=="GET"){c=this.errorFinding}else{if(e=="PUT"){f={contentType:"application/json; charset=utf-8"};c=this.errorUpdating}else{if(e=="DELETE"){c=this.errorDestroying}}}}b.ajax(b.extend({type:e,dataType:"json",success:i||function(k,m,l){g.normalizeID(k);j.resolve(k)},error:this.errorCallback(j,c),timeout:30000},f||{},d));return j};this.save=function(d){this.normalizeID(d);var c=this.saveUrl(d);var e=this.saveMethod(d);return this.commonAjaxRequest(new b.Deferred(),e,{url:c,data:JSON.stringify(this.withoutId(d))},d)};this.get=function(f,e){var c=this.RESOURCE_ENDPOINT+"/"+f,d=jQuery.extend({},this.defaultParams,e||{});return this.commonAjaxRequest(new b.Deferred(),"GET",{url:c,data:d})};this.findAll=function(e){var c=this.RESOURCE_ENDPOINT,d=b.extend({},this.defaultParams,e);return this.commonAjaxRequest(new b.Deferred(),"GET",{url:c,data:d})};this.destroy=function(e){var d=new b.Deferred(),c=this;if(e.hasOwnProperty("id")){e=e.id}b.ajax({type:"DELETE",url:this.RESOURCE_ENDPOINT+"/"+e,success:function(){d.emitSuccess()},error:function(f){c.maybeEmitError(d,c.errorDestroying,[null,f&&f.status])},timeout:30000});return d};a.normalizeID=function(c){var d=c?(c.id||c[this.resourceType+"ID"]):null;if(c&&d){c.id=d}};a.unwrapResponse=function(c){if(Object.keys(c).length===1){return c[Object.keys(c)[0]]}else{return c}};a.errorCallback=function(e,c){var d=this;return function(k,l,h){var i,g,f;try{i=JSON.parse(k.responseText)}catch(j){}g=i?i.message:null;f=(i&&i.code)?i.code:k.status;if(l!=="error"||k.status>=100){d.maybeEmitError(e,c,[g,f])}}};a.maybeEmitError=function(e,c,d){if(this.displayGenericErrorMessages){this.displayError(c())}e.reject.apply(e,d)};a.displayError=function(c){b(c).message({style:"error"})};a.errorSaving=function(){return jive.error.rest.soy.errorSaving({href:window.location})};a.errorFinding=function(){return jive.error.rest.soy.errorFinding({href:window.location})};a.errorUpdating=function(){return jive.error.rest.soy.errorUpdating({href:window.location})};a.errorDestroying=function(){return jive.error.rest.soy.errorDestroying({href:window.location})};a.withoutId=function(c){var d={};Object.keys(c).forEach(function(e){if(e!="id"){d[e]=c[e]}});return d};a.saveUrl=function(c){if(c.id){return this.RESOURCE_ENDPOINT+"/"+c.id}else{return this.POST_RESOURCE_ENDPOINT}};a.saveMethod=function(c){if(c.id&&this.putOnUpdate){return"PUT"}else{return"POST"}}});return jive.DeferredRestService});
;
define("jive.component.autosearch.SearchSource",["jquery"],function(a){return jive.DeferredRestService.extend(function(b){b.resourceType="search";this.init=function(c){this.RESOURCE_ENDPOINT=_jive_base_url+"/api/core/v3/search"};this.createParams=function(d,h,c,f,g,j){var i={};i.sort=f;i.count=g;i.filter=[];if(c){i.fields=a.isArray(c)?c.join(","):c}if(h){for(var e in h){i.filter.push(e+"("+h[e]+")")}}if(d){i.filter.push("search("+d+")")}return i};this.query=function(k,e,d,h,g,i,j){var f=this.createParams(e,d,h,g,i,j);if(k==="contents"){f.collapse=true;f.directive=["include_rtc"]}var c=this.RESOURCE_ENDPOINT+"/"+k;return this.commonAjaxRequest(new a.Deferred(),"GET",{url:c,data:f})}})});
;
define("jive.component.autosearch.ActivitySource",["jquery"],function(a){return jive.DeferredRestService.extend(function(b){b.resourceType="search";this.init=function(c){this.RESOURCE_ENDPOINT=_jive_base_url+"/api/core/v3/activities/"};this.queryFrequent=function(e,c,f){var g={};g.count=f;if(c){g.fields=a.isArray(c)?c.join(","):c}var d=this.RESOURCE_ENDPOINT+"frequent/"+e;return this.commonAjaxRequest(new a.Deferred(),"GET",{url:d,data:g})};this.queryRecent=function(e,c,f){var g={};g.count=f;if(c){g.fields=a.isArray(c)?c.join(","):c}var d=this.RESOURCE_ENDPOINT+"recent/"+e;return this.commonAjaxRequest(new a.Deferred(),"GET",{url:d,data:g})}})});
;
define("apps/autosearch/content_source",["jquery","apps/shared/models/rest_service"],function(b,a){return a.extend(function(c){c.resourceType="search";this.init=function(d){this.suppressGenericErrorMessages();this.RESOURCE_ENDPOINT=_jive_base_url+"/api/core/v3/contents"};this.query=function(g,f){var h={};h.count=f;h.filter=[];if(g){for(var e in g){h.filter.push(e+"("+g[e]+")")}}var d=this.RESOURCE_ENDPOINT;return this.commonAjaxRequest(new jive.conc.Promise(),"GET",{url:d,data:h})}})});
;
define("apps/autosearch/people_source",["jquery","apps/shared/models/rest_service"],function(b,a){return a.extend(function(c){c.resourceType="search";this.init=function(d){this.suppressGenericErrorMessages();this.RESOURCE_ENDPOINT=_jive_base_url+"/api/core/v3/people"};this.query=function(g,f){var h={};h.count=f;h.filter=[];if(g){for(var e in g){h.filter.push(e+"("+g[e]+")")}}var d=this.RESOURCE_ENDPOINT;return this.commonAjaxRequest(new jive.conc.Promise(),"GET",{url:d,data:h})}})});
;
define("apps/autosearch/place_source",["jquery","apps/shared/models/rest_service"],function(b,a){return a.extend(function(c){c.resourceType="search";this.init=function(d){this.suppressGenericErrorMessages();this.RESOURCE_ENDPOINT=_jive_base_url+"/api/core/v3/places"};this.query=function(g,f){var h={};h.count=f;h.filter=[];if(g){for(var e in g){h.filter.push(e+"("+g[e]+")")}}var d=this.RESOURCE_ENDPOINT;return this.commonAjaxRequest(new jive.conc.Promise(),"GET",{url:d,data:h})}})});
;
define("apps/shared/models/bookmark_source",["apps/shared/models/rest_service"],function(a){jive.BookmarkSource=a.extend(function(b){b.resourceType="bookmark"});return jive.BookmarkSource});
;
jive.namespace("search");jive.search.arrived=new Date().getTime();jive.search.SearchMetrics=jive.oo.Class.extend(function(a){var b=jQuery;a.init=function(d){this.data={name:d,referrer:document.referrer,pageArriveDate:jive.search.arrived,pageLeftDate:undefined,queries:[]};this.byName={};var c=this;b(window).on("beforeunload",function(){c.data.pageLeftDate=new Date().getTime();if(c.data.queries.length){c.commit(true)}})};this.commit=function(c){var d=JSON.stringify(this);return b.ajax({type:"POST",url:jive.app.url({path:"/api/core/v3/search/monitor"}),data:d,async:!c,contentType:"application/json",dataType:"json"})};this.addQuery=function(d,c){this.data.queries.push(d);if(c){this.byName[c]=d;if(c.slice(0,3)==="alt"){d.isAlternate=true}}return this};this.getQuery=function(c){return this.byName[c]};this.forEachCurrent=function(d){for(var c in this.byName){if(this.byName.hasOwnProperty(c)){d(this.byName[c],c)}}return this};this.setChoice=function(f,e,d){var g=this.byName[f];var c=g.getResult(e);g.setChoice({index:e,item:c,clickedUrl:d,date:new Date().getTime()});return this};this.toJSON=function(){return this.data}});jive.search.SearchMetricsQuery=jive.oo.Class.extend(function(a){a.init=function(c,b){this.data={query:c||"",sentDate:b||new Date().getTime(),returnedDate:undefined,results:[]}};this.addResults=function(b){var c=this.data.results;c.push.apply(c,b);return this};this.getResult=function(b){return this.data.results[b]};this.forEachResult=function(d){var c=this.data.results;for(var b in c){if(c.hasOwnProperty(b)){d(c[b],b)}}return this};this.setReturnedDate=function(b){this.data.returnedDate=b;return this};this.incPage=function(){this.data.pagesLoaded=(this.data.pagesLoaded||0)+1;return this};this.abort=function(){this.data.aborted=new Date().getTime();return this};this.setChoice=function(b){this.data.choice=b;return this};this.toJSON=function(){return this.data}});
;
jive.namespace("search");(function(d){var l=jive.search,k=jive.app.url({path:"/api/core/v3"}),h={content:{url:k+"/search/contents",validParams:["count","startIndex","sort"],validFilters:["search","type","tag","author","place","after","language"],defaults:{collapse:"true",fields:"rootType,type,subject,author,question,answer,helpful,parentPlace,parentContent,highlightSubject,highlightBody,highlightTags,outcomeCounts,published,updated,replyCount,likeCount,viewCount,visibleToExternalContributors,binaryURL",directive:["include_rtc"]}},people:{url:k+"/search/people",validParams:["count","startIndex","sort"],validFilters:["search","nameonly"],defaults:{}},places:{url:k+"/search/places",validParams:["count","startIndex","sort"],validFilters:["search","type","tag"],defaults:{}}};function e(){return k}function j(m){return h[m].url}function b(m,o){var n=d.getJSON(m,o).then(function(p){if(p.links&&p.links.next){p.next=b.bind(this,p.links.next,{})}p.returnedDate=new Date().getTime();return p});n.query=m+"?"+d.param(o);n.sentDate=new Date().getTime();return n}function i(r,q){if(!h.hasOwnProperty(r)){throw new Error("Invalid type, must be content, people, or places")}if(!q){throw new Error("Must provide params to query")}var p=d.extend({},h[r].defaults),m=h[r].validParams;var n=l.getUrl(r);m.forEach(function(s){if(q[s]){p[s]=q[s]}});var o=q.filter;if(o instanceof Array){o=o.map(function(s){if(s==="type(dm)"){return"type(dm,collaboration,interaction)"}else{return s.replace(/^after\((.*)\)$/,function(t,u){return"after("+g(u)+")"})}})}p.filter=o;return b(n,p)}function a(n,m){var o=JSON.stringify(n);return d.ajax({type:"POST",url:k+"/search/monitor",data:o,async:!m,contentType:"application/json",dataType:"json"})}function c(o,n,m){if(!o.hasOwnProperty("filter")){o.filter=[]}if(d.isArray(m)){m=m.join(",")}o.filter.push(n+"("+m+")")}var f={day:1,week:7,month:30,quarter:90,year:365};function g(r){var n=86400000;var o=new Date();var m=new Date(o.getFullYear(),o.getMonth(),o.getDate());var q=m.getTime();var s=f[r];if(!s){return false}var p=new Date(q-n*s).toISOString();return p.replace(/Z$/,"+0000")}if(!Date.prototype.toISOString){(function(){function m(o){var n=String(o);if(n.length===1){n="0"+n}return n}Date.prototype.toISOString=function(){return this.getUTCFullYear()+"-"+m(this.getUTCMonth()+1)+"-"+m(this.getUTCDate())+"T"+m(this.getUTCHours())+":"+m(this.getUTCMinutes())+":"+m(this.getUTCSeconds())+"."+String((this.getUTCMilliseconds()/1000).toFixed(3)).slice(2,5)+"Z"}}())}l.query=i;l.logMonitoring=a;l.getBaseUrl=e;l.getUrl=j})(jQuery);
;
define("apps/autosearch/autosearch",["jquery","jive.component.autosearch.SearchSource","jive.component.autosearch.ActivitySource","apps/autosearch/content_source","apps/autosearch/people_source","apps/autosearch/place_source","jive.component.list","jive.component.PopupView","jive.component.ProgressMeterView"],function(c,b,h,k,a,d,e,f,g){var j={};j.init=function(){var l=c(document);c("input[data-component='autosearch']").placeHeld();l.on("focus.autosearchview","input[data-component='autosearch']",function(m){c(this).view(i)});jive.switchboard.addListener("bookmark.create",function(o){var n=c("#j-spotlight-search");n.addClass("j-bookmark-created");n.append(jive.autosearch.overlay({type:"bookmark"}));var m=n.find(".j-tooltip");m.fadeIn(250);setTimeout(function(){n.removeClass("j-bookmark-created");m.fadeOut(250,function(){c(this).remove()})},1500)})};var i=jive.oo.Class.extend(function(l){l.init=function(s,v){v=v||{};this.$element=c(s);this.resultsView=this.$element.data("resultsView")||f;this.searchSource=new b();this.activitySource=new h();this.contentSource=new k();this.peopleSource=new a();this.placeSource=new d();this.bookmarkSource=new jive.BookmarkSource();this.metrics=new jive.search.SearchMetrics("spotlight-search");this.$element.attr("maxlength",250);if(this.$element.data("container")){var u=this.$element.data("container").split(":");this.containerType=parseInt(u[0]);this.containerId=parseInt(u[1]);this.containerBrowseId=parseInt(this.$element.data("container-browseid"));this.filterType="place";this.filter=["/places/"+this.containerBrowseId];this.additionalFilters={depth:"ALL"};this.displayName=this.$element.data("container-name");this.forceFiltered=true}else{this.containerType=jive.global.containerType;this.containerId=jive.global.containerID;this.containerBrowseId=jive.global.containerBrowseId}this.deferreds=[];if(this.containerType==3){this.peopleSource.get(this.containerId).addCallback(function(w){if(w){m("people",w);this.filterType="author";this.filter=new RegExp("/[^/]*/[^/]*$").exec(w.resources.self.ref);this.displayName=w.displayName}}.bind(this))}else{if(this.containerType!=2020&&this.containerBrowseId!=-1){this.placeSource.get(this.containerBrowseId).addCallback(function(w){if(w&&!(w.type=="space"&&w.parent==null)){this.filterType="place";this.filter=new RegExp("/[^/]*/[^/]*$").exec(w.resources.self.ref);this.additionalFilters={depth:"ALL"};this.displayName=w.name}}.bind(this))}}var r=this;var q=c("[data-type='clear'][data-field='"+this.$element.get(0).id+"']");q.on("click",function(w){r.$element.focus();r.$element.val("");r.setView(null);r.renderView();r.loadViewContent();c(this).removeClass("j-active")});function t(w){var x=w.find("[data-component='button'][data-command='remove']").data("id");r.deleteBookmark(x).addCallback(function(){w.fadeOut("fast",function(){w.remove()})})}this.$element.typeAhead({keystrokeWait:400,suppressBlurEvent:(/iPhone|iPod|iPad/).test(navigator.userAgent),itemSelector:"li.j-listitem:visible",tabSelector:"nav a[data-component='button'][data-view]:visible",deselectOnMouseOut:true}).on("keystroke",function p(x){var y=r.getSearchTerm();if(y){r.change()}else{r.clear()}var w=r.getPopup();if(w.getState()=="visible"){if(y.length){q.addClass("j-active")}else{q.removeClass("j-active")}}}).on("focusWaitFinished",function(w){c(this).closest("[role=search]").addClass("focused");var x=c(this).view(i);if(x.getPopup().getState()!="visible"){x.renderView();x.loadViewContent()}}).on("blurWaitFinished",function(w){c(this).closest("[role=search]").removeClass("focused").end().trigger("close")}).on("selectionChosen",function(C,A,x,D){var z=x.find("a:first"),y=z.attr("href");if(z.is("[data-component='button']")){if(z.is("[data-command='more']")){var w=z.closest("ol").find("li.j-inactive").removeClass("j-inactive").first();A.setSelected(w);z.closest("li").addClass("j-inactive")}r.activateItem(x)}else{if(c(D.target).is("[data-component='button']")){var B=c(D.target);if(B.is("[data-command='remove']")){t(x)}}else{if(D.type=="click"){D.noPreventDefault()}else{setTimeout(function(){if(!C.isDefaultPrevented()){window.location=y}},0)}}}}).on("otherClick",function(y,x,w){if(w.is("[data-component='button'][data-view]")){r.setView(w.data("view"));r.renderView();r.loadViewContent()}}).on("otherEnter",function(){r.navigateToSearchPage()}).on("close",function(){r.hidePopup()}).on("selectionChanged",function(y,z,x,A){var w=r.getPopup();if(A!=="mouse"&&w.scrollTo){w.scrollTo(x)}}).attr("aria-autocomplete","list").attr("role","combobox");c("[data-type='search'][data-field='"+this.$element.get(0).id+"']").on("click",function(w){r.navigateToSearchPage()})};this.toString=function(){return"[object AutoSearchView]"};l.getCurrentView=function(){var p=this.currentView;if(!p){p=this.getDefaultView()}return p};l.getDefaultView=function(){var p=this.getAvailableViews();if(p.frequent){return"frequent"}else{if(p.bookmarks){return"bookmarks"}else{return null}}};this.getPopupElement=function(){var r=this.$element.data("popupElement");if(!r){var p=this.$element.data("popup");var q;if(p){q=c("#"+p)}else{q=c(jive.autosearch.spotlightPopup());this.$element.after(q)}r=q.get(0);this.$element.data("popupElement",r)}return r};l.getSearchTerm=function(){var p=this.$element.placeHeldVal();if((p.match(/[^\s]/g)||[]).length>=2){p=c.trim(p).replace(/\s+/g," ");while(p.length>=2&&p.match(/\s\w$/)){p=c.trim(p.substring(0,p.length-2))}if(p.length>=2){return p}}return""};this.activateItem=function(s){var p=c(s);if(!p.hasClass("more")&&this.getCurrentView()=="all"||this.getCurrentView()=="filtered"){var q=p.closest("[data-component='listitem']").prevAll("[data-component='listitem']").length;var r=p.closest("div[data-type]").attr("data-type");this.metrics.setChoice(r,q,p.get(0).href)}};this.getPopup=function(){return c(this.getPopupElement()).view(this.resultsView)};this.hidePopup=function(){this.getPopup().hide()};this.showPopup=function(){var p=this.getPopup();if(!c(this.getPopupElement()).is(":visible")){var q=this.anchor?c(this.anchor):null;if(!q){q=this.$element.data("popup-anchor");q=q?c("#"+q):this.$element}this.getPopup().show(this.$element.get(0),q);this.$element.data("typeAhead").setSuggestElement(this.getPopupElement())}};this.setAnchor=function(p){this.anchor=p};l.getListElement=function(){var p=c(this.getPopupElement());return p.find("[data-component='list']").get(0)};l.specify=function(p,r,q){this.deferreds.push(r);return r.pipe(function(s){return{type:p,params:q,data:s}})};l.fieldsFor=function(p){if(p=="content"){return["type","id","author","subject","visibleToExternalContributors","published","updated","question","answer","helpful"]}else{if(p=="people"){return["type","id","name","displayName","thumbnailId","jive"]}else{if(p=="places"){return["type","id","name","displayName","visibleToExternalContributors"]}}}return[]};l.loadFrequentlyViewed=function(){var p=[];p.push(this.specify("content",this.activitySource.queryFrequent("content",this.fieldsFor("content"),10)));p.push(this.specify("people",this.activitySource.queryFrequent("people",this.fieldsFor("people"),10)));p.push(this.specify("places",this.activitySource.queryFrequent("places",this.fieldsFor("places"),10)));return p};l.loadBookmarks=function(){var p=new c.Deferred();this.contentSource.query({type:"favorite",author:"/people/"+_jive_current_user.ID},10).then(function(q){p.resolve(q)});return[this.specify("content",p)]};l.loadHistory=function(){var p=[];p.push(this.specify("content",this.activitySource.queryRecent("content",this.fieldsFor("content"),10)));p.push(this.specify("people",this.activitySource.queryRecent("people",this.fieldsFor("people"),10)));p.push(this.specify("places",this.activitySource.queryRecent("places",this.fieldsFor("places"),10)));return p};l.executeSearch=function(){var p=[];p.push(this.performSearchQuery("content",this.fieldsFor("content")));if(this.getCurrentView()!="filtered"){p.push(this.performSearchQuery("people",this.fieldsFor("people")));p.push(this.performSearchQuery("places",this.fieldsFor("places")))}return p};l.performSearchQuery=function(t,q){var r=c.trim(this.getSearchTerm())+"*",s=null;if(this.getCurrentView()=="filtered"){s={};s[this.filterType]=this.filter;if(this.filterType=="place"){c.extend(s,this.additionalFilters)}}var p=t=="content"?"contents":t;var w=this.searchSource.createParams(r,s,q,"relevanceDesc",10);var u=new jive.search.SearchMetricsQuery("/api/core/v3/search/"+p+"?"+c.param(w));this.metrics.addQuery(u,p);var v=this.searchSource.query(p,r,s,q,"relevanceDesc",10);v.then(this.processSearchResult.bind(this,u));return this.specify(t,v,{searchTerm:r,filterType:this.filterType,filter:this.filter})};l.processSearchResult=function(q,p){q.setReturnedDate(new Date().getTime());q.addResults(p.list.map(n))};function n(p){return{id:p.id,type:p.type}}this.deleteBookmark=function(q){var p=new jive.conc.Promise();this.bookmarkSource.destroy(q).addCallback(function(){jive.switchboard.emit("bookmark.destroy",jQuery.extend({},{id:q}));p.emitSuccess()});return p};function m(q,p){if(p.type=="favorite"&&p.favoriteObject.type!="url"){p=p.favoriteObject;p.displayExternalAccess=(!_jive_current_user.partner)&&p.visibleToExternalContributors}if(q=="content"){if(p.published){p.publishedDate=o(p.published).getTime()}if(p.updated){p.updatedDate=o(p.updated).getTime()}if(p.author&&!p.author.displayName){p.author.displayName=p.author.name.formatted||p.author.jive.username}if(p.type=="file"&&p.binaryURL){p.extension=p.binaryURL.split(".").slice(-1).join(".").toLowerCase()}if(!p.subject&&p.highlightSubject){p.subject=p.highlightSubject}if(!p.subject&&p.parentContent){p.subject=p.parentContent.name}p.subject=c("<div>"+p.subject+"</div>").text();p.displayExternalAccess=(!_jive_current_user.partner)&&p.visibleToExternalContributors}else{if(q=="people"){if(p.jive&&p.jive.profile&&p.jive.profile instanceof Array){c(p.jive.profile).each(function(r,s){if(s.jive_label=="Title"){p.title=s.value}else{if(s.jive_label=="Department"){p.department=s.value}}})}if(!p.displayName){p.displayName=p.name.formatted||p.jive.username}p.displayExternalContributor=(!_jive_current_user.partner)&&p.jive&&p.jive.externalContributor}else{p.displayExternalAccess=(!_jive_current_user.partner)&&p.visibleToExternalContributors}}}function o(s){var p=s.replace(/\+\d+/,"Z");var r=new Date(p);if(isNaN(r.getTime())){var q=p.replace(/-/,"/").replace("T"," ").replace(/\.\d+Z/," GMT");r=new Date(q)}return r}l.getAvailableViews=function(){var p=this.$element.data("hidetypes");return{bookmarks:q("bookmarks"),frequent:q("frequent"),recent:q("recent"),all:q("all"),filtered:this.filterType?q("filtered"):false,content:q("content"),places:q("places"),people:q("people")};function q(r){return p.indexOf(r)<0}};this.renderView=function(){var q=this.getCurrentView();if(q){var p=c(this.getPopupElement());p.empty();p.append(jive.autosearch.spotlightView({view:q,availableViews:this.getAvailableViews(),filterDisplayName:this.displayName,communityName:this.$element.attr("data-community-name")}));this.showPopup();if(q=="bookmarks"||q=="frequent"||q=="recent"||q=="all"){jive.Accessibility.speak(jive.i18n.getMsg("search.view.default.title"))}else{jive.Accessibility.speak(jive.i18n.getMsg("search.view.search.title"))}}else{this.hidePopup()}};l.startLoad=function(){var p=c(this.getPopupElement());p.attr("aria-busy","true");var q=p.find("[data-component='loadingpanel']");var r=p.find("[data-component='progressmeter']");if(q.length){r=q.find("[data-component='progressmeter']")}r.each(function(s,t){c(t).view(g).start()})};l.endLoad=function(){var p=c(this.getPopupElement());var q=p.find("[data-component='progressmeter']");q.each(function(r,s){c(s).view(g).stop()});p.attr("aria-busy","false")};this.loadViewContent=function(){var s=this.getCurrentView(),r;while(this.deferreds.length){this.deferreds[0].reject();this.deferreds.shift()}this.startLoad();switch(s){case"frequent":r=this.loadFrequentlyViewed();break;case"recent":r=this.loadHistory();break;case"bookmarks":r=this.loadBookmarks();break;case"all":case"filtered":r=this.executeSearch();break}if(r&&r.length){var q=this,p=c.trim(q.getSearchTerm())+"*";c.when.apply(c,r).done(function(){q.processResult(s,p,Array.prototype.slice.call(arguments))})}};l.processResult=function(r,s,t){if(r==this.getCurrentView()){this.endLoad();var q=this.getAvailableViews();var u={view:r,searchTerm:s,filterType:this.filterType,filter:this.filter,results:{}};if(t){t.forEach(function(w){if(w&&w.data&&w.data.list){w.data.list.forEach(function(x){m(w.type,x)});if(q[w.type]){u.results[w.type]=w.data.list}}})}var p=c(jive.autosearch.results(u)),v=p.find("li[data-type][data-id]");(t||[]).forEach(function(w){(w.data&&w.data.list||[]).forEach(function(x){v.filter(function(){var y=c(this);return y.attr("data-type")==x.type&&y.attr("data-id")==x.id}).data("item",x)})});c(this.getListElement()).empty().append(p);this.calculateResultsMaxHeight()}};this.setView=function(p){this.currentView=p};l.change=function(){var p=this.getCurrentView();if(p!="all"&&p!="filtered"){if(this.forceFiltered){this.setView("filtered")}else{this.setView("all")}this.renderView()}this.loadViewContent()};l.clear=function(){var p=this.getCurrentView();if(p=="all"||p=="filtered"){this.setView(null);this.renderView()}this.loadViewContent()};l.calculateResultsMaxHeight=function(){var t=this.getPopup().getOuterHeight(),q=this.getPopup().getTopMargin(),v=c(window).height(),r=c(this.getListElement());if(t+q<v){this.setResultsMaxHeight("auto")}else{var u=10,s=v-q-u,p=t-r.removeAttr("maxHeight").height();this.setResultsMaxHeight(s-p)}};l.setResultsMaxHeight=function(q){var r=40,p=c(this.getListElement());if(!isNaN(q)&&q>r){p.css("maxHeight",q)}else{p.removeAttr("maxHeight")}};this.navigateToSearchPage=function(){var p={};if(this.getSearchTerm().length>0){p.q=this.getSearchTerm()}if(this.getCurrentView()=="filtered"){p[this.filterType]=this.filter;if(this.filterType=="place"){c.extend(p,this.additionalFilters)}}window.location=_jive_base_url+"/search.jspa?"+c.param(p)}});i.toString=function(){return"[wrapper AutoSearchView]"};i.getBindName=function(){return"AutoSearchView"};c(document).ready(function(){j.init()});return i});
;
define("libRange",["jquery"],function(g){function p(v){var u=0;while(v=v.previousSibling){++u}return u}function o(v,u){u.parentNode.insertBefore(v,u.nextSibling)}function s(w,u){var x=w,v;while(x){v=u;while(v&&x!=v){v=v.parentNode}if(x==v){break}x=x.parentNode}if(!x&&w.ownerDocument){return w.ownerDocument.documentElement}return x}var f=(function(){function u(C,B){var x=this;function v(){return C.selection.createRange()}function w(){return new B(C)}function A(){var D=v();if(!D||D.item){return false}return D.compareEndPoints("StartToEnd",D)===0}function y(D,E){var F,O=0,L,I,H,G,J,M,K=-1,N;F=D.duplicate();F.collapse(E);N=F.parentElement();if(N.ownerDocument!==C){return}while(N.contentEditable==="false"){N=N.parentNode}if(!N.hasChildNodes()){return{node:N,inside:1}}H=N.children;L=H.length-1;while(O<=L){M=Math.floor((O+L)/2);G=H[M];F.moveToElementText(G);K=F.compareEndPoints(E?"StartToStart":"EndToEnd",D);if(K>0){L=M-1}else{if(K<0){O=M+1}else{return{node:G}}}}if(K<0){if(!G){F.moveToElementText(N);F.collapse(true);G=N;I=true}else{F.collapse(false)}F.setEndPoint(E?"EndToStart":"EndToEnd",D);if(F.compareEndPoints(E?"StartToStart":"StartToEnd",D)>0){F=D.duplicate();F.collapse(E);J=-1;while(N==F.parentElement()){if(F.move("character",-1)==0){break}J++}}J=J||F.text.replace("\r\n"," ").length}else{F.collapse(true);F.setEndPoint(E?"StartToStart":"StartToEnd",D);J=F.text.replace("\r\n"," ").length}return{node:G,position:K,offset:J,inside:I}}function z(){var D=v(),M=w(),G,F,K,L,H,E;G=D.item?D.item(0):D.parentElement();if(G.ownerDocument!=C){return M}F=A();if(D.item){M.setStart(G.parentNode,p(G));M.setEnd(M.startContainer,M.startOffset+1);return M}function J(U){var P=y(D,U),N,S,T=0,R,Q,O;N=P.node;S=P.offset;if(P.inside&&!N.hasChildNodes()){M[U?"setStart":"setEnd"](N,0);return}if(S===Q){M[U?"setStartBefore":"setEndAfter"](N);return}if(P.position<0){R=P.inside?N.firstChild:N.nextSibling;if(!R){M[U?"setStartAfter":"setEndAfter"](N);return}if(!S){if(R.nodeType==3){M[U?"setStart":"setEnd"](R,0)}else{M[U?"setStartBefore":"setEndBefore"](R)}return}while(R){O=R.nodeValue;T+=O.length;if(T>=S){N=R;T-=S;T=O.length-T;break}R=R.nextSibling}}else{R=N.previousSibling;if(!R){return M[U?"setStartBefore":"setEndBefore"](N)}if(!S){if(N.nodeType==3){M[U?"setStart":"setEnd"](R,N.nodeValue.length)}else{M[U?"setStartAfter":"setEndAfter"](R)}return}while(R){T+=R.nodeValue.length;if(T>=S){N=R;T-=S;break}R=R.previousSibling}}M[U?"setStart":"setEnd"](N,T)}try{J(true);if(!F){J()}}catch(I){if(I.number==-2147024809){H=x.getBookmark(2);K=D.duplicate();K.collapse(true);G=K.parentElement();if(!F){K=D.duplicate();K.collapse(false);L=K.parentElement();L.innerHTML=L.innerHTML}G.innerHTML=G.innerHTML;x.moveToBookmark(H);D=v();J(true);if(!F){J()}}else{throw I}}return M}this.addRange=function(D){var J,G,F,L,N,M,I=C.body;function H(O){O.parentNode.removeChild(O)}function E(T){var P,S,O,R,Q;O=C.createElement("a");P=T?F:N;S=T?L:M;R=J.duplicate();if(P==C||P==C.documentElement){P=I;S=0}if(P.nodeType==3){P.parentNode.insertBefore(O,P);R.moveToElementText(O);R.moveStart("character",S);H(O);J.setEndPoint(T?"StartToStart":"EndToEnd",R)}else{Q=P.childNodes;if(Q.length){if(S>=Q.length){o(O,Q[Q.length-1])}else{P.insertBefore(O,Q[S])}R.moveToElementText(O)}else{O=C.createTextNode("\uFEFF");P.appendChild(O);R.moveToElementText(O.parentNode);R.collapse(true)}J.setEndPoint(T?"StartToStart":"EndToEnd",R);H(O)}}F=D.startContainer;L=D.startOffset;N=D.endContainer;M=D.endOffset;J=I.createTextRange();if(F==N&&F.nodeType==1&&L==M-1){if(L==M-1){try{G=I.createControlRange();G.addElement(F.childNodes[L]);G.select();return}catch(K){}}}E(true);E();J.select()};this.getRangeAt=z}return u})();var l=(function(){function u(x){var ac=this,ag=0,T=1,C=2,ah="startOffset",A="startContainer",ae="endContainer",P="endOffset",D=g.extend;D(ac,{startContainer:x,startOffset:0,endContainer:x,endOffset:0,collapsed:true,commonAncestorContainer:x,START_TO_START:0,START_TO_END:1,END_TO_END:2,END_TO_START:3,setStart:I,setEnd:K,setStartBefore:z,setStartAfter:X,setEndBefore:Y,setEndAfter:L,collapse:Q,selectNode:N,selectNodeContents:U,compareBoundaryPoints:M,deleteContents:H,extractContents:W,cloneContents:w,insertNode:S,surroundContents:ab,cloneRange:Z});ac.toString=v;function v(){var ak=this.cloneContents();var aj=[];var al=ak.firstChild;while(al){if(al.nodeType==3){aj.push(al.nodeValue)}else{if(al.nodeType==1){if(al.innerText!=null){aj.push(al.innerText)}else{aj.push(al.textContent)}}}al=al.nextSibling}return aj.join("")}function I(ak,aj){R(true,ak,aj)}function K(ak,aj){R(false,ak,aj)}function z(aj){I(aj.parentNode,p(aj))}function X(aj){I(aj.parentNode,p(aj)+1)}function Y(aj){K(aj.parentNode,p(aj))}function L(aj){K(aj.parentNode,p(aj)+1)}function Q(aj){if(aj){ac[ae]=ac[A];ac[P]=ac[ah]}else{ac[A]=ac[ae];ac[ah]=ac[P]}ac.collapsed=true;ac.commonAncestorContainer=ac[A]}function N(aj){z(aj);L(aj)}function U(aj){I(aj,0);K(aj,aj.nodeType===1?aj.childNodes.length:aj.nodeValue.length)}function M(an,aj){var aq=ac[A],al=ac[ah],ap=ac[ae],ak=ac[P],ao=aj.startContainer,at=aj.startOffset,am=aj.endContainer,ar=aj.endOffset;if(an===0){return V(aq,al,ao,at)}if(an===1){return V(ap,ak,ao,at)}if(an===2){return V(ap,ak,am,ar)}if(an===3){return V(aq,al,am,ar)}}function H(){F(C)}function W(){return F(ag)}function w(){return F(T)}function S(an){var ak=this[A],aj=this[ah],am,al;if((ak.nodeType===3||ak.nodeType===4)&&ak.nodeValue!=null){if(!aj){ak.parentNode.insertBefore(an,ak)}else{if(aj>=ak.nodeValue.length){o(an,ak)}else{am=ak.splitText(aj);ak.parentNode.insertBefore(an,am)}}}else{if(ak.childNodes.length>0){al=ak.childNodes[aj]}if(al){ak.insertBefore(an,al)}else{ak.appendChild(an)}}}function ab(ak){var aj=ac.extractContents();ac.insertNode(ak);ak.appendChild(aj);ac.selectNode(ak)}function Z(){return D(new u(x),{startContainer:ac[A],startOffset:ac[ah],endContainer:ac[ae],endOffset:ac[P],collapsed:ac.collapsed,commonAncestorContainer:ac.commonAncestorContainer})}function ad(aj,ak){var al;if(aj.nodeType==3){return aj}if(ak<0){return aj}al=aj.firstChild;while(al&&ak>0){--ak;al=al.nextSibling}if(al){return al}return aj}function E(){return(ac[A]==ac[ae]&&ac[ah]==ac[P])}function V(am,ao,ak,an){var ap,al,aj,aq,at,ar;if(am==ak){if(ao==an){return 0}if(ao<an){return -1}return 1}ap=ak;while(ap&&ap.parentNode!=am){ap=ap.parentNode}if(ap){al=0;aj=am.firstChild;while(aj!=ap&&al<ao){al++;aj=aj.nextSibling}if(ao<=al){return -1}return 1}ap=am;while(ap&&ap.parentNode!=ak){ap=ap.parentNode}if(ap){al=0;aj=ak.firstChild;while(aj!=ap&&al<an){al++;aj=aj.nextSibling}if(al<an){return -1}return 1}aq=s(am,ak);at=am;while(at&&at.parentNode!=aq){at=at.parentNode}if(!at){at=aq}ar=ak;while(ar&&ar.parentNode!=aq){ar=ar.parentNode}if(!ar){ar=aq}if(at==ar){return 0}aj=aq.firstChild;while(aj){if(aj==at){return -1}if(aj==ar){return 1}aj=aj.nextSibling}}function R(ak,an,am){var aj,al;if(ak){ac[A]=an;ac[ah]=am}else{ac[ae]=an;ac[P]=am}aj=ac[ae];while(aj.parentNode){aj=aj.parentNode}al=ac[A];while(al.parentNode){al=al.parentNode}if(al==aj){if(V(ac[A],ac[ah],ac[ae],ac[P])>0){ac.collapse(ak)}}else{ac.collapse(ak)}ac.collapsed=E();ac.commonAncestorContainer=s(ac[A],ac[ae])}function F(aq){var ap,am=0,at=0,ak,ao,al,an,aj,ar;if(ac[A]==ac[ae]){return y(aq)}for(ap=ac[ae],ak=ap.parentNode;ak;ap=ak,ak=ak.parentNode){if(ak==ac[A]){return J(ap,aq)}++am}for(ap=ac[A],ak=ap.parentNode;ak;ap=ak,ak=ak.parentNode){if(ak==ac[ae]){return ai(ap,aq)}++at}ao=at-am;al=ac[A];while(ao>0){al=al.parentNode;ao--}an=ac[ae];while(ao<0){an=an.parentNode;ao++}for(aj=al.parentNode,ar=an.parentNode;aj!=ar;aj=aj.parentNode,ar=ar.parentNode){al=aj;an=ar}return G(al,an,aq)}function y(ao){var aq,an,am,ap,aj,al,ak;if(ao!=C){aq=x.createDocumentFragment()}if(ac[ah]==ac[P]){return aq}if(ac[A].nodeType==3){an=ac[A].nodeValue;am=an.substring(ac[ah],ac[P]);if(ao!=T){ac[A].deleteData(ac[ah],ac[P]-ac[ah]);ac.collapse(true)}if(ao==C){return}aq.appendChild(x.createTextNode(am));return aq}ap=ad(ac[A],ac[ah]);aj=ac[P]-ac[ah];while(aj>0){al=ap.nextSibling;ak=O(ap,ao);if(aq){aq.appendChild(ak)}--aj;ap=al}if(ao!=T){ac.collapse(true)}return aq}function J(aq,an){var ap,ao,ak,aj,am,al;if(an!=C){ap=x.createDocumentFragment()}ao=B(aq,an);if(ap){ap.appendChild(ao)}ak=p(aq);aj=ak-ac[ah];if(aj<=0){if(an!=T){ac.setEndBefore(aq);ac.collapse(false)}return ap}ao=aq.previousSibling;while(aj>0){am=ao.previousSibling;al=O(ao,an);if(ap){ap.insertBefore(al,ap.firstChild)}--aj;ao=am}if(an!=T){ac.setEndBefore(aq);ac.collapse(false)}return ap}function ai(ao,an){var aq,ak,ap,aj,am,al;if(an!=C){aq=x.createDocumentFragment()}ap=af(ao,an);if(aq){aq.appendChild(ap)}ak=p(ao);++ak;aj=ac[P]-ak;ap=ao.nextSibling;while(aj>0){am=ap.nextSibling;al=O(ap,an);if(aq){aq.appendChild(al)}--aj;ap=am}if(an!=T){ac.setStartAfter(ao);ac.collapse(true)}return aq}function G(ao,aj,ar){var al,au,an,ap,aq,ak,at,am;if(ar!=C){au=x.createDocumentFragment()}al=af(ao,ar);if(au){au.appendChild(al)}an=ao.parentNode;ap=p(ao);aq=p(aj);++ap;ak=aq-ap;at=ao.nextSibling;while(ak>0){am=at.nextSibling;al=O(at,ar);if(au){au.appendChild(al)}at=am;--ak}al=B(aj,ar);if(au){au.appendChild(al)}if(ar!=T){ac.setStartAfter(ao);ac.collapse(true)}return au}function B(ap,aq){var al=ad(ac[ae],ac[P]-1),ar,ao,an,aj,ak,am=al!=ac[ae];if(al==ap){return aa(al,am,false,aq)}ar=al.parentNode;ao=aa(ar,false,false,aq);while(ar){while(al){an=al.previousSibling;aj=aa(al,am,false,aq);if(aq!=C){ao.insertBefore(aj,ao.firstChild)}am=true;al=an}if(ar==ap){return ao}al=ar.previousSibling;ar=ar.parentNode;ak=aa(ar,false,false,aq);if(aq!=C){ak.appendChild(ao)}ao=ak}}function af(ap,aq){var am=ad(ac[A],ac[ah]),an=am!=ac[A],ar,ao,al,aj,ak;if(am==ap){return aa(am,an,true,aq)}ar=am.parentNode;ao=aa(ar,false,true,aq);while(ar){while(am){al=am.nextSibling;aj=aa(am,an,true,aq);if(aq!=C){ao.appendChild(aj)}an=true;am=al}if(ar==ap){return ao}am=ar.nextSibling;ar=ar.parentNode;ak=aa(ar,false,true,aq);if(aq!=C){ak.appendChild(ao)}ao=ak}}function aa(aj,an,aq,ar){var am,al,ao,ak,ap;if(an){return O(aj,ar)}if(aj.nodeType==3){am=aj.nodeValue;if(aq){ak=ac[ah];al=am.substring(ak);ao=am.substring(0,ak)}else{ak=ac[P];al=am.substring(0,ak);ao=am.substring(ak)}if(ar!=T){aj.nodeValue=ao}if(ar==C){return}ap=aj.cloneNode(false);ap.nodeValue=al;return ap}if(ar==C){return}return aj.cloneNode(false)}function O(ak,aj){if(aj!=C){return aj==T?ak.cloneNode(true):ak}ak.parentNode.removeChild(ak)}}return u})();function e(){if(window.getSelection){return function u(x){if(!x){x=window}return x.getSelection()}}else{if(window.document.getSelection){return function w(x){if(!x){x=window}return x.document.getSelection()}}else{return function v(x){if(!x){x=window}return new f(x.document,l)}}}}function j(){if(window.document.createRange){return function v(w){if(!w){w=window.document}return w.createRange()}}else{return function u(w){if(!w){w=window.document}return new l(w)}}}var h=e();var t=j();function c(u){if(!u){u=window}this.doc=u.document;this.selection=h(u)}c.prototype.getSelection=function(){return this.selection};c.prototype.getRange=function(){return t(this.doc)};c.prototype.getSelectedRange=function(){var u;if(this.selection.rangeCount===0){u=null}else{u=this.selection.getRangeAt(0)}if(!u){u=this.getRange();u.setStart(this.doc,0);this.setSelectedRange(u)}return u};c.prototype.setSelectedRange=function(u){if(this.selection.rangeCount&&this.selection.getRangeAt(0)==u){return}if(this.selection.removeAllRanges){this.selection.removeAllRanges()}this.selection.addRange(u)};function r(u){return{c:u.startContainer,off:u.startOffset}}function q(){}q.prototype.selectWord=function i(u,B){u.collapse(B);var A=r(u);var z=this.prevCharPos(A),y=A,w;var x=/[^\s\u00a0]/;while(z&&(w=this.charAt(z))&&x.test(w)){y=z;z=this.prevCharPos(z)}z=y;var v=A;y=v;while((w=this.charAt(v))&&x.test(w)){y=v;v=this.nextCharPos(v)}if(!v){v=y;if((v.nodeType==1&&v.childNodes.length>v.off)||(v.nodeType==3&&v.nodeValue.length>v.off)){++v.off}}u.setStart(z.c,z.off);u.setEnd(v.c,v.off);if(u.collapsed){return""}return u.toString()};q.prototype.prevCharPos=function(u){if(u.c.nodeType==3){if(u.off>0){return{c:u.c,off:u.off-1}}else{return this.prevCharPos({c:u.c.parentNode,off:p(u.c)})}}else{if(u.c.nodeType==1){if(u.off>0){var v=u.c.childNodes[u.off-1];if(v.nodeType==3){return this.prevCharPos({c:v,off:v.nodeValue.length})}}}}return null};q.prototype.nextCharPos=function(u){if(u.c.nodeType==3){if(u.off<u.c.nodeValue.length-1){return{c:u.c,off:u.off+1}}else{if(u.off==u.c.nodeValue.length-1){return this.nextCharPos({c:u.c,off:u.off+1})}else{return this.nextCharPos({c:u.c.parentNode,off:p(u.c)+1})}}}else{if(u.c.nodeType==1){if(u.off<u.c.childNodes.length){var v=u.c.childNodes[u.off];if(v.nodeType==3){if(v.nodeValue.length>0){return{c:v,off:0}}else{return this.nextCharPos({c:v,off:0})}}}}}return null};q.prototype.charAt=function(u){if(u&&u.c.nodeType==3){return u.c.nodeValue.substr(u.off,1)}return null};function d(y,v,u,x){var w=y.ownerDocument.createRange();if(y&&v){w.setStart(y,v)}if(u&&x){w.setEnd(u,x)}else{w.collapse(true)}return w}function m(u){if(u.anchorNode==null||u.focusNode==null){return true}var w=d(u.anchorNode,u.anchorOffset);var v=d(u.focusNode,u.focusOffset);return w.compareBoundaryPoints(w.START_TO_START,v)<=0}function a(v){var u=v.nodeName;if(u=="#text"){u="#"+v.nodeValue}return u}function k(w,v){var u="";if(w.parentNode&&w.parentNode.nodeName!="HTML"){u=k(w.parentNode,p(w))+"/"}return u+a(w)+(v!=null?"["+v+"]":"")}function b(y,v){if(!v){v=new c()}var w=v.getSelection();var u=v.getSelectedRange();if(!y){y=""}else{if(!/ $/.test(y)){y=y+": "}}if(w.rangeCount==0){console.log(y+"No selection.")}else{if(u.collapsed){console.log(y+"current selection position: "+k(u.startContainer,u.startOffset)+" (collapsed)")}else{var x=m(w)?"->":"<-";console.log(y+"current selection range: "+k(u.startContainer,u.startOffset)+"\n\t- "+k(u.endContainer,u.endOffset)+" Direction "+x,u);if(w.anchorNode){console.log("Anchor-focus"+(w.baseNode!=null?", base-extent: ":": ")+k(w.anchorNode,w.anchorOffset)+" - "+k(w.focusNode,w.focusOffset)+(w.baseNode!=null?", "+k(w.baseNode,w.baseOffset)+" - "+k(w.extentNode,w.extentOffset):""))}}}}function n(v,u){if(!v){v=""}else{if(!/ $/.test(v)){v=v+": "}}if(u.collapsed){console.log(v+k(u.startContainer,u.startOffset)+" (collapsed)")}else{console.log(v+k(u.startContainer,u.startOffset)+" - "+k(u.endContainer,u.endOffset),u)}}return{RangeContext:c,RangeUtils:new q(),logSelection:b,logRange:n}});
;
// This file was automatically generated from onboarding.soy.
// Please don't edit this file by hand.

goog.provide('jive.onboarding.dynamicPaneContents');
goog.provide('jive.onboarding.introModal');
goog.provide('jive.onboarding.jsInit');
goog.provide('jive.onboarding.msgFormatHelper');
goog.provide('jive.onboarding.onboardingProgress');
goog.provide('jive.onboarding.page');
goog.provide('jive.onboarding.postExploreOnMyOwnTip');
goog.provide('jive.onboarding.postHideViewTip');
goog.provide('jive.onboarding.questSection');
goog.provide('jive.onboarding.vcSelectModal');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.shared.displayutil.avatar');
goog.require('jive.shared.soy.i18nHelper');
goog.require('jive.shared.soy.render');
goog.require('jive.shared.soy.resourceInlineJs');
goog.require('jive.skin.template.main');
goog.require('jive.welcome.homeSideNav');


jive.onboarding.jsInit = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  jive.shared.soy.resourceInlineJs({code: 'require([\'apps/onboarding/onboarding_main\'], function(OnboardingMain) {$j(function(){jive.Onboarding.Controller = new OnboardingMain({trialBean: ' + soy.$$filterNoAutoescape(JSON.stringify(opt_data.trialBean).replace(/</g, '\\u003C').replace(/>/g, '\\u003E').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029')) + ', instanceInfoView: ' + soy.$$filterNoAutoescape(JSON.stringify(opt_data.instanceInfoView).replace(/</g, '\\u003C').replace(/>/g, '\\u003E').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029')) + '});});});'}, output);
  return opt_sb ? '' : output.toString();
};


jive.onboarding.page = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var param17 = new soy.StringBuilder('<!-- BEGIN layout --><div class="j-layout j-layout-sl clearfix j-contained j-rc5"><div class="j-column-wrap-s"><nav class="j-column j-column-s" role="navigation" aria-label="', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.stream.nav'),[])), '">');
  jive.welcome.homeSideNav({homeNavHelper: opt_data.homeNavHelper, selectedLinkID: 'jive-nav-link-get-started'}, param17);
  param17.append('</nav></div><!-- BEGIN large column --><div class="j-column-wrap-l"><div id="j-dynamic-pane" class="j-column j-column-l">');
  jive.onboarding.dynamicPaneContents(opt_data, param17);
  param17.append('</div></div></div>');
  jive.skin.template.main(soy.$$augmentMap(opt_data.templateView, {title: soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('onboarding.page.title'),[])), selectedLinkID: 'jive-nav-link-get-started', bodyClass: 'j-body-home j-body-onboarding', bodyContent: param17.toString()}), output);
  return opt_sb ? '' : output.toString();
};


jive.onboarding.dynamicPaneContents = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  jive.shared.soy.resourceInlineJs({code: '$j(function() {jive.conc.nextTick(function() {if (jive.Onboarding && jive.Onboarding.Controller) {jive.Onboarding.Controller.postPageRender({valueCaseName: \'' + soy.$$escapeHtml(opt_data.viewData.valueCaseName) + '\', instanceName: \'' + soy.$$escapeHtml(opt_data.viewData.instanceName) + '\'' + ((opt_data.viewData.valueCaseName != 'trial') ? ', videoID: \'' + soy.$$escapeHtml(opt_data.viewData.valueCase.i18nData.video) + '\'' : '') + '});}});});'}, output);
  output.append('<div id="j-onboarding" role="main" aria-label="', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.header.text.onboarding'),[])), '"><div class="j-onb-quests ', (opt_data.viewData.valueCaseName == 'trial') ? 'j-onb-quests-trial' : '', ' ', (opt_data.viewData.valueCaseName != 'ob') ? ' j-onb-quests-vc' : '', '"><div class="j-onb-quest-header j-onb-deco-header"><h2 class="font-face-deco">', (opt_data.viewData.valueCaseName == 'trial') ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('onboarding.trialvc.getstarted_name'),[])) : soy.$$escapeHtml(jive.i18n.i18nText(opt_data.viewData.valueCase.i18nData.getstarted_name,[])), '</h2><div class="j-onb-intro">', (opt_data.viewData.valueCaseName == 'trial') ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('onboarding.trialvc.getstarted_desc'),[])) : soy.$$escapeHtml(jive.i18n.i18nText(opt_data.viewData.valueCase.i18nData.getstarted_desc,[opt_data.viewData.instanceName])), '</div><div class="j-onb-post"><a href="#" class="js-onb-show-intro-modal font-color-meta">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('onboarding.welcome.explore.other_ways'),[])), '</a></div></div>', (opt_data.viewData.valueCaseName == 'ob') ? '<div class="j-hdicon j-hdicon-abc" role="img" title="' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('onboarding.trialvc.getstarted_name'),[])) + '"></div>' : (opt_data.viewData.valueCaseName != 'trial' && opt_data.viewData.valueCase.i18nData.video != 'video') ? '<div id="wistia_' + soy.$$escapeHtml(jive.i18n.i18nText(opt_data.viewData.valueCase.i18nData.video,[])) + '" class="j-qvideo-hd" style="width:325px;height:208px;" data-video-width="328" data-video-height="208">&nbsp;</div>' : '', '<div id="j-onboarding-quests-container" class="j-onb-qlist">');
  if (opt_data.viewData.valueCaseName == 'trial') {
    output.append('<nav class="clearfix j-rc4 j-rc-none-bottom">');
    var questList81 = opt_data.viewData.quests;
    var questListLen81 = questList81.length;
    for (var questIndex81 = 0; questIndex81 < questListLen81; questIndex81++) {
      var questData81 = questList81[questIndex81];
      jive.shared.soy.render({templateName: questData81.soyNamespace + '.panelTitle', data: (function() { var map = {}; var pairs = [['panelData', opt_data.viewData], ['questData', questData81]]; for (var i = 0; i < pairs.length; i += 1) { map[pairs[i][0]] = pairs[i][1]; } return map; })(), failGracefully: true}, output);
    }
    output.append('</nav>');
    var questList88 = opt_data.viewData.quests;
    var questListLen88 = questList88.length;
    for (var questIndex88 = 0; questIndex88 < questListLen88; questIndex88++) {
      var questData88 = questList88[questIndex88];
      jive.shared.soy.render({templateName: questData88.soyNamespace + '.panelContent', data: (function() { var map = {}; var pairs = [['panelData', opt_data.viewData], ['questData', questData88]]; for (var i = 0; i < pairs.length; i += 1) { map[pairs[i][0]] = pairs[i][1]; } return map; })(), failGracefully: true}, output);
    }
  } else {
    var questList95 = opt_data.viewData.quests;
    var questListLen95 = questList95.length;
    for (var questIndex95 = 0; questIndex95 < questListLen95; questIndex95++) {
      var questData95 = questList95[questIndex95];
      jive.onboarding.questSection({viewData: opt_data.viewData, questData: questData95}, output);
    }
  }
  output.append('</div><p class="j-onb-post"><a href="#" class="js-onb-show-welcome-modal font-color-meta">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('onboarding.showwelcome.text'),[])), '</a></p><p class="j-onb-post"><a href="#" class="js-hide-onb font-color-meta">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('onboarding.dontshow.text'),[])), '</a></p></div></div>');
  return opt_sb ? '' : output.toString();
};


jive.onboarding.questSection = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="', soy.$$escapeHtml(opt_data.questData.name), '" data-id="', soy.$$escapeHtml(opt_data.questData.name), '" class="j-quest-block j-rc5"><div class="j-quest-header js-quest-header"><h4>', soy.$$escapeHtml(jive.i18n.i18nText(opt_data.questData.i18nData.title,[])), '</h4><p class="j-quest-text">', soy.$$escapeHtml(jive.i18n.i18nText(opt_data.questData.i18nData.desc,[])), '</p></div><div class="js-quest-body j-quest-body">');
  var stepList115 = opt_data.questData.steps;
  var stepListLen115 = stepList115.length;
  for (var stepIndex115 = 0; stepIndex115 < stepListLen115; stepIndex115++) {
    var stepData115 = stepList115[stepIndex115];
    jive.shared.soy.render({templateName: opt_data.questData.soyNamespace + '.startStep.' + stepData115.type, data: (function() { var map = {}; var pairs = [['stepData', stepData115], ['viewData', opt_data.viewData]]; for (var i = 0; i < pairs.length; i += 1) { map[pairs[i][0]] = pairs[i][1]; } return map; })(), failGracefully: true}, output);
  }
  output.append('</div></div>');
  return opt_sb ? '' : output.toString();
};


jive.onboarding.onboardingProgress = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="j-onboarding-progress" class="j-onb-progress j-rc5"><div class="j-complete font-face-deco">');
  jive.shared.soy.i18nHelper({i18nKey: 'onboarding.percent.complete', arg0: soy.$$escapeHtml(opt_data.percentComplete), noAutoEscape: true}, output);
  output.append('</div></div>');
  return opt_sb ? '' : output.toString();
};


jive.onboarding.postHideViewTip = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-tips j-pop-main"><h4 class="font-face-deco">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('onboarding.getstarted.removed.title'),[])), '</h4><p>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('onboarding.getstarted.removed.body'),[])), '</p></div>');
  return opt_sb ? '' : output.toString();
};


jive.onboarding.postExploreOnMyOwnTip = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="js-onboarding-tip j-tips j-pop-main"><h4 class="font-face-deco">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('onboarding.welcome.tip.learnmore.title'),[])), '</h4><p>');
  jive.shared.soy.i18nHelper({i18nKey: 'onboarding.welcome.tip.learnmore.text', arg0: soy.$$escapeHtml(opt_data.instanceName), noAutoEscape: true}, output);
  output.append('</p></div>');
  return opt_sb ? '' : output.toString();
};


jive.onboarding.introModal = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (! opt_data.redisplay) {
    output.append('<div class="jive-modal j-modal j-modal-notitle j-onb-intro-modal j-vc-modal" id="onboarding-welcome" data-curvcid="', soy.$$escapeHtml(opt_data.currentVC.name), '"><header><a href="#" class="j-modal-close-top close" title="', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.close.modal'),[])), '" aria-label="', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.close.modal'),[])), '"><span class="j-close-icon j-ui-elem"></span></a></header><section class="jive-modal-content clearfix j-onboarding-modal"><div class="j-vc-img ', (opt_data.type == 'invited' && opt_data.displayData && opt_data.displayData.inviter) ? 'j-vc-invited' : '', '" style="background: transparent url(', (opt_data.currentVC.name == 'trial') ? '/images/trial/vc-JiveForTeams715x255.jpg' : soy.$$escapeHtml(jive.i18n.i18nText(opt_data.currentVC.i18nData.intro_image,[])), ') no-repeat; background-size:100%"><p>');
    if (opt_data.type == 'invited' && opt_data.displayData && opt_data.displayData.inviter) {
      jive.shared.displayutil.avatar(soy.$$augmentMap(opt_data.displayData.inviter, {hideLink: true, size: 46}), output);
      output.append('<span class="j-inviter">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('onboarding.welcome.Xinvitedyou'),[opt_data.displayData.inviter.displayName])), '</span>');
    } else {
      output.append('<span class="j-inviter">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('onboarding.welcome.general'),[])), '</span>');
    }
    output.append('<strong class="font-color-white">', (opt_data.currentVC.name == 'trial') ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('onboarding.trialvc.intro_name'),[])) : soy.$$escapeHtml(jive.i18n.i18nText(opt_data.currentVC.i18nData.intro_name,[])), '</strong><a href="#" id="j-show-vc-selector" class="j-oways-lnk font-face-deco font-color-meta-light">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('onboarding.welcome.other_ways'),[])), ' <span class="j-hdicon j-oways-arrow"></span></a></p></div><div class="j-vc-intro-bottom clearfix"><div class="j-vc-intro-text" ', (opt_data.currentVC.otherUsers.length == 0) ? 'style="width:auto;"' : '', '>', (opt_data.currentVC.name == 'trial') ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('onboarding.trialvc.intro_desc'),[])) : soy.$$escapeHtml(jive.i18n.i18nText(opt_data.currentVC.i18nData.intro_desc,[])), '</div>');
    if (opt_data.currentVC.otherUsers.length) {
      output.append('<div class="j-vc-other-colleagues"><h4 class="font-color-meta">');
      jive.shared.soy.i18nHelper({i18nKey: 'onboarding.welcome.colleagues.already.usingX', arg0: (opt_data.currentVC.name == 'trial') ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('onboarding.trialvc.intro_name'),[])) : soy.$$escapeHtml(jive.i18n.i18nText(opt_data.currentVC.i18nData.intro_name,[])), noAutoEscape: true}, output);
      output.append('</h4><ul>');
      var userList212 = opt_data.currentVC.otherUsers;
      var userListLen212 = userList212.length;
      for (var userIndex212 = 0; userIndex212 < userListLen212; userIndex212++) {
        var userData212 = userList212[userIndex212];
        output.append('<li>');
        jive.shared.displayutil.avatar(soy.$$augmentMap(userData212, {hideLink: true, size: 46}), output);
        output.append('<strong>', soy.$$escapeHtml(userData212.displayName), '</strong></li>');
      }
      output.append('</ul></div>');
    }
    output.append('</div><div class="j-vc-intro-buttons"><a href="#" class="js-onb-accept j-btn-global j-btn-callout" data-id="', soy.$$escapeHtml(opt_data.currentVC.name), '" data-context="welcome">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('onboarding.welcome.get.started.btn.text'),[])), '</a></div></section></div>');
  } else {
    jive.onboarding.vcSelectModal(opt_data, output);
  }
  return opt_sb ? '' : output.toString();
};


jive.onboarding.vcSelectModal = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="onboarding-welcome" class="jive-modal j-modal j-modal-notitle j-onb-intro-modal j-vc-modal" data-curvcid="', soy.$$escapeHtml(opt_data.currentVC.name), '"><header><h3 class="font-color-white font-face-deco j-vc-select-hd">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('onboarding.welcome.other_ways'),[])), '</h3><a href="#" class="j-modal-close-top close" title="', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.close.modal'),[])), '"><span class="j-close-icon j-ui-elem"></span></a></header><section class="jive-modal-content clearfix j-onboarding-modal"><div class="j-vc-selector j-rc4 clearfix"><ul class="j-vc-select">');
  var vcGroupList239 = opt_data.vcGroups;
  var vcGroupListLen239 = vcGroupList239.length;
  for (var vcGroupIndex239 = 0; vcGroupIndex239 < vcGroupListLen239; vcGroupIndex239++) {
    var vcGroupData239 = vcGroupList239[vcGroupIndex239];
    var vcList240 = vcGroupData239.valueCaseReferences;
    var vcListLen240 = vcList240.length;
    for (var vcIndex240 = 0; vcIndex240 < vcListLen240; vcIndex240++) {
      var vcData240 = vcList240[vcIndex240];
      output.append('<li><a href="#" class="js-vc-name', (vcData240.active) ? ' active' : '', '" data-id="', soy.$$escapeHtml(vcData240.name), '">', (vcData240.name == 'trial') ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('onboarding.trialvc.select_name'),[])) : soy.$$escapeHtml(jive.i18n.i18nText(vcData240.i18nData.select_name,[])), '<span class="selected-arrow"></span></a></li>');
    }
  }
  output.append('</ul><div class="j-vc-display">');
  var vcGroupList257 = opt_data.vcGroups;
  var vcGroupListLen257 = vcGroupList257.length;
  for (var vcGroupIndex257 = 0; vcGroupIndex257 < vcGroupListLen257; vcGroupIndex257++) {
    var vcGroupData257 = vcGroupList257[vcGroupIndex257];
    var vcList258 = vcGroupData257.valueCaseReferences;
    var vcListLen258 = vcList258.length;
    for (var vcIndex258 = 0; vcIndex258 < vcListLen258; vcIndex258++) {
      var vcData258 = vcList258[vcIndex258];
      output.append('<div class="js-vc-info" ', (! vcData258.active) ? 'style="display:none;"' : '', ' data-id="', soy.$$escapeHtml(vcData258.name), '"><div class="j-vc-image"><img src="', (vcData258.name == 'trial') ? 'https://static.jiveon.com/vc/vc-JiveForTeams350x200.jpg' : soy.$$escapeHtml(jive.i18n.i18nText(vcData258.i18nData.select_image,[])), '" /></div><p>', (vcData258.name == 'trial') ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('onboarding.trialvc.select_desc'),[])) : soy.$$escapeHtml(jive.i18n.i18nText(vcData258.i18nData.select_desc,[])), '</p><a href="#" class="js-onb-accept j-btn-global j-btn-callout" data-id="', soy.$$escapeHtml(vcData258.name), '" data-context="selector">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('onboarding.welcome.get.started.btn.text'),[])), '</a></div>');
    }
  }
  output.append('</div></div></section></div>');
  return opt_sb ? '' : output.toString();
};


jive.onboarding.msgFormatHelper = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.noAutoEscape) ? soy.$$escapeHtml(jive.i18n.i18nText(opt_data.i18nKey,[new soydata.VERY_UNSAFE.ordainSanitizedHtml(opt_data.arg0),new soydata.VERY_UNSAFE.ordainSanitizedHtml(opt_data.arg1),new soydata.VERY_UNSAFE.ordainSanitizedHtml(opt_data.arg2),new soydata.VERY_UNSAFE.ordainSanitizedHtml(opt_data.arg3),new soydata.VERY_UNSAFE.ordainSanitizedHtml(opt_data.arg4),new soydata.VERY_UNSAFE.ordainSanitizedHtml(opt_data.arg5),new soydata.VERY_UNSAFE.ordainSanitizedHtml(opt_data.arg6),new soydata.VERY_UNSAFE.ordainSanitizedHtml(opt_data.arg7),new soydata.VERY_UNSAFE.ordainSanitizedHtml(opt_data.arg8),new soydata.VERY_UNSAFE.ordainSanitizedHtml(opt_data.arg9)])) : soy.$$escapeHtml(jive.i18n.i18nText(opt_data.i18nKey,[opt_data.arg0,opt_data.arg1,opt_data.arg2,opt_data.arg3,opt_data.arg4,opt_data.arg5,opt_data.arg6,opt_data.arg7,opt_data.arg8,opt_data.arg9])));
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from trial.soy.
// Please don't edit this file by hand.

goog.provide('jive.trial.banner');
goog.provide('jive.trial.chatFrame');
goog.provide('jive.trial.closeHelp');
goog.provide('jive.trial.modal');
goog.provide('jive.trial.modalContent');
goog.provide('jive.trial.openHelp');
goog.provide('jive.trial.panel');
goog.provide('jive.trial.recentlyCompleted');
goog.provide('jive.trial.renderProgressTip');
goog.provide('jive.trial.titleProgressBar');
goog.provide('jive.trial.trialAdminQueryParams');
goog.provide('jive.trial.trialModal');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.shared.displayutil.avatar');
goog.require('jive.shared.soy.i18nHelper');
goog.require('jive.shared.soy.render');
goog.require('jive.shared.soy.resourceInlineJs');


jive.trial.banner = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  jive.shared.soy.resourceInlineJs({code: '$j(function() {require([\'apps/trial/views/trial_help_view\'], function(HelpView) {jive.Trial.HelpView = new HelpView();});});'}, output);
  if (opt_data.trial.showDaysRemaining) {
    output.append('<div id="jive-trial-banner" class="j-banner trial clearfix"><span class="j-time-remaining font-color-white">');
    jive.shared.soy.i18nHelper({i18nKey: (opt_data.trial.daysRemaining == 1) ? 'trial.header.time.remaining.text.singular' : 'trial.header.time.remaining.text.plural', arg0: (opt_data.trial.daysRemaining == 1) ? '<strong>' + soy.$$escapeHtml(opt_data.trial.daysRemaining) + ' ' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.header.time.remaining.units.singular'),[])) + '</strong>' : '<strong>' + soy.$$escapeHtml(opt_data.trial.daysRemaining) + ' ' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.header.time.remaining.units.plural'),[])) + '</strong>', noAutoEscape: true}, output);
    output.append((opt_data.trial.trialAdmin) ? '<a href="http://www.jiveon.com/purchase" class="j-btn-global j-btn-callout j-buynow">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.panel.buy_jive.link'),[])) + '</a>' : '', '</span></div>');
  }
  output.append('<a href="#" id="jive-trial-help-link" class="j-help j-feedback-corner j-feedback-button j-rc3 noprint"><span class="j-js-chat-indicator j-chat-indicator j-navbadge-count j-ui-elem" style="display: none;"></span><strong class="j-js-title">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.header.jive_help.link'),[])), '</strong></a><div id="jive-trial-alert" class="j-rc5 j-rc-none-top" style="display: none;"></div><div id="jive-trial-curtain" class="j-curtain trial"></div><div id="jive-trial-panel" class="j-panel trial"></div><div id="jive-trial-help-panel" class="j-panel help j-feedback-corner j-rc5"><header class="clearfix"><h3>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.header.jive_help.link'),[])), '</h3><span class="close j-ui-elem j-close-icon">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.header.jive_help.link'),[])), '</span></header>', (opt_data.trial.chat.showLiveChat) ? '<div class="j-help-container j-chat-container j-js-chat-container"><iframe id="chatFrame" src="' + soy.$$escapeHtml(jive.soy.func.buildUrl('/live-chat.jspa')) + '" style="width:100%; min-height:250px;" frameBorder="0"></iframe></div>' : '', '<div class="j-help-container font-color-meta"><p>');
  jive.shared.soy.i18nHelper({i18nKey: 'trial.help.docs_copy', arg0: (opt_data.trial.trialAdmin) ? soy.$$escapeHtml(opt_data.info.adminDocumentationLink) : soy.$$escapeHtml(opt_data.info.documentationLink), arg1: soy.$$escapeHtml(opt_data.info.supportCommunityLink), noAutoEscape: true}, output);
  output.append('</p><p><span>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.help.number'),[])), '<strong>', soy.$$escapeHtml(opt_data.info.telephoneNumber), '</strong></span></p></div></div>');
  return opt_sb ? '' : output.toString();
};


jive.trial.openHelp = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.header.jive_help.link'),[])));
  return opt_sb ? '' : output.toString();
};


jive.trial.closeHelp = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.header.jive_help.link.close'),[])));
  return opt_sb ? '' : output.toString();
};


jive.trial.chatFrame = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<!DOCTYPE html><html><body data-chat-key=', soy.$$escapeHtml(opt_data.chatKey), ' data-user="', soy.$$escapeHtml(JSON.stringify(opt_data.user).replace(/</g, '\\u003C').replace(/>/g, '\\u003E').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029')), '"><link rel="stylesheet" type="text/css" href="', soy.$$escapeHtml(jive.soy.func.resourceUrl(window._jive_base_url,'/7.0.0.0/','','/styles/jive-base.css')), '" /><link rel="stylesheet" type="text/css" href="', soy.$$escapeHtml(jive.soy.func.resourceUrl(window._jive_base_url,'/7.0.0.0/','','/styles/jive.css')), '" /><link rel="stylesheet" type="text/css" href="', soy.$$escapeHtml(jive.soy.func.resourceUrl(window._jive_base_url,'/7.0.0.0/','','/styles/livechat.css')), '" /><script src="', soy.$$escapeHtml(jive.soy.func.resourceUrl(window._jive_base_url,'/7.0.0.0/','','/resources/scripts/jquery/jquery.js')), '"><\/script><script src="', soy.$$escapeHtml(jive.soy.func.resourceUrl(window._jive_base_url,'/7.0.0.0/','','/resources/scripts/live_chat/vendor.js')), '"><\/script><script src="', soy.$$escapeHtml(jive.soy.func.resourceUrl(window._jive_base_url,'/7.0.0.0/','','/resources/scripts/live_chat/controller.js')), '"><\/script></body></html>');
  return opt_sb ? '' : output.toString();
};


jive.trial.panel = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-panel-header clearfix"><h2 class="j-panel-logo">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.panel.discover_jive.title'),[])), '</h2>');
  if (opt_data.data.trialAdmin) {
    output.append('<a href="http://www.jiveon.com/purchase');
    jive.trial.trialAdminQueryParams({trialAdminData: opt_data.data.trialAdminData, instanceURL: opt_data.data.instanceURL}, output);
    output.append('" class="j-buy j-rc2">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.panel.buy_jive.link'),[])), '</a>');
  }
  output.append('</div><div class="j-goal-nav clearfix"><ul>');
  var questList103 = opt_data.data.quests;
  var questListLen103 = questList103.length;
  for (var questIndex103 = 0; questIndex103 < questListLen103; questIndex103++) {
    var questData103 = questList103[questIndex103];
    jive.shared.soy.render({templateName: questData103.soyNamespace + '.panelTitle', data: (function() { var map = {}; var pairs = [['panelData', opt_data.data]]; for (var i = 0; i < pairs.length; i += 1) { map[pairs[i][0]] = pairs[i][1]; } return map; })(), failGracefully: true}, output);
  }
  output.append('</ul><span class="selectedArrow"></span></div><div class="j-goal-container"><div class="j-goals">');
  var questList110 = opt_data.data.quests;
  var questListLen110 = questList110.length;
  for (var questIndex110 = 0; questIndex110 < questListLen110; questIndex110++) {
    var questData110 = questList110[questIndex110];
    jive.shared.soy.render({templateName: questData110.soyNamespace + '.panelContent', data: (function() { var map = {}; var pairs = [['questData', questData110]]; for (var i = 0; i < pairs.length; i += 1) { map[pairs[i][0]] = pairs[i][1]; } return map; })(), failGracefully: true}, output);
  }
  output.append('</div></div>');
  return opt_sb ? '' : output.toString();
};


jive.trial.trialAdminQueryParams = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('?', (opt_data.trialAdminData.email) ? 'email=' + soy.$$escapeUri(opt_data.trialAdminData.email) + '&amp;' : '', (opt_data.trialAdminData.prop.firstName) ? 'firstName=' + soy.$$escapeUri(opt_data.trialAdminData.prop.firstName) + '&amp;' : '', (opt_data.trialAdminData.prop.lastName) ? 'lastName=' + soy.$$escapeUri(opt_data.trialAdminData.prop.lastName) + '&amp;' : '', (opt_data.trialAdminData.prop.profile.primaryPhoneNumber) ? 'phone=' + soy.$$escapeUri(opt_data.trialAdminData.prop.profile.primaryPhoneNumber.phoneNumber) + '&amp;' : '', (opt_data.instanceURL) ? 'instanceURL=' + soy.$$escapeUri(opt_data.instanceURL) : '');
  return opt_sb ? '' : output.toString();
};


jive.trial.titleProgressBar = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-progress-bar-container"><div class="j-progress-bar"><span class="j-index-holder"><span title="', soy.$$escapeHtml(opt_data.percentComplete), '%" style="width: ', soy.$$escapeHtml(opt_data.percentComplete), '%;" class="j-index"></span></span></div></div>');
  return opt_sb ? '' : output.toString();
};


jive.trial.recentlyCompleted = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.users.length > 0) {
    output.append('<div class="j-recently-completed">');
    var userList158 = opt_data.users;
    var userListLen158 = userList158.length;
    for (var userIndex158 = 0; userIndex158 < userListLen158; userIndex158++) {
      var userData158 = userList158[userIndex158];
      jive.shared.displayutil.avatar(soy.$$augmentMap(userData158, {size: 46}), output);
    }
    output.append('</div>');
  } else {
    output.append('<div class="j-nobody"><div class="j-tumbleweeds"></div><div class="j-befirst font-face-deco">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.befirst.label'),[])), '</div><div class="j-arrow-neltgray"></div></div>');
  }
  return opt_sb ? '' : output.toString();
};


jive.trial.renderProgressTip = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  jive.shared.soy.render({templateName: opt_data.template, data: (function() { var map = {}; var pairs = [['nextQuestID', opt_data.nextQuestID]]; for (var i = 0; i < pairs.length; i += 1) { map[pairs[i][0]] = pairs[i][1]; } return map; })(), failGracefully: true}, output);
  return opt_sb ? '' : output.toString();
};


jive.trial.trialModal = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  jive.shared.soy.resourceInlineJs({code: 'require([\'apps/trial/trial_modal\'], function(Modal) {jive.Trial.ModalController = new Modal({trialAdmin : ' + soy.$$escapeHtml(opt_data.trialAdmin) + ((opt_data.invitation) ? ', invitation: ' + soy.$$filterNoAutoescape(JSON.stringify(opt_data.invitation).replace(/</g, '\\u003C').replace(/>/g, '\\u003E').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029')) : '') + '});});'}, output);
  return opt_sb ? '' : output.toString();
};


jive.trial.modal = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="jive-modal" id="jive-modal-trial-teams"><header><h2 class="jive-modal-title jive-modal-trial-teams-title">Welcome</h2></header>');
  jive.trial.modalContent(opt_data, output);
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


jive.trial.modalContent = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<section id="trial-teams-modal" class="jive-modal-content jive-modal-trial-teams-content clearfix"><h2 class="font-color-white">', (opt_data.trialAdmin) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.welcome.header.admin'),[])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.welcome.header'),[])), '</h2><p class="font-color-white ', (opt_data.trialAdmin) ? 'j-trial-p-admin' : '', '">', (opt_data.trialAdmin) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.welcome.text.admin'),[])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.welcome.text'),[])), '</p><div class="j-trial-benefits"><div class="j-team font-color-white"><h4>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.welcome.work_together.label'),[])), '</h4><p>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.welcome.work_together.text'),[])), '</p></div><div class="j-connect font-color-white"><h4>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.welcome.connect.label'),[])), '</h4><p>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.welcome.connect.text'),[])), '</p></div><div class="j-secure font-color-white"><h4>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.welcome.secure.label'),[])), '</h4><p>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.welcome.secure.text'),[])), '</p></div></div><div class="j-form-row j-form-buttons j-rc4 j-rc-none-top"><input type="submit" id="jive-trial-modal-more" class="close jive-form-button jive-form-button-submit j-btn-callout" value="', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.welcome.get_started.button'),[])), '" /><input type="submit" class="close jive-form-button jive-form-button-cancel" value="', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.welcome.explore.button'),[])), '" /></div></section>');
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from generic.soy.
// Please don't edit this file by hand.

goog.provide('jive.onbStep.startStep.completedAriaLabel');
goog.provide('jive.onbStep.startStep.generic');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');


jive.onbStep.startStep.generic = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="js-quest-step j-quest-step"><a href="', soy.$$escapeHtml(opt_data.url), '" class="j-do-step', (opt_data.url == '#') ? ' js-do-step' : '', (opt_data.stepData.state == 'completed') ? ' font-color-meta completed' : '', '" data-type="', soy.$$escapeHtml(opt_data.stepData.type), '" data-id="', soy.$$escapeHtml(opt_data.stepData.name), '">');
  if (opt_data.stepData.state == 'completed') {
    jive.onbStep.startStep.completedAriaLabel(null, output);
  }
  output.append('<strong class="j-steptext">', soy.$$escapeHtml(jive.i18n.i18nText(opt_data.stepData.i18nData.name,[])), '</strong><div class="js-step-complete j-step-complete"></div></a></div>');
  return opt_sb ? '' : output.toString();
};


jive.onbStep.startStep.completedAriaLabel = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="j-508-label">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('trial.quest.completed.label'),[])), ': </span>');
  return opt_sb ? '' : output.toString();
};

;
jive.namespace("Onboarding");define("apps/onboarding/models/onboarding_source",["jquery","underscore","apps/shared/models/rest_service","apps/shared/models/core_deferred","apps/browse/container/model/container_source"],function(e,d,b,a,c){jive.Onboarding.Source=b.extend(function(f,g){f.resourceType="container";f.init=function(h){h=h||{};g.init.call(this,h);this.RESOURCE_ENDPOINT=jive.rest.url("/onboarding");this.placeSource=new c()};this.core=a;this.initializeView=function(i){var h=this.RESOURCE_ENDPOINT;if(!i){i=new jive.conc.Promise()}return this.commonAjaxRequest(i,"GET",{url:h})};this.getStepData=function(i){var h=this.RESOURCE_ENDPOINT+"/"+i;return this.commonAjaxRequest(new jive.conc.Promise(),"GET",{url:h})};this.markStepComplete=function(i){var h=this.RESOURCE_ENDPOINT+"/"+i+"/complete",j=new jive.conc.Promise();j.addCallback(function(k){jive.switchboard.emit("onboarding.state.update",k)});return this.commonAjaxRequest(j,"POST",{url:h})};this.setOnboardingVisible=function(i){var h=this.RESOURCE_ENDPOINT+"/"+i.toString();return this.commonAjaxRequest(new jive.conc.Promise(),"POST",{url:h})};this.newUserExploreOnOwn=function(){var h=this.RESOURCE_ENDPOINT+"/exploreOnOwn";return this.commonAjaxRequest(new jive.conc.Promise(),"POST",{url:h})};this.saveLastViewedQuest=function(h){var i=this.RESOURCE_ENDPOINT+"/lastViewedQuest?q="+h;return this.commonAjaxRequest(new jive.conc.Promise(),"POST",{url:i,data:h})};this.getValueCases=function(i){var h=this.RESOURCE_ENDPOINT+"/valueGroup";return this.commonAjaxRequest(new jive.conc.Promise(),"GET",{url:h,data:i})};this.setValueCase=function(i){var h=this.RESOURCE_ENDPOINT+"/valueCase/"+i;return this.commonAjaxRequest(new jive.conc.Promise(),"POST",{url:h})};this.getSuggestedPlaces=function(m,j,r){var h=this,k,q,o,p=e.trim(j),l=false;if(j){j=j.replace(/[\'\"\?\@\*\n\.,-\/\\#!$%\^&\;:\+{}\[\]\|=\-_`~()<>]/g," ");j=e.trim(j);j=j.replace(/\s{2,}/g," ")}k=j.split(" ");q=d.flatten(d.map(m,function(s){return s.split(" ")}));o=d.without(q.concat(k),"");if(o.length>0){var n={type:["group","space"],limit:20};n.q=o.join(" OR ");var i=jive.app.url({path:"/api/core/v2"});i+="/search/places";i=e.param.querystring(i,n);h.commonAjaxRequest(new jive.conc.Promise(),"GET",{url:i}).addCallback(function(u){var t=[];if(u&&u.data&&u.data.length){l=true;t=e.map(u.data,function(v){return{readableType:v.type,id:v.id}})}if(t.length>0){var s=h.RESOURCE_ENDPOINT+"/suggestedPlaces";h.commonAjaxRequest(new jive.conc.Promise(),"POST",{url:s,data:JSON.stringify({profileData:{bio:p},entities:t})}).addCallback(function(v){var w={suggestedPlaces:v,suggestedPlacesExist:l};r.emitSuccess(w)})}else{r.emitSuccess({suggestedPlacesExist:false})}})}};this.updateUserProfile=function(n,o,k,q){var h=this,p=e.trim(k),j=h.RESOURCE_ENDPOINT+"/profile",m=new jive.conc.Promise(),l=d.map(o,function(r){return function(s){return s.jive.corev3.people.expertise.deleteExpertiseTag({personID:_jive_current_user.ID,tagName:r})}}),i=this.core.runAll([function(r){return r.jive.corev3.people.expertise.endorse(n,{personID:_jive_current_user.ID})}].concat(l));h.commonAjaxRequest(m,"POST",{url:j,data:JSON.stringify({profileData:{bio:p},entities:[]})});e.when(m,i).then(function(){q.emitSuccess()})}});return jive.Onboarding.Source});
;
// This file was automatically generated from item_grid.soy.
// Please don't edit this file by hand.

goog.provide('jive.browse.grid.hierarchyItems');
goog.provide('jive.browse.grid.hierarchyView');
goog.provide('jive.browse.grid.itemGrid');
goog.provide('jive.browse.grid.jiveGenius');
goog.provide('jive.browse.grid.listGrid');
goog.provide('jive.browse.grid.maxPageReached');
goog.provide('jive.browse.grid.moreSearchResultsAvailable');
goog.provide('jive.browse.grid.moreSearchResultsAvailableBody');
goog.provide('jive.browse.grid.moreSearchResultsAvailableHolder');
goog.provide('jive.browse.grid.thumbGrid');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.browse.container.hierarchyContainerItem');
goog.require('jive.shared.soy.i18nHelper');
goog.require('jive.shared.soy.render');


jive.browse.grid.itemGrid = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.maxPageReached) {
    jive.browse.grid.maxPageReached(opt_data, output);
  } else if (opt_data.items.length < 1 && opt_data.noResultTemplateConfig) {
    jive.shared.soy.render(soy.$$augmentMap(opt_data.noResultTemplateConfig, {failGracefully: false}), output);
  } else if (opt_data.itemViewID == null || opt_data.itemViewID == 'thumb') {
    jive.browse.grid.thumbGrid(opt_data, output);
  } else if (opt_data.itemViewID == 'hierarchy' && opt_data.hierarchyViewSupported) {
    jive.browse.grid.hierarchyView(opt_data, output);
  } else {
    jive.browse.grid.listGrid(opt_data, output);
  }
  return opt_sb ? '' : output.toString();
};


jive.browse.grid.thumbGrid = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul class="temp j-browse-thumbnails j-thumb-view">');
  var itemList17 = opt_data.items;
  var itemListLen17 = itemList17.length;
  if (itemListLen17 > 0) {
    for (var itemIndex17 = 0; itemIndex17 < itemListLen17; itemIndex17++) {
      var itemData17 = itemList17[itemIndex17];
      output.append('<li class="js-browse-thumbnail" data-object-type="', soy.$$escapeHtml(itemData17.type), '" data-object-id="', soy.$$escapeHtml(itemData17.id), '" aria-labelledby="label-', soy.$$escapeHtml(itemData17.type), '-', soy.$$escapeHtml(itemData17.id), '">');
      if (opt_data.browseViewID) {
        jive.shared.soy.render({templateName: itemData17.thumbnailTemplate, data: jQuery.extend({}, itemData17, (function() { var map = {}; var pairs = [['browseViewID', opt_data.browseViewID], ['columns', opt_data.itemGridDetailsColumns]]; for (var i = 0; i < pairs.length; i += 1) { map[pairs[i][0]] = pairs[i][1]; } return map; })()), failGracefully: false}, output);
      } else {
        jive.shared.soy.render({templateName: itemData17.thumbnailTemplate, data: itemData17, failGracefully: false}, output);
      }
      output.append('</li>');
    }
  } else {
    output.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.noresults'),[])));
  }
  output.append('</ul>');
  return opt_sb ? '' : output.toString();
};


jive.browse.grid.listGrid = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-browse-details"><table class="j-browse-list" cellspacing="0" cellpadding="0">');
  if (opt_data.itemGridDetailsHeaderTemplate) {
    jive.shared.soy.render({templateName: opt_data.itemGridDetailsHeaderTemplate, data: (function() { var map = {}; var pairs = [['columns', opt_data.itemGridDetailsColumns]]; for (var i = 0; i < pairs.length; i += 1) { map[pairs[i][0]] = pairs[i][1]; } return map; })(), failGracefully: false}, output);
  }
  output.append('<tbody class="j-browse-details-tbody">');
  var itemList52 = opt_data.items;
  var itemListLen52 = itemList52.length;
  if (itemListLen52 > 0) {
    for (var itemIndex52 = 0; itemIndex52 < itemListLen52; itemIndex52++) {
      var itemData52 = itemList52[itemIndex52];
      if (opt_data.browseViewID) {
        jive.shared.soy.render({templateName: itemData52.detailTemplate, data: jQuery.extend({}, itemData52, (function() { var map = {}; var pairs = [['browseViewID', opt_data.browseViewID], ['columns', opt_data.itemGridDetailsColumns], ['currentUserPartner', opt_data.currentUserPartner]]; for (var i = 0; i < pairs.length; i += 1) { map[pairs[i][0]] = pairs[i][1]; } return map; })()), failGracefully: false}, output);
      } else {
        jive.shared.soy.render({templateName: itemData52.detailTemplate, data: jQuery.extend({}, itemData52, (function() { var map = {}; var pairs = [['currentUserPartner', opt_data.currentUserPartner]]; for (var i = 0; i < pairs.length; i += 1) { map[pairs[i][0]] = pairs[i][1]; } return map; })()), failGracefully: false}, output);
      }
    }
  } else {
    output.append('<tr><td colspan="10">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.noresults'),[])), '</td></tr>');
  }
  output.append('</tbody></table></div>');
  return opt_sb ? '' : output.toString();
};


jive.browse.grid.hierarchyView = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-browse-details"><ul class="j-browse-hierarchy">');
  jive.browse.grid.hierarchyItems(opt_data, output);
  output.append('</ul></div>');
  return opt_sb ? '' : output.toString();
};


jive.browse.grid.hierarchyItems = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var itemList75 = opt_data.items;
  var itemListLen75 = itemList75.length;
  if (itemListLen75 > 0) {
    for (var itemIndex75 = 0; itemIndex75 < itemListLen75; itemIndex75++) {
      var itemData75 = itemList75[itemIndex75];
      jive.browse.container.hierarchyContainerItem(soy.$$augmentMap(itemData75, {omitIcon: opt_data.omitIcons}), output);
    }
  } else {
    output.append('<li>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.noresults'),[])), '</li>');
  }
  return opt_sb ? '' : output.toString();
};


jive.browse.grid.jiveGenius = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<section class="j-browse-recommendations"><header class="font-color-meta-light j-recommendation-container-title">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.home.trending.trendingAndPopularNow'),[])), '</header>');
  jive.browse.grid.listGrid({itemGridDetailsHeaderTemplate: opt_data.header, items: opt_data.items.trendingContent, itemGridDetailsColumns: opt_data.columnDetails}, output);
  output.append('</section>');
  if (opt_data.items.recommendations) {
    output.append('<section class="j-browse-recommendations"><header class="font-color-meta-light j-recommendation-container-title">');
    switch (opt_data.type) {
      case 'people':
        output.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.home.recommendations.people'),[])));
        break;
      case 'places':
        output.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.home.recommendations.places'),[])));
        break;
      default:
        output.append(soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('eae.home.recommendations.heading'),[])));
    }
    output.append('</header>');
    jive.browse.grid.listGrid({itemGridDetailsHeaderTemplate: opt_data.header, items: opt_data.items.recommendations, itemGridDetailsColumns: opt_data.columnDetails}, output);
    output.append('</section>');
  }
  return opt_sb ? '' : output.toString();
};


jive.browse.grid.maxPageReached = function(opt_data, opt_sb) {
  opt_data = opt_data || {};
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-browse-info j-empty font-color-meta">', (opt_data.archetypeID) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.' + opt_data.archetypeID + '.max.pages.message'),[])) : 'No archetype specified.', '</div>');
  return opt_sb ? '' : output.toString();
};


jive.browse.grid.moreSearchResultsAvailableHolder = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div id="j-more-search-results-available">');
  jive.browse.grid.moreSearchResultsAvailable(opt_data, output);
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


jive.browse.grid.moreSearchResultsAvailable = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.searchResultsInfo) {
    jive.browse.grid.moreSearchResultsAvailableBody(opt_data.searchResultsInfo, output);
  }
  return opt_sb ? '' : output.toString();
};


jive.browse.grid.moreSearchResultsAvailableBody = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<span class="font-color-meta">');
  jive.shared.soy.i18nHelper({i18nKey: 'browse.moresearchresults', arg0: '<a href="' + soy.$$escapeHtml(jive.soy.func.buildUrl('/search.jspa?view=' + opt_data.searchArchetype + '&q=' + opt_data.searchQuery)) + '">', arg1: '</a>', noAutoEscape: 'true'}, output);
  output.append('</span>');
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from item_user.soy.
// Please don't edit this file by hand.

goog.provide('jive.browse.user.detailExternalUserItem');
goog.provide('jive.browse.user.detailUserItem');
goog.provide('jive.browse.user.flippable');
goog.provide('jive.browse.user.flippable__Cce8');
goog.provide('jive.browse.user.flipperControl');
goog.provide('jive.browse.user.thumbnailExternalUserItem');
goog.provide('jive.browse.user.thumbnailUserItem');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.browse.user.labelDot');
goog.require('jive.browse.user.userProfileImage');
goog.require('jive.eae.acclaim.count');
goog.require('jive.eae.activitystream.include.activityVerbPhrase');
goog.require('jive.people.profile.followLink');
goog.require('jive.people.profile.statusLevel');
goog.require('jive.shared.displayutil.avatar');
goog.require('jive.shared.displayutil.renderAttachmentLink');
goog.require('jive.shared.displayutil.userDisplayNameLink');
goog.require('jive.shared.soy.getCountTextByType');
goog.require('jive.shared.soy.i18nHelper');


jive.browse.user.detailUserItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<tr class="js-browse-row j-people-row ', (! opt_data.enabled) ? 'disabled' : '', '" data-object-id="', soy.$$escapeHtmlAttribute(opt_data.id), '"  data-object-type="', soy.$$escapeHtmlAttribute(opt_data.type), '"><td class="j-td-avatar ', (opt_data.currentUserPartner) ? 'SPECIAL' : '', '">');
  jive.shared.displayutil.avatar(soy.$$augmentMap(opt_data, {size: 32, currentUserPartner: opt_data.currentUserPartner, hidePartnerBadge: true}), output);
  output.append('</td><td class="j-td-user-info"><strong>');
  jive.shared.displayutil.userDisplayNameLink(opt_data, output);
  output.append('</strong> ', (! opt_data.enabled) ? ' <span class="font-color-meta-light">(' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.user.deactivated'),[])) + ')</span>' : '');
  if (opt_data.prop.connections && opt_data.prop.connections.labelsShown) {
    output.append('<ul class="j-label-dot-list">');
    var listList31 = opt_data.prop.connections.friendLists;
    var listListLen31 = listList31.length;
    for (var listIndex31 = 0; listIndex31 < listListLen31; listIndex31++) {
      var listData31 = listList31[listIndex31];
      if (listData31.targetUserAMember) {
        jive.browse.user.labelDot(listData31, output);
      }
    }
    output.append('</ul>');
  }
  output.append((opt_data.prop.isVisibleToPartner) ? '<p class="font-color-meta-light j-browse-external-access"><em>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('partner.browse.external.contributor'),[])) + '</em></p>' : '', '</td>');
  if (opt_data.prop.connections) {
    if (! opt_data.prop.connections.bidirectional) {
      output.append('<td class="j-td-followers center">');
      if (! opt_data.prop.connections.bidirectional && opt_data.prop.connections.followerCount >= 0 && opt_data.enabled && opt_data.prop.connections.linkFollowCounts) {
        var param56 = new soy.StringBuilder();
        jive.shared.soy.getCountTextByType({count: (opt_data.prop.followInfo && opt_data.prop.followInfo.numFollowers) ? soy.$$escapeHtml(opt_data.prop.followInfo.numFollowers) : '0', type: 'showfollowcount'}, param56);
        jive.eae.acclaim.count({command: 'showFollowers', count: soy.$$escapeHtml(opt_data.prop.connections ? opt_data.prop.connections.followerCount : 0), objectId: opt_data.id, objectType: opt_data.type, classes: 'j-user-follow-info', accessibilityLinkLabel: param56.toString()}, output);
      } else {
        output.append('&nbsp;');
      }
      output.append('</td>');
    }
    output.append('<td class="j-td-following center">');
    if (opt_data.prop.connections.followingCount >= 0 && opt_data.enabled && opt_data.prop.connections.linkFollowCounts) {
      var param78 = new soy.StringBuilder();
      jive.shared.soy.getCountTextByType({count: soy.$$escapeHtml(opt_data.prop.connections ? opt_data.prop.connections.followingCount : 0), type: 'showconnectioncount'}, param78);
      jive.eae.acclaim.count({command: 'showConnections', count: soy.$$escapeHtml(opt_data.prop.connections ? opt_data.prop.connections.followingCount : 0), objectId: opt_data.id, objectType: opt_data.type, classes: 'j-user-follow-info', accessibilityLinkLabel: param78.toString()}, output);
    } else {
      output.append('&nbsp;');
    }
    output.append('</td>');
  }
  if (opt_data.columns.latestActivity) {
    output.append('<td class="j-td-activity font-color-meta j-act">');
    if (opt_data.prop.latestActivity) {
      output.append('<span class="j-activity-author">');
      jive.eae.activitystream.include.activityVerbPhrase({object: opt_data.prop.latestActivity.content, type: opt_data.prop.latestActivity.type}, output);
      output.append('</span> <span class="j-excerpt"><a href="', soy.$$filterNoAutoescape(jive.soy.func.buildUrl(opt_data.prop.latestActivity.content.jiveObjectURL)), '" class="j-act-title">', soy.$$filterNoAutoescape(opt_data.prop.latestActivity.content.plainSubjectSnippet), '</a> ');
      jive.shared.displayutil.renderAttachmentLink({object: opt_data.prop.latestActivity.content}, output);
      output.append((opt_data.prop.latestActivity.creationTime) ? ' <span class="font-color-meta-light">(' + soy.$$escapeHtml(opt_data.prop.latestActivity.creationTime) + ')</span> ' : '', '</span>');
    } else {
      output.append('&nbsp;');
    }
    output.append('</td>');
  }
  if (opt_data.columns.statuslevel) {
    output.append('<td class="j-td-statuslevel font-color-meta">');
    if (opt_data.prop.statuslevel && opt_data.prop.statuslevel.enabled) {
      jive.people.profile.statusLevel(soy.$$augmentMap(opt_data.prop.statuslevel, {showPoints: true}), output);
    } else {
      output.append('&nbsp;');
    }
    output.append('</td>');
  }
  output.append((opt_data.columns.dateJoined) ? '<td class="j-td-date font-color-meta">' + ((opt_data.prop.membership) ? soy.$$escapeHtml((opt_data.prop.membership.createDate ? _jive_moment((parseFloat(opt_data.prop.membership.createDate) ? parseFloat(opt_data.prop.membership.createDate) : opt_data.prop.membership.createDate)).lang(_jive_locale.toLowerCase().replace('_','-')).format('LLL') : '')) : (opt_data.creationDate) ? soy.$$escapeHtml((opt_data.creationDate ? _jive_moment((parseFloat(opt_data.creationDate) ? parseFloat(opt_data.creationDate) : opt_data.creationDate)).lang(_jive_locale.toLowerCase().replace('_','-')).format('LLL') : '')) : '') + '</td>' : '', '<td class="j-td-actions">');
  if (opt_data.prop.connections && opt_data.prop.connections.followLinkShown) {
    jive.people.profile.followLink(soy.$$augmentMap(opt_data.prop.connections, {targetUserID: opt_data.id, targetUserDisplayName: opt_data.subject, hideFollowingCount: true, renderLocation: 'browse', streamsAssociatedCount: opt_data.prop.connections.streamsAssociatedBean ? opt_data.prop.connections.streamsAssociatedBean.streamIDs.length : 0}), output);
  }
  output.append((opt_data.prop.directMessageActionLinkShown || opt_data.prop.discussionActionInfo && opt_data.prop.discussionActionInfo.linkShown) ? '<a href="#" class="j-social-button j-browse-action-button j-ui-elem" title="' + soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('global.actions'),[])) + '"><span class="j-ui-elem"><span class="jive-icon-med jive-icon-gear"></span><span class="j-browse-actions-button-text">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.action.btn'),[])) + '</span></span></a>' : '', '<div class="j-menu j-action-popover j-js-browse-actions-container" style="display: none"><ul>', (opt_data.prop.directMessageActionLinkShown) ? '<li><a href="#" class="j-js-create-direct-message" onclick="require([\'apps/direct_messaging/factory\'], function(DirectMessaging) {DirectMessaging.sendMessageToUserIds([' + soy.$$escapeHtmlAttribute(soy.$$escapeJsValue(opt_data.id)) + ']);});return false;"><span>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.action.sendmessage'),[])) + '</span></a></li>' : '', (opt_data.prop.discussionActionInfo && opt_data.prop.discussionActionInfo.linkShown) ? '<li><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl(opt_data.prop.discussionActionInfo.link))) + '" class="js-link-cur-loc-param" data-cur-loc-param-name="cancelURL"><span>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.action.startdiscussion'),[])) + '</span></a></li>' : '', '</ul></div></td></tr>');
  return opt_sb ? '' : output.toString();
};


jive.browse.user.thumbnailUserItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="card"><div class="j-thumb j-people-thumb j-rc4 face card-front js-browse-item ', (! opt_data.enabled) ? 'disabled' : '', ' ');
  jive.browse.user.flippable__Cce8(soy.$$augmentMap(opt_data.prop, {body: 'flippable'}), output);
  output.append('" data-object-type="', soy.$$escapeHtmlAttribute(opt_data.type), '" data-object-id="', soy.$$escapeHtmlAttribute(opt_data.id), '"><header class="js-thumb-header"><h4><a href="', soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl(opt_data.link))), '" title="', soy.$$escapeHtmlAttribute(opt_data.subject), '">', soy.$$escapeHtml(opt_data.subject), '</a></h4></header><section>');
  jive.browse.user.userProfileImage(opt_data, output);
  output.append('<div class="j-user-info clearfix">');
  if (opt_data.prop.connections) {
    if (! opt_data.prop.connections.bidirectional && opt_data.prop.connections.followerCount >= 0 && opt_data.enabled) {
      output.append('<div><span class="font-color-meta-light">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.followers.plural'),[])), '</span><br/>');
      if (opt_data.prop.connections.linkFollowCounts) {
        var param200 = new soy.StringBuilder();
        jive.shared.soy.getCountTextByType({count: (opt_data.prop.followInfo && opt_data.prop.followInfo.numFollowers) ? soy.$$escapeHtml(opt_data.prop.followInfo.numFollowers) : '0', type: 'showfollowcount'}, param200);
        jive.eae.acclaim.count({command: 'showFollowers', count: opt_data.prop.connections.followerCount, objectId: opt_data.id, objectType: opt_data.type, classes: 'j-user-follow-info', accessibilityLinkLabel: param200.toString()}, output);
      }
      output.append('</div>');
    }
    if (opt_data.prop.connections.followingCount >= 0 && opt_data.enabled) {
      output.append('<div><span class="font-color-meta-light">', (opt_data.prop.connections.bidirectional) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.friends'),[])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.following'),[])), '</span><br/>');
      if (opt_data.prop.connections.linkFollowCounts) {
        var param227 = new soy.StringBuilder();
        jive.shared.soy.getCountTextByType({count: soy.$$escapeHtml(opt_data.prop.connections ? opt_data.prop.connections.followingCount : 0), type: 'showconnectioncount'}, param227);
        jive.eae.acclaim.count({command: 'showConnections', count: opt_data.prop.connections.followingCount, objectId: opt_data.id, objectType: opt_data.type, classes: 'j-user-follow-info', accessibilityLinkLabel: param227.toString()}, output);
      }
      output.append('</div>');
    }
  }
  output.append((! opt_data.enabled) ? '<strong class="font-color-meta-light">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.user.deactivated'),[])) + '</strong>' : '', '<div><span class="font-color-meta-light">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('profile.friends.labels.title'),[])), '</span><br/>');
  if (opt_data.prop.connections && opt_data.prop.connections.labelsShown) {
    if (opt_data.prop.connections.labelCount > 4) {
      output.append('<a href=\'#\' class="js-label-count">', soy.$$escapeHtml(opt_data.prop.connections.labelCount), '</a><div class="js-label-details" style="display: none; padding:7px 15px;"><ul class="j-label-dot-list j-quick-menu">');
      var listList249 = opt_data.prop.connections.friendLists;
      var listListLen249 = listList249.length;
      for (var listIndex249 = 0; listIndex249 < listListLen249; listIndex249++) {
        var listData249 = listList249[listIndex249];
        if (listData249.targetUserAMember) {
          jive.browse.user.labelDot(listData249, output);
        }
      }
      output.append('</ul></div>');
    } else {
      output.append('<ul class="j-label-dot-list j-td-user-info">');
      var listList257 = opt_data.prop.connections.friendLists;
      var listListLen257 = listList257.length;
      for (var listIndex257 = 0; listIndex257 < listListLen257; listIndex257++) {
        var listData257 = listList257[listIndex257];
        if (listData257.targetUserAMember) {
          jive.browse.user.labelDot(listData257, output);
        }
      }
      output.append('</ul>');
    }
  } else {
    output.append('<a href=\'#\' class="js-label-count">0</a>');
  }
  output.append('</div></div>', (opt_data.prop.title) ? ' <strong class="j-user-title font-color-meta-light" title="' + soy.$$escapeHtmlAttribute(opt_data.prop.title) + '">' + soy.$$escapeHtml(opt_data.prop.title) + '</strong>' : '', '</section><footer><div>');
  if (opt_data.columns.dateJoined) {
    if (opt_data.prop.membership || opt_data.creationDate) {
      output.append('<span class="font-color-meta">');
      jive.shared.soy.i18nHelper({i18nKey: 'browse.joined.date', arg0: '<strong>', arg1: (opt_data.prop.membership) ? soy.$$escapeHtml((opt_data.prop.membership.createDate ? _jive_moment((parseFloat(opt_data.prop.membership.createDate) ? parseFloat(opt_data.prop.membership.createDate) : opt_data.prop.membership.createDate)).lang(_jive_locale.toLowerCase().replace('_','-')).format('LL') : '')) : (opt_data.creationDate) ? soy.$$escapeHtml((opt_data.creationDate ? _jive_moment((parseFloat(opt_data.creationDate) ? parseFloat(opt_data.creationDate) : opt_data.creationDate)).lang(_jive_locale.toLowerCase().replace('_','-')).format('LL') : '')) : '', arg2: '</strong>', noAutoEscape: true}, output);
      output.append('</span>');
    }
  }
  if (opt_data.columns.statuslevel && opt_data.prop.statuslevel && opt_data.prop.statuslevel.enabled) {
    output.append('<span class="font-color-meta">');
    jive.people.profile.statusLevel(soy.$$augmentMap(opt_data.prop.statuslevel, {showPoints: true}), output);
    output.append('</span>');
  }
  output.append('</div></footer>');
  jive.browse.user.flipperControl(opt_data.prop, output);
  output.append('</div>');
  var param303 = new soy.StringBuilder('<div class="j-thumb-back face card-back" aria-hidden="true"><h4 class="font-color-white">', soy.$$escapeHtml(opt_data.subject), '</h4><ul class="j-social-actions">');
  if (opt_data.prop.connections && opt_data.prop.connections.followLinkShown) {
    param303.append('<li>');
    jive.people.profile.followLink(soy.$$augmentMap(opt_data.prop.connections, {targetUserID: opt_data.id, targetUserDisplayName: opt_data.subject, hideFollowingCount: true, darkButton: true, renderLocation: 'browse', streamsAssociatedCount: opt_data.prop.connections.streamsAssociatedBean ? opt_data.prop.connections.streamsAssociatedBean.streamIDs.length : 0}), param303);
    param303.append('</li>');
  }
  param303.append((opt_data.prop.directMessageActionLinkShown) ? '<li><a href="#" class="js-create-direct-message j-social-action"><span><span class="jive-icon-med jive-icon-direct-message"></span>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.action.sendmessage'),[])) + '</span></a></li>' : '', (opt_data.prop.discussionActionInfo && opt_data.prop.discussionActionInfo.linkShown) ? '<li><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl(opt_data.prop.discussionActionInfo.link))) + '" class="j-social-action js-link-cur-loc-param" data-cur-loc-param-name="cancelURL"><span><span class="jive-icon-med jive-icon-discussion"></span>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.action.startdiscussion'),[])) + '</span></a></li>' : '', '</ul><a href="#" class="j-back-btn j-ui-elem"><span class="j-ui-elem">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.back.button'),[])), '</span></a></div>');
  jive.browse.user.flippable(soy.$$augmentMap(opt_data.prop, {body: param303.toString()}), output);
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


jive.browse.user.detailExternalUserItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<tr class="js-browse-row j-people-row" data-object-id="', soy.$$escapeHtmlAttribute(opt_data.id), '"  data-object-type="', soy.$$escapeHtmlAttribute(opt_data.type), '"><td class="j-td-avatar"><img src="', soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl('/images/jive-avatar-invited.png'))), '" width="32" alt="', soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('avatar.invited.user'),[])), '"></td><td class="j-td-user-info font-color-meta"><strong class="jive-username-link">', soy.$$escapeHtml(opt_data.subject), '</strong></td><td class="j-td-user-info font-color-meta" colspan="4">', (opt_data.prop.invitationDate) ? 'This user was invited on ' + soy.$$escapeHtml((opt_data.prop.invitationDate ? _jive_moment((parseFloat(opt_data.prop.invitationDate) ? parseFloat(opt_data.prop.invitationDate) : opt_data.prop.invitationDate)).lang(_jive_locale.toLowerCase().replace('_','-')).format('LLL') : '')) + '.' : '', '</td></tr>');
  return opt_sb ? '' : output.toString();
};


jive.browse.user.thumbnailExternalUserItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="card"><div class="j-thumb j-people-thumb j-rc4 face card-front js-browse-item" data-object-type="', soy.$$escapeHtmlAttribute(opt_data.type), '" data-object-id="', soy.$$escapeHtmlAttribute(opt_data.id), '"><header class="js-thumb-header"><h4><span class="j-thumb-subject font-color-meta" title="', soy.$$escapeHtmlAttribute(opt_data.subject), '">', soy.$$escapeHtml(opt_data.subject), '</span></h4></header><section><a class="j-user-photo"><img src="', soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl('/images/jive-profile-invited.png'))), '" alt="', soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('profilephoto.invited.user'),[])), '" width="200"/></a><div class="j-user-info clearfix">', (opt_data.prop.invitationDate) ? '<p class="font-color-meta j-user-info-text">This user was invited on <br>' + soy.$$escapeHtml((opt_data.prop.invitationDate ? _jive_moment((parseFloat(opt_data.prop.invitationDate) ? parseFloat(opt_data.prop.invitationDate) : opt_data.prop.invitationDate)).lang(_jive_locale.toLowerCase().replace('_','-')).format('LLL') : '')) + '.</p>' : '', '</div><strong class="j-user-title font-color-meta-light" title=""></strong></section><footer><div></div></footer></div></div>');
  return opt_sb ? '' : output.toString();
};


jive.browse.user.flippable = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((! opt_data.flipperHidden && (opt_data.connections && opt_data.connections.followLinkShown || opt_data.directMessageActionLinkShown || opt_data.discussionActionInfo && opt_data.discussionActionInfo.linkShown)) ? soy.$$filterNoAutoescape(opt_data.body) : '');
  return opt_sb ? '' : output.toString();
};


jive.browse.user.flipperControl = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  jive.browse.user.flippable(soy.$$augmentMap(opt_data, {body: '<a href="#" class="j-card-flipper j-ui-elem">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.actions'),[])) + '</a>'}), output);
  return opt_sb ? '' : output.toString();
};


jive.browse.user.flippable__Cce8 = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((! opt_data.flipperHidden && (opt_data.connections && opt_data.connections.followLinkShown || opt_data.directMessageActionLinkShown || opt_data.discussionActionInfo && opt_data.discussionActionInfo.linkShown)) ? soy.$$filterNoAutoescape(opt_data.body) : '');
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from item_container.soy.
// Please don't edit this file by hand.

goog.provide('jive.browse.container.cardBack');
goog.provide('jive.browse.container.detailContainerItem');
goog.provide('jive.browse.container.flippable');
goog.provide('jive.browse.container.flipperControl');
goog.provide('jive.browse.container.hierarchyContainerItem');
goog.provide('jive.browse.container.projectStatusMessage');
goog.provide('jive.browse.container.thumbnailBlogItem');
goog.provide('jive.browse.container.thumbnailProjectItem');
goog.provide('jive.browse.container.thumbnailSocialGroupItem');
goog.provide('jive.browse.container.thumbnailSpaceItem');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.eae.acclaim.count');
goog.require('jive.eae.activitystream.include.activityVerbPhrase');
goog.require('jive.people.profile.streamsAssociatedCount');
goog.require('jive.shared.displayutil.renderAttachmentLink');
goog.require('jive.shared.soy.getCountTextByType');
goog.require('jive.shared.soy.i18nHelper');
goog.require('jive.soy.share.control');


jive.browse.container.thumbnailSpaceItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="card"><div class="j-thumb j-place-thumb j-space-thumb j-rc4 js-browse-item face card-front ');
  jive.browse.container.flippable(soy.$$augmentMap(opt_data.prop, {body: 'flippable'}), output);
  output.append('" data-object-type="', soy.$$escapeHtml(opt_data.type), '" data-object-id="', soy.$$escapeHtml(opt_data.id), '"><header class="js-thumb-header"><h4><a class="j-place-name" href="', soy.$$escapeHtml(jive.soy.func.buildUrl(opt_data.link)), '" title="', soy.$$escapeHtml(opt_data.subject), '"><span class="', soy.$$escapeHtml(opt_data.iconCss), ' jive-icon-big" role="img" title="', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.access.content.type.' + opt_data.type),[])), '"></span><span class="js-header-text">', soy.$$escapeHtml(opt_data.subject), '</span></a></h4></header><section><a href="', soy.$$escapeHtml(jive.soy.func.buildUrl(opt_data.link)), '" class="j-place-photo j-space-photo">', (opt_data.prop.placeImage && opt_data.prop.placeImage.urlMedium) ? '<img src="' + soy.$$escapeHtml(jive.soy.func.buildUrl(opt_data.prop.placeImage.urlMedium)) + '" alt="' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('cmnty.form.image'),[])) + '" width="200"/>' : '', '</a><div class="j-place-info clearfix"><div><span class="font-color-meta-light">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.followers.plural'),[])), '</span><br/>');
  var param42 = new soy.StringBuilder();
  jive.shared.soy.getCountTextByType({count: (opt_data.prop.followInfo && opt_data.prop.followInfo.numFollowers) ? soy.$$escapeHtml(opt_data.prop.followInfo.numFollowers) : '0', type: 'showfollowcount'}, param42);
  jive.eae.acclaim.count({command: 'showFollowers', count: (opt_data.prop.followInfo && opt_data.prop.followInfo.numFollowers) ? soy.$$escapeHtml(opt_data.prop.followInfo.numFollowers) : '0', objectId: opt_data.id, objectType: opt_data.type, accessibilityLinkLabel: param42.toString()}, output);
  output.append('</div>', (opt_data.prop.childInfo && opt_data.prop.childInfo.hasChildren) ? '<div><span class="font-color-meta-light">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.subspaces.plural'),[])) + '</span><br/><a href="#" class="j-sub-spaces j-view-children" data-activity-type="children" data-objecttype="' + soy.$$escapeHtml(opt_data.type) + '" data-objectid="' + soy.$$escapeHtml(opt_data.id) + '">' + soy.$$escapeHtml(opt_data.prop.childInfo.numChildren) + '</a></div>' : '', '</div>', (opt_data.prop.descSnippet) ? '<article class="font-color-meta"><span>' + soy.$$escapeHtml(opt_data.prop.descSnippet) + '</span></article>' : '', '</section>');
  jive.browse.container.flipperControl(opt_data.prop, output);
  output.append('</div>');
  jive.browse.container.cardBack(opt_data, output);
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


jive.browse.container.thumbnailSocialGroupItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="card"><div class="j-thumb j-place-thumb j-group-thumb j-rc4 js-browse-item face card-front ');
  jive.browse.container.flippable(soy.$$augmentMap(opt_data.prop, {body: 'flippable'}), output);
  output.append('" data-object-type="', soy.$$escapeHtml(opt_data.type), '" data-object-id="', soy.$$escapeHtml(opt_data.id), '"><header class="js-thumb-header"><h4><a class="j-place-name" href="', soy.$$escapeHtml(jive.soy.func.buildUrl(opt_data.link)), '" title="', soy.$$escapeHtml(opt_data.subject), '"><span class="', soy.$$escapeHtml(opt_data.iconCss), ' jive-icon-big" role="img" title="', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.access.content.type.' + opt_data.type),[])), '"></span><span class="js-header-text">', soy.$$escapeHtml(opt_data.subject), '</span></a></h4></header><section><a href="', soy.$$escapeHtml(jive.soy.func.buildUrl(opt_data.link)), '" class="j-place-photo j-space-photo">', (opt_data.prop.placeImage && opt_data.prop.placeImage.urlMedium) ? '<img src="' + soy.$$escapeHtml(jive.soy.func.buildUrl(opt_data.prop.placeImage.urlMedium)) + '" alt="' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('sgroup.image'),[])) + '" width="200"/>' : '', '</a><div class="j-place-info clearfix">');
  if (opt_data.prop.followInfo || opt_data.prop.socialGroupInfo || opt_data.prop.isVisibleToPartner) {
    if (opt_data.prop.followInfo) {
      output.append('<div><span class="font-color-meta-light">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.followers.plural'),[])), '</span><br/>');
      var param120 = new soy.StringBuilder();
      jive.shared.soy.getCountTextByType({count: (opt_data.prop.followInfo && opt_data.prop.followInfo.numFollowers) ? soy.$$escapeHtml(opt_data.prop.followInfo.numFollowers) : '0', type: 'showfollowcount'}, param120);
      jive.eae.acclaim.count({command: 'showFollowers', count: (opt_data.prop.followInfo.numFollowers) ? soy.$$escapeHtml(opt_data.prop.followInfo.numFollowers) : '0', objectId: opt_data.id, objectType: opt_data.type, accessibilityLinkLabel: param120.toString()}, output);
      output.append('</div>');
    }
    if (opt_data.prop.socialGroupInfo) {
      output.append('<div><span class="font-color-meta-light">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.members.plural'),[])), '</span><br/>');
      var param145 = new soy.StringBuilder();
      jive.shared.soy.getCountTextByType({count: (opt_data.prop.socialGroupInfo) ? soy.$$escapeHtml(opt_data.prop.socialGroupInfo.numMembers) : '0', type: 'showmembercount'}, param145);
      jive.eae.acclaim.count({command: 'showMembers', count: (opt_data.prop.socialGroupInfo) ? soy.$$escapeHtml(opt_data.prop.socialGroupInfo.numMembers) : '0', objectId: opt_data.id, objectType: opt_data.type, accessibilityLinkLabel: param145.toString()}, output);
      output.append('</div>');
    }
    if (opt_data.prop.isVisibleToPartner) {
      output.append('<div><span class="font-color-meta-light">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.members.externacontributors.singular'),[])), '</span><br/>');
      jive.eae.acclaim.count({command: 'showExternalContributorMembers', count: (opt_data.prop.socialGroupInfo) ? soy.$$escapeHtml(opt_data.prop.socialGroupInfo.numPartners) : '0', objectId: opt_data.id, objectType: opt_data.type}, output);
      output.append('</div>');
    }
  }
  output.append('</div></section><footer><div class="j-thumb-footer clearfix">', (opt_data.prop.latestActivity && opt_data.prop.latestActivity.creationTime) ? '<span class="j-latest-activity font-color-meta-light">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.heading.latestactivity'),[])) + ': ' + soy.$$escapeHtml((opt_data.prop.latestActivity.creationDate ? _jive_moment((parseFloat(opt_data.prop.latestActivity.creationDate) ? parseFloat(opt_data.prop.latestActivity.creationDate) : opt_data.prop.latestActivity.creationDate)).lang(_jive_locale.toLowerCase().replace('_','-')).format('l') : '')) + '</span>' : '', '<ul class="j-type">', (opt_data.prop.isVisibleToPartner) ? '<li><span class="jive-icon-med jive-icon-partner" title="' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('partner.browse.ext_access'),[])) + '"></span></li>' : '', (opt_data.prop.socialGroupInfo && opt_data.prop.socialGroupInfo.typeName) ? '<li><span class="jive-icon-sml jive-icon-group-' + soy.$$escapeHtml(opt_data.prop.socialGroupInfo.typeName) + '-glyph" title="' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.sgroup.' + opt_data.prop.socialGroupInfo.typeName),[])) + '"></span></li>' : '', '</ul></div></footer>');
  jive.browse.container.flipperControl(opt_data.prop, output);
  output.append('</div>');
  jive.browse.container.cardBack(opt_data, output);
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


jive.browse.container.thumbnailProjectItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="card"><div class="j-thumb j-place-thumb j-project-thumb j-rc4 js-browse-item face card-front ');
  jive.browse.container.flippable(soy.$$augmentMap(opt_data.prop, {body: 'flippable'}), output);
  output.append('" data-object-type="', soy.$$escapeHtml(opt_data.type), '" data-object-id="', soy.$$escapeHtml(opt_data.id), '"><header class="js-thumb-header"><h4><a class="j-place-name" href="', soy.$$escapeHtml(jive.soy.func.buildUrl(opt_data.link)), '" title="', soy.$$escapeHtml(opt_data.subject), '">', (opt_data.prop.projectInfo.statusKey) ? '<span class="jive-icon-project-status-' + soy.$$escapeHtml(opt_data.prop.projectInfo.statusKey) + ' jive-icon-big" role="img" title="' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.access.content.type.' + opt_data.type),[])) + '"></span>' : '', '<span class="js-header-text">', soy.$$escapeHtml(opt_data.subject), '</span></a></h4></header><section><a href="', soy.$$escapeHtml(jive.soy.func.buildUrl(opt_data.link)), '" class="j-place-photo j-project-photo">', (opt_data.prop.placeImage && opt_data.prop.placeImage.urlMedium) ? '<img src="' + soy.$$escapeHtml(jive.soy.func.buildUrl(opt_data.prop.placeImage.urlMedium)) + '" alt="' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('project.form.image'),[])) + '" width="200"/>' : '', '<div class="j-status-bar"><span class="font-color-meta">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.status'),[])), soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.colon'),[])), ' </span><span class="j-proj-status-text"><strong class="j-proj-status font-color-status-', soy.$$escapeHtml(opt_data.prop.projectInfo.statusKey), '">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('project.status.type.' + opt_data.prop.projectInfo.statusKey),[])), '</strong></span></div></a><div class="j-place-info clearfix ', (opt_data.prop.isVisibleToPartner) ? 'j-external' : '', '">');
  if (opt_data.prop.followInfo) {
    output.append('<div><span class="font-color-meta-light">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.followers.plural'),[])), '</span><br/>');
    var param256 = new soy.StringBuilder();
    jive.shared.soy.getCountTextByType({count: (opt_data.prop.followInfo && opt_data.prop.followInfo.numFollowers) ? soy.$$escapeHtml(opt_data.prop.followInfo.numFollowers) : '0', type: 'showfollowcount'}, param256);
    jive.eae.acclaim.count({command: 'showFollowers', count: (opt_data.prop.followInfo.numFollowers) ? soy.$$escapeHtml(opt_data.prop.followInfo.numFollowers) : '0', objectId: opt_data.id, objectType: opt_data.type, accessibilityLinkLabel: param256.toString()}, output);
    output.append('</div>');
  }
  output.append('<div><span class="font-color-meta-light">', (opt_data.prop.projectInfo.overdue) ? '<span class="font-color-normal">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.overdue'),[])) + '</span>' : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.timeleft'),[])), '</span><br/>');
  if (opt_data.prop.projectInfo) {
    output.append('<span><strong>');
    jive.browse.container.projectStatusMessage(opt_data, output);
    output.append('</strong></span>');
  }
  output.append('</div>', (opt_data.prop.isVisibleToPartner) ? '<div class="j-browse-external-access"><span class="font-color-meta-light">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('partner.browse.ext_access.short'),[])) + '</span><br/><span class=""><span class="jive-icon-med jive-icon-partner" title="' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('partner.browse.ext_access'),[])) + '"></span></span></div>' : '', '</div>', (opt_data.prop.descSnippet) ? '<article class="font-color-meta"><span>' + soy.$$escapeHtml(opt_data.prop.descSnippet) + '</span></article>' : '', '</section>');
  jive.browse.container.flipperControl(opt_data.prop, output);
  output.append('</div>');
  jive.browse.container.cardBack(opt_data, output);
  output.append('</div>');
  return opt_sb ? '' : output.toString();
};


jive.browse.container.thumbnailBlogItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="card">Currently Blog containers do not have a visual representation and are not rendered in browse UI.</div>');
  return opt_sb ? '' : output.toString();
};


jive.browse.container.detailContainerItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<tr class="j-place-row js-browse-item" data-object-type="', soy.$$escapeHtml(opt_data.type), '" data-object-id="', soy.$$escapeHtml(opt_data.id), '"><td class="j-td-icon"><img src="', soy.$$escapeHtml(jive.soy.func.resourceUrl(window._jive_base_url,'/7.0.0.0/','','/images/transparent.png')), '" alt="', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.access.content.type.' + opt_data.type),[])), '" class="', soy.$$escapeHtml(opt_data.iconCss), ' jive-icon-med" /></td><td class="j-td-title"><a href="', soy.$$escapeHtml(jive.soy.func.buildUrl(opt_data.link)), '" class="jivecontainerTT-hover-container" data-objectId="', soy.$$escapeHtml(opt_data.id), '" data-objectType="', soy.$$escapeHtml(opt_data.type), '"><strong>', soy.$$escapeHtml(opt_data.subject), '</strong></a>', (opt_data.prop.projectInfo && ! opt_data.prop.projectInfo.archived) ? '<span class="font-color-meta-light j-browse-proj-status"> - <strong class="j-proj-status font-color-status-' + soy.$$escapeHtml(opt_data.prop.projectInfo.statusKey) + '">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('project.status.type.' + opt_data.prop.projectInfo.statusKey),[])) + '</strong></span>' : '');
  if (opt_data.prop.projectInfo && opt_data.prop.projectInfo.archived) {
    output.append('<span> - <strong>');
    jive.browse.container.projectStatusMessage(opt_data, output);
    output.append('</strong></span>');
  }
  output.append((opt_data.prop.socialGroupInfo && opt_data.prop.socialGroupInfo.typeName) ? '<span class="font-color-meta-light j-browse-group-type"> - ' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('sgroup.' + opt_data.prop.socialGroupInfo.typeName),[])) + '</span>' : '', (opt_data.prop.isVisibleToPartner) ? '<span class="font-color-meta-light j-browse-external-access"> - <em>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('partner.browse.ext_access'),[])) + '</em></span>' : '', (opt_data.prop.childInfo && opt_data.prop.childInfo.hasChildren) ? '<span class="font-color-meta-light j-browse-subspaces"> - <a href="#" class="j-sub-spaces j-view-children font-color-meta-light" data-activity-type="children" data-objecttype="' + soy.$$escapeHtml(opt_data.type) + '" data-objectid="' + soy.$$escapeHtml(opt_data.id) + '">' + ((opt_data.prop.childInfo.numChildren == 1) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.subspacecount.singular'),[1])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.subspacecount.plural'),[opt_data.prop.childInfo.numChildren]))) + '</a></span>' : '');
  if (opt_data.prop.socialGroupInfo && opt_data.prop.socialGroupInfo.numMembers) {
    output.append('<p class="j-browse-content-location font-color-meta-light">');
    var param370 = new soy.StringBuilder();
    jive.shared.soy.getCountTextByType({count: (opt_data.prop.socialGroupInfo) ? soy.$$escapeHtml(opt_data.prop.socialGroupInfo.numMembers) : '0', type: 'showmembercount'}, param370);
    jive.eae.acclaim.count({command: 'showMembers', count: (opt_data.prop.socialGroupInfo) ? soy.$$escapeHtml(opt_data.prop.socialGroupInfo.numMembers) : '0', objectId: opt_data.id, objectType: opt_data.type, text: opt_data.prop.socialGroupInfo.numMembers == 1 ? jive.i18n.i18nText(jive.i18n.getMsg('browse.info.membercount.singular'),[new soydata.VERY_UNSAFE.ordainSanitizedHtml('<strong>1</strong>')]) : jive.i18n.i18nText(jive.i18n.getMsg('browse.info.membercount.plural'),[new soydata.VERY_UNSAFE.ordainSanitizedHtml('<strong>' + opt_data.prop.socialGroupInfo.numMembers + '</strong>')]), accessibilityLinkLabel: param370.toString()}, output);
    output.append((opt_data.prop.isVisibleToPartner) ? ' (' + ((opt_data.prop.socialGroupInfo.numPartners == 1) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.membercount.externalcontributors.singular'),[1])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.membercount.externalcontributors.plural'),[opt_data.prop.socialGroupInfo.numPartners]))) + ')' : '', '</p>');
  } else {
    output.append((opt_data.prop.parentInfo) ? '<p class="j-browse-content-location font-color-meta-light">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.in'),[])) + ' <a href="' + soy.$$escapeHtml(jive.soy.func.buildUrl(opt_data.prop.parentInfo.link)) + '" class="font-color-meta-light jivecontainerTT-hover-container" data-objectId="' + soy.$$escapeHtml(opt_data.prop.parentInfo.id) + '" data-objectType="' + soy.$$escapeHtml(opt_data.prop.parentInfo.type) + '">' + soy.$$escapeHtml(opt_data.prop.parentInfo.subject) + '</a></p>' : '');
  }
  output.append('</td><td class="j-td-followers">');
  if (opt_data.prop.followInfo) {
    var param416 = new soy.StringBuilder();
    jive.shared.soy.getCountTextByType({count: (opt_data.prop.followInfo && opt_data.prop.followInfo.numFollowers) ? soy.$$escapeHtml(opt_data.prop.followInfo.numFollowers) : '0', type: 'showfollowcount'}, param416);
    jive.eae.acclaim.count({command: 'showFollowers', count: (opt_data.prop.followInfo.numFollowers) ? soy.$$escapeHtml(opt_data.prop.followInfo.numFollowers) : '0', objectId: opt_data.id, objectType: opt_data.type, accessibilityLinkLabel: param416.toString()}, output);
  }
  output.append('</td>');
  if (opt_data.columns && opt_data.columns.creationDate) {
    output.append('<td class="j-td-date font-color-meta">', soy.$$escapeHtml((opt_data.creationDate ? _jive_moment((parseFloat(opt_data.creationDate) ? parseFloat(opt_data.creationDate) : opt_data.creationDate)).lang(_jive_locale.toLowerCase().replace('_','-')).format('LLL') : '')), '</td>');
  } else {
    output.append('<td class="j-td-activity font-color-meta j-act">');
    if (opt_data.prop.latestActivity) {
      output.append('<span class="j-activity-author">', soy.$$escapeHtml(opt_data.prop.latestActivity.activityUser.displayName), ' ');
      jive.eae.activitystream.include.activityVerbPhrase({object: opt_data.prop.latestActivity.content, type: opt_data.prop.latestActivity.type}, output);
      output.append('</span> <span class="j-excerpt"><a href="', soy.$$filterNoAutoescape(jive.soy.func.buildUrl(opt_data.prop.latestActivity.content.jiveObjectURL)), '" class="j-act-title">', soy.$$filterNoAutoescape(opt_data.prop.latestActivity.content.plainSubjectSnippet), '</a> ');
      jive.shared.displayutil.renderAttachmentLink({object: opt_data.prop.latestActivity.content}, output);
      output.append((opt_data.prop.latestActivity.creationTime) ? ' <span class="font-color-meta-light">(' + soy.$$escapeHtml(opt_data.prop.latestActivity.creationTime) + ')</span> ' : '', '</span>');
    } else {
      output.append('&nbsp');
    }
    output.append('</td>');
  }
  output.append('<td class="j-td-actions">');
  var param461 = new soy.StringBuilder('<a href="#" class="j-social-button j-browse-action-button j-ui-elem" title="', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.actions'),[])), '"><span class="j-ui-elem"><span class="jive-icon-med jive-icon-gear"></span><span class="j-browse-actions-button-text">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.action.btn'),[])), '</span></span></a><div class="j-menu j-js-browse-actions-container" style="display: none"><ul>');
  if (opt_data.prop.followInfo && opt_data.prop.followInfo.showFollowControls) {
    param461.append('<li class="j-js-follow-controls" data-location="browse" data-streamsassoc="', soy.$$escapeHtml(opt_data.prop.followInfo.streamsAssociatedBean.streamIDs.length), '" aria-live="polite" aria-atomic="true"><span class="start-follow"><a href="#" class="j-follow-button" data-objecttype="', soy.$$escapeHtml(opt_data.type), '" data-objectid="', soy.$$escapeHtml(opt_data.id), '"', (opt_data.prop.followInfo.followed) ? ' style="display:none" ' : '', '>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.action.follow'),[])), '</a></span><span class="following"><a href="#" class="j-follow-button" data-objecttype="', soy.$$escapeHtml(opt_data.type), '" data-objectid="', soy.$$escapeHtml(opt_data.id), '"', (! opt_data.prop.followInfo.followed) ? ' style="display:none" ' : '', '>');
    var param492 = new soy.StringBuilder();
    jive.people.profile.streamsAssociatedCount({count: opt_data.prop.followInfo.streamsAssociatedBean.streamIDs.length, renderLocation: 'browse'}, param492);
    jive.shared.soy.i18nHelper({i18nKey: 'profile.friends.following.link', arg0: param492.toString(), noAutoEscape: true}, param461);
    param461.append('</a></span></li>');
  }
  if (opt_data.prop.shareInfo && opt_data.prop.shareInfo.shareable) {
    param461.append('<li>');
    jive.soy.share.control({objectId: opt_data.id, objectType: opt_data.type, type: 'text'}, param461);
    param461.append('</li>');
  }
  param461.append((opt_data.prop.socialGroupInfo && ! opt_data.prop.socialGroupInfo.owner) ? '<li><span><a href="#" class="sgroup-join j-follow-button" data-objectid="' + soy.$$escapeHtml(opt_data.id) + '"' + ((opt_data.prop.socialGroupInfo.member || opt_data.prop.socialGroupInfo.pendingApproval) ? ' style="display:none" ' : '') + '>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.action.joingroup'),[])) + '</a></span><span><a href="#" class="sgroup-leave j-follow-button" data-objectid="' + soy.$$escapeHtml(opt_data.id) + '"' + ((opt_data.prop.socialGroupInfo.member || ! opt_data.prop.socialGroupInfo.pendingApproval) ? ' style="display:none" ' : '') + '>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.action.leavegroup'),[])) + '</a></span></li>' : '', '</ul></div>');
  jive.browse.container.flippable(soy.$$augmentMap(opt_data.prop, {body: param461.toString()}), output);
  output.append('</td>');
  return opt_sb ? '' : output.toString();
};


jive.browse.container.hierarchyContainerItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.prop.beforeInfo) ? '<li class="j-hierarchy-more" data-index-end="' + soy.$$escapeHtml(opt_data.prop.beforeInfo) + '" data-parent-objectid="' + soy.$$escapeHtml(opt_data.prop.parentInfo.id) + '" data-direction="0"><a href="#" title="' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.hierarchy.loadmore.previous10'),[])) + '" ><span class="j-more-label j-rc6">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.hierarchy.loadmore'),[])) + '</span></a></li>' : '', '<li class="j-hierarchy-item" data-object-type="', soy.$$escapeHtml(opt_data.type), '" data-object-id="', soy.$$escapeHtml(opt_data.id), '">', (opt_data.prop.perms.allowedToView) ? '<a href="' + soy.$$escapeHtml(jive.soy.func.buildUrl(opt_data.link)) + '" class="j-anchor-icon jivecontainerTT-hover-container" data-objectid="' + soy.$$escapeHtml(opt_data.id) + '" data-objecttype="' + soy.$$escapeHtml(opt_data.type) + '">' : '', (! opt_data.omitIcon) ? '<span class="' + soy.$$escapeHtml(opt_data.iconCss) + ' jive-icon-med"></span>' : '', '<strong>', soy.$$escapeHtml(opt_data.subject), '</strong>', (opt_data.prop.perms.allowedToView) ? '</a>' : '', (opt_data.prop.recursiveContentCount) ? ' <span class="font-color-meta j-content-count">' + ((opt_data.prop.recursiveContentCount.count == 1) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.hierarchy.contentCount.singular'),[opt_data.prop.recursiveContentCount.count])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.hierarchy.contentCount.plural'),[opt_data.prop.recursiveContentCount.count]))) + '</span>' : '', (opt_data.prop.childInfo && opt_data.prop.childInfo.hasTraversableChildren) ? '<div class="j-td-spaceactions"><a href="#" class="j-sub-spaces j-view-children" data-activity-type="children" data-objecttype="' + soy.$$escapeHtml(opt_data.type) + '" data-objectid="' + soy.$$escapeHtml(opt_data.id) + '" ><span class="j-show-children-msg"' + ((opt_data.prop.childInfo.children) ? 'style="display:none"' : '') + '>' + ((opt_data.prop.childInfo.numTraversableChildren == 1) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.hierarchy.viewsubspaces.singular'),[opt_data.prop.childInfo.numTraversableChildren])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.hierarchy.viewsubspaces.plural'),[opt_data.prop.childInfo.numTraversableChildren]))) + '</span><span class="j-hide-children-msg"' + ((! opt_data.prop.childInfo.children) ? 'style="display:none"' : '') + '>' + ((opt_data.prop.childInfo.numTraversableChildren == 1) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.hierarchy.hidesubspaces.singular'),[opt_data.prop.childInfo.numTraversableChildren])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.hierarchy.hidesubspaces.plural'),[opt_data.prop.childInfo.numTraversableChildren]))) + '</span></a></div>' : '', '<ul class="j-hierarchy-child-holder"', (opt_data.prop.childInfo.children) ? 'data-children-loaded="true" ' : ' style="display:none"', '><div class="j-hierarchy-child-expanded j-ui-elem"> </div>');
  if (opt_data.prop.childInfo && opt_data.prop.childInfo.children) {
    var childList611 = opt_data.prop.childInfo.children;
    var childListLen611 = childList611.length;
    for (var childIndex611 = 0; childIndex611 < childListLen611; childIndex611++) {
      var childData611 = childList611[childIndex611];
      jive.browse.container.hierarchyContainerItem(soy.$$augmentMap(childData611, {omitIcon: opt_data.omitIcon}), output);
    }
  }
  output.append('</ul></li>', (opt_data.prop.afterInfo) ? '<li class="j-hierarchy-more" data-index-start="' + soy.$$escapeHtml(opt_data.prop.afterInfo) + '" data-parent-objectid="' + soy.$$escapeHtml(opt_data.prop.parentInfo.id) + '" data-direction="1"><a href="#" title="' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.hierarchy.loadmore.next10'),[])) + '" ><span class="j-more-label j-rc6">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.hierarchy.loadmore'),[])) + '</span></a></li>' : '');
  return opt_sb ? '' : output.toString();
};


jive.browse.container.flippable = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.followInfo && opt_data.followInfo.showFollowControls || opt_data.shareInfo && opt_data.shareInfo.shareable || opt_data.socialGroupInfo) ? soy.$$filterNoAutoescape(opt_data.body) : '');
  return opt_sb ? '' : output.toString();
};


jive.browse.container.flipperControl = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  jive.browse.container.flippable(soy.$$augmentMap(opt_data, {body: '<a href="#" class="j-card-flipper j-ui-elem">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.actions'),[])) + '</a>'}), output);
  return opt_sb ? '' : output.toString();
};


jive.browse.container.cardBack = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  var param639 = new soy.StringBuilder('<div class="j-thumb-back face card-back" aria-hidden="true"><header><h6 class="font-color-white"><img src="', soy.$$escapeHtml(jive.soy.func.resourceUrl(window._jive_base_url,'/7.0.0.0/','','/images/transparent.png')), '" alt="" class="', soy.$$escapeHtml(opt_data.iconCss), ' jive-icon-med" /> ', soy.$$escapeHtml(opt_data.subject), '</h6>', (opt_data.prop.parentInfo) ? '<p class="j-browse-content-location font-color-meta-light">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.in'),[])) + ' <a href="' + soy.$$escapeHtml(jive.soy.func.buildUrl(opt_data.prop.parentInfo.link)) + '" class="font-color-meta-light jivecontainerTT-hover-container" data-objectId="' + soy.$$escapeHtml(opt_data.prop.parentInfo.id) + '" data-objectType="' + soy.$$escapeHtml(opt_data.prop.parentInfo.type) + '">' + soy.$$escapeHtml(opt_data.prop.parentInfo.subject) + '</a></p>' : '', '</header>', (opt_data.prop.descSnippet) ? '<article class="font-color-meta-light j-browse-place-description"><span>' + soy.$$escapeHtml(opt_data.prop.descSnippet) + '</span></article>' : '', '<ul class="j-social-actions">');
  if (opt_data.prop.followInfo && opt_data.prop.followInfo.showFollowControls) {
    param639.append('<li class="j-js-follow-controls" data-location="browse" data-streamsassoc="', soy.$$escapeHtml(opt_data.prop.followInfo.streamsAssociatedBean.streamIDs.length), '" aria-live="polite" aria-atomic="true"><span class="start-follow"><a class="button j-follow-button j-social-action" href="#" data-objecttype="', soy.$$escapeHtml(opt_data.type), '" data-objectid="', soy.$$escapeHtml(opt_data.id), '" ', (opt_data.prop.followInfo.followed) ? 'style="display: none;"' : '', '><span><span class="jive-icon-med jive-icon-follow"></span>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.action.follow'),[])), '</span></a></span><span class="following"><a class="button j-follow-button j-social-action" href="#" data-objecttype="', soy.$$escapeHtml(opt_data.type), '" data-objectid="', soy.$$escapeHtml(opt_data.id), '" ', (! opt_data.prop.followInfo.followed) ? 'style="display: none;"' : '', '><span><span class="jive-icon-med jive-icon-follow"></span>');
    var param692 = new soy.StringBuilder();
    jive.people.profile.streamsAssociatedCount({count: opt_data.prop.followInfo.streamsAssociatedBean.streamIDs.length, renderLocation: 'browse'}, param692);
    jive.shared.soy.i18nHelper({i18nKey: 'profile.friends.following.link', arg0: param692.toString(), noAutoEscape: true}, param639);
    param639.append('</span></a></span></li>');
  }
  if (opt_data.prop.shareInfo && opt_data.prop.shareInfo.shareable) {
    param639.append('<li>');
    jive.soy.share.control({objectId: opt_data.id, objectType: opt_data.type, type: 'largeButton', icon: true, classes: 'button j-social-action'}, param639);
    param639.append('<li>');
  }
  param639.append((opt_data.prop.socialGroupInfo && ! opt_data.prop.socialGroupInfo.owner) ? '<li><a class="button j-social-action sgroup-join" data-objectid="' + soy.$$escapeHtml(opt_data.id) + '" ' + ((opt_data.prop.socialGroupInfo.member || opt_data.prop.socialGroupInfo.pendingApproval) ? ' style="display: none;" ' : '') + '><span>' + ((opt_data.prop.socialGroupInfo.requestToJoin) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.action.reqjoingroup'),[])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.action.joingroup'),[]))) + '</span></a><a class="button j-social-action sgroup-leave" data-objectid="' + soy.$$escapeHtml(opt_data.id) + '" ' + ((opt_data.prop.socialGroupInfo.member || ! opt_data.prop.socialGroupInfo.pendingApproval) ? ' style="display: none;" ' : '') + '><span>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.action.leavegroup'),[])) + '</span></a></li>' : '', '</ul><a href="#" class="j-back-btn j-ui-elem"><span class="j-ui-elem">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.back.button'),[])), '</span></a></div>');
  jive.browse.container.flippable(soy.$$augmentMap(opt_data.prop, {body: param639.toString()}), output);
  return opt_sb ? '' : output.toString();
};


jive.browse.container.projectStatusMessage = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.prop.projectInfo) ? '<span class="font-color-meta j-proj-status-text-details">' + ((opt_data.prop.projectInfo.archived) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.project.archived'),[])) : (opt_data.prop.projectInfo.complete) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.project.complete'),[])) : (opt_data.prop.projectInfo.overdue) ? (opt_data.prop.projectInfo.years > 0) ? (opt_data.prop.projectInfo.years == 1) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.daysoverdue.singular'),[opt_data.prop.projectInfo.years])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.daysoverdue.plural'),[opt_data.prop.projectInfo.years])) : (opt_data.prop.projectInfo.months > 0) ? (opt_data.prop.projectInfo.months == 1) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.monthsoverdue.singular'),[opt_data.prop.projectInfo.months])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.monthsoverdue.plural'),[opt_data.prop.projectInfo.months])) : (opt_data.prop.projectInfo.days == 1 || opt_data.prop.projectInfo.days == 0) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.daysoverdue.singular'),[1])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.daysoverdue.plural'),[opt_data.prop.projectInfo.days])) : (opt_data.prop.projectInfo.years) ? (opt_data.prop.projectInfo.years == 1) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.daysremaining.singular'),[opt_data.prop.projectInfo.years])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.daysremaining.plural'),[opt_data.prop.projectInfo.years])) : (opt_data.prop.projectInfo.months) ? (opt_data.prop.projectInfo.months == 1) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.monthsremaining.singular'),[opt_data.prop.projectInfo.months])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.monthsremaining.plural'),[opt_data.prop.projectInfo.months])) : (opt_data.prop.projectInfo.days == 1) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.daysremaining.singular'),[opt_data.prop.projectInfo.days])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.info.daysremaining.plural'),[opt_data.prop.projectInfo.days]))) + '</span>' : '');
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from detail_container_header.soy.
// Please don't edit this file by hand.

goog.provide('jive.browse.container.detailContainerHeader');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');


jive.browse.container.detailContainerHeader = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<thead class="j-rc4"><tr><th colspan="2"><strong class="font-color-meta-light">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.heading.place'),[])), '</strong></th><th><strong class="font-color-meta-light">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.heading.followers'),[])), '</strong></th><th><strong class="font-color-meta-light">', (opt_data.columns && opt_data.columns.creationDate) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.heading.creationdate'),[])) : soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.heading.latestactivity'),[])), '</strong></th><th></th></tr></thead>');
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from item_content.soy.
// Please don't edit this file by hand.

goog.provide('jive.browse.content.activityInfoBlock');
goog.provide('jive.browse.content.defaultDetailContentItem');
goog.provide('jive.browse.content.defaultThumbnailContentItem');
goog.provide('jive.browse.content.detailActionPanel');
goog.provide('jive.browse.content.detailContentItem');
goog.provide('jive.browse.content.flippable');
goog.provide('jive.browse.content.flippable__Cce8');
goog.provide('jive.browse.content.flipperControl');
goog.provide('jive.browse.content.thumbnailActionPanel');
goog.provide('jive.browse.content.thumbnailBlogPostItem');
goog.provide('jive.browse.content.thumbnailBookmarkItem');
goog.provide('jive.browse.content.thumbnailContentItem');
goog.provide('jive.browse.content.thumbnailDateBlock');
goog.provide('jive.browse.content.thumbnailDiscussionItem');
goog.provide('jive.browse.content.thumbnailDocumentItem');
goog.provide('jive.browse.content.thumbnailPollItem');
goog.provide('jive.browse.content.thumbnailStatusItem');
goog.provide('jive.browse.content.thumbnailTileStreamItem');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.eae.acclaim.count');
goog.require('jive.people.profile.streamsAssociatedCount');
goog.require('jive.shared.displayutil.avatar');
goog.require('jive.shared.displayutil.userDisplayNameLink');
goog.require('jive.shared.soy.getCountTextByType');
goog.require('jive.shared.soy.i18nHelper');
goog.require('jive.soy.share.control');


jive.browse.content.defaultDetailContentItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<!-- Cannot find template for object type:', soy.$$escapeHtmlRcdata(opt_data.type), ', id:', soy.$$escapeHtmlRcdata(opt_data.id), ' -->');
  return opt_sb ? '' : output.toString();
};


jive.browse.content.detailContentItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<tr class="js-browse-item" data-object-id=', soy.$$escapeHtmlAttributeNospace(opt_data.id), ' data-object-type="', soy.$$escapeHtmlAttribute(opt_data.type), '"><td class="j-td-icon"><img src="', soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.resourceUrl(window._jive_base_url,'/7.0.0.0/','','/images/transparent.png'))), '" alt="', soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('global.access.content.type.' + opt_data.type),[])), '" class="', soy.$$escapeHtmlAttribute(opt_data.iconCss), ' jive-icon-med" /></td><td class="j-td-title"><div><a href="', soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl(opt_data.link))), '">', (opt_data.prop.hasUnreadReplies) ? '<strong>' : '', soy.$$filterNoAutoescape(opt_data.subject), (opt_data.prop.hasUnreadReplies) ? '</strong>' : '', (opt_data.prop.privacyInfo && opt_data.prop.privacyInfo['private']) ? '<span src="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl('/images/transparent.png'))) + '" class="jive-icon-sml jive-icon-content-private' + ((opt_data.prop.privacyInfo.shared) ? '-shared' : '') + '" title="' + ((opt_data.prop.privacyInfo.shared) ? soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('doc.visibility.restricted.tooltip'),[])) : soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('doc.visibility.private.tooltip'),[]))) + '" ></span>' : '', '</a>', (opt_data.prop.isVisibleToPartner) ? '<span class="font-color-meta-light j-browse-external-access"> - <em>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('partner.browse.ext_access'),[])) + '</em></span>' : '', (opt_data.columns && opt_data.columns.parentInfo && opt_data.prop.place) ? '<p class="j-browse-content-location font-color-meta-light">' + ((! (opt_data.prop.place.type == 2020 || opt_data.prop.place.type == 37 && opt_data.prop.author)) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.in'),[])) + ' <a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl(opt_data.prop.place.link))) + '" class="font-color-meta-light jivecontainerTT-hover-container" data-objectId="' + soy.$$escapeHtmlAttribute(opt_data.prop.place.id) + '" data-objectType="' + soy.$$escapeHtmlAttribute(opt_data.prop.place.type) + '">' + soy.$$escapeHtml(opt_data.prop.place.subject) + '</a>' : '') + '</p>' : '', '</div></td><td class="j-td-author">');
  if (opt_data.prop.author) {
    output.append((! opt_data.prop.isOriginalAuthor) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.heading.lastmodifiedby'),[])) + ' ' : '');
    jive.shared.displayutil.userDisplayNameLink(opt_data.prop.author, output);
  }
  output.append('</td><td class="j-td-likes center"><span title="', soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('browse.heading.likecount'),[])), '"><span class="jive-icon-sml jive-icon-meta-like"></span>');
  var param84 = new soy.StringBuilder();
  jive.shared.soy.getCountTextByType({count: soy.$$escapeHtml(opt_data.prop.activityInfo ? opt_data.prop.activityInfo.likeCount : 0), type: 'showlikescount'}, param84);
  jive.eae.acclaim.count({command: 'showLikes', count: soy.$$escapeHtml(opt_data.prop.activityInfo ? opt_data.prop.activityInfo.likeCount : 0), objectId: opt_data.id, objectType: opt_data.type, classes: 'j-meta-number', accessibilityLinkLabel: param84.toString()}, output);
  output.append('</span></td><td class="j-td-bookmarks center"><span title="', soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('browse.heading.bookmarkcount'),[])), '"><span class="jive-icon-sml jive-icon-meta-bookmark"></span>');
  var param99 = new soy.StringBuilder();
  jive.shared.soy.getCountTextByType({count: soy.$$escapeHtml(opt_data.prop.activityInfo ? opt_data.prop.activityInfo.bookmarkCount : 0), type: 'showbookmarkscount'}, param99);
  jive.eae.acclaim.count({command: 'showBookmarks', count: soy.$$escapeHtml(opt_data.prop.activityInfo ? opt_data.prop.activityInfo.bookmarkCount : 0), objectId: opt_data.id, objectType: opt_data.type, classes: 'j-meta-number', accessibilityLinkLabel: param99.toString()}, output);
  output.append('</span></td><td class="j-td-replies center font-color-meta"><span title="', soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('browse.heading.replycount'),[])), '"><img src="', soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.resourceUrl(window._jive_base_url,'/7.0.0.0/','','/images/transparent.png'))), '" alt="" class="jive-icon-sml jive-icon-meta-comment"/>', (opt_data.prop.activityInfo) ? soy.$$escapeHtml(opt_data.prop.activityInfo.replyCount) : '0', '</span></td><td class="j-td-views font-color-meta"><span title="', soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('browse.heading.viewcount'),[])), '">', (opt_data.prop.viewCount && opt_data.prop.viewCount > -1) ? soy.$$escapeHtml(opt_data.prop.viewCount) : '&nbsp;', '</span></td>');
  if (opt_data.columns && opt_data.columns.creationDate) {
    output.append('<td class="j-td-date font-color-meta">', soy.$$escapeHtml((opt_data.creationDate ? _jive_moment((parseFloat(opt_data.creationDate) ? parseFloat(opt_data.creationDate) : opt_data.creationDate)).lang(_jive_locale.toLowerCase().replace('_','-')).format('LLL') : '')), '</td>');
  } else if (opt_data.prop.lastActivityDate) {
    output.append('<td class="j-td-date font-color-meta">', soy.$$escapeHtml((opt_data.prop.lastActivityDate ? _jive_moment((parseFloat(opt_data.prop.lastActivityDate) ? parseFloat(opt_data.prop.lastActivityDate) : opt_data.prop.lastActivityDate)).lang(_jive_locale.toLowerCase().replace('_','-')).format('LLL') : '')), ' <span class="font-color-meta-light" style="display: none">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.by'),[])), ' ');
    jive.shared.displayutil.userDisplayNameLink(opt_data.prop.author, output);
    output.append('</span></td>');
  } else {
    output.append('<td></td>');
  }
  output.append('<td class="j-td-actions">');
  var param140 = new soy.StringBuilder();
  jive.browse.content.detailActionPanel(opt_data, param140);
  jive.browse.content.flippable(soy.$$augmentMap(opt_data.prop, {body: param140.toString()}), output);
  output.append('</td></tr>');
  return opt_sb ? '' : output.toString();
};


jive.browse.content.defaultThumbnailContentItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('\t<!-- Cannot find template for object type:', soy.$$escapeHtmlRcdata(opt_data.type), ', id:', soy.$$escapeHtmlRcdata(opt_data.id), ' -->');
  return opt_sb ? '' : output.toString();
};


jive.browse.content.thumbnailContentItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="card"><div class="j-content-thumb j-doc-thumb j-thumb js-browse-item face card-front ');
  jive.browse.content.flippable__Cce8(soy.$$augmentMap(opt_data.prop, {body: 'flippable'}), output);
  output.append('" data-object-type="', soy.$$escapeHtmlAttribute(opt_data.type), '" data-object-id="', soy.$$escapeHtmlAttribute(opt_data.id), '"><header class="js-thumb-header"><h4><p class="j-508-label" aria-hidden="true" id="label-', soy.$$escapeHtmlAttribute(opt_data.type), '-', soy.$$escapeHtmlAttribute(opt_data.id), '">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.access.content.type.' + opt_data.type),[])), ' ', soy.$$filterNoAutoescape(opt_data.subject), '</p><a href="', soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl(opt_data.link))), '" aria-labelledby="label-', soy.$$escapeHtmlAttribute(opt_data.type), '-', soy.$$escapeHtmlAttribute(opt_data.id), '" title="', soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('global.access.content.type.' + opt_data.type),[])), ' ', soy.$$filterNoAutoescape(opt_data.subject), '"><span class="jive-icon-big ', soy.$$escapeHtmlAttribute(opt_data.iconCss), '" role="img"></span><span class="js-header-text j-header-text" role="header">', soy.$$filterNoAutoescape(opt_data.subject), '</span></a></h4></header><section><article>', (opt_data.prop.binaryPreview) ? (opt_data.prop.binaryPreview.showViewer) ? '<a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl(opt_data.link))) + '" data-preview-url="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl(opt_data.prop.binaryPreview.previewUrl))) + '"><img src="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl(opt_data.prop.binaryPreview.thumbnailUrl))) + '" class="binary-preview" alt="' + soy.$$filterNoAutoescape(opt_data.prop.bodysnippet) + '" title="' + soy.$$filterNoAutoescape(opt_data.prop.bodysnippet) + '"/></a>' : '<a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl(opt_data.prop.binaryPreview.previewUrl))) + '"><img src="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl(opt_data.prop.binaryPreview.thumbnailUrl))) + '" class="binary-preview" alt="' + soy.$$filterNoAutoescape(opt_data.prop.bodysnippet) + '" title="' + soy.$$filterNoAutoescape(opt_data.prop.bodysnippet) + '"/></a>' : (opt_data.prop.bodysnippet) ? soy.$$filterNoAutoescape(opt_data.prop.bodysnippet) : '', '</article>');
  if (opt_data.prop.author) {
    output.append('<div class="j-author-block"><span class="j-avatar-container">');
    jive.shared.displayutil.avatar(soy.$$augmentMap(opt_data.prop.author, {size: 24}), output);
    output.append('</span><div class="j-author-info font-color-meta">');
    jive.browse.content.thumbnailDateBlock(opt_data, output);
    output.append('</div></div>');
  }
  output.append('</section><footer><div class="j-thumb-footer">');
  jive.browse.content.activityInfoBlock(soy.$$augmentMap(opt_data.prop, {objectId: opt_data.id, objectType: opt_data.type}), output);
  output.append('<span class="j-thumb-title-meta">', (opt_data.prop.privacyInfo && opt_data.prop.privacyInfo['private']) ? '<span src="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl('/images/transparent.png'))) + '" class="jive-icon-sml jive-icon-content-private' + ((opt_data.prop.privacyInfo.shared) ? '-shared' : '') + '" title="' + ((opt_data.prop.privacyInfo.shared) ? soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('doc.visibility.restricted.tooltip'),[])) : soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('doc.visibility.private.tooltip'),[]))) + '" ></span>' : '', (opt_data.prop.attachmentInfo && opt_data.prop.attachmentInfo.hasAttachments) ? '<span class="jive-icon-sml jive-icon-content-attachment"></span>' : '', (opt_data.prop.isVisibleToPartner) ? '<span class="jive-icon-med jive-icon-partner" title="' + soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('partner.browse.ext_access'),[])) + '"></span>' : '', '</span></div></footer>');
  jive.browse.content.flipperControl(opt_data.prop, output);
  output.append('</div><div class="j-thumb-back face card-back j-thumb-back-small" aria-hidden="true"><header><h6 class="font-color-white"><span class="jive-icon-med ', soy.$$escapeHtmlAttribute(opt_data.iconCss), '"></span>', soy.$$filterNoAutoescape(opt_data.subject), '</h6>', (opt_data.prop.place) ? '<p class="j-browse-content-location font-color-meta-light">' + ((! (opt_data.prop.place.type == 2020 || opt_data.prop.place.type == 37)) ? soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.in'),[])) + ' <a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl(opt_data.prop.place.link))) + '" class="font-color-meta-light jivecontainerTT-hover-container" data-objectId="' + soy.$$escapeHtmlAttribute(opt_data.prop.place.id) + '" data-objectType="' + soy.$$escapeHtmlAttribute(opt_data.prop.place.type) + '">' + soy.$$escapeHtml(opt_data.prop.place.subject) + '</a>' : '') + '</p>' : '', '</header>');
  jive.browse.content.thumbnailActionPanel(opt_data, output);
  output.append('<a href="#" class="j-back-btn j-ui-elem"><span class="j-ui-elem">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.back.button'),[])), '</span></a></div></div>');
  return opt_sb ? '' : output.toString();
};


jive.browse.content.thumbnailBookmarkItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="card"><div class="j-content-thumb j-bookmark-thumb j-thumb js-browse-item face card-front ');
  jive.browse.content.flippable__Cce8(soy.$$augmentMap(opt_data.prop, {body: 'flippable'}), output);
  output.append('" data-object-type="', soy.$$escapeHtmlAttribute(opt_data.type), '" data-object-id="', soy.$$escapeHtmlAttribute(opt_data.id), '"><header class="js-thumb-header"><h4><a href="', soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl(opt_data.link))), '" title="', soy.$$filterNoAutoescape(opt_data.subject), '"><span class="jive-icon-big jive-icon-external-site" role="img" title="', soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('global.access.content.type.' + opt_data.type),[])), '"></span><span class="js-header-text j-header-text">', soy.$$filterNoAutoescape(opt_data.subject), '</span></a><span class="j-thumb-title-meta">', (opt_data.prop.privacyInfo && opt_data.prop.privacyInfo['private']) ? '<span src="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl('/images/transparent.png'))) + '" class="jive-icon-sml jive-icon-content-private' + ((opt_data.prop.privacyInfo.shared) ? '-shared' : '') + '" title="' + ((opt_data.prop.privacyInfo.shared) ? soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('doc.visibility.restricted.tooltip'),[])) : soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('doc.visibility.private.tooltip'),[]))) + '" ></span>' : '', '</span></h4></header><section><article>', (opt_data.prop.bodysnippet) ? soy.$$filterNoAutoescape(opt_data.prop.bodysnippet) + '<a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl(opt_data.link))) + '" class="j-more">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.action.viewmore'),[])) + '</a>' : '', '</article>');
  jive.browse.content.activityInfoBlock(soy.$$augmentMap(opt_data.prop, {link: opt_data.link, objectId: opt_data.id, objectType: opt_data.type, displaySharedContentCue: opt_data.prop.isVisibleToPartner}), output);
  output.append('<div class="j-author-block"><span class="j-avatar-container">');
  jive.shared.displayutil.avatar(soy.$$augmentMap(opt_data.prop.author, {size: 24}), output);
  output.append('</span><div class="j-author-info font-color-meta">');
  jive.browse.content.thumbnailDateBlock(opt_data, output);
  output.append('</div></div></section>');
  jive.browse.content.flipperControl(opt_data.prop, output);
  output.append('</div><div class="j-thumb-back face card-back" aria-hidden="true"><header><h6 class="font-color-white">', soy.$$filterNoAutoescape(opt_data.subject), '</h6></header>');
  jive.browse.content.thumbnailActionPanel(opt_data, output);
  output.append('<a href="#" class="j-back-btn j-ui-elem"><span class="j-ui-elem">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.back.button'),[])), '</span></a></div></div>');
  return opt_sb ? '' : output.toString();
};


jive.browse.content.thumbnailDocumentItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  jive.browse.content.thumbnailContentItem(opt_data, output);
  return opt_sb ? '' : output.toString();
};


jive.browse.content.thumbnailDiscussionItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  jive.browse.content.thumbnailContentItem(opt_data, output);
  return opt_sb ? '' : output.toString();
};


jive.browse.content.thumbnailBlogPostItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  jive.browse.content.thumbnailContentItem(opt_data, output);
  return opt_sb ? '' : output.toString();
};


jive.browse.content.thumbnailStatusItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  jive.browse.content.thumbnailContentItem(opt_data, output);
  return opt_sb ? '' : output.toString();
};


jive.browse.content.thumbnailTileStreamItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  jive.browse.content.thumbnailContentItem(opt_data, output);
  return opt_sb ? '' : output.toString();
};


jive.browse.content.thumbnailPollItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  jive.browse.content.thumbnailContentItem(opt_data, output);
  return opt_sb ? '' : output.toString();
};


jive.browse.content.thumbnailDateBlock = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  if (opt_data.unmodified || opt_data.columns && opt_data.columns.showCreator) {
    var param367 = new soy.StringBuilder('<span class="j-line2">');
    jive.shared.displayutil.userDisplayNameLink(opt_data.prop.author, param367);
    param367.append('</span>');
    jive.shared.soy.i18nHelper({i18nKey: 'browse.created_by', arg0: '<span>', arg1: '</span>', arg2: param367.toString(), noAutoEscape: true}, output);
  } else {
    var param379 = new soy.StringBuilder('<span class="j-line2">');
    jive.shared.displayutil.userDisplayNameLink(opt_data.prop.author, param379);
    param379.append('</span>');
    jive.shared.soy.i18nHelper({i18nKey: 'browse.updated_by', arg0: '<span>', arg1: '</span>', arg2: param379.toString(), noAutoEscape: true}, output);
  }
  return opt_sb ? '' : output.toString();
};


jive.browse.content.activityInfoBlock = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul class="j-stats"><li><span class="jive-icon-sml jive-icon-meta-like"></span>');
  var param397 = new soy.StringBuilder();
  jive.shared.soy.getCountTextByType({count: (opt_data.activityInfo) ? soy.$$escapeHtml(opt_data.activityInfo.likeCount) : '0', type: 'showlikescount'}, param397);
  jive.eae.acclaim.count({command: 'showLikes', count: (opt_data.activityInfo) ? soy.$$escapeHtml(opt_data.activityInfo.likeCount) : '0', objectId: opt_data.objectId, objectType: opt_data.objectType, classes: 'j-meta-number', accessibilityLinkLabel: param397.toString()}, output);
  output.append('</li><li><span class="jive-icon-sml jive-icon-meta-bookmark"></span>');
  var param418 = new soy.StringBuilder();
  jive.shared.soy.getCountTextByType({count: (opt_data.activityInfo) ? soy.$$escapeHtml(opt_data.activityInfo.bookmarkCount) : '0', type: 'showbookmarkscount'}, param418);
  jive.eae.acclaim.count({command: 'showBookmarks', count: (opt_data.activityInfo) ? soy.$$escapeHtml(opt_data.activityInfo.bookmarkCount) : '0', objectId: opt_data.objectId, objectType: opt_data.objectType, classes: 'j-meta-number', accessibilityLinkLabel: param418.toString()}, output);
  output.append('</li><li><span class="jive-icon-sml jive-icon-meta-comment"></span>', (opt_data.activityInfo) ? soy.$$escapeHtml(opt_data.activityInfo.replyCount) : '0', '</li></ul>');
  return opt_sb ? '' : output.toString();
};


jive.browse.content.flippable = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.followInfo && opt_data.followInfo.showFollowControls || opt_data.shareInfo && opt_data.shareInfo.shareable || opt_data.bookmarkInfo && opt_data.bookmarkInfo.showBookmarkControls) ? soy.$$filterNoAutoescape(opt_data.body) : '');
  return opt_sb ? '' : output.toString();
};


jive.browse.content.flipperControl = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  jive.browse.content.flippable(soy.$$augmentMap(opt_data, {body: '<a href="#" class="j-card-flipper j-ui-elem">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.actions'),[])) + '</a>'}), output);
  return opt_sb ? '' : output.toString();
};


jive.browse.content.thumbnailActionPanel = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<ul class="j-social-actions" role="toolbar" aria-label="', soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('browse.action.label'),[])), '">');
  if (opt_data.prop.followInfo && opt_data.prop.followInfo.showFollowControls) {
    output.append('<li class="j-js-follow-controls" data-location="browse" data-streamsassoc="', soy.$$escapeHtmlAttribute(opt_data.prop.followInfo.streamsAssociatedBean.streamIDs.length), '" aria-live="polite" aria-atomic="true"><span class="start-follow"><a class="button j-follow-button j-social-action" href="#" data-objecttype="', soy.$$escapeHtmlAttribute(opt_data.prop.followInfo.objectType), '" data-objectid="', soy.$$escapeHtmlAttribute(opt_data.prop.followInfo.objectID), '" ', (opt_data.prop.followInfo.followed) ? 'style="display: none;"' : '', '><span><span class="jive-icon-med jive-icon-follow"></span>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.action.follow'),[])), '</span></a></span><span class="following"><a class="button j-follow-button j-social-action" href="#" data-objecttype="', soy.$$escapeHtmlAttribute(opt_data.prop.followInfo.objectType), '" data-objectid="', soy.$$escapeHtmlAttribute(opt_data.prop.followInfo.objectID), '" ', (! opt_data.prop.followInfo.followed) ? 'style="display: none;"' : '', '><span><span class="jive-icon-med jive-icon-follow"></span>');
    var param475 = new soy.StringBuilder();
    jive.people.profile.streamsAssociatedCount({count: opt_data.prop.followInfo.streamsAssociatedBean.streamIDs.length, renderLocation: 'browse'}, param475);
    jive.shared.soy.i18nHelper({i18nKey: 'profile.friends.following.link', arg0: param475.toString(), noAutoEscape: true}, output);
    output.append('</span></a></span></li>');
  }
  if (opt_data.prop.shareInfo && opt_data.prop.shareInfo.shareable) {
    output.append('<li>');
    jive.soy.share.control({objectId: opt_data.id, objectType: opt_data.type, type: 'text', icon: true, classes: 'j-social-action'}, output);
    output.append('</li>');
  }
  output.append((opt_data.prop.bookmarkInfo && opt_data.prop.bookmarkInfo.showBookmarkControls) ? '<li class="js-bookmark"><a class="bookmark-content j-social-action" data-objecttype="' + soy.$$escapeHtmlAttribute(opt_data.type) + '" data-objectid="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" href="#" ' + ((opt_data.prop.bookmarkInfo.bookmarked) ? 'style="display: none;"' : '') + '><span><span class="jive-icon-med jive-icon-bookmark-ribbonaction-grey"></span>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.action.bookmark'),[])) + '</span></a><a class="bookmarked-content j-social-action" data-objecttype="' + soy.$$escapeHtmlAttribute(opt_data.type) + '" data-objectid="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" href="#" ' + ((! opt_data.prop.bookmarkInfo.bookmarked) ? 'style="display: none;"' : '') + '><span><span class="jive-icon-med jive-icon-bookmark-ribbonaction"></span>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.action.unbookmark'),[])) + '</span></a><div class="js-bookmark-actions j-menu" style="display: none;"><ul><li><a href="#" class="edit-bookmark" data-objecttype="' + soy.$$escapeHtmlAttribute(opt_data.type) + '" data-objectid="' + soy.$$escapeHtmlAttribute(opt_data.id) + '">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.edit'),[])) + '</a></li><li><a href="#" class="unbookmark-content" data-objecttype="' + soy.$$escapeHtmlAttribute(opt_data.type) + '" data-objectid="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" data-bookmarkid="' + soy.$$escapeHtmlAttribute(opt_data.prop.bookmarkInfo.bookmarkID) + '">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.remove'),[])) + '</a></li></ul></div></li>' : '', '</ul>');
  return opt_sb ? '' : output.toString();
};


jive.browse.content.detailActionPanel = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<a href="#" class="j-social-button j-browse-action-button j-ui-elem" title="', soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('global.actions'),[])), '"><span class="j-ui-elem"><span class="jive-icon-med jive-icon-gear"></span><span class="j-browse-actions-button-text">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.action.btn'),[])), '</span></span></a><div class="j-menu j-js-browse-actions-container" style="display: none"><ul>');
  if (opt_data.prop.followInfo && opt_data.prop.followInfo.showFollowControls) {
    output.append('<li class="j-js-follow-controls" data-location="browse" data-streamsassoc="', soy.$$escapeHtmlAttribute(opt_data.prop.followInfo.streamsAssociatedBean.streamIDs.length), '"><span class="start-follow"><a class="button j-follow-button" href="#" data-objecttype="', soy.$$escapeHtmlAttribute(opt_data.type), '" data-objectid="', soy.$$escapeHtmlAttribute(opt_data.id), '" ', (opt_data.prop.followInfo.followed) ? 'style="display: none;"' : '', '>', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.action.follow'),[])), '</a></span><span class="following"><a class="button j-follow-button" href="#" data-objecttype="', soy.$$escapeHtmlAttribute(opt_data.type), '" data-objectid="', soy.$$escapeHtmlAttribute(opt_data.id), '" ', (! opt_data.prop.followInfo.followed) ? 'style="display: none;"' : '', '>');
    var param561 = new soy.StringBuilder();
    jive.people.profile.streamsAssociatedCount({count: opt_data.prop.followInfo.streamsAssociatedBean.streamIDs.length, renderLocation: 'browse'}, param561);
    jive.shared.soy.i18nHelper({i18nKey: 'profile.friends.following.link', arg0: param561.toString(), noAutoEscape: true}, output);
    output.append('</a></span></li>');
  }
  if (opt_data.prop.shareInfo && opt_data.prop.shareInfo.shareable) {
    output.append('<li>');
    jive.soy.share.control({objectId: opt_data.id, objectType: opt_data.type, type: 'text'}, output);
    output.append('</li>');
  }
  output.append((opt_data.prop.bookmarkInfo && opt_data.prop.bookmarkInfo.showBookmarkControls) ? '<li class="js-bookmark" ' + ((opt_data.prop.bookmarkInfo.bookmarked) ? 'style="display: none;"' : '') + '><a class="bookmark-content" data-objecttype="' + soy.$$escapeHtmlAttribute(opt_data.type) + '" data-objectid="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" href="#"><span>' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.action.bookmark'),[])) + '</span></a></li><li class="js-bookmark" ' + ((! opt_data.prop.bookmarkInfo.bookmarked) ? 'style="display: none;"' : '') + '><a href="#" class="edit-bookmark bookmarked-content" data-objecttype="' + soy.$$escapeHtmlAttribute(opt_data.type) + '" data-objectid="' + soy.$$escapeHtmlAttribute(opt_data.id) + '">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.action.editbookmark'),[])) + '</a></li><li class="js-bookmark" ' + ((! opt_data.prop.bookmarkInfo.bookmarked) ? 'style="display: none;"' : '') + '><a href="#" class="unbookmark-content bookmarked-content" data-objecttype="' + soy.$$escapeHtmlAttribute(opt_data.type) + '" data-objectid="' + soy.$$escapeHtmlAttribute(opt_data.id) + '" data-bookmarkid="' + soy.$$escapeHtmlAttribute(opt_data.prop.bookmarkInfo.bookmarkID) + '">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.action.removebookmark'),[])) + '</a></li>' : '', '</ul></div>');
  return opt_sb ? '' : output.toString();
};


jive.browse.content.flippable__Cce8 = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.followInfo && opt_data.followInfo.showFollowControls || opt_data.shareInfo && opt_data.shareInfo.shareable || opt_data.bookmarkInfo && opt_data.bookmarkInfo.showBookmarkControls) ? soy.$$filterNoAutoescape(opt_data.body) : '');
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from item_bookmarked_content.soy.
// Please don't edit this file by hand.

goog.provide('jive.browse.bookmark.detailBookmarkedItem');
goog.provide('jive.browse.bookmark.detailBookmarksHeader');
goog.provide('jive.browse.bookmark.popularBookmarkText');
goog.provide('jive.browse.bookmark.thumbnailBookmarkedItem');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');
goog.require('jive.browse.content.activityInfoBlock');
goog.require('jive.browse.content.detailActionPanel');
goog.require('jive.browse.content.flippable');
goog.require('jive.browse.content.flipperControl');
goog.require('jive.browse.content.thumbnailActionPanel');
goog.require('jive.eae.acclaim.count');
goog.require('jive.shared.displayutil.avatar');
goog.require('jive.shared.displayutil.userDisplayNameLink');
goog.require('jive.shared.soy.getCountTextByType');


jive.browse.bookmark.detailBookmarksHeader = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<thead class="j-rc4"><tr><th colspan="2"><strong class="font-color-meta-light">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.heading.content'),[])), '</strong></th><th><strong class="font-color-meta-light">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.heading.author'),[])), '</strong></th>', (opt_data.yourBookmarks) ? '' : '', '<th class="center"><!-- <strong class="font-color-meta-light">', soy.$$escapeHtmlRcdata(jive.i18n.i18nText(jive.i18n.getMsg('browse.heading.likecount'),[])), '</strong> --> <img src="', soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.resourceUrl(window._jive_base_url,'/7.0.0.0/','','/images/transparent.png'))), '" alt="', soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('browse.heading.likecount'),[])), '" class="jive-icon-sml jive-icon-meta-like"/></th><th class="center"><!-- <strong class="font-color-meta-light">', soy.$$escapeHtmlRcdata(jive.i18n.i18nText(jive.i18n.getMsg('browse.heading.bookmarkcount'),[])), '</strong> --> <img src="', soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.resourceUrl(window._jive_base_url,'/7.0.0.0/','','/images/transparent.png'))), '" alt="', soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('browse.heading.bookmarkcount'),[])), '" class="jive-icon-sml jive-icon-meta-bookmark"/></th><th class="center"><!-- <strong class="font-color-meta-light">', soy.$$escapeHtmlRcdata(jive.i18n.i18nText(jive.i18n.getMsg('browse.heading.replycount'),[])), '</strong> --> <img src="', soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.resourceUrl(window._jive_base_url,'/7.0.0.0/','','/images/transparent.png'))), '" alt="', soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('browse.heading.replycount'),[])), '" class="jive-icon-sml jive-icon-meta-comment"/></th><th class="center"><strong class="font-color-meta-light">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.heading.viewcount'),[])), '</strong></th><th><strong class="font-color-meta-light">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.heading.bookmarkedon'),[])), '</strong></th><th></th></tr></thead>');
  return opt_sb ? '' : output.toString();
};


jive.browse.bookmark.detailBookmarkedItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<tr data-object-id=', soy.$$escapeHtmlAttributeNospace(opt_data.markedObjectId), ' data-object-type="', soy.$$escapeHtmlAttribute(opt_data.markedObjectType), '"><td class="j-td-icon"><img src="', soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.resourceUrl(window._jive_base_url,'/7.0.0.0/','','/images/transparent.png'))), '" alt="" class="', soy.$$escapeHtmlAttribute(opt_data.iconCss), ' jive-icon-med" /></td><td class="j-td-title"><a href="', soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl(opt_data.link))), '">', soy.$$filterNoAutoescape(opt_data.subject), (opt_data.prop.privacyInfo && opt_data.prop.privacyInfo['private']) ? '<span src="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl('/images/transparent.png'))) + '" class="jive-icon-sml jive-icon-content-private' + ((opt_data.prop.privacyInfo.shared) ? '-shared' : '') + '" title="' + ((opt_data.prop.privacyInfo.shared) ? soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('doc.visibility.restricted.tooltip'),[])) : soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('doc.visibility.private.tooltip'),[]))) + '" ></span>' : '', '</a>', (opt_data.prop.isVisibleToPartner) ? '<span class="font-color-meta-light j-browse-external-access"> - ' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('partner.browse.ext_access'),[])) + '</span>' : '', '<div>', (opt_data.prop.place) ? '<p class="j-browse-content-location font-color-meta-light">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.in'),[])) + ' <a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl(opt_data.prop.place.link))) + '" class="font-color-meta-light jivecontainerTT-hover-container" data-objectId="' + soy.$$escapeHtmlAttribute(opt_data.prop.place.id) + '" data-objectType="' + soy.$$escapeHtmlAttribute(opt_data.prop.place.type) + '">' + soy.$$escapeHtml(opt_data.prop.place.subject) + '</a></p>' : '', (opt_data.externalURL) ? '<p class="j-browse-content-location font-color-meta-light"><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.externalURL)) + '" class="font-color-meta-light" title="' + soy.$$escapeHtmlAttribute(opt_data.externalURL) + '">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('bookmark.view.visit.site.label'),[])) + '</a></p>' : '', '</div></td><td class="j-td-author">');
  jive.shared.displayutil.userDisplayNameLink(opt_data.prop.author, output);
  output.append('</td><td class="j-td-likes center"><span title="', soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('browse.heading.likecount'),[])), '"><span class="jive-icon-sml jive-icon-meta-like"></span>');
  var param103 = new soy.StringBuilder();
  jive.shared.soy.getCountTextByType({count: soy.$$escapeHtml(opt_data.prop.activityInfo ? opt_data.prop.activityInfo.likeCount : 0), type: 'showlikescount'}, param103);
  jive.eae.acclaim.count({command: 'showLikes', count: soy.$$escapeHtml(opt_data.prop.activityInfo ? opt_data.prop.activityInfo.likeCount : 0), objectId: opt_data.markedObjectId, objectType: opt_data.markedObjectType, classes: 'j-meta-number', accessibilityLinkLabel: param103.toString()}, output);
  output.append('</span></td><td class="j-td-bookmarks center"><span title="', soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('browse.heading.bookmarkcount'),[])), '"><span class="jive-icon-sml jive-icon-meta-bookmark"></span>');
  var param118 = new soy.StringBuilder();
  jive.shared.soy.getCountTextByType({count: soy.$$escapeHtml(opt_data.prop.activityInfo ? opt_data.prop.activityInfo.bookmarkCount : 0), type: 'showbookmarkscount'}, param118);
  jive.eae.acclaim.count({command: 'showBookmarks', count: soy.$$escapeHtml(opt_data.prop.activityInfo ? opt_data.prop.activityInfo.bookmarkCount : 0), objectId: opt_data.markedObjectId, objectType: opt_data.markedObjectType, classes: 'j-meta-number', accessibilityLinkLabel: param118.toString()}, output);
  output.append('</span></td><td class="j-td-replies center font-color-meta"><span title="', soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('browse.heading.replycount'),[])), '"><img src="', soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.resourceUrl(window._jive_base_url,'/7.0.0.0/','','/images/transparent.png'))), '" alt="" class="jive-icon-sml jive-glyph-comment"/>', (opt_data.prop.activityInfo) ? soy.$$escapeHtml(opt_data.prop.activityInfo.replyCount) : '0', '</span></td><td class="j-td-views center font-color-meta"><span title="', soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('browse.heading.viewcount'),[])), '">', (opt_data.prop.viewCount > -1) ? soy.$$escapeHtml(opt_data.prop.viewCount) : '&nbsp;', '</span></td>', (opt_data.prop.lastActivityDate) ? '<td class="j-td-date font-color-meta">' + soy.$$escapeHtml((opt_data.prop.lastActivityDate ? _jive_moment((parseFloat(opt_data.prop.lastActivityDate) ? parseFloat(opt_data.prop.lastActivityDate) : opt_data.prop.lastActivityDate)).lang(_jive_locale.toLowerCase().replace('_','-')).format('LLL') : '')) + '</td>' : '<td class="j-td-date font-color-meta">&nbsp;</td>', '<td class="j-td-actions">');
  jive.browse.content.detailActionPanel({id: opt_data.markedObjectId, type: opt_data.markedObjectType, prop: opt_data.prop}, output);
  output.append('</td></tr>');
  return opt_sb ? '' : output.toString();
};


jive.browse.bookmark.thumbnailBookmarkedItem = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="card j-small-card" role="article" aria-labelledby="bookmark-subject-', soy.$$escapeHtmlAttribute(opt_data.id), '" ', (opt_data.prop.bodysnippet) ? 'aria-describedby="bookmark-notes-' + soy.$$escapeHtmlAttribute(opt_data.id) + '"' : '', '><div class="j-content-thumb j-bookmarked-thumb ', (opt_data.yourBookmarks) ? 'j-your-bookmark-thumb' : '', ' j-thumb js-browse-item face card-front ');
  jive.browse.content.flippable(soy.$$augmentMap(opt_data.prop, {body: 'flippable'}), output);
  output.append('" data-object-type="', soy.$$escapeHtmlAttribute(opt_data.type), '" data-object-id="', soy.$$escapeHtmlAttribute(opt_data.id), '"><header class="js-thumb-header"><h4><a href="', soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl(opt_data.link))), '" title="', soy.$$filterNoAutoescape(opt_data.subject), '"><span title="', soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('global.access.content.type.' + opt_data.markedObjectType),[])), '" class="jive-icon-big ', soy.$$escapeHtmlAttribute(opt_data.iconCss), '" role="img"></span><span class="js-header-text j-header-text" id="bookmark-subject-', soy.$$escapeHtmlAttribute(opt_data.id), '">', soy.$$filterNoAutoescape(opt_data.subject), '</span></a></h4></header><section>', (opt_data.externalURL) ? '<p class="j-bookmarked-link"><span class="jive-icon-sml jive-icon-link2"></span><a href="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(opt_data.externalURL)) + '" title="' + soy.$$escapeHtmlAttribute(opt_data.externalURL) + '">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('bookmark.view.visit.site.label'),[])) + '</a></p>' : '', (opt_data.yourBookmarks) ? '<p id="bookmark-notes-' + soy.$$escapeHtmlAttribute(opt_data.id) + '"><span class="jive-icon-sml jive-glyph-notes" role="img" title="' + soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('bookmarks.create.notes.label'),[])) + '"></span>' + ((opt_data.prop.bodysnippet) ? soy.$$filterNoAutoescape(opt_data.prop.bodysnippet) : '<em class="font-color-meta-light">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.bookmarks.nonotes'),[])) + '</em>') + '</p>' : '<article id="bookmark-notes-' + soy.$$escapeHtmlAttribute(opt_data.id) + '">' + ((opt_data.prop.bodysnippet) ? soy.$$filterNoAutoescape(opt_data.prop.bodysnippet) : '') + '</article>');
  if (opt_data.prop.bookmarkTags && opt_data.prop.bookmarkTags.tags && opt_data.prop.bookmarkTags.tags.length > 0) {
    output.append('<p><span class="jive-icon-sml jive-icon-tag"></span>');
    var tagEntryList228 = opt_data.prop.bookmarkTags.tags;
    var tagEntryListLen228 = tagEntryList228.length;
    for (var tagEntryIndex228 = 0; tagEntryIndex228 < tagEntryListLen228; tagEntryIndex228++) {
      var tagEntryData228 = tagEntryList228[tagEntryIndex228];
      output.append('<a href="', soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl('/tags#/?tags=' + tagEntryData228.tag))), '" title="', soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('tag.link.content.tagged.tooltip'),[tagEntryData228.tag])), '">', (tagEntryData228.abbreviatedTag) ? soy.$$escapeHtml(tagEntryData228.abbreviatedTag) : soy.$$escapeHtml(tagEntryData228.tag), '</a>', (! (tagEntryIndex228 == tagEntryListLen228 - 1)) ? ', ' : '');
    }
    output.append((opt_data.prop.bookmarkTags.tagsRemaining > 0) ? (opt_data.yourBookmarks && opt_data.canEdit) ? ' (<a href="#" class="edit-bookmark" data-objecttype="' + soy.$$escapeHtmlAttribute(opt_data.markedObjectType) + '" data-objectid="' + soy.$$escapeHtmlAttribute(opt_data.markedObjectId) + '">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.bookmarks.more.tags'),[opt_data.prop.bookmarkTags.tagsRemaining])) + '</a>)' : '' : '', '</p>');
  }
  output.append((opt_data.yourBookmarks && opt_data.canEdit) ? '<p><span class="jive-icon-sml jive-glyph-edit"></span><a href="#" role="button" class="edit-bookmark" data-objecttype="' + soy.$$escapeHtmlAttribute(opt_data.markedObjectType) + '" data-objectid="' + soy.$$escapeHtmlAttribute(opt_data.markedObjectId) + '">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.bookmarks.edit'),[])) + '</a></p>' : '', '</section><footer>');
  if (! opt_data.popularBookmarks && ! opt_data.yourBookmarks) {
    output.append('<div class="j-sort-meta font-color-meta j-author-block" ><span class="j-avatar-container">');
    jive.shared.displayutil.avatar(soy.$$augmentMap(opt_data.prop.author, {size: 24}), output);
    output.append('</span><div class="j-author-info font-color-meta">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('browse.bookmarks.time'),[new soydata.VERY_UNSAFE.ordainSanitizedHtml('<strong>' + opt_data.creationTime + '</strong>')])), ' ', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.by'),[])), ' <span class="j-line2">');
    jive.shared.displayutil.userDisplayNameLink(opt_data.prop.author, output);
    output.append('</span></div></div>');
  }
  if (opt_data.popularBookmarks) {
    jive.browse.bookmark.popularBookmarkText(opt_data, output);
  }
  output.append((opt_data.yourBookmarks) ? '' : '', '<div class="j-thumb-footer" data-object-id="', soy.$$escapeHtmlAttribute(opt_data.markedObjectId), '" data-object-type="', soy.$$escapeHtmlAttribute(opt_data.markedObjectType), '">');
  jive.browse.content.activityInfoBlock(soy.$$augmentMap(opt_data.prop, {objectId: opt_data.markedObjectId, objectType: opt_data.markedObjectType, displaySharedContentCue: opt_data.prop.isVisibleToPartner}), output);
  output.append('<span class="j-thumb-title-meta">', (opt_data.prop.privacyInfo && opt_data.prop.privacyInfo['private']) ? '<span src="' + soy.$$escapeHtmlAttribute(soy.$$filterNormalizeUri(jive.soy.func.buildUrl('/images/transparent.png'))) + '" class="jive-icon-sml jive-icon-content-private' + ((opt_data.prop.privacyInfo.shared) ? '-shared' : '') + '" title="' + ((opt_data.prop.privacyInfo.shared) ? soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('doc.visibility.restricted.tooltip'),[])) : soy.$$escapeHtmlAttribute(jive.i18n.i18nText(jive.i18n.getMsg('doc.visibility.private.tooltip'),[]))) + '" ></span>' : '', (opt_data.prop.attachmentInfo && opt_data.prop.attachmentInfo.hasAttachments) ? '<span class="jive-icon-sml jive-icon-content-attachment"></span>' : '', '</span></div></footer>');
  jive.browse.content.flipperControl(opt_data.prop, output);
  output.append('</div><div class="j-thumb-back face card-back j-thumb-back-small" aria-hidden="true"><header><h6 class="font-color-white"><span class="jive-icon-med ', soy.$$escapeHtmlAttribute(opt_data.iconCss), '"></span>', soy.$$filterNoAutoescape(opt_data.subject), '</h6></header>');
  jive.browse.content.thumbnailActionPanel({id: opt_data.markedObjectId, type: opt_data.markedObjectType, prop: opt_data.prop}, output);
  output.append('<a href="#" class="j-back-btn j-ui-elem"><span class="j-ui-elem">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.back.button'),[])), '</span></a></div></div>');
  return opt_sb ? '' : output.toString();
};


jive.browse.bookmark.popularBookmarkText = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append('<div class="j-sort-meta font-color-meta js-bookmark-popular-text">', soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg(opt_data.popularRangeKey),[opt_data.popularCount])), '</div>');
  return opt_sb ? '' : output.toString();
};

;
// This file was automatically generated from create_group.soy.
// Please don't edit this file by hand.

goog.provide('jive.onbStep.create_group.pageTips');

goog.require('soy');
goog.require('soydata');
goog.require('soy.StringBuilder');


jive.onbStep.create_group.pageTips = function(opt_data, opt_sb) {
  var output = opt_sb || new soy.StringBuilder();
  output.append((opt_data.renderLocation == 'group-template') ? '<div class="j-tips inline js-onboarding-tip" style="top: -30px;"><div class="d-' + soy.$$escapeHtml(opt_data.renderLocation) + '-tip"><h4 class="font-face-deco">' + soy.$$escapeHtml(jive.i18n.i18nText(opt_data.viewData.i18nData.create_group_group_template_label,[])) + '</h4><p class="font-color-meta">' + soy.$$escapeHtml(jive.i18n.i18nText(opt_data.viewData.i18nData.create_group_group_template_text,[])) + '</p></div><span class="j-tiparrow-e j-tarrow" style="top: 30px"></span></div>' : (opt_data.renderLocation == 'group-name') ? '<div class="j-tips inline js-onboarding-tip" style="top: 0;"><div class="d-' + soy.$$escapeHtml(opt_data.renderLocation) + '-tip"><h4 class="font-face-deco">' + soy.$$escapeHtml(jive.i18n.i18nText(opt_data.viewData.i18nData.create_group_groupname_label,[])) + '</h4><p class="font-color-meta">' + soy.$$escapeHtml(jive.i18n.i18nText(opt_data.viewData.i18nData.create_group_groupname_text,[])) + '</p></div><span class="j-tiparrow-e j-tarrow" style="top: 30px"></span></div>' : (opt_data.renderLocation == 'group-img') ? '<div class="j-tips inline js-onboarding-tip" style="top: 40px;"><div class="d-' + soy.$$escapeHtml(opt_data.renderLocation) + '-tip"><h4 class="font-color-meta font-face-deco optional">' + soy.$$escapeHtml(jive.i18n.i18nText(opt_data.viewData.i18nData.create_group_flair_label,[])) + '</h4><p class="font-color-meta">' + soy.$$escapeHtml(jive.i18n.i18nText(opt_data.viewData.i18nData.create_group_flair_text2,[])) + '</p><p class="font-color-meta">' + soy.$$escapeHtml(jive.i18n.i18nText(opt_data.viewData.i18nData.create_group_flair_text1,[])) + '</p></div><span class="j-tiparrow-e j-tarrow" style="top: 20px"></span><span class="j-tiparrow-e j-tarrow" style="top: 20px; right: -350px;"></span></div>' : (opt_data.renderLocation == 'group-type') ? '<div class="j-tips inline p-bar js-onboarding-tip" style="top: -30px; visibility: visible; z-index: 100;"><div class="d-' + soy.$$escapeHtml(opt_data.renderLocation) + '-tip"><h4 class="font-face-deco">' + soy.$$escapeHtml(jive.i18n.i18nText(opt_data.viewData.i18nData.create_group_type_label,[])) + '</h4><p class="font-color-meta">' + soy.$$escapeHtml(jive.i18n.i18nText(opt_data.viewData.i18nData.create_group_type_text,[])) + '</p></div><span class="j-tiparrow-e j-tarrow" style="top: 50px"></span></div>' : (opt_data.renderLocation == 'submit') ? '<div class="j-tips inline p-bar js-onboarding-tip" style="top: -10px;"><div class="d-' + soy.$$escapeHtml(opt_data.renderLocation) + '-tip"><h4 class="font-face-deco">' + soy.$$escapeHtml(jive.i18n.i18nText(opt_data.viewData.i18nData.create_group_alldone_label,[])) + '</h4><p class="font-color-meta">' + soy.$$escapeHtml(jive.i18n.i18nText(opt_data.viewData.i18nData.create_group_alldone_text,[])) + '</p></div><span class="j-tiparrow-e j-tarrow" style="top: 20px"></span></div>' : (opt_data.renderLocation == 'view-group') ? '<div class="j-pop js-pop popover js-onboarding-tip" style="position: absolute; top: 50px; left: 50%; margin-left: -175px; visibility: visible; z-index: 100;"><div class="j-tips wide j-banner-tip d-' + soy.$$escapeHtml(opt_data.renderLocation) + '-tip j-pop-main"><h4 class="j-qtip-header font-face-deco">' + soy.$$escapeHtml(jive.i18n.i18nText(opt_data.viewData.i18nData.create_group_done_label,[])) + '</h4><p>' + soy.$$escapeHtml(jive.i18n.i18nText(opt_data.viewData.i18nData.create_group_done_text,[])) + '</p><p><button class="js-back-to-onb j-btn-callout close">' + soy.$$escapeHtml(jive.i18n.i18nText(jive.i18n.getMsg('global.ok'),[])) + '</button></p></div></div>' : '');
  return opt_sb ? '' : output.toString();
};

;
jive.namespace("Onboarding");define("apps/onboarding/views/create_group",["jquery","apps/onboarding/models/onboarding_source"],function(c,a){var b={};b.onboardingSource=new a();b.setupPage=function(g,e,f){b.stepID=g;b.viewData=e;if(c("#jive-socialgroup-desc").length){c("body").addClass("j-quest-active");var h;if(!f||f==="private"){if(!f){h=c("#jive-socialgroup-type-OPEN")}else{h=c("#jive-socialgroup-type-PRIVATE")}h.click();if(c.browser.msie&&+c.browser.version<=8){h.change()}setTimeout(function(){var j=c(jive.onbStep.create_group.pageTips({renderLocation:"group-type",viewData:b.viewData})),i=h.offset();c("body").prepend(j);j.css({position:"fixed",top:i.top-(j.outerHeight()/2)+"px",left:i.left-j.width()-60+"px","z-index":1002});j.addClass("j-pop");j.children("div").addClass("j-pop-main");j.children("span").css("top",((j.outerHeight()/2)-(j.children("span:first").outerHeight()/2))+"px");c(".js-about-form .j-aboutClose button").one("click",function(){b.closeTip()})},700)}else{if(f=="shared"){var d=c("#shared_checkbox");d.click();h=c("#jive-socialgroup-type-PRIVATE");h.click();if(c.browser.msie&&+c.browser.version<=8){h.change()}setTimeout(function(){var j=c(jive.onbStep.create_group.pageTips({renderLocation:"group-type",viewData:b.viewData}));var i=d.offset();c("body").prepend(j);j.css({position:"fixed",top:i.top-(j.outerHeight()/2)+"px",left:i.left-j.width()-60+"px","z-index":1002});j.addClass("j-pop");j.children("div").addClass("j-pop-main");j.children("span").css("top",((j.outerHeight()/2)-(j.children("span:first").outerHeight()/2))+"px");c(".js-about-form .j-aboutClose button").one("click",function(){b.closeTip()})},700)}}c("#jive-socialgroup-template").prepend(c(jive.onbStep.create_group.pageTips({renderLocation:"group-template",viewData:b.viewData})));c("#jive-socialgroup-name").prepend(c(jive.onbStep.create_group.pageTips({renderLocation:"group-name",viewData:b.viewData})));c("#jive-socialgroup-img").prepend(c(jive.onbStep.create_group.pageTips({renderLocation:"group-img",viewData:b.viewData})));c("input.j-btn-callout").before(c(jive.onbStep.create_group.pageTips({renderLocation:"submit",viewData:b.viewData})))}else{if(window.location.href.indexOf("/groups/")!=-1){require(["apps/shared/models/core_deferred"],function(i){i.getObject(containerType,containerID).pipe(function(k){if((!f&&(k.groupType==="OPEN"||k.groupType==="MEMBER_ONLY"))||(f==="private"&&(k.groupType==="PRIVATE"||k.groupType==="SECRET"))||(f==="shared"&&k.visibleToExternalContributors===true)){var l=c(jive.onbStep.create_group.pageTips({renderLocation:"view-group",viewData:b.viewData}));c("#jive-body").prepend(l);var j=c("body");j.on("click.postConfirmationTip",function(o){var m=c(o.target);if(!m.closest(".js-onboarding-tip").length||m.hasClass("js-back-to-onb")){j.off("click.postConfirmationTip");b.closeTip();if(m.hasClass("js-back-to-onb")){var n=jive.app.url({path:"/get-started"});window.location=n}}})}})})}}};b.closeTip=function(d){var e="div.js-onboarding-tip";if(d){e+="[data-location="+d+"]"}var f=c(e);if(f.length){f.each(function(){var h=c(this);var g=h.closest("div.js-pop").length;if(g.length){g.trigger("close");g.remove()}else{h.remove()}})}};return b});
;
var __slice=Array.prototype.slice,__bind=function(a,b){return function(){return a.apply(b,arguments)}},__hasProp=Object.prototype.hasOwnProperty,__extends=function(d,b){for(var a in b){if(__hasProp.call(b,a)){d[a]=b[a]}}function c(){this.constructor=d}c.prototype=b.prototype;d.prototype=new c;d.__super__=b.prototype;return d};(function(a){var b;b=a.Wistia;if(!((a.Wistia!=null)&&(a.Wistia.wistia!=null))){a.Wistia={wistia:"1.0",extend:function(){var g,e,f,d,c;g=arguments[0],f=2<=arguments.length?__slice.call(arguments,1):[];if(!f.length){f=[g];g=this}for(d=0,c=f.length;d<c;d++){e=f[d];this.obj.eachDeep(e,__bind(function(i,j){var h;h=this.obj.get(g,j);if(this.obj.isArray(i)){if(this.obj.isEmpty(h)){return this.obj.set(g,j,[])}}else{if(this.obj.isObject(i)){if(this.obj.isEmpty(h)){return this.obj.set(g,j,{})}}else{return this.obj.set(g,j,i)}}},this))}return g},mixin:function(c,e){var d,f;for(d in e){f=e[d];if(e.hasOwnProperty(d)){c[d]=f}}},obj:{get:function(f,e,c){var d;if(typeof e==="string"){e=e.split(".")}else{e=e.slice(0,e.length)}while((f!=null)&&e.length){d=e.shift();if((f[d]===void 0||!this.isObject(f[d]))&&c){f[d]={}}f=f[d]}return f},set:function(e,d,c){var f;if(typeof d==="string"){d=d.split(".")}else{d=d.slice(0,d.length)}f=d.pop();e=this.get(e,d,true);if((e!=null)&&(this.isObject(e)||this.isArray(e))&&(f!=null)){if(c!=null){return e[f]=c}else{return delete e[f]}}else{}},unset:function(d,c){return this.set(d,c)},exists:function(d,c){return this.get(d,c)!==void 0},cast:function(c){if(c==null){return c}c=""+c;if(/^\d+?$/.test(c)){return parseInt(c,10)}else{if(/^\d*\.\d+/.test(c)){return parseFloat(c)}else{if(/^true$/i.test(c)){return true}else{if(/^false$/i.test(c)){return false}else{return c}}}}},castDeep:function(c){this.eachLeaf(c,__bind(function(d,e){if(typeof d==="string"){return this.set(c,e,this.cast(d))}},this));return c},isArray:function(c){return(c!=null)&&/^\s*function Array()/.test(c.constructor)},isObject:function(c){return(c!=null)&&/^\s*function Object()/.test(c.constructor)},isRegExp:function(c){return(c!=null)&&/^\s*function RegExp()/.test(c.constructor)},isBasicType:function(c){return(c!=null)&&(this.isRegExp(c)||/^string|number|boolean|function$/i.test(typeof c))},isEmpty:function(e){var c,d,f;if(!(e!=null)){return true}else{if(this.isArray(e)&&!e.length){return true}else{if(this.isObject(e)){c=true;for(d in e){f=e[d];c=false}return c}else{return false}}}},isEmptyDeep:function(d){var c;if(this.isEmpty(d)){return true}c=true;this.eachLeaf(d,__bind(function(){return c=false},this));return c},isSubsetDeep:function(e,d){var c;if(e===d){return true}if(((e!=null)&&!(d!=null))||(!(e!=null)&&(d!=null))){return false}c=true;this.eachLeaf(e,__bind(function(g,h){var f;f=this.get(d,h);if(g!==f){return c=false}},this));return c},equalsDeep:function(d,c){return this.isSubsetDeep(d,c)&&this.isSubsetDeep(c,d)},eachDeep:function(g,d,f){var c,e,h;if(f==null){f=[]}if(this.isBasicType(g)){d(g,f)}else{if(this.isObject(g)||this.isArray(g)){d(g,f);for(c in g){h=g[c];e=f.slice(0,f.length);e.push(c);this.eachDeep(h,d,e)}}else{d(g,f)}}},eachLeaf:function(d,c){return this.eachDeep(d,__bind(function(f,e){if(!this.isArray(f)&&!this.isObject(f)){return c(f,e)}},this))}},data:function(c,d){if(!this.obj.isArray(c)){c=c.split(".")}if(d!=null){this.obj.set(this,["_data"].concat(c),d)}return this.obj.get(this,["_data"].concat(c))},timeout:function(c,d,e){var f;if(e==null){e=1}this.clearTimeouts(c);if(!this.obj.isArray(c)){c=c.split(".")}c=["timeouts"].concat(c);if(d){f=setTimeout(__bind(function(){this.removeData(c);return d()},this),e);return this.data(c,f)}else{return this.data(c)}},clearTimeouts:function(c){var d;if(!this.obj.isArray(c)){c=c.split(".")}c=["timeouts"].concat(c);d=this.data(c);this.obj.eachLeaf(d,function(e){return clearTimeout(e)});return this.removeData(c)},removeData:function(c){return this.obj.unset(this,["_data"].concat(c))},seqId:function(e,f){var d,c,g;if(e==null){e="wistia_"}if(f==null){f=""}g=["sequence","val"];d=this.data(g)||1;c=e+d+f;this.data(g,d+1);return c},noConflict:function(){a.Wistia=b;return this},util:{elemHeight:function(d){var c;c=Wistia.detect.browser.quirks?parseInt(d.offsetHeight,10):a.getComputedStyle?parseInt(getComputedStyle(d,null).height,10):d.currentStyle?d.offsetHeight:-1;return c},elemWidth:function(c){if(Wistia.detect.browser.quirks){return parseInt(c.offsetWidth,10)}else{if(a.getComputedStyle){return parseInt(getComputedStyle(c,null).width,10)}else{if(c.currentStyle){return c.offsetWidth}else{return -1}}}},winHeight:function(){var c;return c=a.innerHeight?a.innerHeight:document.documentElement?document.documentElement.offsetHeight:document.body.offsetHeight},winWidth:function(){var c;return c=a.innerWidth?a.innerWidth:document.documentElement?document.documentElement.offsetWidth:document.body.offsetWidth}},bindable:{bind:function(c,d){if(!this._bindings){this._bindings={}}if(!this._bindings[c]){this._bindings[c]=[]}this._bindings[c].push(d);return this},unbind:function(e,h){var d,c,g,f;d=this._bindings[e];if(d){if(h){g=[];for(c=0,f=d.length;0<=f?c<f:c>f;0<=f?c++:c--){if(h!==d[c]){g.push(d[c])}}this._bindings[e]=g}else{this._bindings[e]=[]}}if(this._bindings[e]&&!this._bindings[e].length){this._bindings[e]=null;delete this._bindings[e]}return this},hasBindings:function(){var d,c,f,e;c=false;e=this._bindings;for(d in e){f=e[d];if(this._bindings.hasOwnProperty(d)){c=true}}return c},trigger:function(){var d,h,g,e,f,c;e=arguments[0],d=2<=arguments.length?__slice.call(arguments,1):[];if((h=this._bindings[e])){for(f=0,c=h.length;f<c;f++){g=h[f];if(g){g.apply(this,d)}}}return this}}}}if((b!=null)&&!(b.wistia!=null)){return Wistia.extend(b)}})(window);(function(a){a.extend({_detect:{na:navigator.userAgent,rwebkit:/(webkit)[ \/]([\w.]+)/i,ropera:/(opera)(?:.*version)?[ \/]([\w.]+)/i,rmsie:/(msie) ([\w.]+)/i,rmozilla:/(mozilla)(?:.*? rv:([\w.]+))?/i,randroid:/(android) ([^;])/i,riphone:/(iphone)/i,ripad:/(ipad)/i,browser:function(){return this.browserMatch()[1].toLowerCase()},browserVersion:function(){return this.browserMatch()[2]},browserMatch:function(){return this.na.match(this.rwebkit)||this.na.match(this.ropera)||this.na.match(this.rmsie)||this.na.match(this.rmozilla)},android:function(){var b;b=this.na.match(this.randroid);if(b==null){return false}return{version:b[2]}},iphone:function(){return this.riphone.test(this.na)},ipad:function(){return this.ripad.test(this.na)},flash:function(){var b;b=this.flashFullVersion();return{version:parseFloat(b[0]+"."+b[1]),major:parseInt(b[0],10),minor:parseInt(b[1],10),rev:parseInt(b[2],10)}},flashFullVersion:function(){var b;try{try{b=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");try{b.AllowScriptAccess="always"}catch(c){return[6,0,0]}}catch(c){}return new ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g,",").match(/^,?(.+),?$/)[1].split(",")}catch(c){try{if(navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin){return(navigator.plugins["Shockwave Flash 2.0"]||navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g,",").match(/^,?(.+),?$/)[1].split(",")}}catch(c){}}return[0,0,0]},html5Video:function(){var d,c,b;d=document.createElement("video");b=false;try{if(!!d.canPlayType){b={};c='video/mp4; codecs="avc1.42E01E';b.h264=!!d.canPlayType(c+'"')||!!d.canPlayType(c+', mp4a.40.2"')}}catch(f){b={h264:false}}return b}}});a.extend({detect:{browser:{version:a._detect.browserVersion(),quirks:a._detect.browser()==="msie"&&document.compatMode==="BackCompat",old:a._detect.browser()==="msie"&&(document.compatMode==="BackCompat"||a._detect.browserVersion()<7)},android:a._detect.android(),iphone:a._detect.iphone(),ipad:a._detect.ipad(),flash:a._detect.flash(),video:a._detect.html5Video()}});a.detect.browser[a._detect.browser()]=true})(Wistia);(function(a){var c,e,d,b;e=function(f){return f.mp4hq||f.flv||f.iphone};d=function(f){return f.mp4hq||f.iphone};c=function(f){return f.iphone};b=function(f){if(f.mp4hq&&f.mp4hq.width<=1280&&f.mp4hq.height<=720){return f.mp4hq}else{return f.iphone}};a.extend({judy:{judge:function(k,g){var h,j,i,f;if(!g){g={}}i=g.plea;j=g.force;f={media:k,plea:j||i,uuid:g.uuid||a.seqId("wistia_"),asset:null,embedType:null};h=k.assets;if(j==="html5"){f.embedType="html5";f.asset=d(h)}else{if(j==="flash"){f.embedType="flash";f.asset=e(h)}else{if(j==="external"){f.embedType="external";f.asset=c(h)}else{if(a.detect.iphone){f.embedType="html5";f.asset=c(h)}else{if(a.detect.ipad){f.embedType="html5";f.asset=b(h)}else{if(a.detect.android){f.embedType="external";f.asset=c(h)}else{if(i==="html5"&&a.detect.video.h264){f.embedType="html5";f.asset=d(h)}else{if(i==="flash"&&a.detect.flash.version>=7){f.embedType="flash";f.asset=e(h)}else{if(i==="external"){f.embedType="external";f.asset=c(h)}else{if(a.detect.flash.version>=7){f.embedType="flash";f.asset=e(h)}else{if(a.detect.video.h264){f.embedType="html5";f.asset=d(h)}else{if((a.detect.browser.msie&&(a.detect.browser.version<9||a.detect.browser.quirks))||a.detect.browser.mozilla){f.embedType="flash";f.asset=e(h)}else{f.embedType="external";f.asset=e(h)}}}}}}}}}}}}return f}}})})(Wistia);(function(a){a.extend({embed:function(f,e){var d,c,b;if(!e){e={}}b=new a._embed.Video({},e);a.data(["video",b.uuid],b);d=a._embed.getContainer(f,e);if(a.detect.browser.old){d.style.width=""+(a.util.elemWidth(d))+"px";d.style.height=""+(a.util.elemHeight(d))+"px"}if(a.gridify&&!b.params.noGrid){b.grid=a.gridify(b,d)}else{if(e.wmode!=="transparent"){d.style.backgroundColor="#000000"}}c=function(k){var i,j,l,g,h;if(k.error){if(typeof console!=="undefined"&&console!==null){console.log(k.error)}return}j=a.judy.judge(k,b.params);h=a._embed.classFor(j.embedType);g=new h(j,b.options);for(i in g){l=g[i];if(i!=="uuid"){b[i]=l}}b.embed()};setTimeout(function(){var g;if(typeof f==="string"){g=f;return a.remote.media(g,function(h){return c(h)})}else{return c(f)}},100);return b},_embed:{getContainer:function(c,b){if(typeof b.container==="string"){return document.getElementById(b.container)}else{if(typeof c==="string"){return document.getElementById("wistia_"+c)}else{if(c&&c.media){return document.getElementById("wistia_"+c.media.hashedId)}else{if(c&&c.hashedId){return document.getElementById("wistia_"+c.hashedId)}else{return null}}}}},classFor:function(b){switch(b){case"html5":return a._embed.Html5Video;case"flash":return a._embed.FlashVideo;case"external":return a._embed.ExternalVideo;default:return a._embed.Video}}}})})(Wistia);(function(a){var d,g,f,b,c,e;a.extend({util:{addInlineCss:function(k,h){var j,i;j=document.createElement("style");j.id=a.seqId("wistia_","_style");j.setAttribute("type","text/css");i=document.getElementsByTagName("style");k.appendChild(j,k.nextSibling);if(j.styleSheet){j.styleSheet.cssText=h}else{j.appendChild(document.createTextNode(h))}},objToHtml:function(n){var o,m,s,q,r,t,j,i,l,k,p,h;if(/string|number|boolean/.test(typeof n)){return n.toString()}if(n instanceof Array){t="";for(l=0,p=n.length;l<p;l++){q=n[l];t+=a.util.objToHtml(q)}return t}if(typeof n!=="object"){return n.toString()}m=[];for(r in n){i=n[r];if(r==="tagName"){j=i}else{if(r==="childNodes"){s=i}else{m.push({key:r,val:i})}}}j||(j="div");t="<"+j;for(k=0,h=m.length;k<h;k++){o=m[k];t+=" "+o.key+'="'+o.val+'"'}if(/^(br|hr|img|link|meta|input)$/i.test(j)){t+=" />"}else{t+=">";if(s){if(typeof s==="string"){t+=s}else{if(typeof s==="object"){t+=a.util.objToHtml(s)}}}t+="</"+j+">"}return t}}});b=function(j){var i,h,k;h=[];for(i in j){k=j[i];h.push(""+i+"="+(encodeURIComponent(k)))}return h.join("&")};c=function(i,h){return"display:inline-block;*display:inline;height:"+h+";margin:0;padding:0;position:relative;vertical-align:top;width:"+i+";zoom:1;"};g=function(o,q){var l,j,k,p,h,n,m,i;l=o.asset;h=o.media;q=a.extend({flashPlayerUrl:null,pageUrl:null,chromeless:false,doNotTrack:false,endVideoCallback:"",controlsVisibleOnLoad:false,autoLoad:false,autoPlay:false,endVideoBehavior:"default",playButton:true,wmode:"opaque",playerColor:"",smallPlayButton:true,volumeControl:false,playbar:true,fullscreenButton:true,stillUrl:h.assets.still?h.assets.still.url:""},q);q.unbufferedSeek=l.type==="flv";q.shouldTrack=!q.doNotTrack;k={videoUrl:l.url,hdUrl:h.assets.hdflv?h.assets.hdflv.url:"",stillUrl:q.stillUrl,unbufferedSeek:l.type==="flv",controlsVisibleOnLoad:q.controlsVisibleOnLoad,autoLoad:q.autoLoad,autoPlay:q.autoPlay&&!q.suppressAutoplay,endVideoBehavior:q.endVideoBehavior,playButtonVisible:q.playButton,mediaDuration:h.duration,customColor:q.playerColor,wemail:q.trackEmail,referrer:q.pageUrl,quality:q.videoQuality,chromeless:q.chromeless?true:null,endVideoCallback:q.endVideoCallback?q.endVideoCallback:null,showVolume:q.volumeControl?true:null,showPlaybar:q.playbar===false?false:null,showPlayButton:q.smallPlayButton===false?false:null,fullscreenDisabled:q.fullscreenButton===false?true:null,trackingTransmitInterval:q.trackingTransmitInterval?q.trackingTransmitInterval:null};if(q.shouldTrack){k.embedServiceURL=h.distilleryUrl;k.accountKey=h.accountKey;k.mediaID=h.mediaKey}for(p in k){i=k[p];if(i==null){delete k[p]}}n={tagName:"object",id:o.uuid,classid:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",style:c("100%","100%")};if(q.wmode!=="transparent"){n.bgcolor="#000000"}m=[{tagName:"param",name:"movie",value:q.flashPlayerUrl||h.flashPlayerUrl},{tagName:"param",name:"allowfullscreen",value:"true"},{tagName:"param",name:"allowscriptaccess",value:"always"},{tagName:"param",name:"wmode",value:q.wmode},{tagName:"param",name:"flashvars",value:b(k)}];j={tagName:"embed",src:q.flashPlayerUrl||h.flashPlayerUrl,name:o.uuid,type:"application/x-shockwave-flash",allowfullscreen:"true",allowscriptaccess:"always",wmode:q.wmode,flashvars:b(k),style:c("100%","100%")};if(q.wmode!=="transparent"){j.bgcolor="#000000"}n.childNodes=m.concat(j);if(a.detect.browser.msie&&(a.detect.browser.version<9||a.detect.browser.quirks)){if(a.detect.flash.version<7){n.childNodes=[{style:"background:#666;color:#fff;height:100%;width:100%;","class":"noflash",childNodes:['Whoops! It looks like Flash isn\'t installed. Please \n<a href="http://get.adobe.com/flashplayer/" style="color:white;text-decoration:underline;" target="_blank">\ndownload and install Adobe\'s Flash Player plugin\n</a>\nto watch this video.']}]}}return a.util.objToHtml(n)};f=function(l,h){var j,m,i,k;j=l.asset;m=l.media;h=a.extend({autoLoad:true,autoPlay:false,doNotTrack:false,stillUrl:m.assets.still?m.assets.still.url:""},h);h.shouldTrack=!h.doNotTrack;k=document.createElement("video");k.style.width="100%";k.style.height="100%";k.style.position="relative";k.style.display="block";k.controls="controls";k.id=l.uuid;k.poster=h.stillUrl;k.preload="none";if(h.autoPlay&&!h.suppressAutoplay){k.autoplay="autoplay"}i=document.createElement("source");i.src=j.url.replace(/\.bin$/,"")+"/file.mp4";i.type="video/mp4";k.appendChild(i);return k};d=function(k,i){var h,j,l,m;j=k.asset;m=k.media;i=a.extend({playButton:true,stillUrl:m.assets.still?m.assets.still.url.replace(/\.bin$/,".jpg?image_play_button=1"):""},i);h={tagName:"a",href:j.url,id:k.uuid,target:"_parent",style:c("100%","100%")};l={tagName:"img",src:e(k,i),border:0,alt:"Play video",style:"height:100%;vertical-align:top;width:100%;"};h.childNodes=[l];return a.util.objToHtml(h)};e=function(i,h){var j;j=i.media;if(h.videoWidth&&h.videoHeight){if(h.playButton){return j.assets.still.url.replace(/\.bin$/,".jpg?image_play_button=1&image_crop_resized="+h.videoWidth+"x"+h.videoHeight)}else{return j.assets.still.url.replace(/\.bin$/,".jpg?image_crop_resized="+h.videoWidth+"x"+h.videoHeight)}}else{if(h.playButton){return j.assets.still.url.replace(/\.bin$/,".jpg?image_play_button=1")}else{return j.assets.still.url.replace(/\.bin$/,".jpg")}}};return a.extend({generate:{video:function(j,i,h){if(j==="flash"){return g(i,h)}else{if(j==="html5"){return f(i,h)}else{if(j==="external"){return d(i,h)}else{if(j==="stillUrl"){return e(i,h)}}}}}}})})(Wistia);(function(a){a._embed.Video=(function(){function b(e,d){var c;this.data=e;this.options=d;this.params=a.extend(this.params||{},this.options);this.params.container=a._embed.getContainer(this.data,this.options);if(this.options.platformPreference){this.params.plea=this.options.platformPreference}this.params.shouldTrack=!this.options.doNotTrack;if(this.options.playButtonVisible!=null){this.params.playButton=this.options.playButtonVisible}this.params.rawEmbed=top===self;if(this.params.videoWidth){this.params.videoWidth=parseInt(this.params.videoWidth,10)}if(this.params.videoHeight){this.params.videoHeight=parseInt(this.params.videoHeight,10)}this.params.aspectRatio=this.params.videoWidth/this.params.videoHeight;if(!this.params.playerColor){this.params.playerColor="636155"}if(!this.params.trackEmail){if((c=location.href.match(/wemail\=([^\&]+)/))!=null){this.params.trackEmail=c[1]}}if(!this.params.stillUrl){this.params.stillUrl=a.obj.exists(this.data,"media.assets.still.url")?this.data.media.assets.still.url:""}if(!this.params.uuid){this.params.uuid=a.seqId()}this.uuid=this.params.uuid}b.prototype.embed=function(){this.embedAs(this.embedType);return this.ready(__bind(function(){return this.monitorSize()},this))};b.prototype.monitorSize=function(){var d,g,f,e,c;f=__bind(function(){if(this.params.rawEmbed&&a.detect.browser.old){return this.width()}else{if(this.params.rawEmbed){return a.util.elemWidth(this.container)}else{return a.util.winWidth()}}},this);g=__bind(function(){if(this.params.rawEmbed&&a.detect.browser.old){return this.height()}else{if(this.params.rawEmbed){return a.util.elemHeight(this.container)}else{return a.util.winHeight()}}},this);c=f();e=g();d=__bind(function(){var i,h;h=f();i=g();if(c!==h){this.width(h);c=h}if(e!==i){this.height(i);e=i}a.timeout(""+this.uuid+".auto_resize",d,1000)},this);d()};b.prototype.embedAs=function(c){this.container=this.params.container;this.embedCode=a.generate.video(c,this.data,this.params);this.placeEmbed(this.embedCode);return this};b.prototype.placeEmbed=function(c){var d;d=(this.grid&&this.grid.center)||this.container;if(typeof c==="string"){d.innerHTML=c}else{d.innerHTML="";d.appendChild(c)}return this.ieSizeHack()};b.prototype.rebuildAs=function(i){var e,f,g,h,c,d;g=this.uuid;f=a.judy.judge(this.data.media,{force:i});d=a._embed.classFor(f.embedType);c=new d(f,this.options);for(e in c){h=c[e];this[e]=h}this.uuid=g;a.clearTimeouts(this.uuid);this._isReady=false;this.embed(this.params.container);return this};b.prototype.remove=function(){a.clearTimeouts(this.uuid);a._data.video[this.uuid]=null;delete a._data.video[this.uuid];this.container.innerHTML=""};b.prototype.bind=function(c,d){if(!this._bindings){this._bindings={}}if(!this._bindings[c]){this._bindings[c]=[]}this._bindings[c].push(d);return this};b.prototype.unbind=function(e,h){var d,c,g,f;d=this._bindings[e];if(d){if(h){g=[];for(c=0,f=d.length;0<=f?c<f:c>f;0<=f?c++:c--){if(h!==d[c]){g.push(d[c])}}this._bindings[e]=g}else{this._bindings[e]=[]}}if(this._bindings[e]&&!this._bindings[e].length){this._bindings[e]=null;delete this._bindings[e]}return this};b.prototype.hasBindings=function(){var d,c,f,e;c=false;e=this._bindings;for(d in e){f=e[d];if(this._bindings.hasOwnProperty(d)){c=true}}return c};b.prototype.trigger=function(){var d,h,g,e,f,c;e=arguments[0],d=2<=arguments.length?__slice.call(arguments,1):[];if((h=this._bindings[e])){for(f=0,c=h.length;f<c;f++){g=h[f];if(g){g.apply(this,d)}}}return this};b.prototype._eventLoopDuration=300;b.prototype.play=function(){return this.ready("play")};b.prototype.pause=function(){return this.ready("pause")};b.prototype.time=function(c){if(c!=null){this.ready("time",c);return this}else{}};b.prototype.state=function(){return"unknown"};b.prototype.duration=function(){return 0};b.prototype.getEventKey=function(){return null};b.prototype.volume=function(c){if(c!=null){return this.ready("volume",c)}else{return 0}};b.prototype.setPlayerColor=function(c){this.ready("setPlayerColor",c);return this};b.prototype.ready=function(){var d,h,e,g,c,f;h=arguments[0],d=2<=arguments.length?__slice.call(arguments,1):[];if(!this._readyQueue){this._readyQueue=[]}if(this._isReady){if(h){this._readyQueue.push({callback:h,args:d})}f=this._readyQueue;for(g=0,c=f.length;g<c;g++){e=f[g];if(typeof e.callback==="string"){this[e.callback].apply(this,e.args)}else{e.callback.apply(this,e.args)}}this._readyQueue=[]}else{if(h){this._readyQueue.push({callback:h,args:d})}}return this};b.prototype.width=function(d){var c;if(d!=null){d=parseInt(d,10);if(this.grid){this.container.style.width=this.grid.wrapper.style.width=""+d+"px";this.grid.center.style.width="100%";this.elem().style.width="100%";a.grid.fitHorizontal(this);a.grid.fitVertical(this)}else{this.container.style.width=""+d+"px";this.elem().style.width="100%"}return this}else{if(a.detect.browser.old){this.elem().style.position="absolute"}if(this.grid){c=a.util.elemWidth(this.grid.left)+a.util.elemWidth(this.grid.center)+a.util.elemWidth(this.grid.right)}else{c=a.util.elemWidth(this.container)}if(a.detect.browser.old){this.elem().style.position="static"}return c}};b.prototype.height=function(d){var c;if(d!=null){d=parseInt(d,10);if(this.grid){this.container.style.height=this.grid.wrapper.style.height=""+d+"px";this.grid.center.style.height="100%";this.elem().style.height="100%";a.grid.fitHorizontal(this);a.grid.fitVertical(this)}else{this.container.style.height=""+d+"px";this.elem().style.height="100%"}return this}else{if(a.detect.browser.old){this.elem().style.position="absolute"}if(this.grid){c=a.util.elemHeight(this.grid.center)+Math.max(a.util.elemHeight(this.grid.above),a.util.elemHeight(this.grid.top))+Math.max(a.util.elemHeight(this.grid.below),a.util.elemHeight(this.grid.bottom))}else{c=a.util.elemHeight(this.container)}if(a.detect.browser.old){this.elem().style.position="static"}return c}};b.prototype.videoWidth=function(d){var e,c;if(d!=null){d=parseInt(d,10);if(this.grid){this.grid.center.style.width="100%";this.grid.main.style.width=""+d+"px";this.grid.main.style.width=""+d+"px";e=a.util.elemWidth(this.grid.left)+a.util.elemWidth(this.grid.right);this.container.style.width=this.grid.wrapper.style.width=""+(d+e)+"px";a.grid.fitHorizontal(this);a.grid.fitVertical(this)}else{this.container.style.width=""+d+"px";this.elem().style.width="100%"}return this}else{if(a.detect.browser.old){this.elem().style.position="absolute"}if(this.grid){c=a.util.elemWidth(this.grid.center)}else{c=a.util.elemWidth(this.container)}if(a.detect.browser.old){this.elem().style.position="static"}return c}};b.prototype.videoHeight=function(f){var e,d,c,g;if(f!=null){f=parseInt(f,10);if(this.grid){this.grid.main.style.height=""+f+"px";this.grid.center.style.height="100%";this.grid.main.style.height=""+f+"px";g=Math.max(a.util.elemHeight(this.grid.above),a.util.elemHeight(this.grid.top));e=Math.max(a.util.elemHeight(this.grid.below),a.util.elemHeight(this.grid.bottom));d=g+e;this.container.style.height=this.grid.wrapper.style.height=""+(f+d)+"px";a.grid.fitHorizontal(this);a.grid.fitVertical(this)}else{this.container.style.height=""+f+"px";this.elem().style.height="100%"}return this}else{if(a.detect.browser.old){this.elem().style.position="absolute"}if(this.grid){c=a.util.elemHeight(this.grid.center)}else{c=a.util.elemHeight(this.container)}if(a.detect.browser.old){this.elem().style.position="static"}return c}};b.prototype.ieSizeHack=function(){if(a.detect.browser.msie&&this.elem&&this.elem()){if(this.elem().offsetLeft%2===0){this.elem().style.width=""+(this.videoWidth()+1)+"px"}else{this.elem().style.width="100%"}}};b.prototype.setEmail=function(c){return this.params.trackEmail=c};b.prototype.getVisitorKey=function(){if(this.tracker){return this.tracker.visitorKey()}else{return""}};b.prototype.getEventKey=function(){if(this.tracker){return this.tracker.eventKey()}else{return""}};return b})()})(Wistia);(function(a){a._embed.FlashVideo=(function(){__extends(b,a._embed.Video);function b(){b.__super__.constructor.apply(this,arguments)}b.prototype.embedType="flash";b.prototype.elem=function(){return document[this.data.uuid]};b.prototype.embed=function(){var c;b.__super__.embed.apply(this,arguments);this._lastTimePosition=0;a.timeout(""+this.uuid+".quick_repair",__bind(function(){if(this.isBroken()){a.clearTimeouts(this.uuid);this.repair()}},this),50);c=__bind(function(d){if(d>=50){return}if(this.elem()&&this.elem().getCurrentTime){if(!this.isBroken()){a.timeout(""+this.uuid+".ready_delay",__bind(function(){this._isReady=true;this.ready();this.listenForEvents();if(!this.tracker){return this.tracker=a.tracker(this)}},this),200)}}else{a.timeout(""+this.uuid+".ready_check",(__bind(function(){return c.call(this,d+1)},this)),200)}},this);c();return this};b.prototype.remove=function(){a.clearTimeouts(this.uuid);return b.__super__.remove.call(this)};b.prototype.listenForEvents=function(){this._fireIfChanged=__bind(function(){var d,c;if(!this.hasBindings()){return}a.timeout(""+this.uuid+".fire_if_changed",(__bind(function(){return this._fireIfChanged.call(this)},this)),this._eventLoopDuration);d=this.state();c=this.time();if(d!==this._lastState){if(d==="playing"){this.trigger("play")}else{if(d==="paused"){this.trigger("pause")}else{if(d==="ended"){this.trigger("end")}}}}if(c!==this._lastTimePosition){this.trigger("timechange",c);this._lastTimePosition=c}this._lastState=d},this);this._fireIfChanged.call(this)};b.prototype.bind=function(){var c;c=1<=arguments.length?__slice.call(arguments,0):[];b.__super__.bind.apply(this,c);if(a.timeout(""+this.uuid+".fire_if_changed")==null){if(!this._isReady){return this.ready("listenForEvents")}this.listenForEvents()}return this};b.prototype.play=function(){if(!this._isReady){return this.ready("play")}this.elem().videoPlay();return this};b.prototype.pause=function(){if(!this._isReady){return this.ready("pause")}this.elem().videoPause();return this};b.prototype.time=function(d){var g,c,f;if((d!=null)&&!this._isReady){return this.ready("time",d)}if(d!=null){f=this.state();if(f==="unknown"){this.elem().videoPlay();c=this;g=function(){c.unbind("timechange",g);return c.elem().videoSeek(d)};this.bind("timechange",g)}else{this.elem().videoSeek(d);if(f==="paused"||f==="ended"){this.pause()}}return this}else{try{return this.elem().getCurrentTime()}catch(h){return -1}}};b.prototype.state=function(){try{switch(this.elem().getCurrentState()){case 0:return"ended";case 1:return"playing";case 2:return"paused";default:return"unknown"}}catch(c){return"unknown"}};b.prototype.volume=function(d){var c;if(d&&!this._isReady){return this.ready("volume",d)}if(d!=null){this.elem().setVolume(Math.min(Math.round(d*100),100));return this}else{c=this.elem().getVolume();if(c>0){c/=100}return c}};b.prototype.duration=function(){return this.data.media.duration};b.prototype.outsideContainer=function(){var c;c=this.elem();while(c.nodeType===1){c=c.parentNode;if(c===this.container){return false}}return true};b.prototype.ctfBlocked=function(){return document.getElementById("CTFstack")&&this.outsideContainer()};b.prototype.chromeFlashBlocked=function(){var d,c;if(a.detect.browser.webkit&&this.elem()){d=this.elem().parentNode.previousSibling;if(d){c=d.childNodes[0]}return c&&c.getAttribute("style")&&c.getAttribute("style").indexOf("gofhjkjmkpinhpoiabjplobcaignabnl")!==-1}};b.prototype.ffFlashBlocked=function(){var c;c=this.container.childNodes[0];return c&&c.getAttribute("bgactive")&&c.getAttribute("bgactive").indexOf("flashblock")!==-1};b.prototype.isBlocked=function(){return a.detect.flash.version>=7&&(this.ctfBlocked()||this.chromeFlashBlocked())};b.prototype.isBroken=function(){return a.detect.flash.version<7||this.isBlocked()};b.prototype.repair=function(){if(this.isBlocked()&&a.detect.video.h264){a.clearTimeouts(this.uuid);this.rebuildAs("html5")}};b.prototype.getEventKey=function(){try{return this.elem().getEventKey()}catch(c){return""}};b.prototype.setPlayerColor=function(c){this.params.playerColor=c;if(this._isReady){this.elem().changeColor(c)}else{this.ready("setPlayerColor",c)}};b.prototype.setEmail=function(c){b.__super__.setEmail.call(this,c);return this.elem().setEmail(c)};return b})()})(Wistia);(function(a){var b;b=function(d,c,f){var e;e=__bind(function(){d.removeEventListener(c,e);return f()},this);d.addEventListener(c,e)};a._embed.Html5Video=(function(){__extends(c,a._embed.Video);function c(){c.__super__.constructor.apply(this,arguments)}c.prototype.embedType="html5";c.prototype.elem=function(){return document.getElementById(this.data.uuid)};c.prototype.embed=function(){c.__super__.embed.apply(this,arguments);if(this.hasPreRoll){this.embedExternal()}else{this.embedHtml5()}if(this.hasPostRoll){this.preloadStill();this.bind("end",__bind(function(){return this.embedExternal()},this))}return this};c.prototype.preloadStill=function(){var d;d=new Image();if(this.options.playButton){return d.src=a.generate.video("stillUrl",this.data,this.params)}else{return d.src=a.generate.video("stillUrl",this.data,this.params)}};c.prototype.embedExternal=function(){var d;if(this.tracker){this.tracker.stopMonitoring()}d=this.params.playButton;this.params.playButton=this.options.playButton;this.embedAs("external");this.params.playButton=d;a.timeout(""+this.uuid+".vid_ready",__bind(function(){this._isReady=true;return this.ready()},this));return this.elem().addEventListener("click",__bind(function(e){e.preventDefault();this.embedHtml5();return this.play()},this))};c.prototype.embedHtml5=function(){this._isReady=false;this.embedAs("external");this.embedAs("html5");if(!this.tracker){this.tracker=a.tracker(this)}if(this.params.shouldTrack){this.ready(__bind(function(){return this.tracker.monitor()},this))}this.elem().addEventListener("playing",(__bind(function(){return this.trigger("play")},this)));this.elem().addEventListener("pause",(__bind(function(){return this.trigger("pause")},this)));this.elem().addEventListener("ended",(__bind(function(){return this.trigger("end")},this)));a.timeout(""+this.uuid+".vid_ready",__bind(function(){this._isReady=true;return this.ready()},this));return this.listenForEvents()};c.prototype.remove=function(){a.clearTimeouts(this.uuid);return c.__super__.remove.call(this)};c.prototype.listenForEvents=function(){if(!this._bindings){this._bindings={}}this._fireIfChanged=__bind(function(){var d;if(!this.hasBindings()){return}a.timeout(""+this.uuid+".fire_if_changed",(__bind(function(){return this._fireIfChanged.call(this)},this)),this._eventLoopDuration);if((d=this.time())!==this._lastTimePosition){this.trigger("timechange",d);this._lastTimePosition=d}},this);this._fireIfChanged()};c.prototype.bind=function(){var d;d=1<=arguments.length?__slice.call(arguments,0):[];c.__super__.bind.apply(this,d);if(!a.timeout(""+this.uuid+".fire_if_changed")){this.listenForEvents()}return this};c.prototype.play=function(d){if(/video/i.test(this.elem().tagName)){if(!this._isReady){return this.ready("play")}this.elem().play()}else{this.embedHtml5();this.play()}return this};c.prototype.pause=function(){if(!this._isReady){return this.ready("pause")}this.elem().pause();return this};c.prototype.time=function(d){if(d&&!this._isReady){return this.ready("time",d)}if(d!=null){if(this.state()==="unknown"){b("playing",__bind(function(){b(this.elem(),"seeked",__bind(function(){return this.pause()},this));this.elem().currentTime=d},this));this.play()}else{this.elem().currentTime=d}return this}return this.elem().currentTime};c.prototype.state=function(){try{if(this.elem().ended){return"ended"}else{if(this.elem().played.length===0){return"paused"}else{if(this.elem().paused){return"paused"}else{return"playing"}}}}catch(d){return"unknown"}};c.prototype.volume=function(d){if(d&&!this._isReady){return this.ready("volume",d)}if(d!=null){this.elem().volume=d;return this}else{return this.elem().volume}};c.prototype.duration=function(){return this.data.media.duration};c.prototype.setPlayerColor=function(){};return c})()})(Wistia);(function(a){a._embed.ExternalVideo=(function(){__extends(b,a._embed.Video);function b(){b.__super__.constructor.apply(this,arguments)}b.prototype.embedType="external";b.prototype.elem=function(){return document.getElementById(this.data.uuid)};b.prototype.embed=function(c){b.__super__.embed.call(this,c);this.params.stillUrl=this.elem().childNodes[0].src;this.elem().addEventListener("click",__bind(function(){this.trigger("play");a.timeout(""+this.uuid+".fake_video_end",__bind(function(){return this.trigger("end")},this),500);return false},this));this._isReady=true;this.ready();return this};b.prototype.duration=function(){return this.data.media.duration};return b})()})(Wistia);(function(a){a.extend({tracker:function(c,b){return new a.VideoTracker(c,b||{})}});return a.VideoTracker=(function(){var i,f,h,k,d,b,g,c,e;c=g=b=e=function(){};d=false;f="";h="";i=0;k=[];function j(m,l){this.video=m;this.options=l;this.params=a.extend({transmitInterval:10000},this.options);k=[];i=new Date().getTime();this._eventKey=this.newEventKey();this._visitorKey=this.visitorKeyFromCookie()||this.newVisitorKey();this.log("initialized");if(this.video.embedType==="html5"){this.transmit()}this}j.prototype._dataPrefix=function(){var l;l='{\n"account_key":"'+this.video.data.media.accountKey+'",\n"session_id":"'+this._visitorKey+'",\n"media_id":"'+this.video.data.media.mediaKey+'",\n"event_key":"'+this._eventKey+'",\n"media_duration":'+(parseFloat(this.video.data.media.duration))+',\n"referrer":"'+(this.video.params.pageUrl||window.location.href)+'",';if(this.video.params.trackEmail){l+='"email":"'+this.video.params.trackEmail+'",'}l+='"event_details":[';return l};j.prototype._dataSuffix=function(){return"]}"};j.prototype.visitorKeyFromCookie=function(){var l,m,n;l=document.cookie.split("; ");m=0;while(m<l.length){n=l[m].split("=");if(n[0]==="__distillery"){return n[1]}m++}};j.prototype.newVisitorKey=function(){var l,m;m=(new Date().getTime()).toString()+"-"+Math.random();l=new Date();l.setTime(l.getTime()+(365*24*60*60*1000));document.cookie="__distillery="+m+"; expires="+(l.toGMTString())+"; path=/";return m};j.prototype.newEventKey=function(){if(this.video.embedType==="flash"){return this.video.getEventKey()}else{return(new Date().getTime()).toString()+"e"+Math.random()}};j.prototype.monitor=function(){c=__bind(function(){this.log("play")},this);g=__bind(function(){if(Math.abs(this.video.duration()-this.video.time())>0.3){this.log("pause")}},this);b=__bind(function(){this.log("end");this.transmit()},this);e=__bind(function(l){if(Math.abs(this.video._lastTimePosition-l)>=5){this.log("seek")}},this);d=true;this.video.bind("play",c);this.video.bind("pause",g);this.video.bind("end",b);this.video.bind("timechange",e);a.timeout(""+this.uuid+".start_tracking_timeout",__bind(function(){var l;l=__bind(function(){if(this.video.state()==="playing"){this.log("update")}this.transmit();return a.timeout(""+this.uuid+".tracking_loop",l,this.params.transmitInterval)},this);a.timeout(""+this.uuid+".tracking_loop",l,this.params.transmitInterval);this.transmit()},this),Math.random()*this.params.transmitInterval+1000);if(this.video.state()==="playing"){c()}};j.prototype.stopMonitoring=function(){d=false;this.video.unbind("play",c);this.video.unbind("pause",g);this.video.unbind("end",b);this.video.unbind("timechange",e)};j.prototype.postToDistillery=function(l){a.remote.post(""+this.video.data.media.distilleryUrl+"?data="+(encodeURIComponent(l)))};j.prototype.transmit=function(){var l;if(this.video.params.doNotTrack){return}if(k.length!==0){l=this._dataPrefix()+k.join(",")+this._dataSuffix();this.postToDistillery(a.base64.encode(l));k=[]}};j.prototype.log=function(l){var n,m;if(this.video.params.doNotTrack){return}m=this.video.time();if(m==null){if(this.video.state()==="unknown"){m=0}else{m=this.video.duration()}}m=m.toFixed(1);n=(new Date().getTime())-i;k.push('{\n"key":"'+l+'",\n"value":'+m+',\n"timeDelta":'+n+"\n}")};j.prototype.visitorKey=function(){return this._visitorKey};j.prototype.eventKey=function(){return this._eventKey};return j})()})(Wistia);Wistia.extend({base64:{_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(c){var k,h,f,j,g,e,d,b,a;b=0;a="";while(b<c.length){k=c.charCodeAt(b++);h=c.charCodeAt(b++);f=c.charCodeAt(b++);j=k>>2;g=((k&3)<<4)|(h>>4);e=((h&15)<<2)|(f>>6);d=f&63;if(isNaN(h)){e=d=64}else{if(isNaN(f)){d=64}}a=a+this._keyStr.charAt(j)+this._keyStr.charAt(g)+this._keyStr.charAt(e)+this._keyStr.charAt(d)}return a}}});(function(a){return a.extend({constant:{embedHost:"fast.wistia.com"},remote:{post:function(c){var b;b=window.XDomainRequest?new window.XDomainRequest():new window.XMLHttpRequest();b.open("POST",c,true);b.send()},media:function(b,d){var c;if(a.data(["remote-media",b])){a.timeout("remote-media."+b+"."+(a.seqId()),function(){return d(a.data(["remote-media",b]))})}else{c=""+window.location.protocol+"//"+a.constant.embedHost+"/embed/medias/"+b+".json";this.fetch(c,{},function(e){if(e.error){a.data(["remote-media",b],e);d(e)}else{a.data(["remote-media",b],e.media);d(e.media)}},{onerror:function(){if(window.console){console.log("Timed out fetching "+c)}},timeout:10000})}},playlist:function(c,d){var b;if(a.data(["remote-playlist",c])){a.timeout("remote-playlist."+c+"."+(a.seqId()),function(){return d(a.data(["remote-playlist",c]))})}else{b=""+window.location.protocol+"//"+a.constant.embedHost+"/embed/playlists/"+c+".json";this.fetch(b,{},function(e){a.data(["remote-playlist",c],e);d(e)},{onerror:function(){if(window.console){console.log("Timed out fetching "+b)}},timeout:10000})}},fetch:function(c,e,f,b){var d;if(!b.timeout){b.timeout=5000}if(!b.onerror){b.onerror=(function(){})}d=setTimeout(b.onerror,b.timeout);a.jsonp.get(c,e,function(g){clearTimeout(d);if(f){f(g)}})}}})})(Wistia);if(!Wistia.jsonp){Wistia.jsonp=(function(){var a=0,c,f,b,d=this;function e(j){var i=document.createElement("script"),h=false;i.src=j;i.async=true;i.onload=i.onreadystatechange=function(){if(!h&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){h=true;i.onload=i.onreadystatechange=null;if(i&&i.parentNode){i.parentNode.removeChild(i)}}};if(!c){c=document.getElementsByTagName("head")[0]}c.appendChild(i)}function g(h,j,k){f="?";j=j||{};for(b in j){if(j.hasOwnProperty(b)){f+=encodeURIComponent(b)+"="+encodeURIComponent(j[b])+"&"}}var i="json"+(++a);d[i]=function(l){k(l);try{delete d[i]}catch(m){}d[i]=null};e(h+f+"callback="+i);return i}return{get:g}}())}(function(a){if(!a.Plugin){a.Plugin={}}a.Plugin.Base=(function(){function b(){this.pluginName="plugin";this}b.prototype.instances=function(){return a.data(["plugins",this.pluginName,this.video.uuid])};b.prototype.register=function(c){this.video.plugins[this.uuid]=c;return a.data(["plugins",this.pluginName,this.video.uuid,this.uuid],c)};b.prototype.remove=function(){this.video.plugins[this.uuid]=null;a.removeData(["plugins",this.pluginName,this.video.uuid,this.uuid]);delete this.video.plugins[this.uuid];if(this.video.grid){a.grid.fitHorizontal(this.video);return a.grid.fitVertical(this.video)}};b.prototype.fit=function(){};b.prototype.init=function(c,d){if(c.plugins==null){c.plugins={}}this.video=c;this.options=d||{};this.params=a.extend({},d||{});return this.uuid=this.params.uuid||a.seqId("wistia_","_plugin")};return b})();return a.extend({plugin:{init:function(g,f,e){var c,b,d;d=g.charAt(0).toUpperCase()+g.substr(1);b=a.Plugin[d];c=new b();c.init(f,e);return c},instance:function(c,b,d){return a.data(["plugins",c,b.uuid,d])},remove:function(d,b,e){var c;if((c=this.instance(d,b,e))!=null){c.remove()}},isActive:function(c,b,d){return !!this.instance(c,b,d)}}})})(Wistia);
;
jive.namespace("Onboarding");define("apps/onboarding/onboarding_main",["jquery"],function(a){return jive.oo.Class.extend(function(b){this.init=function(d){var c=this;c.trialVideos=[];c.resourcesInitialized=false;c.trialBean=d.trialBean;c.instanceInfoView=d.instanceInfoView;c.trialAdminData=d.trialAdminData;c.instanceURL=d.instanceURL;c.daysRemaining=d.daysRemaining;c.trialProgress=d.trialProgress;c.communityName=d.communityName;var e=a.deparam.querystring();this.initActiveQuestID();if(e.fromQ){if(e.fromQ=="WorkBetterAsATeamQuest"||e.fromQ=="HaveFewerMeetingsQuest"||e.fromQ=="LessEmailQuest"||e.fromQ=="StayInTouchQuest"||e.fromQ=="CommunityFeedbackQuest"){c.initTrialResources(false,e)}else{require(["apps/onboarding/models/onboarding_source"],function(f){c.onboardingSource=new f();c.onboardingSource.getStepData(e.fromQ).addCallback(function(g){if(g.type){require(["apps/onboarding/views/"+g.type],function(h){if(h&&h.setupPage){h.setupPage(e.fromQ,g)}})}})})}}if(c.trialBean.trialProgress.questCompletionTips.userTips.length){c.showProgressTips(c.trialBean.trialProgress.questCompletionTips)}};this.initTrialResources=function(e,d){var c=this;require(["apps/trial/views/trial_view","apps/trial/views/trial_tip_helper","apps/trial/models/trial_panel_source","apps/onboarding/models/onboarding_source","apps/shared/controllers/switchboard","apps/metric/models/metric_source"],function(k,j,i,g,f,h){c.onboardingSource=new g();c.metricSource=new h();c.trialSource=new i();c.trialView=new k();c.trialView.addListener("saveLastViewedQuest",function(l){c.trialSource.saveLastViewedQuest(l)}).addListener("saveProgress",function(l){c.trialSource.saveProgress(l)}).addListener("clearUserTipQueue",function(){c.trialSource.clearUserTipQueue()}).addListener("metric",function(m,l){c.metricSource.metric({metricName:m,metricValues:l})});c.trialTipHelper=new j({communityName:c.instanceInfoView.rootCommunityName});c.trialTipHelper.addListener("shouldSetupPage",function(l,m,n){c.trialSource.getShouldShowTips(l,m).addCallback(function(o){if(o){c.activeQuestID=l;c.activeQuestStep=m}else{c.initActiveQuestID()}n.emitSuccess(o)})}).addListener("clearActiveQuest",function(){c.initActiveQuestID()}).addListener("getAllQuestProgressData",function(l){c.trialSource.get("panel").addCallback(function(m){l.emitSuccess(m)})});jive.dispatcher.listen("trial.updatePercentComplete",function(){c.onboardingSource.initializeView().addCallback(function(l){f.emit("onboarding.state.update",l)});c.trialSource.get("percentComplete").addCallback(function(l){if(l.questCompletionTips.userTips.length){c.showProgressTips(l.questCompletionTips)}})});if(e){c.trialView.postRender()}c.resourcesInitialized=true})};this.postPageRender=function(e){var d=this,c=e.valueCaseName,g=e.videoID,f=function(m){var k=a(jive.onboarding.onboardingProgress({percentComplete:m.percentComplete}));a("#j-onboarding-progress").replaceWith(k);if(m.percentComplete==100){a("#j-onboarding .j-onb-quest-header .js-hide-onb").show()}for(var o=0,p=m.quests.length;o<p;o++){for(var n=0,l=m.quests[o].steps.length;n<l;n++){if(m.quests[o].steps[n].state==="completed"){var h=a('#j-onboarding .js-quest-step a[data-id="'+m.quests[o].steps[n].name+'"]');if(!h.hasClass("completed")){h.addClass("completed");h.prepend(jive.onbStep.startStep.completedAriaLabel())}}}}};if(c=="trial"){if(!d.resourcesInitialized){d.initTrialResources(true,{},false)}else{d.trialView.postRender()}d.$questBodies=a("div.collaboration");d.$questHeaders=a("a.js-quest-group-header");a(".js-quest-group-header").click(function(h){h.preventDefault();var i=a(this);if(!i.hasClass("j-active")){d.$questHeaders.removeClass("j-active font-color-normal");i.addClass("j-active font-color-normal");d.$questBodies.hide();d.$questBodies.filter("[data-id="+i.data("id")+"]").show();d.onboardingSource.saveLastViewedQuest(""+i.data("id"))}})}else{if(g!="video"){d.video=Wistia.embed(g,{videoWidth:"570",videoHeight:"365",controlsVisibleOnLoad:true})}}a("div.js-trial-tip, div.js-onboarding-tip").remove();jive.switchboard.removeListener("onboarding.state.update",f).addListener("onboarding.state.update",f);a("#j-onboarding").off().on("click",".js-do-step",function(k){k.preventDefault();var i=a(this),h=i.data("type"),j=i.data("id");require(["apps/onboarding/views/"+h],function(l){l.startStep(j,d.instanceInfoView,i)})}).on("click",".js-hide-onb",function(h){h.preventDefault();require(["apps/onboarding/models/onboarding_source"],function(i){d.onboardingSource=new i();d.onboardingSource.setOnboardingVisible(false).addCallback(function(){jive.HomeNav.GlobalController.hideView("onboarding");var j=a(jive.onboarding.postHideViewTip());j.popover({context:a("#j-satNav"),container:a(".js-satellite-nav-container")});$j("body").one("click",function(){j.trigger("close")})})})}).on("click",".js-onb-show-intro-modal",function(h){h.preventDefault();jive.HomeNav.GlobalController.showOnboardingIntroModal(true)}).on("click",".js-onb-show-welcome-modal",function(h){h.preventDefault();jive.HomeNav.GlobalController.showOnboardingIntroModal(false)})};this.showProgressTips=function(g){var c=this,d=null;if(g.userTips.length){$j("div.js-trial-tip").remove();for(var f=0,e=g.questCompletionData.length;f<e;f++){if(!g.questCompletionData[f].completed){d=g.questCompletionData[f].questName;break}}}for(f=0,tipsLength=g.userTips.length;f<tipsLength;f++){if(g.userTips[f]!="jive.trial.quests.fewerMeetings.questReadyToComplete"||tipsLength==1){var h=$j(jive.trial.renderProgressTip({template:g.userTips[f],nextQuestID:d}));h.delegate("#quest-complete-close","click",function(i){i.preventDefault();$j("div.js-trial-tip").remove()});$j("body").prepend(h);require(["apps/trial/models/trial_panel_source"],function(i){c.trialSource=new i();c.trialSource.clearUserTipQueue()})}}$j("html, body").animate({scrollTop:0},"fast")};b.initActiveQuestID=function(){this.activeQuestID="";this.activeQuestStep=null};this.getActiveQuestAndStep=function(){return{activeQuestID:this.activeQuestID,activeQuestStep:this.activeQuestStep}};this.tearDownView=function(){if(this.trialView){this.trialView.tearDown()}if(this.video&&this.video._isReady){this.video.remove()}}})});
;
