import mongoose from 'mongoose';

const adminSchema = mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        username: {type: String, required: true},
        password: {type: String, required: true},
        type: {type: Number, required: true, default: 0},
    },
);

export default mongoose.model('Admin', adminSchema);
