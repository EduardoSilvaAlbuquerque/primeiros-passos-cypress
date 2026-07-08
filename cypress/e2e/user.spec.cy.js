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

  it('User Info Update - Success', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
    menuPage.acessMyInfo()
    myinfoPage.fillPersonalDetails(chance.first(), 'da', chance.last())
    myinfoPage.fillEmployeeDetails(chance.first(), chance.cf(), chance.integer({ min: 1, max: 6}), '2008-05-21', '2026-06-12')             
    myinfoPage.customFields('American','Married','1995-10-10','Male','B+')
    //salva o primeiro form
    myinfoPage.saveForm()

  })

  it('Login - Fail', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
  })

})

