// console.log('Dyogo');

function Desconto(valorCompra = 100.00 , cartao , convenio ) {
  const DescontoCC = 0;
  const DescontoC = 0;
  const semConvenioCartao = valorCompra;

  if (cartao && convenio == true) {
    const DescontoCC = valorCompra * 0.15;
    valorCompraTotal = valorCompra - DescontoCC;
    console.log(valorCompraTotal);
  } else if (cartao == true && convenio == false || cartao == false && convenio == true) {
    const DescontoC = valorCompra * 0.10;
    const valorCompraTotal = valorCompra - DescontoC;
    console.log(valorCompraTotal);
  } else {
    semConvenioCartao 
    console.log(valorCompra);
  }
}

Desconto (100, true, true);
Desconto (100, false, false);
Desconto (100, true, false);
Desconto (100, false, true);
