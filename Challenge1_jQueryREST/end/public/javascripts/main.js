//RAMI Added API call.
$(function(){
	$.get('/api/',  function( data ) {
		$( ".results" ).html( data.message );
	});
});