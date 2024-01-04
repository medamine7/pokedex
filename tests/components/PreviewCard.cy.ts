import PreviewCard from '~/components/PreviewCard.vue'

describe('<PreviewCard />', () => {
  it('renders', () => {
    const props = {
      item: {
        name: 'Pikachu',
        image: {
          src: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
          alt: 'Pikachu'
        }
      }
    };

    cy.mount(PreviewCard, {
      props,
    })

    cy.get('div').contains('Pikachu')
    cy.get('img').should('have.attr', 'src', props.item.image.src)
    cy.get('img').should('have.attr', 'alt', props.item.image.alt)
  })
})