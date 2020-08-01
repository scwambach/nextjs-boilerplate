# Sanity Clean Content Studio

Congratulations, you have now installed the Sanity Content Studio, an open source real-time content editing environment connected to the Sanity backend.

Now you can do the following things:

- [Read “getting started” in the docs](https://www.sanity.io/docs/introduction/getting-started?utm_source=readme)
- [Join the community Slack](https://slack.sanity.io/?utm_source=readme)
- [Extend and build plugins](https://www.sanity.io/docs/content-studio/extending?utm_source=readme)


# gatsby-sanity-starter

##  🚀 Getting started
1.  **Install Gatsby CLI**
```
npm i --global gatsby-cli
```
2.  **Clone the boilerplate and create a new GatsbyJS Application**
```
gatsby new PROJECT-NAME https://github.com/scwambach/gatsby-starter#sanity
```
3.  **Install NVM**
```
brew install nvm
```
##  🏗 Setting Up Sanity
1. **Install Sanity CLI and setup a project as laid out here**

    [https://www.sanity.io/docs/introduction/getting-started](https://www.sanity.io/docs/introduction/getting-started)

 2. **Navigate to the CMS in terminal and install all Sanity packages**
```
cd PROJECT-NAME/cms
sanity install
```
3.  **Make sure to have the .env file setup properly and put in the root directory of the project**
```
GATSBY_SITEURL = '' 👈 (URL for the frontend)
GATSBY_GOOGLEMAPAPI = '' 👈 (might have to ask for this)
GATSBY_SANITY_ID = '' 👈 (Available after new project is created in Sanity)
GATSBY_SANITY_DATASET = '' 👈 (Available after new project is created in Sanity)
GATSBY_SANITY_TOKEN = '' 👈 (Manually created in Sanity)
```
4. **Upload the boilerplate data (from CMS directory)**
```
sanity dataset import ./backup/production.tar.gz [TARGET_DATASET]
```
5. **CORS Origin**

    On the project page, go to the `Settings` tab and then click `API`

    From there click the `Add New Origin` button

    Add `http://localhost:8000` for starters to allow the local dev environment.

6. **Rename Variables**

    Finally go through the project and rename any instances of `gatsby-boilerplate` and other placeholder things like titles, logos, favicons, and colors
