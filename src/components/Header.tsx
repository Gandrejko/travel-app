import { Link, Routes, Route } from "react-router-dom";
import { Nav } from "./Nav";

interface IHeaderProps {
  isLogin: boolean;
}

export const Header: React.FC<IHeaderProps> = ({ isLogin }) => {
  return (
    <header className="header">
      <div className="header__inner">
        <Link data-test-id="header-logo" to="/" className="header__logo">
          Travel App
        </Link>
        {isLogin && <Nav />}
      </div>
    </header>
  );
};