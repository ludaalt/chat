import { useState, useEffect  } from "react";
import Context from '../context';
import ChatControlPanel from "./ChatControlPanel";

const styles = {
    chat: {
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
    },

    messagesWrap: {
        height: '90%',
    },

    list: {
        maxHeight: '100%',
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        overflow: 'auto',
    },

    li: {
        margin: '5px 10px',
        padding: '5px 40px',
        borderRadius: '15px',
        backgroundColor: '#fff',
        opacity: '0.5', 
    }
}

/**
 * Renders List of messages
 *
 * @component
 * @example
 * const title = 'Example title'
 * return (
 *   <div>
 *      <div>
 *          <ul>
 *          </ul>
 *      </div>
 *   </div>
 * )
 */


const ChatWindow = () => {

    let [messagesList, setMessage] = useState([]);

    useEffect(() => {
        document.querySelector('ul').scrollTop = document.querySelector('ul').scrollHeight
    }, [messagesList])

    const sendMessage = (title) => {
        if(title.trim()) {           
            setMessage([...messagesList, title]) 
        }
    }     

    return (
        <Context.Provider value={{ sendMessage }}>
            <div style={styles.chat}>
                <div style={styles.messagesWrap}>
                    <ul style={styles.list}>
                        { messagesList.map((item, key) => (<li style={styles.li} key={key}>{item}</li> )) }
                    </ul>
                </div>
                <ChatControlPanel />
            </div>
        </Context.Provider>
    )
}

export default ChatWindow;