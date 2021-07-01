import ReadyMessage from "./ReadyMessage";
import MessageInput from "./MessageInput";
import PropTypes from 'prop-types';

const styles = {
    panel: {
        padding: '10px',
        height: '10%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
}

/**
 * Renders panel with ready messages and entering form
 *
 * @component
 * @example
 * const title = 'Example title'
 * return (
 *   <ReadyMessage title={title} />
 *   <MessageInput />
 * )
 */


const ChatControlPanel = (props) => {
    return (

        <div style={styles.panel}>
            <ReadyMessage title="Hello" />
            <ReadyMessage title="Hi" />
            <ReadyMessage title="How are you..." />

            <MessageInput />
        </div>        
        
    )
}

ChatControlPanel.propTypes = {
    /**
    * Title of message
    */
    title: PropTypes.string.isRequired
}

export default ChatControlPanel;