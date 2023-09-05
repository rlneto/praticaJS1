const ex6 = document.getElementById("ex6");
ex6.addEventListener("click", () => {
	let palavra = prompt("Digite uma palavra");
	let palavraInvertida = "";
	for (let i = palavra.length - 1; i >= 0; i--) {
		palavraInvertida += palavra[i];
	}
	console.log(palavraInvertida);
});
