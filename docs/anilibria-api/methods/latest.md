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

# latest

The `Anilibria.latest()` is method that must accept a `limit` argument of type `number` and returns an object of type [`Release`](../types/release.md)`[]`.

## Usage

{% code overflow="wrap" lineNumbers="true" %}
```typescript
anilibria.latest({
    limit: 5
}).then(res => res)
```
{% endcode %}

## Parameters

| Parameter | Type     | Is Required |
| --------- | -------- | ----------- |
| `limit`   | `number` | `false`     |
