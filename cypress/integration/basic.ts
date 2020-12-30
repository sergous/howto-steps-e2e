it('should perform basic google search', () => {
    cy.visit('http://localhost:3000');
    cy.get('.ant-input-search.ant-input-search-enter-button > .ant-input')
        .type('test query')
        .type('{enter}');
});
