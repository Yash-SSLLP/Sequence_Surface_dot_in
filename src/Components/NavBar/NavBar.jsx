import { Link } from 'react-router-dom';
import './NavBar.css'
import { product } from '../../assets/assets.js'
import { ImWhatsapp } from "react-icons/im";
import { IoCall } from "react-icons/io5";
import "bootstrap-icons/font/bootstrap-icons.css";



function NavBar() {

    const groupedCategories = {};

    product.forEach((item) => {
        const parentId = item.parentCategory.id;

        if (!groupedCategories[parentId]) {
            groupedCategories[parentId] = {
                name: item.parentCategory.name,
                children: []
            };
        }

        // avoid duplicate child categories
        const childExists = groupedCategories[parentId].children.find(
            (c) => c.id === item.childCategory.id
        );

        if (!childExists) {
            groupedCategories[parentId].children.push(item.childCategory);
        }
    });
    return (
        <>
            <ul>
            </ul>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    {/* Logo */}
                    <Link to={'/home'}>
                        <img
                            className='img-logo'
                            src='https://sequencesurface.com/images/logo.png'
                            alt="logo"
                        />
                    </Link>
                    <button
                        className="navbar-toggler custom-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#mobileMenu"
                    >
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                        <span className="hamburger-line"></span>
                    </button>
                    {/* Desktop Menu */}
                    <div className="collapse navbar-collapse desktop-menu">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-item-test1">

                            <li className="nav-item">
                                <Link className="nav-link" style={{ color: "white" }} to="/home">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{ color: "white" }} to="/about_us">
                                    About Us
                                </Link>
                            </li><li className="nav-item">
                                <Link className="nav-link" style={{ color: "white" }} to="/contact_us">
                                    Contact Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" style={{ color: "white" }} to="/blog">
                                    Blog
                                </Link>
                            </li>
                            <li className="nav-item">
                                <span className="nav-link disabled" style={{ color: "white" }}>
                                    560079
                                </span>
                            </li>
                            <li className="nav-item">
                                <Link className="visit-store-btn-navbar nav-link navbar-btn" style={{ color: "white" }} to="/store">
                                    Visit Store
                                </Link>
                            </li>

                        </ul>

                        {/* Search Bar */}
                        <form className="d-flex">
                            <input className="navbar-search-input me-2" type="search" placeholder="Search" />
                            <button className="navbar-btn btn btn-outline-success" type="submit">
                                Search
                            </button>
                        </form>
                        <a href="/cart"><button className="login-desktop navbar-btn btn btn-outline-success">Cart</button></a>
                        <a href="/login"><button className="login-desktop navbar-btn btn btn-outline-success">Login</button></a>

                    </div>

                </div>
            </nav>

            {/* MOBILE OFFCANVAS MENU */}
            <div
                className="offcanvas offcanvas-start"
                tabIndex="-1"
                id="mobileMenu"
            >
                <Link to={'/'}>
                    <img src='https://sequencesurface.com/images/logo.png' className='img-offcanvas-logo' alt='Sequence Surface Logo' ></img>
                </Link>
                <div className="offcanvas-header">
                    {/* <h5>Menu</h5> */}
                    <button
                        type="button"
                        className="btn-close close-btn"
                        data-bs-dismiss="offcanvas"
                    ></button>
                </div>
                <div className="p-3">
                    <ul className="navbar-nav">
                        <div className='colasped-side-bar'>
                            <li className="nav-item">
                                <Link className="nav-link" to="/home">
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about_us">
                                    About Us
                                </Link>
                            </li><li className="nav-item">
                                <Link className="nav-link" to="/contact_us">
                                    Contact Us
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blog">
                                    Blog
                                </Link>
                            </li>
                            <div className='login-mobile'>
                                <div className='row'>
                                    <div className='col-6'><li className="nav-item">
                                        <Link className="nav-link" to="/login">
                                            Login
                                        </Link>
                                    </li></div>
                                    <div className='col-6'><li className="nav-item">
                                        <Link className="nav-link" to="/signup">
                                            Signup
                                        </Link>
                                    </li></div>
                                </div>
                            </div>
                            <li className="nav-item mt-3">
                                <Link className="visit-store-btn-navbar nav-link navbar-btn visit-btn" to="/cart">
                                    My Cart
                                </Link>
                                <Link className="visit-store-btn-navbar nav-link navbar-btn visit-btn" to="/profile">
                                    My Profile
                                </Link>
                                <Link className="visit-store-btn-navbar nav-link navbar-btn visit-btn" to="/store">
                                    Visit Store
                                </Link>
                            </li>
                        </div>
                    </ul>
                    {/* Search */}
                    <form className="d-flex mt-3">
                        <input className="form-control me-2" type="search" placeholder="Search" />
                        <button className="btn btn-outline-success">
                            Search
                        </button>
                    </form>
                </div>
                {/* Second Row Mobile View */}
                <div className="second-row-mobile">
                    <div className='container'>
                        <div className="row">
                            {
                                Object.entries(groupedCategories).map(([key, category], index) => (
                                    <div key={index} className="col-6 ">
                                        <li className="nav-item dropdown" style={{ listStyleType: "none" }}>

                                            <div className='off-canvas-category'>
                                                <Link
                                                    to={`/${category.name}`}
                                                    className="nav-link dropdown-toggle wrap-text box-size"
                                                    style={{ color: "black" }}
                                                    role="button"

                                                >

                                                    {category.name}
                                                </Link>
                                            </div>

                                            {/* <ul className="dropdown-menu two-column-dropdown">
                                                {
                                                    category.children.map((child, i) => (
                                                        <li key={i}>
                                                            <a className="dropdown-item" href="#">
                                                                {child.name}
                                                            </a>
                                                        </li>
                                                    ))
                                                }
                                            </ul> */}
                                        </li>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
                <div className='row p-4'>
                    <div className='col-6 container'>
                        <button className="btn-contact-details-offcanvas">
                            <div className='whatsapp-logo-img'>
                                <IoCall />
                            </div>

                            <span> Call Us</span>
                        </button>

                    </div>
                    <div className='col-6 container'>
                        <button className="btn-contact-details-offcanvas">
                            <div className='whatsapp-logo-img'>
                                <ImWhatsapp />
                            </div>
                            <span> WhatsApp</span>
                        </button>

                    </div>
                </div>
            </div>
            {/* SECOND ROW DESKTOP VERSION */}
            <div className='dropdowns-link'>
                {
                    Object.entries(groupedCategories).map(([key, category], index) => (
                        <li key={index} className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                style={{ color: "black" }}
                                href="#"
                                role="button"
                                data-bs-toggle="dropdown"
                            >
                                {category.name} <img className='dropdown-img-logo' src='https://img.icons8.com/?size=100&id=5jRysPx2JtDa&format=png&color=000000'></img>
                            </a>


                            <ul className="dropdown-menu">
                                {
                                    category.children.map((child, i) => (
                                        <li key={i} >
                                            <a className="dropdown-item" href="#">
                                                {child.name}
                                            </a>
                                        </li>
                                    ))
                                }
                            </ul>
                        </li>
                    ))
                }
            </div>
        </>
    )
}
export default NavBar   