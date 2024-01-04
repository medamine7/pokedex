import XButton from '~/components/XButton.vue'

describe('<XButton />', () => {
  it('renders', () => {
    cy.mount(XButton, {
      slots: {
        default: 'Hello World'
      }
    })

    cy.get('button').contains('Hello World')
    cy.get('button').click()
  })
})