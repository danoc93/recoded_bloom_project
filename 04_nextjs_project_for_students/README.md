# Project

So far you have learned a bit about **React**, states, using **JavaScript** to style your components via **styled-components**, and you were also exposed to **Next.js**, a strong framework to build your applications efficiently by taking advantage of server-side rendering when needed.

## Getting ready

1. First ensure your dependencies are installed by running `npm install`. We have included the relevant ones for this project and you should not need anything else.
2. Run `npm run dev` to start your local Next.js development server and open the URL in your browser.
3. You should see an empty page with some initialized components.

## Goal

You want to build a nicer To Do list, in this folder you can find a couple screenshots of how it should like (You do not have to replicate this entirely, but it is good if you try to hit as many things as possible to understand how they work).

The goal is to have two routes: `/` and `/about-me`, that will be rendered differently!

![To Do List](https://raw.github.com/danoc93/recoded_bloom_project/master/04_nextjs_project_for_students/solution1.png "To Do List")

![About Me Page](https://raw.github.com/danoc93/recoded_bloom_project/master/04_nextjs_project_for_students/solution2.png "About Me Page")


### A bit about styling

You can see that the wireframes show different positions for the content, as well as different colours and sizes.

We also learned how [`styled-components`](https://styled-components.com/) allow us to maintain styling as part of the React components!

As you build up your page in the next sections, can you try to replicate the provided design by only leveraging this library?

### Start by adding a new route with static content

In Next.js routes can be easily added by creating a new page under the `/pages` folder.

You can notice there is already an `index.js` there, this corresponds to the `/` route on your browser.

Create an "about me" page where you can access your name and other information via `/about-me`.

Because the data in this page is related to you, and this is probably known in advance, there is no need for these properties to be accessed dynamically in any sense. Next.js can use this to optimize the way your page is built.

> Hint: Look at [`getStaticProps`](https://nextjs.org/docs/basic-features/data-fetching#getstaticprops-static-generation).

### Render the list of items in your To Do list on the server

One of the great benefits of Next.js is that you can pre-fetch data and this can be used to render your content in advance to make things faster and enable other things like better SEO.

In Next.js you have the ability to leverage the server to fetch data without exposing data sources to the browser.

Under `/` we want the ability to see a To Do list. 

We want to fetch the list of available options on the server, and finally pass the pre-rendered list to the client.

> Hint: Look at [`getServerSideProps`](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering).

### Create an API endpoint that will provide a list of checked items

Next.js allows you to expose simple [API](https://nextjs.org/docs/api-routes/introduction) endpoints that do not get rendered as pages. This is quite useful because you don't always want to have an external API server.
 
There is an example call `/ping` already provided for you.

Create a new `get_selected_tasks` endpoint, that when called, gives you a list of checked items for your To Do list.

### Add some code that will fetch the list of checked items from the browser

In the previous parts we built our page in a way that will pre-render the list of all the options in our To Do list, we also added an endpoint that will give us a list of currently checked options.

Can you add some logic that will allow your code to fetch the data from this API on the client side, and check the boxes accordingly?

> Hint: Look at the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) and [useEffect](https://reactjs.org/docs/hooks-effect.html).

### Add a Link to the navigation to reference your About Me page

You can notice an existing Menu Bar component that only contains one page.
Can you add a Link to your new About Me page?

> Hint: Look at [Link](https://nextjs.org/docs/api-reference/next/link).

## Final result

You should now have a small application, with two routes, one pre-rendered on the server at runtime, and one pre-rendered statically at build time.

In production settings, you will actually use Next.js to build the optimized assets it needs beforehand, and you will run the server only after. In fact, as part of this build process you can get more details about how your assets get constructed.

Try to run `npm run build`, followed by `npm run server`.

## Experiments for the curious

**Use your browser's development tools:**

- Compare the results of pre-rendering a page vs doing it entirely on the client.

- Check the network tab to understand how your API gets called only once you reach the browser.

**Use `console.log`:**

- Add some logs that would only be present in the server, some that would only be present in the browser. What about a log that gets printed both in the client AND the browser?
