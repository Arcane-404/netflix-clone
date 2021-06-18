import React, { useState }  from 'react'
import { v4 as uuid } from 'uuid'
import { Accordion } from '../../components'
import { Plus, Close } from '../../components/Icon'
import { faq } from '../../json'

const FaqContainer = () => {

	const [ currentIndex, setCurrentIndex ] = useState()

	return (
		<Accordion>
			<Accordion.Heading>{ faq.heading }</Accordion.Heading>
			<Accordion.Inner>
				{ faq.accordion.map( (info, i) => (
					<Accordion.Frame key={ uuid() }>
						<Accordion.Header
							onClick= { () => {
								if (currentIndex === i) setCurrentIndex(null)
								else setCurrentIndex(i)
							} }
						>
							<Accordion.Title> { info.title }</Accordion.Title>
							{ currentIndex === i && <Accordion.Toggle> <Close /> </Accordion.Toggle> }
							{ currentIndex !== i && <Accordion.Toggle> <Plus /> </Accordion.Toggle> }
						</Accordion.Header>

						{ currentIndex === i && (
							<Accordion.Body>
								<Accordion.Content> { info.top_content } </Accordion.Content>
								<Accordion.Content> { info.bottom_content } </Accordion.Content>
							</Accordion.Body>
						)}
					</Accordion.Frame>
				))}
			</Accordion.Inner>
		</Accordion>
	)
}

export default FaqContainer
