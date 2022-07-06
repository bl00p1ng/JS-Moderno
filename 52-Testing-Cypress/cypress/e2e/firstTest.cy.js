/// <reference types="cypress" />

describe('Carga la página principal', () => {
    it('Carga la página principal', () => {
        // Abrir el proyecto
        cy.visit('http://127.0.0.1:5500/52-Testing-Cypress/');

        // Verificar elemento y su texto
        cy.contains('[data-cy="project-title"]', 'Administrador de Pacientes de Veterinaria');

        // Verificar que exista un elemento determinado
        cy.get('[data-cy="project-title"]').should('exist');

        // Verificar que un elemento exista y tenga un texto en especifico
        cy.get('[data-cy="project-title"]')
            .invoke('text')
            .should('equal', 'Administrador de Pacientes de Veterinaria');

        // Verificar el texto de las citas
        cy.get('[data-cy="appointments-heading"]')
            .invoke('text')
            .should('equal', 'No hay Citas, comienza creando una');
    });
});