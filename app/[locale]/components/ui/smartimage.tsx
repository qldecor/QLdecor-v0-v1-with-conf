import { useState } from "react"
import Image, { ImageProps } from "next/image"

export function SmartImage({
  src,
  fallbacks = [],
  ...props
}: ImageProps & { fallbacks?: string[] }) {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <Image
      {...props}
      src={imgSrc}
      onError={() => {
        if (fallbacks.length > 0) {
          const [next, ...rest] = fallbacks
          setImgSrc(next)
          ;(props as any).fallbacks = rest
        }
      }}
    />
  )
}