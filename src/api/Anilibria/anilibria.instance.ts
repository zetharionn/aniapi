import { IAnilibria } from './anilibria.types'
import { Fetch, FetchModes } from './../../helpers'
import { Endpoints } from './constants'

export class Anilibria implements IAnilibria {
	getTitle = async (id: number) => {
		const response = await Fetch(Endpoints.TITLE + `?id=${id}`, FetchModes.JSON)
		return response
	}
}
