/*JAVASCRPT AULA6 JOGODO DADO*/
function dados(){
var sorteio=Math.floor(Math.random()*6+1);

switch(sorteio){
		
	case 1:
		document.getElementById("face").src="imagens_sons/face1.png";
		break;
	case 2 :
		document.getElementById("face").src="imagens_sons/face2.png";
		break;
	case 3 :
		document.getElementById("face").src="imagens_sons/face3.png";
		break;
	case 4 :
		document.getElementById("face").src="imagens_sons/face4.png";
		break;
	case 5 :
		document.getElementById("face").src="imagens_sons/face5.png";
		break;
	case 6 :
		document.getElementById("face").src="imagens_sons/face6.png";
		break;
		
	default:
		//caso contrario
		break;
}
}
