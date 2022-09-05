/// <reference types ="cypress"/>

it('Read Files using fixtures', ()=>{

    cy.fixture('example.json').then((data) =>{
        cy.log(data.name)
        cy.log(data.email)
        cy.log(data.message)

   })

})

it('Read File using readfile', function (){
   
    cy.readFile('./cypress/fixtures/example.json').then((data) =>{
        cy.log(data.name)
    })
})

it('Write file',()=>{

    cy.writeFile('sample.txt','Hi Im Krishna\n')
    cy.writeFile('sample.txt','I Love Cricket',{flag:'a+'})
})