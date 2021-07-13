export const routes = [
    {
        path: '/',
        name: 'MainWeather',
        component: () => import('@/views/MainWeather.vue')
    },
    {
        path: '/detail-weather',
        name: 'DetailedInformationAboutWeather',
        component: () => import('@/views/DetailedWeather.vue'),
        props: route => ({ 
            city:  route.query.city 
        })
    } , 
    {
        path: '/:notFound(.*)' , 
        name: 'NotFound' ,
        redirect: '/'
    },
]