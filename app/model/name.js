'use strict';

module.exports = app => {
    const mongoose = app.mongoose;
    const Schema = mongoose.Schema;

    const NameSchema = new Schema({
        name: {
            type: String,
            required: true,
            unique: true,
            max: 20,
        },
        age: {
            type: Number,
            required: true,
            max: 100,
        },
        sex: {
            type: String,
            required: false,
            max: 2,
        },
        created_at: {
            type: Date,
            required: true,
            default: Date.now(),
        },
        updated_at: {
            type: Date,
            required: true,
            default: Date.now(),
        }
    }, {
        versionKey: false,
        timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
    });

    return mongoose.model('Name', NameSchema);
};