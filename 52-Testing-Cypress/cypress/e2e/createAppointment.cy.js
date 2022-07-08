/// <reference types="cypress" />

describe('Carga la página principal', () => {
    it('Carga la página principal', () => {
        // Abrir el proyecto
        cy.visit('index.html');

    });
});