import React from 'react';
import styled from 'styled-components';

const SnackbarWrapper = styled.div<{ visible: boolean }>`
    visibility: ${props => (props.visible ? 'visible' : 'hidden')};
    min-width: 250px;
    margin-left: -125px;
    background-color: #333;
    color: #fff;
    text-align: center;
    border-radius: 2px;
    position: fixed;
    bottom: 30px;
    left: 50%;
    z-index: 1;
    padding: 16px;
    font-size: 17px;
`;

const Snackbar: React.FC<{ visible: boolean }> = ({ visible, children }) => {
    return (
        <SnackbarWrapper visible={visible}>
            {children}
        </SnackbarWrapper>
    );
};

export default Snackbar;
