import React, {useEffect, useRef, useState} from 'react';
import {Link, useLocation, withRouter} from "react-router-dom";
import Footer from "../../components/footer/footer.component";
import NavigationBar from "../../components/navigation/navigation.component";
import {setCurrentPage} from "../../redux/design-utilites/design-utilities.actions";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectSendMsgError, selectSendMsgLoading, selectSendMsgStatus} from "../../redux/clients/clients.selectors";
import {sendMessageStart} from "../../redux/clients/cleints.actions";
import {toast} from "react-toastify";
import Loader from "../../components/loader-content/loader.compoenent";
import {selectCurrentConfig} from "../../redux/config/config.selectors";
import Helmet from "react-helmet";
import ReCAPTCHA from "react-google-recaptcha";

const ContactUsPage = ({setCurrentPage, currentConfig, sendMsgStart, sendLoading, sendStatus, sendErrors, history}) => {
    const recaptchaRef = React.createRef();
    const [messageCredentials, setCredentials] = useState({
        firstName: '',
        lastName: '',
        subject: '',
        email: '',
        phoneNumber: '',
        description: ''
    });
    const {firstName, lastName, subject, email, phoneNumber, description} = messageCredentials;
    const [notifState, setNotifState] = useState(false);
    const [recaptchaError, setRecaptchaError] = useState(false);



    const handleChange = event => {
        const {value, name} = event.target;
        setCredentials({...messageCredentials, [name]: value});
    };

    useEffect(() => {
        setCurrentPage(window.location.pathname)
    }, [setCurrentPage]);

    const {pathname} = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);


    const sendMsgHandler = async () => {
        if(!recaptchaRef.current.getValue()) {
          return setRecaptchaError(true);
        }
        setRecaptchaError(false);
        const formData = new FormData();
        formData.append('firstName', firstName);
        formData.append('lastName', lastName);
        formData.append('email', email);
        formData.append('phoneNumber', phoneNumber);
        formData.append('subject', subject);
        formData.append('description', description);
        sendMsgStart({formData});
        setNotifState(true);
        setCredentials({
            ...messageCredentials,
            email: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            subject: '',
            description: ''
        });
    }

    const afterSubmitting = async () => {
    if (sendStatus && notifState) {
        toast.dark(
            <div><i className="fas fa-check-circle"/> your message has been sent !</div>,
            {
                position: toast.POSITION.BOTTOM_RIGHT,
                autoClose: 3000,
                draggable: true,
            })
        await sleep(4000).then( () => {

            setNotifState(false);
            history.push('/');
        });

         }
    }
    afterSubmitting();
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }

        if (sendErrors && notifState) {
            toast.error(
                <div><i className="fas fa-exclamation-circle"/> Message could not be sent ! check your information and and
                    try again !</div>,
                {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    autoClose: 5000,
                    draggable: true,
                })
            setNotifState(false)

        }



    return (
        <React.Fragment>
            <Helmet>
                <title>Comptoir d'orient - Contactez nous</title>
            </Helmet>
            <NavigationBar/>
            <div className="contactUs">
                <div className="content">
                    <div className="home">
                        <Link to="/">
                            <i className="fas fa-home"/>
                        </Link>
                    </div>
                    <div className="content-contactInfo">
                        <h1>Contact Info</h1>
                        <div className="info">
                            <i className="fas fa-map-marked-alt"/>
                            <span>CITÉ CAMPS N° 06 ILOT E LOCAL 02, DAR EL BEIDA-ALGER</span>
                        </div>
                        <div className="info">
                            <i className="far fa-envelope"/>
                            <span>commercial@aqua-vim.com</span>
                        </div>
                        <div className="info">
                            <i className="fas fa-phone"/>
                            <span>{currentConfig.phone_number_1 ? '0'+currentConfig.phone_number_1 :null} - {currentConfig.phone_number_2 ? '0'+currentConfig.phone_number_2 :null} - {currentConfig.phone_number_3 ? '0'+currentConfig.phone_number_3 :null} - {currentConfig.phone_number_4 ? '0'+currentConfig.phone_number_4 :null} - {currentConfig.phone_number_5 ? '0'+currentConfig.phone_number_5 :null}</span>
                        </div>
                        <div className="info">
                            <i className="fas fa-fax"/>
                            <span>{currentConfig.phone_number_6 ? '0'+currentConfig.phone_number_6 :null}</span>
                        </div>
                        <div className="social-Media">
                            <Link  to={{ pathname: "https://www.instagram.com/aqua_vim1/?fbclid=IwAR0wDSR4dpylh7nck3cvQn0gcS3fSL6WEUKVsas-dwT5wLbBEP4FFP1pAzg" }}
                                   target="_blank">
                                <span><i className="fab fa-instagram-square"/></span>
                            </Link>
                            <Link      to={{ pathname: "https://web.facebook.com/eurl.aquavim/" }}
                                       target="_blank">
                                <span><i className="fab fa-facebook-square"/></span>
                            </Link>
                            <Link to={{ pathname: "https://www.linkedin.com/in/aqua-vim-1976ab208?fbclid=IwAR1XRspkWB3GZ-z_FvotjXCg8Z6Zo9fIirVBjH6XCkBXqKtXfloxcdrIDgI" }}
                                  target="_blank">
                                <span><i className="fab fa-linkedin"/></span>
                            </Link>
                        </div>
                    </div>
                    <div className="content-contactForm">

                        <h1>Contactez Nous</h1>
                        <div className="formBlock">
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="firstName"
                                    value={firstName}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="in-label">Nom <span className="etoile">*</span>:</div>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="lastName"
                                    value={lastName}
                                    onChange={handleChange}
                                    required/>
                                <div className="in-label">Prénom <span className="etoile">*</span>:</div>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="email"
                                    value={email}
                                    onChange={handleChange}
                                    required/>
                                <div className="in-label">Email<span className="etoile">*</span>:</div>
                            </div>
                            <div className="form-group">
                                <input
                                    type="text"
                                    name="phoneNumber"
                                    value={phoneNumber}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="in-label">Numero de telephone <span className="etoile">*</span>:</div>
                            </div>
                            <div className="form-group textarea">
                                <input
                                    name="subject"
                                    value={subject}
                                    onChange={handleChange}
                                    required
                                />
                                <div className="in-label">Sujet <span className="etoile">*</span>:</div>
                            </div>
                            <div className="form-group textarea">
                                <textarea
                                    name="description"
                                    value={description}
                                    onChange={handleChange}
                                    required
                                    rows={3}
                                />
                                <div className="in-label">Message <span className="etoile">*</span>:
                                </div>
                            </div>
                            <div className={"button-div"}>
                                {
                                    recaptchaError && <span className={"capatcha-error"}>Veuillez vérifier le captcha !</span>
                                }
                                {
                                    sendLoading
                                        ? <div style={{width: '10rem'}}><Loader/></div>
                                        : <button onClick={sendMsgHandler}><i className="fas fa-paper-plane"/> Envoyer</button>

                                }

                            </div>

                            <div className={"recaptcha-div"}>
                                <ReCAPTCHA
                                    sitekey="6LeuljsfAAAAAJZyroyiS25SzrmD-wGYZZqdEgFD"
                                    ref={recaptchaRef}
                                    // onChange={onChange}
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <Footer/>
        </React.Fragment>
    )
}


const mapStateToProps = createStructuredSelector({
    sendLoading: selectSendMsgLoading,
    sendStatus: selectSendMsgStatus,
    sendErrors: selectSendMsgError,
    currentConfig: selectCurrentConfig,
});


const mapDispatchToProps = dispatch => ({
    setCurrentPage: current_page => dispatch(setCurrentPage(current_page)),
    sendMsgStart: msgData => dispatch(sendMessageStart(msgData)),

});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ContactUsPage));
