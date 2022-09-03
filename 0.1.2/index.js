function Desconto(valorCompra = 100.00 , cartao , convenio ) {
  const DescontoCC = 0;
  const DescontoC = 0;
  const semConvenioCartao = valorCompra;

  if (cartao && convenio == true) {
    const DescontoCC = valorCompra * 0.15;
    valorCompraTotal = valorCompra - DescontoCC;
    return valorCompraTotal;
  } else if (cartao == true && convenio == false || cartao == false && convenio == true) {
    const DescontoC = valorCompra * 0.10;
    const valorCompraTotal = valorCompra - DescontoC;
    return valorCompraTotal;
  } else {
    semConvenioCartao 
    return valorCompra;
  }
}

console.log(Desconto (100, true, true));
console.log(Desconto (100, false, false));
console.log(Desconto (100, true, false));
console.log(Desconto (100, false, true));
