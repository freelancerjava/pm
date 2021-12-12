import apisauce from 'apisauce'

import config from './config'

import createRequest from './createRequest'
import Exception from './Exception'
import Routines from './routines'

// api calls
import Admin from './Admin';

const create = () => {
    const api = apisauce.create(config.apisauce)

    api.addResponseTransform(responseTransformation)
    api.addRequestTransform(requestTransformation)

    api.timeout = (delay = 3000) => {
        setTimeout(() => null, delay)
    }

    return {
        admin: Admin(api),
        setToken: (token) => {
            api.setHeader('Authorization', token)
        }

        
    }
}

const Api = create()

export {
    Api,
    createRequest,
    Exception,
    Routines
}

function requestTransformation (request) {
    // console.log('ReQ ', JSON.stringify(request))
    return request
}

function responseTransformation (response) {
    // console.log('ReS ', JSON.stringify(response, null, 2))

    if (!response.status) {
        throw response.data
    }

    if (response.status === 400) {
        if (response.data) {
            throw response.data
        }
        throw response.data
    }

    if (response.status === 403) {
        throw response.data
    }

    if (response.status === 404) {
        throw response.data
    }

    if (response.status > 499) {
        throw response.data
    }

    return response
}
