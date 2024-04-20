import React from 'react';
import { MixedTags } from './tagify/react.tagify';
import { useGetAutocompleteQuery } from '../services/autocomplete';
import '@yaireo/ui-switch/src/switch.scss';
import './styles.scss';

const tagifySettings = {
    pattern: /@/, 
    dropdown: {
        enabled: 1,
        position: "text",
        mapValueTo: "title",
        searchKeys: ['title']
    },
    enforceWhitelist: true
}

const FormulaInput = () => {

    const { data: autocomplete } = useGetAutocompleteQuery();

    const formattedAutocomplete = autocomplete ? autocomplete.map(item => ({
        id: Number(item.id),
        value: String(item.name),
        title: String(item.name)
    })) : [];

    return (
        <div className="formula-input">
            <MixedTags
                placeholder="To add a variable, type @. And double-click for edit"
                whitelist={formattedAutocomplete}
                autoFocus={true}
                settings={tagifySettings}
            />
        </div>
    )
}

export default FormulaInput
