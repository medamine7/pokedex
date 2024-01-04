import DetailsCard from '~/components/DetailsCard.vue'
import { Pokemon } from '~/types'

describe('<DetailsCard />', () => {
  it('renders', () => {
    const item: Pokemon = {
      name: 'Pikachu',
      image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      sprite: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
      stats: {
        attack: 44,
        defense: 50,
        hp: 35,
        speed: 90,
      },
      type: 'electric',
      starred: false,
    }

    cy.mount(DetailsCard, {
      props: {
        item,
      }
    })

    cy.get('h4').should('contain', item.name)
    cy.get('img').should('have.attr', 'src', item.sprite)
    cy.get('img').should('have.attr', 'alt', item.name)

    cy.get('ul li').should('have.length', 3)
    cy.get('ul li h6').eq(0).should('contain', item.stats.attack)
    cy.get('ul li p').eq(0).should('contain', 'Attack')

    cy.get('ul li h6').eq(1).should('contain', item.stats.defense)
    cy.get('ul li p').eq(1).should('contain', 'Defense')

    cy.get('ul li h6').eq(2).should('contain', item.stats.speed)
    cy.get('ul li p').eq(2).should('contain', 'Speed')

    cy.get('[data-role=hp-badge]').should('contain', item.stats.hp)

    cy.get('[data-role=type-badge]').should('contain', item.type)
  })
})