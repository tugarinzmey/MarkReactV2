import { supabase } from "../../services/supabaseClient";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getMessages = createAsyncThunk(
    'chat/GET_MESSAGES',
    async (_, { getState }) => {
        const sender = getState().rootReducer.authSlice.user.id;
        const recipient = getState().rootReducer.authSlice.user.id;
        try {
            const response = await supabase.from('messages').select("*")
            .eq('sender', sender)
            .eq('recipient', recipient)
            return {
                status: response.status,
                messages: response.data
            }
        }
        catch (error) {
            return {
                status: error
            }
        }

    }
)

export const sendMessage = createAsyncThunk(
    'chat/SEND_MESSAGE',
    async (text, { getState }) => {
        const sender = getState().rootReducer.authSlice.user.id;
        const recipient = getState().rootReducer.authSlice.user.id;

        const message = {
            text,
            sender,
            recipient,
        }

        try {
            const response = await supabase.from('messages').insert(message);
            const { status } = response;
            return {
                status
            }
        }
        catch (error) {
            return {
                error,
                message
            }
        }
    }
)
