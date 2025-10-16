import mongoose from "mongoose";

const BlogObject = {
  content: { type: String, required: true },
  description: { type: String, required: true },
  tag: { type: String, required: true },
};

const blogSchema = new mongoose.Schema(BlogObject, { timestamps: true });
const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
export default Blog;
