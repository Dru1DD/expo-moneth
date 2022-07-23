import i18n from 'i18n-js';
import * as Localization from 'expo-localization'
import en from './en.json'
import ru from './ru.json'
import pl from './pl.json'
import ua from './ua.json'

const availableTranslations = {
  en,
  ru, 
  pl,
  ua,
}

i18n.translations = availableTranslations
i18n.locale = Localization.locale

export default function $t(key, params = {}) {
  return i18n.t(key, params);
}