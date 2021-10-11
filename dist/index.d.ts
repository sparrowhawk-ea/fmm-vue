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
}, Vue.ComponentOptionsMixin, Vue.ComponentOptionsMixin, Record<string, any>, string, Vue.VNodeProps & Vue.AllowedComponentProps & Vue.ComponentCustomProps, Readonly<{
    aggregateLabels?: unknown;
    anchor?: unknown;
    customElementIds?: unknown;
    debounceMsec?: unknown;
    dynamicLabels?: unknown;
    framework?: unknown;
    ordinal?: unknown;
    page?: unknown;
    panel?: unknown;
    store?: unknown;
    title?: unknown;
    usePanelDetail?: unknown;
    useWidthToScale?: unknown;
    verbosity?: unknown;
    zoomFactor?: unknown;
} & {
    title: string;
    usePanelDetail: boolean;
    useWidthToScale: boolean;
} & {
    anchor?: HTMLDivElement | undefined;
    debounceMsec?: number | undefined;
    ordinal?: number | undefined;
    page?: HTMLDivElement | undefined;
    panel?: {
        $: Vue.ComponentInternalInstance;
        $data: {};
        $props: {};
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: Vue.Slot | undefined;
        }>;
        $root: Vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, Vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: Vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, Vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: Vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}> & {
            beforeCreate?: ((() => void) | (() => void)[]) | undefined;
            created?: ((() => void) | (() => void)[]) | undefined;
            beforeMount?: ((() => void) | (() => void)[]) | undefined;
            mounted?: ((() => void) | (() => void)[]) | undefined;
            beforeUpdate?: ((() => void) | (() => void)[]) | undefined;
            updated?: ((() => void) | (() => void)[]) | undefined;
            activated?: ((() => void) | (() => void)[]) | undefined;
            deactivated?: ((() => void) | (() => void)[]) | undefined;
            beforeDestroy?: ((() => void) | (() => void)[]) | undefined;
            beforeUnmount?: ((() => void) | (() => void)[]) | undefined;
            destroyed?: ((() => void) | (() => void)[]) | undefined;
            unmounted?: ((() => void) | (() => void)[]) | undefined;
            renderTracked?: (((e: Vue.DebuggerEvent) => void) | ((e: Vue.DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: Vue.DebuggerEvent) => void) | ((e: Vue.DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: Vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, Vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: Vue.ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, Vue.ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof Vue.nextTick;
        $watch(source: string | Function, cb: Function, options?: Vue.WatchOptions<boolean> | undefined): Vue.WatchStopHandle;
    } | undefined;
    verbosity?: number | undefined;
    zoomFactor?: number | undefined;
    aggregateLabels?: FmmMapString | undefined;
    customElementIds?: string[] | undefined;
    dynamicLabels?: string[] | undefined;
    framework?: FmmFramework | undefined;
    store?: FmmStore | undefined;
}>, {
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
}, Vue.ComponentOptionsMixin, Vue.ComponentOptionsMixin, Record<string, any>, string, Vue.VNodeProps & Vue.AllowedComponentProps & Vue.ComponentCustomProps, Readonly<{
    detailParent?: unknown;
    minimapsCount?: unknown;
    vertical?: unknown;
} & {
    minimapsCount: number;
    vertical: boolean;
} & {
    detailParent?: HTMLDivElement | undefined;
}>, {
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
}, {}, {}, Vue.ComponentOptionsMixin, Vue.ComponentOptionsMixin, "store"[], "store", Vue.VNodeProps & Vue.AllowedComponentProps & Vue.ComponentCustomProps, Readonly<{
    errors?: unknown;
    values?: unknown;
} & {
    values: FmmStoreValues;
} & {
    errors?: FmmStoreErrors | undefined;
}> & {
    onStore?: ((...args: any[]) => any) | undefined;
}, {}>;
declare const FmmVuex: Vue.DefineComponent<{
    errors: Vue.PropType<FmmStoreErrors>;
}, unknown, {
    $store: any;
    unsubscribeToStore: () => void;
    store: FmmStoreImpl<FmmStoreValues, FmmStoreErrors>;
}, {}, {}, Vue.ComponentOptionsMixin, Vue.ComponentOptionsMixin, "store"[], "store", Vue.VNodeProps & Vue.AllowedComponentProps & Vue.ComponentCustomProps, Readonly<{
    errors?: unknown;
} & {} & {
    errors?: FmmStoreErrors | undefined;
}> & {
    onStore?: ((...args: any[]) => any) | undefined;
}, {}>;

declare const FmmVuetify: FmmFramework;

export { FmmVueMinimap, FmmVuePanel, FmmVueStore, FmmVuetify, FmmVuex };
