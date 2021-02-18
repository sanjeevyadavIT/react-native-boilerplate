/**
 * This module is meant to be used to store values in AsyncStorage
 */
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AsyncStorageKeys = Object.freeze({
  // Create more keys to store new values
  theme: 'theme_type',
});

/**
 * If a valid non-empty string is passed then only the value is stored, else key is removed
 *
 * @param {string} key   - unique key to address a value
 * @param {string} value - value need to be stored at the key
 *
 * @returns {boolean} if value is process successfully return true or else false
 */
const saveValue = async (
  key,
  value,
) => {
  try {
    if (typeof value === 'string' && value !== '') {
      await AsyncStorage.setItem(key, value);
    } else {
      await AsyncStorage.removeItem(key);
    }
    return true;
  } catch (e) {
    // saving error
    return false;
  }
};

/**
 * Load the value from async storage, for a given key
 *
 * @param {string} key - One of the keys from AsyncStorage object, whose value need to be extracted
 *
 * @returns {string | null} - If key is present, return the value else return null
 */
const loadValue = async (key)=> {
  try {
    const value = await AsyncStorage.getItem(key);
    return value;
  } catch (e) {
    // error reading value
    return null;
  }
};

/**
 * For each new entity, create new functions "saveEntityName" & "loadEntityName"
 *
 * Suppose you want to save an entity "customer token" in AsyncStorage
 * Create two functions named "saveCustomerToken" & "loadCustomerToken"
 * These function will internally call "saveValue" & "loadValue"
 * function internally.
 */

export const saveTheme = async (themeType) =>
  saveValue(AsyncStorageKeys.theme, themeType);

export const loadTheme = async () =>
  loadValue(AsyncStorageKeys.theme);
