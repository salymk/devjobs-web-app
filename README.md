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

- Solution URL: [Add solution URL here](https://your-solution-url.com)
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
