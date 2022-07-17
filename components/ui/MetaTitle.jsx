import Head from 'next/head'
import React from 'react'

export default function MetaTitle({title}) {
  return (
    <Head>
      <title>
        {title}
      </title>
    </Head>
  )
}