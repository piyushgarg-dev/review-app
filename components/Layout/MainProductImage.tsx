/**
 * Main Product Image
 */
import Image from 'next/image'
import { MaxWidthContainer } from '.'
import ProductImageUIEbraj from '@/public/ebraj/landing-page/images/product-ui.png'

export const MainProductImage = () => {
  return (
    <div className="relative py-2 pb-20 before:absolute before:z-10 before:h-full before:w-full before:bg-gradient-to-t before:content-[''] dark:from-[#05051E] dark:via-[#05051E]/80 dark:to-slate-900/0">
      <MaxWidthContainer className="">
        <div className="rounded-md bg-white px-2 py-2 text-sm ring-1 ring-slate-200 backdrop-blur-[10px] dark:bg-slate-600/20 dark:ring-slate-600/60">
          <Image
            src={ProductImageUIEbraj}
            style={{ objectFit: 'cover' }}
            className="rounded-md "
            alt="Product UI Image"
          />
        </div>
      </MaxWidthContainer>
    </div>
  )
}
