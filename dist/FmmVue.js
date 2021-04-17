import Vue from 'vue';
import { Fmm, FmmMapStore } from '@eafmm/core';
// =================================================================================================================================
//						F M M V U E M I N I M A P
// =================================================================================================================================
export var FmmVueMinimap = Vue.extend({
    // =============================================================================================================================
    destroyed: function () {
        var minimap = G.MINIMAPS.get(this);
        if (minimap)
            minimap.detach();
        G.MINIMAPS.delete(this);
    },
    // =============================================================================================================================
    methods: {
        destructor: function () {
            var _a;
            return (_a = G.MINIMAPS.get(this)) === null || _a === void 0 ? void 0 : _a.destructor();
        },
        takeSnapshot: function () {
            var _a;
            return (_a = G.MINIMAPS.get(this)) === null || _a === void 0 ? void 0 : _a.takeSnapshot();
        }
    },
    // =============================================================================================================================
    mounted: function () {
        var _this = this;
        var _a, _b;
        if (Object.keys(this.$scopedSlots).length)
            throw new Error('FmmVueMinimap is a contentless tag');
        var form = (_a = this.$el) === null || _a === void 0 ? void 0 : _a.parentElement;
        while (form && form.tagName !== 'FORM')
            form = form.parentElement;
        if (!form)
            throw new Error('FmmVueMinimap must be used inside a FORM tag');
        var fmcp = {
            aggregateLabels: this.aggregateLabels,
            anchor: this.anchor,
            debounceMsec: this.debounceMsec,
            dynamicLabels: this.dynamicLabels,
            form: form,
            framework: this.framework,
            onUpdate: function (snapshot) { return _this.$emit('update', snapshot); },
            page: this.page,
            store: this.store,
            title: this.title,
            usePanelDetail: this.usePanelDetail,
            useWidthToScale: this.useWidthToScale,
            verbosity: this.verbosity,
            widgetFactories: this.widgetFactories
        };
        var minimap = (_b = G.PANELS.get(this.panel)) === null || _b === void 0 ? void 0 : _b.createMinimap(fmcp);
        if (!minimap)
            return;
        G.MINIMAPS.set(this, minimap);
        minimap.compose(this.customWidgetIds);
        this.$watch('customWidgetIds', function (ids) { return minimap.compose(ids); });
    },
    // =============================================================================================================================
    name: 'FmmVueMinimap',
    // =============================================================================================================================
    props: {
        aggregateLabels: Object,
        anchor: HTMLElement,
        customWidgetIds: Array,
        debounceMsec: Number,
        dynamicLabels: Array,
        framework: Object,
        page: HTMLElement,
        panel: {
            required: true,
            type: Object,
            validator: function (value) { return value.$options.name === 'FmmVuePanel'; }
        },
        store: Object,
        title: {
            required: true,
            type: String,
            validator: function (value) { return (value === null || value === void 0 ? void 0 : value.trim().length) > 0; }
        },
        usePanelDetail: Boolean,
        useWidthToScale: Boolean,
        verbosity: Number,
        widgetFactories: Array
    },
    // =============================================================================================================================
    render: function (ce) { return ce('div'); },
    // =============================================================================================================================
    updated: function () {
        var _this = this;
        this.$nextTick(function () { var _a; return (_a = G.MINIMAPS.get(_this)) === null || _a === void 0 ? void 0 : _a.takeSnapshot(); });
    }
});
// =================================================================================================================================
//						F M M V U E P A N E L
// =================================================================================================================================
export var FmmVuePanel = Vue.extend({
    // =============================================================================================================================
    destroyed: function () {
        var panel = G.PANELS.get(this);
        if (panel)
            panel.destructor();
        G.PANELS.delete(this);
    },
    // =============================================================================================================================
    methods: {
        destroyDetached: function () {
            var panel = G.PANELS.get(this);
            if (panel)
                panel.destroyDetached();
        }
    },
    // =============================================================================================================================
    mounted: function () {
        if (Object.keys(this.$scopedSlots).length)
            throw new Error('FmmVuePanel is a contentless tag');
        G.PANELS.set(this, Fmm.createPanel(undefined, this.$el, this.detailParent, this.vertical));
    },
    // =============================================================================================================================
    name: 'FmmVuePanel',
    // =============================================================================================================================
    props: {
        detailParent: HTMLDivElement,
        vertical: Boolean
    },
    // =============================================================================================================================
    render: function (ce) {
        return ce('div', { staticClass: 'fmm-panel' }, [
            ce('style', {
                tag: 'component',
                attrs: { type: 'text/css' }
            }, Fmm.CSS)
        ]);
    }
});
// =================================================================================================================================
//						F M M V U E S T O R E
// =================================================================================================================================
export var FmmVueStore = Vue.extend({
    // =============================================================================================================================
    data: function () {
        return {
            store: undefined
        };
    },
    // =============================================================================================================================
    mounted: function () {
        if (Object.keys(this.$scopedSlots).length)
            throw new Error('FmmVueStore is a contentless tag');
        this.$emit('store', (this.store = new FmmMapStore(this.values, this.errors)));
    },
    // =============================================================================================================================
    name: 'FmmVueStore',
    // =============================================================================================================================
    props: {
        errors: Object,
        values: {
            required: true,
            type: Object
        }
    },
    // =============================================================================================================================
    render: function () { return undefined; },
    // =============================================================================================================================
    watch: {
        errors: function () {
            this.store.update(this.values, this.errors);
        },
        values: function () {
            this.store.update(this.values, this.errors);
        }
    }
});
// =================================================================================================================================
//						F M M V U E X
// =================================================================================================================================
export var FmmVuex = Vue.extend({
    // =============================================================================================================================
    data: function () {
        return {
            $store: undefined,
            unsubscribeToStore: undefined,
            store: undefined
        };
    },
    // =============================================================================================================================
    destroyed: function () {
        this.unsubscribeToStore();
    },
    // =============================================================================================================================
    mounted: function () {
        var _this = this;
        if (Object.keys(this.$scopedSlots).length)
            throw new Error('FmmVuex is a contentless tag');
        this.$emit('store', (this.store = new FmmMapStore(this.$store.state, this.errors)));
        this.unsubscribeToStore = this.$store.subscribe(function (_, state) { return _this.store.update(state, _this.errors); });
    },
    // =============================================================================================================================
    name: 'FmmVuex',
    // =============================================================================================================================
    props: {
        errors: Object
    },
    // =============================================================================================================================
    render: function () { return undefined; },
    // =============================================================================================================================
    watch: {
        errors: function () {
            this.store.update(this.$store.state, this.errors);
        }
    }
});
// =================================================================================================================================
// =================================================================================================================================
// =================================================	P R I V A T E	============================================================
// =================================================================================================================================
// =================================================================================================================================
// =================================================================================================================================
//						G
// =================================================================================================================================
var G = {
    MINIMAPS: new WeakMap(),
    PANELS: new WeakMap()
};
