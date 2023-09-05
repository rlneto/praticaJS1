function tratadorDeCliqueExercicio2() {
	// atualize esta função para
	// exibir um alerta com a hora
	// atual no seguinte formato:
	// Horário: 8 PM : 40m : 28s

	let agora = new Date();
	console.log(
		agora.getHours() +
			"h : " +
			agora.getMinutes() +
			"m : " +
			agora.getSeconds() +
			"s"
	);
}
