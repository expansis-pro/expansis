import Analytics from 'analytics'
import googleAnalytics from '@analytics/google-analytics'

// Inicializamos el objeto SIEMPRE para evitar crasheos por llamadas a métodos inexistentes
const analytics = Analytics({
    app: 'Expansis Pro',
    plugins: window.__snapshot
        ? [] // Si es react-snap, no cargamos ningún plugin (frena llamadas externas)
        : [
            // Si es producción real, cargamos Google Analytics de forma directa
            googleAnalytics({
                measurementIds: [process.env.REACT_APP_GA_MEASUREMENT_ID]
            })
        ]
});

export default analytics;