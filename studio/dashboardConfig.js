export const appName = 'gatsby-starter'
export const netlifyAppId = '2f020340-7a34-472f-aee9-afabdda8dccd';
export const netlifyBuildHook = '5efbf2eb6cbc143aae3455d5';
const remoteURL = 'https://scw-starter.netlify.app'
const localURL = 'http://localhost:8000'
const appUrl = window.location.hostname === 'localhost' ? localURL : remoteURL
export const previewUrl = `${appUrl}/preview`

export default {
  widgets: [
    {
      name: 'netlify',
      options: {
        title: 'My Netlify deploys',
        sites: [
          {
            title: 'Sanity Studio',
            apiId: netlifyAppId,
            buildHookId: netlifyBuildHook,
            name: appName
          }
        ]
      }
    },
    {
      name: 'project-info'
    },
    {
      name: 'project-users'
    }
  ]
};
