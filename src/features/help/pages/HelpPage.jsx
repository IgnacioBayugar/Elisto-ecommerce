import HelpHero from '../components/HelpHero';
import HelpGuides from '../components/HelpGuides';
import HelpFAQ from '../components/HelpFAQ';
import HelpContact from '../components/HelpContact';
import Section from '../../../components/Section/Section';

export default function HelpPage() {
	return (
		<>
			<Section>
				<HelpHero />
				<HelpGuides />
			</Section>
			<Section>
				<div className="container-fluid">
					<div className="row g-4 align-items-center">
						<div className="col-12 col-md-6">
						<HelpFAQ />
						</div>
						<div className="col-12 col-md-6">
						<HelpContact />
						</div>
					</div>
				</div>
			</Section>
		</>
	);
}
