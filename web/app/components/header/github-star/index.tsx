'use client'
import React, { useEffect, useState } from 'react'
import { Github } from '@/app/components/base/icons/src/public/common'
import type { GithubRepo } from '@/models/common'

const getStar = async () => {
  const res = await fetch('https://api.github.com/repos/langgenius/dify')

  if (!res.ok)
    throw new Error('Failed to fetch data')

  return res.json()
}

const GithubStar = () => {
  return (
    <div className='flex items-center leading-[18px] text-xl font-bold bg-gradient-to-r from-primary-600 to-blue-600 bg-clip-text text-transparent'>
      GOVY AI
    </div>
  )
}

export default GithubStar
