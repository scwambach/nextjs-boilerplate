export const appName = 'gatsby-starter';
// export const netlifyAppId = '2f020340-7a34-472f-aee9-afabdda8dccd';
// export const netlifyBuildHook = '5efbf2eb6cbc143aae3455d5';
const remoteURL = 'https://developersdonating.com';
const localURL = 'http://localhost:3000';
const appUrl = window.location.hostname === 'localhost' ? localURL : remoteURL;
export const previewUrl = `${appUrl}/preview`;

export default {
  widgets: [
    {
      name: 'project-info',
    },
    {
      name: 'project-users',
    },
  ],
};
