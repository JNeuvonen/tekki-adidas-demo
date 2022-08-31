import React, { useEffect, useRef, useState } from 'react'
import useWindowDimensions from '../../utils/hooks/useWindowDimensions'
import CategoryNav from '../CategoryNav'
import { Swiper, SwiperSlide } from 'swiper/react'
import ProductItem from '../ProductItem'
interface CategoryTypes {
  categoryArray: Array<string>
  defaultCategory: string
  data: any
}
const ScrollableCategory = ({
  categoryArray,
  defaultCategory,
  data,
}: CategoryTypes) => {
  const categories = useRef(categoryArray)
  const [selectedCategory, setSelectedCategory] = useState(defaultCategory)
  const [swiperInstance, setSwiperInstance] = useState<any>(null)
  const { width }: any = useWindowDimensions()
  const [slidersPerView, setSlidersPerView] = useState(1)
  useEffect(() => {
    const maxSlides = Math.floor(width / 315)
    setSlidersPerView(maxSlides + 1)
  }, [width])

  const nextSlide = () => {
    swiperInstance.slideNext()
  }

  const prevSlide = () => {
    swiperInstance.slidePrev()
  }

  return (
    <div style={{ marginTop: 30 }}>
      <CategoryNav
        categories={categories.current}
        selectedCategory={selectedCategory}
        setterFunction={setSelectedCategory}
        prevSlide={prevSlide}
        nextSlide={nextSlide}
      />

      <Swiper
        className="products"
        slidesPerView={slidersPerView}
        navigation
        spaceBetween={10}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => setSwiperInstance(swiper)}
        onReachEnd={(e) => {
          if (swiperInstance) {
            swiperInstance.slideTo(0, 0)
          }
        }}
      >
        {
          //@ts-ignore
          data[selectedCategory].map((item, i) => {
            return (
              <SwiperSlide key={i}>
                <ProductItem
                  key={i}
                  productType={selectedCategory}
                  productItem={item}
                  productItemId={i}
                ></ProductItem>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </div>
  )
}
export default ScrollableCategory
