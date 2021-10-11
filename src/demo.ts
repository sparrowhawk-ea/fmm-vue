import Vue from 'vue';
import {
	Validation as VuelidateValidation,
	useVuelidate
} from '@vuelidate/core';
import { email, maxValue, minLength, minValue, required } from '@vuelidate/validators';
// import { createVuetify } from 'vuetify';
// import * as vuetifyComponents from 'vuetify/lib/components';
// import * as vuetifyDirectives from 'vuetify/lib/directives';
// import {
// 	VApp,
// 	VBtn,
// 	VCheckbox,
// 	VCol,
// 	VContainer,
// 	VIcon,
// 	VMain,
// 	VRadio,
// 	VRadioGroup,
// 	VRow,
// 	VSelect,
// 	VSwitch,
// 	VTextField,
// 	VTextarea
// } from 'vuetify/lib';
import VuetifyCss from 'vuetify/dist/vuetify.css';
import { createStore } from 'vuex';
import { FmmBootstrap4, FmmPanel, FmmStore, FmmStoreErrors } from '@eafmm/core';
import { Ea, EaReactive, Earthsea } from '@eafmm/demo';
import { FmmVueMinimap, FmmVuePanel, FmmVuetify, FmmVuex } from './index';

// =================================================================================================================================
// =================================================================================================================================
// =================================================	P R I V A T E	============================================================
// =================================================================================================================================
// =================================================================================================================================

// =================================================================================================================================
//						B A S E O P T I O N S
// =================================================================================================================================
const BaseOptions = {
	// =============================================================================================================================
	data: () => ({
		adventures: Object.entries(Ea.adventures),
		aggregateLabels: Ea.aggregateLabels,
		controls: Ea.controls,
		debounceMsec: undefined as unknown as number,
		ea: new EaReactive(),
		fmmStore: undefined as unknown as FmmStore,
		framework: FmmBootstrap4,
		messages: Ea.messages,
		messagesMap: {
			minLength: 'min',
			minValue: 'min'
		} as Record<string, string>
	}),

	// =============================================================================================================================
	props: {
		anchor: HTMLElement,
		mkey: {
			type: String,
			required: true,
			validator: (value: string) => value?.trim().length > 0
		},
		page: HTMLElement,
		panel: {
			type: Object as Vue.PropType<Vue.ComponentPublicInstance>,
			required: true,
			validator: (value: Vue.ComponentPublicInstance) => value.$options.name === 'FmmVuePanel'
		},
		title: {
			type: String,
			required: true,
			validator: (value: string) => value?.trim().length > 0
		}
	}
};

// =================================================================================================================================
//						S T O R E
// =================================================================================================================================
export const store = createStore<Earthsea>({
	mutations: {
		setValue(state, [key, value]: [string, unknown]) {
			state[key] = value;
		}
	},
	state: Ea.initialValues,
	strict: true
});

// =================================================================================================================================
//						B A S E O P T I O N S V U E X V U E L I D A T E
// =================================================================================================================================
const BaseOptionsVuexVuelidate = {
	...BaseOptions,

	// =============================================================================================================================
	computed: {
		validationErrors() {
			const errors: FmmStoreErrors = {};
			const v = (this as any).v$ as VuelidateValidation;
			v.$silentErrors.forEach(e => errors[e.$property] = typeof e.$message === 'string' ? e.$message : e.$message.value);
			return errors;
		},
		...(function (computed: Record<string, Record<'get' | 'set', unknown>>) {
			Object.keys(Ea.initialValues).forEach(key => computed[key] = {
				get: () => store.state[key],
				set: (value: unknown) => store.commit('setValue', [key, value])
			});
			return computed;
		})({})
	},

	// =============================================================================================================================
	setup: () => ({ v$: useVuelidate() }),

	// =============================================================================================================================
	store,

	// =============================================================================================================================
	validations: {
		adventure: { required },
		adventure2: { required },
		adventureAuto: { required },
		agree: { required: (v: boolean) => v },
		danceDate: { required },
		danceRange: { maxValue: maxValue(10), minValue: minValue(6) },
		danceToggle: { required: (v: boolean) => v },
		deed: { required },
		email: { email },
		quoteRadios: { required },
		realName: { required, minLength: minLength(6) },
		useName: { required }
	}
};

// =================================================================================================================================
//						C H A N G E H A N D L E R
// =================================================================================================================================
type ChangeHandler = (ev: MouseEvent) => void;

