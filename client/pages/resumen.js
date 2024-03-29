import React from 'react'

function resumen() {
    return (
        <div className="topCard">
            <div className="row ">
          <div className="col-md-2">

      
            <div className="card card-primary card-outline col-md-15">
              <div className="card-body box-profile">
                <div className="text-center">
                  <img className="profile-user-img img-fluid img-circle" src="https://tienda.elsardinero.com/wp-content/uploads/2017/09/user.png" alt="User profile picture"/>
                </div>

                <h3 className="profile-username text-center">Nina Mcintire</h3>

                <p className="text-muted text-center">Software Engineer</p>

                <ul className="list-group list-group-unbordered mb-2 ">
                  <li className="list-group-item">
                    <b>Followers</b> <a className="float-right">1,322</a>
                  </li>
                  <li className="list-group-item">
                    <b>Following</b> <a className="float-right">543</a>
                  </li>
                  <li className="list-group-item">
                    <b>Friends</b> <a className="float-right">13,287</a>
                  </li>
                </ul>

                <a href="#" className="btn btn-primary btn-block"><b>Follow</b></a>
              </div>
             
            </div>
           
          </div>
      
          <div className="col-md-10">
            <div className="card">
              <div className="card-body">
                <div className="tab-content">
                  <div className="active tab-pane" id="activity">
                  
                    <div className="post">
                      <div className="user-block">
                        <img className="img-circle img-bordered-sm" src="https://tienda.elsardinero.com/wp-content/uploads/2017/09/user.png" alt="user image"/>
                        <span className="username">
                          <a href="#">Jonathan Burke Jr.</a>
                          <a href="#" className="float-right btn-tool"><i className="fas fa-times"></i></a>
                        </span>
                        <span className="description">Shared publicly - 7:30 PM today</span>
                      </div>
                     
                      <p>
                        Lorem ipsum represents a long-held tradition for designers,
                        typographers and the like. Some people hate it and argue for
                        its demise, but others ignore the hate as they create awesome
                        tools to help create filler text for everyone from bacon lovers
                        to Charlie Sheen fans.
                      </p>

                      <p>
                        <a href="#" className="link-black text-sm mr-2"><i className="fas fa-share mr-1"></i> Share</a>
                        <a href="#" className="link-black text-sm"><i className="far fa-thumbs-up mr-1"></i> Like</a>
                        <span className="float-right">
                          <a href="#" className="link-black text-sm">
                            <i className="far fa-comments mr-1"></i> Comments (5)
                          </a>
                        </span>
                      </p>

                      <input className="form-control form-control-sm" type="text" placeholder="Type a comment"/>
                    </div>
               

                
                    <div className="post clearfix">
                      <div className="user-block">
                        <img className="img-circle img-bordered-sm" src="https://tienda.elsardinero.com/wp-content/uploads/2017/09/user.png" alt="User Image"/>
                        <span className="username">
                          <a href="#">Sarah Ross</a>
                          <a href="#" className="float-right btn-tool"><i className="fas fa-times"></i></a>
                        </span>
                        <span className="description">Sent you a message - 3 days ago</span>
                      </div>
                  
                      <p>
                        Lorem ipsum represents a long-held tradition for designers,
                        typographers and the like. Some people hate it and argue for
                        its demise, but others ignore the hate as they create awesome
                        tools to help create filler text for everyone from bacon lovers
                        to Charlie Sheen fans.
                      </p>

                      <form className="form-horizontal">
                        <div className="input-group input-group-sm mb-0">
                          <input className="form-control form-control-sm" placeholder="Response"/>
                          <div className="input-group-append">
                            <button type="submit" className="btn btn-danger">Send</button>
                          </div>
                        </div>
                      </form>
                    </div>


                 
                  </div>
               
                  <div className="tab-pane" id="timeline">
                   
                    <div className="timeline timeline-inverse">
                
                      <div className="time-label">
                        <span className="bg-danger">
                          10 Feb. 2014
                        </span>
                      </div>
               
                      <div>
                        <i className="fas fa-envelope bg-primary"></i>

                        <div className="timeline-item">
                          <span className="time"><i className="far fa-clock"></i> 12:05</span>

                          <h3 className="timeline-header"><a href="#">Support Team</a> sent you an email</h3>

                          <div className="timeline-body">
                            Etsy doostang zoodles disqus groupon greplin oooj voxy zoodles,
                            weebly ning heekya handango imeem plugg dopplr jibjab, movity
                            jajah plickers sifteo edmodo ifttt zimbra. Babblely odeo kaboodle
                            quora plaxo ideeli hulu weebly balihoo...
                          </div>
                          <div className="timeline-footer">
                            <a href="#" className="btn btn-primary btn-sm">Read more</a>
                            <a href="#" className="btn btn-danger btn-sm">Delete</a>
                          </div>
                        </div>
                      </div>

                      <div>
                        <i className="fas fa-user bg-info"></i>

                        <div className="timeline-item">
                          <span className="time"><i className="far fa-clock"></i> 5 mins ago</span>

                          <h3 className="timeline-header border-0"><a href="#">Sarah Young</a> accepted your friend request
                          </h3>
                        </div>
                      </div>
        
                      <div>
                        <i className="fas fa-comments bg-warning"></i>

                        <div className="timeline-item">
                          <span className="time"><i className="far fa-clock"></i> 27 mins ago</span>

                          <h3 className="timeline-header"><a href="#">Jay White</a> commented on your post</h3>

                          <div className="timeline-body">
                            Take me to your leader!
                            Switzerland is small and neutral!
                            We are more like Germany, ambitious and misunderstood!
                          </div>
                          <div className="timeline-footer">
                            <a href="#" className="btn btn-warning btn-flat btn-sm">View comment</a>
                          </div>
                        </div>
                      </div>
                
                      <div className="time-label">
                        <span className="bg-success">
                          3 Jan. 2014
                        </span>
                      </div>
                   

                   
                      <div>
                        <i className="far fa-clock bg-gray"></i>
                      </div>
                    </div>
                  </div>
           

                  <div className="tab-pane" id="settings">
                    <form className="form-horizontal">
                      <div className="form-group row">
                        <label htmlFor="inputName" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                          <input type="email" className="form-control" id="inputName" placeholder="Name"/>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="inputEmail" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                          <input type="email" className="form-control" id="inputEmail" placeholder="Email"/>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="inputName2" className="col-sm-2 col-form-label">Name</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="inputName2" placeholder="Name"/>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="inputExperience" className="col-sm-2 col-form-label">Experience</label>
                        <div className="col-sm-10">
                          <textarea className="form-control" id="inputExperience" placeholder="Experience"></textarea>
                        </div>
                      </div>
                      <div className="form-group row">
                        <label htmlFor="inputSkills" className="col-sm-2 col-form-label">Skills</label>
                        <div className="col-sm-10">
                          <input type="text" className="form-control" id="inputSkills" placeholder="Skills"/>
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="offset-sm-2 col-sm-10">
                          <div className="checkbox">
                            <label>
                              <input type="checkbox"/> I agree to the <a href="#">terms and conditions</a>
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="form-group row">
                        <div className="offset-sm-2 col-sm-10">
                          <button type="submit" className="btn btn-danger">Submit</button>
                        </div>
                      </div>
                    </form>
                  </div>
               
                </div>
               
              </div>
            </div>
         
          </div>
         
        </div>
        </div>
    )
}

export default resumen
