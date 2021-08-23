# Form Minimap Vue
Vue components for [Form Minimap](https://www.npmjs.com/package/@eafmm/core).
Please consult that documentation for further information on the concepts mentioned below.

***
# Getting Started
## Installation
```bash
npm install --save @eafmm/vue
```

## Adding Form Minimap
The code sample below shows the lines added to a simple form to add a minimap (M) or a minimap with panel (P)
```html
        <script>
M           import { FmmVueMinimap } from '@eafmm/vue'
  P         import { FmmVueMinimap, FmmVuePanel } from '@eafmm/vue'
            export default {
                name: 'App',
M P             components: {
M P                 FmmVueMinimap,
  P                 FmmVuePanel
M P             },
  P             data: () => ({
  P                 refPanel: undefined
  P             }),
  P             mounted() {
  P                 this.refPanel = this.$refs.panel;
  P             }
            }
        </script>

M P     <style>
M P         .fmm-frame { height: 50px; }
  P         .fmm-panel { height: 0; }
M P     </style>

        <template>
            <div id="app">
M               <div ref='parent' style='width:70px; height:50px; margin-left:200px'></div>
  P             <div ref='anchor' style='width:20px; height:20px; margin-left:200px'></div>
  P             <FmmVuePanel ref='panel'/>
                <form>
M                   <FmmVueMinimap :parent='this.$refs.parent' title='Title'/>
  P                 <FmmVueMinimap v-if='refPanel' :anchor='this.$refs.anchor' :panel='refPanel' title='Title'/>
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
Component to create and manage [FmmMinimap](https://www.npmjs.com/package/@eafmm/core#fmmminimap).
The minimap is detached when this component is unmounted.
For minimaps in a panel, use the panelproperty; otherwise use the parent property to show an always-visible minimap, or anchor for a popup minimap.

Property | Type | Required
--- | --- | :---:
[aggregateLabels](https://www.npmjs.com/package/@eafmm/core#mcp-aggregatelabels) | [FmmMapString](https://www.npmjs.com/package/@eafmm/core#fmmmapstring)
[anchor](https://www.npmjs.com/package/@eafmm/core#mcp-anchor) | HTMLElement
[customElementIds](https://www.npmjs.com/package/@eafmm/core#mm-compose-customelementids) | string[]
[debounceMsec](https://www.npmjs.com/package/@eafmm/core#mcp-debouncemsec) | Number
[dynamicLabels](https://www.npmjs.com/package/@eafmm/core#mcp-dynamiclabels) | string[]
[framework](https://www.npmjs.com/package/@eafmm/core#mcp-framework) | [FmmFramework](https://www.npmjs.com/package/@eafmm/core#fmmframework)
[page](https://www.npmjs.com/package/@eafmm/core#fmmform-page) | HTMLElement
panel | [FmmVuePanel](#fmmvuepanel)
[parent](https://www.npmjs.com/package/@eafmm/core#pcm-parent) | HTMLElement
[store](https://www.npmjs.com/package/@eafmm/core#mcp-store) | [FmmVueStore](#fmmvuestore)
[title](https://www.npmjs.com/package/@eafmm/core#mcp-title) | String | &check;
[usePanelDetail](https://www.npmjs.com/package/@eafmm/core#mcp-usepaneldetail) | Boolean
[useWidthToScale](https://www.npmjs.com/package/@eafmm/core#mcp-usewidthtoscale) | Boolean
[verbosity](https://www.npmjs.com/package/@eafmm/core#mcp-verbosity) | Number
[zoomFactor](https://www.npmjs.com/package/@eafmm/core#mcp-zoomfactor) | Number

Event | Parameter | Description
--- | --- | ---
update | [FmmMinimapSnapshot](https://www.npmjs.com/package/@eafmm/core#fmmminimapsnapshot) | Dispatched when the minimap updates itself for whatever reason.

| Method
| ---
| [destructor](https://www.npmjs.com/package/@eafmm/core#mm-destructor)
| [takeSnapshot](https://www.npmjs.com/package/@eafmm/core#mm-takesnapshot)

***
## FmmVuePanel
Component to create and manage [FmmPanel](https://www.npmjs.com/package/@eafmm/core#fmmpanel).

Property | Type | Required
--- | --- | :---:
[detailParent](https://www.npmjs.com/package/@eafmm/core#pcp-detailparent) | HTMLDivElements
[vertical](https://www.npmjs.com/package/@eafmm/core#pcp-vertical) | boolean

| Method
| ---
| [destroyDetached](https://www.npmjs.com/package/@eafmm/core#pm-destroydetached)

***
## FmmVueStore
Component to create [FmmStore](https://www.npmjs.com/package/@eafmm/core#fmmstore).

Property | Type | Required
--- | --- | :---:
[errors](https://www.npmjs.com/package/@eafmm/core#scp-errors) | [FmmMapErrors](https://www.npmjs.com/package/@eafmm/core#fmmmaperrors)
[values](https://www.npmjs.com/package/@eafmm/core#scp-values) | [FmmMapValues](https://www.npmjs.com/package/@eafmm/core#fmmmapvalues) | &check;

***
## FmmVuex
Component to create [FmmStore](https://www.npmjs.com/package/@eafmm/core#fmmstore) when using Vuex.

Property | Type | Required
--- | --- | :---:
[errors](https://www.npmjs.com/package/@eafmm/core#scp-errors) | [FmmMapErrors](https://www.npmjs.com/package/@eafmm/core#fmmmaperrors)
