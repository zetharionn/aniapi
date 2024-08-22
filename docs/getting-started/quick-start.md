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

# Quick Start

***

## Requirements

* &#x20;[Node.js ](https://nodejs.org/en)18.20.4 or later
* [PNPM](https://pnpm.io/installation)/[Yarn](https://yarnpkg.com/getting-started/install) (Optional)

***

## Installation Package

Use one of the following package managers:

{% tabs %}
{% tab title="pnpm" %}
```
pnpm add aniapi@latest
```
{% endtab %}

{% tab title="yarn" %}
```
yarn add aniapi@latest
```
{% endtab %}

{% tab title="npm" %}
```
npm install aniapi@latest
```
{% endtab %}

{% tab title="bun" %}
Coming soon...
{% endtab %}
{% endtabs %}

***

## Try it

Add to your `index.ts` / `index.js` file following code:

{% tabs %}
{% tab title="TypeScript" %}
```typescript
import { Anilibria } from "aniapi";

const anilibria = new Anilibria();
console.log(anilibria.getRandomTitle().then(res => res))
```
{% endtab %}

{% tab title="JavaScript" %}
```javascript
import { Anilibria } from "aniapi"

const anilibria = new Anilibria()
console.log(anilibria.getRandomTitle().then(res => res))
```
{% endtab %}
{% endtabs %}

***
