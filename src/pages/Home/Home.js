import React from "react";
import { Sidebar } from "./components/sidebar";
import { RightPane } from "./components/rightPane";
import styled from "styled-components";

const RootContainer = styled.div`
display: flex;
height: 100vh;
`
export function Home() {
    return (
        <RootContainer>
            <Sidebar />
            <RightPane />
        </RootContainer>
    );
}