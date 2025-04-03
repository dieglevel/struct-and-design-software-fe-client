import { Card } from '@/components/ui/card'
import Image from 'next/image'
import React from 'react'
import avatar from '@/assets/images/avatar.png'

export const ReviewContainer = () => {
  return (
    <section className="container mx-auto px-4 py-8 md:py-12">
      <div className="mb-8 self-center text-center md:mb-16">
        <h3 className="mb-2 text-2xl font-bold uppercase text-blue-900 md:text-3xl">khách hàng v - travel nói gì</h3>
      </div>
      <div className="flex justify-center">
        <Card className="relative w-full max-w-4xl md:translate-x-16">
          <div className="absolute left-1/2 top-0 -translate-x-1/4 -translate-y-1/4 md:left-0 md:top-1/2 md:-translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2">
            <Image
              src={avatar}
              alt={`Testimonial`}
              width={385}
              height={410}
              className="h-32 w-32 object-cover md:h-48 md:w-48 lg:h-64 lg:w-64 xl:h-auto xl:w-96"
            />
          </div>

          <div className="mx-auto mt-16 flex min-h-[300px] w-full flex-col items-center justify-center overflow-hidden rounded-lg border border-[#F27052]/30 shadow-[0_4px_24px_rgba(242,112,82,0.15),0_1px_6px_rgba(242,112,82,0.2)] md:mt-0 md:min-h-[400px] lg:min-h-[480px]">
            {/* Content section */}
            <div className="relative flex w-full flex-col justify-center p-4 md:p-6 lg:p-8">
              <div className="w-full text-left md:ml-auto md:w-3/4">
                <div className="mb-4 flex md:mb-6">
                  <span className="mr-2 font-serif text-4xl text-[#497E91] md:mr-5 md:text-6xl lg:text-8xl">
                    &ldquo;
                  </span>
                  <h3 className="mb-2 translate-y-2 text-lg font-bold text-gray-800 md:mb-4 md:translate-y-5 md:text-2xl lg:text-4xl">
                    Lorem Ipsum is simply dummy printing
                  </h3>
                </div>

                <p className="mb-4 text-xs text-gray-600 md:mb-6 md:text-sm lg:text-base">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                  industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                  scrambled it to make a type specimen book.
                </p>
                <div className="text-right">
                  <p className="text-sm font-bold text-[#00315C] md:text-base">_Esther Howard_</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </section>
  )
}
