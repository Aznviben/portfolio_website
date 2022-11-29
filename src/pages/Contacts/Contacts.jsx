import React from 'react'
function sendEmail() 
{
    window.location = "mailto:benjamin.dinal@gmail.com";
}
const Contacts = () => {
  return (
    <section id="contact">
        <h1>Contacts</h1>
    <div className = "number">
    352 603 4770

    </div>
    <div className = "email" onclick="sendEmail();">
    <p onclick="sendEmail();">benjamin.dinal@gmail.com </p>
    </div>



    </section>
  )
}

export default Contacts
