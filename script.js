// Nombre del archivo: script.js
// Valentin Figueroa

const menu = {
    desayuno: [
        { nombre: "Desayuno power ", precio: 10560 },
        { nombre: "Desayuno con Budin Gourmet", precio: 4990 },
        { nombre: "Desayuno con medialunas", precio: 4650 },
        { nombre: "Desayuno brunch", precio: 9990 },
        { nombre: "Desayuno croissant", precio: 6490 }
    ],
    almuerzo: [
        { nombre: "Ensalada César", precio: 5990 },
        { nombre: "Sándwich de pollo a la parrilla", precio: 4590 },
        { nombre: "Hamburguesa clásica", precio: 3990 },
        { nombre: "Ravioles de espinaca y queso con salteado de tomates, nueces y oliva", precio: 11250 },
        { nombre: "Bife de chorizo con acompañamiento", precio: 15990 }
    ],
    merienda: [
        { nombre: "Smoothie de frutas", precio: 2990 },
        { nombre: "Barra de granola", precio: 2590 },
        { nombre: "Batido de proteínas", precio: 3590 },
        { nombre: "Frutas frescas", precio: 1250 },
        { nombre: "Palitos de zanahoria con hummus", precio: 4990 }
    ],
    cena: [
        { nombre: "Sopa de tomate", precio: 4590 },
        { nombre: "Pechuga de pollo asada", precio: 6990 },
        { nombre: "Salmón a la parrilla", precio: 12950 },
        { nombre: "Risotto de champiñones", precio: 8990 },
        { nombre: "Filete de ternera con puré de papas", precio: 9650 }
    ]
};

let nombreCliente = prompt("Bienvenido a Farmers Market. El mejor restaurante de Villa Belgrano!!\ Por favor, ingrese su nombre:");
let telefonoCliente = prompt("Por favor, ingrese su número de teléfono:");

let seguirComprando = true;

while (seguirComprando) {
    let servicioElegido = parseInt(prompt("Seleccione un servicio:\n1. Desayuno\n2. Almuerzo\n3. Merienda\n4. Cena"));

    if (servicioElegido >= 1 && servicioElegido <= 4) {
        let opcionesServicio = menu[Object.keys(menu)[servicioElegido - 1]];
        
        let pedido = [];
        
        let seguirPidiendo = true;
        
        while (seguirPidiendo) {
            let opcionesTexto = "";
            opcionesServicio.forEach((opcion, index) => {
                opcionesTexto += `${index + 1}. ${opcion.nombre} - $${opcion.precio}\n`;
            });
            
            let opcionElegida = parseInt(prompt("Seleccione una opción de comida (1-5):\n" + opcionesTexto));
            
            if (opcionElegida >= 1 && opcionElegida <= 5) {
                pedido.push(opcionesServicio[opcionElegida - 1]);
                
                let continuarPedido = prompt("¿Desea pedir algo más? (si/no)");
                if (continuarPedido.toLowerCase() !== 'si') {
                    seguirPidiendo = false;
                }
            } else {
                alert("Opción inválida. Por favor, seleccione una opción válida.");
            }
        }
        
        let pedidoTexto = "Detalles del pedido:\n";
        pedido.forEach((item, index) => {
            pedidoTexto += `${index + 1}. ${item.nombre} - $${item.precio}\n`;
        });
        
        let satisfaccion = prompt(pedidoTexto + "\n¿Está satisfecho con su pedido? (si/no)");
        
        if (satisfaccion.toLowerCase() === 'no') {
            alert("Lamentamos que no haya quedado satisfecho. ¡Esperamos poder mejorar en su próxima visita!");
        }
        
        let continuarComprando = prompt("¿Desea pedir algo más? (si/no)");
        if (continuarComprando.toLowerCase() !== 'si') {
            seguirComprando = false;
            alert("¡Gracias por comprar en Farmers Market! ¡Vuelva pronto!");
        }
    } else {
        alert("Opción inválida. Por favor, seleccione una opción válida.");
    }
}
