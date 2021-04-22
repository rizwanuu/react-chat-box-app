import React, { useState } from 'react'
import './styles.module.css'

export const Chatapp = () => {
  const [click, setClick] = useState(true);
  const chatbox = {
    position: "absolute",
    bottom: "30px",
    right: "30px",
  }
  const chatbox__button = {
    float: "right",
    padding: "20px 9px 9px 9px",
    height: "60px",
    width: "17%",
    background: "white",
    border: "none",
    outline: "none",
    borderRadius: "50px",
    boxShadow: "0px 10px 15px rgba(0, 0, 0, 0.1)",
    cursor: "pointer"
  }

  const chatbox__support = {
    display: "flex",
    flexDirection: "column",
    background: "#f9f9f9",
    height: "450px",
    width: "350px",
    zIndex: "-123456",
    opacity: click ? "1" : "0",
    boxShadow: "0px 0px 15px rgba(0, 0, 0, 0.1)",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px"
  }

  /* HEADER */
  const chatbox__header = {
    position: "sticky",
    top: "0",
    background: "#0042cc",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: "15px 20px",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
    boxShadow: "var(--primaryBoxShadow)",
  }

  const chatbox__image__header = {
    marginRight: "10px"
  }

  const chatbox__heading__header = {
    fontSize: "1.2rem",
    color: "white"
  }

  const chatbox__description__header = {
    fontSize: "0.9rem",
    color: "white"
  }

  /* Messages */
  const chatbox__messages = {
    padding: "0 20px",
    marginTop: "auto",
    display: "flex",
    flexDirection: "column",
    overflowY: "scroll",
    flexDirection: "column-reverse",
  }
  const messages__item = {
    marginTop: "10px",
    background: "#e0e0e0",
    padding: "8px 12px",
    maxWidth: "70%"
  }

  const messages__item__visitor = {
    marginTop: "10px",
    background: "#e0e0e0",
    padding: "8px 12px",
    maxWidth: "70%",

    // marginLeft: "auto",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
    borderBottomRightRadius: "20px",
    padding: "10px"

  }
  const messages__item__operator = {
    marginTop: "10px",
    background: "#0042cc",
    padding: "8px 12px",
    maxWidth: "70%",

    marginLeft: "auto",
    borderTopLeftRadius: "20px",
    borderTopRightRadius: "20px",
    borderBottomLeftRadius: "20px",
    color: "white",
    padding: "10px"
  }

  /* FOOTER */
  const chatbox__footer = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "20px 20px",
    background: "#0042cc",
    boxShadow: "var(--secondaryBoxShadow)",
    borderBottomRightRadius: "10px",
    borderBottomLeftRadius: "10px",
    marginTop: "20px"
  }

  const footerInput = {
    border: "none",
    outline: "none",
    padding: "10px 30px",
    borderRadius: "30px",
    textAlign: "left"
  }
  const profileImage = {
    width: "50px",
    height: "50px",
    borderRadius: "50px"
  }

  return (
    <div className="container">
      <div style={chatbox}>
        <div style={chatbox__support} >
          <div style={chatbox__header}>
            <div style={chatbox__image__header}>
              <img src="https://www.linkpicture.com/q/LPic608127b89ae97112556148.png" style={profileImage} alt="image" />
            </div>
            <div className="chatbox__content--header">
              <h4 style={chatbox__heading__header}>Chat support</h4>
              <p style={chatbox__description__header}>There are many variations of passages of Lorem Ipsum available</p>
            </div>
          </div>
          <div style={chatbox__messages}>
            <div>
              <div style={messages__item, messages__item__visitor}>
                Can you let me talk to the support?
                      </div>
              <div style={messages__item, messages__item__operator}>
                Sure!
                      </div>
              <div style={messages__item, messages__item__visitor}>
                Need your help, I need a developer in my site.
                      </div>
              <div style={messages__item, messages__item__operator}>
                Hi... What is it? I'm a front-end developer, yay!
                      </div>
              <div style={messages__item, messages__item__visitor}>
                Can you let me talk to the support?
                      </div>
              <div style={messages__item, messages__item__operator}>
                Sure!
                      </div>
              <div style={messages__item, messages__item__visitor}>
                Need your help, I need a developer in my site.
                      </div>
              <div style={messages__item, messages__item__operator}>
                Hi... What is it? I'm a front-end developer, yay!
                      </div>
              {/* <div className="messages__item messages__item--typing">
                <span className="messages__dot"></span>
                <span className="messages__dot"></span>
                <span className="messages__dot"></span>
              </div> */}
            </div>
          </div>
          <div style={chatbox__footer}>
            {/* <img src="./images/icons/emojis.svg" alt="" />
            <img src="./images/icons/microphone.svg" alt="" /> */}
            <input style={footerInput} type="text" placeholder="Write a message..." />
            <p style={{ color: "white", cursor: "pointer" }}>Send</p>
            {/* <img src="./images/icons/attachment.svg" alt="" /> */}
          </div>
        </div>
        <div style={chatbox__button} onClick={() => setClick(!click)}>
          <button style={{
            border: "none",
            outline: "none",
            background: "white"
          }}><img src="https://www.linkpicture.com/q/chatbox-icon.png"
            style={{
              width: "60%",
              cursor: "pointer"
            }}
            /></button>
        </div>
      </div>
    </div>
  )
}
