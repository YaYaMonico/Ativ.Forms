(function () {
    const cpfMask = document.getElementById('cpf');
    const dtNascMask = document.getElementById('dtNasc');
    const btnReset = document.getElementById('reset');
    const inputs = document.querySelectorAll('input');
  
    cpfMask.addEventListener('input', ev => {
      const apagarLetras = ev.target.value.replace(/\D/g, '');
      
      if (apagarLetras.length > 11) {
        ev.target.value = apagarLetras.slice(0, 11);
        return ; 
      }
      if (apagarLetras.length === 11){
    
        const formatoCPF = `${apagarLetras.slice(0, 3)}.${apagarLetras.slice(3, 6)}.${apagarLetras.slice(6, 9)}-${apagarLetras.slice(9)}`;
  
        ev.target.value = formatoCPF;
      } else {
        ev.target.value = apagarLetras;
      }
    });
  
    dtNascMask.addEventListener('input', function () {
      let value = this.value.replace(/\D/g, '');
  
      if (value.length > 8) {
    
        value = value.slice(0, 8);
      }
  
      if (value.length >= 2) {
        
        value = `${value.slice(0, 2)}/${value.slice(2)}`;
      }
      if (value.length >= 5) {
        
        value = `${value.slice(0, 5)}/${value.slice(5)}`;
      }
  
      this.value = value;
    });
  
    btnReset.addEventListener('click', ev => {
      inputs.value = "";
    });
        function validaCpf() {
        
            let value = document.getElementById("cpf").value;
           
            let cpf;
            if (cpf < 11 ) {
                alert = "Cpf não é válido";
            } else {
                alert = "Cpf OK";
            }
            document.getElementById("demo").innerHTML = text;
          }
  })();
  
  