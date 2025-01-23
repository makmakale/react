import {
  ReferenceName, ReferencesGrid, ReferenceTitle, SectionTitle,
} from '@/common/components/Experience';
import { klikaReferences } from '@/common/constants/references';

function ReferencesKlika() {
  return (
    <>
      <SectionTitle>References:</SectionTitle>
      <ReferencesGrid>
        {klikaReferences.map((reference) => (
          <div key={reference.name}>
            <ReferenceName>{reference.name}</ReferenceName>
            <ReferenceTitle>{reference.title}</ReferenceTitle>
            <p>Project: {reference.project}</p>
            <a href={reference.link} target="_blank" rel="noopener noreferrer">
              linkedin.com
            </a>
          </div>
        ))}
      </ReferencesGrid>
    </>
  );
}

export default ReferencesKlika;
