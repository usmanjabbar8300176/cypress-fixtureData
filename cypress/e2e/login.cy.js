import login from "../support/login"
const Login = new login()
let data = null;
const firstuser1 = Cypress.env("loginWithFirstUser")


describe('login using fixture', () => {
  beforeEach('visit site', () => {
    cy.visit("/")

    cy.fixture('example').then(function (_data) {

      data = _data

      console.log('data', data)
    });

  })


  it('login with first user', () => {

    Login.firstUser(data)
  })


  it('login with second user', () => {

    Login.secondUser(data)
  })


  it('login with third user', () => {

    Login.thirdUser(data)


  })

})