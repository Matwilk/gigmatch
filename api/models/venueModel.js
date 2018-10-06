import mongoose from 'mongoose';

const venueSchema = new mongoose.Schema(
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
    address: {
      required: false,
      type: String
    }
  },
  { timestamps: true }
);

export const Venue = mongoose.model('venue', venueSchema);
