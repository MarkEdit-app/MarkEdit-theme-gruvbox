# MarkEdit-theme-gruvbox

[Gruvbox](https://github.com/morhetz/gruvbox) theme for [MarkEdit](https://github.com/MarkEdit-app/MarkEdit), built on top of [MarkEdit-theming](https://github.com/MarkEdit-app/MarkEdit-theming).

<img width="344" title="Gruvbox Light" src="https://github.com/user-attachments/assets/a71bf7e7-dfc6-4523-a4d4-789204233eb7" /> <img width="344" title="Gruvbox Dark" src="https://github.com/user-attachments/assets/5943a526-9391-49f6-8e68-c75ba49f7210" />

To customize colors, see [Customization](https://github.com/MarkEdit-app/MarkEdit-theming/wiki#customization) for details.

## Installation

Copy [dist/markedit-theme-gruvbox.js](dist/markedit-theme-gruvbox.js) to `~/Library/Containers/app.cyan.markedit/Data/Documents/scripts/`.

You can also run `yarn install && yarn build` to build and deploy the script.

## Settings

In [settings.json](https://github.com/MarkEdit-app/MarkEdit/wiki/Customization#advanced-settings), you can define a settings node named `extension.markeditThemeGruvbox` to configure this extension, default settings are:

```json
{
  "extension.markeditThemeGruvbox": {
    "enabledMode": "both"
  }
}
```

- `enabledMode`: Enabled color scheme (`both`, `light`, `dark`, or `none` to disable).
