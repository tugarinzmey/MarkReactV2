import { createSlice } from '@reduxjs/toolkit'
import { getMessages, sendMessage } from '../actions/chatActions'

const initialState = {
  status: null,
  messages: [],
  lastMessageStatus: null
}

export const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    ADD_MESSAGE: (state, action) => {
      state.messages.push(action.payload);
  },
  },
  extraReducers: (messanger) => {
    messanger.addCase(getMessages.pending, (state) => {
      state.status = "pending";
    });

    messanger.addCase(getMessages.rejected, (state) => {
      state.status = "failed";
    });

    messanger.addCase(getMessages.fulfilled, (state, action) => {
      return {
        ...state,
        status: action.payload.status,
        messages: action.payload.messages,
      }
    });

    messanger.addCase(sendMessage.rejected, (state) => {
      state.lastMessageStatus = state.error;
    });
    messanger.addCase(sendMessage.pending, (state) => {
      state.lastMessageStatus = "pending";
    });
    messanger.addCase(sendMessage.fulfilled, (state) => {
      state.lastMessageStatus = state.status;
    });
  }
})

export const { ADD_MESSAGE } = chatSlice.actions

export default chatSlice.reducer