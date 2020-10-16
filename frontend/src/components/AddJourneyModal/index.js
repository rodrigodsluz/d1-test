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
                                    <h3>Nova Jornada</h3>
                                </div>

                                <div className="modal-body">
                                    <label>
                                        Dê um <strong>nome</strong> para essa Jornada
                                    </label>

                                    <input />

                                    <label >
                                        Você poderá alterar essa informação depois.
                                    </label>

                                </div>

                                <div className="modal-footer">
                                    <button type="button" className="modal-done-button" onClick={trigger}>
                                        <span >Continuar</span>
                                    </button>

                                    <button type="button" className="modal-exit-button" onClick={trigger}>
                                        <span >Cancelar</span>
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