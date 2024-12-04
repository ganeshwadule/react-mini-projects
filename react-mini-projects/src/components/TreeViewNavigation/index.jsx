import React , {useState} from "react";


const TreeViewNavigation = ({ menus }) => {
    const[openSubMenu,setOpenSubMenu] = useState(false);

  return (
    <ul className="main">
      {menus && menus.length > 0
        ? menus.map((menuItem, index) => (
            <li className="">
              {menuItem.label}
              <span>+</span>
              {menuItem.children && menuItem.children.length > 0 ? (
                <TreeViewNavigation menus={menuItem.children} />
              ) : null
              }
            </li>
            
          ))
        : null}
    </ul>
  );
};

export default TreeViewNavigation;
