import {
  Logo,
  NavbarTwoColumns,
  NavMenu,
  NavMenuItem,
  Section,
} from 'astro-boilerplate-components';

const Navbar = () => (
  <Section>
    <NavbarTwoColumns>
      <a className="hidden sm:block" href="/">
        <Logo icon="" name="Get Brain Token" />
      </a>

      <NavMenu>
        <NavMenuItem href="https://github.com/brilliancenw">GitHub</NavMenuItem>
        <NavMenuItem href="https://twitter.com/the_brain_token">
          Twitter
        </NavMenuItem>
      </NavMenu>
    </NavbarTwoColumns>
  </Section>
);

export { Navbar };
