import mongoose from 'mongoose';

export default () => {
    const connect = () => {
        const uri = 'mongodb+srv://nhatlinh:Kimanh1999@cluster0.njwuo.mongodb.net/test';

        mongoose
            .connect(uri, {})
            .then(() => {
                return console.info(`Successfully connected to ${uri}`);
            })
            .catch((err) => {
                console.error(`Error connecting to database :`,err);

                return process.exit(1);
            });
    };

    connect();

    mongoose.connection.on('disconnected', connect);
}
