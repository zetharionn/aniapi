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
	public getTitle(params: GetAnilibriaTitleParams) {
		return getAnilibriaTitle(params)
	}
	public getRandomTitle(params: GetAnilibriaRandomTitleParams) {
		return getAnilibriaRandomTitle(params)
	}
	public getTitleList(params: GetAnilibriaTitleListParams) {
		return getAnilibriaTitleList(params)
	}
	public getSearchTitle(params: GetAnilibriaSearchTitleParams) {
		return getAnilibriaSearchTitle(params)
	}
}
