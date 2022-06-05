//map of list components
import React from 'react';
import { BoardHeaderBottomContainer, BoardHeaderContainer, BoardHeaderQuad1, BoardHeaderQuad2, 
    BoardHeaderQuad3, BoardHeaderQuad4, BoardHeaderTopContainer } from './common';

const BoardHeader = () => {
    return(
        <BoardHeaderContainer>
            <BoardHeaderTopContainer>
                <BoardHeaderQuad1>
                    Project Title
                </BoardHeaderQuad1>
                <BoardHeaderQuad2>
                    Information and Extras
                </BoardHeaderQuad2>
            </BoardHeaderTopContainer>
            <BoardHeaderBottomContainer>
                <BoardHeaderQuad3>
                    Change Board View
                </BoardHeaderQuad3>
                <BoardHeaderQuad4>
                    Share Button
                </BoardHeaderQuad4>

            </BoardHeaderBottomContainer>
        </BoardHeaderContainer>
    );
    
}

export default BoardHeader;