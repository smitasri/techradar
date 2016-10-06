Build Your Own Technology Radar.

Inspired by the ThoughtWorks Tech Radar: http://www.thoughtworks.com/radar/.

I love the ThoughtWorks Radar. But it is for all clients, averaged out across industries, organisational maturity and risk adverseness.

![Technology Radar Sample](/techradar_example.png?raw=true)

In this branch\version  customization of technology radar is added which automatically lays out the points based on table based structure.
Input are required in comma seperated values (a table based structure) here for itmename , quadrant name and arc name , in which that item lies .
The polarcoordinates for the blips automaticaly generated based on random number generation function within the range of quadrant and arcs.

 Eg. {name:'Cool Tech', r:50, t:30} // we neeed to provide only 'Cool Tech' and quadrant name and arc name in csv, polar coordinates will be generated.(function is added in radar.js here to generate polar coordinates)

Output would be techradar rendered as SVG within html and we can export generated techradar as png file for further use.

Where r = radius, and t = theta; the degrees in radians. with 0/360 degrees being the typical right hand x line rotating in an anti-clockwise direction.
See http://en.wikipedia.org/wiki/Polar_coordinates for more details.
