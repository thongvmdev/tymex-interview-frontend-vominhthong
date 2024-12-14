import { Ref, forwardRef } from 'react'
import { Button as AntdButton, ButtonProps as AntdProps } from 'antd'
import classNames from 'classnames'
import buttonStyles from './Button.module.scss'
import { ButtonColorType } from 'antd/es/button'

const colorMap: Record<string, string> = {
  secondary: buttonStyles.secondary,
  tertiary: buttonStyles.tertiary
}

interface ButtonProps extends Omit<AntdProps, 'color'> {
  color?: ButtonColorType | 'secondary' | 'tertiary'
}

const Button = (props: ButtonProps, ref: Ref<HTMLButtonElement>) => {
  const { className, children, color, loading, ...restProps } = props

  return (
    <AntdButton ref={ref} className={classNames(className, colorMap[color || ''])} loading={loading} {...restProps}>
      {!loading && children}
    </AntdButton>
  )
}

export default forwardRef(Button)
