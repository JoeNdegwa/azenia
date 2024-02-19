import web from '../pom/web'
import strings from '../pom/strings'

describe('Orange HRM', () => {

  it('TC001: Automate OrangeHRM', () => {
    // user can navigate to the web page
    web.utils.visitURL(Cypress.config().baseUrl)
    web.utils.validateTitle(strings.TITLE)
    web.utils.textIsVisible(strings.FORGOT_PASSWORD)
    web.utils.validateURL('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    // user can login to the web page
    web.utils.visitURL(Cypress.config().baseUrl)
    cy.fixture('users').then(user => {
      web.utils.enterTextOnInputFieldByProperties('name="username"', user.username)
      web.utils.enterTextOnInputFieldByProperties('name="password"', user.password)

    })
    web.utils.clickOnItemByText('button[type=submit]', ' Login ')
    web.utils.validateTitle(strings.TITLE)
    web.utils.validateURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

    // Locate My Info page
    web.utils.textIsVisible(strings.My_Info)
    web.utils.clickOnItemByText('.oxd-main-menu-item > span', strings.My_Info)
    // Change the Employee ID and SSN
    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input')
      .clear()
      .type('22445599')

    cy.get(':nth-child(3) > :nth-child(1) > :nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
      .clear()
      .type('AAA-GG-SSSS-22')

    // Save
    web.utils.clickOnItemByText('button[type=submit]', strings.Save)

    // Assert change the Employee ID and SSN
    cy.get('#oxd-toaster_1')
      .contains('Successfully Updated')

    // Navigate to the Dashboard
    web.utils.clickOnItemByText('.oxd-main-menu-item > span', strings.Dashboard)
    web.utils.textIsVisible(strings.Time_at_Work)

    // Logout
    cy.get('.oxd-userdropdown-name').click()
    web.utils.clickOnItemByText('a[role=menuitem]', strings.Logout)

    web.utils.validateTitle(strings.TITLE)
    web.utils.textIsVisible(strings.FORGOT_PASSWORD)
  })

})