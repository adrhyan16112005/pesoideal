//exercicio01
function calculapeso(peso,altura,sexo){
    if(sexo==="f"){
      peso=62.1*altura -44.7;}
    else if (sexo==="m"){
       peso =72.7* altura -58;
    }else{
      alert('dados incorretos,tente novamente')
    }
        return peso;
  }
      function imprimepesoideal(peso){
       alert('peso ideal:' + peso.tofixed(2)); 
      }
  function main(){
  let sexo= parseFloat(prompt("digite m para masculino ou f para feminino"));
   let peso =parseFloat (prompt("digita o seu peso" ));
   let altura =parseFloat (prompt("digita a sua altura"));
   
  peso=calculapeso(peso,altura, sexo.toUpperCase());
  imprimepesoideal(peso);
   }
    main();
  