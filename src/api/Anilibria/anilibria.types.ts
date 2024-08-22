import { GetAnilibriaRandomTitleParams } from './methods/getAnilibriaRandomTitle'
import { GetAnilibriaTitleParams } from './methods/getAnilibriaTitle'
import { GetAnilibriaTitleListParams } from './methods/getAnilibriaTitleList'
import { Title, Titles } from './types'
import { GetAnilibriaSearchTitleParams } from './methods/getAnilibriaSearchTitle/getAnilibriaSearchTitle.types'

export interface IAnilibria {
	getTitle: (params?: GetAnilibriaTitleParams) => Promise<Title>
	getRandomTitle: (params?: GetAnilibriaRandomTitleParams) => Promise<Title>
	getTitleList: (params?: GetAnilibriaTitleListParams) => Promise<Titles>
	getSearchTitle: (params?: GetAnilibriaSearchTitleParams) => Promise<Titles>
}
