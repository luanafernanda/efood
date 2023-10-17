import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 472px;
  color: #e66767;
  overflow: hidden;
`

export const CardImage = styled.div<{ bgImage: string }>`
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 217px;
  position: relative;
`

export const TagContainer = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  gap: 8px;
  background-color: transparent;
  margin: 16px;
`

export const Tag = styled.div`
  background-color: #e66767;
  color: #ffebd9;
  padding: 6px 4px;
  font-size: 12px;
  font-weight: bold;
`

export const CardContent = styled.div`
  height: 181px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  border: 1px solid #e66767;
  border-top: none;
`

export const CardTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CardTitle = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 0;
`

export const Rating = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: bold;
`

export const StarIcon = styled.img`
  width: 21px;
  height: 21px;
  margin-left: 5px;
  margin-bottom: 4px;
`

export const CardDescription = styled.p`
  font-size: 14px;
  color: #e66767;
  line-height: 22px;
  margin-top: 16px;
`

export const LinkButton = styled(Link)`
  background-color: #e66767;
  color: #fff;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 6px;
  width: 90px;
  border: none;
  cursor: pointer;
  margin: 16px 8px 8px 0px;
  text-decoration: none;
  text-align: center;
`
