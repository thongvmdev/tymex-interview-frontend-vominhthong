import classNames from 'classnames'
import { Input as AntdInput, InputProps as AntdInputProps } from 'antd'
import inputStyles from './Input.module.scss'

type InputProps = AntdInputProps

const Input = (props: InputProps) => {
  return <AntdInput {...props} className={classNames(inputStyles.wrapper, props.className)} />
}

export default Input
