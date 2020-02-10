import React from 'react';

const Modal = props => {
  const divStyle = {
    display: props.displayModal ? 'block' : 'none'
  };

  function displayInfo() {

    let info = {};
    switch (props.modalType) {
      case 0: //SignUp
        info = {
          title: "Sing Up",
          body: <form>
            <input type="text" className="form-control mb-3" id="exampleInputName" aria-describedby="emailHelp" placeholder="Name" />
            <input type="email" className="form-control  mb-3" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
            <input type="password" className="form-control  mb-3" id="exampleInputPassword1" placeholder="Password" />
            <div className="form-check  mb-3">
              <input type="checkbox" className="form-check-input" id="exampleCheck1" />
              <label className="form-check-label" htmlFor="exampleCheck1">I agree to  Terms of Service and Privacy Policy.</label>
            </div>
            <button type="button" className="btn btn-project-color-6  btn-lg btn-block btn-rounded" data-dismiss="modal">SING UP</button>
          </form>
        }
        
        return info;
      case 1://Login
        info = {
          title: "Log in",
          body: <form>
            <input type="email" className="form-control  mb-3" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter email" />
            <input type="password" className="form-control  mb-3" id="exampleInputPassword1" placeholder="Password" />
            <div className="d-flex mb-3">
              <div className="form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Keep me logged in</label>
              </div>
              <div className="ml-auto"><a href="#" className="pl-5">Forgot password?</a></div>
               
            </div>
            <button type="button" className="btn btn-project-color-6  btn-lg btn-block btn-rounded" data-dismiss="modal">SING UP</button>
          </form>
        }
        return info
      default:
        return null
    }
  }

  function closeModal(e) {
    e.stopPropagation()
    props.closeModal()
  }
  return (
    <div className="modal" tabIndex="-1" role="dialog" style={divStyle} >
      <div className="modal-dialog modal-dialog-centered modal-sm " role="document" >
        <div className="modal-content">
          <div className="modal-header">
            <h5 className='col-12 modal-title text-center'>
              {displayInfo().title}
              <button type='button' className='close' data-dismiss='modal' aria-label='Close' onClick={closeModal}>
                <span aria-hidden='true'>&times;</span>
              </button>
            </h5>
          </div>
          <div className="modal-body">
            {displayInfo().body}
          </div>

        </div>
      </div>
    </div>
  );
}
export default Modal;