import { IAnilibria } from './anilibria.types'
import {
	getAnilibriaRandomTitle,
	GetAnilibriaRandomTitleParams
} from './methods/getAnilibriaRandomTitle'
import {
	getAnilibriaSearchTitle,
	GetAnilibriaSearchTitleParams
} from './methods/getAnilibriaSearchTitle'
import {
	getAnilibriaTitle,
	GetAnilibriaTitleParams
} from './methods/getAnilibriaTitle'
import {
	getAnilibriaTitleList,
	GetAnilibriaTitleListParams
} from './methods/getAnilibriaTitleList'

export class Anilibria implements IAnilibria {
	getTitle(params: GetAnilibriaTitleParams) {
		return getAnilibriaTitle(params)
	}
	getRandomTitle(params?: GetAnilibriaRandomTitleParams) {
		return getAnilibriaRandomTitle(params)
	}
	getTitleList(params: GetAnilibriaTitleListParams) {
		return getAnilibriaTitleList(params)
	}
	getSearchTitle(params: GetAnilibriaSearchTitleParams) {
		return getAnilibriaSearchTitle(params)
	}
}
