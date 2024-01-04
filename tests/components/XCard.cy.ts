import XCard from '~/components/XCard.vue'

describe('<XCard />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-vue
    cy.mount(XCard, {
      slots: {
        default: 'Hello World'
      }
    })

    cy.get('div').contains('Hello World')
  })
})