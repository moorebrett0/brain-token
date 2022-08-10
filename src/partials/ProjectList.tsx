import {
  ColorTags,
  GradientText,
  Project,
  Section,
  Tags,
} from 'astro-boilerplate-components';

const ProjectList = () => (
  <Section
    title={
      <>
        Upcoming <GradientText>Projects</GradientText>
      </>
    }
  >
    <div className="flex flex-col gap-6">
      <Project
        name="Brain Trust Wallet"
        description="Now you can have a space to safely store your BWT (Brain Token)!"
        link="/"
        img={{
          src: '/assets/images/wallet-svgrepo-com.svg',
          alt: 'Wallet Release',
        }}
        category={
          <>
            <Tags color={ColorTags.FUCHSIA}>2022</Tags>
            <Tags color={ColorTags.LIME}>Funded</Tags>
            <Tags color={ColorTags.TEAL}>In Development</Tags>
          </>
        }
      />
      <Project
        name="Brain Mobile App"
        description="Mobile Application for Brain teasers and puzzles"
        link="/"
        img={{ src: '/assets/images/smartphone.svg', alt: 'Mobile App' }}
        category={
          <>
            <Tags color={ColorTags.VIOLET}>2023</Tags>
            <Tags color={ColorTags.EMERALD}>Seeking funding</Tags>
            <Tags color={ColorTags.YELLOW}>Planning</Tags>
          </>
        }
      />
    </div>
  </Section>
);

export { ProjectList };