// =================================================================================================================================
//						N 0 C
// =================================================================================================================================
const N0C = Vue.defineComponent({
	data() {
		return {
			c: Ea.controls[this.id],
			r: !!Ea.messages[this.id]?.required
		};
	},
	name: 'N0C',
	props: {
		className: String,
		ea: Object as Vue.PropType<Earthsea>,
		id: {
			type: String,
			required: true
		}
	},
	template: `
<div :class='"form-group form-check " + (className || "")'>
<input class='form-check-input' :id='id' :name='id' :required='r' :type='c.type' @change='ea[id]=$event.target.checked'/>
<label class='form-check-label' :for='id'>
	{{c.label}}
</label>
</div>
`
});

// =================================================================================================================================
//						N 0 C L
// =================================================================================================================================
const N0CL = Vue.defineComponent({
	name: 'N0CL',
	props: {
		className: String,
		divHeight: String,
		list: Array as Vue.PropType<string[]>,
		listName: String,
		onChange: Function as Vue.PropType<ChangeHandler>
	},
	template: `
	<div :style='{ height: divHeight, overflowX: "hidden", overflowY: "scroll" }'>
	<div v-for='(name, i) in list' :class='className' :key='name'>
<input
	class='form-check-input'
	type='checkbox'
	:id='listName + String(i)'
	:name='listName'
	:value='name'
	@change='onChange && onChange($event)'
/>
<label class='form-check-label' :for='listName + String(i)'>
	{{name}}
</label>
</div>
</div>
`
});

// =================================================================================================================================
//						N 0 G
// =================================================================================================================================
const N0G = Vue.defineComponent({
	data() {
		return {
			c: Ea.controls[this.id]
		};
	},
	name: 'N0G',
	props: {
		className: String,
		id: {
			type: String,
			required: true
		}
	},
	template: `<div :class='"form-group " + (className || "")'>
<label :for='id'>{{c.label}}</label>
<slot></slot>
</div>
`
});

// =================================================================================================================================
//						N 0 I
// =================================================================================================================================
const N0I = Vue.defineComponent({
	components: {
		N0G
	},
	data() {
		return {
			c: Ea.controls[this.id],
			r: !!Ea.messages[this.id]?.required
		};
	},
	name: 'N0I',
	props: {
		className: String,
		disabled: Boolean,
		id: {
			type: String,
			required: true
		}
	},
	template: `<N0G :class='className' :id='id'>
<input
	class='form-control'
	:disabled='disabled'
	:id='id'
	:name='id'
	:placeholder='c.placeholder'
	:required='r'
	:type='c.type'
/>
</N0G>
`
});

// =================================================================================================================================
//						N 0 S
// =================================================================================================================================
const N0S = Vue.defineComponent({
	components: {
		N0G
	},
	data() {
		return {
			c: Ea.controls[this.id],
			r: !!Ea.messages[this.id]?.required
		};
	},
	name: 'N0S',
	props: {
		className: String,
		id: {
			type: String,
			required: true
		}
	},
	template: `		<N0G :class='className' :id='id'>
<select
	class='form-control'
	:id='id'
	:multiple='c.size !== undefined'
	:name='id'
	:required='r'
	:size='c.size ? +c.size : undefined'
	>
	<slot></slot>
</select>
</N0G>
`
});

// =================================================================================================================================
//						N 0 T
// =================================================================================================================================
const N0T = Vue.defineComponent({
	components: {
		N0G
	},
	data() {
		return {
			c: Ea.controls[this.id],
			r: !!Ea.messages[this.id]?.required
		};
	},
	name: 'N0T',
	props: {
		className: String,
		id: {
			type: String,
			required: true
		}
	},
	template: `<N0G :class='className' :id='id'>
<textarea class='form-control' :id='id' :name='id' :placeholder='c.placeholder' :required='r' />
</N0G>
`
});

