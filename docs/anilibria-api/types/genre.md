---
layout:
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Genre

`Genre` Interface describing the release `genres` property.

<pre class="language-typescript" data-overflow="wrap" data-line-numbers><code class="lang-typescript">import { GenreImage } from './image'

interface Genre {
	id: number
	name: string
	total_releases: number
	image: <a data-footnote-ref href="#user-content-fn-1">GenreImage</a>
}
</code></pre>

[^1]: [GenreImage Type](image.md)

    ```typescript
    type GenreImage = {
    	preview: string
    } & Omit<Image, 'src'>
    ```
