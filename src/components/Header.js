import React from 'react';
import { Link } from 'gatsby';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

const NavLink = styled(Link)`
    color: #222;
    font-size: 1rem;
    margin-right: 0.25rem;
    text-decoration: none;
    line-height: 1;
    padding: 0.25rem;
    font-weight: ${props => props.fontWeight || 'normal'};

    &.current-page {
        border-bottom: 2px solid gray;
    }
`;

const Header = () => (
    <header
        css={css`
            display: flex;
            background: #eee;
            justify-content: space-between;
            border-bottom: 1px solid #ddd;
            padding: 0.5rem calc((100vw - 550px) / 2);
        `}
    >
        <NavLink to="/" fontWeight="bold">
            Neyosoft
        </NavLink>
        <nav
            css={css`
                margin-top: 0;
            `}
        >
            <NavLink to="/" activeClassName="current-page">
                Home
            </NavLink>
            <NavLink to="/about" activeClassName="current-page">
                About
            </NavLink>
        </nav>
    </header>
);

export default Header;
