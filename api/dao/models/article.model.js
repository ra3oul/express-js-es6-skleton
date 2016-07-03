import mongoose from "mongoose";
import mongoosePagination from "mongoose-paginate";
let schema = mongoose.Schema;
let articleSchema = new schema({
    name: {type: String}
}, {timestamps: true});

articleSchema.plugin(mongoosePagination);
module.exports = mongoose.model('article', articleSchema);