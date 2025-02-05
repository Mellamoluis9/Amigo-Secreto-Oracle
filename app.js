// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const participantes = [];
const asignaciones = {};

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    if (nombre && !participantes.includes(nombre)) {
        participantes.push(nombre);
        actualizarLista();
        input.value = "";
    }
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    participantes.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}

function asignarAmigos() {
    let disponibles = [...participantes];
    
    participantes.forEach(participante => {
        let posibles = disponibles.filter(p => p !== participante);
        if (posibles.length === 0) {
            return asignarAmigos(); 
        }
        let elegido = posibles[Math.floor(Math.random() * posibles.length)];
        asignaciones[participante] = elegido;
        disponibles = disponibles.filter(p => p !== elegido);
    });
}

function sortearAmigo() {
    if (participantes.length < 2) {
        alert("Debe haber al menos dos participantes para el sorteo.");
        return;
    }
    asignarAmigos();
    mostrarResultados();
}

function mostrarResultados() {
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    participantes.forEach(nombre => {
        const li = document.createElement("li");
        li.textContent = `${nombre} → ${asignaciones[nombre]}`;
        resultado.appendChild(li);
    });
}
