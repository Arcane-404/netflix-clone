import React, { useState, useContext, createContext }  from 'react'
import { Accordion } from '../../components'
import { faq } from '../../json'
import { Plus, Close } from '../../components/Icon'
// import { v4 as uuidv4 } from 'uuid'

const FaqContainer = () => {

	const [ currentIndex, setCurrentIndex ] = useState()

	return (
		<Accordion>
			<Accordion.Heading>Frequently Asked Questions</Accordion.Heading>
			<Accordion.Inner>

				{ faq.map( (info, i) => (
					<Accordion.Frame key={ i }>

						<Accordion.Header
							onClick= { () => {
								// console.log(i)
								setCurrentIndex(i)
								if ( currentIndex == i ) {
									setCurrentIndex(null)
								}
							} }
						>
							<Accordion.Title> { info.header }</Accordion.Title>
							{ currentIndex == i && <Accordion.Toggle> <Close /> </Accordion.Toggle> }
							{ currentIndex !== i && <Accordion.Toggle> <Plus />  </Accordion.Toggle> }
						</Accordion.Header>

						{ currentIndex == i &&
							<Accordion.Body>
								<Accordion.Content> { info.top_content } </Accordion.Content>
								<Accordion.Content> { info.bottom_content } </Accordion.Content>
							</Accordion.Body>
						}

					</Accordion.Frame>
				))}




			</Accordion.Inner>
		</Accordion>
	)
}

export default FaqContainer
