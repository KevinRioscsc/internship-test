import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'

export const NavLink = styled(Link)`
    padding: 15px 15px;
    transition: all .2s ease-in-out;
    &.active{
        color: #2697FE;
        border-bottom: 2px solid #2697FE;
    }

`