import { Schema, model, Types } from "mongoose";

const urlSchema = new Schema({

  userId: { type: Types.ObjectId, ref: 'User', required: true },

  originalUrl: { type: String, required: true },

  shortUrl: { type: String, required: true, unique: true }

});

export const Url = model('Url', urlSchema);