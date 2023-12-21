import React, { useState } from 'react';
import './App.css';
import thalaVideo from './thala.mp4';
import moyeVideo from './moye.mp4';

function VideoPage() {
  const [inputText, setInputText] = useState('');

  const playVideo = () => {
    const videoElement = document.getElementById("videoElement");
    
    // Check if the length of the input text is 7
    if (inputText.length === 7) {
      videoElement.src = thalaVideo;
      
    } else {
      videoElement.src = moyeVideo;
    }

    // Play the video
    videoElement.play();
  };
  const toggleInput = () => {
    const inputDiv = document.getElementById("inputDiv");
    
    // Check the current display value and toggle it
    inputDiv.style.display = inputDiv.style.display === 'none' ? 'block' : 'none';
  };

  return (
    <div className="App">
      <h1>Thala For Reason &#128513;</h1>
      <h3>Created By prince</h3>
      <label>Enter Some Text: &nbsp;&nbsp;&nbsp;</label>
      <input type='text' onChange={(e) => setInputText(e.target.value)} />
      <button onClick={playVideo}>Check</button>
      <br/><br/>
      <video id="videoElement" width="640" height="360" controls>
        <source src="" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <br></br>
      <button onClick={toggleInput}>Thala for Reason Rule</button>
      <p id="inputDiv" style={{ display: 'none' }}>If match String Character is 7 This is Thala For Reason</p>
    </div>
  );
}

export default VideoPage;
