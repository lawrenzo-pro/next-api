const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
async function seed(){
    const new_data = await prisma.user.create({
        data:{
            username:"testuser3",
            email:"testuser4@next.org",
            password:"password",
       profile: {
        create: { 
            first_name:"test",
            second_name:"user2",
            cash:10000,
            no_referrals:11,
         },
        },
    }})
}
module.exports = seed
seed()