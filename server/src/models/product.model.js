import { MongoServerClosedError } from 'mongodb';
import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
    {
        productName: {
            type: String,
            required: [true, "Product name is required"],
            trim: true,
            lowercase: true,
        },

        productPrice: {
            type: Number,
            required: [true, "Product price is required"],
        },

        productDescription: {
            type: String,
            required: [true, "Product description is required"],
            trim: true,
        },

        slug: {
            type: String,
            slug: 'productName',
            required: [true, "Product slug is required"],
            unique: [true, "Product slug should be unique"],
            trim: true,
            lowercase: true,
        },

        productImages: {
            type: [String],
            required: [true, "Product images are required"],
        },

        productCategory: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Category",
            required: [true, "Product category is required"],
        },

        productStatus: {
            type: String,
            required: [true, "Product status is required"],
            enum: {
                values: ['draft', 'published'],
                message: `{VALUE} is not correct. Only this values are allowed - hidden, draft, published`
            },
            trim: true,
            lowercase: true,
            default: "published"
        },

        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        }
    },
    {
        timestamps: true
    }
)

productSchema.pre('save', async function () {
    if (!this.isModified('productName')) return;
    this.slug = this.productName.toLowerCase().trim().split(" ").join("-");
})

export const Product = mongoose.model("Product", productSchema);