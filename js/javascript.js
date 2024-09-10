
let agendaCitas = {};

function agendarCita() {
    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const nombre = document.getElementById('name').value;
        const apellidos = document.getElementById('lastname').value;
        const email = document.getElementById('email').value;
        const estrato = document.getElementById('estrato').value;
        const telefono = document.getElementById('telefono').value;
        const fechaNacimiento = document.getElementById('date').value;
        const grupoSanguineo = document.getElementById('sangre').value;
        const fechaCita = document.getElementById('citafe').value;
        const horaCita = document.getElementById('hora').value;

        let actividades = [];
        document.querySelectorAll('input[name="act"]:checked').forEach(function(checkbox) {
            actividades.push(checkbox.value);
        });


        const clavePersona = `${nombre} ${apellidos} (${email})`;


        if (agendaCitas[clavePersona]) {
            agendaCitas[clavePersona].count += 1;
        } else {
            agendaCitas[clavePersona] = {
                count: 1,
                datos: {
                    nombre: nombre,
                    apellidos: apellidos,
                }
            };
        }


        alert(`
            Información de la Cita:
            Nombre: ${nombre}
            Apellidos: ${apellidos}
            Correo: ${email}
            Estrato: ${estrato}
            Teléfono: ${telefono}
            Fecha de Nacimiento: ${fechaNacimiento}
            Grupo Sanguíneo: ${grupoSanguineo}
            Fecha de la Cita: ${fechaCita}
            Hora de la Cita: ${horaCita}
            Actividades Favoritas: ${actividades.join(', ')}

            Esta persona ha agendado ${agendaCitas[clavePersona].count} veces.
        `);
    });
}

agendarCita();