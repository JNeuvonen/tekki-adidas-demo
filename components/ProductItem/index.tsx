import Image from 'next/image'
import React, { useEffect, useState } from 'react'
export interface ProductItemProps {
  description: string
  imageUrl: string
  price: number
  tags: Array<string>
  bundleDeal: boolean
}
const ProductItem = ({
  productItem,
  productItemId,
}: {
  productItem: ProductItemProps
  productItemId: number
}) => {
  const [hover, setHover] = useState(false)

  useEffect(() => {
    const elem = document.getElementById(`product-item-${productItemId}`)
    if (hover) {
      if (elem) {
        elem.style.marginBottom = '8px'
      }
    } else {
      if (elem) {
        elem.style.marginBottom = '0px'
      }
    }
  }, [hover, productItemId])
  return (
    <div
      className="product-item"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Image
        src={productItem.imageUrl}
        alt="image-place-holder"
        className="product-item__img"
        width={300}
        loading="lazy"
        height={300}
        objectFit={'contain'}
      ></Image>
      <div
        className="product-item__price-tag"
        id={`product-item-${productItemId}`}
      >
        € {productItem.price}
      </div>
      <div className="product-item__info-container">
        {productItem.description}
        {productItem.tags.map((item, i) => {
          return (
            <div key={i} style={{ fontWeight: 300 }}>
              {item}
            </div>
          )
        })}

        {productItem.bundleDeal && <div>bundle deal</div>}
      </div>
    </div>
  )
}
export default ProductItem
