import { configureStore } from '@reduxjs/toolkit';

import messageReducer from '../features/messageFeatures/messageSlice.js';

const store = configureStore({
    reducer: {
        message: messageReducer
    },
    devTools: true
});

export default store;