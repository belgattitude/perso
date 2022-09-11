import { HttpBadRequest } from '@belgattitude/http-exception';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Carousel } from '@/components/carousel';
import { homeConfig } from '@/features/home/home.config';

type Props = {
  /** Add props here */
};

export default function HomePageRoute(
  _props: InferGetStaticPropsType<typeof getStaticProps>
) {
  const slides = [
    'https://www.embla-carousel.com/static/slide-1-ae1074a2ded156f4bb23fc2cbf269223.jpg',
    'https://www.embla-carousel.com/static/slide-2-4a3fdf56a1fd7125dc80f4574dae6bbf.jpg',
  ];
  return (
    <div>
      <Carousel slides={slides} />
    </div>
  );
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const { locale } = context;
  if (locale === undefined) {
    throw new HttpBadRequest('locale is missing');
  }
  return {
    props: {
      ...(await serverSideTranslations(locale, homeConfig.i18nNamespaces)),
    },
  };
};
