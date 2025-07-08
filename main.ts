import { overrideThemes } from 'markedit-theming';
import { gruvboxLight } from 'cm6-theme-gruvbox-light';
import { gruvboxDark } from 'cm6-theme-gruvbox-dark';

overrideThemes({
  light: {
    extension: gruvboxLight,
    colors: {
      accentColor: '#79740e',
      syntaxMarker: '#076678',
    },
  },
  dark: {
    extension: gruvboxDark,
    colors: {
      accentColor: '#b8bb26',
      syntaxMarker: '#83a598',
    },
  }
});
