# Image

`Image` Interface describing the release `image` property.

{% code overflow="wrap" lineNumbers="true" %}
```typescript
interface Image {
	src: string
	thumbnail: string
	optimized: {
		src: string
		thumbnail: string
	}
}
```
{% endcode %}
