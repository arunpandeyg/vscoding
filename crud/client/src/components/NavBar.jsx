import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { styled } from '@mui/material/styles';
import { NavLink } from 'react-router-dom';

const Header = styled(AppBar)`
background:#111111;
`
const Tabs = styled(NavLink)`
font-size: 20px;
margin-right: 20px;
color: inherit;
text-decoration: none;
`

const NavBar = () => {
    return (
        <Header position='static'>
            <Toolbar>
                <Tabs to='/'>Hello from Arun Pandey</Tabs>
                <Tabs to='/all'>AllUsers</Tabs>
                <Tabs to='/add'>AddUser</Tabs>
            </Toolbar>
        </Header>
    )
}
export default NavBar;