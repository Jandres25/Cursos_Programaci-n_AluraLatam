// Variables
let numeroMaximoPosible = 10;
let numeroSecreto = Math.floor(Math.random() * numeroMaximoPosible) + 1; // Genera un número secreto aleatorio entre 1 y 10
let numeroUsuario = 0; // Inicializa la variable para almacenar el número ingresado por el usuario
let intentos = 1; // Inicializa el contador de intentos
let maximosIntentos = 3; // Define el número máximo de intentos permitidos

// Bucle que se ejecuta mientras el usuario no adivine el número secreto
while (numeroUsuario != numeroSecreto) {
    // Solicitamos al usuario que ingrese un número entre 1 y 10
    numeroUsuario = parseInt(prompt(`Ingresa un numero entre 1 y ${numeroMaximoPosible}:`));

    // Mostramos en la consola el número ingresado por el usuario
    console.log(numeroUsuario);

    // Comparamos el número ingresado por el usuario con el número secreto
    if (numeroUsuario == numeroSecreto) {
        // Si el usuario acierta, mostramos un mensaje de éxito
        alert(`Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en: ${intentos} ${intentos == 1 ? 'vez' : 'veces'}.`);
    } else {
        // Si el usuario no acierta, indicamos si el número es mayor o menor
        if (numeroUsuario > numeroSecreto) {
            alert('El numero es mayor');
        } else {
            alert('El numero es menor');
        }
        // Incrementamos el contador de intentos
        intentos++;
        // Verificamos si el usuario ha alcanzado el número máximo de intentos
        if (intentos > maximosIntentos) {
            alert('Llegaste al numero maximo de intentos.');
            break; // Salimos del bucle si se alcanzó el número máximo de intentos
        }
    }
}