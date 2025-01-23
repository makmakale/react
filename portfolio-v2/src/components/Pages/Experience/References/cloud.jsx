import {
  ReferenceName, ReferencesGrid, ReferenceTitle, SectionTitle,
} from '@/common/components/Experience';
import { cloudReferences } from '@/common/constants/references';

function ReferencesCloud() {
  return (
    <>
      <SectionTitle>References:</SectionTitle>
      <ReferencesGrid>
        {cloudReferences.map((reference) => (
          <div key={reference.name}>
            <ReferenceName>{reference.name}</ReferenceName>
            <ReferenceTitle>{reference.title}</ReferenceTitle>
            <a href={reference.link} target="_blank" rel="noopener noreferrer">
              linkedin.com
            </a>
          </div>
        ))}
      </ReferencesGrid>
    </>
  );
}

export default ReferencesCloud;
