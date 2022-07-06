import Citas from '../js/classes/Citas.js';

describe('Probar la clase de Citas', () => {
    test('Agregar una nueva cita', () => {
        const citas = new Citas();

        const citaObj = {
            mascota: 'Luna',
            propietario: 'Andrés',
            telefono: '4618923',
            fecha: '22-07-2022',
            hora:'10:30',
            sintomas: 'No come'
        }

        citaObj.id = Date.now();

        citas.agregarCita(citaObj);

        expect(citas).toMatchSnapshot();
    });
});