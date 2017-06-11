/**
 * 
 */
function  getRemainder( x, y){
        if(y==0){
        	document.write("y是除数不能为0！");
        }else{
	  		var z=x%y;
	  		document.write(z);
	  		return z;
        }
  	}
  	getRemainder(9, 4);