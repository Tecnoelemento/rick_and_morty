import styled from "styled-components";

export const Sidebar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  padding: 10px 14px;
  background: #bbd2c5;
  background: -webkit-linear-gradient(to left, #536976, #bbd2c5);
  background: linear-gradient(to left, #536976, #bbd2c5);
  background-position: 0 0;
  transition: all 0.3s ease;
  z-index: 100;
`;

export const Sidebarhead = styled.header`
  position: relative;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;

export const Spnlogo = styled.span`
  min-width: 10rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImglogoHR = styled.img`
  width: 20%;
  border-radius: 6px;
`;

export const ImglogoMR = styled.img`
  width: 80%;
`;

export const Menubar = styled.div`
  height: calc(100% - 55px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Menu = styled.div`
  margin-top: 40px;
`;

export const Searchbox = styled.li`
  height: 50px;
  list-style: none;
  display: flex;
  align-items: center;
  margin-top: 10px;
  border-radius: 6px;
  background-color: rgba(30, 126, 89, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
`;

export const Iconsearch = styled.i`
  min-width: 60px;
  border-radius: 6px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #fff;
  transition: all 0.3s ease;
`;

export const Input = styled.input`
  height: 100%;
  width: 100%;
  outline: none;
  border: none;
  background-color: rgba(255, 255, 255, 0.5);
  color: #000;
  border-radius: 6px;
  font-size: 17px;
  font-weight: 600;
  text-align: center;
  transition: all 0.3s ease;
`;

export const Underlist = styled.ul`
  width: 100%;
`;

export const LinksMenu = styled.li`
  background-color: transparent;
  display: flex;
  align-items: center;
  height: 1.5rem;
  width: 100%;
  border-radius: 20px;
  text-decoration: none;
  margin-top: 2.5rem;
  transition: all 0.3s ease;
  &:hover {
    color: #ccc;
  }
`;

export const Iconmenu = styled.i`
  min-width: 1.5rem;
  border-radius: 6px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2rem;
  color: #06383f;
  margin-right: 1.2rem;
  transition: all 0.3s ease;
  &:hover {
    color: #ccc;
  }
`;

export const Textmenu = styled.span`
  color: #06383f;
  transition: all 0.3s ease;
  font-size: 17px;
  font-weight: 500;
  white-space: nowrap;
  list-style: "none"
  opacity: 1;
  &:hover {
    color: #ccc;
  }
`;
