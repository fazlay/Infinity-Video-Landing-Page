import React from 'react'
import { FormContent, FormH1, FormInput, FormLabel } from './signinElements'

 const SignIn = () => {
    return (
        <>
        <Container>
            <FormWarp>
                <Icon to="/">dollar</Icon>
                <FormContent>
                    <Form action = "#">
                        <FormH1>Sign In to your Account</FormH1>
                        <FormLabel htmlFor='for'> Email</FormLabel>
                        <FormInput type='email' required/>
                        <FormLabel htmlFor='for' >Password</FormLabel>
                        <FormInput type='possword' required/>
                        <FormButton type='submit'>Continue</FormButton>
                        <Text>Forget Password</Text>
                    </Form>
                </FormContent>
            </FormWarp>
        </Container>
            
        </>
    )
}

export default SignIn;