// =================================================================================================================================
//						N A T I V E B O O T S T R A P 4
// =================================================================================================================================
const NativeBootstrap4 = Vue.defineComponent({
	...BaseOptions,

	// =============================================================================================================================
	components: {
		FmmVueMinimap,
		N0C,
		N0CL,
		N0I,
		N0S,
		N0T
	},

	// =============================================================================================================================
	// computed: {
	// 	console: () => console
	// },

	// =============================================================================================================================
	methods: {
		onChangeUseName() {
			this.ea.onChangeUseName((this.$refs.form as HTMLFormElement).elements.namedItem('useNames') as RadioNodeList);
		}
	},

	// =============================================================================================================================
	name: 'NativeBootstrap4',

	// =============================================================================================================================
	template: `
	<div class='bootstrap-iso card'>
		<form ref='form' class='card-body' @submit='submit()'>
			<FmmVueMinimap
				:aggregateLabels='aggregateLabels'
				:anchor='anchor'
				:customElementIds='ea.customElementIds'
				:framework='framework'
				:key='mkey'
				:ordinal='parseInt(mkey)'
				:page='page'
				:panel='mkey.endsWith("truetrue")? undefined: panel'
				:title='title'
				:usePanelDetail='mkey.endsWith("false")'
				:verbosity='1'
				:zoomFactor='2.0'
				@update='ea.onUpdate()'/>
			<div class='form-row'>
				<N0I className='col-md-6 col-sm-12' id='useName' />
				<N0I className='col-md-6 col-sm-12' id='realName' />
			</div>
			<div class='form-row'>
				<div class='col-md-9 col-sm-12 px-2'>
					<label>{{controls.quoteRadios.label}}</label>
					<div v-for='[key, value] in ea.randomQuotes' class='form-group form-check m-0' :key='key'>
						<input
							class='form-check-input'
							name='quoteRadios'
							required
							type='radio'
							:id='"quoteRadios-" + key'
							:value='value'
						/>
						<label class='form-check-label' :for='"quoteRadios-" + key'>
							{{value}}
						</label>
					</div>
				</div>
				<div class='col-md-3 col-sm-12'>
					<N0I className='col-md-12 col-sm-12 mx-0 px-0' id='email' />
					<N0S className='col-md-12 col-sm-12 mx-0 px-0' id='adventure'>
						<option v-for='[key, value] in adventures' :key='key' :value='key'>
							{{value}}
						</option>
					</N0S>
				</div>
			</div>
			<hr />
			<div class='form-row'>
				<N0C className='col-md-3 col-sm-6 px-2 text-center my-auto' :ea='ea' id='danceToggle' />
				<N0I className='col-md-3 col-sm-6 mx-0 px-2' id='danceDate' :disabled='!ea.danceToggle' />
				<N0I className='col-md-3 col-sm-6 mx-0 px-2' id='danceRange' :disabled='!ea.danceToggle' />
				<N0T className='col-md-3 col-sm-6 mx-0 px-2' id='deed' />
			</div>
			<hr />
			<div class='form-row'>
				<div class='col-md-3 col-sm-6 px-2'>
					<div class='form-group'>
						<label class='align-top'>{{controls.useNamesAll.label}}</label>
					</div>
					<N0CL className='form-group form-check m-0' divHeight='5em' listName='useNamesAll' :list='ea.names1000' />
				</div>
				<div class='col-md-6 col-sm-12 px-2'>
					<div class='form-group'>
						<label class='align-top'>{{controls.useNames.label}}</label>
						<button
							class='btn btn-sm btn-outline-dark float-right'
							type='button'
							@click='ea.removeUncheckedUseNames()'>
							--
						</button>
						<button
							class='btn btn-sm btn-outline-dark float-right mr-1'
							type='button'
							@click='ea.addRandomUseName()'>
							+
						</button>
						<hr class='clearfix' />
					</div>
					<N0CL
						className='form-group form-check-inline col-md-2 col-sm-4'
						diHeight='4em'
						listName='useNames'
						:list='ea.useNamesShown'
						:onChange='onChangeUseName'
					/>
				</div>
				<N0S class='col-md-3 col-sm-6' id='realNames'>
					<option v-for='r in ea.realNamesShown' :key='r' :value='r'>
						{{r}}
					</option>
				</N0S>
			</div>
			<hr />
			<div class='form-row'>
				<N0C :ea='ea' id='agree' />
			</div>
			<div class='text-center'>
				<button class='btn btn-primary mr-1'>Submit</button>
				<button class='btn btn-secondary mr-1' type='reset'>
					Reset
				</button>
			</div>
		</form>
	</div>`
});

