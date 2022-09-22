import {Nav} from '../Nav'
import './styles.scss'
import logo from "../../../assets/logo.svg"

export const Header = () => {
    return (
            <header className="row">
                <div className="col">
                    <img src={logo} className="logo"/>
                </div>
                <div className="col"><Nav /></div>
            </header>
    );
};