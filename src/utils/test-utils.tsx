import { RenderOptions, render as rtlRender } from '@testing-library/react'
import { ReactElement } from 'react'

function render(ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
  return rtlRender(ui, {
    ...options
  })
}

export * from '@testing-library/react'
export { render }
