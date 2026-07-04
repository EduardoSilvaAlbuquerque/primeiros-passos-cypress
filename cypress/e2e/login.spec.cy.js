import LoginPage from '../pages/loginPage'
import userData from '../fixtures/user-data.json'

const loginPage = new LoginPage()

describe('Login Orange HRM Tests', () => {

  it('Login - Fail', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithUser(
      userData.userFail.username,
      userData.userFail.password
    )
    loginPage.checkAccessInvalid()
  })

  it('Login - Success', () =>{
  loginPage.acessLoginPage()
  loginPage.loginWithUser(
    userData.userSuccess.username, 
    userData.userSuccess.password)

  })
})