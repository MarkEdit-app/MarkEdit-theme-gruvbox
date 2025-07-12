import { CustomTheme, overrideThemes } from 'markedit-theming';
import { MarkEdit, type JSONObject, type JSONValue } from 'markedit-api';
import { gruvboxLight } from 'cm6-theme-gruvbox-light';
import { gruvboxDark } from 'cm6-theme-gruvbox-dark';

const toObject = (value: JSONValue, fallback = {}) => (value ?? fallback) as JSONObject;
const rootValue = toObject(toObject(MarkEdit.userSettings)['extension.markeditThemeGruvbox']);
const enabledMode = (rootValue.enabledMode ?? 'both') as string;

const lightTheme: CustomTheme = {
  extension: gruvboxLight,
  colors: {
    accentColor: '#79740e',
    syntaxMarker: '#076678',
  },
};

const darkTheme: CustomTheme = {
  extension: gruvboxDark,
  colors: {
    accentColor: '#b8bb26',
    syntaxMarker: '#83a598',
  },
};

overrideThemes({
  light: ['both', 'light'].includes(enabledMode) ? lightTheme : undefined,
  dark: ['both', 'dark'].includes(enabledMode) ? darkTheme : undefined,
});
