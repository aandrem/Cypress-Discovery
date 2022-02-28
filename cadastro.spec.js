import signup from '../pages/SignupPage'

describe('Cadastro',()=>{
    it('Usuário deve se tornar um entregador',()=>{
        
        var deliver = {
            name: 'André Martins',
            cpf: '00000000054',
            email: 'andre@gmail.com',
            whatsapp: '71992118102',
            adress: {
                postalcode: '40231250',
                street: 'Av. Cardeal da Silva',
                number: '242',
                details: 'Ed. Alto do Vale ap 302a',
                district: 'Federação',
                city_state: 'Salvador/BA'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }
        
        signup.go()
        signup.fillForm(deliver)
        signup.submit()

        const expectMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signup.modalContentShouldBe(expectMessage)  
    })

    it('CPF inválido',()=>{
       
    
        var deliver = {
            name: 'André Martins',
            cpf: '000000000AA',
            email: 'andre@gmail.com',
            whatsapp: '71992118102',
            adress: {
                postalcode: '40231250',
                street: 'Av. Cardeal da Silva',
                number: '242',
                details: 'Ed. Alto do Vale ap 302a',
                district: 'Federação',
                city_state: 'Salvador/BA'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        signup.go()
        signup.fillForm(deliver)
        signup.submit()
        signup.alertMessageShouldBe('Oops! CPF inválido')
    })
    
})

