import { Title } from './types'

export interface IAnilibria {
	getTitle: (id: number) => Promise<Title | unknown>
	getRandomTitle: () => Promise<Title | unknown>
}
