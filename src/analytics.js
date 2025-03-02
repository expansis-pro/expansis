import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'

const analytics = Analytics({
    app: 'Expansis Pro',  // Reemplaza con el nombre de tu aplicación
    plugins: [
        {
            name: 'google-analytics',
            plugins: [
                googleAnalytics({
                    measurementIds: [process.env.REACT_APP_GA_MEASUREMENT_ID]
                })
            ]
        }
    ]
});

export default analytics;