import React, { useRef, useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBroomWide } from '@fortawesome/pro-light-svg-icons';
// import { faFileCirclePlus } from '@fortawesome/free-solid-svg-icons';

function Page() {
  // const fileInputRef = useRef(null);
  const [message, setMessage] = useState('');

  // const handleFileClick = () => {
  //   fileInputRef.current.click();
  // };

  const handleSend = async () => {
    const yourName = document.querySelector('.your-name').value
    const yourEmail = document.querySelector('.your-email').value
    const subject = document.querySelector('.subject-input').value;
    const toEmail = document.querySelector('.send-to').value;

    const emailData = {
      sendto: toEmail,
      name: yourName,
      replyTo: yourEmail,
      ishtml: 'false',
      title: subject,
      body: message
    };

    const options = {
      method: 'POST',
      headers: {
        'x-rapidapi-key': '30a8fbf5ccmshe82b868a3d0a85dp15f4aejsne52a84ac119b',
        'x-rapidapi-host': 'mail-sender-api1.p.rapidapi.com',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailData)
    };

    try {
      const response = await fetch('https://mail-sender-api1.p.rapidapi.com/', options);
      const result = await response.text();
      console.log(result);
      alert('Email sent Successfully!')
    } catch (error) {
      console.error(error);
      alert('Mail not sent. Try again!')
    }
  };

  const clearData = () => {
    document.querySelector('.your-name').value = '';
    document.querySelector('.your-email').value = '';
    document.querySelector('.subject-input').value = '';
    document.querySelector('.send-to').value = '';
    setMessage('');
  }

  return (
    <>
      <h1>Email Sender</h1>
      <div className="mail-composer">
        <div className="form">
          <input type="text" placeholder="Your Name" className="input your-name" />
          <input type="text" placeholder="Your Email" className="input your-email" />
          <input type="text" placeholder="Send To" className="input send-to" />
          <input type="text" placeholder="Subject" className="input subject-input" />
          <div className="clear-data">
            <button className="clear" onClick={clearData}>
              Clear
            </button>
          </div>
          <textarea
            placeholder="Message"
            className="textarea message-input"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <div className="actions">
            <button className="send-button" onClick={handleSend}>Send</button>
          </div>
        </div>
      </div>

      {/* <button onClick={clearData}>Clear Data</button> */}
    </>
  );
}

export default Page;