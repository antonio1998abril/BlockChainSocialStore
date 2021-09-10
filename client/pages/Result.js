import React, { useState } from 'react'

function Result() {
  const [select,setSelect] = useState(false)
  const selectOption = () => {
    setSelect(!select)
  }

    return (
        <div >
            <div className="card result">
              <div className="card-body">
            <div className="row">
                <div className="col-12">
                    <h4> Result</h4>
                    <div className="post">
                        <div className="user-block">
                        <img className="img-circle img-bordered-sm" src="https://tienda.elsardinero.com/wp-content/uploads/2017/09/user.png" width="20" height="20" alt="user image"/>
                            <span className="username">
                            <a href="#">Jonathan Burke Jr.</a>
                            </span>

                            <span className="description">Shared publicly - 7:45 PM today</span>

                        </div>
                        <p>
                        Lorem ipsum represents a long-held tradition for designers,
                        typographers and the like. Some people hate it and argue for
                        its demise, but others ignore.
                      </p>  
                      <div className="bodyButton">
                        <button className="buttonOption">
                          <span className="buttonOption__inner">See</span>
                        </button>

                        <button className="buttonOption buttonOption--secondary">
                          <span className="buttonOption__inner">Image</span>
                        </button>
                      </div>
                    </div>


                    <div className="post">
                        <div className="user-block">
                        <img className="img-circle img-bordered-sm" src="https://tienda.elsardinero.com/wp-content/uploads/2017/09/user.png" width="20" height="20" alt="user image"/>
                            <span className="username">
                            <a href="#">Jonathan Burke Jr.</a>
                            </span>

                            <span className="description">Shared publicly - 7:45 PM today</span>

                        </div>
                        <p>
                        Lorem ipsum represents a long-held tradition for designers,
                        typographers and the like. Some people hate it and argue for
                        its demise, but others ignore.
                      </p>  
                      <div className="bodyButton">
                        <button className="buttonOption">
                          <span className="buttonOption__inner">See</span>
                        </button>

                        <button className="buttonOption buttonOption--secondary">
                          <span className="buttonOption__inner">Image</span>
                        </button>
                      </div>
                    </div>

                 
                </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default Result
