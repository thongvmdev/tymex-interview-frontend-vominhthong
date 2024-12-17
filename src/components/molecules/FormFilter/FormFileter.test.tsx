import { render, screen, fireEvent, waitFor } from '~/utils/test-utils'
import FormFilter from './index'
import { Form } from 'antd'

const mockOnGetList = jest.fn()

describe('FormFilter', () => {
  let mockResetFields: jest.SpyInstance
  afterEach(() => {
    jest.clearAllMocks()
  })

  const FormFilterWrapper = () => {
    const [form] = Form.useForm()
    mockResetFields = jest.spyOn(form, 'resetFields')

    return <FormFilter form={form} onGetList={mockOnGetList} />
  }

  it('renders correctly', () => {
    render(<FormFilterWrapper />)

    expect(screen.getByPlaceholderText('Quick Search')).toBeInTheDocument()
    expect(screen.getByLabelText('PRICE')).toBeInTheDocument()
    expect(screen.getByLabelText('TIER')).toBeInTheDocument()
    expect(screen.getByLabelText('THEME')).toBeInTheDocument()
    expect(screen.getByLabelText('TIME')).toBeDisabled()
    expect(screen.getByLabelText('PRICE')).toBeInTheDocument()
    expect(screen.getByText('Reset Filter')).toBeInTheDocument()
    expect(screen.getByText('Search')).toBeInTheDocument()
  })

  it('should call onGetList when the form is submitted', async () => {
    render(<FormFilterWrapper />)

    const submitButton = screen.getByText('Search')
    fireEvent.click(submitButton)

    await waitFor(() => expect(mockOnGetList).toHaveBeenCalledTimes(1))
  })

  it('should trigger form.resetFields and onGetList when click Reset Filter button', async () => {
    render(<FormFilterWrapper />)

    fireEvent.click(screen.getByText('Reset Filter'))

    expect(mockResetFields).toHaveBeenCalledTimes(1)
    expect(mockOnGetList).toHaveBeenCalledTimes(1)
  })
})
