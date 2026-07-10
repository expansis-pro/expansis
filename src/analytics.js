import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'

// Inicializamos el objeto SIEMPRE para evitar crasheos por llamadas a métodos inexistentes
const analytics = Analytics({
    app: 'Expansis Pro',
    // Usamos la propiedad nativa explicada en la documentación
    plugins: navigator.userAgent === "ReactSnap"
        ? []
        : [
            googleAnalytics({
                measurementIds: [process.env.REACT_APP_GA_MEASUREMENT_ID]
            })
        ]
});

export default analytics;