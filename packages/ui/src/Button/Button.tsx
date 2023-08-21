import { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  //
}

export const Button: React.FC<ButtonProps> = (props) => {
  return <button {...props} />
}
