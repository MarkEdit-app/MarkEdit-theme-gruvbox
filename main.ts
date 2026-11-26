import { EditorView } from '@codemirror/view';
import { overrideThemes } from 'markedit-theming';
import { gruvboxLight } from 'cm6-theme-gruvbox-light';
import { gruvboxDark } from 'cm6-theme-gruvbox-dark';

// The upstream themes don't style inline code, so it renders in the plain
// text color with only a faint background, and blends in with the prose.
const inlineCode = (color: string, backgroundColor: string) => EditorView.theme({
  '&.cm-editor .cm-md-inlineCode': { color, backgroundColor },
});

overrideThemes({
  light: {
    extension: [
      gruvboxLight,
      inlineCode('#af3a03', '#ebdbb2'), // faded_orange on bg1
    ],
  },
  dark: {
    extension: [
      gruvboxDark,
      inlineCode('#fe8019', '#3c3836'), // bright_orange on bg1
    ],
  },
  options: { settingsKey: 'extension.markeditThemeGruvbox' },
});
