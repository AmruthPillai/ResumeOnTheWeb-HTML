# Amruth Pillai's Resume on the Web
Everyone needs their own little spot on the interwebs, and this is mine.  
**Welcome to my resume, on the web!**

## Introduction
Building personal websites, resumes and portfolios have always been one of my most favorite projects, since I get to mess around with new technology, use new tricks I've learnt from the internet and basically, just let me showcase my creativity in the most unique way possible, and I hoped to do the same with this **Resume on the Web** project here.

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
