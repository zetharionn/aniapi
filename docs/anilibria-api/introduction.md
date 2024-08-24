---
layout:
  title:
    visible: true
  description:
    visible: true
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
---

# Introduction

## Create instance

I recommend create in your project `instance.ts` with following code:

```typescript
import { Anilibria } from "aniapi";

export const anilibria = new Anilibria();
```

Next, import this instance into the files where the **Anilibria API** is used and use the methods.
