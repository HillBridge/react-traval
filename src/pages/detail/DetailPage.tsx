import React from 'react'
import { useParams } from "react-router-dom";

type MatchParams = {
  id: string,
  other: string
}

export const DetailPage: React.FC= () => {
  const params = useParams<MatchParams>()
  console.log(params)
  return <h2>详情页面,id为{params.id},other: {params.other}</h2>
}

