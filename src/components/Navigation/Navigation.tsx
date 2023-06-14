import { Button, Navbar, NavbarGroup, NavbarHeading } from "@blueprintjs/core";
import { useDarkThemeContext } from '../../contexts';

export const Navigation = () => {
    const { useDarkTheme, setUseDarkTheme } = useDarkThemeContext();

    return (
        <Navbar fixedToTop>
            <NavbarGroup>
                <NavbarHeading>🧙‍♂️ Stats Wizard</NavbarHeading>
            </NavbarGroup>
            <NavbarGroup align='right'>
                <Button className="bp4-minimal" icon={useDarkTheme ? 'flash' : 'moon'} onClick={() => setUseDarkTheme(!useDarkTheme)} />
            </NavbarGroup>
        </Navbar>
    );
}