jQuery(document).ready(function(){
    jQuery('.item-title').click(function(){
        jQuery(this).next().slideToggle()
    })
    jQuery.getJSON( "/json/geometrias.json", function( data ) {
        var items = [];
        $.each( data, function( key, val ) {
          items.push( "<li id='" + key + "'>" + val + "</li>" );
        });
       
        $( "<ul/>", {
          "class": "my-new-list",
          html: items.join( "" )
        }).appendTo( "body" );
      });
})