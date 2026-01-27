import mongoose from 'mongoose';

const paymentSchema = new mongoose.Schema(

    {
        gatewayPaymentId: {
            type: String,
            required: [true, "Payment ID is required"],
            default: null
        },

        paymentReference: {
            type: String,
            required: [true, "Payment reference is required"],
            default: null
        },

        gatewayOrderId: {
            type: String,
            default: null,
        },

        orderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Order",
            required: true,
        },

        paymentMethod: {
            type: String,
            enum: ["UPI", "cod", "debitCard", "creditCard"],
            default: null,
            lowercase: true,
        },

        paymentStatus: {
            type: String,
            enum: ["success", "pending", "failed"],
            default: 'pending',
            lowercase: true,
        },

        amountPaid: {
            type: Number,
            required: [true, "Payment amount is required"],
            min: 0
        },

        currency: {
            type: String,
            required: [true, "Payment currency is required"],
            default: 'INR'
        },

        isCOD: {
            type: Boolean,
            default: false,
        },
    },

    {
        timestamps: true
    }
)

export const Payment = mongoose.model('Payment', paymentSchema);