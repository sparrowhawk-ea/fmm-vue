import Vue from 'vue';
import { FmmFramework, FmmMapErrors, FmmMapStore, FmmMapString, FmmMapValues, FmmStore, FmmWidgetFactory } from '@eafmm/core';
export declare const FmmVueMinimap: import("vue/types/vue").ExtendedVue<Vue, unknown, {
    destructor(): void;
    takeSnapshot(): boolean;
}, unknown, {
    aggregateLabels: FmmMapString;
    anchor: HTMLElement;
    customWidgetIds: string[];
    debounceMsec: number;
    dynamicLabels: string[];
    framework: FmmFramework;
    page: HTMLElement;
    panel: Vue;
    store: FmmStore;
    title: string;
    usePanelDetail: boolean;
    useWidthToScale: boolean;
    verbosity: number;
    widgetFactories: FmmWidgetFactory[];
}>;
export declare const FmmVuePanel: import("vue/types/vue").ExtendedVue<Vue, unknown, {
    destroyDetached(): void;
}, unknown, {
    detailParent: HTMLDivElement;
    vertical: boolean;
}>;
export declare const FmmVueStore: import("vue/types/vue").ExtendedVue<Vue, {
    store: FmmMapStore<FmmMapValues, FmmMapErrors>;
}, unknown, unknown, {
    errors: FmmMapErrors;
    values: FmmMapValues;
}>;
export declare const FmmVuex: import("vue/types/vue").ExtendedVue<Vue, {
    $store: any;
    unsubscribeToStore: () => void;
    store: FmmMapStore<FmmMapValues, FmmMapErrors>;
}, unknown, unknown, {
    errors: FmmMapErrors;
}>;
