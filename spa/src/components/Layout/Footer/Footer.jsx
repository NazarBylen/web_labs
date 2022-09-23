import './styles.scss'
import twitter from '../../../assets/icons/twitter.svg'
import youtube from '../../../assets/icons/youtube.svg'
import facebook from '../../../assets/icons/facebook.svg'
import phone from '../../../assets/icons/phone.svg'
import logo from '../../../assets/logo.svg'

export const Footer = () => {
    return (
            <footer>
                <div className="row justify-content-between">
                    <div className="col">
                        <div className="subtexts">
                            <h5>Best pizza in Ukraine</h5>
                            <p>two thousand of clients
                                were ordering only
                                for last month</p>
                        </div>
                    </div>
                    <div className="col d-flex justify-content-center">
                        <img src={logo} className="logo"/>
                    </div>
                    <div className="col d-flex justify-content-end">
                        <a href="/"><img src={twitter} className="icon"/></a>
                        <a href="/"><img src={youtube} className="icon"/></a>
                        <a href="/"><img src={facebook} className="icon"/></a>
                        <a href="/"><img src={phone} className="icon"/></a>
                    </div>
                </div>
                <div className="subfooter">
                    <div className="line"></div>
                    <p>2022 all rights reserved</p>
                </div>
            </footer>
    );
};