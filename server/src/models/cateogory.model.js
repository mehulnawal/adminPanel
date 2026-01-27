import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
    {
        categoryName: {
            type: String,
            required: [true, "Category name is required"],
            unique: [true, "Category name should be unique"],
            trim: true,
            lowercase: true,
        },

        slug: {
            type: String,
            slug: "categoryName",
            unique: [true, "Category already exists"],
            lowercase: true,
            trim: true
        },

        status: {
            type: String,
            enum: ["active", "inactive"],
            default: "active",
            lowercase: true,
        },
    },

    { timestamps: true },
)

categorySchema.pre('save', async function () {
    if (!this.isModified('categoryName')) return;
    this.slug = this.categoryName.toLowerCase().trim().split(" ").join("-");
})

export const Category = mongoose.model('Category', categorySchema);