it('teste de criaçao 1', () => {
    cy.api({
        method:'POST',
        url:'/user',
        failOnStatusCode: false,
        body:{

            "id": 100,
            "username": "florinda26",
            "firstName": "flor",
            "lastName": "silva",
            "email": "flordelis@girassol.com",
            "password": "girafas321",
            "phone": "85 88934209",
            "userStatus": 0
        }
    }).then((response)=>{
        expect(response.status).to.eq(200) 
    })
});
it('teste de criaçao 2', () => {
    cy.api({
        method:'GET',
        url:'/user/florinda26',
        failOnStatusCode: false,
        body:{

        }
    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body.username).to.eq("florinda26")
        expect(response.body.firstName).to.eq("flor")
        expect(response.body.lastName).to.eq("silva")
        expect(response.body.email).to.eq("flordelis@girassol.com")
        expect(response.body.password).to.eq("girafas321")
        expect(response.body.phone).to.eq("85 88934209")   
    })
});
it('teste de criaçao 3', () => {
    cy.api({
        method:'PUT',
        url:'/user/florinda26',
        failOnStatusCode: false,
        body:{

            "id": 100,
            "username": "florinda2",
            "firstName": "flor",
            "lastName": "silva",
            "email": "flordelis@girassol.com",
            "password": "girafas321",
            "phone": "85 88934209",
            "userStatus": 0
        }
    }).then((response)=>{
        expect(response.status).to.eq(200) 
    })
});
it('teste de criaçao 4', () => {
    cy.api({
        method:'GET',
        url:'/user/florinda26',
        failOnStatusCode: false,
        body:{

        }
    }).then((response)=>{
        expect(response.status).to.eq(404)  
    })
}); 
it('teste de criaçao 5', () => {
    cy.api({
        method:'GET',
        url:'/user/florinda2',
        failOnStatusCode: false,
        body:{

            "id": 100,
            "username": "florinda2",
            "firstName": "flor",
            "lastName": "silva",
            "email": "flordelis@girassol.com",
            "password": "girafas321",
            "phone": "85 88934209",
            "userStatus": 0
        }
    }).then((response)=>{
        expect(response.status).to.eq(200) 
    })
});