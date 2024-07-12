'use client'

import React from 'react'

import { LayoutContext } from '../wrapper'

import { FullSidebar } from './FullSidebar'
import { MiniSidebar } from './MiniSidebar'
import { NavGroup } from './NavGroup'
import { NavLink } from './NavLink'
import './sidebar.css'

interface SidebarProps {}

const Sidebar = ({}: SidebarProps) => {
	const { compact: compactMode } = React.useContext(LayoutContext)
	return compactMode ? <MiniSidebar /> : <FullSidebar />
}
export default Sidebar

Sidebar.NavGroup = NavGroup
Sidebar.NavLink = NavLink