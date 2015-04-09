function precio_cantidad(a,valor_1,valor_2,resultado,grand_total){
	//a es un inputElement que tiene un id de la forma "id_<nombre de clase>_set-<nro de fila>-<atributo>
	//valor_1 es el primer valor a multiplicar
	//valor_2 es el segundo valor a multiplicar
	//resultado es el campo donde se tira el subtotal
	//grand_total es el total de la factura
	//para este caso los atributos serian "precio" y "cantidad" Ej. id_detalleventa_set-3-precio

	var vector=(a.name).toString().split("-") //se crea el vector ["id_detalleventa","3","precio"] 
	var campo=(vector[2] == valor_1)? valor_2:valor_1;
	
		var valor1=document.getElementsByName(vector[0]+"-"+vector[1]+"-"+campo)[0].value
		var valor2=a.value
		
		if (valor1 != "" && valor2 !=""){
			document.getElementsByName(vector[0]+"-"+vector[1]+"-"+resultado)[0].value=parseFloat(valor1)*parseFloat(valor2)
		} else {
			document.getElementsByName(vector[0]+"-"+vector[1]+"-"+resultado)[0].value=0
		}
	if (grand_total!=""){
		sumar_total(resultado,vector[0],grand_total)
	}
}

function sumar_total(field,prefijo,grand_total){
	var total=0,i=0
	var aux=document.getElementsByName(prefijo+"-"+i.toString()+"-"+field)[0]
	
	while(aux != null){
		if(aux.value != ""){
			total+=parseInt(aux.value)
		}		
		i++;
		aux=document.getElementsByName(prefijo+"-"+i.toString()+"-"+field)[0]
	}
	document.getElementById(grand_total).value=total
}

function restar_total(fieldName,grand_total){
	var total=document.getElementsByName(fieldName)[0].value
	var factura_total=document.getElementsByName(grand_total)[0].value
	total=convertir(total)
	factura_total=convertir(factura_total)
	document.getElementsByName(grand_total)[0].value=factura_total
	document.getElementsByName(fieldName)[0].value=total

	var valor=document.getElementsByName(fieldName)[0].value
	var factura_total=document.getElementsByName(grand_total)[0].value
	
	if(valor != ""){
		factura_total=parseFloat(factura_total)-parseFloat(valor)
	}
	valor = 0
	document.getElementsByName(fieldName)[0].value=valor
	document.getElementsByName(grand_total)[0].value=factura_total
	factura_total=convertir_rever(factura_total)
	document.getElementsByName(grand_total)[0].value=factura_total
	
}


function precio_cantidad_cid(a,valor_1,valor_2,resultado,grand_total,descuento,total){
	//a es un inputElement que tiene un id de la forma "id_<nombre de clase>_set-<nro de fila>-<atributo>
	//valor_1 es el primer valor a multiplicar
	//valor_2 es el segundo valor a multiplicar
	//resultado es el campo donde se tira el subtotal
	//grand_total es el total de la factura
	//para este caso los atributos serian "precio" y "cantidad" Ej. id_detalleventa_set-3-precio
	
	var vector=(a.name).toString().split("-") //se crea el vector ["id_detalleventa","3","precio"] 
	var campo=(vector[2] == valor_1)? valor_2:valor_1;
	var descu=document.getElementsByName(vector[0]+"-"+vector[1]+"-"+descuento)[0].value
	
		var valor1=document.getElementsByName(vector[0]+"-"+vector[1]+"-"+campo)[0].value
		var valor2=a.value
		
		if (valor1 != "" && valor2 !=""){
			document.getElementsByName(vector[0]+"-"+vector[1]+"-"+resultado)[0].value=parseFloat(valor1)*parseFloat(valor2)
			if (descu == ""){
				document.getElementsByName(vector[0]+"-"+vector[1]+"-"+descuento)[0].value=0
			}	
			var descu=document.getElementsByName(vector[0]+"-"+vector[1]+"-"+descuento)[0].value
			document.getElementsByName(vector[0]+"-"+vector[1]+"-"+total)[0].value=(parseFloat(valor1)*parseFloat(valor2))-(Math.floor((parseFloat(descu)*(parseFloat(valor1)*parseFloat(valor2))/100)))
		} else {
			document.getElementsByName(vector[0]+"-"+vector[1]+"-"+resultado)[0].value=0
			if (descu == ""){
				document.getElementsByName(vector[0]+"-"+vector[1]+"-"+descuento)[0].value=0
			}
			var descu=document.getElementsByName(vector[0]+"-"+vector[1]+"-"+descuento)[0].value
			document.getElementsByName(vector[0]+"-"+vector[1]+"-"+total)[0].value=0
		}
	if (grand_total!=""){
		sumar_total_cid(total,vector[0],grand_total)
	}
}

function descuento_compra_cid(a,total,ftotal,descuento){
	var vector=(a.name).toString().split("-") //se crea el vector ["id_detalleventa","3","precio"]
	var descu=document.getElementsByName(vector[0]+"-"+vector[1]+"-"+descuento)[0].value
	var total_row = document.getElementsByName(vector[0]+"-"+vector[1]+"-subtotal")[0].value
	if (descu == ""){
		document.getElementsByName(vector[0]+"-"+vector[1]+"-"+descuento)[0].value=0
	}	
	var descu=document.getElementsByName(vector[0]+"-"+vector[1]+"-"+descuento)[0].value

	document.getElementsByName(vector[0]+"-"+vector[1]+"-"+total)[0].value=(total_row)-(Math.floor((descu*total_row)/100))
	
	if (ftotal!=""){
		sumar_total_cid(total,vector[0],ftotal)
	}
}

function sumar_total_cid(field,prefijo,grand_total){
	total=0,i=0
	var aux=document.getElementsByName(prefijo+"-"+i.toString()+"-"+field)[0]
	
	while(aux != null){
		
		if(aux.value != ""){
			aux=convertir(aux.value)
			total+=aux
		}		
		i++;
		aux=document.getElementsByName(prefijo+"-"+i.toString()+"-"+field)[0]
	}
	document.getElementById(grand_total).value=total
}


function retorna(datos){
	var lote=datos[0]
	var destino_name=datos[1]
	if(lote.stock == 0){
		alert('Lote inexistente o sin stock')
		document.getElementsByName(destino_name)[0].value=""
		} else {
		document.getElementsByName(destino_name)[0].value=lote.stock
		}
    }

function llamar_stock(a){
	vector=(a.name).toString().split("-")
	var lote = document.getElementsByName(a.name)[0].value
	var destino_name = vector[0]+"-"+vector[1]+"-stock"
	Dajaxice.productos.get_stock(retorna,{'id_lote':lote,'id_producto':producto,'destino_name':destino_name })
}
	
function validar_cantidad(a){
	vector=(a.name).toString().split("-")
	var cantidad = document.getElementsByName(a.name)[0].value
	var stock = document.getElementsByName(vector[0]+"-"+vector[1]+"-stock")[0].value
	
	var vcantidad = parseFloat(cantidad).toFixed(2)
	var vstock = parseFloat(stock).toFixed(2)
	
	var mayor = parseFloat(vcantidad) > parseFloat(vstock)
	if (mayor == true){
		alert('Cantidad mayor a stock disponible')
		document.getElementsByName(a.name)[0].value=""
	} else {
		
	}
}




