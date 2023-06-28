it('teste de login', () => {
    cy.api({
        method:'GET',
        url:'/user/login',
        failOnStatusCode: false,
        body:{
            "username": "florinda26",
            "password": "girafas321"

        }
    }).then((response)=>{
        expect(response.status).to.eq(200)      
    })
});
it('teste de logout', () => {
    cy.api({
        method:'GET',
        url:'/user/logout',
        failOnStatusCode: false,
        body:{
          
        }
    }).then((response)=>{
        expect(response.status).to.eq(200)      
    })
});