import { createAsyncThunk } from "@reduxjs/toolkit";
import { supabase } from '../../services/supabaseClient';
import jwt_decode from "jwt-decode";

export const signUp = createAsyncThunk(
    'user/REGISTER',
    async (values) => {
        const { email, password } = values;
        const { data } = await supabase.auth.signUp({
            email,
            password,
        })
        const success = data.user ? true : false;
        return {
            data,
            success,
        }
    }
)

export const signIn = createAsyncThunk(
    'user/LOGIN',
    async (values) => {
        const { email, password } = values;
        try {
            const response = await supabase.auth.signInWithPassword({
                email,
                password,
            });
            const { access_token } = response.data.session;
            const decodedToken = jwt_decode(access_token);
            const currentTime = Date.now() / 1000;
            const tokenIsValid = decodedToken.exp > currentTime;
            return {
                tokenIsValid,
                decodedToken,
                ...(tokenIsValid ? response.data : null)
            }
        }
        catch (error){
            return {
                error,
                tokenIsValid: false
            }
        }
    }
)
