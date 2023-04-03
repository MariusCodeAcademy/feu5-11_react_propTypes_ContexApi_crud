# Steps to add props types

1. npm install prop-types
2. import PropTypes from 'prop-types';
3.

# My app

## add router

1. prideti router i main.jsx
2. sukurti pages dir ir joje 3 failus. Home, Contact, Users
3. Sukurti Header komponenta kuriame bus navigacija
4. App.jsx aprasyti routes
   - / => Home Page
   - /contact => Contact Page
   - /users => Users Page
5. User page bus UsersList.jsx
6. UsersList komponente turesim SingleUser.jsx komponentus
7. UsersPage.jsx parisiusti ir state issaugoti useriu is https://dummyjson.com/docs/users

## practice uzd

1. UsersPage susikurti state 'loggedInUser' pradine reiksme {}
2. UsersPage susikurti funckija handleSelectedUser(id)
3. <Button>Login user</Button> - turi nustatyti UsersPage viduje state 'loggedInUser'

## Aside

1. Pasidarom Aside i komponenta UsersAside.jsx
2. Avaizduojam logged in user varda, emaila, amziu
3. UsersAside gaus props validuoti visus props
4. Sukuriam UsersInfo.jsx, patalpinam ji i UsersAside.jsx ir jame atvaizduojam:
   1. kiek yra users
   2. visu users amziu vidurki
   3. atvaizduojam viename paragrafe, kableliais atskirtas userio akiu spalvas.

## SingleUser

1. Prisideti Delete mygtuka
2. <Button danger>Delete</Button> - turetu gauti skirtinga stiliu jei gauna propsa 'danger'. Props validuojam.
3. Jo paspaudimu istrinsim Vartotoja
4. Isitikinti kad UsersInfo atvaizduoja pasikeitusius duomenis

## Context

1. sukurti setUserCount state contexte
2. perduoti setUserCount i context value
3. Users.jsx bet kada pasikeitus usersArr ilgiui atnaujinti ji contexte
4. paduoti userCount reiksme i kontexta
5. UsersInfo.jsx
   1. gauti userCount is context (useContext)
   2. panaudoti skaiciau atvaizdavimui
