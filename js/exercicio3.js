const ex3 = document.getElementById("ex3");
ex3.addEventListener("click", () => {
	let palavra = prompt("Digite uma palavra: ");
	palavra = palavra.slice(1, palavra.length - 1);
	alert(palavra);
});
