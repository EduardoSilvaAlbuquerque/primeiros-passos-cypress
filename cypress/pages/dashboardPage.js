class DashboardPage {
   selectorList() {
     const selectors = {
         dashBoardGrid:".orangehrm-upgrade-layout",

        }
        return selectors
    }
    
    checkDashboardPage( ){
    cy.location('pathname').should('eq', '/web/index.php/dashboard/index')
    cy.get(this.selectorList().dashBoardGrid).should('be.visible')
   }

}
export default DashboardPage