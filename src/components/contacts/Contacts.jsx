import React from 'react';
import "./Contact.css";

const Contacts = () => {
  return (
    <div className='contacts borpad'>

      <div className="container">
        <h3>Contacts</h3>
        <p className='subtitle'>Fill free to write and call us. We really love to communicate with our clients.</p>

        <form onSubmit={e =>  e.preventDefault()}>
          <label>
            <p>Email</p>
            <input type="text" placeholder='Your Email' />
          </label>
          <label>
            <p>Name</p>
            <input type="text" placeholder='Your Full Name'/>
          </label>
          <label>
            <p>Phone</p>
            <input type="text" placeholder='Your Phone'/>
          </label>
          <label>
            <p>Comments</p>
            <textarea cols="30" rows="10"></textarea>
          </label>
          
          <label>
            
            <p>File</p>
            <div className="upload-btn-wrapper">
              <button className="btn upload">Upload a file</button>
              <input type="file" name="myfile" />
            </div>

            <button className='btn send'>Send</button>
          </label>

        </form>

        <div className="info">
          <h3>head office</h3>
          <p>Codital- via P.Martinetti, 10 20147 Milano-London</p>
          <p>+1 312 6459870</p>
          <p>hello@loftpineapple.com</p>
        </div>

      </div>

    </div>
  )
}

export default Contacts;