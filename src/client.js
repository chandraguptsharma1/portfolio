import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId:'gudijivg',
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: 'skEHy15FlU0H9pCcWUi7hL1Px1Z6da8rPiFY4o4mggU3UDrPrZKrWFGSrg7EC9jvegsxH0leFloW9dQpLfc7U28xl3yqfAQjd24MpSFtCdzVEEx1lMAEGDDHWCdywhcHCXC7nlNsuZBuq9MmO3RGGj0GMmUBq3Sa0hhFXrCVitLMdgQAQhIW',
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
