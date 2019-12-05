/*EXEMPLO DE ARRAY DO LIVRO DA FACULDADE*/
var grifinoria=[5];

function selecionar(){
	
	var novoestudante=document.getElementById("estudante").value;	
	grifinoria.push(novoestudante);
	document.getElementById("listadealunos").innerHTML=novoestudante + " selecionado para grifinória";
	
	document.getElementById("estudante").value="";
	console.log(selecionar[2]);
}
function cor1(){
	document.getElementById("listadealunos").style.backgroundColor="red";
	document.getElementById("listadealunos").style.color="white";
}
function cor2(){
	document.getElementById("listadealunos").style.backgroundColor="green";
	document.getElementById("listadealunos").style.color="orange";
}