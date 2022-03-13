import Vue from 'vue';
import { FmmMapString, FmmFramework, FmmStore, FmmStoreErrors, FmmStoreValues, FmmStoreImpl } from '@eafmm/core';

declare const FmmVueMinimap: Vue.DefineComponent<{
    aggregateLabels: Vue.PropType<FmmMapString>;
    anchor: {
        new (): HTMLDivElement;
        prototype: HTMLDivElement;
    };
    customElementIds: Vue.PropType<string[]>;
    debounceMsec: NumberConstructor;
    dynamicLabels: Vue.PropType<string[]>;
    framework: Vue.PropType<FmmFramework>;
    ordinal: NumberConstructor;
    page: {
        new (): HTMLDivElement;
        prototype: HTMLDivElement;
    };
    panel: {
        type: Vue.PropType<Vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, Vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>>;
        validator: (value: Vue.ComponentPublicInstance) => boolean;
    };
    store: Vue.PropType<FmmStore>;
    title: {
        required: true;
        type: StringConstructor;
        validator: (value: string) => boolean;
    };
    usePanelDetail: BooleanConstructor;
    useWidthToScale: BooleanConstructor;
    verbosity: NumberConstructor;
    zoomFactor: NumberConstructor;
}, unknown, unknown, {}, {
    destructor(): void | undefined;
    takeSnapshot(): boolean | undefined;
}, Vue.ComponentOptionsMixin, Vue.ComponentOptionsMixin, Record<string, any>, string, Vue.VNodeProps & Vue.AllowedComponentProps & Vue.ComponentCustomProps, Readonly<Vue.ExtractPropTypes<{
    aggregateLabels: Vue.PropType<FmmMapString>;
    anchor: {
        new (): HTMLDivElement;
        prototype: HTMLDivElement;
    };
    customElementIds: Vue.PropType<string[]>;
    debounceMsec: NumberConstructor;
    dynamicLabels: Vue.PropType<string[]>;
    framework: Vue.PropType<FmmFramework>;
    ordinal: NumberConstructor;
    page: {
        new (): HTMLDivElement;
        prototype: HTMLDivElement;
    };
    panel: {
        type: Vue.PropType<Vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, Vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>>;
        validator: (value: Vue.ComponentPublicInstance) => boolean;
    };
    store: Vue.PropType<FmmStore>;
    title: {
        required: true;
        type: StringConstructor;
        validator: (value: string) => boolean;
    };
    usePanelDetail: BooleanConstructor;
    useWidthToScale: BooleanConstructor;
    verbosity: NumberConstructor;
    zoomFactor: NumberConstructor;
}>>, {
    usePanelDetail: boolean;
    useWidthToScale: boolean;
}>;
declare const FmmVuePanel: Vue.DefineComponent<{
    detailParent: {
        new (): HTMLDivElement;
        prototype: HTMLDivElement;
    };
    minimapsCount: {
        required: true;
        type: NumberConstructor;
        validator: (value: number) => boolean;
    };
    vertical: BooleanConstructor;
}, unknown, unknown, {}, {
    destroyDetached(): void;
}, Vue.ComponentOptionsMixin, Vue.ComponentOptionsMixin, Record<string, any>, string, Vue.VNodeProps & Vue.AllowedComponentProps & Vue.ComponentCustomProps, Readonly<Vue.ExtractPropTypes<{
    detailParent: {
        new (): HTMLDivElement;
        prototype: HTMLDivElement;
    };
    minimapsCount: {
        required: true;
        type: NumberConstructor;
        validator: (value: number) => boolean;
    };
    vertical: BooleanConstructor;
}>>, {
    vertical: boolean;
}>;
declare const FmmVueStore: Vue.DefineComponent<{
    errors: Vue.PropType<FmmStoreErrors>;
    values: {
        required: true;
        type: Vue.PropType<FmmStoreValues>;
    };
}, unknown, {
    store: FmmStoreImpl<FmmStoreValues, FmmStoreErrors>;
}, {}, {}, Vue.ComponentOptionsMixin, Vue.ComponentOptionsMixin, "store"[], "store", Vue.VNodeProps & Vue.AllowedComponentProps & Vue.ComponentCustomProps, Readonly<Vue.ExtractPropTypes<{
    errors: Vue.PropType<FmmStoreErrors>;
    values: {
        required: true;
        type: Vue.PropType<FmmStoreValues>;
    };
}>> & {
    onStore?: ((...args: any[]) => any) | undefined;
}, {}>;
declare const FmmVuex: Vue.DefineComponent<{
    errors: Vue.PropType<FmmStoreErrors>;
}, unknown, {
    $store: any;
    unsubscribeToStore: () => void;
    store: FmmStoreImpl<FmmStoreValues, FmmStoreErrors>;
}, {}, {}, Vue.ComponentOptionsMixin, Vue.ComponentOptionsMixin, "store"[], "store", Vue.VNodeProps & Vue.AllowedComponentProps & Vue.ComponentCustomProps, Readonly<Vue.ExtractPropTypes<{
    errors: Vue.PropType<FmmStoreErrors>;
}>> & {
    onStore?: ((...args: any[]) => any) | undefined;
}, {}>;

declare const FmmVuetify: FmmFramework;

export { FmmVueMinimap, FmmVuePanel, FmmVueStore, FmmVuetify, FmmVuex };
