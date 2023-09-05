const ex4 = document.getElementById("ex4");
ex4.addEventListener("click", () => {
	let numero = prompt("Digite um número: ");
	numero = Number(numero);
	if (numero >= 30 && numero <= 50) {
		console.log(`${numero} está no intervalo [30, 50]`);
	} else if (numero >= 60 && numero <= 100) {
		console.log(`${numero} está no intervalo [60, 100]`);
	} else {
		console.log(`${numero} não está em nenhum dos intervalos`);
	}
});
