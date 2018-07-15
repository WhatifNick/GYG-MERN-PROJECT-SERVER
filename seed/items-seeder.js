const mongoose = require ('mongoose')
let Item = require('../models/item')
 require('dotenv').config()

mongoose.connect(process.env.MONGOLAB_URI).then(connection => {
    console.log('Connected to MongoDB')
  })
  .catch(error => {
    console.log(error.message)
  })

let items = [
    new Item ({
    imagePath: 'https://res.cloudinary.com/dxzy39s8n/image/upload/v1531621772/burrito.jpg',
    title: 'Burritos',
    description: 'Grilled Chicken in GYG’s Guerrero marinade with Pico de Gallo and Roasted Tomato salsa.',
    price: 11.70
  }),
    new Item ({
    imagePath: 'https://res.cloudinary.com/dxzy39s8n/image/upload/v1531622052/fajitas.jpg',
    title: 'Fajitas',
    description: 'Your favourite burrito with sautéed capsicums, onions and mushrooms, fajita vinaigrette and crema. Rolled in a soft flour tortilla.',
    price: 13.00
  }),
]

let done = 0
for (let i = 0; i < items.length; i++){
  items[i].save((err, result) => {
    done ++
    if (done === items.length){
      exit()
    }
  })
}

let exit = () => {
  mongoose.disconnect()
}
