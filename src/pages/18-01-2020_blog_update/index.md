---
path: "/blog-update"
date: "2020-01-18"
dateString: "18 January 2020"
title: "Blog Update"
published: "true"
---

I don't know if anyone cares about this blog or not. Either way, I'm making this blog update anyway. There has been a lot of thoughts in my head about what I can do with this blog as well as future development. Here is my list of future development for this blog that I can think of right now:

**Dark mode**

Dark mode is a thing now, and I love it. I have dark mode turned on in almost all my devices and apps, which might make you wonder, why does my personal blog have a literally pure white background? Well, at first it's about the minimalist theme of this site. Bright colors usually give a clean feel to it, which is exactly why most minimalist design also has bright colors in them. But after some thoughts about this blog and the size of its content (my last post about 2020 had almost 2000 words), I now think that it shouldn't be that way. I know just how valuable comfort is to some people, so I'm going to make a dark mode as an option to the look of this site. It's going to be a toggle button, so you could choose between light or dark background. Also, I will make use of browser cookies, so that once you pick either of the two modes, it will stay that way and not reset every time you reload the site.

**"Back to Top" button**

This also comes into consideration that my blog posts are pretty long in length. When designing a web UI, usually I would put navigation links in the footer so that anyone scrolling far enough to the bottom can just go to another page on this site without manually scrolling all the way to the top. I realized that this blog only has its navigation links at the top of the page, which means that people have to scroll to the top just to go somewhere else, and that is not ideal. But on the other hand, I don't feel like adding navigation links on my footer since it won't fit in with my super minimalist theme, so instead, I will add a "Back to Top" link to the footer. It's simple, doesn't take too much space, and does exactly the same thing as having navigation links on the footer without having to facilitate the space for it.

**Korea blog posts**

This is something I've always wanted to do since I got back from Korea. Some trivia facts for you, it was in Korea that I got the idea to make this personal portfolio website. It was around the time that I gained confidence in my programming skills and wanted to share the projects that I've worked on to the world. I bought this domain a few days after I got back to Indonesia. The interesting part is that this blog subdomain is the one that's already up and fully working, and the portfolio-driven main domain is still showing that ugly ass "Coming soon" page that I made in 5 minutes. Anyway, I've wanted to tell the full story of my journey to Korea but haven't got the time to do so. I was legit busy. But now that the semester break is here, I think that this is the right time to do this. I've already mapped it to be a 3-part blog post, but even that might not be enough. I don't know. What I'm sure of is that the first part of it is done already. And one more thing, this post series is going to be in Indonesian. I think that it makes more sense to make it in Indonesian since I kinda want to share it with people around me as well, and I want them to understand the stuff that I talk about.

That's it. Okay. Bye

**UPDATE 5 Feb 2020:** It took a while to find the motivation to get this done, but it's here. I've added the dark mode and the "Back to top" features to this blog. The "top" button was simple, it's the dark mode that took some research to get done. You see, the reason why I love GatsbyJS is the fact that they handle all the routing by default, so that we developers don't have to set it up manually. But doing it that way means that we don't have a root document where we would usually mount all the components into. This also means that we can't use React state to store globally accessible variable the way that vanilla React does.

To fill this missing gap, GatsbyJS has this thing called wrapRootElement that uses their browser API to.. well.. wrap the components inside a root element. I used [this](https://alligator.io/gatsbyjs/state-management-in-gatsby/) guide I found online, but the gist of it is bacisally to make a component that will act as the root element, in this case is a context provider that has a state and will take whatever is passed in as a props and wraps it in the context provider. Then we need to tell the gatsby-browser to use that provider as the root element. The rest is just importing the provider itself to the page documents and wrapping all the output components inside a context consumer component. I also used the js-cookies API to handle the browser cookie so that whatever mode is selected will stay that way even after a page refresh. Had a bit of problem when the set() function didn't set the cookie properly that made my if statement didn't function as intended since it doesn't understand the value. I fixed it by removing and resetting the cookies, which worked for some reasons. I also read the cookie as a string, since reading them as boolean didn't seem to work.

As for the Korea posts, it's coming. I've only written up to the second part, but I might extend it to be a 4 part series lol. Idk. I just want to make it to be as detailed as I could, but that has been proven to take quite a bit more space. I don't think that anyone in the world is waiting for this post series, but I'm gonna finish it anyway. Not for anyone else than myself. So yeah, it's coming.
