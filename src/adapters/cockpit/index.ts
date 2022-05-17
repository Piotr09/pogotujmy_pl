import fetch from 'isomorphic-unfetch'
const token = process.env.COCKPIT_TOKEN
import { urls } from '@config'

export const getCollection = async (collectionName: string, slug?: string) =>
  await fetch(`${urls.collectionsUrl}/get/${collectionName}`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json', 'Cockpit-Token': token },
    body: JSON.stringify({
      filter: { slug },
      sort: { _created: -1 },
    }),
  })

export const getSingleton = async (singletonName: string) =>
  await fetch(`${urls.singletonUrl}/get/${singletonName}`, {
    headers: { 'Cockpit-Token': token },
  })

export const getSlider = async (
  firstHeroSlider: string,
  secondHeroSlider: string,
  thirdHeroSlider: string,
) => {
  return await fetch(`${urls.collectionsUrl}/get/Recipe`, {
    method: 'post',
    headers: { 'Content-Type': 'application/json', 'Cockpit-Token': token },
    body: JSON.stringify({
      filter: {
        _id: {
          $in: [firstHeroSlider, secondHeroSlider, thirdHeroSlider],
        },
      },
      populate: 0,
      simple: 1,
      sort: { _created: -1 },
    }),
  })
}
