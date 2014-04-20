jQuery plugin that automatically embeds the Google Docs Viewer for viewing pdf, doc, docx, ppt and tiff files linked to by anchor tags.

The Google Docs Viewer is an embeddable browser-based viewer that requires only a URL to a file available online. This neatly bypasses the need for users to have compatible software on their machines for those file types and displays the document right in the browser.

## Usage

1. Add jQuery and the gDocsViewer plugin to the page.
```html
<head>
<script type="text/javascript" src="jquery.min.js"></script>
<script type="text/javascript" src="jquery.gdocsviewer.min.js"></script>
</head>
```

2. Set some class name or id to the anchor tag for all URLs to files that you want to be displayed using the Google Docs Viewer. E.g. "embed"
```html
<a href="urltofile.pdf" class="embed">Download file</a>
<a href="urltofile.pdf" id="embedURL">Download file</a>
```

3. Initialize gDocsViewer and set it to process the URL with id or all URLs with the class name set in the previous step.
```js
$('a.embed').gdocsViewer();
$('#embedURL').gdocsViewer();
```

## Customization

The plugin offers two configuration options that set the width and height of the embedded document IFRAME. This can be set when the plugin is initialized.
1.
$('a.embed').gdocsViewer({ width: 400, height: 500 });

The plugin inserts a the IFRAME for the viewer inside an injected DIV. The DIV tags all carry the class name "gdocsviewer", which allow for styling all the gdocsViewer instances via CSS. If the anchor tag has the ID attribute defined, then the injected DIV tag is also set an ID attribute in the format of ID_of_Anchor + '-gdocsviewer'. See the demo source code for more details.

## Demo
- Check out the live demonstration (http://www.jawish.org/blog/uploads/jquery.gdocsviewer_demo.html)

## License
This script is released under the Open Source MIT License, allowing its use in both personal and commercial applications as long as the copyright and license permission notice remains intact.
