import React from "react";
import * as Components from "./Components";
import { FaSearchengin } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaHeartbeat } from "react-icons/fa";
import { FaReadme } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import logoHenry from "../../assets/logoHenry.png";
import logoRM from "../../assets/logoRM.png";

export default function Nav({ onSearch, logout }) {
  const [character, setCharacter] = React.useState("");

  function handleSearch(event) {
    setCharacter(event.target.value);
  }

  function onSearchSend() {
    onSearch(character);
    setCharacter("");
  }

  return (
    <Components.Sidebar>
      <Components.Sidebarhead>
        <Components.Logo>
          <Components.Spnlogo>
            <Components.ImglogoHR src={logoHenry} />
            <Components.ImglogoMR src={logoRM} />
          </Components.Spnlogo>
        </Components.Logo>
      </Components.Sidebarhead>

      <Components.Menubar>
        <Components.Menu>
          <Components.Searchbox>
            <Components.Iconsearch>
              <FaSearchengin onClick={onSearchSend} />
            </Components.Iconsearch>
            <Components.Input
              type="search"
              name="search"
              onChange={(e) => handleSearch(e)}
              value={character}
              placeholder="Type the ID..."
            />
          </Components.Searchbox>

          <Components.Underlist>
            <Components.LinksMenu>
              <Components.Iconmenu>
                <FaHome />
              </Components.Iconmenu>
              <Link to="/home" style={{ textDecoration: "none" }}>
                <Components.Textmenu>Home</Components.Textmenu>
              </Link>
            </Components.LinksMenu>

            <Components.LinksMenu>
              <Components.Iconmenu>
                <FaHeartbeat />
              </Components.Iconmenu>
              <Link to="/favorites" style={{ textDecoration: "none" }}>
                <Components.Textmenu>Favorites</Components.Textmenu>
              </Link>
            </Components.LinksMenu>

            <Components.LinksMenu>
              <Components.Iconmenu>
                <FaReadme />
              </Components.Iconmenu>
              <Link to="/about" style={{ textDecoration: "none" }}>
                <Components.Textmenu>About</Components.Textmenu>
              </Link>
            </Components.LinksMenu>

            <Components.LinksMenu>
              <Components.Iconmenu>
                <FaSignOutAlt />
              </Components.Iconmenu>
              <Link to="/" style={{ textDecoration: "none" }} onClick={logout}>
                <Components.Textmenu>Logout</Components.Textmenu>
              </Link>
            </Components.LinksMenu>
          </Components.Underlist>
        </Components.Menu>
      </Components.Menubar>
    </Components.Sidebar>
  );
}
