import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import messageService from './messageService.js';

const initialState = {
    fortune:'',
    isError: false,
    isSuccess: false,
    isLoading: false,
    message:''
};

export const getMessage = createAsyncThunk('message/get', async(thunkAPI) => {
    try {
        return await  messageService.getMessage();
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
    
});

export const messageSlice = createSlice({
    name: "message",
    initialState,
    reducers:{
        reset: (state) => initialState
    },
    extraReducers: (builder) => {
        builder.addCase(getMessage.pending, (state, action) => {
            state.isLoading = true
            state.message = 'Your fortune message is on the way..!'
        })
        builder.addCase(getMessage.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.fortune = action.payload
            state.message = ''
        })
        builder.addCase(getMessage.rejected, (state, action) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
        })
    }
});

export const {reset} = messageSlice.actions;
export default messageSlice.reducer;