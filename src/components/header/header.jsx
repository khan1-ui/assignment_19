
const Header = () => {
    return (
        <div>
          <header>
            
            <div className="header-top">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col">
                            <div className="welcome-text">
                                <p>World Wide Completely Free Returns and Shipping</p>
                            </div>
                        </div>
                        <div className="col d-none d-lg-block">
                            <div className="top-nav">
                                <ul>
                                    <li><a href="tel:0123456789"><i className="fa fa-phone"></i> +012 3456 789</a></li>
                                    <li><a href="mailto:demo@example.com"><i className="fa fa-envelope-o"></i> demo@example.com</a></li>
                                    <li><a href="my-account.html"><i className="fa fa-user"></i> Account</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="header-bottom  d-none d-lg-block">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-3 col">
                            <div className="header-logo">
                                <a href="index.html"><img src="assets/images/logo/logo.png" alt="Site Logo" /></a>
                            </div>
                        </div>
                        <div className="col-lg-6 d-none d-lg-block">
                            <div className="search-element">
                                <form action="#">
                                    <input type="text" placeholder="Search" />
                                    <button><i className="pe-7s-search"></i></button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-3 col">
                            <div className="header-actions">
                              
                                <a href="#offcanvas-wishlist" className="header-action-btn offcanvas-toggle">
                                    <i className="pe-7s-like"></i>
                                </a>
                                
                                <a href="#offcanvas-cart" className="header-action-btn header-action-btn-cart offcanvas-toggle pr-0">
                                    <i className="pe-7s-shopbag"></i>
                                    <span className="header-action-num">01</span>
                                     <span className="cart-amount">€30.00</span> 
                                </a>
                                <a href="#offcanvas-mobile-menu" className="header-action-btn header-action-btn-menu offcanvas-toggle d-lg-none">
                                    <i className="pe-7s-menu"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="header-bottom d-lg-none sticky-nav style-1">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                        <div className="col-lg-3 col">
                            <div className="header-logo">
                                <a href="index.html"><img src="assets/images/logo/logo.png" alt="Site Logo" /></a>
                            </div>
                        </div>
                        <div className="col-lg-6 d-none d-lg-block">
                            <div className="search-element">
                                <form action="#">
                                    <input type="text" placeholder="Search" />
                                    <button><i className="pe-7s-search"></i></button>
                                </form>
                            </div>
                        </div>
                        <div className="col-lg-3 col">
                            <div className="header-actions">
                       
                                <a href="#offcanvas-wishlist" className="header-action-btn offcanvas-toggle">
                                    <i className="pe-7s-like"></i>
                                </a>
                              
                                <a href="#offcanvas-cart" className="header-action-btn header-action-btn-cart offcanvas-toggle pr-0">
                                    <i className="pe-7s-shopbag"></i>
                                    <span className="header-action-num">01</span>
                                    <span className="cart-amount">€30.00</span> 
                                </a>
                                <a href="#offcanvas-mobile-menu" className="header-action-btn header-action-btn-menu offcanvas-toggle d-lg-none">
                                    <i className="pe-7s-menu"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
       
            <div className="header-nav-area d-none d-lg-block sticky-nav">
                <div className="container">
                    <div className="header-nav">
                        <div className="main-menu position-relative">
                            <ul>
                                <li className="dropdown"><a href="#">Home <i className="fa fa-angle-down"></i></a>
                                    <ul className="sub-menu">
                                        <li><a href="index.html">Home 1</a></li>
                                        <li><a href="index-2.html">Home 2</a></li>
                                    </ul>
                                </li>
                                <li><a href="about.html">About</a></li>
                                <li className="dropdown position-static"><a href="about.html">Pages <i className="fa fa-angle-down"></i></a>
                                    <ul className="mega-menu d-block">
                                        <li className="d-flex">
                                            <ul className="d-block">
                                                <li className="title"><a href="#">Inner Pages</a></li>
                                                <li><a href="404.html">404 Page</a></li>
                                                <li><a href="order-tracking.html">Order Tracking</a></li>
                                                <li><a href="faq.html">Faq Page</a></li>
                                                <li><a href="coming-soon.html">Coming Soon Page</a></li>
                                            </ul>
                                            <ul className="d-block">
                                                <li className="title"><a href="#">Other Shop Pages</a></li>
                                                <li><a href="cart.html">Cart Page</a></li>
                                                <li><a href="checkout.html">Checkout Page</a></li>
                                                <li><a href="compare.html">Compare Page</a></li>
                                                <li><a href="wishlist.html">Wishlist Page</a></li>
                                            </ul>
                                            <ul className="d-block">
                                                <li className="title"><a href="#">Related Shop Pages</a></li>
                                                <li><a href="my-account.html">Account Page</a></li>
                                                <li><a href="login.html">Login & Register Page</a></li>
                                                <li><a href="empty-cart.html">Empty Cart Page</a></li>
                                                <li><a href="thank-you-page.html">Thank You Page</a></li>
                                            </ul>
                                            <ul className="d-flex align-items-center p-0 border-0 flex-column justify-content-center">
                                                <li>
                                                    <a className="p-0" href="shop-left-sidebar.html"><img className="img-responsive w-100" src="assets/images/banner/menu-banner.png" alt=""/></a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown position-static"><a href="#">Shop <i
                                    className="fa fa-angle-down"></i></a>
                                    <ul className="mega-menu d-block">
                                        <li className="d-flex">
                                            <ul className="d-block">
                                                <li className="title"><a href="#">Shop Page</a></li>
                                                <li><a href="shop-3-column.html">Shop 3 Column</a></li>
                                                <li><a href="shop-4-column.html">Shop 4 Column</a></li>
                                                <li><a href="shop-left-sidebar.html">Shop Left Sidebar</a></li>
                                                <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                                <li><a href="shop-list-left-sidebar.html">Shop List Left Sidebar</a>
                                                </li>
                                                <li><a href="shop-list-right-sidebar.html">Shop List Right Sidebar</a>
                                                </li>
                                            </ul>
                                            <ul className="d-block">
                                                <li className="title"><a href="#">product Details Page</a></li>
                                                <li><a href="single-product.html">Product Single</a></li>
                                                <li><a href="single-product-variable.html">Product Variable</a></li>
                                                <li><a href="single-product-affiliate.html">Product Affiliate</a></li>
                                                <li><a href="single-product-group.html">Product Group</a></li>
                                                <li><a href="single-product-tabstyle-2.html">Product Tab 2</a></li>
                                                <li><a href="single-product-tabstyle-3.html">Product Tab 3</a></li>
                                            </ul>
                                            <ul className="d-block">
                                                <li className="title"><a href="#">Single Product Page</a></li>
                                                <li><a href="single-product-slider.html">Product Slider</a></li>
                                                <li><a href="single-product-gallery-left.html">Product Gallery Left</a></li>
                                                <li><a href="single-product-gallery-right.html">Product Gallery Right</a> </li>
                                                <li><a href="single-product-sticky-left.html">Product Sticky Left</a>
                                                </li>
                                                <li><a href="single-product-sticky-right.html">Product Sticky Right</a>
                                                </li>
                                                <li><a href="cart.html">Cart Page</a></li>
                                            </ul>
                                            <ul className="d-block p-0 border-0">
                                                <li className="title"><a href="#">Single Product Page</a></li>
                                                <li><a href="checkout.html">Checkout Page</a></li>
                                                <li><a href="compare.html">Compare Page</a></li>
                                                <li><a href="wishlist.html">Wishlist Page</a></li>
                                                <li><a href="my-account.html">Account Page</a></li>
                                                <li><a href="login.html">Login & Register Page</a></li>
                                                <li><a href="empty-cart.html">Empty Cart Page</a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="dropdown "><a href="#">Blog <i className="fa fa-angle-down"></i></a>
                                    <ul className="sub-menu">
                                        <li className="dropdown position-static"><a href="blog-grid-left-sidebar.html">Blog Grid
                                                <i className="fa fa-angle-right"></i></a>
                                            <ul className="sub-menu sub-menu-2">
                                                <li><a href="blog-grid.html">Blog Grid</a></li>
                                                <li><a href="blog-grid-left-sidebar.html">Blog Grid Left Sidebar</a></li>
                                                <li><a href="blog-grid-right-sidebar.html">Blog Grid Right Sidebar</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown position-static"><a href="blog-list-left-sidebar.html">Blog List
                                                <i className="fa fa-angle-right"></i></a>
                                            <ul className="sub-menu sub-menu-2">
                                                <li><a href="blog-list.html">Blog List</a></li>
                                                <li><a href="blog-list-left-sidebar.html">Blog List Left Sidebar</a></li>
                                                <li><a href="blog-list-right-sidebar.html">Blog List Right Sidebar</a></li>
                                            </ul>
                                        </li>
                                        <li className="dropdown position-static"><a href="blog-single-left-sidebar.html">Single
                                                Blog <i className="fa fa-angle-right"></i></a>
                                            <ul className="sub-menu sub-menu-2">
                                                <li><a href="blog-single.html">Single Blog</a></li>
                                                <li><a href="blog-single-left-sidebar.html">Single Blog Left Sidebar</a>
                                                </li>
                                                <li><a href="blog-single-right-sidebar.html">Single Blog Right Sidebar</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li><a href="contact.html">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        
            <div className="mobile-search-box d-lg-none">
                <div className="container">
                   
                    <div className="search-element max-width-100">
                        <form action="#">
                            <input type="text" placeholder="Search" />
                            <button><i className="pe-7s-search"></i></button>
                        </form>
                    </div>
                    
                </div>
            </div>
        </header>
       
        <div className="offcanvas-overlay"></div>
       
        <div id="offcanvas-wishlist" className="offcanvas offcanvas-wishlist">
            <div className="inner">
                <div className="head">
                    <span className="title">Wishlist</span>
                    <button className="offcanvas-close">×</button>
                </div>
                <div className="body customScroll">
                    <ul className="minicart-product-list">
                        <li>
                            <a href="single-product.html" className="image"><img src="assets/images/product-image/1.webp" alt="Cart product Image"/></a>
                            <div className="content">
                                <a href="single-product.html" className="title">Modern Smart Phone</a>
                                <span className="quantity-price">1 x <span className="amount">$21.86</span></span>
                                <a href="#" className="remove">×</a>
                            </div>
                        </li>
                        <li>
                            <a href="single-product.html" className="image"><img src="assets/images/product-image/2.webp" alt="Cart product Image"/></a>
                            <div className="content">
                                <a href="single-product.html" className="title">Bluetooth Headphone</a>
                                <span className="quantity-price">1 x <span className="amount">$13.28</span></span>
                                <a href="#" className="remove">×</a>
                            </div>
                        </li>
                        <li>
                            <a href="single-product.html" className="image"><img src="assets/images/product-image/3.webp" alt="Cart product Image"/></a>
                            <div className="content">
                                <a href="single-product.html" className="title">Smart Music Box</a>
                                <span className="quantity-price">1 x <span className="amount">$17.34</span></span>
                                <a href="#" className="remove">×</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="foot">
                    <div className="buttons">
                        <a href="wishlist.html" className="btn btn-dark btn-hover-primary mt-30px">view wishlist</a>
                    </div>
                </div>
            </div>
        </div>
       
        <div id="offcanvas-cart" className="offcanvas offcanvas-cart">
            <div className="inner">
                <div className="head">
                    <span className="title">Cart</span>
                    <button className="offcanvas-close">×</button>
                </div>
                <div className="body customScroll">
                    <ul className="minicart-product-list">
                        <li>
                            <a href="single-product.html" className="image"><img src="assets/images/product-image/1.webp" alt="Cart product Image"/></a>
                            <div className="content">
                                <a href="single-product.html" className="title">Modern Smart Phone</a>
                                <span className="quantity-price">1 x <span className="amount">$18.86</span></span>
                                <a href="#" className="remove">×</a>
                            </div>
                        </li>
                        <li>
                            <a href="single-product.html" className="image"><img src="assets/images/product-image/2.webp" alt="Cart product Image"/></a>
                            <div className="content">
                                <a href="single-product.html" className="title">Bluetooth Headphone</a>
                                <span className="quantity-price">1 x <span className="amount">$43.28</span></span>
                                <a href="#" className="remove">×</a>
                            </div>
                        </li>
                        <li>
                            <a href="single-product.html" className="image"><img src="assets/images/product-image/3.webp" alt="Cart product Image"/></a>
                            <div className="content">
                                <a href="single-product.html" className="title">Smart Music Box</a>
                                <span className="quantity-price">1 x <span className="amount">$37.34</span></span>
                                <a href="#" className="remove">×</a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="foot">
                    <div className="buttons mt-30px">
                        <a href="cart.html" className="btn btn-dark btn-hover-primary mb-30px">view cart</a>
                        <a href="checkout.html" className="btn btn-outline-dark current-btn">checkout</a>
                    </div>
                </div>
            </div>
        </div>
       
        <div id="offcanvas-mobile-menu" className="offcanvas offcanvas-mobile-menu">
            <button className="offcanvas-close"></button>
            <div className="user-panel">
                <ul>
                    <li><a href="tel:0123456789"><i className="fa fa-phone"></i> +012 3456 789</a></li>
                    <li><a href="mailto:demo@example.com"><i className="fa fa-envelope-o"></i> demo@example.com</a></li>
                    <li><a href="my-account.html"><i className="fa fa-user"></i> Account</a></li>
                </ul>
            </div>
            <div className="inner customScroll">
                <div className="offcanvas-menu mb-4">
                    <ul>
                        <li><a href="#"><span className="menu-text">Home</span></a>
                            <ul className="sub-menu">
                                <li><a href="index.html"><span className="menu-text">Home 1</span></a></li>
                                <li><a href="index-2.html"><span className="menu-text">Home 2</span></a></li>
                            </ul>
                        </li>
                        <li><a href="about.html">About</a></li>
                        <li>
                            <a href="#"><span className="menu-text">Pages</span></a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="#"><span className="menu-text">Inner Pages</span></a>
                                    <ul className="sub-menu">
                                        <li><a href="404.html">404 Page</a></li>
                                        <li><a href="order-tracking.html">Order Tracking</a></li>
                                        <li><a href="faq.html">Faq Page</a></li>
                                        <li><a href="coming-soon.html">Coming Soon Page</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#"><span className="menu-text"> Other Shop Pages</span></a>
                                    <ul className="sub-menu">
                                        <li><a href="cart.html">Cart Page</a></li>
                                        <li><a href="checkout.html">Checkout Page</a></li>
                                        <li><a href="compare.html">Compare Page</a></li>
                                        <li><a href="wishlist.html">Wishlist Page</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#"><span className="menu-text">Related Shop Page</span></a>
                                    <ul className="sub-menu">
                                        <li><a href="my-account.html">Account Page</a></li>
                                        <li><a href="login.html">Login & Register Page</a></li>
                                        <li><a href="empty-cart.html">Empty Cart Page</a></li>
                                        <li><a href="thank-you-page.html">Thank You Page</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="#"><span className="menu-text">Shop</span></a>
                            <ul className="sub-menu">
                                <li>
                                    <a href="#"><span className="menu-text">Shop Page</span></a>
                                    <ul className="sub-menu">
                                        <li><a href="shop-3-column.html">Shop 3 Column</a></li>
                                        <li><a href="shop-4-column.html">Shop 4 Column</a></li>
                                        <li><a href="shop-left-sidebar.html">Shop Left Sidebar</a></li>
                                        <li><a href="shop-right-sidebar.html">Shop Right Sidebar</a></li>
                                        <li><a href="shop-list-left-sidebar.html">Shop List Left Sidebar</a>
                                        </li>
                                        <li><a href="shop-list-right-sidebar.html">Shop List Right Sidebar</a>
                                        </li>
                                        <li><a href="cart.html">Cart Page</a></li>
                                        <li><a href="checkout.html">Checkout Page</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#"><span className="menu-text">product Details Page</span></a>
                                    <ul className="sub-menu">
                                        <li><a href="single-product.html">Product Single</a></li>
                                        <li><a href="single-product-variable.html">Product Variable</a></li>
                                        <li><a href="single-product-affiliate.html">Product Affiliate</a></li>
                                        <li><a href="single-product-group.html">Product Group</a></li>
                                        <li><a href="single-product-tabstyle-2.html">Product Tab 2</a></li>
                                        <li><a href="single-product-tabstyle-3.html">Product Tab 3</a></li>
                                        <li><a href="single-product-slider.html">Product Slider</a></li>
                                        <li><a href="single-product-gallery-left.html">Product Gallery Left</a></li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#"><span className="menu-text">Single Product Page</span></a>
                                    <ul className="sub-menu">
                                        <li><a href="single-product-gallery-right.html">Product Gallery
                                                Right</a> </li>
                                        <li><a href="single-product-sticky-left.html">Product Sticky Left</a>
                                        </li>
                                        <li><a href="single-product-sticky-right.html">Product Sticky Right</a>
                                        </li>
                                        <li><a href="compare.html">Compare Page</a></li>
                                        <li><a href="wishlist.html">Wishlist Page</a></li>
                                        <li><a href="my-account.html">Account Page</a></li>
                                        <li><a href="login.html">Login & Register Page</a></li>
                                        <li><a href="empty-cart.html">Empty Cart Page</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="#"><span className="menu-text">Blog</span></a>
                            <ul className="sub-menu">
                                <li><a href="blog-grid.html">Blog Grid Page</a></li>
                                <li><a href="blog-grid-left-sidebar.html">Grid Left Sidebar</a></li>
                                <li><a href="blog-grid-right-sidebar.html">Grid Right Sidebar</a></li>
                                <li><a href="blog-list.html">Blog List Page</a></li>
                                <li><a href="blog-list-left-sidebar.html">List Left Sidebar</a></li>
                                <li><a href="blog-list-right-sidebar.html">List Right Sidebar</a></li>
                                <li><a href="blog-single.html">Blog Single Page</a></li>
                                <li><a href="blog-single-left-sidebar.html">Single Left Sidebar</a></li>
                                <li><a href="blog-single-right-sidebar.html">Single Right Sidbar</a></li>
                            </ul>
                        </li>
                        <li><a href="contact.html">Contact Us</a></li>
                    </ul>
                </div>
             
                <div className="offcanvas-social mt-auto">
                    <ul>
                        <li>
                            <a href="#"><i className="fa fa-facebook"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-twitter"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-google"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-youtube"></i></a>
                        </li>
                        <li>
                            <a href="#"><i className="fa fa-instagram"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Header;