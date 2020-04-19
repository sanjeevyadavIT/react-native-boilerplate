/**
 * i18n stands for internationalization
 */
import * as RNLocalize from 'react-native-localize';
import i18n from 'i18n-js';

const en = require('./locales/en');

// Should the app fallback to English if user locale doesn't exists
i18n.fallbacks = true;

// Define the supported translation
i18n.translations = {
  en,
};

const fallback = { languageTag: 'en', isRTL: false };

const { languageTag } =
  RNLocalize.findBestAvailableLanguage(Object.keys(i18n.translations)) ||
  fallback;

i18n.locale = languageTag;
