let numT, jogada;
let usu1, usu2;
var vez; //a quantidade de cada jogador
var vezJogada = 1

vez= document.getElementById("vez");
console.log(vez)
usu1=document.getElementById(usu1);
usu2=document.getElementById(usu2);

numT=21;
// valores incluídos para teste

function jogadaPlayer(){
	if(document.getElementById("vez").value != ""){
		if(vezJogada == 1){
			document.getElementById("labelJogador").textContent = 'PLAYER 1';
			console.log(document.getElementById("vez").value);
			
			vezJogada = 2;
			limJ();
			document.getElementById("vez").value= ""
			
		}else if(vezJogada == 2){
			document.getElementById("labelJogador").textContent = 'PLAYER 2';
			console.log(document.getElementById("vez").value);
			

			vezJogada = 1; // tava embaixo e coloquei em cima para pegar o jogador certo
			limJ();
			document.getElementById("vez").value=""	
		}
	}
}

function limJ(){

		 let lim = document.getElementById("vez").value;

		 if (lim < 21 && lim >0){
		 	limiteN();
		 }else{
		 alert('Jogue um valor dentro do limite! Tem que ser menor que 21 e maior que 0!');
		}
}
// A função limiteN vai pegar o valor input e subtrair o novo valor, bem como apresentar o jogador que ganhou.

function limiteN(){ 
		
		console.log(numT= numT-document.getElementById("vez").value);
		document.getElementById("veez").textContent= numT;
		if(numT==0){
			console.log("Player "+ vezJogada +" ganhou a partida!");
			alert('Player ' + vezJogada + ' ganhou a partida!');

		}

}