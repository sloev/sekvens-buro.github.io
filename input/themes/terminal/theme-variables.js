/*
 * Custom function used to generate the output of the theme variables
 */

var generateThemeVariables = function (params) {
  let fontParams = {
    'system-ui': {
      name: 'SystemUI',
      family: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      hasItalic: false
    },
    'adventpro': {
      name: 'Advent Pro',
      family: '\'Advent Pro\', sans-serif',
      weight: '100 900',
      hasItalic: true
    },
    'aleo': {
      name: 'Aleo',
      family: '\'Aleo\', serif',
      weight: '100 900',
      hasItalic: true
    },
    'andadapro': {
      name: 'Andada Pro',
      family: '\'Andada Pro\', serif',
      weight: '400 840',
      hasItalic: true
    },
    'antonio': {
      name: 'Antonio',
      family: '\'Antonio\', sans-serif',
      weight: '100 700',
      hasItalic: false
    },
    'archivonarrow': {
      name: 'Archivo Narrow',
      family: '\'Archivo Narrow\', sans-serif',
      weight: '400 700',
      hasItalic: true
    },
    'asap': {
      name: 'Asap',
      family: '\'Asap\', sans-serif',
      weight: '400 700',
      hasItalic: true
    },
    'assistant': {
      name: 'Assistant',
      family: '\'Assistant\', sans-serif',
      weight: '200 800',
      hasItalic: false
    },
    'besley': {
      name: 'Besley',
      family: '\'Besley\', serif',
      weight: '400 900',
      hasItalic: true
    },
    'bitter': {
      name: 'Bitter',
      family: '\'Bitter\', serif',
      weight: '100 900',
      hasItalic: true
    },
    'brygada1918': {
      name: 'Brygada 1918',
      family: '\'Brygada 1918\', serif',
      weight: '400 700',
      hasItalic: true
    },
    'cabin': {
      name: 'Cabin',
      family: '\'Cabin\', sans-serif',
      weight: '400 700',
      hasItalic: true
    },
    'cairo': {
      name: 'Cairo',
      family: '\'Cairo\', sans-serif',
      weight: '200 1000',
      hasItalic: false
    },
    'comfortaa': {
      name: 'Comfortaa',
      family: '\'Comfortaa\', cursive',
      weight: '300 700',
      hasItalic: false
    },
    'dancingscript': {
      name: 'Dancing Script',
      family: '\'Dancing Script\', cursive',
      weight: '400 700',
      hasItalic: false
    },
    'dosis': {
      name: 'Dosis',
      family: '\'Dosis\', sans-serif',
      weight: '200 800',
      hasItalic: false
    },
    'domine': {
      name: 'Domine',
      family: '\'Domine\', serif',
      weight: '400 700',
      hasItalic: false
    },
    'exo': {
      name: 'Exo',
      family: '\'Exo\', sans-serif',
      weight: '100 900',
      hasItalic: true
    },
    'faustina': {
      name: 'Faustina',
      family: '\'Faustina\', serif',
      weight: '300 800',
      hasItalic: true
    },
    'figtree': {
      name: 'Figtree',
      family: '\'Figtree\', sans-serif',
      weight: '300 900',
      hasItalic: true
    },
    'frankruhllibre': {
      name: 'Frank Ruhl Libre',
      family: '\'Frank Ruhl Libre\', serif',
      weight: '300 900',
      hasItalic: false
    },
    'glory': {
      name: 'Glory',
      family: '\'Glory\', sans-serif',
      weight: '100 800',
      hasItalic: true
    },
    'gluten': {
      name: 'Gluten',
      family: '\'Gluten\', cursive',
      weight: '100 900',
      hasItalic: false
    },
    'heebo': {
      name: 'Heebo',
      family: '\'Heebo\', sans-serif',
      weight: '100 900',
      hasItalic: false
    },
    'imbue': {
      name: 'Imbue',
      family: '\'Imbue\', serif',
      weight: '100 900',
      hasItalic: false
    },
    'instrumentsans': {
      name: 'Instrument Sans',
      family: '\'Instrument Sans\', serif',
      weight: '400 700',
      hasItalic: true
    },
    'jetbrainsmono': {
      name: 'JetBrains Mono',
      family: '\'JetBrains Mono\', monospace',
      weight: '100 800',
      hasItalic: true
    },
    'jura': {
      name: 'Jura',
      family: '\'Jura\', sans-serif',
      weight: '300 700',
      hasItalic: false
    },
    'karla': {
      name: 'Karla',
      family: '\'Karla\', sans-serif',
      weight: '200 800',
      hasItalic: true
    },
    'kreon': {
      name: 'Kreon',
      family: '\'Kreon\', serif',
      weight: '300 700',
      hasItalic: false
    },
    'labrada': {
      name: 'Labrada',
      family: '\'Labrada\', serif',
      weight: '100 900',
      hasItalic: true
    },
    'lemonada': {
      name: 'Lemonada',
      family: '\'Lemonada\', cursive',
      weight: '300 700',
      hasItalic: false
    },
    'lexend': {
      name: 'Lexend',
      family: '\'Lexend\', sans-serif',
      weight: '100 900',
      hasItalic: false
    },
    'librefranklin': {
      name: 'Libre Franklin',
      family: '\'Libre Franklin\', sans-serif',
      weight: '100 900',
      hasItalic: true
    },
    'lora': {
      name: 'Lora',
      family: '\'Lora\', serif',
      weight: '400 700',
      hasItalic: true
    },
    'manuale': {
      name: 'Manuale',
      family: '\'Manuale\', serif',
      weight: '300 800',
      hasItalic: true
    },
    'manrope': {
      name: 'Manrope',
      family: '\'Manrope\', sans-serif',
      weight: '100 900',
      hasItalic: false
    },
    'mavenpro': {
      name: 'Maven Pro',
      family: '\'Maven Pro\', sans-serif',
      weight: '400 900',
      hasItalic: false
    },
    'merriweathersans': {
      name: 'Merriweather Sans',
      family: '\'Merriweather Sans\', sans-serif',
      weight: '300 800',
      hasItalic: true
    },
    'montserrat': {
      name: 'Montserrat',
      family: '\'Montserrat\', sans-serif',
      weight: '100 900',
      hasItalic: true
    },
    'nunito': {
      name: 'Nunito',
      family: '\'Nunito\', sans-serif',
      weight: '200 1000',
      hasItalic: true
    },
    'orbitron': {
      name: 'Orbitron',
      family: '\'Orbitron\', sans-serif',
      weight: '400 900',
      hasItalic: false
    },
    'oswald': {
      name: 'Oswald',
      family: '\'Oswald\', sans-serif',
      weight: '200 700',
      hasItalic: false
    },
    'petrona': {
      name: 'Petrona',
      family: '\'Petrona\', serif',
      weight: '100 900',
      hasItalic: true
    },
    'playfairdisplay': {
      name: 'Playfair Display',
      family: '\'Playfair Display\', serif',
      weight: '400 900',
      hasItalic: true
    },
    'plusjakartasans': {
      name: 'Plus Jakarta Sans',
      family: '\'Plus Jakarta Sans\', sans-serif',
      weight: '200 800',
      hasItalic: true
    },
    'publicsans': {
      name: 'Public Sans',
      family: '\'Public Sans\', sans-serif',
      weight: '100 900',
      hasItalic: true
    },
    'quicksand': {
      name: 'Quicksand',
      family: '\'Quicksand\', sans-serif',
      weight: '300 700',
      hasItalic: false
    },
    'raleway': {
      name: 'Raleway',
      family: '\'Raleway\', sans-serif',
      weight: '100 900',
      hasItalic: true
    },
    'redhatdisplay': {
      name: 'Red Hat Display',
      family: '\'Red Hat Display\', sans-serif',
      weight: '300 900',
      hasItalic: true
    },
    'redhatmono': {
      name: 'Red Hat Mono',
      family: '\'Red Hat Mono\', monospace',
      weight: '300 700',
      hasItalic: true
    },
    'robotoflex': {
      name: 'Roboto Flex',
      family: '\'Roboto Flex\', sans-serif',
      weight: '100 900',
      hasItalic: false
    },
    'robotoslab': {
      name: 'Roboto Slab',
      family: '\'Roboto Slab\', serif',
      weight: '100 900',
      hasItalic: false
    },
    'rokkitt': {
      name: 'Rokkitt',
      family: '\'Rokkitt\', serif',
      weight: '100 900',
      hasItalic: true
    },
    'rubik': {
      name: 'Rubik',
      family: '\'Rubik\', sans-serif',
      weight: '300 900',
      hasItalic: true
    },
    'ruda': {
      name: 'Ruda',
      family: '\'Ruda\', sans-serif',
      weight: '400 900',
      hasItalic: false
    },
    'smoochsans': {
      name: 'Smooch Sans',
      family: '\'Smooch Sans\', sans-serif',
      weight: '100 900',
      hasItalic: false
    },
    'sourcecodepro': {
      name: 'Source Code Pro',
      family: '\'Source Code Pro\', monospace',
      weight: '200 900',
      hasItalic: true
    },
    'spartan': {
      name: 'Spartan',
      family: '\'Spartan\', sans-serif',
      weight: '100 900',
      hasItalic: false
    },
    'urbanist': {
      name: 'Urbanist',
      family: '\'Urbanist\', sans-serif',
      weight: '100 900',
      hasItalic: true
    },
    'worksans': {
      name: 'Work Sans',
      family: '\'Work Sans\', sans-serif',
      weight: '100 900',
      hasItalic: true
    },
    'yanonekaffeesatz': {
      name: 'Yanone Kaffeesatz',
      family: '\'Yanone Kaffeesatz\', sans-serif',
      weight: '200 700',
      hasItalic: false
    },
    'yrsa': {
      name: 'Yrsa',
      family: '\'Yrsa\', serif',
      weight: '300 700',
      hasItalic: true
    }
  };
  
  let fontBodyName = fontParams[params.fontBody]?.name;
  let fontBodyFamily = fontParams[params.fontBody]?.family;
  let fontBodyWeight = fontParams[params.fontBody]?.weight;
  let fontBodyHasItalic = fontParams[params.fontBody]?.hasItalic;
  
  let fontHeadingsName = fontParams[params.fontHeadings]?.name;
  let fontHeadingsFamily = fontParams[params.fontHeadings]?.family;
  let fontHeadingsWeight = fontParams[params.fontHeadings]?.weight;
  let fontHeadingsHasItalic = fontParams[params.fontHeadings]?.hasItalic;
  
  let output = '';
  let loadedFonts = new Set();
  
  const addFontFace = (key, name, weight, hasItalic) => {
    if (!loadedFonts.has(name)) {
      output += `             
        @font-face {
          font-family: '${name}';
          src: url('../dynamic/fonts/${key}/${key}.woff2') format('woff2');
          font-weight: ${weight};
          font-display: swap;
          font-style: normal;
        }
      `;
      loadedFonts.add(name);
    }
    if (hasItalic && !loadedFonts.has(`${name}-italic`)) {
      output += `             
        @font-face {
          font-family: '${name}';
          src: url('../dynamic/fonts/${key}/${key}-italic.woff2') format('woff2');
          font-weight: ${weight}; 
          font-display: swap;
          font-style: italic;
        }
      `;
      loadedFonts.add(`${name}-italic`);
    }
  };
  
  if (params.fontBody !== 'system-ui') {
    addFontFace(params.fontBody, fontBodyName, fontBodyWeight, params.fontBodyItalic && fontBodyHasItalic);
  }
  
  if (params.fontHeadings !== 'system-ui') {
    addFontFace(params.fontHeadings, fontHeadingsName, fontHeadingsWeight, params.fontHeadingsItalic && fontHeadingsHasItalic);
  }
  
  if (params.fontMenu === 'system-ui') {
    params.fontMenu = fontParams['system-ui'].family;
  }
  
  if (params.fontLogo === 'system-ui') {
    params.fontLogo = fontParams['system-ui'].family;
  }

   // Fluid base font-size
   const minScreen = 20; // rem
   const maxScreen = 70; // rem
   const screenRange = maxScreen - minScreen;
   const minFontSize = params.minFontSize;
   const maxFontSize = params.maxFontSize;
   const fontSizeRange = maxFontSize - minFontSize;
   const fontSizeValue = `clamp(${minFontSize}rem, ${minFontSize}rem + (${fontSizeRange} * ((100vw - ${minScreen}rem) / ${screenRange})), ${maxFontSize}rem)`;

// Conversion of HEX to RGB
function hexToRgb(hex) {
  let r = 0, g = 0, b = 0;

  if (hex.length === 4) {
    r = "0x" + hex[1] + hex[1];
    g = "0x" + hex[2] + hex[2];
    b = "0x" + hex[3] + hex[3];
  } else if (hex.length === 7) {
    r = "0x" + hex[1] + hex[2];
    g = "0x" + hex[3] + hex[4];
    b = "0x" + hex[5] + hex[6];
  }
  
  return [+(r), +(g), +(b)];
}

// Conversion of RGB to HSL
function rgbToHsl(r, g, b) {
  r /= 255, g /= 255, b /= 255;
  let max = Math.max(r, g, b), min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; 
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return [Math.round(h * 360), Math.round(s * 100) + '%', Math.round(l * 100) + '%'];
}

// Conversion of RGBA to RGB
function rgbaToRgb(rgba) {
  const rgbMatch = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!rgbMatch) {
    return null;
  }
  const [r, g, b] = rgbMatch.slice(1);
  return [parseInt(r), parseInt(g), parseInt(b)];
}

