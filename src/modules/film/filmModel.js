import mongoose from 'mongoose';

const filmSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    description: { type: String },
    img: String,
    producer: { producer_name: String },
    start_rental: Number,
    end_rental: Number,
  },
  { timestamps: {} },
);

export default mongoose.model('Film', filmSchema);
