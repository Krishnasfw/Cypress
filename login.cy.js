///reference types="cypress"/>
import { Loginpage } from "../pages/loginpage"
const loginpage = new Loginpage()

beforeEach(function () {
    cy.visit('https://opensource-demo.orangehrmlive.com')
})
describe('Orange Login', function () {

    // this.beforeEach(function(){
    //     cy.visit('https://opensource-demo.orangehrmlive.com')
    // })
    it('Login vaild', () => {

        loginpage.enterUsername('Admin')
        loginpage.enterPassword('admin123')
        loginpage.clickLogin()

        // cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        // cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')

        // cy.get('.oxd-button').click()

    })
    it.skip('Login invalid', () => {
        loginpage.enterUsername('Admin')
        loginpage.enterPassword('admin456')
        loginpage.clickLogin()
    })
})
it('Login blank', () => {
    loginpage.enterUsername('------')
    loginpage.enterPassword('*****')
    loginpage.clickLogin()
})

