// eslint-disable-next-line import/prefer-default-export
export const routes = [
  {
    path: '/',
    name: 'MainWeather',
    component: () => import('@/views/MainWeather'),
  },
  {
    path: '/detail-weather',
    name: 'DetailedInformationAboutWeather',
    component: () => import('@/views/DetailedWeather'),
    props: (route) => ({
      city: route.query.city,
    }),
  },
  {
    path: '/:notFound(.*)',
    name: 'NotFound',
    redirect: '/',
  },
];
