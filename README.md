# Frontend Mentor - Devjobs web app solution

This is a solution to the [Devjobs web app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/devjobs-web-app-HuvC_LP4l). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

The challenge was to build out this jobs board using a local `data.json` to retrieve the data. The goal was to try to get the project looking as close to the design as possible.

Users should be able to:

- View the optimal layout for each page depending on their device's screen size
- See hover states for all interactive elements throughout the site
- Be able to filter jobs on the index page by title, location, and whether a job is for a full-time position
- Be able to click a job from the index page so that they can read more information and apply for the job
- **Bonus**: Have the correct color scheme chosen for them based on their computer preferences.

### Screenshot

![Design preview for the Devjobs web app coding challenge](./preview.jpg)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/devjobs-web-app-built-with-reactjs-and-styledcomponents-HypyYopLq](https://www.frontendmentor.io/solutions/devjobs-web-app-built-with-reactjs-and-styledcomponents-HypyYopLq)
- Live Site URL: [https://devjobs-webapp.netlify.app/](https://devjobs-webapp.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [React ROuter v6](https://reactrouter.com/docs/en/v6/getting-started/overview) - Routing
- [React Query](https://react-query.tanstack.com/) - Fetch, cache and update data in React
- [React Hook Form](https://react-hook-form.com/) - Performant, flexible and extensible forms with easy-to-use validation.
- [Styled Components](https://styled-components.com/) - CSS-In-JS styling solution
- [Material UI](https://mui.com/) - Fully-loaded component library for React

### What I learned

#### Table of contents for what I learned

- [Styled Components](#styled-components)
  - [How does it work?](#how-does-it-work)
  - [Dynamic Styles](#dynamic-styles)
  - [Extending Styles](#extending-styles)
- [Darkmode using prefers-color-scheme and local storage](#darkmode-using-prefers-color-scheme-and-local-storage)
- [URLSearchParams](#urlsearchparams)
  <!-- - [How to use React Routers useSearchParams?](#how-to-use-react-routers-usesearchparams) -->

I had a lot of fun working on this project, and there's a bunch of things I tried in the project, like styled-components, URL search params, Material UI, and using prefers-color-scheme and local storage for handling dark mode.

#### Styled Components

Styled components let you write actual CSS in your JavaScript which means you can use all the CSS features you love like media queries, pseudo-selectors, nesting and more.

The biggest benefit I got from using it in this project was maintaining my styles, it was a breeze finding the CSS that was affecting my components and also I could delete styles from one component and it would not affect other components. Another benefit I got was automatic vendor prefixing, meaning I didn't have to worry about what my project would look like on other browsers.

#### How does it work?

It works by using tagged template literals to style your components.

Every style is a react component, which means that when you're defining your styles, you're creating a normal react component that has your styles attached to it.

Here's an example that creates two components, a label, and input, with some styles attached to it:

```js
import styled from "styled-components/macro";
import { COLORS, WEIGHTS } from "../../constants";

// Create a Label component that renders a label tag with some styles
const Label = styled.label`
  flex-basis: 100%;

  @media ${QUERIES.tabletAndUp} {
    display: flex;
    flex-direction: row;
    align-items: center;
    max-height: 24px;
  }
`;

// Create a Input component that renders a input tag with some styles
const Input = styled.input`
  border: none;
  flex-shrink: 1;
  width: 90%;
  border-radius: 2px;
  caret-color: ${COLORS.violet[200]};
  background-color: var(--background);
  color: var(--inputText);

  &:focus-visible {
    outline: 2px solid ${COLORS.violet[200]};
  }

  @media ${QUERIES.tabletAndUp} {
    margin-left: 16px;
  }
`;

const Form = () => {
  return (
    <form>
      // Use Label and Input like normal react components with one exception,
      they're styled
      <Label>
        <Input
          type="text"
          name="title"
          aria-label="Filter by title, companies, expertise…"
          placeholder="Filter by title, companies, expertise…"
        />
      </Label>
      <Input type="submit" value="Submit" />
    </form>
  );
};
```

For a more detailed use case, take a look at my SearchBar component here: <https://github.com/salymk/devjobs-web-app/blob/develop/src/components/SearchBar/SearchBar.js>

#### Dynamic Styles

You can also create dynamic styles by using props. For example, I have a Checkbox component that I'm using in multiple places, and it comes with a label that has a different text based on the device's screen size. If the screen size is 768px, the text will be 'Full Time,' and if it's 1024px, it will be 'Full Time Only'.

So I created a Text component that has a textWidth prop.

```js
const Text = styled.span`
  margin-left: 16px;
  font-size: 1rem;
  font-weight: ${WEIGHTS.bold};
  overflow: hidden;
  white-space: nowrap;
  display: inline-block;
  text-overflow: clip;
  width: ${(props) => props.textWidth};
  color: var(--heading);

  @media ${QUERIES.desktopAndUp} {
    width: 108px;
  }
`;
```

When I use this Checkbox component, I can pass in a value to textWidth.

```js
// In the SearchBar component
<Checkbox
  onChange={(e) => field.onChange(e.target.checked)}
  checked={field.value}
  text="Full Time Only"
  textWidth="70px"
  aria-label="Full time only"
/>

// In the SearchModal component
<Checkbox
    onChange={(e) => field.onChange(e.target.checked)}
    checked={field.value}
    aria-label="Full Time Only"
    text="Full Time Only"
    textWidth="100%"
  />
```

For a more detailed use case, take a look at my Checkbox component here: <https://github.com/salymk/devjobs-web-app/blob/develop/src/components/Checkbox/Checkbox.js>

#### Extending Styles

Another benefit I got from using styled-components is extending styles. For example, I had a button that had three different variations, fill, outline, and ghost, and also the buttons had different sizes like small, medium, and large. Using styled-components to create one reusable button component was pretty easy.

First, I created a ButtonBase component that all of my other button variations will be based on.

```js
import styled from "styled-components/macro";
import { COLORS, WEIGHTS } from "../../constants";

const ButtonBase = styled.button`
  font-size: 1rem;
  border: none;
  padding: var(--padding);
  font-weight: ${WEIGHTS.bold};
  border-radius: 5px;
  line-height: 20px;
  text-decoration: none;
  cursor: pointer;

  &:active {
    transform: scale(0.98);
  }

  &:focus {
    outline-color: ${COLORS.violet[200]};
    outline-offset: 4px;
  }
`;
```

And then, to create the different button variations, I had to wrap ButtonBase in the styled() constructor.

```js
const FillButton = styled(ButtonBase)`
  background-color: ${COLORS.violet[200]};
  color: ${COLORS.white};

  &:hover {
    background-color: hsla(235, 82%, 77%, 1);
  }
`;

const OutlineButton = styled(ButtonBase)`
  background-color: hsla(235, 69%, 61%, 0.1);
  color: ${COLORS.violet[200]};

  &:hover {
    background-color: hsla(235, 69%, 61%, 0.35);
  }
`;

const GhostButton = styled(ButtonBase)`
  background-color: ${COLORS.white};
`;
```

All these button components inherit the styles from ButtonBase and include the new styles.

And now, when I need a button, I can easily switch between the different variations.

```js
// In the SearchBar component
<DesktopSearchButton type="submit" variant="fill" size="medium">
  Search
</DesktopSearchButton>

<Button
  type="submit"
  aria-label="Search"
  variant="fill"
  size="small"
>
  <StyledSearchIcon alt="Search" fill="#FFF" />
</Button>

// In the Job component
<StyledButton
  variant="outline"
  size="medium"
  href={job.website}
  target="_blank"
  rel="noreferrer"
>
  Company Site
</StyledButton>
```

For a more detailed use case, take a look at my Button component here: <https://github.com/salymk/devjobs-web-app/blob/develop/src/components/Button/Button.js>

#### Darkmode using prefers-color-scheme and local storage

In all of the different ways I have tried handling dark mode, or I have seen other people handle it, I think this is the best way to do it, and that's because this solution has the best user experience.

This solution checks whether the user has set a preferred theme on their device before applying dark mode or light mode. The user's choice also persists through page refreshes, page closes, and new tabs.

Let's get to it; first, you need to create CSS variables in your :root element and create two classes for dark and light mode.

```css
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
```

Then you need to pass these variables to all of the components that will change colors. Start with the background of your body element

```css
body {
  line-height: 1.5;
  -webkit-font-smoothing: antialiased;
  font-family: "Kumbh Sans";
  font-display: optional;
  background-color: var(--body);
}
```

and any other components that will have their colors changed.

```js
const Title = styled.h2`
  color: var(--heading);
  font-size: ${20 / 16 + "rem"};
  line-height: 25px;
  margin: 13px 0;
`;
```

And now we're going to create a hook that will use localStorage to remember the user's chosen mode, default to their browser or OS level
setting using the prefers-color-scheme media query and manage the setting of a .dark className on the body to apply our styles.

```js
import { useEffect } from "react";
// A custom Hook that provides a multi-instance, multi-tab/browser shared and persistent state.
import createPersistedState from "use-persisted-state";
// The useMedia hook makes it super easy to utilize media queries in your component logic,
// you can find it here: https://usehooks.com/useMedia/
import useMedia from "./useMedia";

// use-persisted-state is not a hook itself, but is a factory that accepts a
// storage key('localDarkMode') and an optional storage provider (default = localStorage) and
// returns a hook(useLocalDarkMode) that you can use as a direct replacement for useState.
const useLocalDarkMode = createPersistedState("localDarkMode");

// Compose our useMedia hook to detect dark mode preference.
// The API for useMedia looks a bit weird, but that's because ...
// ... it was designed to support multiple media queries and return values.
// Thanks to hook composition we can hide away that extra complexity!
function usePrefersDarkMode() {
  return useMedia(["(prefers-color-scheme: dark)"], [true], false);
}

// This hook handles all the stateful logic required to add a dark mode toggle to Devjobs.
// It uses localStorage to remember the user's chosen mode, defaults to their browser or OS level
// setting using the prefers-color-scheme media query and manages the setting of a .dark className on body to apply our styles.
const useDarkMode = () => {
  // See if user has set a browser or OS preference for dark mode.
  const prefersDarkMode = usePrefersDarkMode();
  // Use our useLocalDarkMode hook to persist state through a page refresh.
  const [isDarkMode, setIsDarkMode] = useLocalDarkMode(prefersDarkMode);

  // If isDarkMode is undefined use system prefence, otherwise fallback to isDarkMode.
  // This allows user to override OS level setting on our website.
  const enabled = isDarkMode === undefined ? prefersDarkMode : isDarkMode;

  // Fire off effect that add/removes dark mode class
  useEffect(() => {
    const root = window.document.documentElement;
    if (enabled) {
      root.classList.remove("light");
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }
  }, [enabled]);

  return {
    isDarkMode,
    setIsDarkMode,
  };
};

export default useDarkMode;
```

And finally, we need to use our useDarkMode hook in our ToggleDarkMode component.

```js
import useDarkMode from "../../hooks/useDarkMode";

const ToggleDarkMode = () => {
  const { isDarkMode, setIsDarkMode } = useDarkMode();

  const label = {
    componentsProps: {
      input: { "aria-label": "Toggle dark mode" },
    },
  };

  return (
    <Wrapper>
      <StyledSun aria-hidden="true" />
      <SwitchUnstyled
        component={Root}
        {...label}
        checked={isDarkMode}
        onChange={(e) => setIsDarkMode(e.target.checked)}
      />
      <StyledMoon aria-hidden="true" />
    </Wrapper>
  );
};

export default ToggleDarkMode;
```

#### URLSearchParams

URLSearchParams is an API in all major browsers except for IE, and it gives you utility methods to work with query strings.

Query strings are the ? and & signs you see in your URL; for example, when you search for Traversy Media on YouTube,
you get this in your URL: "https://www.youtube.com/results?search_query=traversy+media" you can take this URL and search it in your browser, and you'll get the same results. So query strings allow us to pass state through the URL.

Here are some methods you get when you use URLSearchParams:

- URLSearchParams.get() - Returns the first value associated with the given search parameter.
- URLSearchParams.set() - Sets the value associated with a given search parameter to the given value.
- URLSearchParams.has() - Returns a boolean value indicating if such a given parameter exists.

You can find a bunch more here: <https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams>

#### How to use React Routers useSearchParams?

In version 6 of React Router, they introduced a new custom hook to work with URLSearchParams called useSearchParams which acts as a container over the browser URLSearchParams API. It returns an array, with the first element being an instance of URLSearchParams (comes with all of the utility methods), and the second one is a way to update the query string.

Here's an example of how I used it in this app.

```js
import { useSearchParams } from "react-router-dom";

const Jobs = () => {
  const [search, setSearch] = useSearchParams();

  // Get search params
  const titleParam = search.get("title") || "";
  const mobileTitleParam = search.get("mobileTitle") || "";
  const locationParam = search.get("location") || "";
  const modalLocationParam = search.get("modalLocation") || "";
  const contractParam = JSON.parse(search.get("contract"));
  const modalContractParam = JSON.parse(search.get("modalContract"));

  // Assign search param values
  const title = titleParam || mobileTitleParam;
  const location = locationParam || modalLocationParam;
  const contract = contractParam || modalContractParam;

  const formSubmitHandler = (data) => {
    // Create search params with form input
    setSearch(data);
    handleClose();
  };

  // Then pass those search param values into filter methods
  return (...)
};
```

And now, if a user searches for a senior dev job and clicks on a job and then goes back to the search page, their search results will still be there, which makes for a great user experience.

### Continued development

I plan to turn this into a fullstack app, users will be able to sign up and create jobs.

### Useful resources

- [Custom Checkbox](https://medium.com/@colebemis/building-a-checkbox-component-with-react-and-styled-components-8d3aa1d826dd) - This article helped me built a custom checkbox using styled components.
- [usehooks.com](https://usehooks.com) - This site has a lot of reusable hooks that you can use for free. I was able to implement dark mode with their useMedia and useDarkMode hooks.

## Author

- Website - [salymakhmedov.dev](https://www.salymakhmedov.dev/)
- Frontend Mentor - [@salymk](https://www.frontendmentor.io/profile/salymk)
- LinkedIn - [@salym-akhmedov](https://www.linkedin.com/in/salym-akhmedov/)
- Twitter - [@akhmedov_salym](https://twitter.com/akhmedov_salym)

## Acknowledgments

- [@izakbar](https://www.linkedin.com/in/izakbar/) - Idris Akbar is a scrum master that helped me create the initial user stories for this project.
- [@willklein\_](https://twitter.com/willklein_) - Will Klein gave me lots of feedback while working on this project.
