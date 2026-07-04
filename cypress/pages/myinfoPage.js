class MyInfoPage {
   selectorList() {
     const selectors = {
        myinfoButton:".active",
        //dados Personal Details
         firstNameField:"[name='firstName']",
         middleNameField:"[name='middleName']",
         lastNameField:"[name='lastName']",
         genericNameField:".oxd-input--active",
         dateField:"[placeholder='yyyy-dd-mm']",
         dateCloseButton:'.--close',
         submitButton:"[type='submit']",
         genderButton:".oxd-radio-wrapper",
         genericButton:".oxd-select-text",
          

        }

        return selectors
    }
    fillPersonalDetails(firstName, middleName, lastName ){
     cy.get(this.selectorList().myinfoButton).click()
     cy.get(this.selectorList().firstNameField).clear().type(firstName)
     cy.get(this.selectorList().middleNameField).clear().type(middleName)
     cy.get(this.selectorList().lastNameField).clear().type(lastName)
     
    }
    fillEmployeeDetails(employeeId, otherId, driversLicenseNumber, LicenseDate ){
     cy.get(this.selectorList().genericNameField).eq(3).clear().type(employeeId)
     cy.get(this.selectorList().genericNameField).eq(4).clear().type(otherId)   
     cy.get(this.selectorList().genericNameField).eq(5).clear().type(driversLicenseNumber)

     cy.get(this.selectorList().dateField).eq(0).clear().type(LicenseDate)
     cy.get(this.selectorList().dateCloseButton).click()

    }

     customFields(nationality, maritalStatus, dateBirth, gender, bloodType){

  // nacionalidade
     cy.get(this.selectorList().genericButton).eq(0).click()
     cy.contains('.oxd-select-option', nationality).click()

  // estado civil
     cy.get(this.selectorList().genericButton).eq(1).click()
     cy.contains('.oxd-select-option', maritalStatus).click()

  // data aniversário
     cy.get(this.selectorList().dateField).eq(1).clear().type(dateBirth)
     cy.get(this.selectorList().dateCloseButton).click()

  // gênero
     cy.get(this.selectorList().genderButton).eq(0).click()

  // tipo sanguíneo
     cy.get(this.selectorList().genericButton).eq(2).click()
     cy.contains('.oxd-select-option', bloodType).click()

    }
    //salva formulários
     saveForm(){
     cy.get(this.selectorList().submitButton).eq(0).click()
     cy.get(this.selectorList().submitButton).eq(1).click()
    }
    
}
    
export default MyInfoPage