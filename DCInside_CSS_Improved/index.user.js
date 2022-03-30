// ==UserScript==
// @name         DCInside DarkMode+
// @namespace    none
// @version      1.0.4
// @author       KlartNET
// @description  Improves DCInside Dark mode with CSS!
// @updateURL    
// @downloadURL  
// @icon         https://www.google.com/s2/favicons?sz=64&domain=dcinside.com
// @match        *://*.dcinside.com/*
// ==/UserScript==

(function(){
	'use strict';




	(function(){
		const css = [
			/*`* {
				font-family: "Roboto", "Arial", sans-serif !important;
			}`,*/
			`html.darkmode .write_div * {
				color: #1d1d1d !important;
				font-size: larger !important;
				font-weight: 600 !important;
			}`,
			`html.darkmode .usertxt {
				color: #dddddd !important;
				font-weight: 500 !important;
			}`,
			`html.darkmode, .darkmode .left_content, .darkmode .ad_bottom_list, .darkmode .dcfoot, html.darkmode, .darkmode body, .darkmode .btn_recommend_box, .darkmode .issuebox, .darkmode .all_ranklist, .darkmode .privacy_box, .darkmode .gall_guide, .darkmode .select_box.dccon_use, .darkmode .pop_tipbox.minor_tip .inner, .darkmode .under_paging, .darkmode .realtime_menu li a.on, .darkmode .integrate_schwrap .small_searchbox, .darkmode .integrate_schwrap .bottom_cont_box, .darkmode .mandu_pop .cate_group .tit, .darkmode .pop_wrap .inner_search, .darkmode .mandu_tab_box > button.on, .darkmode .mandu_pop .tab_content, .darkmode .calendar_wrap .inner, .darkmode .autodeltime_set .calendar_wrap .inner, .darkmode .cover, .darkmode.dgallog .innerbox, .darkmode .gallog_wrap, .darkmode .gallog_wrap .headbox, .darkmode .gallog_wrap .conent_wrap, .darkmode .miniwrap .minor_uadmin_setting .tab_box button.on, .darkmode .minor_make_chk .scroll, .darkmode.dgallog .guestbook .cont_listbox li.replys, .darkmode .pop_wrap.srs .inner {
				background-color: #212121 !important;
			}`
		];



		const styleElement = document.createElement('xcss');
		styleElement.className = "DCInside";
		styleElement.id = "ImproveReadability";
		styleElement.innerHTML = `<style>\n${css.join('\n\n')}\n</style>`;

		document.body.appendChild(styleElement);
		console.log(styleElement);
	})();
})();
