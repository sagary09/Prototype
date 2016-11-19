// Initialize your app
var myApp = new Framework7();

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: false
});


var mySwiper = myApp.swiper('.swiper-container', {
    pagination:'.swiper-pagination'
  });

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('empty_screens', function (page) {
    // run createContentPage func after link was clicked
    var protocol =["3001-Airway Obsrtuction"," 3031A-General Cardiac Arrest","4001-Airway Management ", " 4002-Sedation-Assisted Intubation ","5021A-Bradycardia-Adult"," 5021P-Bradycardia-Pediatric", " 6003-Extremity Trauma"," 6004-Crush Syndrome" ];
    var autocompleteDropdownAll = myApp.autocomplete({
        input: '#autocomplete-dropdown-all',
        openIn: 'dropdown',
        expandInput: true,
        source: function (autocomplete, query, render) {
            var results = [];
            // Find matched items
            for (var i = 0; i < protocol.length; i++) {
                if (protocol[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(protocol[i]);
            }
            // Render items by passing array with result items
            render(results);
        }
    });
});
function show(value) {
   if (value == "5021A-Bradycardia-Adult") {
     document.getElementById('section1').style.display = 'inline';
     document.getElementById('emptyPro').style.display = 'none';
   }
   else{
   section1.style.display='none';
   }
 }

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('empty_screens', function (page) {
    // run createContentPage func after link was clicked
    var protocol =["Assessment"," Contact" , "CPR", "Defib", "EKG", "EPINEPHrine", "HPI"];
    var autocompleteDropdownEvent = myApp.autocomplete({
        input: '#autocomplete-dropdown-event',
        openIn: 'dropdown',
        expandInput: true,
        source: function (autocomplete, query, render) {
            var results = [];
            // Find matched items
            for (var i = 0; i < protocol.length; i++) {
                if (protocol[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(protocol[i]);
            }
            // Render items by passing array with result items
            render(results);
        }
    });
});

myApp.onPageInit('event-step1', function (page) {
    // run createContentPage func after link was clicked
    var protocol =["Assessment"," Contact" , "CPR", "Defib", "EKG", "EPINEPHrine", "HPI"];
    var autocompleteDropdownEvent = myApp.autocomplete({
        input: '#autocomplete-dropdown-event',
        openIn: 'dropdown',
        expandInput: true,
        source: function (autocomplete, query, render) {
            var results = [];
            // Find matched items
            for (var i = 0; i < protocol.length; i++) {
                if (protocol[i].toLowerCase().indexOf(query.toLowerCase()) >= 0) results.push(protocol[i]);
            }
            // Render items by passing array with result items
            render(results);
        }
    });

});


// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}
