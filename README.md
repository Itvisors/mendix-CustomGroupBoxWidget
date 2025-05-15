## CustomGroupBoxWidget
Custom group box widget for web

## Features
- In addition to default groupbox, place content in the header.
- Optionally use a context attribute to control the expanded/collapsed state

## Usage without context attribute
No specific installation. Just put your content in the header and body sections.

## Usage with context attribute
The context attribute will be ignored if `Collapsible` is set to `No`.
If the context attribute is set, the attribute value will be used to set the initial expanded/collapsed state.

## Header mode
The default styling of the widget matches the header mode `Div` of the default groupbox widget. For using header (enlarged text) styles, make sure to style your header content similar to the default groupbox if you want to match the styling.

## Styling
The widget can work with the same classes Mendix provides for the default group box widget. To make this easier you can adjust the settings.json file to add design properties for the widget. The test project in the GitHub repository has an [example](https://github.com/Itvisors/mendix-CustomGroupBoxWidget/blob/main/test/theme/settings.json)

Have a look at the Mendix documentation page on [design properties](https://docs.mendix.com/howto8/front-end/extend-design-properties-to-customize) for more information.

The design properties for the widget:

```
        "itvisors.customgroupboxwidget.CustomGroupBoxWidget": [
            {
                "name": "Style",
                "type": "Dropdown",
                "description": "Choose one of the following styles to change the appearance of the groupbox.",
                "options": [
                    {
                        "name": "Brand Default",
                        "class": "groupbox-default"
                    },
                    {
                        "name": "Brand Primary",
                        "class": "groupbox-primary"
                    },
                    {
                        "name": "Brand Inverse",
                        "class": "groupbox-inverse"
                    },
                    {
                        "name": "Brand Info",
                        "class": "groupbox-info"
                    },
                    {
                        "name": "Brand Success",
                        "class": "groupbox-success"
                    },
                    {
                        "name": "Brand Warning",
                        "class": "groupbox-warning"
                    },
                    {
                        "name": "Brand Danger",
                        "class": "groupbox-danger"
                    },
                    {
                        "name": "Transparent",
                        "class": "groupbox-transparent"
                    }
                ]
            },
            {
                "name": "Callout style",
                "type": "Toggle",
                "description": "Enable the groupbox callout functionality to highlight the importance of the groupbox.",
                "class": "groupbox-callout"
            }
        ]
```

## Issues, suggestions and feature requests
[link to GitHub issues](https://github.com/Itvisors/mendix-CustomGroupBoxWidget/issues)

