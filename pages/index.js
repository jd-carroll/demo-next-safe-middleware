import Prose from 'components/Prose';
import Container from 'components/Container';
import Hydrated from 'components/Hydrated';

// pages without a data fetching function are static pages and must use a Hash-based CSP.
const Page = () => {
  return (
    <Container isCentered>
      <Prose>
        <h1>@next-safe/middleware demo </h1>
        <Hydrated />
        <p>
          A little demo project to showcase the usage and the hybrid
          strict-dynamic CSP support of the{' '}
          <a href="https://www.npmjs.com/package/@next-safe/middleware">
            @next-safe/middleware
          </a>{' '}
          package.
        </p>
        <h2>Prerendering strategies:</h2>
        <ul>
          <li>
            <a href="/gsp">Page with getStaticProps</a> (Hash-based)
          </li>
          <li>
            <a href="/gssp">Page with getServerSideProps</a> (Nonce-based)
          </li>
          <li>
            <a href="/isr/anyslug">
              Page with getStaticProps + <code>revalidate</code> (ISR)
            </a>{' '}
            (Hash-based)
          </li>
        </ul>
      </Prose>
    </Container>
  );
};

export default Page;
