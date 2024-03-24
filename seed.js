const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
async function seed(){
    const new_data = await prisma.user.create({
        data:{
            username:"testuser3",
            email:"testuser5@next.org",
            password:"password",
       profile: {
        create: { 
            first_name:"test",
            second_name:"user2",
            cash:10000,
            cloaks:4000,
         },
        },
    }})
}
module.exports = seed
seed()