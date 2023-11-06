import'./Card1.css';

function AccordionSec(props){
    return(
        <div className="mx-5 pb-5">
            <Headers first="SEE WHY CUSTOMERS LOVE THE OUR MOBILES" second="SHOW YOURS TO THE WORLD"/>
            <div className="row w-100">
                <div className="col-lg-5 text-center ">
                    <img  src="//phono-demo.myshopify.com/cdn/shop/files/bg-1.png?v=1613702304&amp;width=1500"
                         sizes="(min-width: 1300px) 600px, (min-width: 750px) calc((100vw - 130px) / 2), calc((100vw - 50px) / 2)"
                         alt="" loading="lazy" width="1023" height="1018" className="mr-auto  wh100 width60"/>
                </div>
                <div className="col-lg-6">
                    <div id="accordion">
                        <div className="card ">
                            <div className="card-header ">
                                <a className="btn fs14 color-white collapsed" data-bs-toggle="collapse" href="#collapseOne"
                                   aria-expanded="false">
                                    NEW GRADIENT COLOR FINISHES
                                </a>
                            </div>
                            <div id="collapseOne" className="collapse" data-bs-parent="#accordion" style="">
                                <div className="card-body">
                                    Rierem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                    ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui official.
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header">
                                <a className="btn fs14 color-white collapsed" data-bs-toggle="collapse" href="#collapseTwo"
                                   aria-expanded="false">FOUR-SIDED
                                    CURVED CERAMIC BODY
                                </a>
                            </div>
                            <div id="collapseTwo" className="collapse" data-bs-parent="#accordion" style="">
                                <div className="card-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui official.
                                </div>
                            </div>
                        </div>

                        <div className="card">
                            <div className="card-header text-start">
                                <a className="fs14 color-white collapsed " data-bs-toggle="collapse" href="#collapseThree"
                                   aria-expanded="false">
                                    4000MAH HIGH-CAPACITY BATTERY
                                </a>
                            </div>
                            <div id="collapseThree" className="collapse" data-bs-parent="#accordion" style="">
                                <div className="card-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui official.
                                </div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="card-header">
                                <a className="btn fs14 color-white" data-bs-toggle="collapse" href="#collapseFour"
                                   aria-expanded="true">
                                    FULLY HIDDEN CAMERA LENS
                                </a>
                            </div>
                            <div id="collapseFour" className="collapse show" data-bs-parent="#accordion" style="">
                                <div className="card-body">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                    cupidatat non proident, sunt in culpa qui official.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AccordionSec;
