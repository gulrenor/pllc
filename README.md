PartyLite Learning Center
=========================

+ [About this Site](#about-this-site)
+ [Site Locations](#site-locations)
+ [Technology/Languages Used](#technologylanguages-used)
+ [Local Theme Development & Site Configuration](#local-theme-development--site-configuration)
+ [Creating/Editing Content](#creatingediting-content)
+ [English/French Translation Matrix](/site-info/translation-matrix.md)

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

5. Install **[bundler](http://bundler.io/)** in your terminal using `gem install bundler`. Once installation is complete, you can install **[Compass](https://compass-style.org/)**, **[Susy](http://susy.oddbird.net/)**, and **[Breakpoint](http://breakpoint-sass.com/)** using the command `bundle install`.

When starting local development, I generally start by running both `compass watch` and `hugo server`. I also have the **[LiveReload](http://livereload.com/)** plugin running on my browser.

### Command Line Reference

#### Hugo

+ Start local development server:  
  `hugo server`

+ Create a new info page, where `$info_title` is the title of your content:  
  `hugo new info/$info_title.md`

+ Create a new document, where `$doc_title` is the title of your content:  
  `hugo new doc/$doc_title.md`

+ Create a new video, where `$video_title` is the title of your content:  
  `hugo new video/$video_title.md`

+ Build site for publishing to live server. Site will build into `/public`:  
  `hugo`

#### Compass

+ Watch `/themes/lc/static/sass` directory and automatically compile to CSS in `/themes/lc/static/css`:  
  `compass watch`  
  
### File Reference

+ `gitignore`  
  Ignores certain files/directories so they're not included in git.
  
+ `config.rb`  
  Compass configuration file.
  
+ `config-{us | ca}.toml`  
  Hugo site configuration file, one for each country `us | ca`.
  
+ `Gemfile`  
  Bundler configuration file. Used to install Compass, Susy, and Breakpoint.
  
+ `Gemfile.lock`  
  Logs the specific versions installed so that they can be reinstalled using Bundler. If you remove this file and re-bundle you may end up with incompatible versions of applications.
  
+ `package.json`  
  Node.js/npm project and configuration file.

+ `README.md`  
  This file, and what's uploaded as the default readme on Github.
  
+ `/content-{us | ca}/robots.txt`  
  This is the site's robots.txt file, but is currently ineffective because it doesnt reside on the root directory of the server. It should be moved there for proper SEO and spidering directives.
  
+ `/themes/lc/theme.toml`  
  The theme configuration file; used if the theme is going to packaged and redistributed.
  
+ `/themes/lc/LICENSE.md`  
  The theme's license for redistribution. Default MIT license.

+ `serve.bat, serve.sh, build.bat, build.sh`
  Small Windows/\*nix shell files to assist with multi-site development and deployment. Accepts country as a parameter, where country = `us | ca`.
  

* * *

Content Overview
----------------

### Types of Content
There are 2 main types of content, with a 3rd type acting as a descriptive sub-type.

#### Documents
The majority of documents are .pdf. There are also some training presentations that use Adobe Presenter and Captivate.

#### Videos
Videos come from 3 main sources: Youtube, Vimeo, and self-hosted .mp4.
+ PartyLite's US YouTube account is [https://www.youtube.com/user/PartyLiteGifts](https://www.youtube.com/user/PartyLiteGifts).
+ PartyLite's CA YouTube account is [https://www.youtube.com/user/PartyLiteCanada](https://www.youtube.com/user/PartyLiteCanada). This account posts both English and French content.

#### Info pages
These pages act as a kind of summary file when a landing page is needed. They're used both for descriptive lead-ins, as well as full fledged custom pages.

### Content Organization
Most content is organized and displayed using 3 methods:
+ by `section`
+ by `category`
+ by `series`

#### Section
`section`, in Hugo, is simply another word for content type. The main `section`s are `doc`, `video`, and `info`.

#### Category
`category` is the most versatile method of displaying content. You can assign unlimited categories to a piece of content, and that content will then show on all those pages. 

The content is ordered by the frontmatter variable `category_weight`, and the default is zero. If you need something to diplay near the top then assign it a negative weight, and similarly if you want it to display at the end assign it a positive weight.

The default order of content is descending by date, so the most recent content appears at the top.

#### Series
`series` is a means of grouping similar content, like a multi-part video series. A piece of content can only be assigned to one series.

When series are displayed on a page, they will be grouped together under their series name.

Series order can be adjusted the same way as categories, with the `series_weight` frontmatter variable. `series_weight` has no effect on content when it's displayed in a category template.

Creating/Editing Content
------------------------

### Main Content

Content can be edited simply by directly editing the markdown files in the `/content-{us | ca}` directory. For a reference on markdown, refer to [this guide and parser at daringfireball.net](https://daringfireball.net/projects/markdown/) as well as [this cheatsheet on Github](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

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

+ Edit menu entries directly in [`config-us.toml`](/config-us.toml) and [`config-ca.toml`](/config-ca.toml).
+ Menu entries for both languages are located here.
+ Other location specific variables include:
  + Site Logo SVG
  + Site Title
  
