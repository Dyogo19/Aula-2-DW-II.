// console.log('Dyogo');



function Desconto(valorCompra = 50.0, cartao = true, convenio = true) {
  const DescontoCC = 0;
  const DescontoC = 0;
  const semConvenioCartao = valorCompra;

  if (cartao && convenio == true) {
    const DescontoCC = valorCompra * 0.15;
    valorCompraTotal = valorCompra - DescontoCC;
    console.log(valorCompraTotal);
  } else if (cartao == true && convenio == false) {
    const DescontoC = valorCompra * 0.10;
    const valorCompraTotal = valorCompra - DescontoC;
    console.log(valorCompraTotal);
  } else {
    semConvenioCartao = valorCompra;
    console.log(valorCompraTotal);
  }
}

Desconto(valorCompra, cartao, convenio);
