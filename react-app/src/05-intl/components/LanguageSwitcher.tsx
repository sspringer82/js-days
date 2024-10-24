import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  return (
    <div style={{ textAlign: 'right' }}>
      <button
        onClick={() => i18n.changeLanguage('de')}
        disabled={i18n.language === 'de'}
      >
        DE
      </button>
      <button
        onClick={() => i18n.changeLanguage('en')}
        disabled={i18n.language === 'en'}
      >
        EN
      </button>
    </div>
  );
};

export default LanguageSwitcher;
