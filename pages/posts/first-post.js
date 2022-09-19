import Head from 'next/head';
import Layout from '../../components/layout';
import Link from 'next/link';
import Table from '../../components/table';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1><Table /></h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
