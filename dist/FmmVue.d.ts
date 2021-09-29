import { ComponentPublicInstance, PropType } from 'vue';
import { FmmFramework, FmmMapString, FmmStore, FmmStoreErrors, FmmStoreImpl, FmmStoreValues } from '@eafmm/core';
export declare const FmmVueMinimap: import("vue").DefineComponent<{
    aggregateLabels: PropType<FmmMapString>;
    anchor: {
        new (): HTMLDivElement;
        prototype: HTMLDivElement;
    };
    customElementIds: PropType<string[]>;
    debounceMsec: NumberConstructor;
    dynamicLabels: PropType<string[]>;
    framework: PropType<FmmFramework>;
    page: {
        new (): HTMLDivElement;
        prototype: HTMLDivElement;
    };
    panel: {
        type: PropType<ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>>>;
        validator: (value: ComponentPublicInstance) => boolean;
    };
    parent: {
        new (): HTMLDivElement;
        prototype: HTMLDivElement;
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
    zoomFactor: NumberConstructor;
}, unknown, unknown, {}, {
    destructor(): void | undefined;
    takeSnapshot(): boolean | undefined;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    aggregateLabels?: unknown;
    anchor?: unknown;
    customElementIds?: unknown;
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
    zoomFactor?: unknown;
} & {
    title: string;
    usePanelDetail: boolean;
    useWidthToScale: boolean;
} & {
    anchor?: HTMLDivElement | undefined;
    parent?: HTMLDivElement | undefined;
    page?: HTMLDivElement | undefined;
    debounceMsec?: number | undefined;
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
            [name: string]: import("vue").Slot | undefined;
        }>;
        $root: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $parent: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null;
        $emit: (event: string, ...args: any[]) => void;
        $el: any;
        $options: import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}> & {
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
            renderTracked?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            renderTriggered?: (((e: import("vue").DebuggerEvent) => void) | ((e: import("vue").DebuggerEvent) => void)[]) | undefined;
            errorCaptured?: (((err: unknown, instance: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void) | ((err: unknown, instance: ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, import("vue").ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}>> | null, info: string) => boolean | void)[]) | undefined;
        };
        $forceUpdate: () => void;
        $nextTick: typeof import("vue").nextTick;
        $watch(source: string | Function, cb: Function, options?: import("vue").WatchOptions<boolean> | undefined): import("vue").WatchStopHandle;
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
    detailParent?: HTMLDivElement | undefined;
}>, {
    vertical: boolean;
}>;
export declare const FmmVueStore: import("vue").DefineComponent<{
    errors: PropType<FmmStoreErrors>;
    values: {
        required: true;
        type: PropType<FmmStoreValues>;
    };
}, unknown, {
    store: FmmStoreImpl<FmmStoreValues, FmmStoreErrors>;
}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "store"[], "store", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    errors?: unknown;
    values?: unknown;
} & {
    values: FmmStoreValues;
} & {
    errors?: FmmStoreErrors | undefined;
}> & {
    onStore?: ((...args: any[]) => any) | undefined;
}, {}>;
export declare const FmmVuex: import("vue").DefineComponent<{
    errors: PropType<FmmStoreErrors>;
}, unknown, {
    $store: any;
    unsubscribeToStore: () => void;
    store: FmmStoreImpl<FmmStoreValues, FmmStoreErrors>;
}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "store"[], "store", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    errors?: unknown;
} & {} & {
    errors?: FmmStoreErrors | undefined;
}> & {
    onStore?: ((...args: any[]) => any) | undefined;
}, {}>;
