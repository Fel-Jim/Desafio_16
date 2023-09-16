const inputToChange = document.querySelector(".inputToChange");
const inputChanger = document.querySelector(".inputChanger");
const euro = document.querySelector(".euro");
const dolar = document.querySelector(".dolar");
const btnChange = document.querySelector(".btnChange");
const resultText = document.querySelector(".resultText");
const graficBox = document.querySelector(".graficBox");
const apiInUse = "https://mindicador.cl/api/";

async function changeMoney(indicator) {
  try {
    const res = await fetch(`https://mindicador.cl/api/${indicator}`);
    if (!res.ok) {
      throw new Error("Error en la peticion");
    }
    const data = await res.json();
    return data;
  } catch (e) {
    alert("Algo salio mal, vuelva a cargar la pagina en un moemento mas.");
  }
}

/*
async function calculatorEuro(){
const data = await changeMoney();
    const totalEuro=
    Number(inputToChange.value)*Number(${data.euro.valor}.value);
}
function calculatorDolar(){
    const totalDolar =
    Number(inputToChange.value)*Number(${data.dolar.valor}.value);
}
*/
function calcularTotal(valorActual) {
  return (Number(inputToChange.value) * valorActual) / 1000;
}

btnChange.addEventListener("click", async function () {
  const guardarValor = await changeMoney(`${inputChanger.value}`);
  console.log(guardarValor.serie[0]);
  const valorDia = guardarValor.serie[0].valor;
  calcularTotal(valorDia);
  console.log(valorDia);
  console.log(calcularTotal(valorDia));
  resultText.innerHTML = `<h4>  $ ${
    inputToChange.value
  } son en total ${calcularTotal(valorDia)} en valor ${
    inputChanger.value
  } </h4>`;

  console.log(guardarValor.serie.slice(0, 10));
});
