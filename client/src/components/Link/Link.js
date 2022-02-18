import React from "react";
import classNames from "classnames";
import './Link.css';

const Link = ({children, path, anchor, linkStyle}) => {
    return (
       <a className={classNames('link', linkStyle)}
          data-menuanchor={path}
          href={anchor}
       >
           {children}
       </a>
    )
}

export default React.memo(Link)