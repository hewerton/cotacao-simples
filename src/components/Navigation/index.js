import React from "react";
import { Link } from "react-router-dom";

import * as ROUTES from "../../constants/routes";
import logo from "../../assets/cotacao_simples_logo_400x140.png";

class Navigation extends React.Component {
  constructor() {
    super();
    this.state = {
      isActive: false
    };
  }

  burgerOnClick = event => {
    event.preventDefault();
    this.setState({
      isActive: !this.state.isActive
    });
  };

  render() {
    let burgerClasses = "navbar-burger";
    let menuClasses = "navbar-menu";
    if (this.state.isActive) {
      burgerClasses += " is-active";
      menuClasses += " is-active";
    }
    // eslint-disable-next-line
    return (
      <nav
        className="navbar is-light"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand">
          <a href="/" className="navbar-item">
            <img src={logo} alt="Logo" width="112" height="28" />
          </a>
          <a
            href="/"
            role="button"
            className={burgerClasses}
            aria-label="menu"
            aria-expanded="false"
            data-target="navigationMenu"
            onClick={this.burgerOnClick}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>
        <div id="navigationMenu" className={menuClasses}>
          <div className="navbar-start">
            <Link to={ROUTES.LANDING} className="navbar-item">
              Home
            </Link>
            <Link to={ROUTES.HOME} className="navbar-item">
              Página Inicial
            </Link>
            <Link to={ROUTES.ACCOUNT} className="navbar-item">
              Minha Conta
            </Link>
            <Link to={ROUTES.ADMIN} className="navbar-item">
              Admin
            </Link>
          </div>
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <Link to={ROUTES.SIGN_UP} className="button is-primary">
                  Criar Conta
                </Link>
                <Link to={ROUTES.SIGN_IN} className="button is-light">
                  Entrar
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navigation;
