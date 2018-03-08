$( document ).ready(function() {
    console.log( "ready!" );

    var messages = [];
    var $display = $("#display");

    $( "select, input" ).focus(function() {
    	// alert("select!")
	  	messages.push( "id='" + $(this).attr('id') + "'");
	  	messages.push( "focus" );
	  	


	  	for (var i = messages.length - 1; i >= 0; i--) {
    		$display.append( $("<li>").append( messages[i] ) );
    	};

	});


 // 	$( "select" ).on( "click", function() {
 //    	// alert("select!")
	//   	messages.push( "id='" + $(this).attr('id') + "'");
	//   	messages.push( "click" );
	//   	// messages.push( "valid? " + $(this).valid() );


	//   	for (var i = messages.length - 1; i >= 0; i--) {
 //    		$display.append( $("<li>").append( messages[i] ) );
 //    	};

	// });

	$( "input, select" ).on( "click", function() {
    	// alert("select!")
	  	
	  	messages.push( "id='" + $(this).attr('id') + "'");
	  	messages.push( "click" );
	  	messages.push( "valid? -- " + $(this)[0].checkValidity() ); // <====
	  	messages.push( "required? -- " + $(this).prop("required") );
	  	messages.push( "read-only? -- " + $(this).prop("readonly") );




	  	for (var i = messages.length - 1; i >= 0; i--) {
    		$display.append( $("<li>").append( messages[i] ) );
    	};

	});

	$("input").on( "blur", function() {
		messages.length = 0;
		$display.empty();
	});

	$("select").on( "blur", function() {
		messages.length = 0;
		$display.empty();
	});

    

    

	// $("#display").text( $(this).attr('id') + "is in focus" );

});