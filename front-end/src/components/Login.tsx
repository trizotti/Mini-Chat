"use client"

import {
  Box,
  Flex,
  Text,
  Input,
  Button,
  FormControl,
  FormLabel,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  FormHelperText,
  FormErrorMessage,
} from "@chakra-ui/react"
import { useState } from "react"

// Only valid emails
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
// At least 1 character is required, only letters and spaces are allowed
const nameRegex = /^[A-Za-zÀ-ÁÍÓÚÉÈÙÇãõáéíóúüç]+$|^([A-Za-zÀ-ÁÍÓÚÉÈÙÇãõáéíóúüç]+)\s[A-Za-zÀ-ÁÍÓÚÉÈÙÇãõáéíóúüç]+$/
// At least 6 characters are required, only letters and numbers are allowed
const passwordRegex = /^[a-zA-Z0-9]{6,}$/

const Login = () => {

  const [isRecoveringPassword, setIsRecoveringPassword] = useState(false)

  const [name, setName] = useState("")
  const isNameValid = nameRegex.test(name)

  const [password, setPassword] = useState("")
  const isPasswordValid = passwordRegex.test(password)
  const [confirmPassword, setConfirmPassword] = useState("")

  const [email, setEmail] = useState("")
  const isEmailValid = emailRegex.test(email)

  const isPasswordAndConfirmationMatching = password === confirmPassword

  const switchForgotPassword = () => {
    setIsRecoveringPassword((oldValue) => (!oldValue))
  }

  const handleRecoverButtonClick = (event: React.SyntheticEvent) => {
    event.preventDefault()
    console.log("Recovering password...")
  }

  const handleLogin = (event: React.SyntheticEvent) => {
    event.preventDefault()
    console.log('Usuário logado')
  }

  const handleRegister = (event: React.SyntheticEvent) => {
    event.preventDefault()
    console.log('Conta criada')
  }

  return (
    <Flex
      minH="100vh"
      alignItems="center"
      justifyContent="center"
    >
      <Box bg="white" rounded="lg" shadow="lg" p="8" maxWidth="400px">
        <Text fontSize="lg" fontWeight="bold" mb="4">
          MiniChat
        </Text>

        <Tabs>
          <TabList>
            <Tab>Login</Tab>
            <Tab>Criar Conta</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <FormControl mt="4" isInvalid={!isEmailValid}>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Seu email" onChange={(e) => setEmail(e.target.value)} value={email} />
                {(!isEmailValid && email.length > 0) && <FormErrorMessage mt="2">
                  Insira um e-mail válido.
                </FormErrorMessage>}
              </FormControl>

              {!isRecoveringPassword && <FormControl mt="4" isInvalid={!isPasswordValid}>
                <FormLabel>Senha</FormLabel>
                <Input type="password" placeholder="Sua senha" onChange={(e) => setPassword(e.target.value)} value={password} />
              </FormControl>}

              <FormControl mt="4">
              {isRecoveringPassword && <FormHelperText>
                  Envie um e-mail de recuperação para o endereço da sua conta.
              </FormHelperText>}

                {isRecoveringPassword ? <Button type="submit" colorScheme="blue" mt="6" onClick={handleRecoverButtonClick} isDisabled={!isEmailValid}>
                  Enviar
                </Button> : <Button type="submit" colorScheme="blue" mt="6" onClick={handleLogin} isDisabled={!isEmailValid}>
                  Entrar
                </Button>}
              </FormControl>

              <Button variant="ghost" mt="2" onClick={switchForgotPassword}>
                {isRecoveringPassword ? "Voltar para autenticação" : "Esqueci minha senha"}
              </Button>
            </TabPanel>

            <TabPanel>
              <FormControl mt="4" isInvalid={!isNameValid}>
                <FormLabel>Nome</FormLabel>
                <Input type="text" placeholder="Seu nome completo" onChange={(e) => setName(e.target.value)} value={name} />
              </FormControl>

              <FormControl mt="4" isInvalid={!isEmailValid}>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="Seu email" onChange={(e) => setEmail(e.target.value)} value={email} />
                {(!isEmailValid && email.length > 0) && <FormErrorMessage mt="2">
                  Insira um e-mail válido.
                </FormErrorMessage>}
              </FormControl>

              <FormControl mt="4" isInvalid={!isPasswordValid}>
                <FormLabel>Senha</FormLabel>
                <Input type="password" placeholder="Sua senha" onChange={(e) => setPassword(e.target.value)} value={password} />
                <FormHelperText>
                  Crie uma senha com pelo menos 6 caracteres. Utilize apenas letras e números.
                </FormHelperText>
              </FormControl>

              <FormControl mt="4" isInvalid={!isPasswordValid || !isPasswordAndConfirmationMatching}>
                <FormLabel>Confirmar Senha</FormLabel>
                <Input type="password" placeholder="Confirme sua senha" onChange={(e) => setConfirmPassword(e.target.value)} />
                {!isPasswordAndConfirmationMatching && <FormErrorMessage mt="2">
                  A senha e a confirmação não são iguais.
                </FormErrorMessage>}
              </FormControl>

              <Button type="submit" colorScheme="green" mt="6" onClick={handleRegister} isDisabled={!isEmailValid || !isPasswordValid || !isPasswordAndConfirmationMatching}>
                Criar Conta
              </Button>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Flex>
  )
}

export default Login