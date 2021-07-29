import { ComponentPublicInstance, PropType } from 'vue';
import { FmmFramework, FmmMapErrors, FmmMapStore, FmmMapString, FmmMapValues, FmmStore, FmmWidgetFactory } from '@eafmm/core';
export declare const FmmVueMinimap: import("vue").DefineComponent<{
    aggregateLabels: PropType<FmmMapString>;
    anchor: {
        new (): HTMLElement;
        prototype: HTMLElement;
    };
    customWidgetIds: PropType<string[]>;
    debounceMsec: NumberConstructor;
    dynamicLabels: PropType<string[]>;
    framework: PropType<FmmFramework>;
    page: {
        new (): HTMLElement;
        prototype: HTMLElement;
    };
    panel: {
        type: PropType<ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>>;
        validator: (value: ComponentPublicInstance) => boolean;
    };
    parent: {
        new (): HTMLElement;
        prototype: HTMLElement;
    };
    store: PropType<FmmStore>;
    title: {
        required: true;
        type: StringConstructor;
        validator: (value: string) => boolean;
    };
    usePanelDetail: BooleanConstructor;
    useWidthToScale: BooleanConstructor;
    verbosity: NumberConstructor;
    widgetFactories: PropType<FmmWidgetFactory[]>;
}, unknown, unknown, {}, {
    destructor(): void;
    takeSnapshot(): boolean;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    aggregateLabels?: unknown;
    anchor?: unknown;
    customWidgetIds?: unknown;
    debounceMsec?: unknown;
    dynamicLabels?: unknown;
    framework?: unknown;
    page?: unknown;
    panel?: unknown;
    parent?: unknown;
    store?: unknown;
    title?: unknown;
    usePanelDetail?: unknown;
    useWidthToScale?: unknown;
    verbosity?: unknown;
    widgetFactories?: unknown;
} & {
    title: string;
    usePanelDetail: boolean;
    useWidthToScale: boolean;
} & {
    anchor?: HTMLElement;
    page?: HTMLElement;
    aggregateLabels?: FmmMapString;
    customWidgetIds?: string[];
    debounceMsec?: number;
    dynamicLabels?: string[];
    framework?: FmmFramework;
    panel?: {
        $: import("vue").ComponentInternalInstance;
        $data: {};
        $props: {};
        $attrs: {
            [x: string]: unknown;
        };
        $refs: {
            [x: string]: unknown;
        };
        $slots: Readonly<{
            [name: string]: import("vue").Slot;
        }>;
        $root: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $parent: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}> & {
            beforeCreate?: (() => void) | (() => void)[];
            created?: (() => void) | (() => void)[];
            beforeMount?: (() => void) | (() => void)[];
            mounted?: (() => void) | (() => void)[];
            beforeUpdate?: (() => void) | (() => void)[];
            updated?: (() => void) | (() => void)[];
            activated?: (() => void) | (() => void)[];
            deactivated?: (() => void) | (() => void)[];
            beforeDestroy?: (() => void) | (() => void)[];
            beforeUnmount?: (() => void) | (() => void)[];
            destroyed?: (() => void) | (() => void)[];
            unmounted?: (() => void) | (() => void)[];
            renderTracked?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            renderTriggered?: ((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[];
            errorCaptured?: ((err: unknown, instance: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>, info: string) => boolean | void)[];
        };
        $forceUpdate: import("vue").ReactiveEffect<any>;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean>): import("vue").WatchStopHandle;
    };
    parent?: HTMLElement;
    store?: FmmStore;
    verbosity?: number;
    widgetFactories?: FmmWidgetFactory[];
}>, {
    usePanelDetail: boolean;
    useWidthToScale: boolean;
}>;
export declare const FmmVuePanel: import("vue").DefineComponent<{
    detailParent: {
        new (): HTMLDivElement;
        prototype: HTMLDivElement;
    };
    vertical: BooleanConstructor;
}, unknown, unknown, {}, {
    destroyDetached(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    detailParent?: unknown;
    vertical?: unknown;
} & {
    vertical: boolean;
} & {
    detailParent?: HTMLDivElement;
}>, {
    vertical: boolean;
}>;
export declare const FmmVueStore: import("vue").DefineComponent<{
    errors: PropType<FmmMapErrors>;
    values: {
        required: true;
        type: PropType<FmmMapValues>;
    };
}, unknown, {
    store: FmmMapStore<FmmMapValues, FmmMapErrors>;
}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "store"[], "store", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    errors?: unknown;
    values?: unknown;
} & {
    values: FmmMapValues;
} & {
    errors?: FmmMapErrors;
}>, {}>;
export declare const FmmVuex: import("vue").DefineComponent<{
    errors: PropType<FmmMapErrors>;
}, unknown, {
    $store: any;
    unsubscribeToStore: () => void;
    store: FmmMapStore<FmmMapValues, FmmMapErrors>;
}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "store"[], "store", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    errors?: unknown;
} & {} & {
    errors?: FmmMapErrors;
}>, {}>;
