import {Dropdown} from "react-bootstrap";
import Iphone14 from "../../assets/images/iphone14.png";
import React from "react";


function DropdownNav() {
    return (
        <Dropdown className="color-gray fw-500">
            <Dropdown.Toggle variant="" id="dropdown-basic">
                Collection
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <div className="d-flex">
                    <div className="m-2">
                        <Dropdown.Item href="#">SSD CARD</Dropdown.Item>
                        <Dropdown.Divider/>
                        <Dropdown.Item href="#">Affinity M20</Dropdown.Item>
                        <Dropdown.Item href="#">Affinity P40 Pro</Dropdown.Item>
                        <Dropdown.Item href="#">PO V40 ThinQ</Dropdown.Item>
                        <Dropdown.Item href="#">Affinity P40 Pro</Dropdown.Item>
                    </div>
                    <div className="m-2">
                        <Dropdown.Item href="#">SSD CARD</Dropdown.Item>
                        <Dropdown.Divider/>
                        <Dropdown.Item href="#">Affinity M20</Dropdown.Item>
                        <Dropdown.Item href="#">Affinity P40 Pro</Dropdown.Item>
                        <Dropdown.Item href="#">PO V40 ThinQ</Dropdown.Item>
                        <Dropdown.Item href="#">Affinity P40 Pro</Dropdown.Item>
                    </div>
                    <div className="m-2">
                        <Dropdown.Item href="#">SSD CARD</Dropdown.Item>
                        <Dropdown.Divider/>
                        <Dropdown.Item href="#">Affinity M20</Dropdown.Item>
                        <Dropdown.Item href="#">Affinity P40 Pro</Dropdown.Item>
                        <Dropdown.Item href="#">PO V40 ThinQ</Dropdown.Item>
                        <Dropdown.Item href="#">Affinity P40 Pro</Dropdown.Item>
                    </div>
                    <div className="m-2">
                        <img src={Iphone14} alt="" className="RA-h-10 RA-WidthHeight"/>
                    </div>
                </div>
            </Dropdown.Menu>
        </Dropdown>);
}
export default DropdownNav;
