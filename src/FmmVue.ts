import { Component, ComponentPublicInstance, PropType, VNode, defineComponent, h } from 'vue';
import {
	Fmm,
	FmmFramework,
	FmmMapErrors,
	FmmMapStore,
	FmmMapString,
	FmmMapValues,
	FmmMinimap,
	FmmMinimapCreateParam,
	FmmMinimapSnapshot,
	FmmPanel,
	FmmStore,
	FmmWidgetFactory
} from '@eafmm/core';

// =================================================================================================================================
//						F M M V U E M I N I M A P
// =================================================================================================================================
export const FmmVueMinimap = defineComponent({
	// =============================================================================================================================
//	emits: ['update'],

	// =============================================================================================================================
	methods: {
		destructor() {
			return G.MINIMAPS.get(this)?.destructor();
		},
		takeSnapshot() {
			return G.MINIMAPS.get(this)?.takeSnapshot();
		}
	},

	// =============================================================================================================================
	mounted() {
		if (Object.keys(this.$slots).length) throw new Error('FmmVueMinimap is a contentless tag');
		let form = this.$el?.parentElement;
		while (form && form.tagName !== 'FORM') form = form.parentElement;
		if (!form) throw new Error('FmmVueMinimap must be used inside a FORM tag');
		const fmcp: FmmMinimapCreateParam = {
			aggregateLabels: this.aggregateLabels,
			anchor: this.anchor,
			debounceMsec: this.debounceMsec,
			dynamicLabels: this.dynamicLabels,
			form: form as HTMLFormElement,
			framework: this.framework,
			onUpdate: (snapshot: Readonly<FmmMinimapSnapshot>) => this.$emit('update', snapshot),
			page: this.page,
			store: this.store,
			title: this.title,
			usePanelDetail: this.usePanelDetail,
			useWidthToScale: this.useWidthToScale,
			verbosity: this.verbosity,
			widgetFactories: this.widgetFactories
		};
		const minimap = G.PANELS.get(this.panel)?.createMinimap(fmcp);
		if (!minimap) return;
		G.MINIMAPS.set(this, minimap);
		minimap.compose(this.customWidgetIds);
		this.$watch('customWidgetIds', (ids: string[]) => minimap.compose(ids));
	},

	// =============================================================================================================================
	name: 'FmmVueMinimap',

	// =============================================================================================================================
	props: {
		aggregateLabels: Object as PropType<FmmMapString>,
		anchor: HTMLElement,
		customWidgetIds: Array as PropType<string[]>,
		debounceMsec: Number,
		dynamicLabels: Array as PropType<string[]>,
		framework: Object as PropType<FmmFramework>,
		page: HTMLElement,
		panel: {
			required: true,
			type: Object as PropType<ComponentPublicInstance>,
			validator: (value: ComponentPublicInstance) => value.$options.name === 'FmmVuePanel'
		},
		store: Object as PropType<FmmStore>,
		title: {
			required: true,
			type: String,
			validator: (value: string) => value?.trim().length > 0
		},
		usePanelDetail: Boolean,
		useWidthToScale: Boolean,
		verbosity: Number,
		widgetFactories: Array as PropType<FmmWidgetFactory[]>
	},

	// =============================================================================================================================
	render: () => h('div'),

	// =============================================================================================================================
	unmounted() {
		const minimap = G.MINIMAPS.get(this);
		if (minimap) minimap.detach();
		G.MINIMAPS.delete(this);
	},

	// =============================================================================================================================
	updated() {
		this.$nextTick(() => G.MINIMAPS.get(this)?.takeSnapshot());
	}
});

// =================================================================================================================================
//						F M M V U E P A N E L
// =================================================================================================================================
export const FmmVuePanel = defineComponent({
	// =============================================================================================================================
	methods: {
		destroyDetached() {
			const panel = G.PANELS.get(this);
			if (panel) panel.destroyDetached();
		}
	},

	// =============================================================================================================================
	mounted() {
		if (Object.keys(this.$slots).length) throw new Error('FmmVuePanel is a contentless tag');
		G.PANELS.set(this, Fmm.createPanel(undefined, this.$el as HTMLElement, this.detailParent, this.vertical));
	},

	// =============================================================================================================================
	name: 'FmmVuePanel',

	// =============================================================================================================================
	props: {
		detailParent: HTMLDivElement,
		vertical: Boolean
	},

	// =============================================================================================================================
	render: () =>
		h('div', { class: 'fmm-panel' }, [
			h(
				'style',
				{
					tag: 'component',
					attrs: { type: 'text/css' }
				},
				Fmm.CSS
			)
		]),

	// =============================================================================================================================
	unmounted() {
		const panel = G.PANELS.get(this);
		if (panel) panel.destructor();
		G.PANELS.delete(this);
	}
});

// =================================================================================================================================
//						F M M V U E S T O R E
// =================================================================================================================================
export const FmmVueStore = defineComponent({
	// =============================================================================================================================
	data() {
		return {
			store: undefined as FmmMapStore<FmmMapValues, FmmMapErrors>
		};
	},

	// =============================================================================================================================
	emits: ['store'],

	// =============================================================================================================================
	mounted() {
		if (Object.keys(this.$slots).length) throw new Error('FmmVueStore is a contentless tag');
		this.$emit('store', (this.store = new FmmMapStore(this.values, this.errors)));
	},

	// =============================================================================================================================
	name: 'FmmVueStore',

	// =============================================================================================================================
	props: {
		errors: Object as PropType<FmmMapErrors>,
		values: {
			required: true,
			type: Object as PropType<FmmMapValues>
		}
	},

	// =============================================================================================================================
	render: (): VNode => undefined,

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
export const FmmVuex = defineComponent({
	// =============================================================================================================================
	data() {
		return {
			$store: undefined as any, // to placate typescript compiler
			unsubscribeToStore: undefined as () => void,
			store: undefined as FmmMapStore<FmmMapValues, FmmMapErrors>
		};
	},

	// =============================================================================================================================
	emits: ['store'],

	// =============================================================================================================================
	mounted() {
		if (Object.keys(this.$slots).length) throw new Error('FmmVuex is a contentless tag');
		this.$emit('store', (this.store = new FmmMapStore(this.$store.state, this.errors)));
		this.unsubscribeToStore = this.$store.subscribe((_: unknown, state: FmmMapValues) => this.store.update(state, this.errors));
	},

	// =============================================================================================================================
	name: 'FmmVuex',

	// =============================================================================================================================
	props: {
		errors: Object as PropType<FmmMapErrors>
	},

	// =============================================================================================================================
	render: (): VNode => undefined,

	// =============================================================================================================================
	unmounted() {
		this.unsubscribeToStore();
	},

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
const G: {
	MINIMAPS: WeakMap<Component, FmmMinimap>;
	PANELS: WeakMap<Component, FmmPanel>;
} = {
	MINIMAPS: new WeakMap(),
	PANELS: new WeakMap()
};
