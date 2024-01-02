

const Banner = () => {
    return (
        <>
             <div className="banner-area style-one pt-100px pb-100px">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="single-banner nth-child-1">
                            <img src="assets/images/banner/3.webp" alt=""/>
                            <div className="banner-content nth-child-1">
                                <h3 className="title">Smart Watch For <br/>
                                Your Hand</h3>
                                <span className="category">From $29.00</span>
                                <a href="shop-left-sidebar.html" className="shop-link"><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="single-banner nth-child-2 mb-30px mb-lm-30px mt-lm-30px ">
                            <img src="assets/images/banner/4.webp" alt=""/>
                            <div className="banner-content nth-child-2">
                                <h3 className="title">Headphones</h3>
                                <span className="category">From $95.00</span>
                                <a href="shop-left-sidebar.html" className="shop-link"><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                            </div>
                        </div>
                        <div className="single-banner nth-child-2">
                            <img src="assets/images/banner/5.webp" alt=""/>
                            <div className="banner-content nth-child-3">
                                <h3 className="title">Smartphone</h3>
                                <span className="category">From $69.00</span>
                                <a href="shop-left-sidebar.html" className="shop-link"><i className="fa fa-arrow-right" aria-hidden="true"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     </>
    );
};

export default Banner;