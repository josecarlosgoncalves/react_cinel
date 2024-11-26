function Condicao() {
	let nota = 11;
	let resultado;
	if (nota <= 9) resultado = ' Negativa ';
	else if (nota <= 16) resultado = ' Positiva';
	else resultado = ' Muito Bom ';
	return <div> {resultado} </div>;
}

export default Condicao;
