import Citas from '../js/classes/Citas.js';

describe('Probar la clase de Citas', () => {
    const id = Date.now();
    const citas = new Citas();

    test('Agregar una nueva cita', () => {

        const citaObj = {
            id,
            mascota: 'Luna',
            propietario: 'Andrés',
            telefono: '4618923',
            fecha: '22-07-2022',
            hora:'10:30',
            sintomas: 'No come'
        }

        citas.agregarCita(citaObj);

        expect(citas).toMatchSnapshot();
    });

    test('Actualizar cita', () => {
        const citaActualizada = {
            id,
            mascota: 'Lunita',
            propietario: 'Andrés López',
            telefono: '4618923',
            fecha: '22-07-2022',
            hora:'10:30',
            sintomas: 'No come'
        }

        citas.editarCita(citaActualizada);

        // Testear
        expect(citas).toMatchSnapshot();
    });

    test('Eliminar cita', () => {
        citas.eliminarCita(id);

        // Testing
        expect(citas).toMatchSnapshot();
    });
});