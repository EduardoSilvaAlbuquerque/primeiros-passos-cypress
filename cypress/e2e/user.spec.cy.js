 import userData from '../fixtures/user-data.json'

describe('Orange HRM Tests', () => {

 const selectorsList ={
  usernameField:"[name='username']",
  passwordField:"[name='password']",
  loginButton:".oxd-button",
  dashBoardGrid:".orangehrm-upgrade-layout",
  sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
  wrongCredentialAlert: "[role='alert']",
  
  myInfoButton: "[href='/web/index.php/pim/viewMyDetails']",
  firstNameField:"[name='firstName']",
  lastNameField:"[name='lastName']",
  genericNameField:".oxd-input--active",
  dateField:"[placeholder='yyyy-dd-mm']",
  dateCloseButton:'.--close',
  submitButton:"[type='submit']",
  genderButton:".oxd-radio-wrapper",
  genericButton:".oxd-select-text-input",
  }

  it.only('User Info Update - Success', () => {
  cy.visit('/auth/login')

  cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
  cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
  cy.get(selectorsList.loginButton).click()

  cy.location('pathname').should('eq', '/web/index.php/dashboard/index')

  cy.get(selectorsList.myInfoButton).click()

  cy.get(selectorsList.firstNameField).clear().type('Eduardo')
  cy.get(selectorsList.lastNameField).clear().type('Albuquerque')

  cy.get(selectorsList.genericNameField).eq(3).clear().type('Dudu')
  cy.get(selectorsList.genericNameField).eq(4).clear().type('752810')
  cy.get(selectorsList.genericNameField).eq(5).clear().type('Setor21')
  cy.get(selectorsList.genericNameField).eq(6).clear().type('400289')

  // Data de nascimento
  cy.get(selectorsList.dateField).eq(0).clear().type('2026-12-12')
  cy.get(selectorsList.dateCloseButton).click()

  // Nacionalidade
  cy.get(selectorsList.genericButton).eq(0).click()
  cy.contains('.oxd-select-option', 'Chilean').click()

  // Estado civil
  cy.get(selectorsList.genericButton).eq(1).click()
  cy.contains('.oxd-select-option', 'Married').click()

  // Data da licença
  cy.get(selectorsList.dateField).eq(1).clear().type('2038-12-11')
  cy.get(selectorsList.dateCloseButton).click()

  // Gênero
  cy.get(selectorsList.genderButton).eq(1).click()

  // Salvar o primeiro formulário
  cy.get(selectorsList.submitButton).eq(0).click()

  // Tipo Sanguíneo
  cy.get(selectorsList.genericButton).eq(2).click()
  cy.contains('.oxd-select-option', 'B+').click()

  // Salvar o segundo formulário
  cy.get(selectorsList.submitButton).eq(1).click()

})
   
  })
    it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)

})

