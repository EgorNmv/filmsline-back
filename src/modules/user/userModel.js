import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    username: { type: String, required: true },
    password: { type: String, required: true },
    type: { type: Number, required: true, default: 2 },
    films: [{ film_name: String, film_id: String }],
  },
  { timestamps: {} },
);

export default mongoose.model('User', userSchema);
