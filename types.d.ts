declare namespace Cypress {
    interface Chainable {
        tab(): Chainable<Element>
        toggleDarkMode(): Chainable<Element>
        screenSize(size: 'tiny' | 'sm' | 'md' | 'lg'): Chainable<Element>
    }
}
