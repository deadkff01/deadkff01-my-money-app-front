import axios from 'axios'
import consts from '../consts'

const BASE_URL = consts.API_URL

/** using async function
 * export async function getSummary() {
    const request = await axios.get(`${BASE_URL}/billingCycles/summary`)
    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}
 */

export async function getSummary() {
    const request = await axios.get(`${BASE_URL}/billingCycles/summary`)
    return {
        type: 'BILLING_SUMMARY_FETCHED',
        payload: request
    }
}