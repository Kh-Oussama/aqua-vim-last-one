import React, {useEffect, useState} from 'react';
import Fade from "react-reveal/Fade";
import Pulse from "react-reveal/Pulse";
import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {addClientStart} from "../../redux/clients/cleints.actions";
import {selectAddError, selectAddLoading, selectAddStatus} from "../../redux/clients/clients.selectors";
import Loader from "../loader-content/loader.compoenent";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


toast.configure();
const SubscribeUs = ({addClientStart, addLoading, addErrors, addStatus}) => {
    const [email, setEmail] = useState('');
    const [notifState, setNotifState] = useState(false);


    const addClientHandler = async ()  => {
        const formData = new FormData();
        formData.append('email',email);
        addClientStart({formData});
        setNotifState(true);
        setEmail('');

    }

        if (addErrors && notifState) {
            if (addErrors.client) {
                toast.error(
                    <div><i className="fas fa-exclamation-circle"/> Vous êtes déjà abonné !!</div>,
                    {
                        position: toast.POSITION.BOTTOM_RIGHT,
                        autoClose: 5000,
                        draggable: true,
                    })
                setNotifState(false)
            }
            if (addErrors.email) {
                toast.error(
                    <div><i className="fas fa-exclamation-circle"/>Veuillez entrer une adresse email valide</div>,
                    {
                        position: toast.POSITION.BOTTOM_CENTER,
                        autoClose: 5000,
                        draggable: true,
                        toastId: 'first_toast',
                    })
                setNotifState(false)
            }
        }


            if (addStatus && notifState)
            {
                toast.dark(
                    <div><i className="fas fa-check-circle"/> Merci de vous être abonné</div>,
                    {position: toast.POSITION.BOTTOM_RIGHT,
                        autoClose: 5000,
                        draggable: true,
                    })
                setNotifState(false)
            }



    return (
        <div className="section-4">
            <div className="subscribeUs-section">
                <div className="subscribeUs-section__title">
                    <p className="paragraph">
                        Ne manquez aucune de nos actualités.
                        </p>
                    <h1 className="title_1">
                        abonnez-vous !
                        </h1>
                </div>
                {/*<Pulse>*/}
                <div className="subscribeUs-section__form">
                    <div className="formSub">
                        <input
                            type="email"
                            className="formSub__input"
                            placeholder="exemple@gmail.com"
                            required
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                        />
                        {
                            addLoading
                                ? <div className='btn-loading'><Loader/></div>
                                : <button className="formSub__button" onClick={addClientHandler}>
                                    Envoyer
                                </button>
                        }

                    </div>
                </div>
                {/*</Pulse>*/}
            </div>

        </div>

    );
}

const mapStateToProps = createStructuredSelector({
    addLoading: selectAddLoading,
    addStatus: selectAddStatus,
    addErrors: selectAddError,
});

const mapDispatchToProps = dispatch => ({
    addClientStart : clientData => dispatch(addClientStart(clientData)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SubscribeUs);
