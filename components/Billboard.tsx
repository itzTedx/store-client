import { Billboard as BillboardType } from '@/types'

interface BillboardProps {
  data: BillboardType
}

const Billboard: React.FC<BillboardProps> = ({ data }) => {
  return (
    <div className='p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden'>
      <div
        style={{ background: `url(${data?.imageUrl})` }}
        className='rounded-xl relative aspect-square sm:aspect-video lg:aspect-[16/5] overflow-hidden !bg-cover '
      >
        <div className='h-full w-full flex flex-col justify-center items-center text-center gap-y-8'>
          <div className='block font-bold text-3xl sm:text-5xl sm:max-w-xl max-w-xs z-50'>
            {data.label}
          </div>
        </div>
        <div className='bg-white/30 absolute inset-0 z-0' />
      </div>
    </div>
  )
}

export default Billboard
