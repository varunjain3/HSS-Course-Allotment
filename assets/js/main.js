(function ($) {
  "use strict";

  // Preloader
  $(window).on('load', function () {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function () {
        $(this).remove();
      });
    }
  });

  // Back to top button
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });
  $('.back-to-top').click(function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  /*--/ Star ScrollTop /--*/
  $('.scrolltop-mf').on("click", function () {
    $('html, body').animate({
      scrollTop: 0
    }, 1000);
  });

  /*--/ Star Counter /--*/
  $('.counter').counterUp({
    delay: 15,
    time: 2000
  });

  /*--/ Star Scrolling nav /--*/
  var mainNav_height = $('#mainNav').outerHeight() - 22;
  $('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        var scrollto = target.offset().top - mainNav_height;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Scroll to sections on load with hash links
  if (window.location.hash) {
    var initial_nav = window.location.hash;
    if ($(initial_nav).length) {
      var scrollto_initial = $(initial_nav).offset().top - mainNav_height;
      $('html, body').animate({
        scrollTop: scrollto_initial
      }, 1000, "easeInOutExpo");
    }
  }

  /*--/ Star Typed /--*/
  if ($('.text-slider').length == 1) {
    var typed_strings = $('.text-slider-items').text();
    var typed = new Typed('.text-slider', {
      strings: typed_strings.split(','),
      typeSpeed: 80,
      loop: false,
      backDelay: 1100,
      backSpeed: 30
    });
  }

  var border_color = $('#name').css('border-color');
  var border_width = $('#name').css('border-width');
  var error_color = "#d93025";
  var error_width = "3px";
  var w = (new Date).getFullYear();
  var programs = ["-Select-", "B.Tech", "M.Tech", "MSc", "MA", "PhD"];
  // https://beautifytools.com/excel-to-json-converter.php
  var courses = {
      "Sheet1": [
          {
              "Course Code": "HS 104",
              "Course Name": "Foundational Sanskrit",
              "Course Cap": "40"
          },
          {
              "Course Code": "HS 108",
              "Course Name": "Japan Studies",
              "Course Cap": "40"
          },
          {
              "Course Code": "HS 111",
              "Course Name": "Urdu Script & Poetry",
              "Course Cap": "40"
          },
          {
              "Course Code": "HS 112",
              "Course Name": "Urdu Poetry Interpretation",
              "Course Cap": "40"
          },
          {
              "Course Code": "HS 211",
              "Course Name": "Exploring India’s Scientific and Technological Heritage",
              "Course Cap": "40"
          },
          {
              "Course Code": "HS 223",
              "Course Name": "Sanskrit Literature",
              "Course Cap": "40"
          },
          {
              "Course Code": "HS 305",
              "Course Name": "Perspectives in Psychology",
              "Course Cap": "40"
          },
          {
              "Course Code": "HS 391",
              "Course Name": "Special Topics in HSS: Music Traditions of India",
              "Course Cap": "40"
          },
          {
              "Course Code": "HS 313",
              "Course Name": "When You Cannot Experiment: Social Science Methods",
              "Course Cap": "40"
          },
          {
              "Course Code": "HS 411",
              "Course Name": "Economic Concepts and Issues in Project Analysis",
              "Course Cap": "40"
          },
          {
              "Course Code": "HS 425",
              "Course Name": "Introduction to Archaeology",
              "Course Cap": "40"
          },
          {
              "Course Code": "HS 491-I",
              "Course Name": "Special Topics in HSS: Indian philosophy through the ages",
              "Course Cap": "40"
          },
          {
              "Course Code": "HS 491-II",
              "Course Name": "Special Topics in HSS: The ‘engineering’ of theatre-making",
              "Course Cap": "40"
          },
          {
              "Course Code": "HS 491-III",
              "Course Name": "Special Topics in HSS: Storytelling for the Digital Era",
              "Course Cap": "40"
          },
          {
              "Course Code": "HS 507",
              "Course Name": "Humanism, Anti-Humanism, and Posthumanism",
              "Course Cap": "40"
          },
          {
              "Course Code": "HS 510",
              "Course Name": "Perspectives on Indian Civilization",
              "Course Cap": "40"
          },
          {
              "Course Code": "HS 512",
              "Course Name": "Political Thought",
              "Course Cap": "40"
          },
          {
              "Course Code": "HS 515",
              "Course Name": "The Politics of the Environment",
              "Course Cap": "40"
          },
          {
              "Course Code": "HS 518",
              "Course Name": "Philosophy, Cognition and Psychoanalysis",
              "Course Cap": "40"
          },
          {
              "Course Code": "HS 519",
              "Course Name": "Linguistic Anthropology",
              "Course Cap": "40"
          },
          {
              "Course Code": "HS 610",
              "Course Name": "A Critical Journey Through Select Thoughts and Theories",
              "Course Cap": "40"
          },
          {
              "Course Code": "HS 645",
              "Course Name": "History of India, 1930-1964",
              "Course Cap": "40"
          },
          {
              "Course Code": "HS 691-I",
              "Course Name": "Special Topics in HSS: Themes in Postcolonialism",
              "Course Cap": "40"
          },
          {
              "Course Code": "HS 691-II",
              "Course Name": "Special topics in HSS: Applied statistics: Multilevel modeling",
              "Course Cap": "30"
          },
          {
              "Course Code": "IN 304",
              "Course Name": "Ancient Indian Technology",
              "Course Cap": "40"
          },
          {
              "Course Code": "MS 304",
              "Course Name": "Organizational Behaviour & Human Resource Management (OB & HRM)",
              "Course Cap": "40"
          },
          {
              "Course Code": "MS 403",
              "Course Name": "Engineering Entrepreneurship",
              "Course Cap": "40"
          },
          {
              "Course Code": "MS 491",
              "Course Name": "Special topics in Management: Marketing Analytics",
              "Course Cap": "40"
          },
          {
              "Course Code": "HS 691-III",
              "Course Name": "Special Topics in HSS: Abnormal Psychology",
              "Course Cap": "40"
          },
          {
              "Course Code": "HS 327",
              "Course Name": "Anthropology, Citizenship and Human Rights (Half Sem course, 2nd Half)",
              "Course Cap": "40"
          },
          {
              "Course Code": "MS 492",
              "Course Name": "Special Topics in Management: Finance Management (2 credit course that will run for entire semester, ~2 hours each week)",
              "Course Cap": "40"
          },
          {
              "Course Code": "MS 491-I",
              "Course Name": "Special Topics in Management: Product Management",
              "Course Cap": "40"
          }
      ]
  };
  courses = courses["Sheet1"];
  var course_list = [];
  var num_courses = courses.length;
  for(var i=0;i<num_courses;i++){
    course_list.push([courses[i]["Course Code"],courses[i]["Course Name"]]);
  }
  console.log(course_list);
  var temp = '<div id="preference-1" class="post-box remove-padding">\n<div class="row widget-sidebar form-group">\n<p>\nPreference #1 <sup class="required">*</sup>\n <br>\n </p>\n <select class="form-control prefs" id="pref1" name="pref1" placeholder="Your Answer">\n <option value="-Select-">-Select-</option>\n   </select>\n  <p class="error-msg" id="pref1-error"></p>\n  </div>\n</div>';

  $.fn.add_options = function (e) {
    $.each(course_list, function (index, value) {
      $(e).append("<option value='" + value[0] + "'>" + value[0]+" - "+ value[1] + "</option>");
    });
  }
  
  /*--/ Name /--*/
  $('#name').change(function () {
    if (!$('#name').val()) {
      $(this).css("border-color", error_color);
      $(this).css("border-width", error_width);
      $('#name-error').css("display", "block");
      $('#name-error').text("This is a required question");
    }
    else {
      $(this).css("border-color", border_color);
      $(this).css("border-width", border_width);
      $('#name-error').css("display", "none");
      $('#name-error').text("");
    }
  });

  /*--/ Email /--*/
  $('#email').change(function(){
    if (!$('#email').val() || $('#email').val().substring($('#email').val().length-12)!='@iitgn.ac.in'){
      $('#email-error').css("display", "block");
      $('#email').css("border-color", error_color);
      $('#email').css("border-width", error_width);
      if(!$('#email').val()){
        $('#email-error').text("This is a required question");
      }
      else{
        $('#email-error').text("Invalid Email Address. You must provide your IITGN email address.");
      }
    }
    else{
      $('#email-error').css("display", "none");
      $('#email').css("border-color", border_color);
      $('#email').css("border-width", border_width);
      $('#email-error').text("");
    }
  });

  /*--/ Roll Number /--*/

  $('#roll').change(function () {
    if ($.isNumeric($(this).val())) {
      var v = $(this).val();
      if (v.length == 8) {
        $(this).css("border-color", border_color);
        $(this).css("border-width", border_width);
        $('#roll-error').css("display", "none");
        $('#roll-error').text("");
      }
      else {
        $(this).css("border-color", error_color);
        $(this).css("border-width", error_width);
        $('#roll-error').css("display", "block");
        $('#roll-error').text("Invalid Input");

      }
    }
    else {
      if (!$('#roll').val()) {
        $(this).css("border-color", error_color);
        $(this).css("border-width", error_width);
        $('#roll-error').css("display", "block");
        $('#roll-error').text("This is a required question");
      }
      else {
        $(this).css("border-color", error_color);
        $(this).css("border-width", error_width);
        $('#roll-error').css("display", "block");
        $('#roll-error').text("Invalid Input");
      }
    }
  });

  /*--/ Programme /--*/
  $('#program').change(function () {
    if ($('#program').val() == "-Select-") {
      $(this).css("border-color", error_color);
      $(this).css("border-width", error_width);
      $('#program-error').css("display", "block");
      $('#program-error').text("This is a required question");
    }
    else {
      $(this).css("border-color", border_color);
      $(this).css("border-width", border_width);
      $('#program-error').css("display", "none");
      $('#program-error').text("");
    }
  });

  /*--/ Year of Joining /--*/

  $('#year').change(function () {
    if ($.isNumeric($(this).val())) {
      var v = parseInt($(this).val(), 10);
      if (v >= w - 15 && v <= w) {
        $(this).css("border-color", border_color);
        $(this).css("border-width", border_width);
        $('#year-error').css("display", "none");
        $('#year-error').text("");
      }
      else {
        $(this).css("border-color", error_color);
        $(this).css("border-width", error_width);
        $('#year-error').css("display", "block");
        $('#year-error').text("Invalid Input");

      }
    }
    else {
      if (!$('#year').val()) {
        $(this).css("border-color", error_color);
        $(this).css("border-width", error_width);
        $('#year-error').css("display", "block");
        $('#year-error').text("This is a required question");
      }
      else {
        $(this).css("border-color", error_color);
        $(this).css("border-width", error_width);
        $('#year-error').css("display", "block");
        $('#year-error').text("Invalid Input");
      }
    }
  });

  /*--/ Unique Code /--*/
  $('#code').change(function () {
    if (!$('#code').val()) {
      $(this).css("border-color", error_color);
      $(this).css("border-width", error_width);
      $('#code-error').css("display", "block");
      $('#code-error').text("This is a required question");
    }
    else {
      $(this).css("border-color", border_color);
      $(this).css("border-width", border_width);
      $('#code-error').css("display", "none");
      $('#code-error').text("");
    }
  });

  /*--/ Number of Courses /--*/
  $('#num-reg').attr("max", num_courses);
  $('#num-reg').change(function () {
    if (($('#num-reg').val() >= 1 && $('#num-reg').val() <= num_courses) && ( $('#num-reg').val() <= $('#num-pref').val() )) {
      $('#num-reg-error').css("display", "none");
      $('#num-reg-error').text("");
      $('#num-reg').css("border-color", border_color);
      $('#num-reg').css("border-width", border_width);
      if($('#num-pref').val() >= 1 && $('#num-pref').val() <= num_courses){
        $('#num-pref-error').css("display", "none");
        $('#num-pref-error').text("");
        $('#num-pref').css("border-color", border_color);
        $('#num-pref').css("border-width", border_width);
      }
    }
    else if ($('#num-reg').val() > $('#num-pref').val()){
      $('#num-reg-error').css("display", "block");
      $('#num-reg-error').text("Number of required courses cannot exceed number of preferences");
      $('#num-reg').css("border-color", error_color);
      $('#num-reg').css("border-width", error_width);
      $('#num-pref-error').css("display", "block");
      $('#num-pref-error').text("Number of required courses cannot exceed number of preferences");
      $('#num-pref').css("border-color", error_color);
      $('#num-pref').css("border-width", error_width);
    }
    else {
      $('#num-reg-error').css("display", "block");
      $('#num-reg-error').text("Value must be between 1 and " + num_courses);
      $('#num-reg').css("border-color", error_color);
      $('#num-reg').css("border-width", error_width);
    }
  });

  /*--/ Course Preferences /--*/

  $('#num-pref').attr("max", num_courses);
  $.fn.add_options('#pref1');
  $(document).ready(function () {
    $('#pref1').select2();
  });

  $('#num-pref').change(function () {
    if ($('#num-pref').val() >= 1 && $('#num-pref').val() <= num_courses) {
      $('#num-pref-error').css("display", "none");
      $('#num-pref-error').text("");
      $('#num-pref').css("border-color", border_color);
      $('#num-pref').css("border-width", border_width);
      if ($('#num-reg').val() > $('#num-pref').val()){
        $('#num-reg-error').css("display", "block");
        $('#num-reg-error').text("Number of required courses cannot exceed number of preferences");
        $('#num-reg').css("border-color", error_color);
        $('#num-reg').css("border-width", error_width);
        $('#num-pref-error').css("display", "block");
        $('#num-pref-error').text("Number of required courses cannot exceed number of preferences");
        $('#num-pref').css("border-color", error_color);
        $('#num-pref').css("border-width", error_width);
      }
      else{
        $('#num-pref-error').css("display", "none");
        $('#num-pref-error').text("");
        $('#num-pref').css("border-color", border_color);
        $('#num-pref').css("border-width", border_width);
        if($('#num-reg').val() >= 1 && $('#num-reg').val() <= num_courses){
          $('#num-reg-error').css("display", "none");
          $('#num-reg-error').text("");
          $('#num-reg').css("border-color", border_color);
          $('#num-reg').css("border-width", border_width);
        }
      }
      var prefs = $("#preferences .post-box");
      if (prefs.length <= $(this).val()) {
        var v = prefs.length + 1;
        while (v <= $(this).val()) {
          $("#preferences").append(temp);
          $("#preferences .post-box:last").attr("id", "preference-" + v);
          $("#preference-" + v + " p:first").html("Preference #" + v + '<sup class="required">*</sup>');
          $("#preference-" + v + " .form-control").attr("id", "pref" + v);
          $("#preference-" + v + " .form-control").attr("name", "pref" + v);
          $("#preference-" + v + " .error-msg").attr("id", "pref" + v + "-error");
          $.fn.add_options('#pref' + v);
          $('#pref' + v).select2();
          v = v + 1;
        };
      }
      else {
        var v = parseInt($(this).val(), 10);
        var w = prefs.length;
        while (w > v) {
          $("#preference-" + w).remove();
          w -= 1;
        };
      }
    }
    else {
      $('#num-pref-error').css("display", "block");
      $('#num-pref-error').text("Number of course preferences must be between 1 and " + num_courses);
      $('#num-pref').css("border-color", error_color);
      $('#num-pref').css("border-width", error_width);
    }
  });

  $('#preferences').on('change', '.prefs', function () {
    var num_prefs = parseInt($('#num-pref').val(), 10);
    var i = 1;
    while (i <= num_prefs) {
      var flag = false;
      if ($('#pref' + i).val() == "-Select-") {
        flag = true;
        $('#pref' + i + '-error').css("display", "block");
        $('#pref' + i).css("border-color", error_color);
        $('#pref' + i).css("border-width", error_width);
        $('#pref' + i + '-error').text("Please select a course");
        i += 1;
        continue;
      }
      var j = 1;
      while (j <= num_prefs) {
        if (i != j && $('#pref' + i).val() == $('#pref' + j).val()) {
          flag = true;
          $('#pref' + i + '-error').css("display", "block");
          $('#pref' + i).css("border-color", error_color);
          $('#pref' + i).css("border-width", error_width);
          $('#pref' + i + '-error').text("A course can be selected at most once as a preference");
        }
        j += 1;
      }
      if (!flag) {
        $('#pref' + i + '-error').css("display", "none");
        $('#pref' + i).css("border-color", border_color);
        $('#pref' + i).css("border-width", border_width);
        $('#pref' + i + '-error').text("");
      }
      i += 1;
    }
  });

  /*************************/
  /*--/ Form Validation /--*/
  /*************************/

  $.fn.wait = function(e){
    e.preventDefault();
    return false;
  }
  // $('form').on('submit',function (e) {
  $.fn.form_submit = function(e){
    e.preventDefault();
    var failed = false;

    /* Validating Name */
    if (!$('#name').val()) {
      failed = true;
      $('#name-error').css("display", "block");
      $('#name-error').text("This is a required question");
      $('#name').css("border-color", error_color);
      $('#name').css("border-width", error_width);
    }

    /* Validating Email */
    if (!$('#email').val() || $('#email').val().substring($('#email').val().length-12)!='@iitgn.ac.in'){
      failed = true;
      $('#email-error').css("display", "block");
      $('#email').css("border-color", error_color);
      $('#email').css("border-width", error_width);
      if(!$('#email').val()){
        $('#email-error').text("This is a required question");
      }
      else{
        $('#email-error').text("Invalid Email Address. You must provide your IITGN email address.");
      }
    }

    /* Validating Roll Number */
    if ($('#roll').val().length != 8 || !$.isNumeric($('#roll').val())) {
      failed = true;
      $('#roll-error').css("display", "block");
      $('#roll').css("border-color", error_color);
      $('#roll').css("border-width", error_width);
      if (!$('#roll').val()) {
        $('#roll-error').text("This is a required question");
      }
      else {
        $('#roll-error').text("Invalid Input");
      }
    }
    else {
      $('#roll').change();
    }

    /* Validating Programme */
    if ($('#program').val() == "-Select-") {
      failed = true;
      $('#program-error').css("display", "block");
      $('#program-error').text("This is a required question");
      $('#program').css("border-color", error_color);
      $('#program').css("border-width", error_width);
    }
    else if ($.inArray($('#program').val(), programs) == -1) {
      failed = true;
      $('#program-error').css("display", "block");
      $('#program-error').text("Invaid Input");
      $('#program').css("border-color", error_color);
      $('#program').css("border-width", error_width);
    }
    else {
      $('#program-error').css("display", "none");
      $('#program-error').text("");
      $('#program').css("border-color", border_color);
      $('#program').css("border-width", border_width);
    }
    $.each(programs, function (index, value) {
      $('#program-' + index).text(value);
      $('#program-' + index).val(value);
    });

    /* Validating Year of Joining */
    if (!$.isNumeric($('#year').val()) || w - 15 > $('#year').val() || $('#year').val() > w) {
      failed = true;
      $('#year-error').css("display", "block");
      $('#year').css("border-color", error_color);
      $('#year').css("border-width", error_width);
      if (!$('#year').val()) {
        $('#year-error').text("This is a required question");
      }
      else {
        $('#year-error').text("Invalid Input");
      }
    }

    /* Unique Code */
    if (!$('#code').val()) {
      failed = true;
      $('#code-error').css("display", "block");
      $('#code-error').text("This is a required question");
      $('#code').css("border-color", error_color);
      $('#code').css("border-width", error_width);
    }

    /* Number of Courses Required */
    if ((!$.isNumeric($('#num-reg').val())) || ($('#num-reg').val() > num_courses) || ($('#num-reg').val() < 1)){
      failed = true;
      $('#num-reg-error').css("display", "block");
      $('#num-reg-error').text("Value must be between 1 and " + num_courses);
      $('#num-reg').css("border-color", error_color);
      $('#num-reg').css("border-width", error_width);
    }

    if ($('#num-reg').val()>$('#num-pref')){
      failed= true;
      $('#num-reg-error').css("display", "block");
      $('#num-reg-error').text("Number of required courses cannot exceed number of preferences");
      $('#num-reg').css("border-color", error_color);
      $('#num-reg').css("border-width", error_width);
      $('#num-pref-error').css("display", "block");
      $('#num-pref-error').text("Number of required courses cannot exceed number of preferences");
      $('#num-pref').css("border-color", error_color);
      $('#num-pref').css("border-width", error_width);
    }

    var num_pref_invalid = false;
    /* Validating Number of Preferences */
    if ((!$.isNumeric($('#num-pref').val())) || ($('#num-pref').val() > num_courses) || ($('#num-pref').val() < 1)){
      failed = true;
      num_pref_invalid= true;
      $('#num-pref-error').css("display", "block");
      $('#num-pref').css("border-color", error_color);
      $('#num-pref').css("border-width", error_width);
      $('#num-pref-error').text("Number of course preferences must be between 1 and " + num_courses);
    }

    /* Validating Course Preferences */
    if (!num_pref_invalid){
      var num_prefs = parseInt($('#num-pref').val(), 10);
      var i = 1;
      while (i <= num_prefs) {
        var j = i + 1;
        if ($('#pref' + i).val() == "-Select-") {
          failed = true;
          $('#pref' + i + '-error').css("display", "block");
          $('#pref' + i).css("border-color", error_color);
          $('#pref' + i).css("border-width", error_width);
          $('#pref' + i + '-error').text("Please select a course");
          i+=1;
          continue;
        }
        while (j <= num_prefs) {
          if ($('#pref' + i).val() == $('#pref' + j).val()) {
            failed = true;
            $('#pref' + i + '-error').css("display", "block");
            $('#pref' + i).css("border-color", error_color);
            $('#pref' + i).css("border-width", error_width);
            $('#pref' + i + '-error').text("A course can be selected at most once as a preference");
            $('#pref' + j + '-error').css("display", "block");
            $('#pref' + j).css("border-color", error_color);
            $('#pref' + j).css("border-width", error_width);
            $('#pref' + j + '-error').text("A course can be selected at most once as a preference");
          }
          j += 1;
        }
        i += 1;
      }
    }

    if (failed) {
      $('html, body').animate({scrollTop: $("#main").offset().top}, 2000);
      return false;
    }
    var form_data = {
      "Name": $('#name').val(),
      "Email": $('#email').val(),
      "Roll Number": $('#roll').val(),
      "Programme": $('#program').val(),
      "Year": $('#year').val(),
      "Unique Code":$('#code').val(),
      "Number of courses to register": $('#num-reg').val(),
      "Number of Preferences": $('#num-pref').val(),
    };
    var i = 1;
    var num_prefs = $('#num-pref').val();
    while (i <= num_prefs) {
      form_data['Preference #' + i] = $('#pref' + i).val();
      i += 1;
    }

    const scriptURL = 'https://script.google.com/macros/s/AKfycbydsm9liXMOtru9hjsGcGeVe-3fR82M7VkkV7RVUV9j06vwMxXSDQTDnVvfrv75ukmqMQ/exec';
    $.get(scriptURL, form_data, function(response){
      $('form').off('submit',$.fn.wait);
      if(response.result=="success"){
        swal("Success!", "Your response was recorded!", "success").then(value => {$('form').submit();});
      }
      else{
        $('form').on('submit',$.fn.form_submit);
        swal("Error!", "There was an error in submitting the form. Please try again.", "error");
      }
    });
    $('form').off('submit',$.fn.form_submit);
    $('form').on('submit',$.fn.wait);
    return false;
  };
  $('form').on('submit',$.fn.form_submit);

})(jQuery);