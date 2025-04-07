import { useTranslation } from 'react-i18next';
import React from "react";

export const TranslationBtn = () => {
    const { i18n } = useTranslation();

    const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(event.target.value);
    };

    return (
        <div>
            <select onChange={changeLanguage} defaultValue={i18n.language}>
                <option value="en">English</option>
                <option value="uk">Ukrainian</option>
            </select>
        </div>
    );
};