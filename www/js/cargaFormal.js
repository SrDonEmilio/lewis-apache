jQuery(document).ready(function(){
   jQuery('#calc-cf').click(function(){
       jQuery('#cf-result b').empty();
       let cargaf, evalencia, elibres, eenlace;
       evalencia = Number(jQuery('input#evalencia').val());
       elibres = Number(jQuery('input#elibres').val());
       eenlace = (jQuery('input#eenlace').val())/2;
       cargaf = elibres+eenlace;
       cargaf = evalencia - cargaf;
       jQuery('#cf-result b').append(cargaf);
       jQuery('#cf-result').show();
   });
});