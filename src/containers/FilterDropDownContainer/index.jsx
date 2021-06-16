import React from 'react'
import { DropDown } from '../../components'
import { useEventListener } from '../../hooks'

const FilterDropDownContainer = ({ isOpen, setOpen }) => {

	const closeDropDown = (e) => {
		if (isOpen && !e.target.closest('[data-dropdown]')) return setOpen(false)
	}

	useEventListener('click', closeDropDown)

	return (
		<DropDown filtered data-dropdown>
			<DropDown.ListOne>
				<DropDown.Option bold>TV Shows</DropDown.Option>
				<DropDown.Option bold>Movies</DropDown.Option>
			</DropDown.ListOne>

			{/* <DropDown.Line vertical /> */}

			{/* <DropDown.ListTwo>
				<DropDown.Option>ITEM</DropDown.Option>
			</DropDown.ListTwo> */}
		</DropDown>
	)
}

export default FilterDropDownContainer
