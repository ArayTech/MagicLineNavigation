$(document).ready(function() {

	

	$('nav ul').append('<li id="magicline"></li>');

	var active = $('nav ul').find('.active');
	var lebar = active.width();
	var posisi = active.position().left;

	$('#magicline').css({
		'width' : lebar,
		'left' : posisi,
	}).data('lebarawal', lebar)
	.data('posisiawal', posisi);

	$('nav ul li').find('a').hover(function(){
		var el = $(this);
		$('#magicline').css({
			'width' : el.parent().width(),
			'left' : el.position().left,
		});
	}, function(){
		$('#magicline').css({
			'width' : $('#magicline').data('lebarawal'),
			'left' : $('#magicline').data('posisiawal'),
		});
	});

	$('nav ul li a').click(function(){
		$('nav ul li').removeClass('active');
		$(this).parent('li').addClass('active');
		$('#magicline')
			.stop()
			.data('lebarawal', $('nav ul li.active').width())
			.data('posisiawal', $('nav ul li.active').position().left);
		// ,
	});

	$('#warna ul li span').each(function(){
		var warna = $(this).attr('warna');
		$(this).css('background',warna);
		$(this).click(function(){
			$('header .warnabg-kiri,header .warnabg-kanan').toggleClass('active');
			$('header .warnabg-kiri,header .warnabg-kanan').css('width','0').css({'background':warna,'width':'50%','opacity':'0.3'});
		});
	}).data('lebar', $('#warna ul li span').parent().width());

	$('#warna #hideshow').click(function(){
		$('#warna ul li span').toggleClass('active');
		$(this).children('i').toggleClass('active');
	});

	$(window).scroll(function(){
		var scrollv = $(this).scrollTop();
		$('header .bg').css('transform','translateY('+scrollv / 10+'%)');
	});

});	