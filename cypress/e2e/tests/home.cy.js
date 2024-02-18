import web from '../pom/web'
import strings from '../pom/strings'

describe('template spec', () => {

  it('TC001: Visit the URL', () => {
    cy.visit(Cypress.config().baseUrl)
  })

  it('TC002: Validates text on Home screen', () => {
    cy.visit(Cypress.config().baseUrl)
    web.utils.textIsVisible(strings.Kitchen_Sink)
    web.utils.textIsVisible(strings.Commands)
    web.utils.clickItemByText('a', 'get')
    web.utils.itemContainsText('#query-btn', 'Button')
  })
  it('TC003: Test demo login', () => {
    cy.visit(Cypress.config().demoUrl)

    cy.fixture('users').then(user => {
      web.utils.enterTextIntoField('#username', user.username)
      web.utils.enterTextIntoField('#password', user.password)

    })
    web.utils.itemContainsText('#submit', 'Submit')
    web.utils.clickItemByText('#submit', 'Submit')

  })

})