import { CustomTheme, overrideThemes } from 'markedit-theming';
import { MarkEdit, type JSONObject, type JSONValue } from 'markedit-api';
import { gruvboxLight } from 'cm6-theme-gruvbox-light';
import { gruvboxDark } from 'cm6-theme-gruvbox-dark';

const toObject = (value: JSONValue, fallback = {}) => (value ?? fallback) as JSONObject;
const rootValue = toObject(toObject(MarkEdit.userSettings)['extension.markeditThemeGruvbox']);
const enabledMode = (rootValue.enabledMode ?? 'both') as string;

const lightTheme: CustomTheme = { extension: gruvboxLight };
const darkTheme: CustomTheme = { extension: gruvboxDark };

overrideThemes({
  light: ['both', 'light'].includes(enabledMode) ? lightTheme : undefined,
  dark: ['both', 'dark'].includes(enabledMode) ? darkTheme : undefined,
});
