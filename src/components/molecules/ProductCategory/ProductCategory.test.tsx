import { render, screen, fireEvent } from '~/utils/test-utils'

import ProductCategory from './index'
import { categoryOpts } from '~/constants'

describe('ProductCategory Component', () => {
  const mockOnGetList = jest.fn()

  const setup = (props = {}) => {
    return render(<ProductCategory onGetList={mockOnGetList} {...props} />)
  }

  it('should render all category tabs correctly', () => {
    setup()

    categoryOpts.forEach(({ label }) => {
      expect(screen.getByText(label)).toBeInTheDocument()
    })

    const defaultActiveTab = screen.getByText(categoryOpts[0].label)
    expect(defaultActiveTab.closest('.ant-tabs-tab-active')).toBeInTheDocument()
  })

  it('should call onGetList with the correct category key when a tab is clicked', () => {
    setup()

    const secondTab = screen.getByText(categoryOpts[1].label)
    fireEvent.click(secondTab)

    expect(mockOnGetList).toHaveBeenCalledWith(categoryOpts[1].value)
  })
})
