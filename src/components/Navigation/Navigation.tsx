import { ReactElement } from 'react';
import { Button, Navbar, NavbarGroup, NavbarHeading } from "@blueprintjs/core";
import { useDarkThemeContext } from '../../contexts';

interface INavigationProps {
    tabs?: ReactElement
}

export const Navigation = ({ tabs }: INavigationProps) => {
    const { useDarkTheme, setUseDarkTheme } = useDarkThemeContext();

    return (
        <Navbar fixedToTop>
            <NavbarGroup>
                <NavbarHeading>🧙‍♂️ Stats Wizard</NavbarHeading>
            </NavbarGroup>
            { tabs && (
                <NavbarGroup>
                    { tabs }
                </NavbarGroup>
            )}
            <NavbarGroup align='right'>
                <Button className='bp4-minimal' icon={useDarkTheme ? 'flash' : 'moon'} onClick={() => setUseDarkTheme(!useDarkTheme)} />
            </NavbarGroup>
        </Navbar>
    );
}