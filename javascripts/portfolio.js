$(document).ready(function() {
	$.each(config, function(key, value) {
		var a =  $('<a>',{href:'#','class':'menu-item','data-task-id':key}).text(value.title);
		a.appendTo('.name-task');
		a.wrap( '<li></li>' );
	});
	$( '.name-task' ).on( "click", ".menu-item", function() {
		var taskId=$(this).attr('data-task-id');
		$('.name-task-title').text(config[taskId].title);
		$.get( './projects/'+taskId+'/description.txt', function( data ) {
			
			$( ".description" ).text( data );
		});
		$('.source-cod').attr('href','https://github.com/marina-zhezhel/portfolio/tree/gh-pages/projects/'+taskId);
		$('.result').attr('href','./projects/'+taskId+'/'+config[taskId]['index-file']);
		$('section').show();
		return false;
	});

	
});