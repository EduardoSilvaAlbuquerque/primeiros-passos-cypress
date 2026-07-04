 import userData from '../fixtures/user-data.json'
 import LoginPage from '../pages/loginPage'
 import DashboardPage from '../pages/dashboardPage'
 import menuPage from '../pages/menuPage'
 import MyInfoPage from '../pages/myinfoPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const MenuPage = new menuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  it('User Info Update - Success', () => {
  loginPage.acessLoginPage()
  loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
  dashboardPage.checkDashboardPage()
  MenuPage.acessMyInfo()
  myInfoPage.fillPersonalDetails('Eduardo', 'da', 'Silva Qa')
  myInfoPage.fillEmployeeDetails('FutureQa', '121126', '78532', '2008-05-25', '2026-06-12')
  myInfoPage.customFields()
  myInfoPage.savefirstForm()
  myInfoPage.savesecondForm()

})
   
  })
    it.skip('Login - Fail', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(userData.userFail.username, userData.userFail.password)

})

