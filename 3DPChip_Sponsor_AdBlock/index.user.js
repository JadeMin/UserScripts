// ==UserScript==
// @name         3DPChip Sponsor AdBlock
// @author       KlartNET
// @version      0.0.8
// @description  3DPChip Sponsor AdBlock
// @icon         https://www.google.com/s2/favicons?sz=64&domain=www.3dpchip.com
// @updateURL    https://github.com/JadeMin/UserScripts/raw/main/3DPChip_Sponsor_AdBlock/index.user.js
// @downloadURL  https://github.com/JadeMin/UserScripts/raw/main/3DPChip_Sponsor_AdBlock/index.user.js
// @match        *://www.3dpchip.com/*
// @run-at       document-start
// ==/UserScript==

(function(_this) {
	'use strict';

	location.pathname == "/3dp/ad/index.html" && window.close();
})(this);
