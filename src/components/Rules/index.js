import Popup from 'reactjs-popup'
import './index.css'

const Rules = () => {
    return (
        <div className='rules-container'>
            <Popup
                modal
                trigger={
                    <button type="button" className="trigger-button button">
                        Rules
                    </button>
                }
            >
                {close => (
                    <>
                        <div className="confirmation">
                            <button
                                type="button"
                                className="button1 cross"
                                onClick={() => close()}
                                data-testid="close"
                            >
                                Close
                            </button>
                            <p className="">Red Ball Gives -10 score</p>
                            <p className="">Blue Ball Gives +10 score</p>
                            <div className="button-container">
                                <button
                                    type="button"
                                    className="cancel-button button"
                                    onClick={() => close()}
                                >
                                    Ok
                                </button>
                            </div>
                        </div>
                    </>
                )}
            </Popup>
        </div>
    )
}

export default Rules;