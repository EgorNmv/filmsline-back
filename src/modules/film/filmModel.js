import mongoose from 'mongoose';

const filmSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    description: { type: String },
    img: String,
    producer: { producer_name: String, producer_id: String },
    start_rental: String,
    end_rental: String,
  },
  { timestamps: {} },
);

export default mongoose.model('Film', filmSchema);
