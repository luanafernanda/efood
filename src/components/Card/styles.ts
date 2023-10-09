import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 472px;
  color: #e66767;
  margin-bottom: 48px;
  overflow: hidden;
`

export const CardImage = styled.div<{ bgImage: string }>`
  background-image: url(${(props) => props.bgImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 200px;
  position: relative;
`

export const TagContainer = styled.div`
  font-weight: bold;
  font-size: 12px;
  color:
  position: absolute;
  top: 10px;
  left: 10px;
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  background-color: transparent;
  padding: 16px 8px;
`

export const Tag = styled.div`
  background-color: #e66767;
  color: #ffebd9;
  padding: 5px 10px;
  font-size: 12px;
`

export const CardContent = styled.div`
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
  font-wight: bold;
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
  color: pink;
`

export const CardDescription = styled.p`
  font-size: 14px;
  color: #e66767;
  margin-top: 6px;
`

export const StyledButton = styled.button`
  align-self: flex-start;
  margin-top: 15px;

  background-color: #e66767;
  color: #fff;
  font-size: 14px;
  font-wight: bold;
  padding: 4px 6px;
  border: none;
  cursor: pointer;
`
