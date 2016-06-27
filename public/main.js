$(document).ready(function(){
	$('#shop_light_text').click(function(){
		$('.shop-modal-bg').show(500)
		$('#shop-light-modal').fadeIn(1500)
	})

	$('#shop_bold_text').click(function(){
		$('.shop-modal-bg').show(500)
		$('#shop-bold-modal').fadeIn(1500)
	})

	$('#shop_heavy_text').click(function(){
		$('.shop-modal-bg').show(500)
		$('#shop-heavy-modal').fadeIn(1500)
	})

	$('.shop-modal-bg').click(function(){
		$('.shop-modal-bg').fadeOut(2000)
		$('#shop-light-modal').fadeOut(1000)
		$('#shop-bold-modal').fadeOut(1000)
		$('#shop-heavy-modal').fadeOut(1000)
	})

	$('.close-button').click(function(){
		event.preventDefault()
		$('.shop-modal-bg').fadeOut(2000)
		$('#shop-light-modal').fadeOut(1000)
		$('#shop-bold-modal').fadeOut(1000)
		$('#shop-heavy-modal').fadeOut(1000)
	})

	$("#contactSubmit").click(function() {
		alert("Your message has been sent!")
	})
})