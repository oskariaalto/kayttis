import { createContext, useState } from "react";
import PropTypes from 'prop-types';



export const DataContext = createContext({
    messages: [],
    setMessages: () => {},
    hints: [],
    setHints: () => {},
    courseId: null,
    setCourseId: () => {},
    user: null,
    setUser: () => {},
});


export const DataProvider = ({ children }) => {
    const [messages, setMessages] = useState([])
    const [hints, setHints] = useState([])
    const [courseId, setCourseId] = useState(null)
    const [user, setUser] = useState(null)

    return (
        <DataContext.Provider value={{ messages, setMessages, hints, setHints, courseId, setCourseId, user, setUser }}>
            {children}
        </DataContext.Provider>
    )
}

DataProvider.propTypes = {
    children: PropTypes.node.isRequired,
};