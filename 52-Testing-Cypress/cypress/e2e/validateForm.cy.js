/// <reference types="cypress" />

describe('Validar el formulario', () => {
    it('Submit al form y mostrar la alerta de error', () => {
        // Abrir el proyecto
        cy.visit('http://127.0.0.1:5500/52-Testing-Cypress/');

        // Hacer submit al formulario
        cy.get('[data-cy="form"]')
            .submit();

        // Seleccionar la alerta de campos obligatorios
        cy.get('[data-cy="alert"]')
            // Revisar que tenga la clase correcta
            .should('have.class', 'alert-danger')
            .invoke('text')  // Obtener el texto del elemento
            .should('equal', 'Todos los campos son Obligatorios');
    });
});