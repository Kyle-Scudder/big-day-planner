import { type NextPage } from 'next'
import { type ComponentType, type ReactElement, type ReactNode } from 'react'

export type Page<P = object> = NextPage<P> & {
  // You can disable whichever you don't need
  getLayout?: (page: ReactElement) => ReactNode
  layout?: ComponentType
}