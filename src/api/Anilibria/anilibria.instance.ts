import { IAnilibria } from './anilibria.types'
import { Fetch } from './../../helpers'
import { Endpoints } from './constants'
import { Title } from './types'

export class Anilibria implements IAnilibria {
	getTitle = (id: number) => {
		return Fetch<Title>(Endpoints.TITLE + `?id=${id}`)
	}
	getRandomTitle = () => {
		return Fetch<Title>(Endpoints.RANDOM_TITLE)
	}
}