// Conversion of HSLA to HSL
function hslaToHsl(hsla) {
  const hslMatch = hsla.match(/hsla?\((\d+),\s*(\d+)%,\s*(\d+)%/);
  if (!hslMatch) {
    return null;
  }
  const [h, s, l] = hslMatch.slice(1);
  return `${h}, ${s}%, ${l}%`;
}

// Logic for choosing an accent color
let accentHSL;
if (params.accentColor === 'custom') {
  let customColor = params.customAccentColor;

  if (customColor.startsWith('hsla')) {
    accentHSL = hslaToHsl(customColor);
  } else if (customColor.startsWith('rgba')) {
    const rgb = rgbaToRgb(customColor);
    accentHSL = rgbToHsl(...rgb).join(', ');
  } else if (customColor.startsWith('#')) {
    const rgb = hexToRgb(customColor);
    accentHSL = rgbToHsl(...rgb).join(', ');
  } else {
    accentHSL = customColor; 
  }
} else {
  accentHSL = params.accentColor;
}

  output += `    
    :root {
      --page-margin:        20px;
      --page-width:         ${params.pageWidth}; 
      --navbar-height:      34px; 
      --border-radius:      0;
      --baseline:           0.25rem;
      --gallery-gap:        ${params.galleryItemGap}; 
      --transition:         all 0.24s ease-out;
      --body-font:          ${fontBodyFamily};
      --heading-font:       ${fontHeadingsFamily};
      --logo-font:          ${params.fontLogo};
      --menu-font:          ${params.fontMenu};
      --font-size:          ${fontSizeValue};
      --font-weight-normal: ${params.fontBodyWeight}; 
      --font-weight-bold:   ${params.fontBoldWeight}; 
      --line-height:        ${params.lineHeight};
      --letter-spacing:     ${params.letterSpacing}em;
      --headings-weight:    ${params.fontHeadignsWeight};
      --headings-transform: ${params.fontHeadingsTransform};
      --headings-style:     ${params.fontHeadingsStyle};
      --headings-letter-spacing: ${params.fontHeadingsletterSpacing}em;
      --headings-line-height: ${params.fontHeadingsLineHeight};
      --accent:             ${accentHSL};
      --background:         248, 11%, 15%;
      --color:              0,0%,100%;
      --highlight-color:    #FFA96B;
      --info-color:         #A8D8FF;
      --success-color:      #6DD18C;
      --warning-color:      #FF8789;
    }

    @media all and (min-width: 42.75em) {
      :root {
        --page-margin: 40px;
      }
    }
 `;

  return output;
}

module.exports = generateThemeVariables;