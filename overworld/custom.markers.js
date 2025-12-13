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
            x: -270,
            z: 886,
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
            x: 32,
            z: 322,
            image: "icons/creeper.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Tribe & DB",
            textColor: "black", 
			offsetX: 2,
            offsetY: 20,
            font: "20px Calibri,sans serif",
        },
		{
            x: 69,
            z: 898,
            image: "icons/home.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Nicki",
            textColor: "black", 
			offsetX: 2,
            offsetY: 20,
            font: "20px Calibri,sans serif",
        },
		{
            x: -2295,
            z: 643,
            image: "icons/creeper.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Nicki",
            textColor: "black", 
			offsetX: 2,
            offsetY: 20,
            font: "20px Calibri,sans serif",
        },
		{
            x: -2122,
            z: 436,
            image: "icons/raid.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Nicki",
            textColor: "black", 
			offsetX: 2,
            offsetY: 20,
            font: "20px Calibri,sans serif",
        },
		{
            x: -2456,
            z: -6936,
            image: "icons/home.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Defgha",
            textColor: "black", 
			offsetX: 2,
            offsetY: 20,
            font: "20px Calibri,sans serif",
        },
		{
            x: -5913,
            z: -7271,
            image: "icons/raid.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Defgha",
            textColor: "black", 
			offsetX: 2,
            offsetY: 20,
            font: "20px Calibri,sans serif",
        },
		{
            x: -1520,
            z: -6763,
            image: "icons/stone.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Defgha",
            textColor: "black", 
			offsetX: 2,
            offsetY: 20,
            font: "20px Calibri,sans serif",
        },
		{
            x: -1877,
            z: -6960,
            image: "icons/snow.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Defgha",
            textColor: "black", 
			offsetX: 2,
            offsetY: 20,
            font: "20px Calibri,sans serif",
        },
		{
            x: -2241,
            z: -7063,
            image: "icons/mud.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Defgha",
            textColor: "black", 
			offsetX: 2,
            offsetY: 20,
            font: "20px Calibri,sans serif",
        },
		{
            x: 8,
            z: -2888,
            image: "icons/home.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "LuckyCroi",
            textColor: "black", 
			offsetX: 2,
            offsetY: 20,
            font: "20px Calibri,sans serif",
        },
		{
            x: -114,
            z: 1523,
            image: "icons/home.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "Bunny",
            textColor: "black", 
			offsetX: 2,
            offsetY: 20,
            font: "20px Calibri,sans serif",
        },
		{
            x: -454,
            z: 393,
            image: "icons/home.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "ZzzenGardener",
            textColor: "black", 
			offsetX: 2,
            offsetY: 20,
            font: "20px Calibri,sans serif",
        },
		{
            x: 945,
            z: -346,
            image: "icons/home.png",
            imageAnchor: [0.5, 1],
            imageScale: 0.3,
            text: "ZzzenGardener",
            textColor: "black", 
			offsetX: 2,
            offsetY: 20,
            font: "20px Calibri,sans serif",
        },
        // add your markers here




        // do not delete the following two closing brackets
    ]
}
