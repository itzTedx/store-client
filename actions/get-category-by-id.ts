import { Category } from '@/types'
const URL = `${process.env.NEXT_PUBLIC_API_KEY}/categories/`

const getCategoryById = async (categoryId: string): Promise<Category> => {
  const res = await fetch(`${URL}/${categoryId}`, { cache: 'force-cache' })

  return res.json()
}

export default getCategoryById
