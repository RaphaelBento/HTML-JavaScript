var peso;
var imc;
var altura;



function peso1(){
	peso=document.getElementById("Peso").value;
   console.log(peso1);
	document.getElementById("p").innerHTML=peso+"KG";
	
	
}
function altura1(){
	altura=document.getElementById("Altura").value;
	console.log(altura);
	document.getElementById("alt").innerHTML=altura+"cm";
}

function IMC(){
	imc=parseFloat(peso) / (parseFloat(altura)*(parseFloat(altura)));
		var arredondando;
arredondando=parseFloat(imc.toFixed(2));
	document.getElementById("imc").innerHTML="seu IMC é : "+arredondando;

	if(arredondando>25){
		document.getElementById("imc").style.backgroundColor="red";
	}
	if(arredondando>25){
		ocument.getElementById("imc").style.backgroundColor="blue";
	}
	
}