import Image from 'next/image'
import { Tab } from '@headlessui/react'

import { cn } from '@/lib/utils'
import { Image as ImageType } from '@/types'

interface GalleryTabProps {
  image: ImageType
}

const GalleryTab = ({ image }: GalleryTabProps) => {
  return (
    <Tab className='relative flex items-center aspect-square cursor-pointer justify-center rounded-md bg-white'>
      {({ selected }) => (
        <div>
          <span className='absolute aspect-square h-full w-full inset-0 overflow-hidden rounded-md'>
            <Image
              fill
              src={image.url}
              alt=''
              className='object-cover object-center'
            />
          </span>
          <span
            className={cn(
              'absolute inset-0 rounded-md ring-2 ring-offset-2',
              selected ? 'ring-black' : 'ring-transparent'
            )}
          />
        </div>
      )}
    </Tab>
  )
}

export default GalleryTab