// =================================================================================================================================
//						T 0 C
// =================================================================================================================================
const T0C = Vue.defineComponent({
	components: {
		// VCol,
		// VSwitch
	},
	data() {
		return {
			c: Ea.controls[this.id]
		};
	},
	name: 'T0C',
	props: {
		cols: String,
		errors: Object as Vue.PropType<Record<string, string>>,
		id: {
			type: String,
			required: true
		}
	},
	template: `<v-col :cols='cols'>
<v-switch
	:error-messages='errors[id]'
	:id='id'
	:label='c.label'
	:name='id'
	v-model='$parent[id]'/>
</v-col>
`
});

// =================================================================================================================================
//						T 0 C G
// =================================================================================================================================
const T0CG = Vue.defineComponent({
	components: {
		// VCheckbox,
		// VCol,
		// VRow
	},
	name: 'T0CG',
	props: {
		divHeight: String,
		list: Array as Vue.PropType<string[]>,
		listName: String,
		onChange: Function as Vue.PropType<ChangeHandler>
	},
	template: `
	<div :style='{ height: divHeight, overflowX: "hidden", overflowY: "scroll" }'>
	<component is='style' type='text/css'>.v-input--dense.v-input--selection-controls { margin-top: 0; }</component>
	<v-row dense><v-col cols='3' v-for='(name, i) in list'	:key='name'>
	<v-checkbox
	dense
	:id='listName + String(i)'
	:label='name'
	:name='listName'
	:value='name'
	v-model='$parent[listName]' 
	@click='onChange && onChange($event)'/>
	</v-col></v-row>
</div>
`
});

// =================================================================================================================================
//						T 0 C L
// =================================================================================================================================
const T0CL = Vue.defineComponent({
	components: {
		// VCheckbox
	},
	name: 'T0CL',
	props: {
		divHeight: String,
		list: Array as Vue.PropType<string[]>,
		listName: String
	},
	template: `
	<div :style='{ height: divHeight, overflowX: "hidden", overflowY: "scroll" }'>
	<component is='style' type='text/css'>.v-input--dense.v-input--selection-controls { margin-top: 0; }</component>
	<v-checkbox v-for='(name, i) in list'
	dense
	:id='listName + String(i)'
	:key='name'
	:label='name'
	:name='listName'
	:value='name'
	v-model='$parent[listName]' />
</div>
`
});

// =================================================================================================================================
//						T 0 I
// =================================================================================================================================
const T0I = Vue.defineComponent({
	components: {
		// VCol,
		// VTextField
	},
	data() {
		return {
			c: Ea.controls[this.id]
		};
	},
	name: 'T0I',
	props: {
		cols: String,
		disabled: Boolean,
		errors: Object as Vue.PropType<Record<string, string>>,
		id: {
			type: String,
			required: true
		}
	},
	template: `		<v-col :cols='cols'>
<v-text-field
	:disabled='disabled'
	:error-messages='errors[id]'
	:id='id'
	:label='c.label'
	:name='id'
	:placeholder='c.placeholder'
	:type='c.type'
	v-model='$parent[id]' 
/>
</v-col>
`
});

// =================================================================================================================================
//						T 0 S
// =================================================================================================================================
const T0S = Vue.defineComponent({
	components: {
		// VCol,
		// VSelect
	},
	computed: {
		sitems() {
			const s: Record<string, string>[] = [];
			if (this.items?.length && Array.isArray(this.items[0])) {
				(this.items as string[][]).forEach((item: string[]) => s.push({ text: item[1], value: item[0] }));
			} else {
				(this.items as string[]).forEach(text => s.push({ text, value: text }));
			}
			return s;
		}
	},
	data() {
		return {
			c: Ea.controls[this.id]
		};
	},
	name: 'T0S',
	props: {
		cols: String,
		errors: Object as Vue.PropType<Record<string, string>>,
		id: {
			type: String,
			required: true
		},
		items: Array as Vue.PropType<string[] | string[][]>
	},
	template: `		<v-col :cols='cols'>
<v-select
	:error-messages='errors[id]'
	:id='id'
	:items='sitems'
	:label='c.label'
	:multiple='c.size !== undefined'
	:size='c.size ? +c.size : undefined'
	v-model='$parent[id]'/>
</v-col>
`
});

// =================================================================================================================================
//						T 0 T
// =================================================================================================================================
const T0T = Vue.defineComponent({
	components: {
		// VCol,
		// VTextarea
	},
	data() {
		return {
			c: Ea.controls[this.id]
		};
	},
	name: 'T0T',
	props: {
		cols: String,
		errors: Object as Vue.PropType<Record<string, string>>,
		id: {
			type: String,
			required: true
		}
	},
	template: `<v-col :cols='cols'>
<v-textarea
	:error-messages='errors[id]'
	:id='id'
	:label='c.label'
	:name='id'
	:placeholder='c.placeholder'
	rows='2'
	v-model='$parent[id]' />
</v-col>
`
});

