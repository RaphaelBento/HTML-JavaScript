/** Arquivo aula 5 Calculadora Flex*/
var etanol;

function calcular(){
												/* replace serve para substituir um caracter por outro no caso virgula por ponto*/
	etanol=parseFloat(frmFlex.txtEtanol.value.replace(",","."));
		/*Parse serve para converter string para outro tipo no caso o tipo float por ser parsefloat */
	gasolina=parseFloat(frmFlex.txtGasolina.value);
	if(etanol<0.70*gasolina){
		document.getElementById("status").src="imagens_sons/etanol.png";
		/*Document faz parte do DOM*/
	}
	else{
		document.getElementById("status").src="imagens_sons/gasolina.png";
	}

}

function resetar(){
	document.getElementById("status").src="imagens_sons/neutro.png";
}