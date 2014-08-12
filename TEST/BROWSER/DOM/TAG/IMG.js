TEST('IMG', function(ok) {
	'use strict';

	var
	// test div
	div = DIV({
		style : {
			position : 'fixed',
			left : 40,
			top : 40,
			backgroundColor : 'red',
			padding : 20,
			margin : 0
		},
		c :

		// image
		IMG({
			style : {
				width : 300
			},
			src : 'TEST/test.png'
		})
	}).appendTo(BODY);

	// remove div after 3 seconds.
	DELAY(3, function() {
		div.remove();
	});
});
