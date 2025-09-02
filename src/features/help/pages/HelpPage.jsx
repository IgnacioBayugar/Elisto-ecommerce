import HelpHero from '../components/HelpHero';
import HelpGuides from '../components/HelpGuides';
import HelpFAQ from '../components/HelpFAQ';
import HelpContact from '../components/HelpContact';

export default function HelpPage() {
	return (
		<div className="idb-help-page">
			<HelpHero />
			<HelpGuides />
			<HelpFAQ />
			<HelpContact />
		</div>
	);
}
