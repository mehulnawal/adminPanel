import mongoose from "mongoose";

const subCategorySchema = new mongoose.Schema(
    {
        subCategoryName: {
            type: String,
            required: [true, "Sub Category name is required"],
            unique: [true, "Sub Category name should be unique"],
            trim: true,
            lowercase: true,
        },

        subSlug: {
            type: String,
            slug: "categoryName",
            unique: [true, "Sub Category already exists"],
            lowercase: true,
            trim: true
        },

        subStatus: {
            type: String,
            enum: ["active", "inactive"],
            default: "active",
            lowercase: true,
        },

        categoryId: {
            type: mongoose.Types.ObjectId,
            ref: "Category"
        },
    },
    { timestamps: true }
)

subCategorySchema.pre('save', async function () {
    if (!this.isModified('subCategoryName')) return;
    this.subSlug = this.subCategoryName.toLowerCase().trim().split(" ").join("-");
})

export const SubCategory = mongoose.model("SubCategory", subCategorySchema);