function verifyLetterA(string) {

    // FORMATAR TUDO PARA MINUSCULO
    const textoMinusculo = string.toLowerCase();
  
    // CONTA QUANTAS VEZES O "a" VAI APARECER
    const quantidade = (textoMinusculo.match(/a/g) || []).length;
  
    if (quantidade > 0) {
      console.log(`O Character 'a' aparece ${quantidade} vez(es) na string.`);
    } else {
      console.log("O Character 'a' não aparece na string.");
    }
  }
  
  const test = "String teste para exemplificar aaa";
  verifyLetterA(test);
  