// =================================================================================================================================
//						T 0 Z
// =================================================================================================================================
const T0Z = Vue.defineComponent({
	...BaseOptionsVuexVuelidate,

	// =============================================================================================================================
	components: {
		FmmVueMinimap,
		FmmVuex,
		T0C,
		T0CG,
		T0CL,
		T0I,
		T0S,
		T0T
		// VBtn,
		// VCol,
		// VContainer,
		// VIcon,
		// VRadio,
		// VRadioGroup,
		// VRow
	},

	// =============================================================================================================================
	methods: {
		onChangeUseName(_: MouseEvent) {
			window.setTimeout(
				() => this.ea.onChangeUseName((this.$refs.form as HTMLFormElement).elements.namedItem('useNames') as RadioNodeList),
				this.debounceMsec
			);
		}
	},

	// =============================================================================================================================
	mounted() {
		this.debounceMsec = 500; // Wait for Vuetify transitions to finish before checking the DOM for error messages
		this.framework = FmmVuetify;
	},

	// =============================================================================================================================
	name: 'T0Z',

	// =============================================================================================================================
	template: `
<form ref='form' @submit='submit()'>
	<FmmVuex @store='fmmStore=$event'/>
	<FmmVueMinimap
		v-if='fmmStore'
		:aggregateLabels='aggregateLabels'
		:anchor='anchor'
		:customElementIds='ea.customElementIds'
		:debounceMsec='debounceMsec'
		:framework='framework'
		:key='mkey'
		:ordinal='parseInt(mkey)'
		:page='page'
		:panel='panel'
		:store='fmmStore'
		:title='title'
		:usePanelDetail='mkey.endsWith("false")'
		:verbosity='1'
		:zoomFactor='2.5'
		@update='ea.onUpdate()'/>
	<v-container fluid>
		<v-row dense>
			<T0I cols=4 :errors='validationErrors' id='useName' />
			<T0I cols=4 :errors='validationErrors' id='realName' />
			<T0I cols=4 :errors='validationErrors' id='email' />
		</v-row>
		<v-row dense>
			<v-col cols='9'>
				<v-radio-group 
					dense
					:error-messages='validationErrors.quoteRadios'
					hide-details='auto'
					:label='controls.quoteRadios.label'
					v-model='quoteRadios'>
					<v-radio v-for='[key, value] in ea.randomQuotes' :key='key'
						:id='"quoteRadios-" + key'
						name='quoteRadios'
						:label='value'/>
				</v-radio-group>
			</v-col>
			<T0S cols=3 :errors='validationErrors' id='adventure' :items='adventures'/>
		</v-row>
		<v-row dense>
			<T0C cols=3 :errors='validationErrors' id='danceToggle' />
			<T0I cols=3 :disabled='!danceToggle' :errors='validationErrors' id='danceDate' />
			<T0I cols=3 :disabled='!danceToggle' :errors='validationErrors' id='danceRange' />
			<T0T cols=3 :errors='validationErrors' id='deed' />
		</v-row>
		<hr />
		<v-row dense>
			<v-col cols='3'>
				<label>{{controls.useNamesAll.label}}</label>
				<hr/>
				<T0CL divHeight='7em' :list='ea.names1000' listName='useNamesAll' />
			</v-col>
			<v-col cols='6'>
				<label>{{controls.useNames.label}}</label>
				<v-icon class='float-right' dense @click='ea.removeUncheckedUseNames()'>mdi-minus</v-icon>
				<v-icon class='float-right' dense @click='ea.addRandomUseName()'>mdi-plus</v-icon>
				<hr class='clearfix' />
				<T0CG
					divHeight='7em'
					:list='ea.useNamesShown'
					listName='useNames'
					:onChange='onChangeUseName'
				/>
			</v-col>
			<T0S cols=3 :errors='validationErrors' id='realNames' :items='ea.realNamesShown'/>
		</v-row>
		<v-row dense>
			<T0C cols=3 :errors='validationErrors' id='agree' />
		</v-row>
		<div class='text-center'>
			<v-btn color='primary' type='submit'>Submit</v-btn>
			<v-btn type='reset'>Reset</v-btn>
		</div>
	</v-container>
</form>`
});

