import React from "react";
import { Link } from "react-router-dom";
import { BsFillHouseFill } from "react-icons/bs";
import { IoMdArrowDropdown } from "react-icons/io";
import { useSelector } from 'react-redux'
import Menu from "../../Assets/menu.svg"
import "./navbar.css";
import { FaBars } from "react-icons/fa";
import InviteModal from "../../Components/Modals/InviteModal"
export const Navbar = () => {

  const selector = useSelector((state) => {
    return state.userReducers.validate
  })

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <img src={Menu} alt="" />
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav nav_ul">
            {!selector ?
              <>
                <li className="nav-item">
                  <Link className="nav-link active" to="/news" aria-current="page">
                    <BsFillHouseFill className="nav_icon" />
                News
              </Link>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"

                  >
                    CCV/Fullz
                <IoMdArrowDropdown className="nav_more_icon" />
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <Link className="dropdown-item" to='/ccs-buy'>Buy CCV/Fullz</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/cart/:id">Cart CCV/Fullz</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/order-ccs">Orders CCV/Fullz</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Dumps
                <IoMdArrowDropdown className="nav_more_icon" />
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <Link className="dropdown-item" to="/buy-dumps">
                        Buy Dumps(USA/WorldWide)
                  </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/cart/:id">Cart Dumps</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/order-dumps">Orders Dumps</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link-sock dropdown-toggle"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Socks 5
                <IoMdArrowDropdown className="nav_more_icon" />
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <Link className="dropdown-item" to="/sock-buy">Buy Socks 5</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/order-accounts">Orders Socks 5</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    SSN/DOB
                <IoMdArrowDropdown className="nav_more_icon" />
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <Link className="dropdown-item" to="/buy-ssn">Buy SSN/DOB</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/order-ssn">Orders SSN/DOB</Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Accounts
                <IoMdArrowDropdown className="nav_more_icon" />
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <Link className="dropdown-item" to="/buy-accounts">Buy Accounts</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/order-accounts">Orders Accounts</Link>
                    </li>
                  </ul>
                </li>
              </>
              :
              <>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Billing
                <IoMdArrowDropdown className="nav_more_icon" />
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <Link className="dropdown-item" to="/validation">Topup</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/billing-history">History</Link>
                    </li>
                  </ul>
                </li>
              </>
            }
            {!selector ?
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="binlookup">Binlookup</Link>
                </li>

                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Support
                <IoMdArrowDropdown className="nav_more_icon" />
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <Link className="dropdown-item">My invitation code</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/support/my-ticket" >My tickets</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="/support/create-ticket">Create tickets</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" to="support">Help center</Link>
                    </li>
                  </ul>
                </li>
              </>
              :
              <>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link dropdown-toggle"
                    id="navbarDropdownMenuLink"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Profile
                <IoMdArrowDropdown className="nav_more_icon" />
                  </Link>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li>
                      <Link className="dropdown-item" to="profile">Profile</Link>
                    </li>
                    <li>
                      <Link className="dropdown-item">Logout</Link>
                    </li>
                  </ul>
                </li>
              </>
            }
          </ul>
        </div>
      </div>
    </nav>
  );
};
