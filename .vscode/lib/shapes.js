function generateSVG(userResponses) {
    if (userResponses.shape === 'circle') {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">

  <circle cx="150" cy="100" r="80" fill="${userResponses.shapeColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${userResponses.textColor}">${userResponses.name}</text>

</svg>`;
    }

}


module.exports = generateSVG;