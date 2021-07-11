export const routes = [
    {
        path: '/',
        name: 'MainWeather',
        component: () => import('@/views/MainWeather.vue')
    },
    {
        path: '/detail-weather',
        name: 'DetailedInformationAboutWeather',
        component: () => import('@/views/DetailedWeather.vue')
    }
]