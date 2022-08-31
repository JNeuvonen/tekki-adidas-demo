import React, { useEffect, useRef, useState } from 'react'
import { ArrowRight, Chevron } from '../../utils/icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
const CategoryNav = ({
  categories,
  selectedCategory,
  setterFunction,
  prevSlide,
  nextSlide,
}: {
  categories: Array<string>
  selectedCategory: string
  setterFunction: React.Dispatch<React.SetStateAction<string>>
  prevSlide: () => void
  nextSlide: () => void
}) => {
  const highlightedStyles = useRef({ fontWeight: 700 })
  const unselectedStyles = useRef({
    color: 'rgba(0, 0, 0, 0.35)',
    fontWeight: 400,
  })

  const categoryOnClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    value: string
  ) => {
    setterFunction(value)
  }

  return (
    <div className="category-nav-container">
      <div className="category-nav">
        {categories.map((item, i) => {
          return (
            <div
              key={i}
              //@ts-ignore
              onClick={(e) => categoryOnClick(e, item)}
              style={
                item === selectedCategory
                  ? highlightedStyles.current
                  : unselectedStyles.current
              }
            >
              {item === selectedCategory && <ArrowRight />}
              <span>{item}</span>
            </div>
          )
        })}
      </div>
      <div style={{ display: 'flex' }}>
        <div className="icon-button" onClick={prevSlide}>
          <Chevron styles={{ transform: 'rotate(180deg)' }} />
        </div>
        <div className="icon-button" onClick={nextSlide}>
          <Chevron />
        </div>
      </div>
    </div>
  )
}
export default CategoryNav
