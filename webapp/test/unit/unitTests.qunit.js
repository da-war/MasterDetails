/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"commaster_detail/master_details/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
