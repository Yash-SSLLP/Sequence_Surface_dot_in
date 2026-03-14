import { Link } from 'react-router-dom';
import '../css/NavBar.css';
import { product } from '../assets/assets.js'
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
                    {/* Hamburger Button (Mobile Only) */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="offcanvas"
                        data-bs-target="#mobileMenu"
                        style={{ background: "#ebc76c" }}
                    >
                        <span className="navbar-toggler-icon"></span>
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
                                <Link className="nav-link" style={{ color: "white" }} to="/store">
                                    Visit Store
                                </Link>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" style={{ color: "white" }} href="#" role="button" data-bs-toggle="dropdown">
                                    Tools
                                </a>

                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else</a></li>
                                </ul>
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
                    <h5>Menu</h5>
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="offcanvas"
                    ></button>
                </div>

                <div className="offcanvas-body">

                    <ul className="navbar-nav">

                        {/* <li className="nav-item">
                            <Link className="nav-link" to="/home">
                                Home
                            </Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/store">
                                Visit Store
                            </Link>
                        </li>

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                Tools
                            </a>

                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><a className="dropdown-item" href="#">Something else</a></li>
                            </ul>
                        </li> */}
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

                            <li className="nav-item">
                                <Link className="nav-link" to="/store">
                                    Visit Store
                                </Link>
                            </li>

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">
                                    Tools
                                </a>

                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else</a></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <span className="nav-link disabled">
                                    560079
                                </span>
                            </li>
                            <li className="nav-item">
                                <Link className="visit-store-btn-navbar nav-link navbar-btn" to="/store">
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
                <div className='second-row-mobile'>
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
                                    {category.name}
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
            </div>
            {/* SECOND ROW  */}
            <div className='dropdowns-link'>
                {/* {
                    product.map((data, key) => (
                        <li className="d-flex nav-item dropdown">
                            {

                                <a className="nav-link dropdown-toggle" style={{ color: "black" }} href="" role="button" data-bs-toggle="dropdown">
                                    {data.name}
                                </a>
                            }
                            <ul className="dropdown-menu">
                                {
                                    data.subcategories.map((data, key) => (
                                        <a className="nav-link dropdown" style={{ color: "black" }} href="" role="button" data-bs-toggle="dropdown">
                                            {data.name}
                                        </a>
                                    ))
                                }
                            </ul>
                        </li>
                    ))
                } */}

                {/* <li className="d-flex nav-item dropdown">
                    {
                        category.map((data, key) => (
                            
                            <a className="nav-link dropdown-toggle" style={{ color: "black" }} href="" role="button" data-bs-toggle="dropdown">
                                {data.main}
                            </a>
                        ))
                    }
                    <ul className="dropdown-menu">
                        {
                        data.subcategories.map((data, key) => (
                            <a className="nav-link dropdown-toggle" style={{ color: "black" }} href="" role="button" data-bs-toggle="dropdown">
                                {data.name}
                            </a>
                        ))
                    }
                    </ul>
                </li> */}


                {/* <li><a className="dropdown-item" href="#">Wood Flooring</a></li>
                        <li><a className="dropdown-item" href="#">Laminate Flooring</a></li>
                        <li><a className="dropdown-item" href="#">Vinyl Flooring</a></li> */}
                {/* 
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" style={{ color: "white" }} href="#" role="button" data-bs-toggle="dropdown">
                        Tools
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Something else</a></li>
                    </ul>
                </li> */}
                {/* <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" style={{ color: "black" }} href="#" role="button" data-bs-toggle="dropdown">
                        Laminates
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Wood Flooring</a></li>
                        <li><a className="dropdown-item" href="#">Laminate Flooring</a></li>
                        <li><a className="dropdown-item" href="#">Vinyl Flooring</a></li>
                    </ul>
                </li>

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" style={{ color: "black" }} href="#" role="button" data-bs-toggle="dropdown">
                        Liners
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Wood Flooring</a></li>
                        <li><a className="dropdown-item" href="#">Laminate Flooring</a></li>
                        <li><a className="dropdown-item" href="#">Vinyl Flooring</a></li>
                    </ul>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" style={{ color: "black" }} href="#" role="button" data-bs-toggle="dropdown">
                        Weaved Cane
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Wood Flooring</a></li>
                        <li><a className="dropdown-item" href="#">Laminate Flooring</a></li>
                        <li><a className="dropdown-item" href="#">Vinyl Flooring</a></li>
                    </ul>
                </li>

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" style={{ color: "black" }} href="#" role="button" data-bs-toggle="dropdown">
                        Louvers
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Wood Flooring</a></li>
                        <li><a className="dropdown-item" href="#">Laminate Flooring</a></li>
                        <li><a className="dropdown-item" href="#">Vinyl Flooring</a></li>
                    </ul>
                </li>

                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" style={{ color: "black" }} href="#" role="button" data-bs-toggle="dropdown">
                        Weaved Cane
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Wood Flooring</a></li>
                        <li><a className="dropdown-item" href="#">Laminate Flooring</a></li>
                        <li><a className="dropdown-item" href="#">Vinyl Flooring</a></li>
                    </ul>
                </li> */}

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
                                {category.name}
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

                {/* {
                    
                    product.map((item, index) => (
                        <li key={index}>
                            <a className="nav-link dropdown-toggle" style={{ color: "black" }} href="" role="button" data-bs-toggle="dropdown">
                                {item.parentCategory.name}
                            </a>
                            <ul className="dropdown-menu">
                                <li>
                                    <a className="dropdown-item" href="#">
                                        {item.childCategory.name}
                                    </a>
                                </li>
                            </ul>
                        </li>
                    ))
                } */}
            </div>
        </>
    )
}

export default NavBar