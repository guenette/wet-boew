/*!
 *
 * Web Experience Toolkit (WET) / Boîte à outils de l'expérience Web (BOEW)
 * wet-boew.github.com/wet-boew/License-eng.txt / wet-boew.github.com/wet-boew/Licence-fra.txt
 *
 * Version: v3.1.0-b2 Build: 2013-01-29 02:44 PM
 *
 */
(function(c){var b,a;b=(typeof window.wet_boew_theme!=="undefined"&&window.wet_boew_theme!==null)?window.wet_boew_theme:{fn:{}};a={theme:"theme-wet-boew",psnb:null,search:null,bcrumb:null,title:null,sft:null,fullft:null,menu:null,init:function(){b.fullhd=pe.header.find("#wet-fullhd");b.psnb=pe.header.find("#wet-psnb");b.menubar=b.psnb.find(".wet-boew-menubar");b.search=pe.header.find("#wet-srchbx");b.bcrumb=pe.header.find("#wet-bc");b.title=pe.header.find("#wet-title");b.sft=pe.footer.find("#wet-sft");b.fullft=pe.footer.find("#wet-fullft");var e=pe.menu.navcurrent(b.menubar,b.bcrumb),d=e.parents("div.mb-sm");if(d.length!==0){d.prev().children("a").addClass("nav-current")}if(pe.secnav.length!==0){pe.menu.navcurrent(pe.secnav,b.bcrumb)}if(b.psnb.length!==0&&b.search.length===0){b.psnb.addClass("mobile-change")}else{if(b.psnb.length===0&&b.search.length!==0){b.search.addClass("mobile-change")}}},mobileview:function(){var p,x,f="",o=pe.dic.get("%menu"),m=pe.dic.get("%search"),g,u,q,v="",j='data-role="popup" data-overlay-theme="a"',e='<a href="#" data-rel="back" data-role="button" data-theme="a" data-icon="delete" data-iconpos="notext" class="ui-btn-'+((pe.rtl)?"left":"right")+'">'+pe.dic.get("%close")+"</a>",l="",r,d,h,k,w,y,s,t,n;if(b.menubar.length!==0||pe.secnav.length!==0||b.search.length!==0){w=b.menubar.find("ul.mb-menu li");p="<div "+j+' id="jqm-wb-mb"><div data-role="header">';g=(pe.secnav.length!==0?pe.secnav[0].getElementsByTagName("h2")[0]:"");x=(b.menubar.length!==0?b.psnb.children(":header")[0]:(pe.secnav.length!==0?g:b.bcrumb.children(":header")[0])).innerHTML;p+="<h1>"+o+"</h1>"+e+'</div><div data-role="content" data-inset="true"><nav role="navigation">';if(b.bcrumb.length!==0){n=b.bcrumb[0];p+='<section><div id="jqm-mb-location-text">'+n.innerHTML+"</div></section>";n.parentNode.removeChild(n)}else{p+='<div id="jqm-mb-location-text"></div>'}if(pe.secnav.length!==0){f+="<section><div><h2>"+g.innerHTML+'</h2><div data-role="controlgroup">'+pe.menu.buildmobile(pe.secnav.find(".wb-sec-def"),3,"b",false,true,"c",true,true)+"</div></div></section>";n=pe.secnav[0];n.parentNode.removeChild(n)}if(b.menubar.length!==0){f+="<section><div><h2>"+x+'</h2><div data-role="controlgroup">'+pe.menu.buildmobile(w,3,"a",true,true,"c",true,true)+"</div></div></section>"}p+='<div id="jqm-mb-menu"></div></nav></div></div></div>';v+=p;b.menu=f;l+='<li><a data-rel="popup" data-theme="a" data-icon="site-menu" href="#jqm-wb-mb">'+o+"</a></li>"}if(b.search.length!==0){u=b.search[0].innerHTML;q="<div "+j+' id="jqm-wb-search"><div data-role="header"><h1>'+m+"</h1>"+e+'</div><div data-role="content"><div>'+u.substring(u.indexOf("<form"))+"</div></div></div>";v+=q;l+='<li><a data-rel="popup" data-theme="a" data-icon="search" href="#jqm-wb-search">'+m+"</a></li>"}pe.bodydiv.append(v);if(l.length!==0){r=c('<div data-role="navbar" data-iconpos="right"><ul class="wb-hide">'+l+"</ul></div>");b.title.after(r)}if(b.sft.length!==0){d=b.sft.find(".wet-col-head a").get();y=document.getElementById("wet-sft-in");if(b.fullft.length!==0){n=b.fullft[0];n.parentNode.removeChild(n)}k='<ul class="ui-grid-a">';for(s=0,t=d.length;s<t;s+=1){h=d[s];k+='<li class="ui-block-'+(s%2!==0?"b":"a")+'"><a href="'+h.href+'" data-role="button" data-theme="c" data-corners="false">'+h.innerHTML+"</a></li>"}k+="</ul>";y.id="";y.className="";y.setAttribute("data-role","footer");y.innerHTML=k}c(document).on("pagecreate",function(){if(b.menubar.length!==0){n=b.psnb[0];n.parentNode.removeChild(n)}if(b.search.length!==0){n=b.search[0];n.parentNode.removeChild(n)}if(l.length!==0){r.children().removeClass("wb-hide");var z=pe.bodydiv.find("#jqm-mb-menu");if(z.length!==0){z.append(b.menu);r.find('a[href="#jqm-wb-mb"]').one("click vclick",function(){z.trigger("create");pe.menu.correctmobile(z)})}}function i(B,A,E,D){var C;c.mobile.showPageLoadingMsg();C=c.mobile.transitionHandlers.simultaneous("pop",A,E,D);C.done(function(){c.mobile.hidePageLoadingMsg()});return C}c.mobile.transitionHandlers.loadingTransition=i;c.mobile.defaultDialogTransition="loadingTransition"});c(document).trigger("themeviewloaded");return},desktopview:function(){var e,d;if(pe.ie>0&&pe.ie<9){e=c("input, textarea, select, button").get()}else{e=document.querySelectorAll("input, textarea, select, button")}d=e.length;while(d--){e[d].setAttribute("data-role","none")}c(document).trigger("themeviewloaded")}};window.wet_boew_theme=c.extend(true,b,a);return window.wet_boew_theme}(jQuery));