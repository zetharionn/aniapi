import { IAnilibria } from './anilibria.types'
import {
	getAnilibriaRandomTitle,
	GetAnilibriaRandomTitleParams
} from './methods/getAnilibriaRandomTitle'
import {
	getAnilibriaTitle,
	GetAnilibriaTitleParams
} from './methods/getAnilibriaTitle'

export class Anilibria implements IAnilibria {
	getTitle(params: GetAnilibriaTitleParams) {
		return getAnilibriaTitle(params)
	}
	getRandomTitle(params: GetAnilibriaRandomTitleParams) {
		return getAnilibriaRandomTitle(params)
	}
}
