import { FetchModes } from './Fetch.types'

export const Fetch = async <T>(
	input: string,
	fetchMode: FetchModes = FetchModes.JSON,
	init?: RequestInit
): Promise<T | unknown> => {
	return await fetch(input, init).then(response => {
		return fetchMode === FetchModes.JSON ? response.json() : response.text()
	})
}
