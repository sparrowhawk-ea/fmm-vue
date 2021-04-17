# Form Minimap Vue
Vue components for [Form Minimap](https://github.com/sparrowhawk-ea/fmmp-core).
Please consult that documentation for further information on the concepts mentioned below.

***
# Getting Started
## Installation
```bash
npm install --save @fmmp/vue
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
    import { FmmVueMinimap, FmmVuePanel } from '@fmmp/vue'
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
Component to create and manage [FmmMinimap](https://github.com/sparrowhawk-ea/fmmp-core#fmmminimap).
The minimap is detached when this component is destroyed.

Property | Type | Required
--- | --- | :---:
[aggregateLabels](https://github.com/sparrowhawk-ea/fmmp-core#mcp-aggregatelabels) | [FmmMapString](https://github.com/sparrowhawk-ea/fmmp-core#fmmmapstring)
[anchor](https://github.com/sparrowhawk-ea/fmmp-core#mcp-anchor) | HTMLElement
[customWidgetIds](https://github.com/sparrowhawk-ea/fmmp-core#mm-compose-customwidgetids) | string[]
[debounceMsec](https://github.com/sparrowhawk-ea/fmmp-core#mcp-debouncemsec) | Number
[dynamicLabels](https://github.com/sparrowhawk-ea/fmmp-core#mcp-dynamiclabels) | string[]
[framework](https://github.com/sparrowhawk-ea/fmmp-core#mcp-framework) | [FmmFramework](https://github.com/sparrowhawk-ea/fmmp-core#fmmframework)
[page](https://github.com/sparrowhawk-ea/fmmp-core#mcp-page) | HTMLElement
panel | [FmmVuePanel](#fmmvuepanel) | &check;
[store](https://github.com/sparrowhawk-ea/fmmp-core#mcp-store) | [FmmVueStore](#fmmvuestore)
[title](https://github.com/sparrowhawk-ea/fmmp-core#mcp-title) | String | &check;
[usePanelDetail](https://github.com/sparrowhawk-ea/fmmp-core#mcp-usepaneldetail) | Boolean
[useWidthToScale](https://github.com/sparrowhawk-ea/fmmp-core#mcp-usewidthtoscale) | Boolean
[verbosity](https://github.com/sparrowhawk-ea/fmmp-core#mcp-verbosity) | Number
[widgetFactories](https://github.com/sparrowhawk-ea/fmmp-core#mcp-widgetfactories) | [FmmWidgetFactory](https://github.com/sparrowhawk-ea/fmmp-core#fmmwidgetfactory)[]

Event | Parameter | Description
--- | --- | ---
update | [FmmMinimapSnapshot](https://github.com/sparrowhawk-ea/fmmp-core#fmmminimapsnapshot) | Dispatched when the minimap updates itself for whatever reason.

| Method
| ---
| [destructor](https://github.com/sparrowhawk-ea/fmmp-core#mm-destructor)
| [takeSnapshot](https://github.com/sparrowhawk-ea/fmmp-core#mm-takesnapshot)

***
## FmmVuePanel
Component to create and manage [FmmPanel](https://github.com/sparrowhawk-ea/fmmp-core#fmmmpanel).

Property | Type | Required
--- | --- | :---:
[detailParent](https://github.com/sparrowhawk-ea/fmmp-core#pcp-detailparent) | HTMLDivElement | &check;
[vertical](https://github.com/sparrowhawk-ea/fmmp-core#pcp-vertical) | boolean

| Method
| ---
| [destroyDetached](https://github.com/sparrowhawk-ea/fmmp-core#pm-destroydetached)

***
## FmmVueStore
Component to create [FmmStore](https://github.com/sparrowhawk-ea/fmmp-core#fmmstore).

Property | Type | Required
--- | --- | :---:
[errors](https://github.com/sparrowhawk-ea/fmmp-core#scp-errors) | [FmmMapErrors](https://github.com/sparrowhawk-ea/fmmp-core#fmmmaperrors)
[values](https://github.com/sparrowhawk-ea/fmmp-core#scp-values) | [FmmMapValues](https://github.com/sparrowhawk-ea/fmmp-core#fmmmapvalues) | &check;

***
## FmmVuex
Component to create [FmmStore](https://github.com/sparrowhawk-ea/fmmp-core#fmmstore) when using Vuex.

Property | Type | Required
--- | --- | :---:
[errors](https://github.com/sparrowhawk-ea/fmmp-core#scp-errors) | [FmmMapErrors](https://github.com/sparrowhawk-ea/fmmp-core#fmmmaperrors)
