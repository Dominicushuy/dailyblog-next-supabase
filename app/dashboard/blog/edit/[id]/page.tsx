import React from 'react'
import EditForm from './components/EditForm'
import { IBlogDetail } from '@/lib/types'
import { readBlogDeatailById } from '@/lib/actions/blog'

export default async function EditBlogPage({
  params,
}: {
  params: { id: string }
}) {
  const { data: blog } = await readBlogDeatailById(params.id)
  return <EditForm blog={blog as IBlogDetail} />
}
