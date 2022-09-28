import {Nav} from '../Nav'
import './styles.scss'
import logo from "../../../assets/logo.svg"

export const Header = () => {
    return (
            <header className="row ">
                    <div className="col-12 col-md-6 d-flex align-items-center">
                        <img src={logo} className="logo"/>
                    </div>
                    <div className="col-12 col-md-6 d-flex justify-content-center"><Nav /></div>
            </header>
    );
};