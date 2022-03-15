# theme-api
An api for student calculator project

## Run 
npm run serve

## Data
The json file goes
``` 
{
    "themes": [
        {theme1},
        {theme2}
    ]
}
```
There are seven properties to a theme

#### theme

`theme: "black"`

theme describes the theme

#### background

`background: "#18191A"`

background assigns the background color of the calculator with a hex code

#### shape

`shape: "rect"` || `shape: "circle"`

shape assigns the shape of the buttons on the calculator

#### color

`color: "#242526"`

color assigns the color of the buttons on the calculator with a hex code

#### onclick

`onclick: "#000000"` || `onclick: { transparent: false }`

onclick assigns the color of the button when the button is clicked with a hex code, 
or will set the transparency to false if it is true

#### text

`text: "#ffffff"`

text assigns the color of the text on the buttons with a hex code

#### transparent

`transparent: false`

transparent is a boolean value indicating whether the calculator, _everything but the text_, should be transparent

## Deployment
Deployed at https://theme-api1.herokuapp.com