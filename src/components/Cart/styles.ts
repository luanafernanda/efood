import styled from 'styled-components'

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.7;
`

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const SideBar = styled.aside`
  background-color: #e66767;
  z-index: 1;
  padding: 16px 8px 0 8px;
  max-width: 360px;
  width: 100%;
`

export const CartList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`

export const CartItem = styled.li`
  position: relative;
  max-width: 100%;
  width: 100%;
  margin: 0;
  display: flex;
  background-color: #ffebd9;
  margin-bottom: 16px;

  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    margin: 8px 8px 12px 8px;
  }

  h3 {
    color: #e66767;
    font-weight: bold;
    font-size: 18px;
    margin-top: 8px;
    margin-bottom: 16px;
  }

  span {
    display: block;
    color: #e66767;
    font-size: 14px;
  }
`

export const TrashIcon = styled.button`
  position: absolute;
  bottom: 16px;
  right: 16px;
  cursor: pointer;
  background: transparent;
  border: none;
  width: 16px;
  height: 16px;
  padding: 0;
  margin: 0;

  &:hover {
    opacity: 0.7;
  }

  img {
    width: 100%;
    height: 100%;
  }
`

export const Prices = styled.p`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-weight: bold;
  font-size: 14px;
  color: #ffebd9;
  margin-top: 32px;
  margin-bottom: 16px;

  span {
    display: flex;
    flex-wrap: wrap;
  }
`

export const Button = styled.button`
  max-width: 100%;
  width: 100%;
  background-color: #ffebd9;
  color: #e66767;
  border: none;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  padding: 4px 0;
  margin-bottom: 8px;
`
