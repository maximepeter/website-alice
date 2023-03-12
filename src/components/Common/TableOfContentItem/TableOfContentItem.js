import "./TableOfContentItem.css";
import { HashLink } from "react-router-hash-link";

function TableOfContentItem(props) {
  return (
    <li classname="table-of-content-item" key={props.title + props.idx}>
      <HashLink smooth to={"#" + encodeURI(props.title)}>
        {props.title}
      </HashLink>
    </li>
  );
}

export default TableOfContentItem;
