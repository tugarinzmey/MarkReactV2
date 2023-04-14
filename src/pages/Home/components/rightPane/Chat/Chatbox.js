import styled from "styled-components"
import Message from "./Message"
import { useSelector } from 'react-redux'
import { useDispatch } from "react-redux"
import { getMessages } from '../../../../../store/actions/chatActions';
import { useEffect } from "react";
import formatTime from "../../../../../utils/dateFormatter";
import { supabase } from "../../../../../services/supabaseClient";
import { ADD_MESSAGE } from "../../../../../store/slices/chatSlice";

const StyledChatbox = styled.div`
inset: 0px;
overflow-y: scroll;
height: 100%;
display: flex;
align-items: flex-end;
flex-direction: column;
justify-content: flex-end;
padding: 20px;
&::-webkit-scrollbar {
    display: none;
}
`

function Chatbox() {
    const dispatch = useDispatch();
    const { messages } = useSelector((state) => state.rootReducer.chatSlice);
    const userId = useSelector((state) => state.rootReducer.authSlice.user.id);
    useEffect(() => {
        dispatch(getMessages());
        const subscription = supabase.channel('messages')
            .on("postgres_changes",
                {
                    event: "*",
                    schema: "public",
                    table: "messages",
                    filter: "sender=eq." + userId
                },
                (updates) => {
                    dispatch(ADD_MESSAGE(updates.new))
                })
            .subscribe();

        return () => {
            supabase.removeChannel(subscription);
        }
    }, [dispatch, userId])


    return (
        <StyledChatbox>
            {messages.map((message) => {
                const { id, text, time } = message;
                return (
                    <Message key={id} text={text} time={formatTime(time)} />
                )
            })}
        </StyledChatbox>
    )
}

export default Chatbox