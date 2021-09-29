export const FmmVuetify = {
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
