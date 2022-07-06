/// <reference types="cypress" />

describe('Carga la página principal', () => {
  it('Carga la página principal', () => {
    // Abrir el proyecto
    cy.visit('http://127.0.0.1:5500/52-Testing-Cypress/');

    // Verificar el contenido del h1
    cy.contains('h1', 'Administrador de Pacientes de Veterinaria');

    // Verificar si existe un h1
    cy.get('h1').should('exist');
  });
});