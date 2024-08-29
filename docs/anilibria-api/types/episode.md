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

# Episode

`Episode` Interface describing the release `episodes` property.

<pre class="language-typescript" data-overflow="wrap" data-line-numbers><code class="lang-typescript">interface Episode {
	id: string
	name: string
	ordinal: number
	opening: <a data-footnote-ref href="#user-content-fn-1">Timing</a>
	ending: <a data-footnote-ref href="#user-content-fn-2">Timing</a>
	preview: <a data-footnote-ref href="#user-content-fn-3">Image</a>
	hls_480: string
	hls_720: string
	hls_1080: string
	duration: number
	updated_at: string
	sort_order: number
	name_english: string
}
</code></pre>

[^1]: [Timing Interface](timing.md)

    ```typescript
    interface Timing {
    	start: number
    	stop: number
    }
    ```

[^2]: [Timing Interface](timing.md)

    ```typescript
    interface Timing {
    	start: number
    	stop: number
    }
    ```

[^3]: [Image Interface](image.md)

    ```typescript
    interface Image {
    	src: string
    	thumbnail: string
    	optimized: Omit<Image, 'optimized'>
    }
    ```
