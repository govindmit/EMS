import React from "react";
import styled from "styled-components";
import { sideBarData } from "../../assets/js/sideBarItems";
import SubMenu from "./SubMenu";

const SidebarWrap = styled.div`
  width: 20%;
`;

const MenuBar = () => {
  return (
    <>
      <SidebarWrap>
        {sideBarData.map((item, index) => {
          return <SubMenu item={item} key={index} />;
        })}
      </SidebarWrap>
    </>
  );
};

export default MenuBar;