// =================================================================================================================================
//						V U E X V U E L I D A T E V U E T I F Y
// =================================================================================================================================
const VuexVuelidateVuetify = Vue.defineComponent({
	...BaseOptions,

	// =============================================================================================================================
	components: {
		T0Z
		// VApp,
		// VMain
	},

	// =============================================================================================================================
	data() {
		return {
			css: VuetifyCss
		};
	},

	// =============================================================================================================================
	name: 'VuexVuelidateVuetify',

	// =============================================================================================================================
	template: `
<div :style='{ transform: "rotate(-45deg)", textAlign: "center", fontSize: "xx-large", fontWeight: "bold" }'>
	A W A I T I N G<br/>S T A B L E<br/>V U E T I F Y<br/>R E L E A S E
	<!--component is='style' type='text/css'>{{ css }}</component>
	<v-app>
		<v-main>
			<T0Z :anchor='anchor' :mkey='mkey' :page='page' :panel='panel' :title='title'/>
		</v-main>
	</v-app-->
</div>`
});

// =================================================================================================================================
//						V 0 C
// =================================================================================================================================
const V0C = Vue.defineComponent({
	data() {
		return {
			c: Ea.controls[this.id]
		};
	},
	name: 'V0C',
	props: {
		className: String,
		id: {
			type: String,
			required: true
		}
	},
	template: `
<div :class='"form-group form-check " + (className || "")'>
<input class='form-check-input' :id='id' :name='id' :type='c.type' v-model='$parent[id]' />
<label class='form-check-label' :for='id'>
	{{c.label}}
</label>
</div>
`
});

// =================================================================================================================================
//						V 0 C L
// =================================================================================================================================
const V0CL = Vue.defineComponent({
	name: 'V0CL',
	props: {
		className: String,
		divHeight: String,
		list: Array as Vue.PropType<string[]>,
		listName: String,
		onChange: Function as Vue.PropType<ChangeHandler>
	},
	template: `
	<div :style='{ height: divHeight, overflowX: "hidden", overflowY: "scroll" }'>
	<div v-for='(name, i) in list' :class='className' :key='name'>
<input
	class='form-check-input'
	type='checkbox'
	:id='listName + String(i)'
	:name='listName'
	:value='name'
	v-model='$parent[listName]' 
	@change='onChange && onChange($event)'
/>
<label class='form-check-label' :for='listName + String(i)'>
	{{name}}
</label>
</div>
</div>
`
});

// =================================================================================================================================
//						V 0 G
// =================================================================================================================================
const V0G = Vue.defineComponent({
	data() {
		return {
			c: Ea.controls[this.id]
		};
	},
	name: 'V0G',
	props: {
		className: String,
		id: {
			type: String,
			required: true
		}
	},
	template: `<div :class='"form-group " + (className || "")'>
<label :for='id'>{{c.label}}</label>
<slot></slot>
</div>
`
});

// =================================================================================================================================
//						V 0 I
// =================================================================================================================================
const V0I = Vue.defineComponent({
	components: {
		V0G
	},
	data() {
		return {
			c: Ea.controls[this.id]
		};
	},
	name: 'V0I',
	props: {
		className: String,
		disabled: Boolean,
		id: {
			type: String,
			required: true
		}
	},
	template: `		<V0G :class='className' :id='id'>
<input
	class='form-control'
	:disabled='disabled'
	:id='id'
	:name='id'
	:placeholder='c.placeholder'
	:type='c.type'
	v-model='$parent[id]' 
/>
</V0G>
`
});

// =================================================================================================================================
//						V 0 S
// =================================================================================================================================
const V0S = Vue.defineComponent({
	components: {
		V0G
	},
	data() {
		return {
			c: Ea.controls[this.id]
		};
	},
	name: 'V0S',
	props: {
		className: String,
		id: {
			type: String,
			required: true
		}
	},
	template: `		<V0G :class='className' :id='id'>
<select
	class='form-control'
	:id='id'
	:multiple='c.size !== undefined'
	:name='id'
	:size='c.size ? +c.size : undefined'
	v-model='$parent[id]' 
	>
	<slot></slot>
</select>
</V0G>
`
});

