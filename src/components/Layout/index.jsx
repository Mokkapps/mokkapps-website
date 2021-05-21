import React, { useContext, useState } from 'react';
import ScrollUpButton from 'react-scroll-up-button';
import PropTypes from 'prop-types';
import { IntlProvider } from 'react-intl';

import Menu from '../Menu/DesktopMenu/DesktopMenu';
import messages from '../../lang/messages';
import { LanguageContext } from '../../context/languageContext';
import { ThemeContext } from '../../context/themeContextProvider';
import BurgerMenu from '../Menu/MobileMenu/MobileMenu';
import BurgerMenuButton from '../Menu/MobileMenu/BurgerMenuButton';
import HeaderLogo from '../HeaderLogo';

const Layout = ({ children }) => {
  const [open, setOpen] = useState(false);
  const { theme } = useContext(ThemeContext);
  const { lang } = useContext(LanguageContext);
  const devMode = process.env.NODE_ENV !== `production`;
  return (
    <IntlProvider
      locale={lang}
      messages={lang === 'en' ? messages.english : messages.german}
    >
      <section
        className={`${theme === 'light' ? 'theme-light' : 'theme-dark'} ${
          devMode ? 'debug-screens' : ''
        } bg-background text-main-text relative overflow-hidden lg:overflow-visible lg:overflow-clip`}
      >
        <header className="bg-background lg:hidden flex justify-center sticky">
          <HeaderLogo />
        </header>
        <BurgerMenuButton className="lg:hidden" open={open} setOpen={setOpen} />
        <BurgerMenu className="lg:hidden" open={open} setOpen={setOpen} />
        <Menu className="hidden lg:flex" />
        <div className="md:mt-10 md:p-4 ">
          {children}
        </div>
        <ScrollUpButton />
      </section>
    </IntlProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
