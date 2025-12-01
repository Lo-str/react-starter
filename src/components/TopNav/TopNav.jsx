import { Link } from "react-router-dom";
import style from './TopNav.module.scss'

function TopNav(){
  return (
    <>
      <nav>
          <ul>
              <li><Link to="/">Home</Link></li>
          </ul>
      </nav>
    </>
  )
};

export default TopNav
