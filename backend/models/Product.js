import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        enum: ['bench', 'coil', 'portable'],
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    specifications: {
        type: Object,
        default: {},
    },
    price: {
        type: Number,
        required: true,
    },
    images: {
        type: [String],
        default: [],
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Product = mongoose.model('Product', productSchema);
export default Product;