import React from 'react'
import { Footer } from '../../components'
import { footer } from '../../json'

const FooterContainer = () => {
	return (
		<Footer>
			<Footer.Title>
				{ footer.title } <Footer.Call href={ `tel:${ footer.link }` }>{ footer.link }</Footer.Call>
			</Footer.Title>

			<Footer.Break />

			<Footer.Row>
				<Footer.Column>
					<Footer.Link href={ footer.col1[0].link }>{ footer.col1[0].text }</Footer.Link>
					<Footer.Link href={ footer.col1[1].link }>{ footer.col1[1].text }</Footer.Link>
					<Footer.Link href={ footer.col1[2].link }>{ footer.col1[2].text }</Footer.Link>
					<Footer.Link href={ footer.col1[3].link }>{ footer.col1[3].text }</Footer.Link>
					<Footer.Link href={ footer.col1[4].link }>{ footer.col1[4].text }</Footer.Link>
				</Footer.Column>

				<Footer.Column>
					<Footer.Link href={ footer.col2[0].link }>{ footer.col2[0].text }</Footer.Link>
					<Footer.Link href={ footer.col2[1].link }>{ footer.col2[1].text }</Footer.Link>
					<Footer.Link href={ footer.col2[2].link }>{ footer.col2[2].text }</Footer.Link>
					<Footer.Link href={ footer.col2[3].link }>{ footer.col2[3].text }</Footer.Link>
				</Footer.Column>

				<Footer.Column>
					<Footer.Link href={ footer.col3[0].link }>{ footer.col3[0].text }</Footer.Link>
					<Footer.Link href={ footer.col3[1].link }>{ footer.col3[1].text }</Footer.Link>
					<Footer.Link href={ footer.col3[2].link }>{ footer.col3[2].text }</Footer.Link>
					<Footer.Link href={ footer.col3[3].link }>{ footer.col3[3].text }</Footer.Link>
				</Footer.Column>

				<Footer.Column>
					<Footer.Link href={ footer.col4[0].link }>{ footer.col4[0].text }</Footer.Link>
					<Footer.Link href={ footer.col4[1].link }>{ footer.col4[1].text }</Footer.Link>
					<Footer.Link href={ footer.col4[2].link }>{ footer.col4[2].text }</Footer.Link>
					<Footer.Link href={ footer.col4[3].link }>{ footer.col4[3].text }</Footer.Link>
				</Footer.Column>
			</Footer.Row>
		</Footer>
	)
}


export default FooterContainer
