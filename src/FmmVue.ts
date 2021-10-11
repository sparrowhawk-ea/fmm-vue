import Vue from 'vue';
import {
	Fmm,
	FmmFormHTML,
	FmmFramework,
	FmmMapString,
	FmmMinimap,
	FmmMinimapCreateParam,
	FmmPanel,
	FmmSnapshots,
	FmmStore,
	FmmStoreErrors,
	FmmStoreImpl,
	FmmStoreValues
} from '@eafmm/core';

// =================================================================================================================================
//						F M M V U E M I N I M A P
// =================================================================================================================================
export const FmmVueMinimap = Vue.defineComponent({
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
			form: new FmmFormHTML(form as HTMLFormElement, this.page),
			framework: this.framework,
			onUpdate: (snapshot: Readonly<FmmSnapshots>) => this.$emit('update', snapshot),
			ordinal: this.ordinal,
			store: this.store,
			title: this.title,
			usePanelDetail: this.usePanelDetail,
			useWidthToScale: this.useWidthToScale,
			verbosity: this.verbosity,
			zoomFactor: this.zoomFactor
		};
		const minimap = this.panel ? G.PANELS.get(this.panel)?.createMinimap(fmcp) : Fmm.createMinimap(fmcp);
		if (!minimap) return;
		G.MINIMAPS.set(this, minimap);
		minimap.compose(this.customElementIds);
		this.$watch('customElementIds', (ids: string[]) => minimap.compose(ids));
	},

	// =============================================================================================================================
	name: 'FmmVueMinimap',

	// =============================================================================================================================
	props: {
		aggregateLabels: Object as Vue.PropType<FmmMapString>,
		anchor: HTMLDivElement,
		customElementIds: Array as Vue.PropType<string[]>,
		debounceMsec: Number,
		dynamicLabels: Array as Vue.PropType<string[]>,
		framework: Object as Vue.PropType<FmmFramework>,
		ordinal: Number,
		page: HTMLDivElement,
		panel: {
			type: Object as Vue.PropType<Vue.ComponentPublicInstance>,
			validator: (value: Vue.ComponentPublicInstance) => value.$options.name === 'FmmVuePanel'
		},
		store: Object as Vue.PropType<FmmStore>,
		title: {
			required: true,
			type: String,
			validator: (value: string) => value?.trim().length > 0
		},
		usePanelDetail: Boolean,
		useWidthToScale: Boolean,
		verbosity: Number,
		zoomFactor: Number
	},

	// =============================================================================================================================
	render: () => Vue.h('div'),

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
export const FmmVuePanel = Vue.defineComponent({
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
		G.PANELS.set(this, Fmm.createPanel(this.$el as HTMLDivElement, this.minimapsCount, this.detailParent, this.vertical));
	},

	// =============================================================================================================================
	name: 'FmmVuePanel',

	// =============================================================================================================================
	props: {
		detailParent: HTMLDivElement,
		minimapsCount: {
			required: true,
			type: Number,
			validator: (value: number) => value > 0
		},
		vertical: Boolean
	},

	// =============================================================================================================================
	render: () =>
		Vue.h('div', { class: 'fmm-panel' }, [
			Vue.h(
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
export const FmmVueStore = Vue.defineComponent({
	// =============================================================================================================================
	data() {
		return {
			store: undefined as unknown as FmmStoreImpl<FmmStoreValues, FmmStoreErrors>
		};
	},

	// =============================================================================================================================
	emits: ['store'],

	// =============================================================================================================================
	mounted() {
		if (Object.keys(this.$slots).length) throw new Error('FmmVueStore is a contentless tag');
		this.$emit('store', (this.store = new FmmStoreImpl(this.values, this.errors)));
	},

	// =============================================================================================================================
	name: 'FmmVueStore',

	// =============================================================================================================================
	props: {
		errors: Object as Vue.PropType<FmmStoreErrors>,
		values: {
			required: true,
			type: Object as Vue.PropType<FmmStoreValues>
		}
	},

	// =============================================================================================================================
	render() {
		return null;
	},

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
export const FmmVuex = Vue.defineComponent({
	// =============================================================================================================================
	data() {
		return {
			// eslint-disable-next-line @typescript-eslint/no-explicit-any
			$store: undefined as any, // to placate typescript compiler
			unsubscribeToStore: undefined as unknown as () => void,
			store: undefined as unknown as FmmStoreImpl<FmmStoreValues, FmmStoreErrors>
		};
	},

	// =============================================================================================================================
	emits: ['store'],

	// =============================================================================================================================
	mounted() {
		if (Object.keys(this.$slots).length) throw new Error('FmmVuex is a contentless tag');
		this.$emit('store', (this.store = new FmmStoreImpl(this.$store.state, this.errors)));
		this.unsubscribeToStore = this.$store.subscribe((_: unknown, state: FmmStoreValues) => this.store.update(state, this.errors));
	},

	// =============================================================================================================================
	name: 'FmmVuex',

	// =============================================================================================================================
	props: {
		errors: Object as Vue.PropType<FmmStoreErrors>
	},

	// =============================================================================================================================
	render() {
		return null;
	},

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
	MINIMAPS: WeakMap<Vue.ComponentPublicInstance, FmmMinimap>;
	PANELS: WeakMap<Vue.ComponentPublicInstance, FmmPanel>;
} = {
	MINIMAPS: new WeakMap(),
	PANELS: new WeakMap()
};
