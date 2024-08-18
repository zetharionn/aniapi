import { FetchModes } from './Fetch.types'

export const Fetch = async (
	input: string,
	fetchMode: FetchModes,
	init?: RequestInit
) => {
	const response = await fetch(input, init && init)
		.then(res => {
			if (fetchMode === FetchModes.TEXT) {
				return res.text()
			}
			return res.json()
		})
		.catch(err => {
			throw new Error(err)
		})
	return response
}
