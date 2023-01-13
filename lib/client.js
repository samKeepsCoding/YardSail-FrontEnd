import {createClient} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'


export const client = createClient({
    projectId: 'qfvzx9fx',
    dataset: 'production',
    apiVersion: '2022-01-10',
    useCdn: false
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)