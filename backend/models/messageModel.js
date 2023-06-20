import mongoose from "mongoose";

const messageSchema = mongoose.Schema({
    message: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
});

const Message = mongoose.model('Message', messageSchema);
export default Message;