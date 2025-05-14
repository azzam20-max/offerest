import React from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSelector.css';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="language-selector">
      <span className="globe-icon">🌐</span>
      <select value={i18n.language} onChange={handleChange}>
        <option value="id">🇮🇩 Indonesia</option>
        <option value="en">🇬🇧 English</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
