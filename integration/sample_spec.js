// sample_spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

// describe('My First Test', () => {
//   it('Visits the Kitchen Sink', () => {
//     cy.visit('https://example.cypress.io')

//     cy.pause()

// cy.contains('type').click()

//     // Should be on a new URL which includes '/commands/actions'
//     cy.url().should('include', '/commands/actions')

//     // Get an input, type into it and verify that the value has been updated
//     cy.get('.action-email')
//       .type('fake@email.com')
//       .should('have.value', 'fake@email.com')
//   })
// })

//-------------------------------------------------------------------------


// 1. visit Amazon.in
describe('Amazon assignment', () => {
  it('Visits Amazon.in', () => {
    cy.visit('https://www.amazon.in')


// go to Today's Deals    
cy.contains("Today's Deals").click()

// Should be on a new URL which includes '/deals'
cy.url().should('include', '/deals')

//clicking on a deal in the deals page
cy.get('.Grid-module__grid_1-xkdMK87Hfx0wjqVxAGcI>div').eq(6).click()

//select quantity of item as 2
cy.get('select#quantity ').select('2').should('have.value',2)

//add to cart
cy.get('input#add-to-cart-button').click()

//go to cart
cy.get('input.a-button-input[type="submit"][aria-labelledby="attach-sidesheet-view-cart-button-announce"]').click()

//cart should contain quantity 2 of the item
cy.get('span.a-dropdown-prompt').should('contain',2)

//Search for mobiles
cy.get('input#twotabsearchtextbox').type('Mobiles{enter}')

   // cy.get('div.a-section.a-spacing-none.s-result-item.s-flex-full-width.s-widget.s-widget-spacing-large').last().prev().prev().click()

//click on checkbox on the left, since prime is not available clicking on out of stock   
cy.get('i.a-icon.a-icon-checkbox').eq(1).click()

//Delivery date details of first item.
cy.get('span.a-text-bold').eq(1).log()

//open left nav
cy.get('i.hm-icon.nav-sprite').click()

//click on mobiles and laptops
cy.get('a.hmenu-item[data-menu-id="8"]').click()

//click on All Mobiles
cy.get('ul.hmenu.hmenu-visible.hmenu-translateX>li').eq(2).click()

//click on prime checkbox to the left
cy.get('i.a-icon.a-icon-checkbox').eq(1).click()

//get delivery date details of first item
cy.get('span.a-text-bold').eq(1)

//orders- asking for login every time 
    // cy.get('a#nav-orders').click()

    // cy.get('span#a-autoid-1-announce').click()

  })
})

