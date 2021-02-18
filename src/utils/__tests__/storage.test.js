import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  AsyncStorageKeys,
  saveTheme,
  loadTheme,
} from '../storage';

describe('storage.ts', () => {
  beforeEach(() => {
    AsyncStorage.clear();
  });

  test('should save theme type', async () => {
    // Setup
    const theme = 'dark';

    // Exercise
    const status = await saveTheme(theme);

    // Verify
    expect(status).toBe(true);
    expect(AsyncStorage.setItem).toHaveBeenCalledWith(
      AsyncStorageKeys.theme,
      theme,
    );
  });

  test('should load theme type', async () => {
    // setup
    const theme = 'dark';
    await AsyncStorage.setItem(AsyncStorageKeys.theme, theme);

    // Exercise
    const result = await loadTheme();

    // Verify
    expect(result).toBe(theme);
    expect(AsyncStorage.getItem).toHaveBeenCalledWith(
      AsyncStorageKeys.theme,
    );
  });

  test('should remove theme key from async storage', async () => {
    // setup
    const theme = 'dark';
    await AsyncStorage.setItem(AsyncStorageKeys.theme, theme);

    // Exercise
    const result = await saveTheme(null);

    // Verify
    expect(result).toBe(true);
    expect(AsyncStorage.removeItem).toHaveBeenCalledWith(
      AsyncStorageKeys.theme,
    );
  });
});
