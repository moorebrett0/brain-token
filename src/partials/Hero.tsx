import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          <GradientText>Brain</GradientText> 🧠
        </>
      }
      description={
        <>
          Brain was created by{' '}
          <a
            className="text-cyan-400 hover:underline"
            href="https://brilliancenw.com"
          >
            nerds
          </a>
          , for{' '}
          <a
            className="text-cyan-400 hover:underline"
            href="https://act.alz.org/"
          >
            research.
          </a>{' '}
          We invite you to collect{' '}
          <a
            className="text-cyan-400 hover:underline"
            href="https://etherscan.io/token/0x2788F04C4b319Fc620E35A878E7Fbe0c6B1064D5"
          >
            Brain Token
          </a>{' '}
          to participate in our brain teasers and puzzles.
        </>
      }
      avatar={
        <img
          className="w-90 h-80"
          src="/assets/images/brain.png"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://twitter.com/the_brain_token">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter icon"
            />
          </a>
          <a href="https://discord.gg/BcyT2DEcr4">
            <HeroSocial src="/assets/images/discord.svg" alt="Discord icon" />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
