// ==UserScript==
// @name         3DPChip Sponsor AdBlocker
// @author       KlartNET
// @version      0.0.5
// @description  3DPChip Sponsor AdBlocker
// @updateURL    https://github.com/JadeMin/UserScripts/raw/main/3DPChip_Sponsor_AdBlocker/index.user.js
// @downloadURL  https://github.com/JadeMin/UserScripts/raw/main/3DPChip_Sponsor_AdBlocker/index.user.js
// @match        *://www.3dpchip.com/*
// ==/UserScript==

(function(_this) {
	'use strict';
	
	location.pathname == "/3dp/ad/index.html" && window.close();
})(this);
