import axios from 'axios';

const getFeedback = () => {
    return axios({
        method: 'GET',
        url: '/feedback'
    })
}

const addFeedback = (feedbackObject) => {
    return axios.post('/feedback', feedbackObject);
}

const deleteFeedback = (dataId) => {
    return axios.delete(`/feedback/${dataId}`)
}

export {
    getFeedback,
    addFeedback,
    deleteFeedback,
}