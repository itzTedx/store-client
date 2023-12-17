'use client'

import React, { MouseEventHandler, useEffect, useState } from 'react'

const EmojiEyeTracking = () => {
  const [pupilTop, setPupilTop] = useState('50%')
  const [pupilLeft, setPupilLeft] = useState('50%')
  const [pupilTransform, setPupilTransform] = useState('translate(-50%, -50%)')

  const handleMouseMove: MouseEventHandler<HTMLSpanElement> = (event) => {
    let x = (event.clientX * 100) / window.innerWidth + '%'
    let y = (event.clientY * 100) / window.innerHeight + '%'
    setPupilLeft(x)
    setPupilTop(y)
    setPupilTransform(`translate(-${x},-${y})`)
  }
  return (
    <span onMouseMove={handleMouseMove}>
      <div className="relative w-[0.8ch] h-[0.8ch] bg-yellow-400 rounded-full mt-3 md:mt-6 flex justify-center items-center before:absolute before:bottom-1.5 before:w-[0.4ch] before:h-[0.2ch] before:bg-[#b57700] before:rounded-bl-full before:rounded-br-full duration-75 face">
        <div className="relative -top-1.5 flex gap-1">
          <div className="relative w-[0.225ch] h-[0.225ch] block bg-white rounded-full before:absolute eye">
            <div
              className="absolute w-[0.1ch] h-[0.1ch] bg-yellow-950 rounded-full"
              style={{
                top: pupilTop,
                left: pupilLeft,
                transform: pupilTransform,
              }}
            ></div>
          </div>
          <div className="relative w-[0.225ch] h-[0.225ch] block bg-white rounded-full before:absolute before:top-1/2 before:w-[0.1ch] before:h-[0.1ch] before:bg-yellow-950 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full"></div>
        </div>
      </div>
    </span>
  )
}

export default EmojiEyeTracking
