import React from 'react'
import { Typography } from '../primitives'

interface Route {
  title: string
  href: string
}

const routes = [
  { title: 'Home', href: '/' },
  { title: 'About', href: '/about' },
  { title: 'Contact', href: '/contact' }
]

const Header = (): React.ReactElement => (
  <div className="w-full flex items-center h-16 border-b border-gray-200">
    <Typography variant="h6" weight="medium">Site Title</Typography>
    {
      routes.map(({ title, href }: Route, i) => (
        <div className="mr-2" key={i}>
        </div>
      ))
    }
  </div>
)

export default Header
