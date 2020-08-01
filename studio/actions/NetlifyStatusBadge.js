import React from 'react'
import { netlifyAppId } from '../dashboardConfig'


export function NetlifyStatusBadge() {
  return {
    label: <img id="netlifyStatus" height="16" src={`https://api.netlify.com/api/v1/badges/${netlifyAppId}/deploy-status`} />,
		title: 'Netlify Status',
  }
}
