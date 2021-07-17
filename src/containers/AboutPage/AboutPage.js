import React from 'react';
import config from '../../config';
import { twitterPageURL } from '../../util/urlHelpers';
import { StaticPage, TopbarContainer } from '../../containers';
import {
  LayoutSingleColumn,
  LayoutWrapperTopbar,
  LayoutWrapperMain,
  LayoutWrapperFooter,
  Footer,
  ExternalLink,
} from '../../components';

import css from './AboutPage.module.css';
import image from './about-us-1056.jpg';

const AboutPage = () => {
  const { siteTwitterHandle, siteFacebookPage } = config;
  const siteTwitterPage = twitterPageURL(siteTwitterHandle);

  // prettier-ignore
  return (
    <StaticPage
      title="About Us"
      schema={{
        '@context': 'http://schema.org',
        '@type': 'AboutPage',
        description: 'About Storganize',
        name: 'About page',
      }}
    >
      <LayoutSingleColumn>
        <LayoutWrapperTopbar>
          <TopbarContainer />
        </LayoutWrapperTopbar>

        <LayoutWrapperMain className={css.staticPageWrapper}>
          <h1 className={css.pageTitle}>Experience the unique Finnish home storage unit.</h1>
          <img className={css.coverImage} src={image} alt="My first ice cream." />

          <div className={css.contentWrapper}>
            <div className={css.contentSide}>
              <p>Did you know that Finland has 3.2 million storage units - almost one storage unit per person!</p>
            </div>

            <div className={css.contentMain}>
              <h2>
                Most of the Finnish storage units are located at the homes of individuals - indeed, most
                people in Finland live in an apartment with storage unit in it. In addition, lots of people
                have lakeside summer cottages, which also typically come with a separate storage unit
                building near the waterfront.
              </h2>

              <p>
                To truly experience a Finnish storage unit, you need to look beyond the public storage units, and
                instead visit a real home or cottage storage unit. Storganize makes this possible for
                everyone. All our storage units are owned by individuals willing to let tourists and other
                curious visitors to enter their sacred spaces.
              </p>

              <h3 className={css.subtitle}>Are you a storage unit owner?</h3>

              <p>
                Storganize offers you a good way to earn some extra cash! If you're not using your
                storage unit every evening, why not rent it to other people while it's free. And even if
                you are using your storage unit every evening (we understand, it's so good), why not invite
                other people to join you when the storage unit is already warm! A shared storage unit experience
                is often a more fulfilling one.
              </p>

              <h3 id="contact" className={css.subtitle}>
                Create your own marketplace like Storganize
              </h3>
              <p>
                Storganize is brought to you by the good folks at{' '}
                <ExternalLink href="http://sharetribe.com">Sharetribe</ExternalLink>. Would you like
                to create your own marketplace platform a bit like Storganize? Or perhaps a mobile
                app? With Sharetribe it's really easy. If you have a marketplace idea in mind, do
                get in touch!
              </p>
              <p>
                You can also checkout our{' '}
                <ExternalLink href={siteFacebookPage}>Facebook</ExternalLink> and{' '}
                <ExternalLink href={siteTwitterPage}>Twitter</ExternalLink>.
              </p>
            </div>
          </div>
        </LayoutWrapperMain>

        <LayoutWrapperFooter>
          <Footer />
        </LayoutWrapperFooter>
      </LayoutSingleColumn>
    </StaticPage>
  );
};

export default AboutPage;
