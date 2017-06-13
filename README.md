<img src="https://user-images.githubusercontent.com/1134738/27010022-1c358f4c-4eb9-11e7-9c21-fd70c5a4737e.png" width="600px" alt="Amruth Pillai" />

# Resume on the Web
Everyone needs their own little spot on the interwebs, and this is mine.  
**Welcome to my resume, on the web!**

## Introduction
Building personal websites, resumes and portfolios have always been one of my most favorite projects, since I get to mess around with new technology, use new tricks I've learnt from the internet and basically, just let me showcase my creativity in the most unique way possible, and I hoped to do the same with this **Resume on the Web** project here.

## Features
There's a lot of features deep down the heart of this project that make it special. It's not just a simple website that I whipped up in 2-3 days. Anybody could do that, but since this is a resume/personal project, I wanted to use it to showcase the best use of all my skills, from design, to development, to server management.

The number of things I've learnt from this project is truly endless, but I'll try to create one anyway:
* UI/UX Design from scratch *(Adobe Photoshop CC, Adobe Illustrator CC)*
* Workflow Management using gulp.js *(http://gulpjs.com/)*
* Minification of HTML, CSS and JS *(to serve faster websites)*
* Optimization of Images *(to take up less space)*
* Using SVGs instead of Bitmap images, *wherever possible*
* Using the latest Bootstrap v4.0.0 Alpha 6
* Using jQuery for the minimal logic within the site
* Fetching from Medium/Instagram APIs *(to fuel the dynamic content on the site)*

## Building the Source
To build the project from it's source, first ensure that you have Node/NPM installed on your machine. If you don't, you can pick it up from here: https://nodejs.org/. You'll also need the Yarn package manager, which you can get from here: https://yarnpkg.com/en/docs/install/.

Next, you'll need the following packages to be installed globally using npm:
```
npm install --global gulp bower yarn
```

Once that's done, you're ready to build the source, so start with cloning the repository and moving into the directory:
```
git clone https://github.com/AmruthPillai/ResumeOnTheWeb.git
cd ResumeOnTheWeb
```

Then, just run these commands to install the necessary dependencies. It might take a while for it to finish, so keep an episode of 'Friends' running, just in case.
```
npm install
bower install
yarn install
```

Now, you're ready to roll. Just run `gulp serve` and the system will start serving the project on `http://localhost:9000`.
