import LoginPage from '../pages/loginPage'
import userData from '../fixtures/user-data.json'
import DashboardPage from '../pages/dashboardPage'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Login Orange HRM Tests', () => {
// Teste de login com credenciais inválidas
  it('Login - Fail', () => {
     loginPage.acessLoginPage()
     loginPage.loginWithUser(userData.userFail.username,userData.userFail.password)
     loginPage.checkAccessInvalid()
  })
  //Teste Login com credenciais válidas
  it('Login - Success', () =>{
     loginPage.acessLoginPage()
     loginPage.loginWithUser(userData.userSuccess.username,userData.userSuccess.password)
     dashboardPage.checkDashboardPage()
  })
})