alert('mechimundo');

let numeroMaxposible = 100;
let numeroSecreto = Math.floor(Math.random()*numeroMaxposible)+1;
console.log (numeroSecreto);
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'vez';
let maximosIntentos = 3;

//Repetir mientras se diferente el número ingresado por el usuario. 
//Finaliza cuándo ingrese le mismo número. 

while (numeroSecreto!=numeroUsuario){

    numeroUsuario = parseInt(prompt(`Me indicas un número del 1 al ${numeroMaxposible} porfis:`));
    console.log(typeof(numeroUsuario));

    if (numeroUsuario == numeroSecreto){
        //  condición verdadera
        alert(`Acertaste el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez': 'veces' }`);
    }else{
        if (numeroUsuario<numeroSecreto){
            alert("El número secreto es mayor, al número ingresado por ti");
        }else {
            alert("El número secreto es menor, al número ingresado por ti");
        }
            // contador se incrementa
           // intentos = intentos +1;
            intentos++;
            palabraVeces = 'veces';
            if (intentos > maximosIntentos)
            {
                alert(`Alcanzaste el número máximp de ${maximosIntentos} intentos`);
                break;
            }
    }

}

    