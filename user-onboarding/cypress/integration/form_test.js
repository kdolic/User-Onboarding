describe('Lambda Form Application App', () => {

    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })


    // HELPERS to AVOID REPITITION
    const firstNameInput = () => cy.get('form input[name="fname"]')
    const lastNameInput = () => cy.get('form input[name="lname"]')
    const emailInput = () => cy.get('form input[name="email"]')
    const passwordInput = () => cy.get('form input[name="password"]')
    const rolesDropdown = () => cy.get('form select[name="role"]')
    const termsBox = () => cy.get('form input[type="checkbox"]')
    const submitButton = () => cy.get('button[id="submitButton"]')

    it('Elements exist', () => {
        firstNameInput().should('exist')
        lastNameInput().should('exist')
        emailInput().should('exist')
        passwordInput().should('exist')
        rolesDropdown().should('exist')
        termsBox().should('exist')
        submitButton().should('exist')
    })



    describe('Name, Email, Password, Terms of Service Inputs, & Validation', () => {
    it('can type inside the input fields', () => {
        firstNameInput()
            .should('have.value', '')
            .type('Kenan')
            .should('have.value', 'Kenan')

        lastNameInput()
            .should('have.value', '')
            .type('Dolic')
            .should('have.value', 'Dolic')

        emailInput()
            .should('have.value', '')
            .type('kdolic@gmail.com')
            .should('have.value', 'kdolic@gmail.com')

        passwordInput()
            .should('have.value', '')
            .type('password1234')
            .should('have.value', 'password1234')
    })

    it('Check the terms of service box', () => {
        termsBox().check()
        .should('be.checked')
    })

    it('Checks for form validation if an input is empty', () => {
        
        submitButton().should('not.be.disabled')
       
    })


    })

    describe('Application Form Submit', () => {
    it('Allows submission of form after everything is completed & filled out', () => {
        firstNameInput().type('Kenan')
        lastNameInput().type('Dolic')
        emailInput().type('kdolic@gmail.com')
        passwordInput().type('password1234')
        rolesDropdown().select('Front-End Engineer')
        termsBox().check()
        submitButton().should('not.be.disabled')
        submitButton().click()
        cy.contains('Kenan Dolic').should('exist');
        cy.contains('kdolic@gmail.com').should('exist');
        cy.contains('Front-End Engineer').should('exist');
        })
    })
})
