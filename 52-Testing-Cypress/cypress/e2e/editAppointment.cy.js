/// <reference types="cypress" />

describe('Llena los campos para crear una nueva cita y la edita', () => {
    it('Campos para crear una nueva cita', () => {
        // Abrir el proyecto
        cy.visit('index.html');

        // Llenar campos del form
        cy.get('[data-cy="pet-input"]')
            .type('Luna');
        cy.get('[data-cy="owner-input"]')
            .type('Andrés');
        cy.get('[data-cy="phone-input"]')
            .type('4567816363');
        cy.get('[data-cy="date-input"]')
            .type('2022-07-12');
        cy.get('[data-cy="hour-input"]')
            .type('10:30');
        cy.get('[data-cy="symptoms-textarea"]')
            .type('No come bien');

        // Enviar form
        cy.get('[data-cy="submit-appointment"]')
            .click();

        // Verificar heading de las citas
        cy.get('[data-cy="appointments-heading"]')
            .invoke('text')
            .should('equal', 'Administra tus Citas');

        // Verificar la alerta de cita creada
        cy.get('[data-cy="alert"]')
            // Revisar que tenga la clase correcta
            .should('have.class', 'alert-success')
            .invoke('text')  // Obtener el texto del elemento
            .should('equal', 'Se agregó correctamente');
    });

    it('Editar la cita', () => {
        cy.get('[data-cy="edit-btn"]')
            .click();

        // Editar el nombre de la mascota
        cy.get('[data-cy="pet-input"]')
            .clear()
            .type('Lunita');

        // Enviar form
        cy.get('[data-cy="submit-appointment"]')
            .click();

        // Verificar la alerta de cita creada
        cy.get('[data-cy="alert"]')
            // Revisar que tenga la clase correcta
            .should('have.class', 'alert-success')
            .invoke('text')  // Obtener el texto del elemento
            .should('equal', 'Guardado Correctamente');
    });
});