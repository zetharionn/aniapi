import { FetchModes } from './Fetch.types'

export const Fetch = async <T>(
	input: string,
	fetchMode: FetchModes,
	init?: RequestInit
): Promise<T> => {
	return await fetch(input, init && init)
		.then(response => {
			return fetchMode === FetchModes.JSON
				? (response.json() as Promise<T>)
				: (response.text() as Promise<T>)
		})
		.catch(err => {
			throw new Error(err)
		})
}
