$(document).ready(function(){
	$('.frame input').on('click',function(){
		var arr = {a : "" , b : "",c : "",d : "",total : ""};
		var a = arr.a  =  +$('#a').val();
		var b = arr.b  =  +$('#b').val();
		var c = arr.c  =  +$('#c').val();
		var d = arr.d  =  +$('#d').val();
		var total = arr.total = +$('#total').val();
		var calctd_total = a+b+c+d;
		var rem;
		if(total == 0){
		rem = a+b+c+d;
		console.log('This if total is zero'+rem); 
		}
		else if(total > 0 && calctd_total!=null)
		{
		rem = total - calctd_total;
		console.log('doesn;t enter'+rem);
		}
		else
		rem = total - calctd_total;
		 $('input:text').each(function(){
       if( $(this).val().length == 0)
          {
          	console.log('this is a'+a+ 'this is this.val'+$(this).val().length);
          	if( total !=0 ){      // this is to be checked
				$(this).val(rem);	
			}
          }
    });	
	});
});