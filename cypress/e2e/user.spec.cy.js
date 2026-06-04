import userData from '../fixtures/user-data.json'

describe('Orange HRM test', () => {

  const selectorsList = {
    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    loginButton: '.oxd-button',
    sectionTitleTopBar: '.oxd-topbar-header-breadcrumb > .oxd-text',
    wrongCredentialAlert: '.oxd-alert',
    recuperationPassword: '.orangehrm-login-forgot',
    recuperationBanner:'.oxd-text--h6',
    myInfoButton:'[href="/web/index.php/pim/viewMyDetails"]',
    
    firstnameField:"[name='firstName']",
    lastnameField:"[name='lastName']",
    middleName:"[name='middleName']",
    genericField:".oxd-input--active",
    dateField:"[placeholder='yyyy-dd-mm']",
    close:".--close",
    submitButton:"[type='submit']",
    selectionButton:"[tabindex='0']",
    sexButton:".oxd-radio-wrapper"
  }

  it.skip('Login - Success', () => {

    cy.visit('/auth/login')

    cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
    cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopBar).contains('Dashboard')


  })

  it.skip('Login - Fail', () => {

      cy.visit('/auth/login')

      cy.get(selectorsList.usernameField).type(userData.userFail.username)
      cy.get(selectorsList.passwordField).type(userData.userFail.password)
      cy.get(selectorsList.loginButton).click()

      cy.get(selectorsList.wrongCredentialAlert).should('be.visible')

  })

  it.skip('Recuperação - Senha', () => {
 
      cy.visit('/auth/login')
      cy.get(selectorsList.recuperationPassword).click()
      cy.get(selectorsList.recuperationBanner).should('be.visible')
  })

    it.only('User Info Update - Success', () => {

      cy.visit('/auth/login')

      cy.get(selectorsList.usernameField).type(userData.userSuccess.username)
      cy.get(selectorsList.passwordField).type(userData.userSuccess.password)
      cy.get(selectorsList.loginButton).click()
      cy.get(selectorsList.myInfoButton).click()
      
      cy.get(selectorsList.firstnameField).clear().type('Nilda')
      cy.get(selectorsList.middleName).clear().type('Almeida')
      cy.get(selectorsList.lastnameField).clear().type('Albuquerque')
      cy.get(selectorsList.genericField).eq(3).clear().type('ID5878')
      cy.get(selectorsList.genericField).eq(4).clear().type('8712')
      cy.get(selectorsList.genericField).eq(5).clear().type('Driver578')
      cy.get(selectorsList.selectionButton).eq(0).click()
      cy.contains('Brazilian').click()
      cy.get(selectorsList.selectionButton).eq(1).click()
      cy.contains('Other').click()
      cy.get(selectorsList.selectionButton).eq(2).click()
      cy.contains('AB+').click()
      cy.get(selectorsList.genericField).eq(8).clear().type('Driver5785')
      cy.get(selectorsList.dateField).eq(0).clear().type('2032-06-04')
      cy.get(selectorsList.close).click()
      cy.get(selectorsList.dateField).eq(1).clear().type('2035-06-06')
      cy.get(selectorsList.close).click()
      cy.get(selectorsList.sexButton).eq(0).click()
      cy.get(selectorsList.submitButton).eq(0).click()
      cy.get(selectorsList.submitButton).eq(1).click()
      cy.get('body').should('contain', 'Successfully Updated')
      
    })




})