function puntitos(donde,caracter,campo)
{
var decimales = false
campo = campo
			dec = 0
pat = /[\*,\+,\(,\),\?,\\,\$,\[,\],\^]/
valor = donde.value
largo = valor.length
crtr = true
if(isNaN(caracter) || pat.test(caracter) == true)
	{
	if (pat.test(caracter)==true) 
		{caracter = "\\" + caracter}
	carcter = new RegExp(caracter,"g")
	valor = valor.replace(carcter,"")
	donde.value = valor
	crtr = false
	}
else
	{
	var nums = new Array()
	cont = 0
	for(m=0;m<largo;m++)
		{
		if(valor.charAt(m) == "." || valor.charAt(m) == " " || valor.charAt(m) == ",")
			{continue;}
		else{
			nums[cont] = valor.charAt(m)
			cont++
			}
		
		}
	}

if(decimales == true) {
	ctdd = eval(1 + dec);
	nmrs = 1
	}
else {
	ctdd = 1; nmrs = 3
	}
var cad1="",cad2="",cad3="",tres=0
if(largo > nmrs && crtr == true)
	{
	for (k=nums.length-ctdd;k>=0;k--){
		cad1 = nums[k]
		cad2 = cad1 + cad2
		tres++
		if((tres%3) == 0){
			if(k!=0){
				cad2 = "." + cad2
				}
			}
		}
		
	for (dd = dec; dd > 0; dd--)	
	{cad3 += nums[nums.length-dd] }
	if(decimales == true)
	{cad2 += "," + cad3}
	 donde.value = cad2
	}
donde.focus()
}	


function convertir_rever(str){
	str=str+""
	if(str == ""){
	//return '0,00'
	return '0'
	}
	var vector=str.split(".")
	var parte_entera=vector[0]

	//var parte_decimal=(vector[1] == "" || vector[1] == null)? "00":((vector[1].length==1)? vector[1]+"0" : vector[1])
   var cont=0
   var nuevo=""
   for(var i=parte_entera.length-1; i>=0;i--){
    if (cont == 3){
      nuevo=parte_entera[i]+"."+nuevo
      cont=0
    }else{
      nuevo=parte_entera[i]+nuevo
    }
    cont++;
   }
 
 //return (nuevo+","+parte_decimal)
  return (nuevo)
 
}
function convertir(str) {
	str=str+""
	if(str == "" ){
    	return 0
    	}
    var res = str.split(".");
    var result=""
    for(var i=0;i<res.length;i++){
      result+=res[i]
    }
   res=result.split(",")
   result=(res.length > 1)? (res[0] != "")?res[0]+"."+res[1] : "0"+"."+res[1] : res


		      return (parseFloat(result));
		  }