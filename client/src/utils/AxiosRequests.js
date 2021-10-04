import { Api } from '@/Api'

const getPublicProfiles = () => {
  return Api.get('/petlovers')
    .then((response) => {
      return response.data
    })
}

// TODO make authorization
const getPrivateProfile = () => {
  return Api.get('/petlovers/:id')
    .then((response) => {
      return response.data
    })
}

export { getPublicProfiles, getPrivateProfile }
