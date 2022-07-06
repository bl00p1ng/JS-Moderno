import Citas from '../js/classes/Citas.js';

describe('Probar la clase de Citas', () => {
    test('Agregar una nueva cita', () => {
        const citas = new Citas();

        const citaObj = {
            mascota: '',
            propietario: '',
            telefono: '',
            fecha: '',
            hora:'',
            sintomas: ''
        }

        citaObj.id = Date.now();

        citas.agregarCita(citaObj);

        expect(citas).toMatchSnapshot();
    });
});