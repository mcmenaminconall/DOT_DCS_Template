function setUpDynamic() {

	// Dynamic Content variables and sample values
    Enabler.setProfileId(000000);
    var devDynamicContent = {};

    devDynamicContent.EXAMPLE = [{}];
    devDynamicContent.EXAMPLE[0]._id = 0;
    devDynamicContent.EXAMPLE[0].ID = 1;
    devDynamicContent.EXAMPLE[0].Reporting_Label = "TEST";
    devDynamicContent.EXAMPLE[0].exit_url = {};
    devDynamicContent.EXAMPLE[0].exit_url.Url = "";
    devDynamicContent.EXAMPLE[0].start_date = {};
    devDynamicContent.EXAMPLE[0].start_date.RawValue = "6/18/2019 0:00:00";
    devDynamicContent.EXAMPLE[0].start_date.UtcValue = 1560816000000;
    devDynamicContent.EXAMPLE[0].end_date = {};
    devDynamicContent.EXAMPLE[0].end_date.RawValue = "12/30/2019 23:59:59";
    devDynamicContent.EXAMPLE[0].end_date.UtcValue = 1577750399000;
    devDynamicContent.EXAMPLE[0].is_active = true;
    devDynamicContent.EXAMPLE[0].frames = 3;
    devDynamicContent.EXAMPLE[0].loops = 2;
    devDynamicContent.EXAMPLE[0].logo = {};
    devDynamicContent.EXAMPLE[0].logo.Type = "file";
    Enabler.setDevDynamicContent(devDynamicContent);
}

// ---------------------------------------------------------------------------------
// Dynamic Access
// ---------------------------------------------------------------------------------

function dynamic(){

	//window.logo.src = dynamicContent.EXAMPLE[0].logo.Url;

}

// ---------------------------------------------------------------------------------
// Doubleclick Main 
// ---------------------------------------------------------------------------------

var creative = {};

function preInit1() {
	setupDom();

	if (Enabler.isInitialized()) {
		init1();
	} else {
		Enabler.addEventListener(studio.events.StudioEvent.INIT,init1);
	}
}

function setupDom() {
	creative.dom = {};
	creative.dom.mainContainer = document.getElementById('main-container');
	creative.dom.logo = document.getElementById('logo');
	creative.dom.exit = document.getElementById('exit');
}

function init1() {
	addListeners();
	setUpDynamic();
	dynamic();

	if (Enabler.isVisible()) {
		show();
	}
	else {
		Enabler.addEventListener(studio.events.StudioEvent.VISIBLE, show);
	}
}

function addListeners() {
	creative.dom.exit.addEventListener('click', exitClickHandler);
}

function show() {
	animation();
}

function exitClickHandler() {
	Enabler.exitOverride('BackgroundExit', dynamicContent.EXAMPLE[0].exit_url.Url);
}

preInit1();

// ---------------------------------------------------------------------------------
// ANIMATION
// ---------------------------------------------------------------------------------

function animation(){

		var mainTimeLine = new TimelineLite();
		mainTimeLine.to("#loader", 0.25, {opacity: 0})
	
		//Setup
		//-------------------------------------------

	}