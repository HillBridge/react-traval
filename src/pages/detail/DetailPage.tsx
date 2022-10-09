import React from 'react'
import { RouteComponentProps } from "react-router-dom";
interface PropsType {
  id: string
}

export const DetailPage: React.FC<RouteComponentProps<PropsType>> = (props) => {
  return <h1>详情页面, id: {props.match.params.id}</h1>
}
