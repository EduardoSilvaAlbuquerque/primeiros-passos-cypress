 import userData from '../fixtures/user-data.json'
 import LoginPage from '../pages/loginPage'
 import DashboardPage from '../pages/dashboardPage'
 import MenuPage from '../pages/menuPage'
 import MyInfoPage from '../pages/myinfoPage'

 const Chance = require('chance');
 const chance = new Chance()
 const loginPage = new LoginPage()
 const dashboardPage = new DashboardPage()
 const menuPage = new MenuPage()
 const myinfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {
 // Teste de login e atualização de dados na seção "My Info"
it('User Info Update - Success', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.acessMyInfo()
    myinfoPage.fillPersonalDetails(chance.first(), chance.last(), chance.last())
    myinfoPage.fillEmployeeDetails(chance.first(), chance.cf(), chance.integer({ min: 1, max: 6}), '2026-07-10')             
    myinfoPage.customFields(chance.nationality(),'Married','1995-10-10','Male','B+')
    myinfoPage.saveForm()
  })

 // Valida que o sistema impede o login com credenciais inválidas
it('Login - Fail', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
  })

})

