function calculate(tipo, valor) {  
     
    if (tipo === 'acao' ) {    

        if(valor === 'c') {    

            document.getElementById('result').value = ''

        } else if (valor === '/' || valor === '-' || valor === '+' || valor === '.' || valor === '*') {

            document.getElementById('result').value += valor

        } else if (valor === '=') {

            var total = eval(document.getElementById('result').value)

            switch (total) {

                case undefined:
                alert('Insira valores válidos')
                break
            
            }   
            
            document.getElementById('result').value = total            
            
        }

    } else if (tipo === 'valor') {
        document.getElementById('result').value += valor

    }    

}