import React from 'react'

import PricingComponentGraphic from './PricingComponentGraphic'

export default function PricingPage() {
  return (
    <section className="bg-whitept-20 relative z-20 overflow-hidden pb-12 lg:pt-[120px] lg:pb-[90px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Pricing Table
              </span>
              <h2 className="text-dark mb-4 text-6xl font-bold ">
                Our Pricing Plans
              </h2>
              <p className="text-body-color text-base">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="-mx-4 flex flex-wrap justify-center">
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="relative z-10 mb-10 overflow-hidden rounded-xl border border-primary border-opacity-20 bg-white py-10 px-8 drop-shadow-xl sm:p-12 lg:py-10 lg:px-6 xl:p-12">
              <span className="mb-4 block text-lg font-semibold text-primary">
                Starter
              </span>
              <h2 className="text-dark mb-5 text-[42px] font-bold">
                $12
                <span className="text-body-color text-base font-medium">
                  {' '}
                  / month{' '}
                </span>
              </h2>
              <p className="text-body-color mb-8 border-b border-[#F2F2F2] pb-8 text-base">
                Perfect for your new startup product or even for driving traffic
                to your blog.
              </p>
              <div className="mb-7">
                <p className="text-body-color mb-1 text-base leading-loose">
                  1 Topic
                </p>
                <p className="text-body-color mb-1 text-base leading-loose">
                  10 channels
                </p>
                <p className="text-body-color mb-1 text-base leading-loose">
                  Daily notificiations
                </p>
                <p className="text-body-color mb-1 text-base leading-loose">
                  Advanced semantic search AI driven leads
                </p>
                <p className="text-body-color mb-1 text-base leading-loose">
                  Limited Email support
                </p>
              </div>
              <a
                href="javascript:void(0)"
                className="block w-full rounded-md border border-[#D4DEFF] bg-transparent p-4 text-center text-base font-semibold text-primary transition hover:border-primary hover:bg-primary hover:text-white"
              >
                Choose Starter
              </a>
              <div>
                <PricingComponentGraphic />
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="relative z-10 mb-10 overflow-hidden rounded-xl border border-primary border-opacity-20 bg-white py-10 px-8 drop-shadow-2xl sm:p-12 lg:py-10 lg:px-6 xl:p-12">
              <span className="mb-4 block text-lg font-semibold text-primary">
                Scale
              </span>
              <h2 className="text-dark mb-5 text-[42px] font-bold">
                $39
                <span className="text-body-color text-base font-medium">
                  {' '}
                  / month{' '}
                </span>
              </h2>
              <p className="text-body-color mb-8 border-b border-[#F2F2F2] pb-8 text-base">
                Perfect for scaling your existing business fast! Target multiple
                audiences
              </p>
              <div className="mb-7">
                <p className="text-body-color mb-1 text-base leading-loose">
                  5 topics
                </p>
                <p className="text-body-color mb-1 text-base leading-loose">
                  12 channels per topic
                </p>
                <p className="text-body-color mb-1 text-base leading-loose">
                  Hourly notificiations
                </p>
                <p className="text-body-color mb-1 text-base leading-loose">
                  Advanced semantic search AI driven leads
                </p>
                <p className="text-body-color mb-1 text-base leading-loose">
                  Email support
                </p>
              </div>
              <a
                href="javascript:void(0)"
                className="block w-full rounded-md border border-primary bg-primary p-4 text-center text-base font-semibold text-white transition hover:bg-opacity-90"
              >
                Choose Scale
              </a>
              <div>
                <PricingComponentGraphic />
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 lg:w-1/3">
            <div className="relative z-10 mb-10 overflow-hidden rounded-xl border border-primary border-opacity-20 bg-white py-10 px-8 drop-shadow-xl sm:p-12 lg:py-10 lg:px-6 xl:p-12">
              <span className="mb-4 block text-lg font-semibold text-primary">
                Enterprise
              </span>
              <h2 className="text-dark mb-5 text-[42px] font-bold">
                $199
                <span className="text-body-color text-base font-medium">
                  {' '}
                  / month{' '}
                </span>
              </h2>
              <p className="text-body-color mb-8 border-b border-[#F2F2F2] pb-8 text-base">
                Perfect for a larger scale business, get large volumes of data
                and insights on your target market
              </p>
              <div className="mb-7">
                <p className="text-body-color mb-1 text-base leading-loose">
                  20 topics
                </p>
                <p className="text-body-color mb-1 text-base leading-loose">
                  50 channels per topic
                </p>
                <p className="text-body-color mb-1 text-base leading-loose">
                  Hourly notificiations
                </p>
                <p className="text-body-color mb-1 text-base leading-loose">
                  Advanced semantic AI driven leads
                </p>
                <p className="text-body-color mb-1 text-base leading-loose">
                  Email and phone support
                </p>
              </div>
              <a
                href="javascript:void(0)"
                className="block w-full rounded-md border border-[#D4DEFF] bg-transparent p-4 text-center text-base font-semibold text-primary transition hover:border-primary hover:bg-primary hover:text-white"
              >
                Choose Enterprise
              </a>
              <div>
                <PricingComponentGraphic />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-center ">
        <h2 className="text-dark mb-4 py-12 text-xl font-bold text-primary">
          Try it out, if you dont feel you have gained any value in 30 days, we
          will refund your money.
        </h2>
      </div>
    </section>
  )
}
