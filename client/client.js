import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = sanityClient({
    projectId: 'j2rvzwgi',
    dataset: 'production',
    apiVersion: '2022-05-23',
    useCdn: true,
    token: 'sk8jMcaLN6Kbzz6fuVlJW2I7LNla27iIMGeejNT2MdMxBXkcINHnuFPCoRieapDrHvRfvKvDkNkWedEIDU7YMBLhiO53Z1X9t315kyHAk7OiVJsrgK14dRf4WaQiGSroF9Y6Bl1CwqQdCsEXoVP4HO1KjDLLqTAW75VwOAMc4RvHUVWIOVby'
})

const builder = imageUrlBuilder(client)

export const urlFor = (source) => builder.image(source)