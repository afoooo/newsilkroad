$(document).ready(function(){
	$('#shop_light').click(function(){
		$('#modal-bg').show(500)
		$('#modal').fadeIn(1500)
	})

	$('#shop_bold').click(function(){
		$('#modal-bg').show(500)
		$('#modal').fadeIn(1500)
	})

	$('#shop_heavy').click(function(){
		$('#modal-bg').show(500)
		$('#modal').fadeIn(1500)
	})

	$('#modal-bg').click(function(){
		$('#modal-bg').fadeOut(2000)
		$('#modal').fadeOut(1000)
	})

	$('#x-link').click(function(){
		$('#modal-bg').fadeOut(2000)
		$('#modal').fadeOut(1000)
	})
})