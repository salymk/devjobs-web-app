import { createGlobalStyle } from "styled-components/macro";
import "@fontsource/kumbh-sans";
import "@fontsource/kumbh-sans/700.css";
import { COLORS } from "../../constants";

const GlobalStyles = createGlobalStyle`
    :root {
    --body: #F2F2F2; 
    --background: white;
    --inputText: ${COLORS.dark[200]};
    --checkbox: hsla(219, 29%, 14%, .1);
    --heading: ${COLORS.dark[100]};
    --text: ${COLORS.gray[300]};
    --filterIcon: #6E8098;
    --outlineButton: hsla(235, 69%, 61%, 0.1);
    --outlineButtonHover: hsla(235, 69%, 61%, 0.35);
    --outlineButtonText: ${COLORS.violet[200]};
    }

    .light {
      --body: #F2F2F2; 
      --background: white;
      --inputText: ${COLORS.dark[200]};
      --checkbox: hsla(219, 29%, 14%, .1);
      --heading: ${COLORS.dark[100]};
      --text: ${COLORS.gray[300]};
      --filterIcon: #6E8098;
      --outlineButton: hsla(235, 69%, 61%, 0.1);
      --outlineButtonHover: hsla(235, 69%, 61%, 0.35);
      --outlineButtonText: ${COLORS.violet[200]};
    }

  .dark {
      --body: ${COLORS.dark[200]};
      --background: ${COLORS.dark[100]};
      --inputText: ${COLORS.white};
      --checkbox: #313743;
      --heading: ${COLORS.white};
      --text: ${COLORS.gray[300]};
      --filterIcon: #FFFF;
      --outlineButton: #303642;
      --outlineButtonHover: #525861;
      --outlineButtonText: ${COLORS.white};
    } 


    // CSS Reset from CSS For JS Developers
    /*
    1. Use a more-intuitive box-sizing model.
    */
    *, *::before, *::after {
    box-sizing: border-box;
    }
    /*
    2. Remove default margin
    */
    * {
    margin: 0;
    }
    /*
    3. Allow percentage-based heights in the application
    */
    html, body {
    height: 100%;
    }

    /*
    Typographic tweaks!
    4. Add accessible line-height
    5. Improve text rendering
    */
    body {
      line-height: 1.5;
      -webkit-font-smoothing: antialiased;
      font-family: "Kumbh Sans";
      font-display: optional;
      background-color: var(--body);
    }

    /*
    6. Improve media defaults
    */
    img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
    }
    /*
    7. Remove built-in form typography styles
    */
    input, button, textarea, select {
    font: inherit;
    }
    /*
    8. Avoid text overflows
    */
    p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
    }
    /*
    9. Create a root stacking context
    */
    #root, #__next {
    isolation: isolate;
    }

/* suppress focus ring on form controls for mouse users */
    [data-whatintent='mouse'] *:focus {
  outline: none;
}
`;

export default GlobalStyles;
