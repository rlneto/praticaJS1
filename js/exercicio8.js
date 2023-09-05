function obterRegiaoFiscalAtravesDoCPFInformado(cpfInformado) {
	let regiaoFiscal = "";
	switch (cpfInformado[8]) {
		case "1":
			regiaoFiscal = "DF, GO, MT, MS e TO;";
			break;
		case "2":
			regiaoFiscal = "AC, AP, AM, PA, RO e RR;";
			break;
		case "3":
			regiaoFiscal = "CE, MA e PI;";
			break;
		case "4":
			regiaoFiscal = "AL, PB, PE e RN;";
			break;
		case "5":
			regiaoFiscal = "BA e SE;";
			break;
		case "6":
			regiaoFiscal = "MG;";
			break;
		case "7":
			regiaoFiscal = "ES e RJ;";
			break;
		case "8":
			regiaoFiscal = "SP;";
			break;
		case "9":
			regiaoFiscal = "PR e SC;";
			break;
		case "0":
			regiaoFiscal = "RS.";
			break;
		default:
			regiaoFiscal = "CPF inválido.";
	}

	console.log(cpfInformado);

	return regiaoFiscal;
}

function tratadorDeCliqueExercicio8() {
	let textCPF = document.getElementById("textCPF");
	let textRegiao = document.getElementById("regiaoFiscal");

	const regiaoFiscal = obterRegiaoFiscalAtravesDoCPFInformado(textCPF.value);
	textRegiao.textContent = "Região fiscal: " + regiaoFiscal;
}
