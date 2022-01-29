import React from 'react';
import Button from '../Button'


export const sendMail = () =>{
    console.log('mil');
    const subject = 'Connect with you for _________';
    let bodyData = '';
    bodyData = bodyData+'Hi Amit,\nI/We wanted to connect you for \n<<<<<<<EDIT HERE>>>>>>>\n\nBest,\n[You Name]\n[Your Email Signature]\n[Your Organisation]';
    bodyData = escape(bodyData);
    window.open(`mailto:cs.amit.v@alumni.iitm.ac.in?cc=cs.amit.v@gmail.com&subject=${subject}&body=${bodyData}`,'blank');
}

export const openLinkedIn = () => {
    console.log('heree');
    window.open('https://www.linkedin.com/in/amitvermacse/', 'blank');
}


export default function Connect() {
    return (
      <div className='connect'>
           <h5>Lets connect</h5>
          <h5>Ph: 89*0*8*2*3</h5>
          <Button  onClick={sendMail}  text = {'Click to connect via E-mail'} cName = {'btn'} />
          <h6>or mail to: </h6> <h6>cs.amit.v@alumni.iitm.ac.in </h6>  <h6>cs.amit.v@gmail.com </h6>
          <Button onClick={openLinkedIn} cName={'linkedIn'} />
      </div>
    )
}