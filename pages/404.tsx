import Image from 'next/image'
import Link from 'next/link'

const PageNotFound = () => {
  return (
    <div className="flex h-screen flex-col justify-center items-center">
      <div>
        <Image 
        src={"/404.svg"}
        alt="Page not found"
        width={600}
        height={600}
      />
      <h2 className='text-center pt-4 pb-10 sm:text-3xl text-2xl'>404 - Page not found</h2>
      <h3 className='text-center'><Link href="/dashboard" className=' py-2 px-8 border border-gray-500 rounded-md ease-in duration-300 hover:bg-stone-900 hover:text-white'>Go to dashboard</Link></h3>
      </div>
      
    </div>
  )
}

export default PageNotFound
