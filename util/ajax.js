import axios from 'axios';

export default function http({ url, data, method, params, cb }) {
    if (typeof cb !== 'function') {
        throw new Error('ajax callback is not a function')
    }
    return axios({
        method: method || 'get',
        url,
        data,   // post, put, delete
        params, // get
        withCredentials: true
    }).then(data => {
        if (data.status === 200 || 304) {
            cb(data)
        } else {
            alert('ajax fail')
        }
    }).catch(err => {
        alert('network err, ', err)
    })
}