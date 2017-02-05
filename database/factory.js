'use strict'

/*
|--------------------------------------------------------------------------
| Model and Database Factory
|--------------------------------------------------------------------------
|
| Factories let you define blueprints for your database models or tables.
| These blueprints can be used with seeds to create fake entries. Also
| factories are helpful when writing tests.
|
*/

const Factory = use('Factory')

/*
|--------------------------------------------------------------------------
| User Model Blueprint
|--------------------------------------------------------------------------
| Below is an example of blueprint for User Model. You can make use of
| this blueprint inside your seeds to generate dummy data.
|
*/
Factory.blueprint('App/Model/Product', (fake) => {
  return {
    title: fake.sentence(),
    description: fake.paragraph(),
    price: fake.integer({min: 0, max: 200}),
    SKU: fake.integer({min: 0, max: 20})
  }
})
Factory.blueprint('App/Model/Category', (fake) => {
  return {
  title: fake.sentence(),
  description: fake.sentence()
  }
})
Factory.blueprint('App/Model/User', (fake) => {
  return {
    username: fake.username(),
    password: fake.password(),
    email: fake.email({domain: 'example.com'})
  }
})
Factory.blueprint('App/Model/Role', (fake) => {
  return 
})
Factory.blueprint('App/Model/Profile', (fake) =>{
  return {
    avatar: fake.avatar(),
     address: fake.address(),
      birthdate: fake.date(),
      email: fake.email(),
      mobile: fake.integer({min: 0, max: 20})
  }
})  
Factory.blueprint('App/Model/Wishlist', (fake) => {
  return {
  title: fake.sentence(),
  description: fake.sentence()
  }
})