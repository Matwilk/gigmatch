import mongoose from 'mongoose';

const bandSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      unique: true,
      required: true
    },
    image: {
      required: false,
      type: String
    },
    description: {
      required: false,
      type: String
    }
  },
  { timestamps: true }
);

export const Band = mongoose.model('band', bandSchema);
