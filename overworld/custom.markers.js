/*

This is a JavaScript file you can edit to add custom markers to the map.
uNmINeD does not overwrite this file during map generation.

Steps:

    1. Edit this file using Notepad or a code editor (do not use document editors like Microsoft Word)
    2. Change the line "isEnabled: false," to "isEnabled: true," to display the markers
    3. Change or remove the example markers
    4. Add your own markers

Marker format:

    {
        x: X coordinate of the marker (in Minecraft block units),
        z: Z coordinate of the marker (in Minecraft block units),
        image: marker image URL to display (in quotes),
        imageScale: scale of the image (e.g. 1 = display full size, 0.5 = display half size),
        imageAnchor: [0.5, 1] means the tip of the pin is at the center-bottom of the image (see OpenLayers documentation for more info),
        text: marker text do display (in quotes),
        textColor: text color in HTML/CSS format (in quotes),
        offsetX: horizontal pixel offset of the text,
        offsetY: vertical pixel offset of the text,
        font: text font in HTML/CSS format (in quotes),
    },

Things to keep in mind:

* There are opening and closing brackets for each marker "{" and "}"
* Property names are case sensitive (i.e. "textColor" is okay, "TextColor" is not)
* There is a comma (",") at the end of each line except the opening brackets ("{")

You can use https://mapmarker.io/editor to generate custom pin images.
Use the imageScale property if the pin image is too large.

*/

UnminedCustomMarkers = {

    isEnabled: true,

    markers: [

        {
            x: -35,
            z: -46,
            image: "icons/spawn.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Spawn",
            textColor: "black", 
			offsetX: 2,
            offsetY: 20,
            font: "20px Calibri,sans serif",
        },
        {
            x: -1091,
            z: 668,
            image: "icons/home.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Tribe & DB",
            textColor: "black", 
			offsetX: 2,
            offsetY: 20,
            font: "20px Calibri,sans serif",
        },
		{
            x: 1004,
            z: 2784,
            image: "icons/home.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "NickiJ",
            textColor: "black", 
			offsetX: 2,
            offsetY: 20,
            font: "20px Calibri,sans serif",
        },
		{
            x: 3016,
            z: 3576,
            image: "icons/home.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "all3inches & hannuhbis",
            textColor: "black", 
			offsetX: 2,
            offsetY: 20,
            font: "20px Calibri,sans serif",
        },
		{
            x: 1533,
            z: -1300,
            image: "icons/home.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "DJ Moy & Roguefire",
            textColor: "black", 
			offsetX: 2,
            offsetY: 20,
            font: "20px Calibri,sans serif",
        },
		{
            x: 1414,
            z: -376,
            image: "icons/home.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "DJ Moy & Roguefire",
            textColor: "black", 
			offsetX: 2,
            offsetY: 20,
            font: "20px Calibri,sans serif",
        },
		{
            x: -924,
            z: -22,
            image: "icons/home.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "BBubbles, Puff",
            textColor: "black", 
			offsetX: 2,
            offsetY: 20,
            font: "20px Calibri,sans serif",
        },
		{
            x: 1900,
            z: 200,
            image: "icons/home.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Larchen",
            textColor: "black", 
			offsetX: 2,
            offsetY: 20,
            font: "20px Calibri,sans serif",
        },
		{
            x: 490,
            z: -1900,
            image: "icons/home.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Amegapint",
            textColor: "black", 
			offsetX: 2,
            offsetY: 20,
            font: "20px Calibri,sans serif",
        },
		{
            x: -872,
            z: -2424,
            image: "icons/home.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Defgha & Ugo",
            textColor: "black", 
			offsetX: 2,
            offsetY: 20,
            font: "20px Calibri,sans serif",
        },
		{
            x: -935,
            z: -1770,
            image: "icons/raid.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Defgha & Ugo",
            textColor: "black", 
			offsetX: 2,
            offsetY: 20,
            font: "20px Calibri,sans serif",
        },
		{
            x: 24,
            z: 680,
            image: "icons/home.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Anthony Sunkist",
            textColor: "black", 
			offsetX: 2,
            offsetY: 20,
            font: "20px Calibri,sans serif",
        },
		{
            x: -215,
            z: 211,
            image: "icons/home.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Anthony Sunkist",
            textColor: "black", 
			offsetX: 2,
            offsetY: 20,
            font: "20px Calibri,sans serif",
        }
        




     
    ]
}
