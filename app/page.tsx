"use client"

import { useQuery } from '@tanstack/react-query'

export default function Home() {
  const {data} = useQuery(['test'], () => fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json()))

  return (
    <div>
      {data ? JSON.stringify(data) : 'Loading...'}
    </div>
  )
}
