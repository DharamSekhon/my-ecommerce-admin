// import mongoose, { Schema, models, model } from "mongoose";

// const CategorySchema = new Schema({
//     name: {type: String, required:true},
//     parent: {type: mongoose.Types.ObjectId},
// });

// export const Category = models?.Category || model('Category', CategorySchema);

import mongoose, {model, models, mongo, Schema} from "mongoose";

const CategorySchema = new Schema({
  name: {type:String,required:true},
  parent:{type:Schema.Types.ObjectId, ref:'Category'},
  properties: [{type:Object}]

  
});

export const Category = models?.Category || model('Category', CategorySchema);