# Form Minimap Vue
Vue components for [Form Minimap](https://github.com/sparrowhawk-ea/fmm-core).
Please consult that documentation for further information on the concepts mentioned below.

***
# Getting Started
## Installation
```bash
npm install --save @eafmm/vue
```

## Adding Form Minimap
Before
```html
<script>
    export default {
        name: 'App'
    }
</script>

<template>
    <div id="app">
        <form>
            <input id="Input1"/><br/>
            <input id="Input2"/><br/>
            <input id="Input3"/><br/>
            <input id="Input4"/>
        </form>
    </div>
</template>
```
After
```html
<script>
    import { FmmVueMinimap, FmmVuePanel } from '@eafmm/vue'
    export default {
        name: 'App',
        components: {
            FmmVueMinimap,
            FmmVuePanel
        },
        data: () => ({
            refPanel: undefined
        }),
        mounted() {
            this.refPanel = this.$refs.panel;
        }
    }
</script>

<style>
    .fmm-frame { height: 50px; }
    .fmm-panel { height: 0; }
</style>

<template>
    <div id="app">
        <div ref='anchor' style='width:20px; height:20px; margin-left:200px'></div>
        <FmmVuePanel ref='panel'/>
        <form>
            <FmmVueMinimap v-if='refPanel' :anchor='this.$refs.anchor' :panel='refPanel' title='Title'/>
            <input id="Input1"/><br/>
            <input id="Input2"/><br/>
            <input id="Input3"/><br/>
            <input id="Input4"/>
        </form>
    </div>
</template>
```

***
# API
## FmmVueMinimap
Component to create and manage [FmmMinimap](https://github.com/sparrowhawk-ea/fmm-core#fmmminimap).
The minimap is detached when this component is destroyed.

Property | Type | Required
--- | --- | :---:
[aggregateLabels](https://github.com/sparrowhawk-ea/fmm-core#mcp-aggregatelabels) | [FmmMapString](https://github.com/sparrowhawk-ea/fmm-core#fmmmapstring)
[anchor](https://github.com/sparrowhawk-ea/fmm-core#mcp-anchor) | HTMLElement
[customWidgetIds](https://github.com/sparrowhawk-ea/fmm-core#mm-compose-customwidgetids) | string[]
[debounceMsec](https://github.com/sparrowhawk-ea/fmm-core#mcp-debouncemsec) | Number
[dynamicLabels](https://github.com/sparrowhawk-ea/fmm-core#mcp-dynamiclabels) | string[]
[framework](https://github.com/sparrowhawk-ea/fmm-core#mcp-framework) | [FmmFramework](https://github.com/sparrowhawk-ea/fmm-core#fmmframework)
[page](https://github.com/sparrowhawk-ea/fmm-core#mcp-page) | HTMLElement
panel | [FmmVuePanel](#fmmvuepanel) | &check;
[store](https://github.com/sparrowhawk-ea/fmm-core#mcp-store) | [FmmVueStore](#fmmvuestore)
[title](https://github.com/sparrowhawk-ea/fmm-core#mcp-title) | String | &check;
[usePanelDetail](https://github.com/sparrowhawk-ea/fmm-core#mcp-usepaneldetail) | Boolean
[useWidthToScale](https://github.com/sparrowhawk-ea/fmm-core#mcp-usewidthtoscale) | Boolean
[verbosity](https://github.com/sparrowhawk-ea/fmm-core#mcp-verbosity) | Number
[widgetFactories](https://github.com/sparrowhawk-ea/fmm-core#mcp-widgetfactories) | [FmmWidgetFactory](https://github.com/sparrowhawk-ea/fmm-core#fmmwidgetfactory)[]

Event | Parameter | Description
--- | --- | ---
update | [FmmMinimapSnapshot](https://github.com/sparrowhawk-ea/fmm-core#fmmminimapsnapshot) | Dispatched when the minimap updates itself for whatever reason.

| Method
| ---
| [destructor](https://github.com/sparrowhawk-ea/fmm-core#mm-destructor)
| [takeSnapshot](https://github.com/sparrowhawk-ea/fmm-core#mm-takesnapshot)

***
## FmmVuePanel
Component to create and manage [FmmPanel](https://github.com/sparrowhawk-ea/fmm-core#fmmpanel).

Property | Type | Required
--- | --- | :---:
[detailParent](https://github.com/sparrowhawk-ea/fmm-core#pcp-detailparent) | HTMLDivElements
[vertical](https://github.com/sparrowhawk-ea/fmm-core#pcp-vertical) | boolean

| Method
| ---
| [destroyDetached](https://github.com/sparrowhawk-ea/fmm-core#pm-destroydetached)

***
## FmmVueStore
Component to create [FmmStore](https://github.com/sparrowhawk-ea/fmm-core#fmmstore).

Property | Type | Required
--- | --- | :---:
[errors](https://github.com/sparrowhawk-ea/fmm-core#scp-errors) | [FmmMapErrors](https://github.com/sparrowhawk-ea/fmm-core#fmmmaperrors)
[values](https://github.com/sparrowhawk-ea/fmm-core#scp-values) | [FmmMapValues](https://github.com/sparrowhawk-ea/fmm-core#fmmmapvalues) | &check;

***
## FmmVuex
Component to create [FmmStore](https://github.com/sparrowhawk-ea/fmm-core#fmmstore) when using Vuex.

Property | Type | Required
--- | --- | :---:
[errors](https://github.com/sparrowhawk-ea/fmm-core#scp-errors) | [FmmMapErrors](https://github.com/sparrowhawk-ea/fmm-core#fmmmaperrors)
