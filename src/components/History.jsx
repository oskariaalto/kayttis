import CardBody from "./ui/cards/CardBody"
import CardTitle from "./ui/cards/CardTitle"
import Card from "./ui/cards/Card"
import PropTypes from 'prop-types'

const History = ({ course, setCourse, exercise, setExercise,
    messages, setMessages, QuestionState, setQuestionState, history, setHistory, setChatView, chatId, setChatId }) => {
    
    const setChat = (chat) => {
        if (history.map(oldChat => oldChat.id).includes(chatId)) {
            const updatedObject = {
                exercise: exercise,
                course: course,
                messages: messages,
                QuestionState: QuestionState,
                id: chatId
            }
            setHistory(history.filter(oldChat => oldChat.id !== chatId).concat(updatedObject))
        }
        else if (messages.length !== 0) {
            const newObject = {
                exercise: exercise,
                course: course,
                messages: messages,
                QuestionState: QuestionState,
                id: history.length + 1
            }
            setHistory(history.concat(newObject))
        }
        setMessages(chat.messages)
        setCourse(chat.course)
        setExercise(chat.exercise)
        setQuestionState(chat.QuestionState)
        setChatId(chat.id)
        setChatView()
    }

    return (
        <Card>
            <div className='flex h-1/5 w-full'>
                <div className='flex justify-center p-1 h-full w-full'>
                    <CardTitle cardstyle='primary' >History</CardTitle>
                </div>
            </div>
            {history.length === 0 ? null :
                <div className='p-1 h-4/5 w-full'>
                    <div className="p-1 flex w-full h-full max-h-96 overflow-y-auto">
                        <CardBody>
                            {history.map(chat => {
                                console.log(chat)
                                return (
                                    <div key={chat.id} className={"flex justify-center h-1/5 w-7/8 p-1"}>
                                        <div className={"h-full w-4/5"}>
                                            {chat.messages[0].text}
                                        </div>
                                        <div className={"h-full w-1/5"}>
                                            <button onClick={() => setChat(chat)}>Open</button>
                                        </div>
                                    </div>
                                )
                            }
                            )}
                        </CardBody>
                    </div>
                </div>}
        </Card>
    )
}

History.propTypes = {
    course: PropTypes.object.isRequired,
    setCourse: PropTypes.func.isRequired,
    exercise: PropTypes.object.isRequired,
    setExercise: PropTypes.func.isRequired,
    messages: PropTypes.array.isRequired,
    setMessages: PropTypes.func.isRequired,
    QuestionState: PropTypes.number.isRequired,
    setQuestionState: PropTypes.func.isRequired,
    history: PropTypes.array.isRequired,
    setHistory: PropTypes.func.isRequired,
    setChatView: PropTypes.func.isRequired,
    chatId: PropTypes.number.isRequired,
    setChatId: PropTypes.func.isRequired
}

export default History