import mongoose from 'mongoose'

// Init MongoDB connection
export const mongo = async () => {
    mongoose
        .connect(process.env.DB_URI, { useNewUrlParser: true })
        .then(() => {
            console.log('✅ Database connected success')
        })
        .catch(err => {
            console.log(`❌ Can not connect to the database ${err}`)
        })
}
