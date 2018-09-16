import axios from 'axios'
import { toastr } from 'react-redux-toastr'
import { reset as resetForm, initialize } from 'redux-form'
import { showTabs, selectTab } from '../common/tab/tabActions'

const BASE_URL = 'http://localhost:666/api'
const INITIAL_VALUES = { credits: [{}], debts: [{}]}

export function getList() {
    const request = axios.get(`${BASE_URL}/billingCycles`)
    return {
        type: 'BILLING_CYCLES_FETCHED',
        payload: request
    }
}

export function create(values) {
   console.log(values)
   return submit(values, 'post') 
}

export function update(values) {
   return submit(values, 'put') 
}

export function remove(values) {
    return submit(values, 'delete') 
}

function submit(values, method) {
    return dispatch => {
        // verify if _id exists
        const id = values._id || ''
        axios[method](`${BASE_URL}/billingCycles/${id}`, values)
        .then(res => {
            toastr.success('Sucesso', 'Operação realizada com sucesso.')
            dispatch(init())
        })
        .catch(e => {
            console.log(e)
            e.response.data.errors.forEach(error => {
                toastr.error('Error', error)
            })
        })
    }
}


// tab handler control
export function showUpdate(billingCycle) {
    return [
        showTabs('tabUpdate'),
        selectTab('tabUpdate'),
        initialize('billingCycleForm', billingCycle)
    ]
}
// todo fazer um show tab
export function showDelete(billingCycle) {
    return [
        showTabs('tabDelete'),
        selectTab('tabDelete'),
        initialize('billingCycleForm', billingCycle)
    ]
}

export function init() {
    return [
        showTabs('tabList', 'tabCreate'),
        selectTab('tabList'),
        getList(),
        initialize('billingCycleForm', INITIAL_VALUES)
    ]
}