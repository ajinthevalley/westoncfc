$(function() {

	//highlight the current nav
	$("#about a:contains('About')").parent().addClass('active');
	$("#Home a:contains('Home')").parent().addClass('active');
	$("#Beliefs a:contains('Beliefs')").parent().addClass('active');
    $("#Sermons a:contains('Sermons')").parent().addClass('active');
    $("#Blog a:contains('Pastor\'s Blog')").parent().addClass('active');

	$("#faith a:contains('Beliefs')").parent().addClass('active');
    $("#purpose a:contains('Beliefs')").parent().addClass('active');
    $("#covenant a:contains('Beliefs')").parent().addClass('active');
    
    $("#email a:contains('Contact')").parent().addClass('active');
    $("#map a:contains('Contact')").parent().addClass('active');

    $("#schedule a:contains('Ministries')").parent().addClass('active');

	//make menus drop automatically
	$('ul.nav li.dropdown').hover(function() {
		$('.dropdown-menu', this).fadeIn();
	}, function() {
		$('.dropdown-menu', this).fadeOut('fast');
	});//hover
	
}); //jQuery is loaded