// =================================================================================================================================
//						V 0 T
// =================================================================================================================================
const V0T = Vue.defineComponent({
	components: {
		V0G
	},
	data() {
		return {
			c: Ea.controls[this.id]
		};
	},
	name: 'V0T',
	props: {
		className: String,
		id: {
			type: String,
			required: true
		}
	},
	template: `<V0G :class='className' :id='id'>
<textarea class='form-control' :id='id' :name='id' :placeholder='c.placeholder' v-model='$parent[id]' />
</V0G>
`
});

// =================================================================================================================================
//						V U E X V U E L I D A T E
// =================================================================================================================================
const VuexVuelidate = Vue.defineComponent({
	...BaseOptionsVuexVuelidate,

	// =============================================================================================================================
	components: {
		FmmVueMinimap,
		FmmVuex,
		V0C,
		V0CL,
		V0I,
		V0S,
		V0T
	},

	// =============================================================================================================================
	methods: {
		onChangeUseName(_: MouseEvent) {
			this.ea.onChangeUseName((this.$refs.form as HTMLFormElement).elements.namedItem('useNames') as RadioNodeList);
		}
	},

	// =============================================================================================================================
	name: 'VuexVuelidate',

	// =============================================================================================================================
	template: `
	<div class='bootstrap-iso card'>
		<form class='card-body' ref='form' @submit='submit()'>
			<FmmVuex :errors='validationErrors' @store='fmmStore=$event'/>
			<FmmVueMinimap
				v-if='fmmStore'
				:aggregateLabels='aggregateLabels'
				:anchor='anchor'
				:customElementIds='ea.customElementIds'
				:framework='framework'
				:key='mkey'
				:ordinal='parseInt(mkey)'
				:page='page'
				:panel='panel'
				:store='fmmStore'
				:title='title'
				:usePanelDetail='mkey.endsWith("false")'
				:verbosity='1'
				:zoomFactor='3.0'
				@update='ea.onUpdate()'/>
			<div class='form-row'>
				<V0I className='col-md-6 col-sm-12' id='useName' />
				<V0I className='col-md-6 col-sm-12' id='realName' />
			</div>
			<div class='form-row'>
				<div class='col-md-9 col-sm-12 px-2'>
					<label>{{controls.quoteRadios.label}}</label>
					<div v-for='[key, value] in ea.randomQuotes' :key='key' class='form-group form-check m-0'>
						<input
							class='form-check-input'
							:id='"quoteRadios-" + key'
							name='quoteRadios'
							type='radio'
							:value='value'
							v-model='quoteRadios'
						/>
						<label class='form-check-label' :for='"quoteRadios-" + key'>
							{{value}}
						</label>
					</div>
				</div>
				<div class='col-md-3 col-sm-12'>
					<V0I className='col-md-12 col-sm-12 mx-0 px-0' id='email' />
					<V0S className='col-md-12 col-sm-12 mx-0 px-0' id='adventure'>
						<option v-for='[key, value] in adventures' :key='key' :value='key'>
							{{value}}
						</option>
					</V0S>
				</div>
			</div>
			<hr />
			<div class='form-row'>
				<V0C className='col-md-3 col-sm-6 px-2 text-center my-auto' id='danceToggle' />
				<V0I className='col-md-3 col-sm-6 mx-0 px-2' :disabled='!danceToggle' id='danceDate' />
				<V0I className='col-md-3 col-sm-6 mx-0 px-2' :disabled='!danceToggle' id='danceRange' />
				<V0T className='col-md-3 col-sm-6 mx-0 px-2' id='deed' />
			</div>
			<hr />
			<div class='form-row'>
				<div class='col-md-3 col-sm-6 px-2'>
					<div class='form-group'>
						<label class='align-top'>{{controls.useNamesAll.label}}</label>
					</div>
					<V0CL divHeight='5em' :list='ea.names1000' listName='useNamesAll' className='form-group form-check m-0' />
				</div>
				<div class='col-md-6 col-sm-12 px-2'>
					<div class='form-group'>
						<label class='align-top'>{{controls.useNames.label}}</label>
						<button
							type='button'
							class='btn btn-sm btn-outline-dark float-right'
							@click='ea.removeUncheckedUseNames()'>
							--
						</button>
						<button
							type='button'
							class='btn btn-sm btn-outline-dark float-right mr-1'
							@click='ea.addRandomUseName()'>
							+
						</button>
						<hr class='clearfix' />
					</div>
					<V0CL
						className='form-group form-check-inline col-md-2 col-sm-4'
						diHeight='4em'
						:list='ea.useNamesShown'
						listName='useNames'
						:onChange='onChangeUseName'
					/>
				</div>
				<V0S class='col-md-3 col-sm-6' id='realNames'>
					<option v-for='r in ea.realNamesShown' :key='r' :value='r'>{{r}}</option>
				</V0S>
			</div>
			<hr />
			<div class='form-row'>
				<V0C id='agree' />
			</div>
			<div class='text-center'>
				<button class='btn btn-primary mr-1'>Submit</button>
				<button class='btn btn-secondary mr-1' type='reset'>Reset</button>
			</div>
		</form>
	</div>`
});

