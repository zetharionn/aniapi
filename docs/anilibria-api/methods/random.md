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

# random

The `Anilibria.random()` is a method that optionally takes an argument `limit` of type `string | number` and returns an object of type [`Release`](../types/release.md)`[]`.

## Usage

{% code overflow="wrap" lineNumbers="true" %}
```typescript
anilibria.random({
    limit: 5
}).then(res => res)
```
{% endcode %}

## Parameters

| Parameter | Type     | Is Required |
| --------- | -------- | ----------- |
| `limit`   | `number` | `false`     |
