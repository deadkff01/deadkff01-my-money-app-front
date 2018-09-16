import axios from 'axios'
const BASE_URL = 'http://localhost:666/api'

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