// =================================================================================================================================
//						A P P V U E
// =================================================================================================================================
export const AppVue = Vue.defineComponent({
	// =============================================================================================================================
	components: {
		FmmVuePanel,
		NativeBootstrap4,
		VuexVuelidate,
		VuexVuelidateVuetify
	},

	// =============================================================================================================================
	data: () => ({
		css: Ea.css + ' legend { display: inline }',
		refAnchor0: undefined as unknown as HTMLDivElement,
		refAnchor1: undefined as unknown as HTMLDivElement,
		refAnchor2: undefined as unknown as HTMLDivElement,
		refDetail: undefined as unknown as HTMLDivElement,
		refPage: undefined as unknown as HTMLDivElement,
		refPanel: undefined as unknown as Vue.ComponentPublicInstance<FmmPanel>,
		s: { a: false, d: false, n: 0, t: ['Native Bootstrap4', 'Vuex Vuelidate', 'Vuex Vuelidate Vuetify'] }
	}),

	// =============================================================================================================================
	methods: {
		destroyDetached() {
			window.setTimeout(() => this.refPanel.destroyDetached(), 10);
		}
	},

	// =============================================================================================================================
	mounted() {
		this.refAnchor0 = this.$refs.anchor0 as HTMLDivElement;
		this.refAnchor1 = this.$refs.anchor1 as HTMLDivElement;
		this.refAnchor2 = this.$refs.anchor2 as HTMLDivElement;
		this.refDetail = this.$refs.detail as HTMLDivElement;
		this.refPage = this.$refs.page as HTMLDivElement;
	},

	// =============================================================================================================================
	name: 'AppVue',

	// =============================================================================================================================
	template: `
	<div ref='page'>
		<component is='style' type='text/css'>{{ css }}</component>
		<div class='headbar'>
			<div class='heading'>
				<h1>Earthsea - Form Minimap Vue</h1>
				<div>Ursule K. LeGuin -- <select style='appearance: auto; border-style: solid;' @change='s.n = $event.target.selectedIndex'>
						<option v-for='t in s.t' :key='t' :value='t'>{{t}}</option>
					</select>
				</div><br/>
				A minimap can be fixed in a panel or <input type='checkbox' @change='destroyDetached(s.a = $event.target.checked)'/>
					popped up from an anchor.<br/>
				Detail view can shown in the panel or <input type='checkbox' @change='destroyDetached(s.d = $event.target.checked)'/>
					floated per minimap.
			</div>
			<FmmVuePanel v-if='refDetail' ref='panel' :detailParent='refDetail' :minimapsCount='s.t.length'/>
			<div ref='detail' class='detail' :style='{ display: s.d? "none": "block" }'></div>
			<div class='anchors'>
				<div :class='{ active: s.n === 0}' ref='anchor0'></div>
				<div :class='{ active: s.n === 1}' ref='anchor1'></div>
				<div :class='{ active: s.n === 2}' ref='anchor2'></div>
			</div>
			<div style='clear: both'/>
			</div>
		<NativeBootstrap4 v-if='refPanel && s.n === 0' :mkey='"0"+s.a+s.d' :anchor='s.a? refAnchor0: null' :page='refPage' :panel='refPanel' :title='s.t[0]'/>
		<VuexVuelidate v-if='refPanel && s.n === 1' :mkey='"1"+s.a+s.d' :anchor='s.a? refAnchor1: null' :page='refPage' :panel='refPanel' :title='s.t[1]'/>
		<VuexVuelidateVuetify v-if='refPanel && s.n === 2' :mkey='"2"+s.a+s.d' :anchor='s.a? refAnchor2: null' :page='refPage' :panel='refPanel' :title='s.t[2]'/>
	</div>
`,

	// =============================================================================================================================
	updated() {
		this.refPanel = this.$refs.panel as Vue.ComponentPublicInstance<FmmPanel>;
	}
});
