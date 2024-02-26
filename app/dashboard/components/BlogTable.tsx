import { Button } from '@/components/ui/button'
import { EyeOpenIcon, Pencil1Icon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { Switch } from '@/components/ui/switch'

export default function BlogTable() {
  return (
    <div className='rounded-md bg-graident-dark border-[0.5px] overflow-y-scroll '>
      <div className='w-[800px] md:w-full'>
        <div className='grid grid-cols-5 border-b p-5 dark:text-gray-500'>
          <h1 className=' col-span-2'>Title</h1>
          <h1>Premium</h1>
          <h1>Publish</h1>
        </div>
        <div className='space-y-10 p-5'>
          <div className=' grid grid-cols-5'>
            <h1 className='dark:text-gray-200 col-span-2 font-medium'>
              Blog Title
            </h1>
            <Switch checked />
            <Switch checked={false} />
            <Actions id='' />
          </div>
        </div>
      </div>
    </div>
  )
}

const Actions = ({ id }: { id: string }) => {
  return (
    <div className='flex items-center gap-2 md:flex-wrap'>
      {/* TODO: change to id */}
      <Link href={`/blog/${id}`}>
        <Button className='flex gap-2 items-center' variant='outline'>
          <EyeOpenIcon />
          View
        </Button>
      </Link>
      {/* <DeleteAlert id={id} /> */}

      <Link href={`/dashboard/blog/edit/${id}`}>
        <Button className='flex gap-2 items-center' variant='outline'>
          <Pencil1Icon />
          Edit
        </Button>
      </Link>
    </div>
  )
}
