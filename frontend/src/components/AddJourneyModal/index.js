import React from 'react';

import './index.css';

const AddJourneyModal = ({ trigger, isOpened  }) => {
  return (
    <>
        {isOpened ? (<>
                        <div className="modal-shadow"/>

                        <div className="modal-container">
                            <div className="modal-cover">
                                <div className="modal-header">
                                    <h3>+ Nova Jornada</h3>
                                    <p/>                              
                                </div>

                                <div className="modal-body">
                                    <label>
                                        Adicione uma nova jornada, digite um nome:
                                    </label>

                                    <input />

                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="modal-done-button" onClick={trigger}>
                                        <span >Pronto</span>
                                    </button>

                                    <button type="button" className="modal-exit-button" onClick={trigger}>
                                        <span >Sair</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                     </>
            ) : (<> </>)
        }  
    </>
  )
}

export default AddJourneyModal; 