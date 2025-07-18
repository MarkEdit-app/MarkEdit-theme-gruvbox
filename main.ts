import { overrideThemes } from 'markedit-theming';
import { gruvboxLight } from 'cm6-theme-gruvbox-light';
import { gruvboxDark } from 'cm6-theme-gruvbox-dark';

overrideThemes({
  light: { extension: gruvboxLight },
  dark: { extension: gruvboxDark },
  options: { settingsKey: 'extension.markeditThemeGruvbox' },
});
