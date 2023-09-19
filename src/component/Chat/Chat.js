import React, { useEffect, useState } from 'react'
import { user } from "../Join/Join"
import socketIo from "socket.io-client";
import "./chat.css";
import sendLogo from "../../images/send.png";
import Message from "../Message/Message"
import ReactScrollToBottom from "react-scroll-to-bottom"

// import closeIcon from "../../images/closeIcon.png"


let socket;
const ENDPOINT = `http://localhost:${4500 || 8000}/`;
const Chat = () => {

    const [id, setid] = useState("");
    const [messages, setMessages] = useState([])

    const send = () => {
        const message = document.getElementById('chatInput').value;
        socket.emit('message', { message, id });
        document.getElementById('chatInput').value = "";
    }


    useEffect(() => {
        socket = socketIo(ENDPOINT, { transports: ['websocket'] });
        socket.on('connect', () => {
            // alert("connected"); //data receive
            setid(socket.id);
        })

        socket.emit('joined', { user }) //data or mssg send to backend

        // socket.on('welcome', (data) => {
        //     setMessages([...messages, data]);
        //     console.log(data.user, data.message);
        // })

        // socket.on('userJoined', (data) => {
        //     setMessages([...messages, data]);
        //     console.log( data.user, data.message);
        // })

        // socket.on('leave', (data) => {
        //     setMessages([...messages, data]);
        //     console.log(data.user, data.message);
        // })

        // socket.on('sendMessage', (data) => {
        //     setMessages([...messages, data]);
        //     console.log(messages, data);
        //     console.log(data.user, data.message, data.id);
        // })

        return () => {
            // socket.emit('dis');
            socket.close();
        }
    }, [])

    useEffect(() => {
        socket.on('sendMessage', (data) => {
            setMessages([...messages, data]);
        })
        socket.on('welcome', (data) => {
            setMessages([...messages, data]);
        })

        socket.on('userJoined', (data) => {
            setMessages([...messages, data]);
        })

        socket.on('leave', (data) => {
            setMessages([...messages, data]);
        })
        // return () => {
        //     socket.off();
        // }
    }, [messages])

    return (
        <div className='chatPage' >
            <div className="chatContainer">
                <div className="header">
                    <h1 className='heading'>Talk<span className='spann'>about</span>it</h1>
                    <a href="/"><button className='btns'>End chat</button></a>
                </div>
                <ReactScrollToBottom className="chatBox">
                    {messages.map((item, i) => <Message key={i} user={item.id === id ? '' : item.user} message={item.message} classs={item.id === id ? 'right' : 'left'} />)}
                </ReactScrollToBottom>
                <div className="inputBox">
                    <input onKeyPress={(event) => event.key === 'Enter' ? send() : null} type="text" placeholder='Type here....' id="chatInput" />
                    <button onClick={send} className="sendbtn"><img className='logoimg' src={sendLogo} alt="send" /></button>
                </div>
            </div>

        </div>
    )
}

export default Chat
