# Installation

### Direct Download / CDN

https://unpkg.com/vue-tingle/dist/vue-tingle

[unpkg.com](https://unpkg.com) provides NPM-based CDN links. The above link will always point to the latest release on NPM. You can also use a specific version/tag via URLs like https://unpkg.com/vue-tingle@0.0.1/dist/vue-tingle.js
 
Include vue-tingle after Vue and it will install itself automatically:

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-tingle/dist/vue-tingle.js"></script>
```

### NPM

    $ npm install vue-tingle

### Yarn

    $ yarn add vue-tingle

When used with a module system, you must explicitly install the `vue-tingle` via `Vue.use()`:

```javascript
import Vue from 'vue'
import VueTingle from 'vue-tingle'

Vue.use(VueTingle)
```

You don't need to do this when using global script tags.

### Dev Build

You will have to clone directly from GitHub and build `vue-tingle` yourself if
you want to use the latest dev build.

    $ git clone https://github.com/changjoo-park/vue-tingle.git node_modules/vue-tingle
    $ cd node_modules/vue-tingle
    $ npm install
    $ npm run build
