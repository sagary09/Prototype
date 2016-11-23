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
$$('.prompt-title-ok').on('click', function () {
    myApp.prompt('What is your name?', 'Custom Title', function (value) {
        myApp.alert('Your name is "' + value + '". You clicked Ok button');
    });
});
// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('all_events', function (page) {
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
     document.getElementById('bradyForm').style.display = 'inline';
     document.getElementById('narrTitle').style.display = 'block'
     document.getElementById('emptyPro').style.display = 'none';
   }
   else{
   bradyForm.style.display='none';
   }
}
function show2(value) {
   if (value == "Vital Signs") {
     document.getElementById('vitals').style.display = 'inline';
   }
   else{
   vitals.style.display='none';
   }
}
function showDiv(){
    div= document.getElementById('check1');
    div.style.display = 'block';
    div= document.getElementById('txt1');
    div.style.display = 'block';
    div=document.getElementById('check-deselect');
    div.style.display = 'none';
 }
function showDiv3(){
  div= document.getElementById('check3');
  div.style.display = 'block';
  div= document.getElementById('txt3');
  div.style.display = 'block';
  div=document.getElementById('check-deselect3');
  div.style.display = 'none';
}
function showDiv4(){
  div= document.getElementById('check4');
  div.style.display = 'block';
  div= document.getElementById('txt4');
  div.style.display = 'block';
  div=document.getElementById('check-deselect4');
  div.style.display = 'none';
}
function showDiv5(){
  div= document.getElementById('check5');
  div.style.display = 'block';
  div= document.getElementById('txt5');
  div.style.display = 'block';
  div=document.getElementById('check-deselect5');
  div.style.display = 'none';
}
function showDiv6(){
  div= document.getElementById('check6');
  div.style.display = 'block';
  div= document.getElementById('txt6');
  div.style.display = 'block';
  div=document.getElementById('check-deselect6');
  div.style.display = 'none';
}
function showDiv7(){
  div= document.getElementById('check7');
  div.style.display = 'block';
  div= document.getElementById('txt7');
  div.style.display = 'block';
  div=document.getElementById('check-deselect7');
  div.style.display = 'none';
}

// function click1(){
//   document.all.section2.scrollIntoView(true);
// }
function section2(){
  window.scrollTo(0,0);
}
function click2(){
  document.all.section3.scrollIntoView(true);
}
function section3(){
  window.scrollTo(0,0);
}

myApp.onPageInit('all_events',function (page){
  // $$('#click1').on('click',function(e){
  //   e.preventDefault();
  //   console.log('hi');
  //   $.scrollTo('#section2',1000,{
  //     over:0.01
  //   });
  // })
  console.log('hi');
  $('#click1').localScroll({
   target:'#section2'
});
})




// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('empty_screens', function (page) {
    // run createContentPage func after link was clicked
    var protocol =["12 Lead", "Contact/Consent" , "CPR", "Defib", "EKG", "EPINEPHrine","Event", "HPI", "Initial Assessment", "Intubate","IO","IV","Narcan","Oxygen", "Reeves","Stair Chair","Stretcher","Sugar","Transport","Vital Signs"];
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
    var protocol =["12 Lead", "Contact/Consent" , "CPR", "Defib", "EKG", "EPINEPHrine","Event" ,"HPI", "Initial Assessment", "Intubate","IO","IV","Narcan","Oxygen" ,"Reeves","Stair Chair","Stretcher","Sugar","Transport","Vital Signs"];
    var autocompleteDropdownEvent = myApp.autocomplete({
        input: '#autocomplete-dropdown-event1',
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

myApp.onPageInit('event-step2', function (page) {
    // run createContentPage func after link was clicked
    var protocol =["12 Lead", "Contact/Consent" , "CPR", "Defib", "EKG", "EPINEPHrine","Event" ,"HPI", "Initial Assessment", "Intubate","IO","IV","Narcan","Oxygen" ,"Reeves","Stair Chair","Stretcher","Sugar","Transport","Vital Signs"];
    var autocompleteDropdownEvent = myApp.autocomplete({
        input: '#autocomplete-dropdown-event2',
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

myApp.onPageInit('event-step3', function (page) {
    // run createContentPage func after link was clicked
    var protocol =["12 Lead", "Contact/Consent" , "CPR", "Defib", "EKG", "EPINEPHrine","Event" ,"HPI", "Initial Assessment", "Intubate","IO","IV","Narcan","Oxygen" ,"Reeves","Stair Chair","Stretcher","Sugar","Transport","Vital Signs"];
    var autocompleteDropdownEvent = myApp.autocomplete({
        input: '#autocomplete-dropdown-event3',
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
