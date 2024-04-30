export async function publish(formData: FormData) {
  'use server'

  // get all form data
  const data = Object.fromEntries(formData.entries())
  console.log(data)
}