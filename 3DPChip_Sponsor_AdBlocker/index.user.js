// ==UserScript==
// @name         3DPChip Sponsor AdBlocker
// @author       KlartNET
// @version      0.0.2
// @description  3DPChip Sponsor AdBlocker
// @updateURL    null
// @match        *://www.3dpchip.com/*
// @run-at       document-start
// ==/UserScript==

(function(_this) {
	'use strict';
	
	location.pathname == "/3dp/ad/index.html" && window.close();
})(this);
