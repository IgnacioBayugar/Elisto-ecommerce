import HelpHero from '../components/HelpHero';
import HelpGuides from '../components/HelpGuides';
import HelpFAQ from '../components/HelpFAQ';
import HelpContact from '../components/HelpContact';
import Section from '../../../components/Section/Section';
import Container from '../../../components/Container/Container';

export default function HelpPage() {
	return (
		<>
			<Section>
				<Container>
					<HelpHero />
					<HelpGuides />
				</Container>
			</Section>
			<Section>
				<Container>
					<div className="row g-4 align-items-center">
						<div className="col-12 col-md-6">
						<HelpFAQ />
						</div>
						<div className="col-12 col-md-6">
						<HelpContact />
						</div>
					</div>
				</Container>
			</Section>
		</>
	);
}
