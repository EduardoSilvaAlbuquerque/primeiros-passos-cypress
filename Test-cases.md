# Casos de Teste - OrangeHRM

---

# TC-01 - Validar Login com Credenciais Válidas

## Objetivo

Validar que o usuário consegue acessar o sistema utilizando credenciais válidas.

## Pré-condições

- Usuário cadastrado e ativo.

## Passos

1. Acessar o sistema OrangeHRM.
2. Informar um usuário válido.
3. Informar uma senha válida.
4. Clicar no botão **Login**.

## Resultado Esperado

O sistema deve autenticar o usuário e redirecionar o usuário para o **Dashboard**.

## Resultado Obtido

O sistema autenticou o usuário com sucesso e realizou o redirecionamento para o **Dashboard**.

## Status

✅ Aprovado

---

# TC-02 - Validar Login com Senha Inválida

## Objetivo

Validar que o sistema impeça o login quando uma senha inválida for informada.

## Pré-condições

- Usuário cadastrado.

## Passos

1. Acessar o sistema OrangeHRM.
2. Informar um usuário válido.
3. Informar uma senha inválida.
4. Clicar no botão **Login**.

## Resultado Esperado

O sistema deve impedir o acesso e exibir a mensagem **"Invalid credentials"**.

## Resultado Obtido

O sistema exibiu corretamente a mensagem **"Invalid credentials"**.

## Status

✅ Aprovado

---

# TC-03 - Atualizar Dados do Usuário na Seção My Info

## Objetivo

Validar que o usuário consiga atualizar seus dados pessoais na seção **My Info**.

## Pré-condições

- Usuário cadastrado e autenticado.

## Passos

1. Acessar o sistema OrangeHRM.
2. Informar um usuário válido.
3. Informar uma senha válida.
4. Clicar no botão **Login**.
5. Acessar o menu **My Info**.
6. Preencher o campo **First Name** com um valor gerado pelo **Chance.js**.
7. Preencher o campo **Middle Name** com um valor gerado pelo **Chance.js**.
8. Preencher o campo **Last Name** com um valor gerado pelo **Chance.js**.
9. Selecionar uma **Nationality** gerada pelo **Chance.js**.
10. Selecionar um **Marital Status** gerado pelo **Chance.js**.
11. Informar uma **Date of Birth**.
12. Selecionar um **Gender**.
13. Selecionar um **Blood Type** gerado pelo **Chance.js**.
14. Clicar no botão **Save** da seção **Personal Details**.
15. Validar a exibição da mensagem de sucesso.

## Resultado Esperado

O sistema deve salvar as alterações realizadas e exibir uma mensagem de confirmação informando que os dados foram atualizados com sucesso.

## Resultado Obtido

O sistema salvou todas as alterações com sucesso e exibiu a mensagem de confirmação.

## Status

✅ Aprovado