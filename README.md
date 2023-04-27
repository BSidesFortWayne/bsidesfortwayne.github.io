# BSIDES Fort Wayne website

## Adding content

Instructions of how to add content to the website can be found in [CONTRIBUTING.md](CONTRIBUTING.md).

## Build website

First, make sure you have [Hugo](https://gohugo.io/getting-started/installing/) installed.

Once you have Hugo, clone the repo:

```
git clone --recurse-submodules https://github.com/BSidesFortWayne/bsidesfortwayne.github.io.git
cd bsidesfortwayne_website
```

To run the local server rendering website on every change use the following command:

```
hugo serve --disableFastRender
```

Unless port 1313 is taken your website will be available at http://localhost:1313/.
