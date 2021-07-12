import React from 'react'

const User = ({user:{id, name, email}}) => {
    return <div className='col-md-4 justify-content'>
            <div className="card" style={{width:"18rem"}}>

              <img src="https://indiaatoz.in/wp-content/uploads/2021/06/rs_1200x1200-210526093528-1200-Ryan_Reynolds-gj.jpg" 
              alt="profile" 
              className="card-img-top"/>
              <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                <p className="card-text">{email}</p>
              </div>




            </div>
        </div>;
    
};

export default User
