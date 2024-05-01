import { put } from '@vercel/blob';
import { kv } from '@vercel/kv';

export async function publish(formData: FormData) {
  'use server'

  const issueNumberString = formData.get('issue') as string ?? '0'
  const date = formData.get('date') as string
  const heroImage = formData.get('hero-image')
  const intro = formData.get('intro') as string
  const announcements = formData.getAll('announcements') as string[]
  const events = formData.getAll('events') as string[]
  const eventPhotos = formData.getAll('events-file')

  const heroImageBlob = (await put(`${issueNumberString}-hero`, heroImage as File, {
    access: 'public',
  })).url;
  const eventPhotosBlobs = await Promise.all(
    eventPhotos.map((photo, index) => put(`${issueNumberString}-event-${index}`, photo as File, {
      access: 'public',
    }))
  ).then((results) => results.map((result) => result.url));

  const issueNumber = parseInt(issueNumberString, 10);
  const issue = {
    number: issueNumber,
    date,
    heroImage: heroImageBlob,
    intro,
    announcements,
    events: events.map((event, index) => ({
      description: event,
      photo: eventPhotosBlobs[index],
    })),
  };

  await kv.zadd('issues', { score: issueNumber, member: issue });
}