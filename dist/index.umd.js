(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue'), require('@eafmm/core')) :
    typeof define === 'function' && define.amd ? define(['exports', 'vue', '@eafmm/core'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.sayHello = {}, global.vue, global.core));
})(this, (function (exports, vue, core) { 'use strict';

    const FmmVueMinimap = vue.defineComponent({
        methods: {
            destructor() {
                var _a;
                return (_a = G.MINIMAPS.get(this)) === null || _a === void 0 ? void 0 : _a.destructor();
            },
            takeSnapshot() {
                var _a;
                return (_a = G.MINIMAPS.get(this)) === null || _a === void 0 ? void 0 : _a.takeSnapshot();
            }
        },
        mounted() {
            var _a, _b;
            if (Object.keys(this.$slots).length)
                throw new Error('FmmVueMinimap is a contentless tag');
            let form = (_a = this.$el) === null || _a === void 0 ? void 0 : _a.parentElement;
            while (form && form.tagName !== 'FORM')
                form = form.parentElement;
            if (!form)
                throw new Error('FmmVueMinimap must be used inside a FORM tag');
            const fmcp = {
                aggregateLabels: this.aggregateLabels,
                anchor: this.anchor,
                debounceMsec: this.debounceMsec,
                dynamicLabels: this.dynamicLabels,
                form: new core.FmmFormHTML(form, this.page),
                framework: this.framework,
                onUpdate: (snapshot) => this.$emit('update', snapshot),
                store: this.store,
                title: this.title,
                usePanelDetail: this.usePanelDetail,
                useWidthToScale: this.useWidthToScale,
                verbosity: this.verbosity,
                zoomFactor: this.zoomFactor
            };
            const minimap = this.panel ? (_b = G.PANELS.get(this.panel)) === null || _b === void 0 ? void 0 : _b.createMinimap(fmcp) : core.Fmm.createMinimap(fmcp, this.parent);
            if (!minimap)
                return;
            G.MINIMAPS.set(this, minimap);
            minimap.compose(this.customElementIds);
            this.$watch('customElementIds', (ids) => minimap.compose(ids));
        },
        name: 'FmmVueMinimap',
        props: {
            aggregateLabels: Object,
            anchor: HTMLDivElement,
            customElementIds: Array,
            debounceMsec: Number,
            dynamicLabels: Array,
            framework: Object,
            page: HTMLDivElement,
            panel: {
                type: Object,
                validator: (value) => value.$options.name === 'FmmVuePanel'
            },
            parent: HTMLDivElement,
            store: Object,
            title: {
                required: true,
                type: String,
                validator: (value) => (value === null || value === void 0 ? void 0 : value.trim().length) > 0
            },
            usePanelDetail: Boolean,
            useWidthToScale: Boolean,
            verbosity: Number,
            zoomFactor: Number
        },
        render: () => vue.h('div'),
        unmounted() {
            const minimap = G.MINIMAPS.get(this);
            if (minimap)
                minimap.detach();
            G.MINIMAPS.delete(this);
        },
        updated() {
            this.$nextTick(() => { var _a; return (_a = G.MINIMAPS.get(this)) === null || _a === void 0 ? void 0 : _a.takeSnapshot(); });
        }
    });
    const FmmVuePanel = vue.defineComponent({
        methods: {
            destroyDetached() {
                const panel = G.PANELS.get(this);
                if (panel)
                    panel.destroyDetached();
            }
        },
        mounted() {
            if (Object.keys(this.$slots).length)
                throw new Error('FmmVuePanel is a contentless tag');
            G.PANELS.set(this, core.Fmm.createPanel(this.$el, this.detailParent, this.vertical));
        },
        name: 'FmmVuePanel',
        props: {
            detailParent: HTMLDivElement,
            vertical: Boolean
        },
        render: () => vue.h('div', { class: 'fmm-panel' }, [
            vue.h('style', {
                tag: 'component',
                attrs: { type: 'text/css' }
            }, core.Fmm.CSS)
        ]),
        unmounted() {
            const panel = G.PANELS.get(this);
            if (panel)
                panel.destructor();
            G.PANELS.delete(this);
        }
    });
    const FmmVueStore = vue.defineComponent({
        data() {
            return {
                store: undefined
            };
        },
        emits: ['store'],
        mounted() {
            if (Object.keys(this.$slots).length)
                throw new Error('FmmVueStore is a contentless tag');
            this.$emit('store', (this.store = new core.FmmStoreImpl(this.values, this.errors)));
        },
        name: 'FmmVueStore',
        props: {
            errors: Object,
            values: {
                required: true,
                type: Object
            }
        },
        render() {
            return null;
        },
        watch: {
            errors: function () {
                this.store.update(this.values, this.errors);
            },
            values: function () {
                this.store.update(this.values, this.errors);
            }
        }
    });
    const FmmVuex = vue.defineComponent({
        data() {
            return {
                $store: undefined,
                unsubscribeToStore: undefined,
                store: undefined
            };
        },
        emits: ['store'],
        mounted() {
            if (Object.keys(this.$slots).length)
                throw new Error('FmmVuex is a contentless tag');
            this.$emit('store', (this.store = new core.FmmStoreImpl(this.$store.state, this.errors)));
            this.unsubscribeToStore = this.$store.subscribe((_, state) => this.store.update(state, this.errors));
        },
        name: 'FmmVuex',
        props: {
            errors: Object
        },
        render() {
            return null;
        },
        unmounted() {
            this.unsubscribeToStore();
        },
        watch: {
            errors: function () {
                this.store.update(this.$store.state, this.errors);
            }
        }
    });
    const G = {
        MINIMAPS: new WeakMap(),
        PANELS: new WeakMap()
    };

    const FmmVuetify = {
        createFrameworkItem(_, e) {
            var _a;
            return ((_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.classList.contains('v-select__selections')) ? new FrameworkItemSelect(e) : new FrameworkItem(e);
        }
    };
    class FrameworkItem {
        constructor(e) {
            const isRadio = e.tagName === 'INPUT' && e.type === 'radio';
            let tag = e.parentElement;
            const envelopeClass = isRadio ? 'v-radio' : 'v-input';
            while (tag && !tag.classList.contains(envelopeClass))
                tag = tag.parentElement;
            if (!tag) {
                this.envelope = this.forValidation = e;
            }
            else {
                this.envelope = tag;
                const labels = tag.querySelectorAll('LABEL');
                if (labels.length === 1)
                    this.label = labels[0];
                if (isRadio) {
                    while (tag && !tag.classList.contains('v-input--radio-group'))
                        tag = tag.parentElement;
                }
                this.forValidation = tag || this.envelope;
            }
        }
        destructor() {
        }
        getEnvelope(_, _e, _l) {
            return this.envelope;
        }
        getError(_, _e, _n, _v) {
            var _a;
            return ((_a = this.forValidation.querySelector('DIV.v-messages__message')) === null || _a === void 0 ? void 0 : _a.textContent) || '';
        }
        getLabel(_, _e) {
            return this.label;
        }
        getValue(_, _e, _n, _l) {
            return '';
        }
    }
    class FrameworkItemSelect extends FrameworkItem {
        getValue(_, e, _n, _l) {
            var _a;
            return ((_a = e.parentElement) === null || _a === void 0 ? void 0 : _a.textContent) || '';
        }
    }

    exports.FmmVueMinimap = FmmVueMinimap;
    exports.FmmVuePanel = FmmVuePanel;
    exports.FmmVueStore = FmmVueStore;
    exports.FmmVuetify = FmmVuetify;
    exports.FmmVuex = FmmVuex;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
