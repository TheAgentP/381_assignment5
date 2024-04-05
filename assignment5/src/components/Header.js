import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
display: flex; justify-content:space-between;
`;

const StyledNav = styled.nav`
display: flex; justify-content:space-between; padding:20px;
`;

function Header(){
    return(
        <div>
            <StyledHeader>
                <img src="/images/logo.png" alt="Company Logo" height="100px"></img>
                <div>Company Name</div>
            </StyledHeader>

            <StyledNav>
                <a href='/'>Home</a>
                <a href='/Products'>Products</a>
                <a href='/Login'>Login</a>
            </StyledNav>
        </div>
    );
}

export default Header;