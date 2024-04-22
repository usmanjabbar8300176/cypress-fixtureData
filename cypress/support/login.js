class login {
    firstUser(data) {
        console.clear()
        console.log(data[0])

        cy.get('#user-name').type(data.firstuser.username)
        cy.get('#password').type(data.firstuser.password)
        cy.get('#login-button').click()
        cy.get('[data-test="title"]').should('have.text', 'Products')
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
    }
    secondUser(data) {
        cy.get('#user-name').type(data.seconduser.username)
        cy.get('#password').type(data.seconduser.password)
        cy.get('#login-button').click()
        cy.get('[data-test="title"]').should('have.text', 'Products')
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
    }
    thirdUser(data) {
        cy.get('#user-name').type(data.thirduser.username)
        cy.get('#password').type(data.thirduser.password)
        cy.get('#login-button').click()
        cy.get('[data-test="title"]').should('have.text', 'Products')
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
    }
}

export default login;