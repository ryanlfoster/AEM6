var CTA = {
	ctas: [
		
					{
						color: "green",
						content: "\n\t\t\t\t\t\t<h2>\n\t\t\t\t\t\t\t<a href=\"http://www.sixdimensions.com/contact-us/?utm_source=[CURRENT_SITE]&utm_medium=banner&utm_campaign=labs_cta&utm_content=default\" alt=\"Need Help?\">Need Help?</a>\n\t\t\t\t\t\t</h2>\n\t\t\t\t\t\t<p>Find out how the experts at Six Dimensions can help you successfully implement your AEM project!</p>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<a href=\"http://www.sixdimensions.com/contact-us/\" alt=\"Need Help?\" class=\"button\">Call in the Experts</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div style=\"clear:both\"></div>\n\t\t\t\t\t",
						id: "default",
						tags: null,
						url: "http://labs.sixdimensions.com/cta/default.html"
					},
					{
						color: "orange",
						content: "\n\t\t\t\t\t\t<h2>\n\t\t\t\t\t\t\t<a href=\"http://www.sixdimensions.com/contact-us/?utm_source=[CURRENT_SITE]&utm_medium=banner&utm_campaign=labs_cta&utm_content=best-practices\" alt=\"AEM Got You Down?\">AEM Got You Down?</a>\n\t\t\t\t\t\t</h2>\n\t\t\t\t\t\t<p>Sometimes it’s difficult to figure out what are the Best Practices are when developing for AEM. Luckily, you can call in the experts from Six Dimensions to provide guidance and support.</p>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<a href=\"http://www.sixdimensions.com/contact-us/\" alt=\"AEM Got You Down?\" class=\"button\">Call in the Experts</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div style=\"clear:both\"></div>\n\t\t\t\t\t",
						id: "best-practices",
						tags: ["Best Practices"],
						url: "http://labs.sixdimensions.com/cta/best-practices.html"
					},
					{
						color: "green",
						content: "\n\t\t\t\t\t\t<h2>\n\t\t\t\t\t\t\t<a href=\"http://6depic.com/?utm_source=[CURRENT_SITE]&utm_medium=banner&utm_campaign=labs_cta&utm_content=6depic\" alt=\"6D Epic Lan\">6D Epic Lan</a>\n\t\t\t\t\t\t</h2>\n\t\t\t\t\t\t<p>Six Dimension’s presents it’s first annual LAN party geared to host epic tournaments, wall-to-wall gaming, food, drinks and prizes.</p>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<a href=\"http://6depic.com/\" alt=\"6D Epic Lan\" class=\"button\">Attend!</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div style=\"clear:both\"></div>\n\t\t\t\t\t",
						id: "6depic",
						tags: [],
						url: "http://labs.sixdimensions.com/cta/6depic.html"
					},
					{
						color: "green",
						content: "\n\t\t\t\t\t\t<h2>\n\t\t\t\t\t\t\t<a href=\"http://www.sixdimensions.com/hello6/?utm_source=[CURRENT_SITE]&utm_medium=banner&utm_campaign=labs_cta&utm_content=hello6\" alt=\"Ready for AEM6?\">Ready for AEM6?</a>\n\t\t\t\t\t\t</h2>\n\t\t\t\t\t\tFind out how the experts at Six Dimensions can provide you guidance and expertise in upgrading to AEM6.\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<a href=\"http://www.sixdimensions.com/hello6/\" alt=\"Ready for AEM6?\" class=\"button\">Help 6D Welcome AEM6!</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div style=\"clear:both\"></div>\n\t\t\t\t\t",
						id: "hello6",
						tags: ["HelloAEM6"],
						url: "http://labs.sixdimensions.com/cta/hello6.html"
					},
					{
						color: "blue",
						content: "\n\t\t\t\t\t\t<h2>\n\t\t\t\t\t\t\t<a href=\"http://www.sixdimensions.com/contact-us/?utm_source=[CURRENT_SITE]&utm_medium=banner&utm_campaign=labs_cta&utm_content=systems\" alt=\"AEM Not Cooperating?\">AEM Not Cooperating?</a>\n\t\t\t\t\t\t</h2>\n\t\t\t\t\t\t<p>Find out how Six Dimension’s AEM Experts can help get your installation tuned and running optimally.</p>\n<p>Six Dimensions AEM Systems Experts are experienced and skilled in maintaining and diagnosing troublesome Adobe CQ installations.</p>\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t<a href=\"http://www.sixdimensions.com/contact-us/\" alt=\"AEM Not Cooperating?\" class=\"button\">Call in the Experts</a>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div style=\"clear:both\"></div>\n\t\t\t\t\t",
						id: "systems",
						tags: ["Administration"],
						url: "http://labs.sixdimensions.com/cta/systems.html"
					},
		{url:'',tags:'',color:''}
	],
	getRandomCTA: function(ctas) {
		ctas = typeof ctas !== 'undefined' ? ctas : CTA.ctas;
		var max = ctas.length;
		var rand = Math.floor(Math.random() * (max));
		return ctas[rand];
	},
	getCTA: function(){
		var matching = [];
		for(var i = 0; i < CTA.ctas.length - 1; i++){
			for(var j = 0; j < PageInfo.tags.length; j++) {
				if(CTA.ctas[i].tags != null && CTA.ctas[i].tags.indexOf(PageInfo.tags[j]) != -1){
					matching.push(CTA.ctas[i]);
					break;
				}
			}
		}
		if(matching.length == 0) {
			return CTA.getRandomCTA();
		} else {
			return CTA.getRandomCTA(matching);
		}
	},
	loadCTA: function(target){
		var cta = CTA.getCTA();
		$(target).append(cta.content.replace('[CURRENT_SITE]', PageInfo.site));		
		$(target).hover(function() {
			$(target).css('cursor','pointer');
		}, function() {
			$(target).css('cursor','auto');
		});
		$(target).click(function(){
			/* Track the cta click */
			_gaq.push(['_trackEvent', 'CTA', 'Click', $(target).attr('data-id')]);
			window.location = $($(target).find('a')[0]).attr('href');
		});
		$(target).addClass(cta.color);
		$(target).attr('data-id', cta.id);
	}
};
$(document).ready(function(){
	$('.cta').each(function(idx, elem){
		CTA.ctas.pop();
		CTA.loadCTA(elem);
	});
});
