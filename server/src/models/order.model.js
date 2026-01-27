import mongoose from "mongoose";

const orderItemSchema = new mongoose.Schema(
    {
        productId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Product",
            required: true,
        },

        productName: {
            type: String,
            required: true,
            trim: true,
        },

        quantity: {
            type: Number,
            required: true,
            min: 1,
        },

        price: {
            type: Number,
            required: true,
            min: 0,
        },

        image: {
            type: String,
            default: null,
        },
    },
    { _id: false }
);

const orderSchema = new mongoose.Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },

        items: {
            type: [orderItemSchema],
            required: true,
        },

        deliveryAddress: {
            type: String,
            required: true,
            trim: true,
        },

        subTotal: {
            type: Number,
            required: true,
            min: 0,
        },

        gstCharges: {
            type: Number,
            default: 0,
            min: 0,
        },

        deliveryCharges: {
            type: Number,
            default: 0,
            min: 0,
        },

        totalPrice: {
            type: Number,
            required: true,
            min: 0,
        },

        orderStatus: {
            type: String,
            enum: ["created", "paid", "shipped", "delivered", "cancelled"],
            default: "created",
            lowercase: true,
        },

        statusTimeline: [
            {
                status: {
                    type: String,
                    enum: ["created", "paid", "shipped", "delivered", "cancelled"],
                },
                updatedAt: {
                    type: Date,
                    default: Date.now,
                },
            },
        ],

        paymentId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Payment",
            default: null,
        },
    },
    {
        timestamps: true,
    }
);

orderSchema.pre("save", function (next) {
    this.totalPrice = this.subTotal + this.gstCharges + this.deliveryCharges;
    next();
});

export const Order = mongoose.model("Order", orderSchema);
