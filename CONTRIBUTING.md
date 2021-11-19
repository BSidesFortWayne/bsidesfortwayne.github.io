# Contributing to the website

Our website is using [Hugo](https://gohugo.io/) as its static site generator.

## Project structure
### `main` branch
Here is where all the important files reside.
 - `/content` - here are all posts that will be on the page
 - `/static` - static files
 - `/themes` - here is the theme the website is using
 - `config.toml` - config of the website

### `gh-pages` branch
**DO NOT MODIFY ANYTHING HERE**
This branch is maintained by GitHub Actions and its content is auto-generated after every commit to `main` branch. If you want to change anything, do it in proper place in `main` branch. The contents of this website are what is shown at our domain.

## How to create new post?

First thing you need to do is to clone the project and build the website according to instructions in [README](README.md).

Make sure you're inside the project structure and create new git branch:
```
git checkout -b <branch_name>
```

Once you have it done, make sure you're in the main project directory, and run the following command:
```
hugo new content/posts/<YYYY>/<mm>/post-name-using-dashes.md
```
A new file with that name will be created under `content/posts/<YYYY>/<mm>/`.

### Post file structure

#### Front matter

The part between `---` is called front matter and that's where all the metadata of the post resides. 

Fields:
 - `title` - auto-generated title from the filename, can be changed
 - `description` - to be honest I don't know where content of that variable is being shown, leave blank
 - `date` - auto-generated date of file creation, it will be used as a post's date on the website
 - `thumbnail` - cover photo for the post, can be a link to external resource or relative link to `assets/` directories
 - `categories` - categories the post should belong in, those are shown below the post title as a folder icon
 - `tags` - tags the post should be marked with, those are shown at the end of the article
Categories and tags are words wrapped with `"` and put inside `[]` indicating list.

#### Post content
Below the front matter is the place for the post content. You should use Markdown for formatting. Best guide can be found [here](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

### Publishing the post
First, you need to commit the changes:
```
git add <post_file> <assets_if_you_uploaded_any>
git commit -m "<commit_text>"
```

Then, you need to push the changes to GitHub:
```
git push
```
*Disclaimer*: if this your first push, you will have to set upstream:
```
git push --set-upstream origin <branch_name>
```

Your changes should be on your branch on GitHub. Open the repo, you should see a notification that there was a new branch created, click on the `Compare & request PR` button.

Creating PR will allow the automation to check whether the website will work after merging and will let other contributors look for errors/typos/etc. before the post going live.
