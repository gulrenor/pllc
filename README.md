PartyLite Learning Center
=========================

+ [About this Site](#about-this-site)
+ [Site Locations](#site-locations)
+ [Technology/Languages Used](#technologylanguages-used)
+ [Local Theme Development & Site Configuration](#local-theme-development--site-configuration)
+ [Creating/Editing Content](#creatingediting-content)

* * *

About this Site
---------------
The first thing you'll probably notice about this site is that in its current form, it's hosted on a CDN (LimeLight Network). There's currently no way to install anything server-side, and that means no option for a server-side language like PHP, or a CMS. It also won't parse `index.html` (or any other default) files at the root of a directory, so links must be directly to the html.

Hugo was chosen as a means of providing some form of templating to greatly reduce (eliminate) existing repetition. It also provides a way to eliminate the need for `iframe`, making the site more easily searched for SEO and for a more logical sitemap creation.

Hugo also cuts down on content repetition as pieces of content can be cross-referenced in multiple places without having to recreate it. 

Finally, Hugo offers a multilingual option, which will build the site with support for multiple languages, which is a requirement for this particular site.

* * *

Site Locations
--------------
+ **Existing/Live**
  + [US English](http://partylite.vo.llnwd.net/o15/u/USOLC/Learning_Center/Master_FrametX_RVP.html)
  + [CA English](http://partylite.vo.llnwd.net/o15/u/CAOLC/Learning_Center_Canada/English/Master_FrametX_RVP.html)
  + [CA French](http://partylite.vo.llnwd.net/o15/u/CAOLC/Learning_Center_Canada/French/Master_FrametX_RVP.html)
+ **Dev**
  + [US English](http://partylite.vo.llnwd.net/o15/u/USOLC/Learning_Center/LC_New/index.html) (Hugo Staging)
  + [US English](http://localhost:1313) (Localhost)

* * *

Technology/Languages Used
-------------------------
+ **HTML5**  

+ **CSS3/Sass (SCSS syntax)**  

+ **[JavaScript/JQuery](https://jquery.com/)**  

+ **[Slick](http://kenwheeler.github.io/slick/)**  
  JQuery image carousel plugin
  
+ **[Hugo](https://gohugo.io/)**  
  Static site generator
  
+ **[Gulp](https://gulpjs.com/)**  
  JS-based task runner
  
+ **[Compass](https://compass-style.org/)**  
  CSS/Sass library/compiler
  
+ **[Susy](http://susy.oddbird.net/)**  
  Responsive framework/grid system
  
+ **[Breakpoint](http://breakpoint-sass.com/)**  
  Responsive breakpoints using Susy & Compass
  
+ **[Google Fonts](https://fonts.google.com)**  

+ **[Rubygems](https://www.ruby-lang.org/en/downloads/)**  
  Ruby package manager

+ **[Bundler](http://bundler.io/)**  
  Manage and install ruby gems
  
+ **[LiveReload](http://livereload.com/)**  
  Browser plugin to automatically refresh the page after changes are made.


* * *

Local Theme Development & Site Configuration
--------------------------------------------

### Requirements

You'll need to have several programs installed to do local development on this site. 

1. The first thing you'll probably want to install is **[git](https://git-scm.com/downloads)**. I installed using the built in MINGW terminal so that I could use \*nix syntax and commands, but if you're on Windows and have any problems with the below programs you'll probably want to use the built in command prompt option.

2. Install **[nodejs](https://nodejs.org/en/)** so you can use `npm`.

3. Install **[ruby](https://www.ruby-lang.org/en/downloads/)** so that you can use `gem`. Ruby has some issues with Windows so you may have to ensure you have proper permissions.

4. Download and install **[Hugo](https://gohugo.io/overview/installing/)** according to the instructions on their site. If you're on Windows, you'll probably have to add Hugo to your $PATH.

5. Install **[bundler](http://bundler.io/)** in your terminal using `gem install bundler`. Once installation is complete, you can install **[Compass](https://compass-style.org/)**, **[Susy](http://susy.oddbird.net/)**, and **[Breakpoint](http://breakpoint-sass.com/)** using the command `bundle install` from your terminal.

When starting local development, I generally start by running both `compass watch` and `hugo server`. I also have LiveReload plugin running on my browser.

### Command Line Reference

#### Hugo

+ Start local development server:  
  `hugo server`

+ Create a new info page, where `$info_title` is the title of your content:  
  `hugo new info/$info-title.md`

+ Create a new document, where `$doc_title` is the title of your content:  
  `hugo new doc/$doc_title.md`

+ Create a new video, where `$video_title` is the title of your content:  
  `hugo new video/$video_title.md`

+ Build site for publishing to live server. Site will build into `/public`:  
  `hugo`

#### Compass

+ Watch sass directory and automatically compile to css:  
  `compass watch`  
  
### File Reference

+ `gitignore`  
  Ignores certain files/directories so they're not included in git.
  
+ `config.rb`  
  Compass configuration file.
  
+ `config.toml`  
  Hugo site configuration file.
  
+ `Gemfile`  
  Bundler configuration file. Used to install Compass, Susy, and Breakpoint.
  
+ `Gemfile.lock`  
  Logs the specific versions installed so that they can be reinstalled using Bundler. If you remove this file and re-bundle you may end up with incompatible versions of applications.

+ `gulpfile.js`  
  Gulp configuration file.
  
+ `package.json`  
  Node.js/npm project and configuration file.

+ `README.md`  
  This file, and what's uploaded as the default readme on Github.
  
+ `/content/robots.txt`  
  This is the site's robots.txt file, but is currently ineffective because it doesnt reside on the root directory of the server. It should be moved there for proper SEO and spidering directives.
  
+ `/themes/lc/theme.toml`  
  The theme configuration file; used if the theme is going to packaged and redistributed.
  
+ `/themes/lc/LICENSE.md`  
  The theme's license for redistribution. Default MIT license.
  

* * *

Creating/Editing Content
------------------------

### Main Content

Content can be edited simply by directly editing the markdown files in the `/content` directory. For a reference on markdown, refer to [this guide and parser at daringfireball.net](https://daringfireball.net/projects/markdown/) as well as [this cheatsheet on Github](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Markdown allows for easy content editing for people who may not be familiar with HTML and want a more text based option. Using Hugo's shortcodes, it also allows for easy embedding of media.

#### Content Types and Frontmatter

##### info
+ `series`
+ `series_weight`
+ `categories`
+ `categories_weight`
+ `description`
+ `active`
+ `summary_file`
+ `thumb`

##### doc
+ `series`
+ `series_weight`
+ `categories`
+ `categories_weight`
+ `description`
+ `active`
+ `filetype`
+ `src`

##### video
+ `series`
+ `series_weight`
+ `categories`
+ `categories_weight`
+ `description`
+ `active`

#### Content Shortcodes

+ `{{< youtube $file_id >}}`

+ `{{< vimeo $file_id >}}`

+ `{{< plvid src="$video_url" poster="$poster_url"}}`

+ `{{< pdf src="$url" >}}`

### Nav Menu

+ Edit menu entries directly in [`config.toml`](/config.toml).
+ Menu entries for both languages are located here.
